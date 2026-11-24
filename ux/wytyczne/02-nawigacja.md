<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Nawigacja i architektura informacji (NAV)

[← Heurystyki użyteczności](01-heurystyki.md) · [Mapa wiedzy](../README.md) · [Układ i hierarchia wizualna →](03-uklad-hierarchia.md)

Czy użytkownik wie, gdzie jest, dokąd może pójść i jak wrócić.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [NAV-01](#nav-01) | Każda strona ma unikalny, opisowy tytuł | NORMA A | 2 | automat |
| [NAV-02](#nav-02) | Menu główne jest spójne na wszystkich stronach | NORMA AA | 2 | automat |
| [NAV-03](#nav-03) | Aktualna strona jest oznaczona w nawigacji | BADANIE | 2 | automat |
| [NAV-04](#nav-04) | Na dużym ekranie główna nawigacja jest widoczna | BADANIE | 2 | automat |
| [NAV-05](#nav-05) | Do każdej strony prowadzą co najmniej dwie drogi | NORMA AA | 2 | ręcznie |
| [NAV-06](#nav-06) | Głębokie strony mają okruszki | BADANIE | 1 | ręcznie |
| [NAV-07](#nav-07) | Tekst linku mówi, dokąd prowadzi | NORMA A | 2 | automat |
| [NAV-08](#nav-08) | Nie ma martwych linków i przycisków | BADANIE | 3 | automat |
| [NAV-09](#nav-09) | Nowa karta jest zapowiedziana | BADANIE | 1 | automat |
| [NAV-10](#nav-10) | Strona 404 pomaga wrócić do zadania | WYTYCZNA | 1 | automat |

<a id="nav-01"></a>

## NAV-01 Każda strona ma unikalny, opisowy tytuł

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Element <title> jest niepusty, opisuje temat strony, zaczyna się od części unikalnej i nie powtarza się na innych stronach.
- **Dlaczego:** Tytuł to pierwsza rzecz odczytana przez czytnik ekranu i nazwa karty.
- **Jak sprawdzić:** Sprawdź <title> na każdym ekranie ścieżki.
- **Poprawka:** Stosuj wzór „Nazwa ekranu | Nazwa serwisu”.
- **Test automatyczny:** `axe:document-title`, `x:title`
- **Źródła:** [WCAG 2.2, 2.4.2 Page Titled (A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html); [W3C, WCAG Technique H25: element title](https://www.w3.org/WAI/WCAG22/Techniques/html/H25); [Google, Google Search: tytuły stron](https://developers.google.com/search/docs/appearance/title-link)

<a id="nav-02"></a>

## NAV-02 Menu główne jest spójne na wszystkich stronach

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Powtarzająca się nawigacja ma tę samą względną kolejność na każdej stronie.
- **Dlaczego:** Przewidywalna nawigacja zmniejsza wysiłek, zwłaszcza u osób z trudnościami poznawczymi.
- **Jak sprawdzić:** Porównaj kolejność pozycji menu na wszystkich ekranach.
- **Poprawka:** Użyj jednego komponentu menu w całym serwisie.
- **Test automatyczny:** `x:menu`
- **Źródła:** [WCAG 2.2, 3.2.3 Consistent Navigation (AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html); [W3C COGA, 4.2.2 Use a Familiar Hierarchy and Design](https://www.w3.org/TR/coga-usable/#use-a-familiar-hierarchy-and-design-pattern)

<a id="nav-03"></a>

## NAV-03 Aktualna strona jest oznaczona w nawigacji

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Pozycja menu odpowiadająca bieżącej stronie wyróżnia się wizualnie i ma aria-current="page".
- **Dlaczego:** Brak odpowiedzi na pytanie „gdzie jestem” to jeden z najczęstszych błędów menu.
- **Jak sprawdzić:** Sprawdź wygląd i kod menu na każdym ekranie.
- **Poprawka:** Dodaj wyróżnienie inne niż sam kolor i aria-current.
- **Test automatyczny:** `x:current`
- **Źródła:** [Nielsen Norman Group, Checklista projektowania menu](https://www.nngroup.com/articles/menu-design/); [W3C WAI, WAI Tutorials: struktura menu](https://www.w3.org/WAI/tutorials/menus/structure/); [WCAG 2.2, 2.4.8 Location (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/location.html)

<a id="nav-04"></a>

## NAV-04 Na dużym ekranie główna nawigacja jest widoczna

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Na desktopie najważniejsze kategorie są widoczne bez rozwijania. Menu hamburger nie zastępuje ich na szerokim ekranie.
- **Dlaczego:** Ukrycie nawigacji zmniejsza jej odkrywalność prawie o połowę (NN/g).
- **Jak sprawdzić:** Otwórz stronę w 1440 px i policz widoczne pozycje menu.
- **Poprawka:** Pokaż 4–7 głównych pozycji, resztę zostaw w rozwinięciu.
- **Test automatyczny:** `x:nav`
- **Źródła:** [Nielsen Norman Group, Menu hamburger i ukryta nawigacja](https://www.nngroup.com/articles/hamburger-menus/)

<a id="nav-05"></a>

## NAV-05 Do każdej strony prowadzą co najmniej dwie drogi

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Stronę można znaleźć dwoma sposobami, np. menu i wyszukiwarką, mapą strony lub linkami. Wyjątek: krok procesu.
- **Dlaczego:** Użytkownicy szukają w różny sposób, jedni przeglądają, inni wyszukują.
- **Jak sprawdzić:** Dla 3 podstron wskaż dwie niezależne drogi dojścia.
- **Poprawka:** Dodaj wyszukiwarkę, mapę strony albo linki powiązane.
- **Źródła:** [WCAG 2.2, 2.4.5 Multiple Ways (AA)](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html); [W3C COGA, 4.3.6 Provide Search](https://www.w3.org/TR/coga-usable/#provide-search-pattern)

<a id="nav-06"></a>

## NAV-06 Głębokie strony mają okruszki

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** W serwisie o strukturze hierarchicznej strona niższego poziomu pokazuje ścieżkę okruszków, a ostatni element nie jest linkiem.
- **Dlaczego:** Okruszki pomagają osobom, które trafiły głęboko z wyszukiwarki.
- **Jak sprawdzić:** Wejdź bezpośrednio na podstronę. Sprawdź, czy wiadomo, gdzie jesteś.
- **Poprawka:** Dodaj okruszki z aria-label i linkami do wyższych poziomów.
- **Źródła:** [Nielsen Norman Group, Okruszki](https://www.nngroup.com/articles/breadcrumbs/); [WCAG 2.2, 2.4.8 Location (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/location.html)

<a id="nav-07"></a>

## NAV-07 Tekst linku mówi, dokąd prowadzi

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Cel linku wynika z jego tekstu lub kontekstu. Nie używa się „kliknij tutaj”, „więcej”, „czytaj dalej” bez dopowiedzenia.
- **Dlaczego:** Linki są skanowane w oderwaniu od reszty tekstu, także na liście czytnika ekranu.
- **Jak sprawdzić:** Wypisz wszystkie linki i przeczytaj je bez kontekstu.
- **Poprawka:** Zmień tekst na nazwę celu, np. „Cennik dostawy”.
- **Test automatyczny:** `axe:link-name`, `x:genericlinks`
- **Źródła:** [WCAG 2.2, 2.4.4 Link Purpose (In Context) (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html); [Nielsen Norman Group, Pisanie linków](https://www.nngroup.com/articles/writing-links/); [Nielsen Norman Group, Information scent](https://www.nngroup.com/articles/information-scent/)

<a id="nav-08"></a>

## NAV-08 Nie ma martwych linków i przycisków

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Każdy link prowadzi do istniejącej treści, a każdy przycisk wykonuje akcję. Brak href="#" i linków z kodem 4xx/5xx.
- **Dlaczego:** Element bez działania podważa zaufanie i zatrzymuje zadanie.
- **Jak sprawdzić:** Kliknij wszystkie elementy na ścieżce, sprawdź kody odpowiedzi.
- **Poprawka:** Podłącz działanie, usuń element albo oznacz, że będzie później.
- **Test automatyczny:** `x:deadlinks`, `x:brokenlinks`
- **Źródła:** [Nielsen Norman Group, 4 czynniki wiarygodności](https://www.nngroup.com/articles/trustworthy-design/); [Nielsen Norman Group, Heurystyka 1: widoczność stanu systemu](https://www.nngroup.com/articles/visibility-system-status/); [MDN, MDN: kod 404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)

<a id="nav-09"></a>

## NAV-09 Nowa karta jest zapowiedziana

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Linki otwierają się w tej samej karcie. Wyjątki (np. plik) są oznaczone w tekście lub ikoną z tekstem alternatywnym.
- **Dlaczego:** Nieoczekiwana karta psuje działanie „Wstecz” i dezorientuje.
- **Jak sprawdzić:** Znajdź target="_blank" i sprawdź, czy link to zapowiada.
- **Poprawka:** Usuń target albo dodaj „(otwiera się w nowej karcie)”.
- **Test automatyczny:** `x:newtab`
- **Źródła:** [Nielsen Norman Group, Linki w nowych oknach i kartach](https://www.nngroup.com/articles/new-browser-windows-and-tabs/); [WCAG 2.2, 3.2.5 Change on Request (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html)

<a id="nav-10"></a>

## NAV-10 Strona 404 pomaga wrócić do zadania

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Nieistniejący adres zwraca kod 404 i stronę bez żargonu, która mówi, co zrobić, z linkiem do strony głównej lub wyszukiwarki.
- **Dlaczego:** Błędny adres nie powinien kończyć wizyty.
- **Jak sprawdzić:** Otwórz nieistniejący adres. Sprawdź kod HTTP i treść.
- **Poprawka:** Przygotuj stronę 404 wg wzoru GOV.UK.
- **Test automatyczny:** `x:404`
- **Źródła:** [GOV.UK, GOV.UK Design System: strona nie znaleziona](https://design-system.service.gov.uk/patterns/page-not-found-pages/); [MDN, MDN: kod 404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)

---

[← Heurystyki użyteczności](01-heurystyki.md) · [Mapa wiedzy](../README.md) · [Układ i hierarchia wizualna →](03-uklad-hierarchia.md)
