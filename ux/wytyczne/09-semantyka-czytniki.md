<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Semantyka i czytniki ekranu (SEM)

[← Klawiatura i fokus](08-klawiatura-fokus.md) · [Mapa wiedzy](../README.md) · [Multimedia i ruch →](10-multimedia-ruch.md)

Pierwsza zasada ARIA: jeśli istnieje natywny element HTML, użyj jego.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [SEM-01](#sem-01) | Każdy obraz ma właściwy tekst alternatywny | NORMA A | 3 | automat |
| [SEM-02](#sem-02) | Nagłówki tworzą logiczną strukturę | NORMA A | 2 | automat |
| [SEM-03](#sem-03) | Strona ma regiony | WYTYCZNA | 2 | automat |
| [SEM-04](#sem-04) | Link to <a href>, przycisk to <button> | WYTYCZNA | 3 | automat |
| [SEM-05](#sem-05) | Każda kontrolka ma nazwę | NORMA A | 3 | automat |
| [SEM-06](#sem-06) | Nazwa dostępna zawiera widoczny tekst | NORMA A | 2 | automat |
| [SEM-07](#sem-07) | ARIA jest poprawna | WYTYCZNA | 2 | automat |
| [SEM-08](#sem-08) | Rozwijane elementy ogłaszają stan | WYTYCZNA | 2 | ręcznie |
| [SEM-09](#sem-09) | Komunikaty dynamiczne są ogłaszane | NORMA AA | 2 | na ścieżce persony |
| [SEM-10](#sem-10) | Tabele danych mają nagłówki | WYTYCZNA | 2 | automat |
| [SEM-11](#sem-11) | Listy i grupy są oznaczone | NORMA A | 2 | automat |
| [SEM-12](#sem-12) | Instrukcje nie opierają się na kształcie, położeniu ani dźwięku | NORMA A | 2 | ręcznie |

<a id="sem-01"></a>

## SEM-01 Każdy obraz ma właściwy tekst alternatywny

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Obraz informacyjny ma alt opisujący treść, dekoracyjny pusty alt, a obraz-link opis celu.
- **Dlaczego:** Brak alt miało 53,1% stron głównych (WebAIM Million 2026).
- **Jak sprawdzić:** Przejdź drzewo decyzyjne WAI dla każdego obrazu.
- **Poprawka:** Uzupełnij alt lub ustaw alt="".
- **Test automatyczny:** `axe:image-alt`, `axe:input-image-alt`, `axe:svg-img-alt`, `axe:role-img-alt`
- **Źródła:** [WCAG 2.2, 1.1.1 Non-text Content (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html); [W3C WAI, WAI: drzewo decyzyjne tekstu alternatywnego](https://www.w3.org/WAI/tutorials/images/decision-tree/); [W3C WAI, WAI Tutorials: obrazy dekoracyjne](https://www.w3.org/WAI/tutorials/images/decorative/); [WebAIM, The WebAIM Million 2026](https://webaim.org/projects/million/)

<a id="sem-02"></a>

## SEM-02 Nagłówki tworzą logiczną strukturę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Jeden główny nagłówek h1 opisujący stronę, poziomy bez przeskoków, nagłówki oznaczone h1–h6, a nie samym stylem.
- **Dlaczego:** Nagłówki są główną metodą poruszania się z czytnikiem.
- **Jak sprawdzić:** Wypisz nagłówki (HeadingsMap).
- **Poprawka:** Popraw poziomy, zmień style w CSS.
- **Test automatyczny:** `axe:heading-order`, `axe:page-has-heading-one`, `axe:empty-heading`, `x:h1`
- **Źródła:** [WCAG 2.2, 1.3.1 Info and Relationships (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html); [W3C WAI, WAI Tutorials: nagłówki](https://www.w3.org/WAI/tutorials/page-structure/headings/)

<a id="sem-03"></a>

## SEM-03 Strona ma regiony

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Treść jest w header, nav, main, footer. Jeden main, wiele nav ma różne nazwy.
- **Dlaczego:** Regiony pozwalają przeskoczyć do treści.
- **Jak sprawdzić:** Sprawdź listę regionów w czytniku.
- **Poprawka:** Zamień div na elementy semantyczne.
- **Test automatyczny:** `axe:landmark-one-main`, `axe:region`, `axe:landmark-unique`, `axe:landmark-no-duplicate-main`
- **Źródła:** [W3C WAI, APG: regiony strony (landmarks)](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/); [W3C WAI, WAI Tutorials: regiony strony](https://www.w3.org/WAI/tutorials/page-structure/regions/); [WCAG 2.2, 1.3.1 Info and Relationships (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

<a id="sem-04"></a>

## SEM-04 Link to <a href>, przycisk to <button>

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Nawigacja używa <a href>, akcja <button>. Brak klikalnych div i span.
- **Dlaczego:** Natywny element daje fokus, rolę i obsługę klawiatury.
- **Jak sprawdzić:** Szukaj onclick na div/span i a bez href.
- **Poprawka:** Zamień element na natywny.
- **Test automatyczny:** `axe:nested-interactive`, `x:fakebuttons`
- **Źródła:** [W3C, Using ARIA](https://www.w3.org/TR/using-aria/); [WCAG 2.2, 4.1.2 Name, Role, Value (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

<a id="sem-05"></a>

## SEM-05 Każda kontrolka ma nazwę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Przyciski i linki, także same ikony, mają dostępną nazwę opisującą akcję.
- **Dlaczego:** Puste linki: 46,3% stron, puste przyciski: 30,6% (WebAIM Million 2026).
- **Jak sprawdzić:** Sprawdź drzewo dostępności dla ikon.
- **Poprawka:** Dodaj tekst lub aria-label.
- **Test automatyczny:** `axe:button-name`, `axe:link-name`, `axe:aria-command-name`, `axe:aria-input-field-name`
- **Źródła:** [WCAG 2.2, 4.1.2 Name, Role, Value (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html); [WCAG 2.2, 2.4.4 Link Purpose (In Context) (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html); [WebAIM, The WebAIM Million 2026](https://webaim.org/projects/million/)

<a id="sem-06"></a>

## SEM-06 Nazwa dostępna zawiera widoczny tekst

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Jeśli przycisk ma tekst, aria-label zawiera ten sam tekst.
- **Dlaczego:** Osoby sterujące głosem mówią to, co widzą.
- **Jak sprawdzić:** Porównaj tekst z aria-label.
- **Poprawka:** Usuń aria-label albo zacznij go od widocznego tekstu.
- **Test automatyczny:** `axe:label-content-name-mismatch`
- **Źródła:** [WCAG 2.2, 2.5.3 Label in Name (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

<a id="sem-07"></a>

## SEM-07 ARIA jest poprawna

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Role, stany i właściwości są dozwolone dla elementu, a wartości prawidłowe. Brak aria-label na elementach bez roli.
- **Dlaczego:** Błędna ARIA jest gorsza niż brak ARIA.
- **Jak sprawdzić:** Uruchom axe, sprawdź stany w drzewie dostępności.
- **Poprawka:** Usuń zbędną ARIA.
- **Test automatyczny:** `axe:aria-allowed-attr`, `axe:aria-allowed-role`, `axe:aria-prohibited-attr`, `axe:aria-required-attr`, `axe:aria-required-children`, `axe:aria-required-parent`, `axe:aria-roles`, `axe:aria-valid-attr`, `axe:aria-valid-attr-value`, `axe:aria-hidden-focus`
- **Źródła:** [W3C, Using ARIA](https://www.w3.org/TR/using-aria/); [WCAG 2.2, 4.1.2 Name, Role, Value (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

<a id="sem-08"></a>

## SEM-08 Rozwijane elementy ogłaszają stan

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Menu, akordeon i filtr mają aria-expanded zgodne ze stanem.
- **Dlaczego:** Bez stanu użytkownik czytnika nie wie, czy coś się otworzyło.
- **Jak sprawdzić:** Otwórz element i sprawdź zmianę aria-expanded.
- **Poprawka:** Użyj <details> lub wzorca disclosure.
- **Źródła:** [W3C WAI, APG: rozwijanie treści (disclosure)](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/); [WCAG 2.2, 4.1.2 Name, Role, Value (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

<a id="sem-09"></a>

## SEM-09 Komunikaty dynamiczne są ogłaszane

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Potwierdzenia, liczba wyników i błędy mają role="status" lub role="alert".
- **Dlaczego:** Zmiana poza fokusem jest niewidoczna dla czytnika.
- **Jak sprawdzić:** Dodaj produkt, wyszukaj, wyślij formularz z czytnikiem.
- **Poprawka:** Dodaj region aria-live.
- **Źródła:** [WCAG 2.2, 4.1.3 Status Messages (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html); [W3C, WCAG Technique ARIA19: role=alert](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19)

<a id="sem-10"></a>

## SEM-10 Tabele danych mają nagłówki

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Dane tabelaryczne są w <table> z <th scope> i podpisem. Tabela nie służy do układu.
- **Dlaczego:** Bez nagłówków komórki są odczytywane jako lista liczb.
- **Jak sprawdzić:** Sprawdź kod tabel.
- **Poprawka:** Dodaj th, scope i caption.
- **Test automatyczny:** `axe:td-headers-attr`, `axe:th-has-data-cells`, `axe:scope-attr-valid`
- **Źródła:** [W3C WAI, WAI Tutorials: tabele](https://www.w3.org/WAI/tutorials/tables/); [WCAG 2.2, 1.3.1 Info and Relationships (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

<a id="sem-11"></a>

## SEM-11 Listy i grupy są oznaczone

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Listy w ul/ol/dl, grupy pól radio i checkbox w fieldset z legend.
- **Dlaczego:** Struktura mówi, ile jest elementów i czego dotyczą.
- **Jak sprawdzić:** Sprawdź kod menu, list produktów i grup opcji.
- **Poprawka:** Użyj elementów listy i fieldset.
- **Test automatyczny:** `axe:list`, `axe:listitem`, `axe:definition-list`, `axe:dlitem`
- **Źródła:** [WCAG 2.2, 1.3.1 Info and Relationships (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html); [W3C WAI, WAI Tutorials: formularze](https://www.w3.org/WAI/tutorials/forms/)

<a id="sem-12"></a>

## SEM-12 Instrukcje nie opierają się na kształcie, położeniu ani dźwięku

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Instrukcja nie mówi wyłącznie „kliknij zielony przycisk po prawej”, podaje też nazwę elementu.
- **Dlaczego:** Takiej wskazówki nie odbierze osoba niewidoma ani użytkownik innego układu.
- **Jak sprawdzić:** Przeczytaj instrukcje i wyszukaj: obok, po prawej, okrągły, zielony.
- **Poprawka:** Dodaj nazwę elementu.
- **Źródła:** [WCAG 2.2, 1.3.3 Sensory Characteristics (A)](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)

---

[← Klawiatura i fokus](08-klawiatura-fokus.md) · [Mapa wiedzy](../README.md) · [Multimedia i ruch →](10-multimedia-ruch.md)
