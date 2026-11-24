<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Checklista UX (144 punktów)

[Mapa wiedzy](../README.md) · [Skala wag](../metodologia/wagi.md) · wersje: [CSV](checklista-ux.csv), [JSON](checklista-ux.json)

Wynik każdego punktu: **OK** (spełnione), **BŁĄD** (naruszenie, nadaj wagę 1–4), **ND** (nie dotyczy, podaj powód), **NS** (nie sprawdzono, podaj powód). Pustych punktów nie zostawiamy.

## HEU Heurystyki użyteczności

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [HEU-01](../wytyczne/01-heurystyki.md#heu-01) | System pokazuje, co się dzieje, po każdej akcji użytkownika | BADANIE | 3 | P | |
| ☐ | [HEU-02](../wytyczne/01-heurystyki.md#heu-02) | Język i pojęcia pochodzą ze świata użytkownika | BADANIE | 2 | M | |
| ☐ | [HEU-03](../wytyczne/01-heurystyki.md#heu-03) | Użytkownik może się wycofać z każdej akcji | BADANIE | 3 | P | |
| ☐ | [HEU-04](../wytyczne/01-heurystyki.md#heu-04) | Te same elementy wyglądają, nazywają się i działają tak samo | NORMA AA | 2 | M | |
| ☐ | [HEU-05](../wytyczne/01-heurystyki.md#heu-05) | Interfejs zapobiega błędom, zanim powstaną | BADANIE | 3 | P | |
| ☐ | [HEU-06](../wytyczne/01-heurystyki.md#heu-06) | Użytkownik rozpoznaje, a nie przypomina sobie | BADANIE | 2 | P | |
| ☐ | [HEU-07](../wytyczne/01-heurystyki.md#heu-07) | Częste zadania mają skrót | BADANIE | 1 | P | |
| ☐ | [HEU-08](../wytyczne/01-heurystyki.md#heu-08) | Ekran nie zawiera treści, które nie wspierają celu | BADANIE | 2 | M | |
| ☐ | [HEU-09](../wytyczne/01-heurystyki.md#heu-09) | Komunikat błędu mówi, co się stało i co zrobić | NORMA AA | 3 | P | |
| ☐ | [HEU-10](../wytyczne/01-heurystyki.md#heu-10) | Pomoc jest łatwa do znalezienia i w stałym miejscu | NORMA A | 2 | M | |

## NAV Nawigacja i architektura informacji

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [NAV-01](../wytyczne/02-nawigacja.md#nav-01) | Każda strona ma unikalny, opisowy tytuł | NORMA A | 2 | A | |
| ☐ | [NAV-02](../wytyczne/02-nawigacja.md#nav-02) | Menu główne jest spójne na wszystkich stronach | NORMA AA | 2 | A | |
| ☐ | [NAV-03](../wytyczne/02-nawigacja.md#nav-03) | Aktualna strona jest oznaczona w nawigacji | BADANIE | 2 | A | |
| ☐ | [NAV-04](../wytyczne/02-nawigacja.md#nav-04) | Na dużym ekranie główna nawigacja jest widoczna | BADANIE | 2 | A | |
| ☐ | [NAV-05](../wytyczne/02-nawigacja.md#nav-05) | Do każdej strony prowadzą co najmniej dwie drogi | NORMA AA | 2 | M | |
| ☐ | [NAV-06](../wytyczne/02-nawigacja.md#nav-06) | Głębokie strony mają okruszki | BADANIE | 1 | M | |
| ☐ | [NAV-07](../wytyczne/02-nawigacja.md#nav-07) | Tekst linku mówi, dokąd prowadzi | NORMA A | 2 | A | |
| ☐ | [NAV-08](../wytyczne/02-nawigacja.md#nav-08) | Nie ma martwych linków i przycisków | BADANIE | 3 | A | |
| ☐ | [NAV-09](../wytyczne/02-nawigacja.md#nav-09) | Nowa karta jest zapowiedziana | BADANIE | 1 | A | |
| ☐ | [NAV-10](../wytyczne/02-nawigacja.md#nav-10) | Strona 404 pomaga wrócić do zadania | WYTYCZNA | 1 | A | |

## WIZ Układ i hierarchia wizualna

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [WIZ-01](../wytyczne/03-uklad-hierarchia.md#wiz-01) | Cel strony jest zrozumiały w pierwszym widoku | BADANIE | 3 | P | |
| ☐ | [WIZ-02](../wytyczne/03-uklad-hierarchia.md#wiz-02) | Na ekranie jest jedna główna akcja | BADANIE | 2 | M | |
| ☐ | [WIZ-03](../wytyczne/03-uklad-hierarchia.md#wiz-03) | Rozmiar, kontrast i położenie odpowiadają ważności | BADANIE | 2 | M | |
| ☐ | [WIZ-04](../wytyczne/03-uklad-hierarchia.md#wiz-04) | Elementy powiązane są blisko siebie | BADANIE | 2 | M | |
| ☐ | [WIZ-05](../wytyczne/03-uklad-hierarchia.md#wiz-05) | Elementy klikalne wyglądają na klikalne | BADANIE | 3 | M | |
| ☐ | [WIZ-06](../wytyczne/03-uklad-hierarchia.md#wiz-06) | Układ działa przy szerokości 320 px bez przewijania w poziomie | NORMA AA | 3 | A | |
| ☐ | [WIZ-07](../wytyczne/03-uklad-hierarchia.md#wiz-07) | Układ jest spójny między ekranami | WYTYCZNA | 2 | M | |
| ☐ | [WIZ-08](../wytyczne/03-uklad-hierarchia.md#wiz-08) | Obrazy niosą informację | BADANIE | 1 | M | |

## TYP Typografia i czytelność

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [TYP-01](../wytyczne/04-typografia.md#typ-01) | Tekst główny ma co najmniej 16 px | WYTYCZNA | 2 | A | |
| ☐ | [TYP-02](../wytyczne/04-typografia.md#typ-02) | Tekst powiększa się do 200% bez utraty treści | NORMA AA | 3 | M | |
| ☐ | [TYP-03](../wytyczne/04-typografia.md#typ-03) | Wiersz ma 45–90 znaków, najlepiej 50–75 | BADANIE | 2 | A | |
| ☐ | [TYP-04](../wytyczne/04-typografia.md#typ-04) | Interlinia tekstu ciągłego wynosi około 1,5 | NORMA AAA | 1 | A | |
| ☐ | [TYP-05](../wytyczne/04-typografia.md#typ-05) | Zmiana odstępów tekstu nie psuje strony | NORMA AA | 2 | A | |
| ☐ | [TYP-06](../wytyczne/04-typografia.md#typ-06) | Tekst jest wyrównany do lewej | NORMA AAA | 1 | A | |
| ☐ | [TYP-07](../wytyczne/04-typografia.md#typ-07) | Wyróżnienia nie używają podkreśleń, kursywy i długich WERSALIKÓW | WYTYCZNA | 1 | A | |
| ☐ | [TYP-08](../wytyczne/04-typografia.md#typ-08) | Tekst nie jest obrazem | NORMA AA | 2 | M | |

## KOL Kolor i kontrast

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [KOL-01](../wytyczne/05-kolor-kontrast.md#kol-01) | Kontrast tekstu wynosi co najmniej 4,5:1 | NORMA AA | 3 | A | |
| ☐ | [KOL-02](../wytyczne/05-kolor-kontrast.md#kol-02) | Kontrast elementów interfejsu wynosi co najmniej 3:1 | NORMA AA | 2 | M | |
| ☐ | [KOL-03](../wytyczne/05-kolor-kontrast.md#kol-03) | Informacja nie jest przekazana samym kolorem | NORMA A | 3 | M | |
| ☐ | [KOL-04](../wytyczne/05-kolor-kontrast.md#kol-04) | Tekst na zdjęciu ma zapewniony kontrast | NORMA AA | 2 | M | |
| ☐ | [KOL-05](../wytyczne/05-kolor-kontrast.md#kol-05) | Strona działa z ustawieniami kolorów użytkownika | BADANIE | 2 | M | |
| ☐ | [KOL-06](../wytyczne/05-kolor-kontrast.md#kol-06) | Paleta jest spokojna, a kolory mają stałe znaczenie | WYTYCZNA | 1 | M | |

## TRE Treść i język

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [TRE-01](../wytyczne/06-tresc-jezyk.md#tre-01) | Najważniejsza informacja jest na początku | BADANIE | 2 | M | |
| ☐ | [TRE-02](../wytyczne/06-tresc-jezyk.md#tre-02) | Treść jest podzielona na krótkie fragmenty | BADANIE | 2 | M | |
| ☐ | [TRE-03](../wytyczne/06-tresc-jezyk.md#tre-03) | Nagłówki mówią o treści | NORMA AA | 2 | M | |
| ☐ | [TRE-04](../wytyczne/06-tresc-jezyk.md#tre-04) | Język jest prosty | WYTYCZNA | 2 | M | |
| ☐ | [TRE-05](../wytyczne/06-tresc-jezyk.md#tre-05) | Tekst jest dosłowny | WYTYCZNA | 2 | M | |
| ☐ | [TRE-06](../wytyczne/06-tresc-jezyk.md#tre-06) | Przycisk nazywa swój skutek | BADANIE | 2 | M | |
| ☐ | [TRE-07](../wytyczne/06-tresc-jezyk.md#tre-07) | Język strony i fragmentów obcych jest oznaczony | NORMA A | 2 | A | |
| ☐ | [TRE-08](../wytyczne/06-tresc-jezyk.md#tre-08) | Instrukcje podają jeden krok naraz | WYTYCZNA | 1 | M | |

## FOR Formularze i błędy

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [FOR-01](../wytyczne/07-formularze-bledy.md#for-01) | Każde pole ma widoczną, trwałą etykietę | NORMA A | 3 | A | |
| ☐ | [FOR-02](../wytyczne/07-formularze-bledy.md#for-02) | Placeholder nie zastępuje etykiety | BADANIE | 2 | A | |
| ☐ | [FOR-03](../wytyczne/07-formularze-bledy.md#for-03) | Pola wymagane są oznaczone | BADANIE | 2 | M | |
| ☐ | [FOR-04](../wytyczne/07-formularze-bledy.md#for-04) | Formularz prosi tylko o dane niezbędne | NORMA A | 3 | M | |
| ☐ | [FOR-05](../wytyczne/07-formularze-bledy.md#for-05) | Formularz ma jedną kolumnę i logiczną kolejność | BADANIE | 2 | M | |
| ☐ | [FOR-06](../wytyczne/07-formularze-bledy.md#for-06) | Pola wspierają autouzupełnianie i właściwą klawiaturę | NORMA AA | 2 | A | |
| ☐ | [FOR-07](../wytyczne/07-formularze-bledy.md#for-07) | Błąd jest opisany tekstem przy polu | NORMA A | 3 | P | |
| ☐ | [FOR-08](../wytyczne/07-formularze-bledy.md#for-08) | Komunikat mówi, jak poprawić | NORMA AA | 3 | P | |
| ☐ | [FOR-09](../wytyczne/07-formularze-bledy.md#for-09) | Wpisane dane nie znikają po błędzie | WYTYCZNA | 3 | P | |
| ☐ | [FOR-10](../wytyczne/07-formularze-bledy.md#for-10) | Długi formularz ma podsumowanie błędów z linkami | WYTYCZNA | 2 | P | |
| ☐ | [FOR-11](../wytyczne/07-formularze-bledy.md#for-11) | Walidacja w trakcie nie wyprzedza użytkownika | BADANIE | 2 | P | |
| ☐ | [FOR-12](../wytyczne/07-formularze-bledy.md#for-12) | Przycisk wysłania jest aktywny | WYTYCZNA | 2 | A | |
| ☐ | [FOR-13](../wytyczne/07-formularze-bledy.md#for-13) | Nie ma przycisku „Wyczyść formularz” | BADANIE | 2 | A | |
| ☐ | [FOR-14](../wytyczne/07-formularze-bledy.md#for-14) | Dane ważne można sprawdzić przed wysłaniem | NORMA AA | 3 | P | |
| ☐ | [FOR-15](../wytyczne/07-formularze-bledy.md#for-15) | Nieodwracalna akcja ma konkretne potwierdzenie | BADANIE | 3 | P | |

## KLA Klawiatura i fokus

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [KLA-01](../wytyczne/08-klawiatura-fokus.md#kla-01) | Wszystko działa z klawiatury | NORMA A | 4 | P | |
| ☐ | [KLA-02](../wytyczne/08-klawiatura-fokus.md#kla-02) | Nie ma pułapki na klawiaturę | NORMA A | 4 | P | |
| ☐ | [KLA-03](../wytyczne/08-klawiatura-fokus.md#kla-03) | Fokus jest widoczny | NORMA AA | 3 | A | |
| ☐ | [KLA-04](../wytyczne/08-klawiatura-fokus.md#kla-04) | Fokus nie chowa się pod przyklejonymi elementami | NORMA AA | 2 | M | |
| ☐ | [KLA-05](../wytyczne/08-klawiatura-fokus.md#kla-05) | Kolejność fokusu jest logiczna | NORMA A | 3 | A | |
| ☐ | [KLA-06](../wytyczne/08-klawiatura-fokus.md#kla-06) | Jest link „Przejdź do treści” | NORMA A | 2 | A | |
| ☐ | [KLA-07](../wytyczne/08-klawiatura-fokus.md#kla-07) | Okno modalne zarządza fokusem | WYTYCZNA | 3 | P | |
| ☐ | [KLA-08](../wytyczne/08-klawiatura-fokus.md#kla-08) | Fokus i wpisywanie nie zmieniają kontekstu same | NORMA A | 3 | P | |
| ☐ | [KLA-09](../wytyczne/08-klawiatura-fokus.md#kla-09) | Skróty jednoliterowe można wyłączyć | NORMA A | 2 | M | |

## SEM Semantyka i czytniki ekranu

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [SEM-01](../wytyczne/09-semantyka-czytniki.md#sem-01) | Każdy obraz ma właściwy tekst alternatywny | NORMA A | 3 | A | |
| ☐ | [SEM-02](../wytyczne/09-semantyka-czytniki.md#sem-02) | Nagłówki tworzą logiczną strukturę | NORMA A | 2 | A | |
| ☐ | [SEM-03](../wytyczne/09-semantyka-czytniki.md#sem-03) | Strona ma regiony | WYTYCZNA | 2 | A | |
| ☐ | [SEM-04](../wytyczne/09-semantyka-czytniki.md#sem-04) | Link to <a href>, przycisk to <button> | WYTYCZNA | 3 | A | |
| ☐ | [SEM-05](../wytyczne/09-semantyka-czytniki.md#sem-05) | Każda kontrolka ma nazwę | NORMA A | 3 | A | |
| ☐ | [SEM-06](../wytyczne/09-semantyka-czytniki.md#sem-06) | Nazwa dostępna zawiera widoczny tekst | NORMA A | 2 | A | |
| ☐ | [SEM-07](../wytyczne/09-semantyka-czytniki.md#sem-07) | ARIA jest poprawna | WYTYCZNA | 2 | A | |
| ☐ | [SEM-08](../wytyczne/09-semantyka-czytniki.md#sem-08) | Rozwijane elementy ogłaszają stan | WYTYCZNA | 2 | M | |
| ☐ | [SEM-09](../wytyczne/09-semantyka-czytniki.md#sem-09) | Komunikaty dynamiczne są ogłaszane | NORMA AA | 2 | P | |
| ☐ | [SEM-10](../wytyczne/09-semantyka-czytniki.md#sem-10) | Tabele danych mają nagłówki | WYTYCZNA | 2 | A | |
| ☐ | [SEM-11](../wytyczne/09-semantyka-czytniki.md#sem-11) | Listy i grupy są oznaczone | NORMA A | 2 | A | |
| ☐ | [SEM-12](../wytyczne/09-semantyka-czytniki.md#sem-12) | Instrukcje nie opierają się na kształcie, położeniu ani dźwięku | NORMA A | 2 | M | |

## MED Multimedia i ruch

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [MED-01](../wytyczne/10-multimedia-ruch.md#med-01) | Wideo ma napisy | NORMA A | 3 | A | |
| ☐ | [MED-02](../wytyczne/10-multimedia-ruch.md#med-02) | Nagrania mają alternatywę tekstową | NORMA A | 2 | M | |
| ☐ | [MED-03](../wytyczne/10-multimedia-ruch.md#med-03) | Nic nie gra samo | NORMA A | 3 | A | |
| ☐ | [MED-04](../wytyczne/10-multimedia-ruch.md#med-04) | Ruch można zatrzymać | NORMA A | 3 | M | |
| ☐ | [MED-05](../wytyczne/10-multimedia-ruch.md#med-05) | Karuzela nie przewija się sama | BADANIE | 2 | M | |
| ☐ | [MED-06](../wytyczne/10-multimedia-ruch.md#med-06) | Strona szanuje prefers-reduced-motion | NORMA AAA | 2 | A | |
| ☐ | [MED-07](../wytyczne/10-multimedia-ruch.md#med-07) | Nic nie miga częściej niż 3 razy na sekundę | NORMA A | 4 | M | |
| ☐ | [MED-08](../wytyczne/10-multimedia-ruch.md#med-08) | Animacje interfejsu trwają 100–500 ms | BADANIE | 1 | A | |
| ☐ | [MED-09](../wytyczne/10-multimedia-ruch.md#med-09) | Transmisja na żywo ma napisy | NORMA AA | 2 | M | |

## KOG Dostępność poznawcza i neuroróżnorodność

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [KOG-01](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-01) | Nic nie przerywa zadania | WYTYCZNA | 3 | P | |
| ☐ | [KOG-02](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-02) | Wiadomo, ile kroków zostało | WYTYCZNA | 2 | P | |
| ☐ | [KOG-03](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-03) | Ekran zadania ma jeden cel | WYTYCZNA | 2 | M | |
| ☐ | [KOG-04](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-04) | Logowanie nie wymaga testu pamięci | NORMA AA | 3 | P | |
| ☐ | [KOG-05](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-05) | Limit czasu można wyłączyć lub wydłużyć | NORMA A | 3 | M | |
| ☐ | [KOG-06](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-06) | Ikony mają podpis | BADANIE | 2 | M | |
| ☐ | [KOG-07](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-07) | Użytkownik nie musi liczyć ani przeliczać | WYTYCZNA | 2 | M | |
| ☐ | [KOG-08](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-08) | Instrukcja i pomoc są przy zadaniu | WYTYCZNA | 1 | M | |
| ☐ | [KOG-09](../wytyczne/11-poznawcza-neuroroznorodnosc.md#kog-09) | Dłuższy tekst ma skrót | WYTYCZNA | 1 | M | |

## MOB Urządzenia mobilne i dotyk

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [MOB-01](../wytyczne/12-mobile-dotyk.md#mob-01) | Cel dotykowy ma co najmniej 24×24 px | NORMA AA | 3 | A | |
| ☐ | [MOB-02](../wytyczne/12-mobile-dotyk.md#mob-02) | Główne cele dotykowe mają 44–48 px | WYTYCZNA | 2 | A | |
| ☐ | [MOB-03](../wytyczne/12-mobile-dotyk.md#mob-03) | Można powiększać | NORMA AA | 3 | A | |
| ☐ | [MOB-04](../wytyczne/12-mobile-dotyk.md#mob-04) | Wersja mobilna ma tę samą treść | WYTYCZNA | 3 | M | |
| ☐ | [MOB-05](../wytyczne/12-mobile-dotyk.md#mob-05) | Strona działa w obu orientacjach | NORMA AA | 2 | M | |
| ☐ | [MOB-06](../wytyczne/12-mobile-dotyk.md#mob-06) | Gest ma alternatywę | NORMA A | 2 | M | |
| ☐ | [MOB-07](../wytyczne/12-mobile-dotyk.md#mob-07) | Nic istotnego nie zależy od najechania | NORMA AA | 3 | M | |
| ☐ | [MOB-08](../wytyczne/12-mobile-dotyk.md#mob-08) | Przypadkowe dotknięcie można wycofać | NORMA A | 2 | M | |
| ☐ | [MOB-09](../wytyczne/12-mobile-dotyk.md#mob-09) | Ruch urządzeniem nie jest jedynym sposobem | NORMA A | 2 | M | |

## WYD Wydajność

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [WYD-01](../wytyczne/13-wydajnosc.md#wyd-01) | LCP wynosi najwyżej 2,5 s | WYTYCZNA | 3 | A | |
| ☐ | [WYD-02](../wytyczne/13-wydajnosc.md#wyd-02) | INP wynosi najwyżej 200 ms | WYTYCZNA | 3 | M | |
| ☐ | [WYD-03](../wytyczne/13-wydajnosc.md#wyd-03) | CLS wynosi najwyżej 0,1 | WYTYCZNA | 3 | A | |
| ☐ | [WYD-04](../wytyczne/13-wydajnosc.md#wyd-04) | TTFB wynosi najwyżej 0,8 s | WYTYCZNA | 2 | A | |
| ☐ | [WYD-05](../wytyczne/13-wydajnosc.md#wyd-05) | Obrazy mają wymiary i właściwy rozmiar | WYTYCZNA | 2 | A | |
| ☐ | [WYD-06](../wytyczne/13-wydajnosc.md#wyd-06) | Tekst jest widoczny podczas ładowania fontów | WYTYCZNA | 1 | A | |
| ☐ | [WYD-07](../wytyczne/13-wydajnosc.md#wyd-07) | Oczekiwanie powyżej 1 s ma wskaźnik | BADANIE | 2 | P | |
| ☐ | [WYD-08](../wytyczne/13-wydajnosc.md#wyd-08) | Strona nie zgłasza błędów w konsoli | WYTYCZNA | 2 | A | |

## ETY Etyka, prywatność i zaufanie

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [ETY-01](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-01) | Odrzucenie cookies jest tak samo łatwe jak zgoda | PRAWO | 3 | M | |
| ☐ | [ETY-02](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-02) | Zgodę można wycofać równie łatwo, jak wyrazić | PRAWO | 3 | M | |
| ☐ | [ETY-03](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-03) | Nic płatnego ani zgody nie są zaznaczone z góry | PRAWO | 4 | A | |
| ☐ | [ETY-04](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-04) | Nie ma fałszywej presji | BADANIE | 3 | M | |
| ☐ | [ETY-05](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-05) | Odmowa jest neutralna | BADANIE | 2 | M | |
| ☐ | [ETY-06](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-06) | Rezygnacja jest równie łatwa jak zapis | BADANIE | 3 | P | |
| ☐ | [ETY-07](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-07) | Treść nie jest zasłonięta oknem po wejściu | WYTYCZNA | 2 | M | |
| ☐ | [ETY-08](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-08) | Nie trzeba konta, aby zobaczyć wartość | BADANIE | 2 | P | |
| ☐ | [ETY-09](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-09) | Wiadomo, kto stoi za stroną | BADANIE | 3 | M | |
| ☐ | [ETY-10](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-10) | Strona działa wyłącznie po HTTPS | WYTYCZNA | 4 | A | |
| ☐ | [ETY-11](../wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-11) | Usługa objęta ustawą ma informację o dostępności | PRAWO | 3 | M | |

## TRA Wyszukiwanie, produkt i transakcje

| ✓ | ID | Punkt kontrolny | Siła | Waga | Metoda | Wynik i uwagi |
|---|---|---|---|---|---|---|
| ☐ | [TRA-01](../wytyczne/15-transakcje-wyszukiwanie.md#tra-01) | Wyszukiwarka jest widoczna i prosta | BADANIE | 2 | M | |
| ☐ | [TRA-02](../wytyczne/15-transakcje-wyszukiwanie.md#tra-02) | Wyszukiwarka rozumie literówki i synonimy | BADANIE | 2 | P | |
| ☐ | [TRA-03](../wytyczne/15-transakcje-wyszukiwanie.md#tra-03) | Brak wyników wskazuje dalszą drogę | BADANIE | 2 | P | |
| ☐ | [TRA-04](../wytyczne/15-transakcje-wyszukiwanie.md#tra-04) | Puste stany tłumaczą, co zrobić | BADANIE | 1 | P | |
| ☐ | [TRA-05](../wytyczne/15-transakcje-wyszukiwanie.md#tra-05) | Filtry są widoczne i można je cofnąć | BADANIE | 2 | P | |
| ☐ | [TRA-06](../wytyczne/15-transakcje-wyszukiwanie.md#tra-06) | Strona produktu odpowiada na pytania kupującego | BADANIE | 3 | M | |
| ☐ | [TRA-07](../wytyczne/15-transakcje-wyszukiwanie.md#tra-07) | Dodanie do koszyka jest potwierdzone | BADANIE | 3 | P | |
| ☐ | [TRA-08](../wytyczne/15-transakcje-wyszukiwanie.md#tra-08) | Koszt całkowity jest znany przed checkoutem | BADANIE | 4 | P | |
| ☐ | [TRA-09](../wytyczne/15-transakcje-wyszukiwanie.md#tra-09) | Można kupić bez konta | BADANIE | 3 | P | |
| ☐ | [TRA-10](../wytyczne/15-transakcje-wyszukiwanie.md#tra-10) | Przycisk zamówienia mówi o obowiązku zapłaty | PRAWO | 4 | P | |
| ☐ | [TRA-11](../wytyczne/15-transakcje-wyszukiwanie.md#tra-11) | Potwierdzenie mówi, co dalej | WYTYCZNA | 3 | P | |
| ☐ | [TRA-12](../wytyczne/15-transakcje-wyszukiwanie.md#tra-12) | Hasło: długość zamiast reguł | WYTYCZNA | 2 | P | |

Metoda: A = automat, M = ręcznie, P = na ścieżce persony.
