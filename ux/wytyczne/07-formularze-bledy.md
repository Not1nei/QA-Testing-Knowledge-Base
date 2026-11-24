<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Formularze i błędy (FOR)

[← Treść i język](06-tresc-jezyk.md) · [Mapa wiedzy](../README.md) · [Klawiatura i fokus →](08-klawiatura-fokus.md)

Formularz to zwykle moment, w którym użytkownik rezygnuje. W checkoucie średnio jest 11,3 pola, a wystarcza 8 (Baymard).

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [FOR-01](#for-01) | Każde pole ma widoczną, trwałą etykietę | NORMA A | 3 | automat |
| [FOR-02](#for-02) | Placeholder nie zastępuje etykiety | BADANIE | 2 | automat |
| [FOR-03](#for-03) | Pola wymagane są oznaczone | BADANIE | 2 | ręcznie |
| [FOR-04](#for-04) | Formularz prosi tylko o dane niezbędne | NORMA A | 3 | ręcznie |
| [FOR-05](#for-05) | Formularz ma jedną kolumnę i logiczną kolejność | BADANIE | 2 | ręcznie |
| [FOR-06](#for-06) | Pola wspierają autouzupełnianie i właściwą klawiaturę | NORMA AA | 2 | automat |
| [FOR-07](#for-07) | Błąd jest opisany tekstem przy polu | NORMA A | 3 | na ścieżce persony |
| [FOR-08](#for-08) | Komunikat mówi, jak poprawić | NORMA AA | 3 | na ścieżce persony |
| [FOR-09](#for-09) | Wpisane dane nie znikają po błędzie | WYTYCZNA | 3 | na ścieżce persony |
| [FOR-10](#for-10) | Długi formularz ma podsumowanie błędów z linkami | WYTYCZNA | 2 | na ścieżce persony |
| [FOR-11](#for-11) | Walidacja w trakcie nie wyprzedza użytkownika | BADANIE | 2 | na ścieżce persony |
| [FOR-12](#for-12) | Przycisk wysłania jest aktywny | WYTYCZNA | 2 | automat |
| [FOR-13](#for-13) | Nie ma przycisku „Wyczyść formularz” | BADANIE | 2 | automat |
| [FOR-14](#for-14) | Dane ważne można sprawdzić przed wysłaniem | NORMA AA | 3 | na ścieżce persony |
| [FOR-15](#for-15) | Nieodwracalna akcja ma konkretne potwierdzenie | BADANIE | 3 | na ścieżce persony |

<a id="for-01"></a>

## FOR-01 Każde pole ma widoczną, trwałą etykietę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Etykieta jest widoczna przed wpisaniem i w jego trakcie oraz powiązana z polem w kodzie (label for/id).
- **Dlaczego:** Brak etykiet miało 51% stron głównych (WebAIM Million 2026).
- **Jak sprawdzić:** Kliknij etykietę: czy fokus trafia do pola?
- **Poprawka:** Dodaj <label> nad polem.
- **Test automatyczny:** `axe:label`, `axe:select-name`
- **Źródła:** [WCAG 2.2, 3.3.2 Labels or Instructions (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html); [WCAG 2.2, 1.3.1 Info and Relationships (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html); [W3C COGA, 4.5.6 Use Clear Visible Labels](https://www.w3.org/TR/coga-usable/#use-clear-visible-labels-pattern); [WebAIM, The WebAIM Million 2026](https://webaim.org/projects/million/)

<a id="for-02"></a>

## FOR-02 Placeholder nie zastępuje etykiety

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Placeholder nie jest jedyną instrukcją. Format i przykłady są tekstem obok pola.
- **Dlaczego:** Znika po wpisaniu i obciąża pamięć (NN/g, GOV.UK).
- **Jak sprawdzić:** Znajdź pola, w których bez placeholdera nie wiadomo, co wpisać.
- **Poprawka:** Przenieś treść do etykiety lub podpowiedzi.
- **Test automatyczny:** `x:placeholderonly`
- **Źródła:** [Nielsen Norman Group, Szkodliwość placeholderów](https://www.nngroup.com/articles/form-design-placeholders/); [GOV.UK, GOV.UK Design System: pole tekstowe](https://design-system.service.gov.uk/components/text-input/)

<a id="for-03"></a>

## FOR-03 Pola wymagane są oznaczone

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Każde pole wymagane ma oznaczenie (gwiazdka z legendą lub słowo), a opcjonalne słowo „opcjonalnie”.
- **Dlaczego:** Użytkownik nie powinien odkrywać wymagań po wysłaniu.
- **Jak sprawdzić:** Porównaj oznaczenia z atrybutem required.
- **Poprawka:** Oznacz pola w etykiecie i w kodzie.
- **Źródła:** [Nielsen Norman Group, Oznaczanie pól wymaganych](https://www.nngroup.com/articles/required-fields/); [WCAG 2.2, 3.3.2 Labels or Instructions (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)

<a id="for-04"></a>

## FOR-04 Formularz prosi tylko o dane niezbędne

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Każde pole ma uzasadnienie w zadaniu. Dane podane wcześniej nie są wymagane ponownie w tym samym procesie.
- **Dlaczego:** 17% osób porzuciło zakup z powodu zbyt długiego procesu (Baymard).
- **Jak sprawdzić:** Policz pola i zapisz powód każdego.
- **Poprawka:** Usuń pola, użyj wartości znanych systemowi.
- **Źródła:** [WCAG 2.2, 3.3.7 Redundant Entry (A)](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html); [Baymard Institute, Liczba pól w checkoucie](https://baymard.com/research-articles/checkout-flow-average-form-fields)

<a id="for-05"></a>

## FOR-05 Formularz ma jedną kolumnę i logiczną kolejność

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Pola w jednej kolumnie (wyjątek: krótkie powiązane pola), w kolejności oczekiwanej przez użytkownika.
- **Dlaczego:** Układ wielokolumnowy prowadzi do pomijania pól (NN/g).
- **Jak sprawdzić:** Przejdź tabulatorem i porównaj z kolejnością wizualną.
- **Poprawka:** Ułóż pola w jednej kolumnie i pogrupuj w fieldset.
- **Źródła:** [Nielsen Norman Group, 10 zaleceń dla formularzy](https://www.nngroup.com/articles/web-form-design/); [WCAG 2.2, 1.3.2 Meaningful Sequence (A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

<a id="for-06"></a>

## FOR-06 Pola wspierają autouzupełnianie i właściwą klawiaturę

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Pola z danymi osoby mają poprawny autocomplete, a typ lub inputmode otwiera odpowiednią klawiaturę na telefonie.
- **Dlaczego:** Mniej pisania oznacza mniej błędów, zwłaszcza na telefonie.
- **Jak sprawdzić:** Sprawdź atrybuty autocomplete, type i inputmode.
- **Poprawka:** Dodaj np. autocomplete="email", type="email", inputmode="numeric".
- **Test automatyczny:** `axe:autocomplete-valid`, `x:autocomplete`
- **Źródła:** [WCAG 2.2, 1.3.5 Identify Input Purpose (AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html); [MDN, MDN: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete); [MDN, MDN: inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode); [Google web.dev, Formularze płatności i adresu](https://web.dev/articles/payment-and-address-form-best-practices)

<a id="for-07"></a>

## FOR-07 Błąd jest opisany tekstem przy polu

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Pole z błędem jest wskazane, a problem opisany tekstem i powiązany z polem (aria-describedby, aria-invalid).
- **Dlaczego:** Sam czerwony kolor nie wystarcza.
- **Jak sprawdzić:** Wyślij pusty formularz i sprawdź komunikaty oraz kod.
- **Poprawka:** Dodaj tekst błędu nad lub pod polem i powiąż w kodzie.
- **Źródła:** [WCAG 2.2, 3.3.1 Error Identification (A)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html); [GOV.UK, GOV.UK Design System: komunikat o błędzie](https://design-system.service.gov.uk/components/error-message/); [W3C WAI, WAI Tutorials: powiadomienia w formularzach](https://www.w3.org/WAI/tutorials/forms/notifications/)

<a id="for-08"></a>

## FOR-08 Komunikat mówi, jak poprawić

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Komunikat podaje rozwiązanie („Wpisz kod w formacie 00-000”), bez „proszę”, „przepraszamy” i słowa „nieprawidłowy” bez wyjaśnienia.
- **Dlaczego:** Sama informacja o błędzie nie przybliża do celu.
- **Jak sprawdzić:** Wywołaj każdy rodzaj błędu i przeczytaj komunikat.
- **Poprawka:** Przepisz na: co zrobić + przykład.
- **Źródła:** [WCAG 2.2, 3.3.3 Error Suggestion (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html); [GOV.UK, GOV.UK Design System: komunikat o błędzie](https://design-system.service.gov.uk/components/error-message/); [Nielsen Norman Group, Wytyczne komunikatów o błędach](https://www.nngroup.com/articles/error-message-guidelines/)

<a id="for-09"></a>

## FOR-09 Wpisane dane nie znikają po błędzie

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Po błędzie walidacji, cofnięciu i odświeżeniu sesji formularz zachowuje wartości.
- **Dlaczego:** Ponowne wpisywanie to częsta przyczyna rezygnacji.
- **Jak sprawdzić:** Wpisz dane, wywołaj błąd, sprawdź, czy zostały.
- **Poprawka:** Zachowuj wartości, nie czyść pól przy błędzie.
- **Źródła:** [GOV.UK, GOV.UK Design System: komunikat o błędzie](https://design-system.service.gov.uk/components/error-message/); [W3C COGA, 4.5.9 Avoid Data Loss and “Timeouts”](https://www.w3.org/TR/coga-usable/#avoid-data-loss-and-timeouts-pattern); [W3C COGA, 4.5.5 Make it Easy to Undo Form Errors](https://www.w3.org/TR/coga-usable/#make-it-easy-to-undo-form-errors-pattern)

<a id="for-10"></a>

## FOR-10 Długi formularz ma podsumowanie błędów z linkami

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Po nieudanym wysłaniu fokus trafia do podsumowania z linkami do pól, a tytuł strony zaczyna się od „Błąd:”.
- **Dlaczego:** Bez tego użytkownik czytnika nie wie, że coś się stało.
- **Jak sprawdzić:** Wyślij formularz klawiaturą i sprawdź, gdzie jest fokus.
- **Poprawka:** Dodaj podsumowanie i przenieś na nie fokus.
- **Źródła:** [GOV.UK, GOV.UK Design System: podsumowanie błędów](https://design-system.service.gov.uk/components/error-summary/); [GOV.UK, GOV.UK Design System: walidacja](https://design-system.service.gov.uk/patterns/validation/); [W3C WAI, WAI Tutorials: powiadomienia w formularzach](https://www.w3.org/WAI/tutorials/forms/notifications/)

<a id="for-11"></a>

## FOR-11 Walidacja w trakcie nie wyprzedza użytkownika

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Błąd nie pojawia się przed zakończeniem wpisywania, znika po poprawieniu, a poprawne pole może być potwierdzone.
- **Dlaczego:** Przedwczesny błąd dezorientuje (Baymard).
- **Jak sprawdzić:** Wpisuj powoli adres e-mail i obserwuj komunikaty.
- **Poprawka:** Waliduj po opuszczeniu pola, czyść błąd w trakcie poprawy.
- **Test automatyczny:** `x:prefillederror`
- **Źródła:** [Baymard Institute, Walidacja w trakcie wypełniania](https://baymard.com/research-articles/inline-form-validation); [Nielsen Norman Group, 10 wytycznych raportowania błędów w formularzach](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

<a id="for-12"></a>

## FOR-12 Przycisk wysłania jest aktywny

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Główny przycisk nie jest wyłączony w oczekiwaniu na poprawne dane.
- **Dlaczego:** Wyszarzony przycisk nie mówi, czego brakuje (GOV.UK).
- **Jak sprawdzić:** Otwórz pusty formularz i sprawdź atrybut disabled.
- **Poprawka:** Zostaw aktywny i pokaż błędy po kliknięciu.
- **Test automatyczny:** `x:disabledsubmit`
- **Źródła:** [GOV.UK, GOV.UK Design System: przycisk](https://design-system.service.gov.uk/components/button/)

<a id="for-13"></a>

## FOR-13 Nie ma przycisku „Wyczyść formularz”

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Formularz nie zawiera resetu obok wysłania, a „Anuluj” nie konkuruje z akcją główną.
- **Dlaczego:** Przypadkowe kliknięcie kasuje pracę użytkownika.
- **Jak sprawdzić:** Sprawdź przyciski formularza i type="reset".
- **Poprawka:** Usuń reset, osłab styl „Anuluj”.
- **Test automatyczny:** `x:reset`
- **Źródła:** [Nielsen Norman Group, Przyciski Reset i Anuluj](https://www.nngroup.com/articles/reset-and-cancel-buttons/); [Nielsen Norman Group, 10 zaleceń dla formularzy](https://www.nngroup.com/articles/web-form-design/)

<a id="for-14"></a>

## FOR-14 Dane ważne można sprawdzić przed wysłaniem

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Przy zobowiązaniu prawnym, płatności lub usunięciu danych akcja jest odwracalna, sprawdzana albo potwierdzana.
- **Dlaczego:** Pomyłka w zamówieniu kosztuje pieniądze.
- **Jak sprawdzić:** Przejdź do ostatniego kroku i poszukaj podsumowania z edycją.
- **Poprawka:** Dodaj ekran „Sprawdź dane” z linkami „Zmień”.
- **Źródła:** [WCAG 2.2, 3.3.4 Error Prevention (Legal, Financial, Data) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html); [GOV.UK, GOV.UK Design System: sprawdź odpowiedzi](https://design-system.service.gov.uk/patterns/check-answers/); [W3C COGA, 4.5.4 Design Forms to Prevent Mistakes](https://www.w3.org/TR/coga-usable/#design-forms-to-prevent-mistakes-pattern)

<a id="for-15"></a>

## FOR-15 Nieodwracalna akcja ma konkretne potwierdzenie

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Okno nazywa skutek i obiekt, a przyciski opisują akcję („Usuń adres” / „Zachowaj”).
- **Dlaczego:** Ogólne „Czy na pewno? OK” jest klikane bez czytania.
- **Jak sprawdzić:** Wywołaj usunięcie i przeczytaj okno.
- **Poprawka:** Zmień treść i etykiety, gdzie można daj „Cofnij”.
- **Źródła:** [Nielsen Norman Group, Okna potwierdzenia](https://www.nngroup.com/articles/confirmation-dialog/); [Nielsen Norman Group, Zapobieganie błędom świadomym](https://www.nngroup.com/articles/user-mistakes/)

---

[← Treść i język](06-tresc-jezyk.md) · [Mapa wiedzy](../README.md) · [Klawiatura i fokus →](08-klawiatura-fokus.md)
