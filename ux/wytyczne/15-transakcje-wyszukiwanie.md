<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Wyszukiwanie, produkt i transakcje (TRA)

[← Etyka, prywatność i zaufanie](14-etyka-prywatnosc-zaufanie.md) · [Mapa wiedzy](../README.md)

Średni wskaźnik porzucania koszyka wynosi 70,22% (Baymard). Dla stron bez sprzedaży użyj punktów o wyszukiwaniu i pustych stanach, resztę oznacz „nie dotyczy”.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [TRA-01](#tra-01) | Wyszukiwarka jest widoczna i prosta | BADANIE | 2 | ręcznie |
| [TRA-02](#tra-02) | Wyszukiwarka rozumie literówki i synonimy | BADANIE | 2 | na ścieżce persony |
| [TRA-03](#tra-03) | Brak wyników wskazuje dalszą drogę | BADANIE | 2 | na ścieżce persony |
| [TRA-04](#tra-04) | Puste stany tłumaczą, co zrobić | BADANIE | 1 | na ścieżce persony |
| [TRA-05](#tra-05) | Filtry są widoczne i można je cofnąć | BADANIE | 2 | na ścieżce persony |
| [TRA-06](#tra-06) | Strona produktu odpowiada na pytania kupującego | BADANIE | 3 | ręcznie |
| [TRA-07](#tra-07) | Dodanie do koszyka jest potwierdzone | BADANIE | 3 | na ścieżce persony |
| [TRA-08](#tra-08) | Koszt całkowity jest znany przed checkoutem | BADANIE | 4 | na ścieżce persony |
| [TRA-09](#tra-09) | Można kupić bez konta | BADANIE | 3 | na ścieżce persony |
| [TRA-10](#tra-10) | Przycisk zamówienia mówi o obowiązku zapłaty | PRAWO | 4 | na ścieżce persony |
| [TRA-11](#tra-11) | Potwierdzenie mówi, co dalej | WYTYCZNA | 3 | na ścieżce persony |
| [TRA-12](#tra-12) | Hasło: długość zamiast reguł | WYTYCZNA | 2 | na ścieżce persony |

<a id="tra-01"></a>

## TRA-01 Wyszukiwarka jest widoczna i prosta

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** W serwisie z wieloma treściami pole jest widoczne w nagłówku, bez dodatkowych opcji na starcie.
- **Dlaczego:** Część osób zaczyna od wyszukiwania.
- **Jak sprawdzić:** Znajdź pole na każdym ekranie.
- **Poprawka:** Dodaj otwarte pole z przyciskiem „Szukaj”.
- **Źródła:** [Nielsen Norman Group, Wyszukiwarka: widoczna i prosta](https://www.nngroup.com/articles/search-visible-and-simple/); [W3C COGA, 4.3.6 Provide Search](https://www.w3.org/TR/coga-usable/#provide-search-pattern)

<a id="tra-02"></a>

## TRA-02 Wyszukiwarka rozumie literówki i synonimy

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Zapytania z błędem, synonimem, odmianą i symbolem produktu zwracają trafne wyniki.
- **Dlaczego:** Zapytania mają różne typy, a serwisy obsługują tylko część z nich (Baymard).
- **Jak sprawdzić:** Wpisz 5 zapytań, w tym z literówką i bez polskich znaków.
- **Poprawka:** Dodaj słownik synonimów i tolerancję błędów.
- **Źródła:** [Baymard Institute, Wyszukiwanie w e-commerce](https://baymard.com/research-articles/ecommerce-search-query-types)

<a id="tra-03"></a>

## TRA-03 Brak wyników wskazuje dalszą drogę

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Ekran mówi jasno, że nic nie znaleziono, pokazuje zapytanie i punkty startu.
- **Dlaczego:** Ślepy zaułek kończy wizytę (NN/g).
- **Jak sprawdzić:** Wyszukaj „qwertyzxc”.
- **Poprawka:** Dodaj wyjaśnienie, podpowiedzi i kategorie.
- **Źródła:** [Nielsen Norman Group, Brak wyników wyszukiwania](https://www.nngroup.com/articles/search-no-results-serp/)

<a id="tra-04"></a>

## TRA-04 Puste stany tłumaczą, co zrobić

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Pusty koszyk, lista lub historia ma wyjaśnienie i akcję.
- **Dlaczego:** Pusty ekran wygląda jak błąd.
- **Jak sprawdzić:** Otwórz pusty koszyk i ulubione.
- **Poprawka:** Dodaj tekst i przycisk.
- **Źródła:** [Nielsen Norman Group, Puste stany](https://www.nngroup.com/articles/empty-state-interface-design/)

<a id="tra-05"></a>

## TRA-05 Filtry są widoczne i można je cofnąć

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Aktywne filtry są pokazane nad wynikami, można je usunąć pojedynczo i wszystkie. Liczba wyników się aktualizuje.
- **Dlaczego:** Niewidoczny filtr wygląda jak brak oferty.
- **Jak sprawdzić:** Ustaw 3 filtry, usuń jeden.
- **Poprawka:** Dodaj znaczniki filtrów i „Wyczyść”.
- **Źródła:** [Nielsen Norman Group, Filtry i fasety](https://www.nngroup.com/articles/filters-vs-facets/); [Nielsen Norman Group, Heurystyka 3: kontrola i wolność użytkownika](https://www.nngroup.com/articles/user-control-and-freedom/)

<a id="tra-06"></a>

## TRA-06 Strona produktu odpowiada na pytania kupującego

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Są: nazwa, cena, zdjęcia, opis, dostępność, warianty, dostawa, zwrot i wyraźny przycisk zakupu.
- **Dlaczego:** Bez informacji użytkownik odkłada decyzję.
- **Jak sprawdzić:** Sprawdź listę dla jednego produktu.
- **Poprawka:** Uzupełnij brakujące informacje.
- **Źródła:** [Nielsen Norman Group, Strona produktu](https://www.nngroup.com/articles/ecommerce-product-pages/)

<a id="tra-07"></a>

## TRA-07 Dodanie do koszyka jest potwierdzone

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Po dodaniu widać potwierdzenie i zmianę liczby w koszyku, ogłoszone czytnikowi.
- **Dlaczego:** Brak potwierdzenia powoduje podwójne dodanie lub rezygnację.
- **Jak sprawdzić:** Dodaj produkt i obserwuj.
- **Poprawka:** Dodaj komunikat role="status" i licznik.
- **Źródła:** [Nielsen Norman Group, Koszyk e-commerce](https://www.nngroup.com/articles/shopping-cart/); [WCAG 2.2, 4.1.3 Status Messages (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

<a id="tra-08"></a>

## TRA-08 Koszt całkowity jest znany przed checkoutem

**Siła:** BADANIE · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Dostawa i opłaty pokazane najpóźniej w koszyku.
- **Dlaczego:** Dodatkowe koszty: najczęstszy powód porzucenia, 40% (Baymard).
- **Jak sprawdzić:** Porównaj cenę produktu, koszyka i podsumowania.
- **Poprawka:** Pokaż koszt dostawy na stronie produktu i w koszyku.
- **Źródła:** [Baymard Institute, Porzucanie koszyków, statystyki 2026](https://baymard.com/blog/cart-abandonment-rate); [Deceptive Patterns, Ukryte koszty](https://deceptive.design/types/hidden-costs/); [W3C COGA, 4.5.3 Notify Users of Fees and Charges at the Start of a Task](https://www.w3.org/TR/coga-usable/#notify-users-of-fees-and-charges-at-the-start-of-a-task-pattern)

<a id="tra-09"></a>

## TRA-09 Można kupić bez konta

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Zakup jako gość jest dostępny i najbardziej widoczny.
- **Dlaczego:** Wymuszone konto: 18% porzuceń (Baymard).
- **Jak sprawdzić:** Przejdź do checkoutu bez konta.
- **Poprawka:** Dodaj zakup jako gość na pierwszym miejscu.
- **Źródła:** [Baymard Institute, Zakup bez konta](https://baymard.com/research-articles/make-guest-checkout-prominent); [Baymard Institute, Porzucanie koszyków, statystyki 2026](https://baymard.com/blog/cart-abandonment-rate)

<a id="tra-10"></a>

## TRA-10 Przycisk zamówienia mówi o obowiązku zapłaty

**Siła:** PRAWO · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Ostatni przycisk ma napis „zamówienie z obowiązkiem zapłaty” lub równoznaczny.
- **Dlaczego:** Art. 8 ust. 2 dyrektywy 2011/83/UE. Bez tego konsument nie jest związany zamówieniem.
- **Jak sprawdzić:** Sprawdź etykietę ostatniego przycisku.
- **Poprawka:** Zmień na „Zamawiam z obowiązkiem zapłaty”.
- **Źródła:** [UE, Dyrektywa 2011/83/UE o prawach konsumentów, art. 8 ust. 2 i art. 22](https://eur-lex.europa.eu/eli/dir/2011/83/oj/eng)

<a id="tra-11"></a>

## TRA-11 Potwierdzenie mówi, co dalej

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Ekran po zakończeniu podaje numer, co się stanie dalej i kontakt. Wysyłane jest też e-mailem.
- **Dlaczego:** Bez potwierdzenia użytkownik nie wie, czy się udało.
- **Jak sprawdzić:** Zakończ proces w środowisku testowym.
- **Poprawka:** Zbuduj ekran wg wzoru GOV.UK.
- **Źródła:** [GOV.UK, GOV.UK Design System: strona potwierdzenia](https://design-system.service.gov.uk/patterns/confirmation-pages/); [W3C COGA, 4.5.10 Provide Feedback](https://www.w3.org/TR/coga-usable/#provide-feedback-pattern)

<a id="tra-12"></a>

## TRA-12 Hasło: długość zamiast reguł

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Wymagana długość podana z góry, bez reguł składu znaków, z wklejaniem i przyciskiem „Pokaż hasło”. NIST: min. 15 znaków, gdy hasło jest jedynym zabezpieczeniem.
- **Dlaczego:** Złożone reguły prowadzą do słabszych, zapominanych haseł.
- **Jak sprawdzić:** Utwórz konto z długim hasłem bez cyfr.
- **Poprawka:** Usuń reguły składu, dodaj podgląd.
- **Źródła:** [NIST, NIST SP 800-63B-4: hasła](https://pages.nist.gov/800-63-4/sp800-63b.html); [Nielsen Norman Group, Tworzenie hasła](https://www.nngroup.com/articles/password-creation/); [Google web.dev, Formularze logowania](https://web.dev/articles/sign-in-form-best-practices)

---

[← Etyka, prywatność i zaufanie](14-etyka-prywatnosc-zaufanie.md) · [Mapa wiedzy](../README.md)
