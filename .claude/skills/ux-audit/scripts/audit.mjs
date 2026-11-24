// Audyt UX: zrzuty ekranów ścieżki persony i testy automatyczne.
//   node audit.mjs discover <url> [--max 30]        spis ekranów serwisu
//   node audit.mjs run <plan.json> [--out katalog]  przejście ścieżki, zrzuty, testy, szkic wyników
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
let chromium, axeSource;
try {
  ({ chromium } = await import('playwright-core'));
  axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
} catch {
  console.error(`Brak zależności. Uruchom: npm install --prefix "${HERE}"`);
  process.exit(2);
}
const CHECKLIST = JSON.parse(fs.readFileSync(path.join(HERE, '..', 'references', 'checklist.json'), 'utf8'));
const [cmd, target, ...rest] = process.argv.slice(2);
const opt = (n, d) => { const i = rest.indexOf('--' + n); return i < 0 ? d : rest[i + 1]; };
const VIEW = {
  desktop: { viewport: { width: 1440, height: 900 } },
  mobile: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};

async function launch() {
  for (const o of [{ executablePath: process.env.CHROME_PATH }, { channel: 'chrome' }, { channel: 'msedge' }, {}]) {
    if ('executablePath' in o && !o.executablePath) continue;
    try { return await chromium.launch({ headless: true, ...o }); } catch { /* następna przeglądarka */ }
  }
  console.error('Nie znaleziono Chrome ani Edge. Ustaw CHROME_PATH albo uruchom: npx playwright-core install chromium');
  process.exit(2);
}
const toUrl = (u) => /^(https?|file):/.test(u) ? u : fs.existsSync(u) ? 'file:///' + path.resolve(u).replace(/\\/g, '/') : 'https://' + u;

