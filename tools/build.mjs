// Buduje z danych (ux/data) wytyczne, checklistę, rejestr źródeł, mapę w README i dane skilla.
// Użycie: node tools/build.mjs          buduje i sprawdza
//         node tools/build.mjs --check  tylko sprawdza, czy pliki są aktualne
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SOURCES, VERIFIED } from '../ux/data/sources.mjs';
import p1 from '../ux/data/guidelines-1.mjs';
import p2 from '../ux/data/guidelines-2.mjs';
import p3 from '../ux/data/guidelines-3.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const json = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const WCAG = json('ux/data/wcag22.json');
const COGA = json('ux/data/coga.json');
const REPO = 'https://github.com/Not1nei/QA-Testing-Knowledge-Base';

const SEV = { 0: 'brak problemu', 1: 'kosmetyczny', 2: 'drobny', 3: 'poważny', 4: 'krytyczny' };
const METHOD = { A: 'automat', M: 'ręcznie', P: 'na ścieżce persony' };
const errors = [];

function resolve(ref) {
  if (ref.startsWith('W:')) {
    const n = ref.slice(2), s = WCAG[n];
    if (!s) return errors.push(`Nieznane kryterium WCAG ${n}`), null;
    return { label: `WCAG 2.2, ${n} ${s[0]} (${s[1]})`, org: 'W3C', kind: 'norma', level: s[1], url: `https://www.w3.org/WAI/WCAG22/Understanding/${s[2]}.html` };
  }
  if (ref.startsWith('C:')) {
    const n = ref.slice(2), s = COGA[n];
    if (!s) return errors.push(`Nieznany wzorzec COGA ${n}`), null;
    return { label: `W3C COGA, ${n} ${s[0]}`, org: 'W3C', kind: 'wytyczna', url: `https://www.w3.org/TR/coga-usable/#${s[1]}` };
  }
  const s = SOURCES[ref];
  if (!s) return errors.push(`Nieznane źródło ${ref}`), null;
  return { label: `${s[1]}, ${s[0]}`, org: s[1], kind: s[2], url: s[3] };
}

// Siła wynika z pierwszego (głównego) źródła; kolejne źródła są uzupełniające.
const STRENGTH = ([s]) => ({ prawo: 'PRAWO', norma: `NORMA ${s.level || 'AA'}`, badanie: 'BADANIE', wytyczna: 'WYTYCZNA' })[s.kind];

const aspects = [...p1, ...p2, ...p3].map((a) => ({
  ...a,
  items: a.items.map((i, n) => {
    const [title, req, why, how, fix, sev, method, refs, auto] = i;
    if (i.length !== 9) errors.push(`${a.id}-${n + 1}: ${i.length} pól zamiast 9`);
    const src = refs.map(resolve).filter(Boolean);
    return { id: `${a.id}-${String(n + 1).padStart(2, '0')}`, title, req, why, how, fix, sev, method, refs, src, auto, strength: STRENGTH(src) };
  }),
}));
const all = aspects.flatMap((a) => a.items.map((i) => ({ ...i, aspect: a.id, aspectName: a.name, slug: a.slug })));

// --- walidacja ---
const usedW = new Map();
for (const g of all) for (const r of g.refs) if (r.startsWith('W:')) usedW.set(r.slice(2), [...(usedW.get(r.slice(2)) || []), g]);
for (const [n, s] of Object.entries(WCAG)) if (['A', 'AA'].includes(s[1]) && !usedW.has(n)) errors.push(`WCAG ${n} (${s[1]}) nie ma wytycznej`);
for (const g of all) {
  if (!g.src.length) errors.push(`${g.id}: brak źródła`);
  if (!(g.sev in SEV) || !(g.method in METHOD)) errors.push(`${g.id}: zła waga lub metoda`);
}
const skillMd = fs.readFileSync(path.join(ROOT, '.claude/skills/ux-audit/SKILL.md'), 'utf8');
if (!skillMd.includes(`${all.length} punkt`)) errors.push(`SKILL.md: zaktualizuj liczbę punktów na ${all.length}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

// --- pliki ---
const out = {};
const anchor = (g) => g.id.toLowerCase();
const link = (s) => `[${s.label}](${s.url})`;
const NOTE = '<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->';

aspects.forEach((a, idx) => {
  const prev = aspects[idx - 1], next = aspects[idx + 1];
  const nav = [prev && `[← ${prev.name}](${prev.slug}.md)`, '[Mapa wiedzy](../README.md)', next && `[${next.name} →](${next.slug}.md)`].filter(Boolean).join(' · ');
  let t = `${NOTE}\n\n# ${a.name} (${a.id})\n\n${nav}\n\n${a.intro}\n\n| ID | Wytyczna | Siła | Waga | Sprawdzanie |\n|---|---|---|---|---|\n`;
  for (const g of a.items) t += `| [${g.id}](#${anchor(g)}) | ${g.title} | ${g.strength} | ${g.sev} | ${METHOD[g.method]} |\n`;
  for (const g of a.items) {
    t += `\n<a id="${anchor(g)}"></a>\n\n## ${g.id} ${g.title}\n\n`;
    t += `**Siła:** ${g.strength} · **Domyślna waga naruszenia:** ${g.sev} (${SEV[g.sev]}) · **Sprawdzanie:** ${METHOD[g.method]}\n\n`;
    t += `- **Wymaganie:** ${g.req}\n- **Dlaczego:** ${g.why}\n- **Jak sprawdzić:** ${g.how}\n- **Poprawka:** ${g.fix}\n`;
    if (g.auto.length) t += `- **Test automatyczny:** ${g.auto.map((x) => '`' + x + '`').join(', ')}\n`;
    t += `- **Źródła:** ${g.src.map(link).join('; ')}\n`;
  }
  out[`ux/wytyczne/${a.slug}.md`] = t + `\n---\n\n${nav}\n`;
});

