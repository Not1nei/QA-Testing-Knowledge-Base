<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Etyka, prywatność i zaufanie (ETY)

[← Wydajność](13-wydajnosc.md) · [Mapa wiedzy](../README.md) · [Wyszukiwanie, produkt i transakcje →](15-transakcje-wyszukiwanie.md)

Część punktów wynika wprost z prawa. Nie jest to porada prawna, zakres ustaw opisuje strona „Prawo”.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [ETY-01](#ety-01) | Odrzucenie cookies jest tak samo łatwe jak zgoda | PRAWO | 3 | ręcznie |
| [ETY-02](#ety-02) | Zgodę można wycofać równie łatwo, jak wyrazić | PRAWO | 3 | ręcznie |
| [ETY-03](#ety-03) | Nic płatnego ani zgody nie są zaznaczone z góry | PRAWO | 4 | automat |
| [ETY-04](#ety-04) | Nie ma fałszywej presji | BADANIE | 3 | ręcznie |
| [ETY-05](#ety-05) | Odmowa jest neutralna | BADANIE | 2 | ręcznie |
| [ETY-06](#ety-06) | Rezygnacja jest równie łatwa jak zapis | BADANIE | 3 | na ścieżce persony |
| [ETY-07](#ety-07) | Treść nie jest zasłonięta oknem po wejściu | WYTYCZNA | 2 | ręcznie |
| [ETY-08](#ety-08) | Nie trzeba konta, aby zobaczyć wartość | BADANIE | 2 | na ścieżce persony |
| [ETY-09](#ety-09) | Wiadomo, kto stoi za stroną | BADANIE | 3 | ręcznie |
| [ETY-10](#ety-10) | Strona działa wyłącznie po HTTPS | WYTYCZNA | 4 | automat |
| [ETY-11](#ety-11) | Usługa objęta ustawą ma informację o dostępności | PRAWO | 3 | ręcznie |

<a id="ety-01"></a>

## ETY-01 Odrzucenie cookies jest tak samo łatwe jak zgoda

**Siła:** PRAWO · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Dostęp do danych w urządzeniu poza niezbędnymi wymaga uprzedniej zgody. „Odrzuć” jest na tym samym poziomie i tak samo widoczne.
- **Dlaczego:** Art. 399 PKE wymaga zgody, a EROD uznaje utrudnianie odmowy za zwodniczy wzorzec.
- **Jak sprawdzić:** Otwórz stronę w trybie prywatnym, porównaj przyciski i ciasteczka przed zgodą.
- **Poprawka:** Dodaj równorzędne „Odrzuć”, ładuj skrypty po zgodzie.
- **Test automatyczny:** `x:cookies`
- **Źródła:** [Sejm RP, Ustawa z 12.07.2024 Prawo komunikacji elektronicznej, art. 399–400 (Dz.U. 2024 poz. 1221)](https://api.sejm.gov.pl/eli/acts/DU/2024/1221/text.html); [EROD (EDPB), Wytyczne 03/2022 o zwodniczych wzorcach projektowych](https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en); [Nielsen Norman Group, Zgody na cookies](https://www.nngroup.com/articles/cookie-permissions/)

<a id="ety-02"></a>

## ETY-02 Zgodę można wycofać równie łatwo, jak wyrazić

**Siła:** PRAWO · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Na stronie jest stałe miejsce do zmiany zgód.
- **Dlaczego:** Art. 7 ust. 3 RODO: wycofanie tak łatwe jak wyrażenie.
- **Jak sprawdzić:** Znajdź zmianę zgód po zamknięciu banera.
- **Poprawka:** Dodaj link „Ustawienia cookies” w stopce.
- **Źródła:** [UE, RODO, rozporządzenie (UE) 2016/679, art. 7 ust. 3](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)

<a id="ety-03"></a>

## ETY-03 Nic płatnego ani zgody nie są zaznaczone z góry

**Siła:** PRAWO · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Checkboxy zgód, dodatków i newslettera są domyślnie puste.
- **Dlaczego:** Art. 22 dyrektywy 2011/83/UE: dopłata z opcji domyślnej podlega zwrotowi.
- **Jak sprawdzić:** Sprawdź domyślne stany na ścieżce.
- **Poprawka:** Odznacz domyślnie.
- **Test automatyczny:** `x:preselected`
- **Źródła:** [UE, Dyrektywa 2011/83/UE o prawach konsumentów, art. 8 ust. 2 i art. 22](https://eur-lex.europa.eu/eli/dir/2011/83/oj/eng); [UE, RODO, rozporządzenie (UE) 2016/679, art. 7 ust. 3](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng); [Deceptive Patterns, Zaznaczenie z góry](https://deceptive.design/types/preselection/)

<a id="ety-04"></a>

## ETY-04 Nie ma fałszywej presji

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Liczniki, „zostało 2 sztuki” i „ogląda 15 osób” są prawdziwe.
- **Dlaczego:** Fałszywa pilność jest zwodniczym wzorcem (art. 25 DSA dotyczy platform).
- **Jak sprawdzić:** Odśwież stronę: czy licznik startuje od nowa?
- **Poprawka:** Usuń lub podłącz do prawdziwych danych.
- **Źródła:** [Deceptive Patterns, Fałszywa presja czasu](https://deceptive.design/types/fake-urgency/); [UE, Akt o usługach cyfrowych (UE) 2022/2065, art. 25](https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng)

<a id="ety-05"></a>

## ETY-05 Odmowa jest neutralna

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Przycisk odmowy nie zawstydza („Nie, wolę przepłacać”) i jest czytelny.
- **Dlaczego:** Confirmshaming manipuluje emocją.
- **Jak sprawdzić:** Przeczytaj przyciski odmowy w oknach.
- **Poprawka:** Zmień na „Nie, dziękuję”.
- **Źródła:** [Deceptive Patterns, Typy zwodniczych wzorców](https://deceptive.design/types/); [EROD (EDPB), Wytyczne 03/2022 o zwodniczych wzorcach projektowych](https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en)

<a id="ety-06"></a>

## ETY-06 Rezygnacja jest równie łatwa jak zapis

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Wypisanie, usunięcie konta i anulowanie są możliwe online, podobną liczbą kroków.
- **Dlaczego:** Utrudniona rezygnacja to wzorzec „hard to cancel”.
- **Jak sprawdzić:** Porównaj liczbę kroków zapisu i rezygnacji.
- **Poprawka:** Dodaj samoobsługową rezygnację.
- **Źródła:** [Deceptive Patterns, Trudna rezygnacja](https://deceptive.design/types/hard-to-cancel/); [UE, Akt o usługach cyfrowych (UE) 2022/2065, art. 25](https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng); [EROD (EDPB), Wytyczne 03/2022 o zwodniczych wzorcach projektowych](https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en)

<a id="ety-07"></a>

## ETY-07 Treść nie jest zasłonięta oknem po wejściu

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Brak pełnoekranowych okien zaraz po wejściu (wyjątek: wymogi prawne, np. wiek).
- **Dlaczego:** Intruzywne okna utrudniają zadanie i odczyt treści przez Google.
- **Jak sprawdzić:** Wejdź pierwszy raz na telefonie.
- **Poprawka:** Zamień na wąski pasek albo pokaż później.
- **Źródła:** [Google, Google Search: okna pełnoekranowe i dialogi](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials); [Nielsen Norman Group, Pop-upy](https://www.nngroup.com/articles/popups/)

<a id="ety-08"></a>

## ETY-08 Nie trzeba konta, aby zobaczyć wartość

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Treść i oferta są dostępne bez logowania.
- **Dlaczego:** Ściana logowania żąda inwestycji, zanim pokaże korzyść (NN/g).
- **Jak sprawdzić:** Przejdź ścieżkę bez konta.
- **Poprawka:** Przenieś logowanie do momentu, gdy jest niezbędne.
- **Źródła:** [Nielsen Norman Group, Login walls](https://www.nngroup.com/articles/login-walls/)

<a id="ety-09"></a>

## ETY-09 Wiadomo, kto stoi za stroną

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Dane firmy, kontakt, regulamin, polityka prywatności i warunki zwrotu są dostępne z każdej strony i aktualne.
- **Dlaczego:** Cztery czynniki wiarygodności wg NN/g: jakość projektu, jawność, pełna i aktualna treść, powiązania z siecią.
- **Jak sprawdzić:** Znajdź je w 2 kliknięciach.
- **Poprawka:** Uzupełnij stopkę i treści.
- **Źródła:** [Nielsen Norman Group, 4 czynniki wiarygodności](https://www.nngroup.com/articles/trustworthy-design/)

<a id="ety-10"></a>

## ETY-10 Strona działa wyłącznie po HTTPS

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Wszystkie zasoby przez HTTPS, brak treści mieszanej.
- **Dlaczego:** Bez szyfrowania dane można podsłuchać lub zmienić.
- **Jak sprawdzić:** Sprawdź adres, certyfikat i konsolę.
- **Poprawka:** Włącz HTTPS i przekierowanie.
- **Test automatyczny:** `x:https`
- **Źródła:** [Google web.dev, Dlaczego HTTPS](https://web.dev/articles/why-https-matters)

<a id="ety-11"></a>

## ETY-11 Usługa objęta ustawą ma informację o dostępności

**Siła:** PRAWO · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Usługa handlu elektronicznego objęta ustawą z 26.04.2024 spełnia wymagania dostępności, w tym informuje o sposobie ich spełnienia.
- **Dlaczego:** Ustawa obowiązuje od 28.06.2025, z wyłączeniem usług mikroprzedsiębiorców.
- **Jak sprawdzić:** Ustal, czy ustawa obejmuje podmiot, i poszukaj informacji o dostępności.
- **Poprawka:** Opublikuj informację o dostępności i kontakt.
- **Źródła:** [Sejm RP, Ustawa z 26.04.2024 o zapewnianiu spełniania wymagań dostępności niektórych produktów i usług (Dz.U. 2024 poz. 731)](https://api.sejm.gov.pl/eli/acts/DU/2024/731/text.html); [UE, Dyrektywa (UE) 2019/882, European Accessibility Act](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng); [ETSI/CEN/CENELEC, EN 301 549 V3.2.1 (2021-03), wymagania dostępności ICT](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)

---

[← Wydajność](13-wydajnosc.md) · [Mapa wiedzy](../README.md) · [Wyszukiwanie, produkt i transakcje →](15-transakcje-wyszukiwanie.md)