// ---------- testy w stronie ----------
function pageChecks() {
  const R = {};
  const vis = (e) => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.01 && !e.closest('[aria-hidden="true"]'); };
  const sel = (e) => { if (e.id) return '#' + e.id; const c = [...e.classList].slice(0, 2).join('.'); const p = e.parentElement; return (p && p !== document.body ? (p.id ? '#' + p.id : p.tagName.toLowerCase()) + ' > ' : '') + e.tagName.toLowerCase() + (c ? '.' + c : ''); };
  const txt = (e) => (e.innerText || e.getAttribute('aria-label') || e.value || '').replace(/\s+/g, ' ').trim();
  const add = (rule, status, items) => { R[rule] = { status: items.length ? status : 'pass', items: items.slice(0, 25), count: items.length }; };
  const it = (e, d) => ({ sel: sel(e), detail: d || txt(e).slice(0, 80) });
  const q = (s) => [...document.querySelectorAll(s)].filter(vis);

  const t = document.title.trim();
  add('x:title', 'fail', !t ? [{ sel: 'title', detail: 'pusty' }] : t.length > 70 ? [] : []);
  R['x:title'].value = t;
  const h1 = q('h1');
  add('x:h1', 'warn', h1.length === 1 ? [] : [{ sel: 'h1', detail: `liczba nagłówków h1: ${h1.length}` }]);

  const links = q('a');
  add('x:deadlinks', 'fail', [
    ...links.filter((a) => a.hasAttribute('href') && (['', '#', '#!'].includes(a.getAttribute('href').trim()) || /^javascript:/i.test(a.getAttribute('href')) || (a.getAttribute('href').startsWith('#') && a.hash.length > 1 && !['top'].includes(a.hash.slice(1)) && !document.getElementById(decodeURIComponent(a.hash.slice(1)))))).map((a) => it(a, `${a.getAttribute('href') || '(pusty)'} „${txt(a).slice(0, 50)}”`)),
  ]);
  const GEN = /^(kliknij( tutaj)?|tutaj|tu|więcej|czytaj (więcej|dalej)|zobacz( więcej)?|dowiedz się więcej|sprawdź|link|here|click here|more|read more|learn more|see more)[.:…»→>\s]*$/i;
  add('x:genericlinks', 'warn', links.filter((a) => GEN.test((a.getAttribute('aria-label') || txt(a)).trim())).map((a) => it(a)));
  add('x:newtab', 'warn', links.filter((a) => a.target === '_blank' && !/now(ej|a|ym)|new (tab|window)/i.test(txt(a) + (a.getAttribute('aria-label') || '') + a.title)).map((a) => it(a)));
  const navs = q('nav, [role="navigation"]');
  const navLinks = navs[0] ? [...navs[0].querySelectorAll('a')] : [];
  R['x:nav'] = { status: innerWidth < 1000 ? 'info' : navLinks.filter(vis).length >= 3 ? 'pass' : 'warn', items: innerWidth >= 1000 && navLinks.filter(vis).length < 3 ? [{ sel: 'nav', detail: `widoczne linki w pierwszym nav: ${navLinks.filter(vis).length}` }] : [], menu: navLinks.filter(vis).map(txt) };
  add('x:current', 'warn', navLinks.length >= 3 && !document.querySelector('nav [aria-current]') ? [{ sel: 'nav', detail: 'brak aria-current w nawigacji' }] : []);
  const focusables = [...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')].filter((e) => e.tabIndex >= 0 && !e.disabled);
  const first = focusables[0];
  const skipOk = first && first.tagName === 'A' && first.hash && document.getElementById(first.hash.slice(1));
  add('x:skiplink', 'warn', skipOk ? [] : [{ sel: first ? sel(first) : 'body', detail: 'pierwszy fokusowalny element nie jest linkiem do treści' }]);

  // typografia
  const paras = q('p, li, dd, blockquote, td').filter((e) => [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 40));
  const cs = (e) => getComputedStyle(e);
  add('x:fontsize', 'warn', paras.filter((e) => parseFloat(cs(e).fontSize) < 16).map((e) => it(e, `${cs(e).fontSize} „${txt(e).slice(0, 40)}”`)));
  add('x:lineheight', 'warn', paras.filter((e) => txt(e).length > 120 && cs(e).lineHeight !== 'normal' && parseFloat(cs(e).lineHeight) / parseFloat(cs(e).fontSize) < 1.4).map((e) => it(e, `line-height ${cs(e).lineHeight} przy ${cs(e).fontSize}`)));
  const perLine = (e) => {
    const range = document.createRange(); range.selectNodeContents(e);
    const tops = new Set([...range.getClientRects()].filter((r) => r.width > 2).map((r) => Math.round(r.top / 8)));
    return tops.size > 1 ? Math.round(txt(e).length / tops.size) : 0;
  };
  add('x:linelength', 'warn', paras.filter((e) => txt(e).length > 160 && !e.querySelector('p,li,div')).map((e) => [e, perLine(e)]).filter(([, n]) => n > 90).map(([e, n]) => it(e, `ok. ${n} znaków w wierszu`)));
  add('x:justify', 'fail', paras.filter((e) => cs(e).textAlign === 'justify' || (cs(e).textAlign === 'center' && txt(e).length > 200)).map((e) => it(e, `text-align: ${cs(e).textAlign}`)));
  add('x:caps', 'warn', [...paras.filter((e) => cs(e).fontStyle === 'italic'), ...q('p,h1,h2,h3,li').filter((e) => (cs(e).textTransform === 'uppercase' || /^[^a-ząćęłńóśźż]{25,}$/.test(txt(e))) && txt(e).length > 25 && /[A-ZĄĆĘŁŃÓŚŹŻ]{6}/i.test(txt(e)))].map((e) => it(e, (cs(e).fontStyle === 'italic' ? 'kursywa: ' : 'wersaliki: ') + txt(e).slice(0, 50))));

  // formularze
  const fields = q('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=reset]):not([type=image]), select, textarea');
  add('x:placeholderonly', 'fail', fields.filter((f) => f.placeholder && !(f.labels && [...f.labels].some((l) => vis(l) && txt(l))) && !f.getAttribute('aria-labelledby')).map((f) => it(f, `placeholder „${f.placeholder}” bez widocznej etykiety`)));
  const want = [[/e-?mail/i, 'email'], [/telefon|phone|tel\b/i, 'tel'], [/(^|\W)imi[eę]|first.?name/i, 'given-name'], [/nazwisko|last.?name/i, 'family-name'], [/kod.?pocztowy|postal|zip/i, 'postal-code'], [/ulica|adres(?!.*mail)|street/i, 'street-address'], [/has[łl]o|password/i, 'current-password / new-password']];
  add('x:autocomplete', 'warn', fields.filter((f) => f.tagName !== 'SELECT' && !['checkbox', 'radio', 'search', 'file', 'range'].includes(f.type)).map((f) => { const n = [f.name, f.id, ...[...(f.labels || [])].map(txt)].join(' '); const w = want.find(([r]) => r.test(n)); return w && (!f.autocomplete || f.autocomplete === 'on' || f.autocomplete === 'off') ? it(f, `brak autocomplete="${w[1]}"`) : null; }).filter(Boolean));
  add('x:prefillederror', 'warn', [...fields.filter((f) => f.getAttribute('aria-invalid') === 'true').map((f) => it(f, 'aria-invalid="true" przed interakcją')), ...q('[role=alert]').filter((e) => txt(e)).map((e) => it(e, 'alert widoczny: ' + txt(e).slice(0, 60)))]);
  add('x:disabledsubmit', 'fail', q('button[disabled], input[type=submit][disabled]').map((e) => it(e)));
  add('x:reset', 'fail', q('input[type=reset], button[type=reset]').map((e) => it(e)));
  add('x:preselected', 'fail', q('input[type=checkbox]').filter((e) => e.defaultChecked).map((e) => it(e, 'zaznaczone domyślnie: ' + [...(e.labels || [])].map(txt).join(' ').slice(0, 60))));
  add('x:paste', 'fail', fields.filter((f) => ['password', 'email', 'text'].includes(f.type)).filter((f) => { const ev = new Event('paste', { bubbles: true, cancelable: true }); try { ev.clipboardData = { getData: () => '', types: [] }; } catch { /* tylko odczyt */ } f.dispatchEvent(ev); return ev.defaultPrevented; }).map((f) => it(f, 'wklejanie zablokowane')));

  // semantyka, media, ruch
  add('x:fakebuttons', 'fail', [...q('div[onclick],span[onclick],li[onclick],img[onclick]').map((e) => it(e)), ...q('a:not([href])').filter((e) => txt(e) && !e.id && !e.name).map((e) => it(e, 'a bez href: ' + txt(e).slice(0, 50))), ...q('div,span').filter((e) => cs(e).cursor === 'pointer' && cs(e.parentElement).cursor !== 'pointer' && !e.closest('a,button,label,summary,select,[role=button],[role=link],[role=tab],[role=menuitem],[role=option],[tabindex]') && !e.querySelector('a,button,input,select,label')).map((e) => it(e, 'cursor: pointer bez roli: ' + txt(e).slice(0, 40)))]);
  const media = [...document.querySelectorAll('video,audio')];
  add('x:video', 'fail', media.filter((m) => m.tagName === 'VIDEO' && !m.muted && !m.querySelector('track[kind=captions],track[kind=subtitles]')).map((m) => it(m, 'wideo bez ścieżki napisów')));
  add('x:autoplay', 'fail', [...media.filter((m) => m.autoplay && !m.muted), ...[...document.querySelectorAll('iframe')].filter((f) => /autoplay=1/.test(f.src) && !/mute=1|muted=1/.test(f.src))].map((m) => it(m, 'autoplay')));
  const anims = document.getAnimations ? document.getAnimations().filter((a) => a.playState === 'running' && a.effect && a.effect.target && a.effect.getComputedTiming().activeDuration > 5000) : [];
  add('x:animation', 'warn', [...anims.map((a) => it(a.effect.target, 'animacja dłuższa niż 5 s')), ...media.filter((m) => m.tagName === 'VIDEO' && m.autoplay && !m.controls).map((m) => it(m, 'wideo w tle bez kontroli'))]);
  const maxT = (s) => Math.max(0, ...s.split(',').map((x) => x.includes('ms') ? parseFloat(x) : parseFloat(x) * 1000));
  add('x:transition', 'warn', q('a,button,nav,nav *,dialog,[role=dialog],details,details *').filter((e) => maxT(cs(e).transitionDuration) > 500).map((e) => it(e, 'przejście ' + cs(e).transitionDuration)));
  add('x:imgdims', 'warn', q('img').filter((i) => !(i.getAttribute('width') && i.getAttribute('height')) && cs(i).aspectRatio === 'auto').map((i) => it(i, (i.currentSrc || i.src).slice(0, 90))));
  const ff = []; for (const s of document.styleSheets) { try { for (const r of s.cssRules) if (r.type === 5 && r.style.getPropertyValue('src').includes('url(') && !['swap', 'optional', 'fallback'].includes(r.style.getPropertyValue('font-display'))) ff.push({ sel: '@font-face', detail: r.style.getPropertyValue('font-family') }); } catch { /* arkusz z innej domeny */ } }
  add('x:fontdisplay', 'warn', ff);
  add('x:target44', 'warn', innerWidth > 700 ? [] : q('button,input:not([type=checkbox]):not([type=radio]):not([type=hidden]),select,nav a,[role=button],summary').filter((e) => { const r = e.getBoundingClientRect(); return r.height < 44 || (r.width < 44 && e.tagName !== 'A'); }).map((e) => { const r = e.getBoundingClientRect(); return it(e, `${Math.round(r.width)}×${Math.round(r.height)} px „${txt(e).slice(0, 30)}”`); }));
  add('x:https', 'fail', location.protocol === 'http:' && !/^(localhost|127\.|\[::1\])/.test(location.hostname) ? [{ sel: 'location', detail: location.href }] : []);
  if (location.protocol === 'file:') R['x:https'].status = 'info';
  R.links = [...new Set(links.map((a) => a.href).filter((h) => /^https?:/.test(h)))];
  return R;
}