// checklista
let cl = `${NOTE}\n\n# Checklista UX (${all.length} punktów)\n\n[Mapa wiedzy](../README.md) · [Skala wag](../metodologia/wagi.md) · wersje: [CSV](checklista-ux.csv), [JSON](checklista-ux.json)\n\nWynik każdego punktu: **OK** (spełnione), **BŁĄD** (naruszenie, nadaj wagę 1–4), **ND** (nie dotyczy, podaj powód), **NS** (nie sprawdzono, podaj powód). Pustych punktów nie zostawiamy.\n`;
for (const a of aspects) {
  cl += `\n## ${a.id} ${a.name}\n\n| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |\n|---|---|---|---|---|---|---|\n`;
  for (const g of a.items) cl += `| ☐ | [${g.id}](../wytyczne/${a.slug}.md#${anchor(g)}) | ${g.title} | ${g.strength} | ${g.sev} | ${g.method} | |\n`;
}
cl += '\nMetoda: A = automat, M = ręcznie, P = na ścieżce persony.\n';
out['ux/checklista/checklista-ux.md'] = cl;

const csvq = (s) => `"${String(s).replaceAll('"', '""')}"`;
out['ux/checklista/checklista-ux.csv'] = '﻿' + [['ID', 'Aspekt', 'Punkt kontrolny', 'Wymaganie', 'Jak sprawdzić', 'Siła', 'Waga domyślna', 'Metoda', 'Źródła', 'Wynik', 'Waga', 'Uwagi'].map(csvq).join(';'),
  ...all.map((g) => [g.id, g.aspectName, g.title, g.req, g.how, g.strength, g.sev, METHOD[g.method], g.src.map((s) => s.url).join(' '), '', '', ''].map(csvq).join(';'))].join('\n') + '\n';

const data = {
  verified: VERIFIED, repo: REPO, severity: SEV,
  aspects: aspects.map((a) => ({ id: a.id, name: a.name, slug: a.slug })),
  items: all.map((g) => ({ id: g.id, aspect: g.aspect, title: g.title, requirement: g.req, how: g.how, fix: g.fix, strength: g.strength, severity: g.sev, method: g.method, auto: g.auto, sources: g.src.map((s) => ({ label: s.label, url: s.url })), url: `${REPO}/blob/main/ux/wytyczne/${g.slug}.md#${anchor(g)}` })),
};
out['ux/checklista/checklista-ux.json'] = JSON.stringify(data, null, 1) + '\n';
out['.claude/skills/ux-audit/references/checklist.json'] = out['ux/checklista/checklista-ux.json'];

// źródła
const usedBy = {};
for (const g of all) for (const r of g.refs) (usedBy[r] ||= []).push(g);
const refs = (k) => (usedBy[k] || []).map((g) => `[${g.id}](../wytyczne/${g.slug}.md#${anchor(g)})`).join(', ') || 'metodologia';
const KIND = { norma: 'Normy', prawo: 'Akty prawne', wytyczna: 'Wytyczne organizacji, platform i systemów projektowych', badanie: 'Badania i opracowania UX' };
let sr = `${NOTE}\n\n# Rejestr źródeł\n\n[Mapa wiedzy](../README.md) · [Pokrycie WCAG 2.2](wcag-22.md)\n\nAdresy otwarto i sprawdzono ${VERIFIED}. Wytyczna bez źródła nie przechodzi budowania bazy (\`tools/build.mjs\`).\n`;
for (const [k, name] of Object.entries(KIND)) {
  sr += `\n## ${name}\n\n| Źródło | Organizacja | Wytyczne |\n|---|---|---|\n`;
  for (const [id, s] of Object.entries(SOURCES)) if (s[2] === k) sr += `| [${s[0]}](${s[3]}) | ${s[1]} | ${refs(id)} |\n`;
}
sr += '\n## Wzorce W3C COGA\n\n| Wzorzec | Wytyczne |\n|---|---|\n';
for (const [n, s] of Object.entries(COGA)) if (usedBy['C:' + n]) sr += `| [${n} ${s[0]}](https://www.w3.org/TR/coga-usable/#${s[1]}) | ${refs('C:' + n)} |\n`;
out['ux/zrodla/zrodla.md'] = sr;

