<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Klawiatura i fokus (KLA)

[← Formularze i błędy](07-formularze-bledy.md) · [Mapa wiedzy](../README.md) · [Semantyka i czytniki ekranu →](09-semantyka-czytniki.md)

Test: odłóż mysz i przejdź całą ścieżkę klawiszami Tab, Shift+Tab, Enter, Spacja, strzałki, Esc.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [KLA-01](#kla-01) | Wszystko działa z klawiatury | NORMA A | 4 | na ścieżce persony |
| [KLA-02](#kla-02) | Nie ma pułapki na klawiaturę | NORMA A | 4 | na ścieżce persony |
| [KLA-03](#kla-03) | Fokus jest widoczny | NORMA AA | 3 | automat |
| [KLA-04](#kla-04) | Fokus nie chowa się pod przyklejonymi elementami | NORMA AA | 2 | ręcznie |
| [KLA-05](#kla-05) | Kolejność fokusu jest logiczna | NORMA A | 3 | automat |
| [KLA-06](#kla-06) | Jest link „Przejdź do treści” | NORMA A | 2 | automat |
| [KLA-07](#kla-07) | Okno modalne zarządza fokusem | WYTYCZNA | 3 | na ścieżce persony |
| [KLA-08](#kla-08) | Fokus i wpisywanie nie zmieniają kontekstu same | NORMA A | 3 | na ścieżce persony |
| [KLA-09](#kla-09) | Skróty jednoliterowe można wyłączyć | NORMA A | 2 | ręcznie |

<a id="kla-01"></a>

## KLA-01 Wszystko działa z klawiatury

**Siła:** NORMA A · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Każda funkcja dostępna myszą jest dostępna z klawiatury, bez wymogu tempa.
- **Dlaczego:** Z klawiatury korzystają m.in. osoby z niepełnosprawnością ruchu i użytkownicy czytników.
- **Jak sprawdzić:** Przejdź całą ścieżkę bez myszy.
- **Poprawka:** Użyj natywnych <button> i <a href>.
- **Test automatyczny:** `x:keyboard`, `axe:scrollable-region-focusable`
- **Źródła:** [WCAG 2.2, 2.1.1 Keyboard (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html); [W3C, Using ARIA](https://www.w3.org/TR/using-aria/)

<a id="kla-02"></a>

## KLA-02 Nie ma pułapki na klawiaturę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Z każdego elementu można wyjść klawiaturą.
- **Dlaczego:** Pułapka uniemożliwia dalsze korzystanie ze strony.
- **Jak sprawdzić:** Tabuluj przez okna, mapy, odtwarzacze.
- **Poprawka:** Obsłuż Esc i poprawny powrót fokusu.
- **Źródła:** [WCAG 2.2, 2.1.2 No Keyboard Trap (A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

<a id="kla-03"></a>

## KLA-03 Fokus jest widoczny

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Element z fokusem ma wyraźny wskaźnik. Nie usunięto outline bez zamiennika. Zalecane: kontrast 3:1 i grubość 2 px (AAA).
- **Dlaczego:** Bez wskaźnika nie wiadomo, co uruchomi Enter.
- **Jak sprawdzić:** Tabuluj i rób zrzuty.
- **Poprawka:** Dodaj :focus-visible { outline: 3px solid; outline-offset: 2px }.
- **Test automatyczny:** `x:focusvisible`
- **Źródła:** [WCAG 2.2, 2.4.7 Focus Visible (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html); [W3C, WCAG Technique F78: usunięty wskaźnik fokusu](https://www.w3.org/WAI/WCAG22/Techniques/failures/F78); [WCAG 2.2, 2.4.13 Focus Appearance (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)

<a id="kla-04"></a>

## KLA-04 Fokus nie chowa się pod przyklejonymi elementami

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Element z fokusem nie jest w całości zasłonięty nagłówkiem, stopką ani banerem cookies.
- **Dlaczego:** Przyklejony nagłówek często zakrywa fokus.
- **Jak sprawdzić:** Tabuluj w dół i w górę, obserwuj nagłówek i baner.
- **Poprawka:** Dodaj scroll-padding i zmniejsz elementy przyklejone.
- **Test automatyczny:** `x:focusobscured`
- **Źródła:** [WCAG 2.2, 2.4.11 Focus Not Obscured (Minimum) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html); [Nielsen Norman Group, Przyklejone nagłówki](https://www.nngroup.com/articles/sticky-headers/)

<a id="kla-05"></a>

## KLA-05 Kolejność fokusu jest logiczna

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Kolejność odpowiada układowi i znaczeniu. Brak dodatnich wartości tabindex.
- **Dlaczego:** Skoki fokusu gubią orientację.
- **Jak sprawdzić:** Zapisz kolejność i porównaj z wizualną.
- **Poprawka:** Uporządkuj kod, usuń tabindex > 0.
- **Test automatyczny:** `axe:tabindex`
- **Źródła:** [WCAG 2.2, 2.4.3 Focus Order (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html); [WCAG 2.2, 1.3.2 Meaningful Sequence (A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

<a id="kla-06"></a>

## KLA-06 Jest link „Przejdź do treści”

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Pierwszy element fokusu pozwala pominąć powtarzające się bloki, jest widoczny po fokusie i działa.
- **Dlaczego:** Bez niego trzeba przejść menu na każdej stronie.
- **Jak sprawdzić:** Naciśnij Tab po wczytaniu strony, potem Enter.
- **Poprawka:** Dodaj skip link do <main id>.
- **Test automatyczny:** `axe:bypass`, `x:skiplink`
- **Źródła:** [WCAG 2.2, 2.4.1 Bypass Blocks (A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html); [GOV.UK, GOV.UK Design System: skip link](https://design-system.service.gov.uk/components/skip-link/)

<a id="kla-07"></a>

## KLA-07 Okno modalne zarządza fokusem

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Po otwarciu fokus jest w oknie, Tab nie wychodzi poza nie, Esc zamyka, a fokus wraca do przycisku otwierającego.
- **Dlaczego:** Inaczej użytkownik klawiatury porusza się pod oknem.
- **Jak sprawdzić:** Otwórz i zamknij każde okno klawiaturą.
- **Poprawka:** Użyj <dialog> z showModal() lub wzorca APG.
- **Test automatyczny:** `axe:aria-dialog-name`
- **Źródła:** [W3C WAI, APG: okno modalne](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/); [WCAG 2.2, 2.4.3 Focus Order (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

<a id="kla-08"></a>

## KLA-08 Fokus i wpisywanie nie zmieniają kontekstu same

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Fokus lub zmiana wartości nie otwiera strony, nie wysyła formularza i nie przenosi użytkownika bez zapowiedzi.
- **Dlaczego:** Nagła zmiana dezorientuje.
- **Jak sprawdzić:** Zmieniaj listy wyboru klawiaturą.
- **Poprawka:** Dodaj przycisk zatwierdzający.
- **Źródła:** [WCAG 2.2, 3.2.1 On Focus (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html); [WCAG 2.2, 3.2.2 On Input (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)

<a id="kla-09"></a>

## KLA-09 Skróty jednoliterowe można wyłączyć

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Skrót z samej litery, cyfry lub znaku można wyłączyć, zmienić lub działa tylko przy fokusie na elemencie.
- **Dlaczego:** Sterowanie głosem może przypadkiem uruchomić skrót.
- **Jak sprawdzić:** Naciskaj pojedyncze litery poza polami tekstowymi.
- **Poprawka:** Usuń skróty albo dodaj ustawienie.
- **Źródła:** [WCAG 2.2, 2.1.4 Character Key Shortcuts (A)](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)

---

[← Formularze i błędy](07-formularze-bledy.md) · [Mapa wiedzy](../README.md) · [Semantyka i czytniki ekranu →](09-semantyka-czytniki.md)