async function focusWalk(page) {
  await page.evaluate(() => {
    const K = ['outlineStyle', 'outlineWidth', 'outlineColor', 'boxShadow', 'borderTopColor', 'borderTopWidth', 'borderBottomColor', 'borderBottomWidth', 'backgroundColor', 'color', 'textDecorationLine', 'textDecorationThickness', 'transform', 'filter'];
    window.__snap = (e) => { const s = getComputedStyle(e); const o = Object.fromEntries(K.map((k) => [k, s[k]])); if (o.outlineStyle === 'none' || o.outlineWidth === '0px') { o.outlineStyle = 'none'; o.outlineWidth = '0px'; o.outlineColor = ''; } return JSON.stringify(o); };
    if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
    scrollTo(0, 0);
    window.__pre = new Map([...document.querySelectorAll('a[href],button,input,select,textarea,summary,[tabindex],iframe,video')].map((e) => [e, window.__snap(e)]));
    window.__seen = new Map();
  });
  const seq = [];
  for (let i = 0; i < 80; i++) {
    await page.keyboard.press('Tab');
    const r = await page.evaluate(() => {
      const e = document.activeElement;
      if (!e || e === document.body || e === document.documentElement) return { end: true };
      const n = (window.__seen.get(e) || 0) + 1; window.__seen.set(e, n);
      const b = e.getBoundingClientRect();
      const pts = [[.5, .5], [.1, .2], [.9, .2], [.1, .8], [.9, .8]].map(([x, y]) => document.elementFromPoint(b.left + b.width * x, b.top + b.height * y)).filter(Boolean);
      const sticky = (x) => { for (; x; x = x.parentElement) if (['fixed', 'sticky'].includes(getComputedStyle(x).position)) return true; return false; };
      const hid = pts.length > 0 && pts.every((p) => !e.contains(p) && !p.contains(e) && sticky(p));
      const visual = b.width > 2 && b.height > 2 && +getComputedStyle(e).opacity > 0.05;
      return { again: n > 1, changed: !window.__pre.has(e) || window.__pre.get(e) !== window.__snap(e), hid, visual, sel: e.id ? '#' + e.id : e.tagName.toLowerCase() + (e.classList[0] ? '.' + e.classList[0] : ''), detail: (e.innerText || e.getAttribute('aria-label') || e.name || '').replace(/\s+/g, ' ').trim().slice(0, 50) };
    });
    if (r.end) { if (i === 0) continue; break; }
    if (r.again) { seq.loop = r.sel; break; }
    seq.push(r);
  }
  const total = await page.evaluate(() => [...document.querySelectorAll('a[href],button,input,select,textarea,summary')].filter((e) => e.tabIndex >= 0 && !e.disabled && e.type !== 'hidden' && e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden').length);
  await page.evaluate(() => { document.activeElement?.blur?.(); scrollTo(0, 0); });
  const pick = (f) => seq.filter(f).map(({ sel, detail }) => ({ sel, detail }));
  const nf = pick((x) => !x.changed && x.visual), ob = pick((x) => x.hid);
  return {
    'x:focusvisible': { status: nf.length ? 'warn' : 'pass', items: nf.slice(0, 25), count: nf.length },
    'x:focusobscured': { status: ob.length ? 'warn' : 'pass', items: ob.slice(0, 25), count: ob.length },
    'x:keyboard': { status: seq.loop && seq.length < Math.min(total, 80) * 0.5 ? 'warn' : 'pass', items: seq.loop && seq.length < Math.min(total, 80) * 0.5 ? [{ sel: seq.loop, detail: `fokus zapętla się po ${seq.length} z ${total} elementów` }] : [], order: seq.map((x) => `${x.sel} ${x.detail}`.trim()), reached: seq.length, total },
  };
}

async function spacingCheck(page) {
  const clipped = () => [...document.querySelectorAll('body *')].filter((e) => { const s = getComputedStyle(e); return e.innerText && e.clientHeight > 4 && e.clientWidth > 4 && ((['hidden', 'clip'].includes(s.overflowY) && e.scrollHeight > e.clientHeight + 3) || (['hidden', 'clip'].includes(s.overflowX) && e.scrollWidth > e.clientWidth + 3)); }).map((e) => { if (!e.dataset.uxaid) e.dataset.uxaid = Math.random().toString(36).slice(2); return { k: e.dataset.uxaid, sel: e.id ? '#' + e.id : e.tagName.toLowerCase() + (e.classList[0] ? '.' + e.classList[0] : ''), detail: e.innerText.replace(/\s+/g, ' ').slice(0, 50) }; });
  const before = new Set((await page.evaluate(clipped)).map((x) => x.k));
  const st = await page.addStyleTag({ content: '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}' });
  const bad = (await page.evaluate(clipped)).filter((x) => !before.has(x.k)).map(({ sel, detail }) => ({ sel, detail }));
  await st.evaluate((e) => e.remove());
  return { 'x:textspacing': { status: bad.length ? 'warn' : 'pass', items: bad.slice(0, 25), count: bad.length } };
}

async function reflowCheck(page, vp) {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.waitForTimeout(300);
  const r = await page.evaluate(() => { const w = document.documentElement.scrollWidth; return { w, items: w > 321 ? [...document.querySelectorAll('body *')].filter((e) => { const b = e.getBoundingClientRect(); return b.right > 322 && b.width > 0 && getComputedStyle(e).position !== 'fixed'; }).slice(0, 12).map((e) => ({ sel: e.id ? '#' + e.id : e.tagName.toLowerCase() + (e.classList[0] ? '.' + e.classList[0] : ''), detail: `prawa krawędź ${Math.round(e.getBoundingClientRect().right)} px` })) : [] }; });
  await page.setViewportSize(vp);
  return { 'x:hscroll320': { status: r.w > 321 ? 'fail' : 'pass', items: r.items, count: r.items.length, value: r.w } };
}

async function motionCheck(page) {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(200);
  const items = await page.evaluate(() => (document.getAnimations ? document.getAnimations() : []).filter((a) => a.playState === 'running' && a.effect?.target && a.effect.getComputedTiming().activeDuration > 1000).map((a) => ({ sel: a.effect.target.id ? '#' + a.effect.target.id : a.effect.target.tagName.toLowerCase() + '.' + (a.effect.target.classList[0] || ''), detail: 'animacja działa mimo prefers-reduced-motion' })).slice(0, 20));
  await page.emulateMedia({ reducedMotion: null });
  return { 'x:reducedmotion': { status: items.length ? 'fail' : 'pass', items, count: items.length } };
}

async function vitals(page) {
  const v = await page.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; return { ...window.__uxv, ttfb: n ? n.responseStart : 0, bytes: performance.getEntriesByType('resource').reduce((s, r) => s + (r.transferSize || 0), n ? n.transferSize : 0) }; });
  const m = (val, lim, unit) => ({ status: val > lim ? 'warn' : 'pass', value: val, items: val > lim ? [{ sel: 'pomiar', detail: `${val}${unit}, próg ${lim}${unit} (pomiar laboratoryjny)` }] : [] });
  return { 'x:lcp': m(Math.round(v.lcp || 0), 2500, ' ms'), 'x:cls': m(+(v.cls || 0).toFixed(3), 0.1, ''), 'x:ttfb': m(Math.round(v.ttfb || 0), 800, ' ms'), 'x:longtasks': m(Math.round(v.long || 0), 200, ' ms'), bytes: v.bytes };
}

