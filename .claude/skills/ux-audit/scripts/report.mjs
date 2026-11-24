// Raport z audytu: łączy plan.json, auto.json i findings.json w jeden plik HTML.
//   node report.mjs <katalog> [--draft]
// Bez --draft odmawia, gdy brakuje wyniku punktu checklisty, opisu kroku, wagi lub poprawki.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(process.argv[2] || '.');
const DRAFT = process.argv.includes('--draft');
const read = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const CL = JSON.parse(fs.readFileSync(path.join(HERE, '..', 'references', 'checklist.json'), 'utf8'));
const plan = read('plan.json'), auto = read('auto.json');
const F = fs.existsSync(path.join(dir, 'findings.json')) ? read('findings.json') : read('findings.draft.json');
const SEV = { 4: 'Krytyczny', 3: 'Poważny', 2: 'Drobny', 1: 'Kosmetyczny' };
const ST = ['OK', 'BŁĄD', 'ND', 'NS'];
const EFF = { S: 'mały (do 1 h)', M: 'średni (do 1 dnia)', L: 'duży (powyżej 1 dnia)' };
const item = Object.fromEntries(CL.items.map((i) => [i.id, i]));
const steps = plan.steps.map((s, i) => ({ ...s, id: String(s.id ?? i + 1) }));

// ---------- walidacja ----------
const err = [];
const inFinding = new Map();
for (const f of F.findings || []) {
  for (const k of ['id', 'title', 'severity', 'description', 'frequency', 'impact', 'persistence', 'fix', 'effort']) if (!f[k]) err.push(`${f.id || '(bez id)'}: brak pola „${k}”`);
  if (f.severity && !SEV[f.severity]) err.push(`${f.id}: waga poza skalą 1–4`);
  if (f.effort && !EFF[f.effort]) err.push(`${f.id}: nakład spoza S/M/L`);
  if (!f.items?.length) err.push(`${f.id}: brak powiązania z checklistą`);
  for (const i of f.items || []) { if (!item[i]) err.push(`${f.id}: nieznany punkt ${i}`); else if (F.results[i]?.status !== 'BŁĄD') err.push(`${f.id}: punkt ${i} nie ma wyniku BŁĄD`); inFinding.set(i, [...(inFinding.get(i) || []), f]); }
  for (const s of f.steps || []) if (!steps.some((x) => x.id === String(s))) err.push(`${f.id}: nieznany krok ${s}`);
  if (!f.steps?.length) err.push(`${f.id}: brak kroku`);
}
for (const i of CL.items) {
  const r = F.results[i.id];
  if (!r || !ST.includes(r.status)) { err.push(`${i.id}: brak wyniku`); continue; }
  if (r.status === 'BŁĄD' && !inFinding.has(i.id)) err.push(`${i.id}: BŁĄD bez opisu w findings`);
  if (['ND', 'NS'].includes(r.status) && !r.note) err.push(`${i.id}: ${r.status} bez powodu`);
  if (/Potwierdź\.$/.test(r.note || '')) err.push(`${i.id}: wynik automatu niepotwierdzony`);
}
for (const s of steps) {
  if (!F.steps?.[s.id]?.observations) err.push(`krok ${s.id}: brak obserwacji`);
  if (!F.steps?.[s.id]?.thought) err.push(`krok ${s.id}: brak myśli persony`);
  if (!auto.steps.some((e) => e.step === s.id && e.shot)) err.push(`krok ${s.id}: brak zrzutu`);
}
if (!F.summary) err.push('brak podsumowania');
if (err.length && !DRAFT) { console.error(`Raport niekompletny (${err.length}):\n- ` + err.slice(0, 60).join('\n- ')); process.exit(1); }

