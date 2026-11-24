<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Kolor i kontrast (KOL)

[← Typografia i czytelność](04-typografia.md) · [Mapa wiedzy](../README.md) · [Treść i język →](06-tresc-jezyk.md)

Niski kontrast to najczęstszy błąd automatyczny w sieci: 83,9% stron głównych w badaniu WebAIM Million 2026.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [KOL-01](#kol-01) | Kontrast tekstu wynosi co najmniej 4,5:1 | NORMA AA | 3 | automat |
| [KOL-02](#kol-02) | Kontrast elementów interfejsu wynosi co najmniej 3:1 | NORMA AA | 2 | ręcznie |
| [KOL-03](#kol-03) | Informacja nie jest przekazana samym kolorem | NORMA A | 3 | ręcznie |
| [KOL-04](#kol-04) | Tekst na zdjęciu ma zapewniony kontrast | NORMA AA | 2 | ręcznie |
| [KOL-05](#kol-05) | Strona działa z ustawieniami kolorów użytkownika | BADANIE | 2 | ręcznie |
| [KOL-06](#kol-06) | Paleta jest spokojna, a kolory mają stałe znaczenie | WYTYCZNA | 1 | ręcznie |

<a id="kol-01"></a>

## KOL-01 Kontrast tekstu wynosi co najmniej 4,5:1

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Zwykły tekst ≥ 4,5:1, duży (≥ 24 px albo ≥ 18,66 px pogrubiony) ≥ 3:1.
- **Dlaczego:** Dotyczy 83,9% stron głównych w badaniu WebAIM Million 2026.
- **Jak sprawdzić:** axe i kalkulator kontrastu, także stany hover i tekst na zdjęciach.
- **Poprawka:** Przyciemnij tekst lub zmień tło, zapisz kolory jako zmienne.
- **Test automatyczny:** `axe:color-contrast`
- **Źródła:** [WCAG 2.2, 1.4.3 Contrast (Minimum) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html); [WebAIM, Kontrast i kolor](https://webaim.org/articles/contrast/); [WebAIM, The WebAIM Million 2026](https://webaim.org/projects/million/)

<a id="kol-02"></a>

## KOL-02 Kontrast elementów interfejsu wynosi co najmniej 3:1

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Krawędzie pól, ikony informacyjne, stany zaznaczenia i grafiki niosące treść mają ≥ 3:1 wobec sąsiedniego koloru.
- **Dlaczego:** Ledwo widoczna ramka pola sprawia, że formularz nie wygląda jak formularz.
- **Jak sprawdzić:** Zmierz krawędzie pól, ikony i przełączniki.
- **Poprawka:** Wzmocnij kolor krawędzi i ikon.
- **Źródła:** [WCAG 2.2, 1.4.11 Non-text Contrast (AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

<a id="kol-03"></a>

## KOL-03 Informacja nie jest przekazana samym kolorem

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Błąd, status, pole wymagane i link są rozpoznawalne bez koloru (tekst, ikona, podkreślenie).
- **Dlaczego:** Osoba nierozróżniająca barw nie zobaczy czerwonego pola.
- **Jak sprawdzić:** Obejrzyj zrzut w skali szarości.
- **Poprawka:** Dodaj tekst, ikonę lub podkreślenie.
- **Test automatyczny:** `axe:link-in-text-block`
- **Źródła:** [WCAG 2.2, 1.4.1 Use of Color (A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

<a id="kol-04"></a>

## KOL-04 Tekst na zdjęciu ma zapewniony kontrast

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Tekst na obrazie lub gradiencie spełnia 4,5:1 w najgorszym miejscu.
- **Dlaczego:** Kontrast zmienia się wraz z kadrem, więc średnia nie wystarcza.
- **Jak sprawdzić:** Zmierz kontrast w najjaśniejszym miejscu pod tekstem.
- **Poprawka:** Dodaj nakładkę albo przenieś tekst poza obraz.
- **Źródła:** [WCAG 2.2, 1.4.3 Contrast (Minimum) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html); [Nielsen Norman Group, Niski kontrast](https://www.nngroup.com/articles/low-contrast/); [W3C COGA, 4.4.11 Ensure Foreground Content is not Obscured by Background](https://www.w3.org/TR/coga-usable/#ensure-foreground-content-is-not-obscured-by-background-pattern)

<a id="kol-05"></a>

## KOL-05 Strona działa z ustawieniami kolorów użytkownika

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** W trybie wysokiego kontrastu i w trybie ciemnym (jeśli istnieje) treść i kontrolki są widoczne, a kontrast dalej spełnia normę.
- **Dlaczego:** Część osób lepiej czyta w trybie ciemnym, część w jasnym. Wybór powinien należeć do nich.
- **Jak sprawdzić:** Emuluj prefers-color-scheme: dark i forced-colors, zrób zrzuty.
- **Poprawka:** Nie usuwaj obramowań, przetestuj oba motywy.
- **Źródła:** [Nielsen Norman Group, Tryb ciemny a jasny](https://www.nngroup.com/articles/dark-mode/); [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf); [W3C COGA, 4.9.2 Enable APIs and Extensions](https://www.w3.org/TR/coga-usable/#enable-apis-and-extensions-pattern)

<a id="kol-06"></a>

## KOL-06 Paleta jest spokojna, a kolory mają stałe znaczenie

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Kolor akcji, błędu i sukcesu oznacza zawsze to samo. Brak jaskrawych, kontrastujących plam w tle treści.
- **Dlaczego:** Proste kolory zalecane są m.in. dla osób w spektrum autyzmu (Home Office).
- **Jak sprawdzić:** Wypisz kolory i ich znaczenie na wszystkich ekranach.
- **Poprawka:** Ogranicz paletę i opisz role kolorów.
- **Źródła:** [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf); [Nielsen Norman Group, Heurystyka 4: spójność i standardy](https://www.nngroup.com/articles/consistency-and-standards/)

---

[← Typografia i czytelność](04-typografia.md) · [Mapa wiedzy](../README.md) · [Treść i język →](06-tresc-jezyk.md)