async function axeRun(page) {
  await page.evaluate(axeSource);
  const r = await page.evaluate(() => window.axe.run(document, { resultTypes: ['violations', 'incomplete'], rules: { 'target-size': { enabled: true }, 'label-content-name-mismatch': { enabled: true }, 'css-orientation-lock': { enabled: true } } }));
  const f = (l, status) => l.map((v) => ({ rule: 'axe:' + v.id, status, impact: v.impact, help: v.help, helpUrl: v.helpUrl, count: v.nodes.length, items: v.nodes.slice(0, 12).map((n) => ({ sel: n.target.flat().join(' '), detail: (n.any[0] || n.all[0] || n.none[0] || {}).message || v.help })) }));
  return { list: [...f(r.violations, 'fail'), ...f(r.incomplete, 'warn')], passed: r.passes?.map((p) => 'axe:' + p.id) || [] };
}

async function act(page, a) {
  const loc = () => a.role ? page.getByRole(a.role, { name: a.name }).first() : a.label ? page.getByLabel(a.label).first() : a.text ? page.getByText(a.text, { exact: !!a.exact }).first() : page.locator(a.selector).first();
  const o = { timeout: a.timeout || 8000 };
  switch (a.do) {
    case 'goto': await page.goto(toUrl(new URL(a.url, page.url().startsWith('about') ? undefined : page.url()).href), { waitUntil: 'load', timeout: 45000 }); break;
    case 'click': await loc().click(o); break;
    case 'fill': await loc().fill(a.value, o); break;
    case 'check': await loc().check(o); break;
    case 'select': await loc().selectOption(a.value, o); break;
    case 'press': await page.keyboard.press(a.key); break;
    case 'hover': await loc().hover(o); break;
    case 'scroll': a.selector || a.text || a.role ? await loc().scrollIntoViewIfNeeded(o) : await page.evaluate((y) => scrollTo(0, y === 'end' ? document.body.scrollHeight : y), a.y ?? 'end'); break;
    case 'back': await page.goBack({ waitUntil: 'load' }); break;
    case 'wait': await page.waitForTimeout(a.ms || 1000); break;
    default: throw new Error('Nieznana akcja: ' + a.do);
  }
}