let w = `${NOTE}\n\n# Pokrycie kryteriów WCAG 2.2\n\n[Mapa wiedzy](../README.md) · [Rejestr źródeł](zrodla.md)\n\nKażde kryterium poziomu A i AA ma co najmniej jedną wytyczną, pilnuje tego \`tools/build.mjs\`. Kryteria AAA są ujęte wybiórczo. Pełną ocenę zgodności prowadzi się metodą [WCAG-EM](${SOURCES['WCAG-EM'][3]}). Treść po polsku: [tłumaczenie WCAG 2.1](${SOURCES.WCAG21PL[3]}).\n\n| Kryterium | Poziom | Wytyczne |\n|---|---|---|\n`;
for (const [n, s] of Object.entries(WCAG)) if (s[1]) w += `| [${n} ${s[0]}](https://www.w3.org/WAI/WCAG22/Understanding/${s[2]}.html) | ${s[1]} | ${usedBy['W:' + n] ? refs('W:' + n) : '—'} |\n`;
out['ux/zrodla/wcag-22.md'] = w;

out['ux/metodologia/wagi.md'] = '<!-- Kopia .claude/skills/ux-audit/references/wagi.md. Edytuj tamten plik. -->\n\n[Mapa wiedzy](../README.md)\n\n' + fs.readFileSync(path.join(ROOT, '.claude/skills/ux-audit/references/wagi.md'), 'utf8').replaceAll('\r\n', '\n');

// mapy w plikach README (między znacznikami)
const strengths = {}; for (const g of all) strengths[g.strength] = (strengths[g.strength] || 0) + 1;
const autoN = all.filter((g) => g.auto.length).length;
const nSrc = new Set(all.flatMap((g) => g.src.map((s) => s.url))).size;
const lowerFirst = (t) => (/^.[a-ząćęłńóśźż ]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t);
const table = (base) => `| Aspekt | Zakres | Punkty |\n|---|---|---|\n` + aspects.map((a) => `| [**${a.id}** ${a.name}](${base}wytyczne/${a.slug}.md) | ${a.items.slice(0, 3).map((g) => lowerFirst(g.title)).join('; ')}… | ${a.items.length} |`).join('\n');
const stats = `**${all.length} wytycznych** w **${aspects.length} aspektach**, **${nSrc} unikalnych odnośników do źródeł**, wszystkie kryteria WCAG 2.2 A i AA pokryte, ${autoN} punktów z testem automatycznym. Siła: ${Object.entries(strengths).sort((x, y) => y[1] - x[1]).map(([k, v]) => `${k} ${v}`).join(', ')}.`;
for (const [f, base] of [['README.md', 'ux/'], ['ux/README.md', '']]) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) continue;
  out[f] = fs.readFileSync(p, 'utf8').replace(/(<!-- MAPA:START -->)[\s\S]*?(<!-- MAPA:KONIEC -->)/, (_, s, e) => `${s}\n\n${stats}\n\n${table(base)}\n\n${e}`);
}

let stale = 0;
for (const [f, c] of Object.entries(out)) {
  const p = path.join(ROOT, f);
  const cur = fs.existsSync(p) ? fs.readFileSync(p, 'utf8').replaceAll('\r\n', '\n') : null;
  if (cur === c) continue;
  stale++;
  if (CHECK) { console.error('Nieaktualny: ' + f); continue; }
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c);
}

// linki względne w plikach Markdown
let broken = 0;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => ['.git', 'node_modules'].includes(e.name) ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(ROOT).filter((x) => x.endsWith('.md'))) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/\]\((?!https?:|mailto:|#)([^)\s]+)\)/g)) {
    const [file, hash] = m[1].split('#');
    const p = path.join(path.dirname(f), decodeURI(file));
    if (!fs.existsSync(p)) { broken++; console.error(`Martwy link: ${path.relative(ROOT, f)} -> ${m[1]}`); }
    else if (hash && p.endsWith('.md') && /^[a-z]{3}-\d\d$/.test(hash) && !fs.readFileSync(p, 'utf8').includes(`id="${hash}"`)) { broken++; console.error(`Martwa kotwica: ${m[1]}`); }
  }
}
console.log(`${all.length} wytycznych, ${aspects.length} aspektów, ${nSrc} źródeł; zmienione pliki: ${stale}; martwe linki: ${broken}`);
if (broken || (CHECK && stale)) process.exit(1);
