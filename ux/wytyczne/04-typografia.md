<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Typografia i czytelność (TYP)

[← Układ i hierarchia wizualna](03-uklad-hierarchia.md) · [Mapa wiedzy](../README.md) · [Kolor i kontrast →](05-kolor-kontrast.md)

Parametry tekstu, które można zmierzyć w narzędziach deweloperskich.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [TYP-01](#typ-01) | Tekst główny ma co najmniej 16 px | WYTYCZNA | 2 | automat |
| [TYP-02](#typ-02) | Tekst powiększa się do 200% bez utraty treści | NORMA AA | 3 | ręcznie |
| [TYP-03](#typ-03) | Wiersz ma 45–90 znaków, najlepiej 50–75 | BADANIE | 2 | automat |
| [TYP-04](#typ-04) | Interlinia tekstu ciągłego wynosi około 1,5 | NORMA AAA | 1 | automat |
| [TYP-05](#typ-05) | Zmiana odstępów tekstu nie psuje strony | NORMA AA | 2 | automat |
| [TYP-06](#typ-06) | Tekst jest wyrównany do lewej | NORMA AAA | 1 | automat |
| [TYP-07](#typ-07) | Wyróżnienia nie używają podkreśleń, kursywy i długich WERSALIKÓW | WYTYCZNA | 1 | automat |
| [TYP-08](#typ-08) | Tekst nie jest obrazem | NORMA AA | 2 | ręcznie |

<a id="typ-01"></a>

## TYP-01 Tekst główny ma co najmniej 16 px

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Treść ciągła ma rozmiar ≥ 16 px. GOV.UK stosuje 19 px na dużym i 16 px na małym ekranie.
- **Dlaczego:** Zbyt mały tekst zmusza do powiększania i spowalnia czytanie.
- **Jak sprawdzić:** Zmierz font-size akapitów w narzędziach deweloperskich.
- **Poprawka:** Ustaw 1rem lub więcej dla treści.
- **Test automatyczny:** `x:fontsize`
- **Źródła:** [GOV.UK, GOV.UK Design System: skala typograficzna](https://design-system.service.gov.uk/styles/type-scale/); [Nielsen Norman Group, Czytelność i zrozumiałość](https://www.nngroup.com/articles/legibility-readability-comprehension/)

<a id="typ-02"></a>

## TYP-02 Tekst powiększa się do 200% bez utraty treści

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Przy zoomie 200% tekst nie nachodzi, nie jest obcięty i wszystkie funkcje działają.
- **Dlaczego:** Powiększenie to najprostsza pomoc dla osób słabowidzących.
- **Jak sprawdzić:** Ustaw zoom 200% i przejdź ścieżkę.
- **Poprawka:** Używaj jednostek względnych, unikaj stałych wysokości bloków.
- **Test automatyczny:** `axe:meta-viewport`
- **Źródła:** [WCAG 2.2, 1.4.4 Resize Text (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

<a id="typ-03"></a>

## TYP-03 Wiersz ma 45–90 znaków, najlepiej 50–75

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Kolumna tekstu ciągłego ma 50–75 znaków (Baymard), dopuszczalnie 45–90 (USWDS). Norma AAA: maks. 80.
- **Dlaczego:** Zbyt długi wiersz utrudnia powrót wzroku do początku następnego.
- **Jak sprawdzić:** Policz znaki w najdłuższym wierszu akapitu na desktopie.
- **Poprawka:** Ogranicz max-width akapitu do ok. 65ch.
- **Test automatyczny:** `x:linelength`
- **Źródła:** [Baymard Institute, Długość wiersza](https://baymard.com/research-articles/line-length-readability); [U.S. GSA, USWDS: typografia](https://designsystem.digital.gov/components/typography/); [WCAG 2.2, 1.4.8 Visual Presentation (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)

<a id="typ-04"></a>

## TYP-04 Interlinia tekstu ciągłego wynosi około 1,5

**Siła:** NORMA AAA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** line-height akapitów co najmniej 1,5, odstęp między akapitami co najmniej 1,5 raza większy od interlinii (poziom AAA).
- **Dlaczego:** Większa interlinia ułatwia śledzenie wierszy, m.in. osobom z dysleksją.
- **Jak sprawdzić:** Odczytaj line-height akapitów.
- **Poprawka:** Ustaw line-height: 1.5 i margines akapitu.
- **Test automatyczny:** `x:lineheight`
- **Źródła:** [WCAG 2.2, 1.4.8 Visual Presentation (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html); [U.S. GSA, USWDS: typografia](https://designsystem.digital.gov/components/typography/)

<a id="typ-05"></a>

## TYP-05 Zmiana odstępów tekstu nie psuje strony

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Po ustawieniu: interlinia 1,5, odstęp po akapicie 2, litery 0,12 i słowa 0,16 rozmiaru fontu, treść i funkcje pozostają dostępne.
- **Dlaczego:** Osoby z dysleksją narzucają własne odstępy.
- **Jak sprawdzić:** Zastosuj skrypt z audytu albo bookmarklet Text Spacing.
- **Poprawka:** Usuń stałe wysokości i overflow: hidden w blokach z tekstem.
- **Test automatyczny:** `x:textspacing`
- **Źródła:** [WCAG 2.2, 1.4.12 Text Spacing (AA)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

<a id="typ-06"></a>

## TYP-06 Tekst jest wyrównany do lewej

**Siła:** NORMA AAA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Dłuższe bloki nie są justowane ani wyśrodkowane.
- **Dlaczego:** Justowanie tworzy nierówne odstępy, trudne przy dysleksji.
- **Jak sprawdzić:** Sprawdź text-align akapitów dłuższych niż 2 wiersze.
- **Poprawka:** Ustaw text-align: start.
- **Test automatyczny:** `x:justify`
- **Źródła:** [WCAG 2.2, 1.4.8 Visual Presentation (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html); [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf)

<a id="typ-07"></a>

## TYP-07 Wyróżnienia nie używają podkreśleń, kursywy i długich WERSALIKÓW

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Podkreślenie zarezerwowane dla linków, brak kursywy i wersalików w całych zdaniach. Wyróżnienie przez pogrubienie.
- **Dlaczego:** Kursywa i wersaliki zacierają kształt słów (plakaty Home Office).
- **Jak sprawdzić:** Przejrzyj nagłówki, przyciski i akapity.
- **Poprawka:** Zamień na pogrubienie lub wielkość tekstu.
- **Test automatyczny:** `x:caps`
- **Źródła:** [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf)

<a id="typ-08"></a>

## TYP-08 Tekst nie jest obrazem

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Tekst jest prawdziwym tekstem. Wyjątek: logo.
- **Dlaczego:** Obrazu nie da się powiększyć bez straty, przetłumaczyć ani odczytać.
- **Jak sprawdzić:** Spróbuj zaznaczyć tekst na banerach.
- **Poprawka:** Zamień grafikę na HTML i CSS.
- **Źródła:** [WCAG 2.2, 1.4.5 Images of Text (AA)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)

---

[← Układ i hierarchia wizualna](03-uklad-hierarchia.md) · [Mapa wiedzy](../README.md) · [Kolor i kontrast →](05-kolor-kontrast.md)
