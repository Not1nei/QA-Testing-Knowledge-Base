<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Układ i hierarchia wizualna (WIZ)

[← Nawigacja i architektura informacji](02-nawigacja.md) · [Mapa wiedzy](../README.md) · [Typografia i czytelność →](04-typografia.md)

Czy oko trafia najpierw na to, co najważniejsze.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [WIZ-01](#wiz-01) | Cel strony jest zrozumiały w pierwszym widoku | BADANIE | 3 | na ścieżce persony |
| [WIZ-02](#wiz-02) | Na ekranie jest jedna główna akcja | BADANIE | 2 | ręcznie |
| [WIZ-03](#wiz-03) | Rozmiar, kontrast i położenie odpowiadają ważności | BADANIE | 2 | ręcznie |
| [WIZ-04](#wiz-04) | Elementy powiązane są blisko siebie | BADANIE | 2 | ręcznie |
| [WIZ-05](#wiz-05) | Elementy klikalne wyglądają na klikalne | BADANIE | 3 | ręcznie |
| [WIZ-06](#wiz-06) | Układ działa przy szerokości 320 px bez przewijania w poziomie | NORMA AA | 3 | automat |
| [WIZ-07](#wiz-07) | Układ jest spójny między ekranami | WYTYCZNA | 2 | ręcznie |
| [WIZ-08](#wiz-08) | Obrazy niosą informację | BADANIE | 1 | ręcznie |

<a id="wiz-01"></a>

## WIZ-01 Cel strony jest zrozumiały w pierwszym widoku

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Bez przewijania widać, kto jest właścicielem serwisu, co oferuje i jaka jest główna akcja.
- **Dlaczego:** 57% czasu oglądania przypada na pierwszy ekran, a 74% na dwa pierwsze (NN/g).
- **Jak sprawdzić:** Pokaż personie pierwszy ekran na 5 sekund i zapytaj, co to za strona.
- **Poprawka:** Dodaj nagłówek z propozycją wartości i jedną główną akcję.
- **Źródła:** [Nielsen Norman Group, Przewijanie i uwaga](https://www.nngroup.com/articles/scrolling-and-attention/); [Nielsen Norman Group, Zasady projektowania strony głównej](https://www.nngroup.com/articles/homepage-design-principles/); [W3C COGA, 4.2.1 Make the Purpose of Your Page Clear](https://www.w3.org/TR/coga-usable/#make-the-purpose-of-your-page-clear-pattern)

<a id="wiz-02"></a>

## WIZ-02 Na ekranie jest jedna główna akcja

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Jeden przycisk ma najsilniejszy styl. Akcje drugorzędne wyglądają słabiej.
- **Dlaczego:** Kilka równie mocnych przycisków wydłuża decyzję (prawo Hicka).
- **Jak sprawdzić:** Policz na każdym ekranie przyciski w stylu głównym.
- **Poprawka:** Zostaw jeden, resztę zamień na styl drugorzędny lub link.
- **Źródła:** [Nielsen Norman Group, Hierarchia wizualna](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/); [Laws of UX, Prawo Hicka](https://lawsofux.com/hicks-law/); [GOV.UK, GOV.UK Design System: przycisk](https://design-system.service.gov.uk/components/button/)

<a id="wiz-03"></a>

## WIZ-03 Rozmiar, kontrast i położenie odpowiadają ważności

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Poziomy ważności są rozróżnialne przez skalę, kontrast i grupowanie, a nie tylko kolor.
- **Dlaczego:** Hierarchia prowadzi wzrok i pozwala skanować.
- **Jak sprawdzić:** Rozmyj zrzut ekranu. Sprawdź, czy dalej widać kolejność elementów.
- **Poprawka:** Ustal 2–3 rozmiary nagłówków i stosuj je konsekwentnie.
- **Źródła:** [Nielsen Norman Group, Hierarchia wizualna](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/); [Nielsen Norman Group, 5 zasad projektowania wizualnego](https://www.nngroup.com/articles/principles-visual-design/)

<a id="wiz-04"></a>

## WIZ-04 Elementy powiązane są blisko siebie

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Odstęp wewnątrz grupy jest wyraźnie mniejszy niż odstęp między grupami, np. etykieta bliżej swojego pola niż poprzedniego.
- **Dlaczego:** Bliskość jest odczytywana jako związek (zasada Gestalt).
- **Jak sprawdzić:** Zmierz odstępy etykieta–pole i pole–następna etykieta.
- **Poprawka:** Zwiększ odstęp między grupami, zmniejsz wewnątrz.
- **Źródła:** [Nielsen Norman Group, Zasada bliskości](https://www.nngroup.com/articles/gestalt-proximity/); [W3C COGA, 4.4.10 Use White Spacing](https://www.w3.org/TR/coga-usable/#use-white-spacing-pattern)

<a id="wiz-05"></a>

## WIZ-05 Elementy klikalne wyglądają na klikalne

**Siła:** BADANIE · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Link i przycisk są rozpoznawalne bez najechania kursorem, a tekst nieklikalny nie udaje linku.
- **Dlaczego:** Niepewność co do klikalności każe użytkownikowi zgadywać.
- **Jak sprawdzić:** Na zrzucie zaznacz wszystko, co wygląda na klikalne. Porównaj z rzeczywistością.
- **Poprawka:** Podkreśl linki w tekście, nadaj przyciskom tło i kształt.
- **Test automatyczny:** `axe:link-in-text-block`
- **Źródła:** [Nielsen Norman Group, Rozpoznawalność elementów klikalnych](https://www.nngroup.com/articles/clickable-elements/); [W3C COGA, 4.2.5 Clearly Identify Controls and Their Use](https://www.w3.org/TR/coga-usable/#clearly-identify-controls-and-their-use-pattern)

<a id="wiz-06"></a>

## WIZ-06 Układ działa przy szerokości 320 px bez przewijania w poziomie

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Przy 320 px CSS (zoom 400% z 1280 px) treść nie wymaga przewijania w dwóch kierunkach. Wyjątek: tabele, mapy, wykresy.
- **Dlaczego:** Z powiększenia korzystają osoby słabowidzące, a wąski ekran to także telefon.
- **Jak sprawdzić:** Ustaw szerokość 320 px albo zoom 400% i sprawdź pasek poziomy.
- **Poprawka:** Usuń stałe szerokości, użyj elastycznej siatki i zawijania.
- **Test automatyczny:** `x:hscroll320`
- **Źródła:** [WCAG 2.2, 1.4.10 Reflow (AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

<a id="wiz-07"></a>

## WIZ-07 Układ jest spójny między ekranami

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Nagłówek, menu, treść i stopka mają stałe miejsce, a kontrolki nie przesuwają się niespodziewanie.
- **Dlaczego:** Stały układ pozwala nie uczyć się strony od nowa.
- **Jak sprawdzić:** Nałóż zrzuty kolejnych ekranów i porównaj siatkę.
- **Poprawka:** Użyj wspólnego szablonu strony.
- **Źródła:** [W3C COGA, 4.2.3 Use a Consistent Visual Design](https://www.w3.org/TR/coga-usable/#use-a-consistent-visual-design-pattern); [W3C COGA, 4.5.1 Ensure Controls and Content Do Not Move Unexpectedly](https://www.w3.org/TR/coga-usable/#ensure-controls-and-content-do-not-move-unexpectedly-pattern); [Nielsen Norman Group, Heurystyka 4: spójność i standardy](https://www.nngroup.com/articles/consistency-and-standards/)

<a id="wiz-08"></a>

## WIZ-08 Obrazy niosą informację

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Zdjęcia pokazują produkt, miejsce lub osobę, o których mówi treść. Zdjęcia ozdobne nie wypychają treści poza pierwszy ekran.
- **Dlaczego:** Użytkownicy oglądają zdjęcia informacyjne, a ozdobne pomijają (NN/g).
- **Jak sprawdzić:** Dla każdego zdjęcia odpowiedz: jaką informację traci strona bez niego?
- **Poprawka:** Zamień zdjęcia stockowe na własne albo usuń.
- **Źródła:** [Nielsen Norman Group, Zdjęcia jako treść](https://www.nngroup.com/articles/photos-as-web-content/)

---

[← Nawigacja i architektura informacji](02-nawigacja.md) · [Mapa wiedzy](../README.md) · [Typografia i czytelność →](04-typografia.md)
