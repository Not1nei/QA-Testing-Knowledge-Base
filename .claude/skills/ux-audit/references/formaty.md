# Formaty plików

## plan.json
```json
{
  "site": { "name": "Nazwa serwisu", "url": "https://example.com/" },
  "locale": "pl-PL",
  "viewports": ["desktop", "mobile"],
  "persona": { "name": "", "age": 0, "role": "", "quote": "", "bio": "", "tech": "", "goals": [], "needs": [], "frustrations": [], "scenario": "" },
  "steps": [
    { "id": 1, "title": "Wejście na stronę", "goal": "Zrozumieć, co oferuje serwis" },
    { "id": 2, "title": "Wysłanie pustego formularza", "goal": "Sprawdzić komunikaty", "url": "/kontakt",
      "actions": [{ "do": "click", "role": "button", "name": "Wyślij" }],
      "mobileActions": [] }
  ],
  "notCovered": ["Panel klienta: brak konta testowego"]
}
```
Akcje: `goto` (url), `click`, `hover`, `fill` (value), `check`, `select` (value), `press` (key), `scroll` (element lub y), `back`, `wait` (ms). Element wskazujesz przez `role`+`name`, `label`, `text` albo `selector`. Kroki wykonują się kolejno w tej samej karcie, zrzut powstaje po akcjach. `mobileActions` zastępuje `actions` na telefonie, jeśli tablica nie jest pominięta.

## findings.json
```json
{
  "summary": "2–3 zdania: ogólna ocena i najważniejszy problem.",
  "positives": ["Co działa dobrze"],
  "limitations": "Czego nie sprawdzono i dlaczego.",
  "steps": { "1": { "emotion": 4, "thought": "Myśl persony", "observations": "Co się wydarzyło", "extraShots": [{ "file": "zrzuty/x.jpg", "caption": "Opis" }] } },
  "results": { "NAV-08": { "status": "BŁĄD", "note": "10 linków z href=#", "steps": ["1"] } },
  "findings": [{
    "id": "F-01", "title": "Przyciski koszyka nic nie robią", "items": ["NAV-08", "TRA-07"], "steps": ["2"],
    "severity": 4, "frequency": "każdy kupujący", "impact": "nie da się kupić", "persistence": "za każdym razem",
    "description": "", "evidence": "", "fix": "", "code": "", "effort": "M"
  }]
}
```
Statusy: `OK`, `BŁĄD`, `ND` (nie dotyczy), `NS` (nie sprawdzono). `ND` i `NS` wymagają powodu w `note`. Każdy `BŁĄD` musi być w co najmniej jednym znalezisku. `effort`: `S` do 1 h, `M` do 1 dnia, `L` powyżej.