// ---------- polecenia ----------
async function discover() {
  const b = await launch(), page = await (await b.newContext(VIEW.desktop)).newPage();
  const start = toUrl(target), max = +opt('max', 30), seen = new Map(), queue = [start];
  while (queue.length && seen.size < max) {
    const u = queue.shift().split('#')[0];
    if (seen.has(u)) continue;
    try {
      const res = await page.goto(u, { waitUntil: 'load', timeout: 30000 });
      const d = await page.evaluate(() => ({ title: document.title, h1: document.querySelector('h1')?.innerText || '', forms: document.forms.length, links: [...document.querySelectorAll('a[href]')].map((a) => a.href), sections: [...document.querySelectorAll('h2')].map((h) => h.innerText).slice(0, 15), dialogs: document.querySelectorAll('dialog,[role=dialog]').length }));
      seen.set(u, { url: u, status: res ? res.status() : 0, ...d, links: undefined });
      const same = (l) => { try { const x = new URL(l), s = new URL(start); return x.protocol === 'file:' ? path.dirname(x.pathname) === path.dirname(s.pathname) : x.host === s.host; } catch { return false; } };
      for (const l of d.links) if (same(l) && !/\.(pdf|zip|jpe?g|png|webp|svg|mp4|docx?)($|\?)/i.test(l) && !/wylog|logout|signout|usun|delete/i.test(l)) queue.push(l);
    } catch (e) { seen.set(u, { url: u, error: e.message.split('\n')[0] }); }
  }
  console.log(JSON.stringify([...seen.values()], null, 1));
  await b.close();
}