// ---------- pomocnicze ----------
const h = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const img = (p) => { try { return 'data:image/jpeg;base64,' + fs.readFileSync(path.join(dir, p)).toString('base64'); } catch { return ''; } };
const sevTag = (n) => `<span class="sev s${n}"><b>${n}</b> ${SEV[n]}</span>`;
const findings = [...(F.findings || [])].sort((a, b) => b.severity - a.severity || 'SML'.indexOf(a.effort) - 'SML'.indexOf(b.effort));
const res = (id) => F.results[id] || { status: 'NS', note: '' };
const cnt = (s, list = CL.items) => list.filter((i) => res(i.id).status === s).length;
const ok = cnt('OK'), bad = cnt('BŁĄD'), nd = cnt('ND'), ns = cnt('NS');
const pct = (o, b) => (o + b ? Math.round((100 * o) / (o + b)) : null);
const score = pct(ok, bad);
const P = plan.persona || {};
const date = new Date(auto.started).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
const list = (a) => (a || []).map((x) => `<li>${h(x)}</li>`).join('');
const EMO = { 1: 'bardzo źle', 2: 'źle', 3: 'neutralnie', 4: 'dobrze', 5: 'bardzo dobrze' };

const curve = () => {
  const W = 900, H = 190, L = 92, T = 18, n = steps.length;
  const x = (i) => L + (n === 1 ? (W - L - 24) / 2 : (i * (W - L - 24)) / (n - 1));
  const y = (e) => T + ((5 - e) * (H - T - 44)) / 4;
  const pts = steps.map((s, i) => [x(i), y(F.steps?.[s.id]?.emotion || 3), s]);
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Nastrój persony w kolejnych krokach: ${steps.map((s) => `krok ${s.id} ${EMO[F.steps?.[s.id]?.emotion || 3]}`).join(', ')}">
${[5, 3, 1].map((e) => `<line x1="${L}" x2="${W - 10}" y1="${y(e)}" y2="${y(e)}" class="grid"/><text x="${L - 10}" y="${y(e) + 4}" text-anchor="end">${EMO[e]}</text>`).join('')}
<polyline points="${pts.map((p) => p[0] + ',' + p[1]).join(' ')}" class="line"/>
${pts.map(([a, b, s]) => `<circle cx="${a}" cy="${b}" r="6" class="dot"/><text x="${a}" y="${H - 8}" text-anchor="middle">${h(s.id)}</text>`).join('')}</svg>`;
};

const stepHtml = (s) => {
  const e = (v) => auto.steps.find((x) => x.step === s.id && x.view === v && x.shot);
  const d = e('desktop'), m = e('mobile'), st = F.steps?.[s.id] || {};
  const fs_ = findings.filter((f) => f.steps?.map(String).includes(s.id));
  const extra = (st.extraShots || []).map((x) => `<figure class="extra"><img src="${img(x.file)}" alt="${h(x.caption)}"><figcaption>${h(x.caption)}</figcaption></figure>`).join('');
  const problems = auto.steps.filter((x) => x.step === s.id).flatMap((x) => x.errors.map((y) => `${x.view}: ${y}`));
  return `<article class="step" id="krok-${h(s.id)}"><header><span class="num">${h(s.id)}</span><div><h3>${h(s.title)}</h3><p class="goal">${h(s.goal)}</p></div></header>
<div class="shots">${d ? `<figure class="desk"><img src="${img(d.shot)}" alt="Krok ${h(s.id)}, ${h(s.title)}: widok komputerowy"><figcaption>Komputer, 1440×900</figcaption></figure>` : ''}${m ? `<figure class="mob"><img src="${img(m.shot)}" alt="Krok ${h(s.id)}, ${h(s.title)}: widok telefonu"><figcaption>Telefon, 390×844</figcaption></figure>` : ''}</div>
${extra ? `<div class="extras">${extra}</div>` : ''}
<div class="cols"><div><h4>Myśl persony <small>(nastrój: ${EMO[st.emotion || 3]})</small></h4><blockquote>${h(st.thought) || '—'}</blockquote></div><div><h4>Obserwacje</h4><p>${h(st.observations) || '—'}</p></div></div>
${problems.length && DRAFT ? `<p class="warn">Błędy skryptu: ${h(problems.join(' | '))}</p>` : ''}
<h4>Znalezione problemy</h4>${fs_.length ? `<ul class="flist">${fs_.map((f) => `<li>${sevTag(f.severity)} <a href="#${h(f.id)}">${h(f.id)}</a> ${h(f.title)}</li>`).join('')}</ul>` : '<p>Brak problemów w tym kroku.</p>'}</article>`;
};

const findHtml = (f) => `<article class="finding b${f.severity}" id="${h(f.id)}"><header>${sevTag(f.severity)}<h3>${h(f.id)} ${h(f.title)}</h3></header>
<p>${h(f.description)}</p>
${f.evidence ? `<p class="evid"><b>Dowód:</b> ${h(f.evidence)}</p>` : ''}
<dl class="why"><div><dt>Częstość</dt><dd>${h(f.frequency)}</dd></div><div><dt>Wpływ</dt><dd>${h(f.impact)}</dd></div><div><dt>Trwałość</dt><dd>${h(f.persistence)}</dd></div></dl>
<div class="fix"><h4>Proponowana poprawka <small>nakład: ${h(EFF[f.effort] || f.effort)}</small></h4><p>${h(f.fix)}</p>${f.code ? `<pre tabindex="0"><code>${h(f.code)}</code></pre>` : ''}</div>
<p class="meta">Kroki: ${(f.steps || []).map((s) => `<a href="#krok-${h(s)}">${h(s)}</a>`).join(', ')} · Punkty: ${(f.items || []).filter((i) => item[i]).map((i) => `<a href="#${i}">${i}</a>`).join(', ')}</p>
<p class="meta">Źródła: ${[...new Map((f.items || []).filter((i) => item[i]).flatMap((i) => item[i].sources.slice(0, 2)).map((s) => [s.url, s])).values()].map((s) => `<a href="${h(s.url)}">${h(s.label)}</a>`).join('; ')}</p></article>`;

const aspects = CL.aspects.map((a) => { const l = CL.items.filter((i) => i.aspect === a.id), o = cnt('OK', l), b = cnt('BŁĄD', l); return { ...a, l, o, b, nd: cnt('ND', l), ns: cnt('NS', l), p: pct(o, b) }; });

const html = `<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Raport UX: ${h(plan.site.name)}</title><style>
:root{--ink:#1d1b26;--mut:#5a5766;--bg:#f6f4ef;--card:#fff;--line:#dcd7cc;--acc:#0d5c55;--acc2:#e3efec;--s4:#8f1d2c;--s3:#a4470b;--s2:#6b5900;--s1:#44546a}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:1rem}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;overflow-wrap:anywhere;background:var(--bg);color:var(--ink);font:17px/1.6 system-ui,"Segoe UI",sans-serif}h1,h2,h3{font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;line-height:1.2;text-wrap:balance}h1{font-size:clamp(2.2rem,5vw,3.8rem);margin:.2em 0}h2{font-size:clamp(1.7rem,3vw,2.4rem);margin:0 0 .6em}h3{font-size:1.3rem;margin:0}h4{margin:0 0 .3em;font-size:1rem}small{font-weight:400;color:var(--mut);font-size:.9rem}
a{color:var(--acc);text-underline-offset:3px}a:focus-visible,summary:focus-visible,pre:focus-visible,select:focus-visible{outline:3px solid var(--acc);outline-offset:3px}
.wrap{max-width:1080px;margin:auto;padding:0 24px}section{padding:56px 0;border-top:1px solid var(--line)}p{max-width:70ch}
.skip{position:absolute;left:-999px}.skip:focus{left:16px;top:16px;background:#fff;padding:12px;z-index:9}
.hero{background:var(--acc);color:#fff;padding:72px 0 56px}.hero a{color:#fff}.hero .lead{font-size:1.2rem}.kick{margin:0;font-weight:600}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:24px;margin-top:36px}.stats div{border-top:1px solid #ffffff80;padding-top:14px}.stats b{display:block;font:400 2.6rem/1 "Palatino Linotype",Georgia,serif;font-variant-numeric:tabular-nums}
nav.toc ul{display:flex;flex-wrap:wrap;gap:8px 24px;list-style:none;padding:18px 0;margin:0}nav.toc a{display:inline-block;padding:6px 0}
.sev{display:inline-block;white-space:nowrap;color:#fff;border-radius:4px;padding:1px 9px;font-size:.88rem}.s4{background:var(--s4)}.s3{background:var(--s3)}.s2{background:var(--s2)}.s1{background:var(--s1)}
.bars{display:grid;gap:12px;max-width:640px}.bars>div{display:grid;grid-template-columns:150px 1fr 2.5rem;gap:12px;align-items:center}.bar{height:18px;border-radius:3px;min-width:3px}
.persona{display:grid;grid-template-columns:1fr 2fr;gap:40px}.persona .who{border-left:6px solid var(--acc);padding-left:20px}.persona .who b{font:400 2rem/1.1 "Palatino Linotype",Georgia,serif;display:block}.persona blockquote{font:italic 400 1.35rem/1.4 "Palatino Linotype",Georgia,serif}.trio{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:24px}ul{padding-left:1.2em}
svg{width:100%;height:auto;font:13px system-ui;fill:var(--mut)}.grid{stroke:var(--line)}.line{fill:none;stroke:var(--acc);stroke-width:3}.dot{fill:var(--acc);stroke:var(--bg);stroke-width:3}.chart{overflow-x:auto}.chart svg{min-width:560px}
blockquote{margin:0}.step{margin:0 0 72px}.step header,.finding header{display:flex;gap:16px;align-items:center;margin-bottom:16px;flex-wrap:wrap}.num{font:400 2.6rem/1 "Palatino Linotype",Georgia,serif;color:var(--acc);min-width:1.2em}.goal{margin:0;color:var(--mut)}.shots{display:grid;grid-template-columns:3.4fr 1fr;gap:20px;align-items:start;margin-bottom:24px}figure{margin:0}figure img{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:6px;background:#fff}figcaption{font-size:.9rem;color:var(--mut);padding-top:4px}.extras{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-bottom:24px}.cols{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:20px}.cols blockquote{font:italic 1.1rem/1.5 "Palatino Linotype",Georgia,serif}.flist{list-style:none;padding:0}.flist li{padding:4px 0}
.finding{background:var(--card);border:1px solid var(--line);border-left:8px solid;border-radius:6px;padding:24px;margin-bottom:24px}.b4{border-left-color:var(--s4)}.b3{border-left-color:var(--s3)}.b2{border-left-color:var(--s2)}.b1{border-left-color:var(--s1)}.why{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:16px 0}.why dt{font-weight:600;font-size:.92rem}.why dd{margin:0}.fix{background:var(--acc2);padding:16px;border-radius:4px}.fix p{margin:0}pre{overflow-x:auto;background:#fff;padding:12px;font-size:.9rem}.meta{font-size:.95rem;color:var(--mut);margin:.6em 0 0}
.tw{overflow-x:auto}table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}th,td{overflow-wrap:normal;text-align:left;padding:9px 12px 9px 0;border-bottom:1px solid var(--line);vertical-align:top}th{font-size:.95rem}td .mini{display:block;height:10px;background:var(--line);border-radius:3px;min-width:120px;overflow:hidden}td .mini i{display:block;height:100%;background:var(--acc)}
details{border-bottom:1px solid var(--line)}summary{cursor:pointer;padding:14px 0;font-weight:600}.st{font-weight:700;white-space:nowrap}.st.OK{color:var(--acc)}.st.BŁĄD{color:var(--s4)}.st.ND,.st.NS{color:var(--mut)}.warn{background:#fff3d6;padding:12px}
@media(max-width:760px){.persona,.cols,.shots,.why{grid-template-columns:1fr}.mob{max-width:240px}.bars>div{grid-template-columns:110px 1fr 2rem}}
@media print{body{background:#fff;font-size:11pt}.hero{print-color-adjust:exact}section{padding:24px 0}.finding,.shots{break-inside:avoid}nav.toc,.skip{display:none}.sev,.bar,.mini,.mini i,.fix{print-color-adjust:exact}}
</style></head><body><a class="skip" href="#tresc">Przejdź do treści</a>
<header class="hero"><div class="wrap"><p class="kick">Raport z audytu UX i dostępności</p><h1>${h(plan.site.name)}</h1><p class="lead">${h(F.summary)}</p><p>${/^https?:/.test(plan.site.url) ? `<a href="${h(plan.site.url)}">${h(plan.site.url)}</a>, badanie: ` : "Plik lokalny, badanie: "}${date}</p>
<div class="stats"><div><b>${steps.length}</b>kroków ścieżki</div><div><b>${CL.items.length}</b>punktów checklisty</div><div><b>${score === null ? '–' : score + '%'}</b>spełnionych z ocenionych</div><div><b>${findings.length}</b>problemów</div><div><b>${findings.filter((f) => f.severity >= 3).length}</b>poważnych i krytycznych</div></div></div></header>
${DRAFT && err.length ? `<div class="wrap"><p class="warn"><b>Szkic.</b> Do uzupełnienia: ${err.length} pozycji.</p></div>` : ''}
<div class="wrap"><nav class="toc" aria-label="Spis treści"><ul><li><a href="#wyniki">Wyniki</a></li><li><a href="#persona">Persona</a></li><li><a href="#sciezka">Ścieżka</a></li><li><a href="#problemy">Problemy i poprawki</a></li><li><a href="#plan">Plan napraw</a></li><li><a href="#checklista">Checklista</a></li><li><a href="#metoda">Metoda</a></li></ul></nav></div>
<main id="tresc" class="wrap">
<section id="wyniki"><h2>Wyniki</h2><h3>Problemy według wagi</h3><div class="bars" style="margin:16px 0 36px">${[4, 3, 2, 1].map((n) => { const k = findings.filter((f) => f.severity === n).length, mx = Math.max(1, ...[1, 2, 3, 4].map((z) => findings.filter((f) => f.severity === z).length)); return `<div><span>${n} ${SEV[n]}</span><span><span class="bar s${n}" style="display:block;width:${(100 * k) / mx}%"></span></span><b>${k}</b></div>`; }).join('')}</div>
<h3>Wynik w aspektach</h3><div class="tw" tabindex="0" role="region" aria-label="Wynik w aspektach"><table><thead><tr><th scope="col">Aspekt</th><th scope="col">Spełnione</th><th scope="col">Błędy</th><th scope="col">Nie dotyczy</th><th scope="col">Niesprawdzone</th><th scope="col">Wynik</th></tr></thead><tbody>${aspects.map((a) => `<tr><th scope="row"><a href="#a-${a.id}">${h(a.name)}</a></th><td>${a.o}</td><td>${a.b}</td><td>${a.nd}</td><td>${a.ns}</td><td>${a.p === null ? '–' : a.p + '%'}<span class="mini" aria-hidden="true"><i style="width:${a.p || 0}%"></i></span></td></tr>`).join('')}</tbody><tfoot><tr><th scope="row">Razem</th><td>${ok}</td><td>${bad}</td><td>${nd}</td><td>${ns}</td><td>${score === null ? '–' : score + '%'}</td></tr></tfoot></table></div>
${F.positives?.length ? `<h3 style="margin-top:36px">Co działa dobrze</h3><ul>${list(F.positives)}</ul>` : ''}</section>
<section id="persona"><h2>Persona</h2><div class="persona"><div class="who"><b>${h(P.name)}</b><p>${[P.age && h(P.age) + ' lat', h(P.role)].filter(Boolean).join(', ')}</p><p>${h(P.tech)}</p></div><div><blockquote>„${h(P.quote)}”</blockquote><p>${h(P.bio)}</p></div></div><div class="trio"><div><h3>Cele</h3><ul>${list(P.goals)}</ul></div><div><h3>Potrzeby</h3><ul>${list(P.needs)}</ul></div><div><h3>Bariery</h3><ul>${list(P.frustrations)}</ul></div></div>${P.scenario ? `<h3>Scenariusz</h3><p>${h(P.scenario)}</p>` : ''}</section>
<section id="sciezka"><h2>Ścieżka persony</h2><div class="chart" tabindex="0" role="region" aria-label="Wykres nastroju">${curve()}</div><div style="margin-top:48px">${steps.map(stepHtml).join('')}</div>${plan.notCovered?.length ? `<h3>Ekrany poza ścieżką</h3><ul>${list(plan.notCovered)}</ul>` : ''}</section>
<section id="problemy"><h2>Problemy, wagi i poprawki</h2><p>Skala 1–4 wg Nielsen Norman Group. Wagę ustalono z częstości, wpływu i trwałości problemu.</p>${findings.map(findHtml).join('') || '<p>Nie znaleziono problemów.</p>'}</section>
<section id="plan"><h2>Plan napraw</h2><p>Kolejność: najpierw waga, potem mniejszy nakład.</p><div class="tw" tabindex="0" role="region" aria-label="Plan napraw"><table><thead><tr><th scope="col">Lp.</th><th scope="col">Problem</th><th scope="col">Waga</th><th scope="col">Nakład</th><th scope="col">Poprawka</th></tr></thead><tbody>${findings.map((f, i) => `<tr><td>${i + 1}</td><td><a href="#${h(f.id)}">${h(f.id)}</a> ${h(f.title)}</td><td>${sevTag(f.severity)}</td><td>${h(EFF[f.effort] || '')}</td><td>${h(f.fix)}</td></tr>`).join('')}</tbody></table></div></section>
<section id="checklista"><h2>Pełna checklista</h2><p>OK: spełnione. BŁĄD: naruszenie. ND: nie dotyczy. NS: nie sprawdzono, z powodem.</p>${aspects.map((a) => `<details id="a-${a.id}"${a.b ? ' open' : ''}><summary>${h(a.name)}: ${a.o} OK, ${a.b} błędów, ${a.nd} ND, ${a.ns} NS</summary><div class="tw" tabindex="0" role="region" aria-label="${h(a.name)}"><table><thead><tr><th scope="col">ID</th><th scope="col">Punkt</th><th scope="col">Wynik</th><th scope="col">Uwagi</th></tr></thead><tbody>${a.l.map((i) => `<tr id="${i.id}"><td><a href="${h(i.url)}">${i.id}</a></td><td>${h(i.title)} <small>${h(i.strength)}</small></td><td class="st ${res(i.id).status}">${res(i.id).status}</td><td>${h(res(i.id).note)} ${(inFinding.get(i.id) || []).map((f) => `<a href="#${h(f.id)}">${h(f.id)}</a>`).join(', ')}</td></tr>`).join('')}</tbody></table></div></details>`).join('')}</section>
<section id="metoda"><h2>Metoda i ograniczenia</h2><p>Ocena ekspercka na ścieżce jednej persony w Chrome, w widokach 1440×900 i 390×844, połączona z testami automatycznymi (axe-core i testy własne). Checklista i źródła: <a href="${h(CL.repo)}">baza wiedzy UX</a>.</p><p>Persona jest narzędziem oceny i nie zastępuje badań z użytkownikami. Automat wykrywa tylko część barier. Pomiary wydajności są laboratoryjne. Wynik procentowy opisuje checklistę i nie jest certyfikatem zgodności z WCAG ani opinią prawną.</p>${F.limitations ? `<p>${h(F.limitations)}</p>` : ''}</section>
</main></body></html>`;
const out = path.join(dir, DRAFT ? 'raport-szkic.html' : 'raport.html');
fs.writeFileSync(out, html);
console.log(`${out} (${Math.round(html.length / 1024)} KB), problemów: ${findings.length}, OK ${ok}, BŁĄD ${bad}, ND ${nd}, NS ${ns}${err.length ? `, do uzupełnienia ${err.length}` : ''}`);
