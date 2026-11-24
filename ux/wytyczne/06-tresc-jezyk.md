<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Treść i język (TRE)

[← Kolor i kontrast](05-kolor-kontrast.md) · [Mapa wiedzy](../README.md) · [Formularze i błędy →](07-formularze-bledy.md)

Użytkownicy skanują: w badaniu NN/g 79% osób przeglądało nowe strony wzrokiem, a nie czytało słowo po słowie.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [TRE-01](#tre-01) | Najważniejsza informacja jest na początku | BADANIE | 2 | ręcznie |
| [TRE-02](#tre-02) | Treść jest podzielona na krótkie fragmenty | BADANIE | 2 | ręcznie |
| [TRE-03](#tre-03) | Nagłówki mówią o treści | NORMA AA | 2 | ręcznie |
| [TRE-04](#tre-04) | Język jest prosty | WYTYCZNA | 2 | ręcznie |
| [TRE-05](#tre-05) | Tekst jest dosłowny | WYTYCZNA | 2 | ręcznie |
| [TRE-06](#tre-06) | Przycisk nazywa swój skutek | BADANIE | 2 | ręcznie |
| [TRE-07](#tre-07) | Język strony i fragmentów obcych jest oznaczony | NORMA A | 2 | automat |
| [TRE-08](#tre-08) | Instrukcje podają jeden krok naraz | WYTYCZNA | 1 | ręcznie |

<a id="tre-01"></a>

## TRE-01 Najważniejsza informacja jest na początku

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Strona, sekcja i akapit zaczynają się od wniosku, szczegóły są dalej.
- **Dlaczego:** Skanowanie w kształcie litery F gubi to, co na końcu.
- **Jak sprawdzić:** Przeczytaj tylko pierwsze zdania. Czy wiadomo, o co chodzi?
- **Poprawka:** Przestaw treść wg odwróconej piramidy.
- **Źródła:** [Nielsen Norman Group, Odwrócona piramida](https://www.nngroup.com/articles/inverted-pyramid/); [Nielsen Norman Group, F-kształtny wzorzec czytania](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

<a id="tre-02"></a>

## TRE-02 Treść jest podzielona na krótkie fragmenty

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Akapity są krótkie, wyliczenia są listami, sekcje mają śródtytuły.
- **Dlaczego:** Podział pomaga skanować i wracać do miejsca.
- **Jak sprawdzić:** Zaznacz akapity dłuższe niż ok. 5 wierszy.
- **Poprawka:** Podziel, dodaj śródtytuły i listy.
- **Źródła:** [Nielsen Norman Group, Dzielenie treści na porcje](https://www.nngroup.com/articles/chunking/); [Nielsen Norman Group, Jak użytkownicy czytają w sieci](https://www.nngroup.com/articles/how-users-read-on-the-web/); [W3C COGA, 4.4.5 Keep Text Succinct](https://www.w3.org/TR/coga-usable/#keep-text-succinct-pattern)

<a id="tre-03"></a>

## TRE-03 Nagłówki mówią o treści

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Nagłówek jest zrozumiały poza kontekstem, konkretny, bez zagadek i haseł reklamowych.
- **Dlaczego:** Nagłówki są często jedynym czytanym tekstem.
- **Jak sprawdzić:** Wypisz same nagłówki i przeczytaj jak spis treści.
- **Poprawka:** Zastąp hasła informacją.
- **Źródła:** [WCAG 2.2, 2.4.6 Headings and Labels (AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html); [Nielsen Norman Group, Pisanie nagłówków](https://www.nngroup.com/articles/headings-pickup-lines/)

<a id="tre-04"></a>

## TRE-04 Język jest prosty

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Krótkie zdania, strona czynna, słowa codzienne, skróty i trudne pojęcia wyjaśnione przy pierwszym użyciu.
- **Dlaczego:** Prosty język przyspiesza czytanie wszystkim, nie tylko osobom z trudnościami.
- **Jak sprawdzić:** Sprawdź 3 kluczowe teksty, zaznacz stronę bierną, żargon i zdania powyżej 20 słów.
- **Poprawka:** Przepisz wg zasad prostego języka.
- **Źródła:** [Służba Cywilna (gov.pl), Prosty język](https://www.gov.pl/web/sluzbacywilna/prosty-jezyk); [W3C COGA, 4.4.1 Use Clear Words](https://www.w3.org/TR/coga-usable/#use-clear-words-pattern); [W3C COGA, 4.4.2 Use a Simple Tense and Voice](https://www.w3.org/TR/coga-usable/#use-a-simple-tense-and-voice-pattern); [WCAG 2.2, 3.1.5 Reading Level (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html)

<a id="tre-05"></a>

## TRE-05 Tekst jest dosłowny

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Instrukcje i komunikaty bez ironii, metafor i podwójnych przeczeń.
- **Dlaczego:** Dosłowność jest istotna m.in. dla osób w spektrum autyzmu.
- **Jak sprawdzić:** Poszukaj metafor i podwójnych przeczeń w przyciskach i instrukcjach.
- **Poprawka:** Napisz wprost, co się stanie.
- **Źródła:** [W3C COGA, 4.4.4 Use Literal Language](https://www.w3.org/TR/coga-usable/#use-literal-language-pattern); [W3C COGA, 4.4.3 Avoid Double Negatives or Nested Clauses](https://www.w3.org/TR/coga-usable/#avoid-double-negatives-or-nested-clauses-pattern); [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf)

<a id="tre-06"></a>

## TRE-06 Przycisk nazywa swój skutek

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Etykieta opisuje akcję, np. „Zapisz adres”, a nie „OK”, „Dalej” bez kontekstu czy „Rozpocznij”.
- **Dlaczego:** „Get started” wprowadza w błąd, bo nie mówi, co się zacznie (NN/g).
- **Jak sprawdzić:** Przeczytaj etykiety przycisków bez otoczenia.
- **Poprawka:** Użyj czasownika i obiektu.
- **Test automatyczny:** `axe:button-name`
- **Źródła:** [Nielsen Norman Group, Problem z „Get started”](https://www.nngroup.com/articles/get-started/); [UK Home Office, Plakaty „Dos and don’ts” projektowania dostępnego](https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf); [W3C COGA, 4.2.5 Clearly Identify Controls and Their Use](https://www.w3.org/TR/coga-usable/#clearly-identify-controls-and-their-use-pattern)

<a id="tre-07"></a>

## TRE-07 Język strony i fragmentów obcych jest oznaczony

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** <html lang> zgodny z językiem treści, fragmenty w innym języku mają własny lang.
- **Dlaczego:** Od tego zależy wymowa czytnika. Brak lang miało 13,5% stron (WebAIM Million 2026).
- **Jak sprawdzić:** Sprawdź atrybut lang w kodzie.
- **Poprawka:** Dodaj lang="pl" oraz lang do cytatów.
- **Test automatyczny:** `axe:html-has-lang`, `axe:html-lang-valid`, `axe:valid-lang`
- **Źródła:** [WCAG 2.2, 3.1.1 Language of Page (A)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html); [WCAG 2.2, 3.1.2 Language of Parts (AA)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html); [WebAIM, The WebAIM Million 2026](https://webaim.org/projects/million/)

<a id="tre-08"></a>

## TRE-08 Instrukcje podają jeden krok naraz

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Proces opisany jest listą numerowaną, jedna czynność na punkt, w kolejności wykonania.
- **Dlaczego:** Kilka czynności w zdaniu łatwo pominąć.
- **Jak sprawdzić:** Sprawdź instrukcje dostawy, zwrotu i rejestracji.
- **Poprawka:** Rozbij na numerowane kroki.
- **Źródła:** [W3C COGA, 4.4.9 Separate Each Instruction](https://www.w3.org/TR/coga-usable/#separate-each-instruction-pattern); [W3C COGA, 4.2.4 Make Each Step Clear](https://www.w3.org/TR/coga-usable/#make-each-step-clear-pattern); [W3C COGA, 4.5.7 Use Clear Step-by-step Instructions](https://www.w3.org/TR/coga-usable/#use-clear-step-by-step-instructions-pattern)

---

[← Kolor i kontrast](05-kolor-kontrast.md) · [Mapa wiedzy](../README.md) · [Formularze i błędy →](07-formularze-bledy.md)
