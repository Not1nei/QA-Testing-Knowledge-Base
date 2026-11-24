<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Heurystyki użyteczności (HEU)

[Mapa wiedzy](../README.md) · [Nawigacja i architektura informacji →](02-nawigacja.md)

Dziesięć heurystyk Nielsena przełożonych na stwierdzenia, które da się sprawdzić w przeglądarce. Ocena ekspercka całej ścieżki, nie pojedynczego ekranu.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [HEU-01](#heu-01) | System pokazuje, co się dzieje, po każdej akcji użytkownika | BADANIE | 3 | na ścieżce persony |
| [HEU-02](#heu-02) | Język i pojęcia pochodzą ze świata użytkownika | BADANIE | 2 | ręcznie |
| [HEU-03](#heu-03) | Użytkownik może się wycofać z każdej akcji | BADANIE | 3 | na ścieżce persony |
| [HEU-04](#heu-04) | Te same elementy wyglądają, nazywają się i działają tak samo | NORMA AA | 2 | ręcznie |
| [HEU-05](#heu-05) | Interfejs zapobiega błędom, zanim powstaną | BADANIE | 3 | na ścieżce persony |
| [HEU-06](#heu-06) | Użytkownik rozpoznaje, a nie przypomina sobie | BADANIE | 2 | na ścieżce persony |
| [HEU-07](#heu-07) | Częste zadania mają skrót | BADANIE | 1 | na ścieżce persony |
| [HEU-08](#heu-08) | Ekran nie zawiera treści, które nie wspierają celu | BADANIE | 2 | ręcznie |
| [HEU-09](#heu-09) | Komunikat błędu mówi, co się stało i co zrobić | NORMA AA | 3 | na ścieżce persony |
| [HEU-10](#heu-10) | Pomoc jest łatwa do znalezienia i w stałym miejscu | NORMA A | 2 | ręcznie |

<a id="heu-01"></a>

## HEU-01 System pokazuje, co się dzieje, po każdej akcji użytkownika

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Reakcja w 0,1 s odbierana jest jako natychmiastowa, do 1 s nie przerywa toku myśli, po 10 s użytkownik traci uwagę. Każda akcja ma widoczny efekt: zmianę stanu, komunikat lub wskaźnik postępu.
- **Dlaczego:** Bez informacji zwrotnej użytkownik klika ponownie albo uznaje, że strona nie działa.
- **Jak sprawdzić:** Kliknij każdy główny przycisk na ścieżce. Zmierz czas do pierwszej widocznej zmiany.
- **Poprawka:** Dodaj stan ładowania, potwierdzenie i stan po akcji (np. „Dodano do koszyka”).
- **Źródła:** [Nielsen Norman Group, Limity czasu reakcji](https://www.nngroup.com/articles/response-times-3-important-limits/); [Nielsen Norman Group, Heurystyka 1: widoczność stanu systemu](https://www.nngroup.com/articles/visibility-system-status/); [W3C COGA, 4.5.10 Provide Feedback](https://www.w3.org/TR/coga-usable/#provide-feedback-pattern)

<a id="heu-02"></a>

## HEU-02 Język i pojęcia pochodzą ze świata użytkownika

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Etykiety, kategorie i komunikaty używają słów odbiorcy, a nie nazw wewnętrznych, skrótów ani kodów systemu.
- **Dlaczego:** Słowo, którego użytkownik nie zna, zmusza do zgadywania.
- **Jak sprawdzić:** Wypisz etykiety menu, przycisków i błędów. Zaznacz te, których persona nie zna.
- **Poprawka:** Zastąp żargon słowami odbiorcy albo dodaj krótkie wyjaśnienie w miejscu użycia.
- **Źródła:** [Nielsen Norman Group, Heurystyka 2: zgodność ze światem rzeczywistym](https://www.nngroup.com/articles/match-system-real-world/); [W3C COGA, 4.4.1 Use Clear Words](https://www.w3.org/TR/coga-usable/#use-clear-words-pattern); [GOV.UK, GOV.UK: wytyczne pisania](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/)

<a id="heu-03"></a>

## HEU-03 Użytkownik może się wycofać z każdej akcji

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Każde okno, krok i filtr można zamknąć, cofnąć albo wyczyścić. Przycisk „Wstecz” przeglądarki wraca do poprzedniego stanu bez utraty danych.
- **Dlaczego:** Wyjście awaryjne pozwala próbować bez lęku przed błędem.
- **Jak sprawdzić:** Na każdym kroku użyj „Wstecz”, Esc i „Anuluj”. Zanotuj utratę danych lub pułapkę.
- **Poprawka:** Dodaj „Anuluj”, „Cofnij” i obsługę historii przeglądarki, zachowuj wpisane dane.
- **Źródła:** [Nielsen Norman Group, Heurystyka 3: kontrola i wolność użytkownika](https://www.nngroup.com/articles/user-control-and-freedom/); [W3C COGA, 4.5.2 Let Users Go Back](https://www.w3.org/TR/coga-usable/#let-users-go-back-pattern)

<a id="heu-04"></a>

## HEU-04 Te same elementy wyglądają, nazywają się i działają tak samo

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Element o tej samej funkcji ma na wszystkich ekranach tę samą nazwę, ikonę i wygląd. Strona trzyma się konwencji znanych z innych serwisów.
- **Dlaczego:** Użytkownicy spędzają większość czasu na innych stronach i oczekują podobnego działania (prawo Jakoba).
- **Jak sprawdzić:** Porównaj zrzuty ekranów: przyciski główne, nazwy, ikony, kolejność menu.
- **Poprawka:** Opisz komponenty w jednym miejscu i usuń warianty.
- **Źródła:** [WCAG 2.2, 3.2.4 Consistent Identification (AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html); [Nielsen Norman Group, Heurystyka 4: spójność i standardy](https://www.nngroup.com/articles/consistency-and-standards/); [Laws of UX, Prawo Jakoba](https://lawsofux.com/jakobs-law/)

<a id="heu-05"></a>

## HEU-05 Interfejs zapobiega błędom, zanim powstaną

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Pola ograniczają nieprawidłowe wartości, formaty są opisane przed wpisaniem, akcje ryzykowne mają ostrzeżenie.
- **Dlaczego:** Najlepszy komunikat błędu to ten, który się nie pojawi.
- **Jak sprawdzić:** Spróbuj wpisać błędną datę, ilość 0, zły format. Sprawdź, kiedy dowiadujesz się o problemie.
- **Poprawka:** Dodaj ograniczenia, podpowiedzi i rozsądne wartości domyślne.
- **Źródła:** [Nielsen Norman Group, Heurystyka 5: zapobieganie błędom (pomyłki)](https://www.nngroup.com/articles/slips/); [W3C COGA, 4.5.4 Design Forms to Prevent Mistakes](https://www.w3.org/TR/coga-usable/#design-forms-to-prevent-mistakes-pattern); [WCAG 2.2, 3.3.4 Error Prevention (Legal, Financial, Data) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)

<a id="heu-06"></a>

## HEU-06 Użytkownik rozpoznaje, a nie przypomina sobie

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Informacje potrzebne w danym kroku są na ekranie. Nie trzeba pamiętać danych z poprzedniego ekranu.
- **Dlaczego:** Pamięć robocza jest ograniczona, a rozpoznanie wymaga mniej wysiłku niż przypominanie.
- **Jak sprawdzić:** Na każdym ekranie wypisz, co persona musi pamiętać z wcześniejszych.
- **Poprawka:** Pokaż podsumowanie, ostatnio oglądane pozycje i wybrane opcje.
- **Źródła:** [Nielsen Norman Group, Heurystyka 6: rozpoznawanie zamiast przypominania](https://www.nngroup.com/articles/recognition-and-recall/); [W3C COGA, 4.7.5 Do Not Rely on Users Calculations or Memorizing Information](https://www.w3.org/TR/coga-usable/#do-not-rely-on-users-calculations-or-memorizing-information-pattern)

<a id="heu-07"></a>

## HEU-07 Częste zadania mają skrót

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Powtarzalne działania można wykonać szybciej: wyszukiwarka, zapamiętane dane, ponowienie, skrót do koszyka.
- **Dlaczego:** Elastyczność przyspiesza pracę osobom doświadczonym i nie przeszkadza początkującym.
- **Jak sprawdzić:** Policz kroki głównego zadania przy drugiej wizycie.
- **Poprawka:** Dodaj skróty do najczęstszych zadań i skróć ścieżkę krytyczną.
- **Źródła:** [Nielsen Norman Group, Heurystyka 7: elastyczność i efektywność](https://www.nngroup.com/articles/flexibility-efficiency-heuristic/); [W3C COGA, 4.6.2 Make Short Critical Paths](https://www.w3.org/TR/coga-usable/#make-short-critical-paths-pattern)

<a id="heu-08"></a>

## HEU-08 Ekran nie zawiera treści, które nie wspierają celu

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Każdy element na ekranie wspiera zadanie główne albo drugorzędne. Brak ozdobników konkurujących z treścią.
- **Dlaczego:** Każda dodatkowa informacja konkuruje z istotną i obniża jej widoczność.
- **Jak sprawdzić:** Dla każdego bloku odpowiedz, w którym zadaniu pomaga. Bez odpowiedzi oznacza błąd.
- **Poprawka:** Usuń blok, przenieś go niżej albo schowaj pod rozwinięciem.
- **Źródła:** [Nielsen Norman Group, Heurystyka 8: estetyka i minimalizm](https://www.nngroup.com/articles/aesthetic-minimalist-design/); [W3C COGA, 4.6.3 Avoid Too Much Content](https://www.w3.org/TR/coga-usable/#avoid-too-much-content-pattern)

<a id="heu-09"></a>

## HEU-09 Komunikat błędu mówi, co się stało i co zrobić

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Komunikat jest przy miejscu błędu, zwykłym językiem, wskazuje przyczynę i następny krok, nie obwinia.
- **Dlaczego:** Ogólne „Wystąpił błąd” zostawia użytkownika bez wyjścia.
- **Jak sprawdzić:** Wywołaj 3 różne błędy i oceń: co, gdzie, dlaczego, jak naprawić.
- **Poprawka:** Przepisz komunikaty wg schematu: problem + rozwiązanie.
- **Źródła:** [WCAG 2.2, 3.3.3 Error Suggestion (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html); [Nielsen Norman Group, Wytyczne komunikatów o błędach](https://www.nngroup.com/articles/error-message-guidelines/); [GOV.UK, GOV.UK Design System: komunikat o błędzie](https://design-system.service.gov.uk/components/error-message/)

<a id="heu-10"></a>

## HEU-10 Pomoc jest łatwa do znalezienia i w stałym miejscu

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Kontakt, pomoc lub czat są w tej samej kolejności na każdej stronie, na której występują.
- **Dlaczego:** Osoba zagubiona nie powinna szukać pomocy od nowa na każdym ekranie.
- **Jak sprawdzić:** Na każdym ekranie wskaż kontakt. Porównaj położenie w kodzie i na ekranie.
- **Poprawka:** Umieść pomoc w stałym miejscu nagłówka lub stopki.
- **Źródła:** [WCAG 2.2, 3.2.6 Consistent Help (A)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html); [Nielsen Norman Group, Heurystyka 10: pomoc i dokumentacja](https://www.nngroup.com/articles/help-and-documentation/); [W3C COGA, 4.8.5 Make It Easy to Find Help and Give Feedback](https://www.w3.org/TR/coga-usable/#make-it-easy-to-find-help-and-give-feedback-pattern)

---

[Mapa wiedzy](../README.md) · [Nawigacja i architektura informacji →](02-nawigacja.md)