async function run() {
  const plan = JSON.parse(fs.readFileSync(target, 'utf8'));
  const out = path.resolve(opt('out', path.dirname(path.resolve(target))));
  fs.mkdirSync(path.join(out, 'zrzuty'), { recursive: true });
  const b = await launch();
  const log = { started: new Date().toISOString(), site: plan.site, steps: [], global: {} };
  const allLinks = new Set(), titles = {}, menus = {};

  for (const view of plan.viewports || ['desktop', 'mobile']) {
    const ctx = await b.newContext({ ...VIEW[view], locale: plan.locale || 'pl-PL', ignoreHTTPSErrors: false });
    await ctx.addInitScript(() => {
      window.__uxv = { lcp: 0, cls: 0, long: 0 };
      const ob = (type, fn) => { try { new PerformanceObserver((l) => l.getEntries().forEach(fn)).observe({ type, buffered: true }); } catch { /* brak wsparcia */ } };
      ob('largest-contentful-paint', (e) => { window.__uxv.lcp = e.startTime; });
      ob('layout-shift', (e) => { if (!e.hadRecentInput) window.__uxv.cls += e.value; });
      ob('longtask', (e) => { window.__uxv.long = Math.max(window.__uxv.long, e.duration); });
    });
    const page = await ctx.newPage();
    let cons = [];
    page.on('console', (m) => m.type() === 'error' && cons.push({ sel: 'konsola', detail: m.text().slice(0, 160) }));
    page.on('pageerror', (e) => cons.push({ sel: 'wyjątek JS', detail: e.message.slice(0, 160) }));
    page.on('requestfailed', (r) => !/ERR_ABORTED/.test(r.failure()?.errorText || '') && cons.push({ sel: 'żądanie', detail: r.url().slice(0, 120) }));
    page.on('dialog', (d) => { cons.push({ sel: 'okno', detail: d.message().slice(0, 120) }); d.dismiss().catch(() => {}); });
    let nav = null;
    page.on('framenavigated', (f) => { if (f === page.mainFrame()) nav = f.url(); });

    for (const [i, s] of plan.steps.entries()) {
      const e = { step: String(s.id ?? i + 1), view, errors: [], checks: {} };
      cons = []; nav = null;
      try {
        if (s.url) await page.goto(toUrl(/^(https?|file):/.test(s.url) ? s.url : new URL(s.url, toUrl(plan.site.url)).href), { waitUntil: 'load', timeout: 45000 });
        else if (i === 0) await page.goto(toUrl(plan.site.url), { waitUntil: 'load', timeout: 45000 });
        if (i === 0) {
          await page.waitForTimeout(1200);
          const ck = await ctx.cookies();
          e.checks['x:cookies'] = { status: ck.length ? 'warn' : 'pass', count: ck.length, items: ck.slice(0, 20).map((c) => ({ sel: c.domain, detail: `${c.name} zapisane przed zgodą` })) };
        }
        for (const a of (view === 'mobile' && s.mobileActions) || s.actions || []) {
          try { await act(page, a); } catch (err) { e.errors.push(`${a.do} ${JSON.stringify({ ...a, do: undefined })}: ${err.message.split('\n')[0]}`); break; }
        }
        await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(s.settle || 600);
        e.url = page.url();
        const base = `krok-${e.step}-${view}`;
        await page.screenshot({ path: path.join(out, 'zrzuty', base + '.jpg'), type: 'jpeg', quality: 80 });
        await page.screenshot({ path: path.join(out, 'zrzuty', base + '-calosc.jpg'), type: 'jpeg', quality: 70, fullPage: true });
        e.shot = `zrzuty/${base}.jpg`; e.full = `zrzuty/${base}-calosc.jpg`;
        if (nav || i === 0) Object.assign(e.checks, await vitals(page));
        const pc = await page.evaluate(pageChecks);
        pc.links.forEach((l) => allLinks.add(l)); delete pc.links;
        if (view === 'desktop') { (titles[pc['x:title'].value] ||= new Set()).add(e.url.split('#')[0]); if (pc['x:nav'].menu.length) menus[e.step] = pc['x:nav'].menu; }
        Object.assign(e.checks, pc);
        const ax = await axeRun(page);
        for (const v of ax.list) if (!e.checks[v.rule] || e.checks[v.rule].status === 'warn') e.checks[v.rule] = v;
        Object.assign(e.checks, await spacingCheck(page), await motionCheck(page));
        if (view === 'desktop' && (s.url || nav || i === 0)) Object.assign(e.checks, await focusWalk(page), await reflowCheck(page, VIEW.desktop.viewport));
        e.checks['x:console'] = { status: cons.length ? 'warn' : 'pass', count: cons.length, items: cons.slice(0, 15) };
      } catch (err) { e.errors.push(err.message.split('\n')[0]); }
      log.steps.push(e);
      console.log(`${view} krok ${e.step}: ${e.url || '-'} ${e.errors.length ? 'UWAGA: ' + e.errors.join(' | ') : 'ok'}`);
    }
    if (view === 'desktop' && /^https?:/.test(toUrl(plan.site.url))) {
      const r = await ctx.request.get(new URL('/ux-audit-nie-istnieje-' + Date.now(), plan.site.url).href, { failOnStatusCode: false }).catch(() => null);
      log.global['x:404'] = { status: r && r.status() === 404 ? 'pass' : 'warn', items: r && r.status() !== 404 ? [{ sel: 'nieistniejący adres', detail: 'kod ' + r.status() }] : [] };
    }
    if (view === (plan.viewports || ['desktop', 'mobile']).at(-1)) {
      const bad = [];
      for (const l of [...allLinks].slice(0, 80)) {
        const r = await ctx.request.get(l, { failOnStatusCode: false, timeout: 12000, maxRedirects: 5 }).catch((x) => ({ status: () => 0, err: x }));
        if (r.status() === 0 || (r.status() >= 400 && ![401, 403, 405, 429, 999].includes(r.status()))) bad.push({ sel: l.slice(0, 110), detail: r.status() ? 'kod ' + r.status() : 'brak odpowiedzi' });
      }
      log.global['x:brokenlinks'] = { status: bad.length ? 'fail' : allLinks.size ? 'pass' : 'info', items: bad, count: bad.length };
    }
    await ctx.close();
  }
  const dup = Object.entries(titles).filter(([, u]) => u.size > 1);
  if (dup.length) log.global['x:title'] = { status: 'fail', items: dup.map(([t, u]) => ({ sel: 'title', detail: `„${t}” na ${u.size} adresach` })) };
  const mv = new Set(Object.values(menus).map((m) => m.join(' | ')));
  log.global['x:menu'] = { status: Object.keys(menus).length < 2 ? 'info' : mv.size > 1 ? 'warn' : 'pass', items: mv.size > 1 ? [...mv].map((m) => ({ sel: 'nav', detail: m })) : [] };
  await b.close();

  // --- mapowanie na checklistę ---
  const byRule = {};
  const push = (rule, c, step, view) => (byRule[rule] ||= []).push({ ...c, step, view });
  for (const e of log.steps) for (const [r, c] of Object.entries(e.checks)) if (c && c.status) push(r, c, e.step, e.view);
  for (const [r, c] of Object.entries(log.global)) push(r, c, 'całość', '');
  const mapped = new Set(CHECKLIST.items.flatMap((i) => i.auto));
  const auto = {}, results = {};
  for (const i of CHECKLIST.items) {
    const hits = i.auto.flatMap((r) => (byRule[r] || []).filter((c) => c.status === 'fail' || c.status === 'warn').map((c) => ({ rule: r, ...c })));
    const ran = i.auto.some((r) => r.startsWith('axe:') || (byRule[r] || []).some((c) => c.status !== 'info'));
    const st = hits.some((h) => h.status === 'fail') ? 'fail' : hits.length ? 'warn' : ran && i.auto.length ? 'pass' : 'none';
    auto[i.id] = { status: st, hits: hits.map(({ rule, status, step, view, count, items, value, helpUrl }) => ({ rule, status, step, view, count: count ?? items?.length ?? 0, value, helpUrl, items: (items || []).slice(0, 6) })) };
    const ev = hits.slice(0, 3).map((h) => `${h.rule} krok ${h.step} ${h.view}: ${(h.items?.[0]?.sel || '')} ${(h.items?.[0]?.detail || '')}`.trim()).join('; ');
    results[i.id] = { status: 'NS', note: st === 'fail' || st === 'warn' ? `Automat: ${ev}. Potwierdź.` : st === 'pass' && i.method === 'A' ? 'Automat nie wykrył problemu. Potwierdź.' : '', steps: [...new Set(hits.map((h) => h.step))] };
  }
  log.auto = auto;
  log.unmapped = Object.entries(byRule).filter(([r, c]) => r.startsWith('axe:') && !mapped.has(r) && c.some((x) => x.status === 'fail')).map(([r, c]) => ({ rule: r, help: c[0].help, steps: [...new Set(c.map((x) => x.step))], items: c[0].items?.slice(0, 5) }));
  fs.writeFileSync(path.join(out, 'auto.json'), JSON.stringify(log, null, 1));
  const draft = { summary: '', positives: [], steps: Object.fromEntries(plan.steps.map((s, i) => [String(s.id ?? i + 1), { emotion: 3, thought: '', observations: '' }])), results, findings: [] };
  fs.writeFileSync(path.join(out, 'findings.draft.json'), JSON.stringify(draft, null, 1));
  const c = (x) => Object.values(auto).filter((a) => a.status === x).length;
  console.log(`\nAutomat: naruszenia ${c('fail')}, do potwierdzenia ${c('warn')}, bez uwag ${c('pass')}, tylko ręcznie ${c('none')}.`);
  console.log(`Zapisano: ${path.join(out, 'auto.json')} i findings.draft.json`);
}

if (cmd === 'discover' && target) await discover();
else if (cmd === 'run' && target) await run();
else { console.error('Użycie: audit.mjs discover <url> | audit.mjs run <plan.json> [--out katalog]'); process.exit(1); }
