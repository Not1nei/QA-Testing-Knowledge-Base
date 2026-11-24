<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Wydajność (WYD)

[← Urządzenia mobilne i dotyk](12-mobile-dotyk.md) · [Mapa wiedzy](../README.md) · [Etyka, prywatność i zaufanie →](14-etyka-prywatnosc-zaufanie.md)

Progi Core Web Vitals dotyczą 75. percentyla wizyt. Wynik laboratoryjny jest przybliżeniem danych terenowych.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [WYD-01](#wyd-01) | LCP wynosi najwyżej 2,5 s | WYTYCZNA | 3 | automat |
| [WYD-02](#wyd-02) | INP wynosi najwyżej 200 ms | WYTYCZNA | 3 | ręcznie |
| [WYD-03](#wyd-03) | CLS wynosi najwyżej 0,1 | WYTYCZNA | 3 | automat |
| [WYD-04](#wyd-04) | TTFB wynosi najwyżej 0,8 s | WYTYCZNA | 2 | automat |
| [WYD-05](#wyd-05) | Obrazy mają wymiary i właściwy rozmiar | WYTYCZNA | 2 | automat |
| [WYD-06](#wyd-06) | Tekst jest widoczny podczas ładowania fontów | WYTYCZNA | 1 | automat |
| [WYD-07](#wyd-07) | Oczekiwanie powyżej 1 s ma wskaźnik | BADANIE | 2 | na ścieżce persony |
| [WYD-08](#wyd-08) | Strona nie zgłasza błędów w konsoli | WYTYCZNA | 2 | automat |

<a id="wyd-01"></a>

## WYD-01 LCP wynosi najwyżej 2,5 s

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Największy element pierwszego ekranu pojawia się do 2,5 s w 75. percentylu wizyt.
- **Dlaczego:** To moment, w którym użytkownik uznaje stronę za wczytaną.
- **Jak sprawdzić:** PageSpeed Insights lub pomiar w audycie.
- **Poprawka:** Nadaj obrazowi LCP fetchpriority="high", bez lazy, i zmniejsz plik.
- **Test automatyczny:** `x:lcp`
- **Źródła:** [Google web.dev, Web Vitals: progi](https://web.dev/articles/vitals); [Google web.dev, Optymalizacja LCP](https://web.dev/articles/optimize-lcp)

<a id="wyd-02"></a>

## WYD-02 INP wynosi najwyżej 200 ms

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Opóźnienie reakcji na interakcję do 200 ms w 75. percentylu. Laboratoryjnie sprawdza się długie zadania JS.
- **Dlaczego:** Interfejs szybszy niż ok. 400 ms utrzymuje płynność pracy (próg Doherty’ego).
- **Jak sprawdzić:** PageSpeed Insights (dane terenowe), panel Performance.
- **Poprawka:** Podziel długie zadania, usuń zbędny JS.
- **Test automatyczny:** `x:longtasks`
- **Źródła:** [Google web.dev, Web Vitals: progi](https://web.dev/articles/vitals); [Google web.dev, Optymalizacja INP](https://web.dev/articles/optimize-inp); [Laws of UX, Próg Doherty’ego](https://lawsofux.com/doherty-threshold/)

<a id="wyd-03"></a>

## WYD-03 CLS wynosi najwyżej 0,1

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Suma przesunięć układu do 0,1.
- **Dlaczego:** Skok układu powoduje kliknięcie w niewłaściwe miejsce.
- **Jak sprawdzić:** Pomiar w audycie, obserwacja ładowania.
- **Poprawka:** Ustaw wymiary obrazów i rezerwuj miejsce.
- **Test automatyczny:** `x:cls`
- **Źródła:** [Google web.dev, Web Vitals: progi](https://web.dev/articles/vitals); [Google web.dev, Optymalizacja CLS](https://web.dev/articles/optimize-cls)

<a id="wyd-04"></a>

## WYD-04 TTFB wynosi najwyżej 0,8 s

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Pierwszy bajt odpowiedzi do 0,8 s.
- **Dlaczego:** Opóźnienie serwera przesuwa wszystkie kolejne etapy.
- **Jak sprawdzić:** Pomiar w audycie lub WebPageTest.
- **Poprawka:** Cache, CDN, mniej przekierowań.
- **Test automatyczny:** `x:ttfb`
- **Źródła:** [Google web.dev, Time to First Byte](https://web.dev/articles/ttfb)

<a id="wyd-05"></a>

## WYD-05 Obrazy mają wymiary i właściwy rozmiar

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Obrazy mają width i height lub aspect-ratio, wersje przez srcset, a te poza pierwszym ekranem loading="lazy".
- **Dlaczego:** Duże obrazy zużywają transfer, a brak wymiarów daje przesunięcia.
- **Jak sprawdzić:** Sprawdź kod i rozmiar plików.
- **Poprawka:** Dodaj wymiary, srcset i format WebP lub AVIF.
- **Test automatyczny:** `x:imgdims`
- **Źródła:** [Google web.dev, Optymalizacja CLS](https://web.dev/articles/optimize-cls); [Google web.dev, Obrazy responsywne](https://web.dev/articles/serve-responsive-images); [Google web.dev, Leniwe ładowanie obrazów](https://web.dev/articles/browser-level-image-lazy-loading)

<a id="wyd-06"></a>

## WYD-06 Tekst jest widoczny podczas ładowania fontów

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Fonty webowe mają font-display: swap lub optional.
- **Dlaczego:** Niewidoczny tekst wydłuża oczekiwanie.
- **Jak sprawdzić:** Sprawdź @font-face.
- **Poprawka:** Dodaj font-display i preload.
- **Test automatyczny:** `x:fontdisplay`
- **Źródła:** [Google web.dev, Dobre praktyki dla fontów](https://web.dev/articles/font-best-practices)

<a id="wyd-07"></a>

## WYD-07 Oczekiwanie powyżej 1 s ma wskaźnik

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Powyżej 1 s pokazany jest wskaźnik, 2–10 s szkielet lub spinner, powyżej 10 s postęp z szacunkiem.
- **Dlaczego:** Wskaźnik sprawia, że użytkownik czeka, zamiast odchodzić.
- **Jak sprawdzić:** Spowolnij sieć (Slow 4G) i przejdź ścieżkę.
- **Poprawka:** Dodaj stany ładowania.
- **Źródła:** [Nielsen Norman Group, Wskaźniki postępu](https://www.nngroup.com/articles/progress-indicators/); [Nielsen Norman Group, Ekrany szkieletowe](https://www.nngroup.com/articles/skeleton-screens/)

<a id="wyd-08"></a>

## WYD-08 Strona nie zgłasza błędów w konsoli

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Brak błędów JavaScript i nieudanych żądań na ścieżce.
- **Dlaczego:** Błędy często oznaczają niedziałającą funkcję.
- **Jak sprawdzić:** Otwórz konsolę na każdym ekranie.
- **Poprawka:** Napraw wyjątki i brakujące zasoby.
- **Test automatyczny:** `x:console`
- **Źródła:** [Google Chrome, Lighthouse: punktacja wydajności](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring); [Nielsen Norman Group, 4 czynniki wiarygodności](https://www.nngroup.com/articles/trustworthy-design/)

---

[← Urządzenia mobilne i dotyk](12-mobile-dotyk.md) · [Mapa wiedzy](../README.md) · [Etyka, prywatność i zaufanie →](14-etyka-prywatnosc-zaufanie.md)
