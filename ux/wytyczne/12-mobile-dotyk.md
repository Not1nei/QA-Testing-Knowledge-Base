<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Urządzenia mobilne i dotyk (MOB)

[← Dostępność poznawcza i neuroróżnorodność](11-poznawcza-neuroroznorodnosc.md) · [Mapa wiedzy](../README.md) · [Wydajność →](13-wydajnosc.md)

Sprawdzaj w 360–390 px szerokości oraz na prawdziwym telefonie.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [MOB-01](#mob-01) | Cel dotykowy ma co najmniej 24×24 px | NORMA AA | 3 | automat |
| [MOB-02](#mob-02) | Główne cele dotykowe mają 44–48 px | WYTYCZNA | 2 | automat |
| [MOB-03](#mob-03) | Można powiększać | NORMA AA | 3 | automat |
| [MOB-04](#mob-04) | Wersja mobilna ma tę samą treść | WYTYCZNA | 3 | ręcznie |
| [MOB-05](#mob-05) | Strona działa w obu orientacjach | NORMA AA | 2 | ręcznie |
| [MOB-06](#mob-06) | Gest ma alternatywę | NORMA A | 2 | ręcznie |
| [MOB-07](#mob-07) | Nic istotnego nie zależy od najechania | NORMA AA | 3 | ręcznie |
| [MOB-08](#mob-08) | Przypadkowe dotknięcie można wycofać | NORMA A | 2 | ręcznie |
| [MOB-09](#mob-09) | Ruch urządzeniem nie jest jedynym sposobem | NORMA A | 2 | ręcznie |

<a id="mob-01"></a>

## MOB-01 Cel dotykowy ma co najmniej 24×24 px

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Każdy cel ≥ 24×24 px CSS albo wystarczający odstęp od sąsiadów. Wyjątki: link w zdaniu, kontrolka natywna.
- **Dlaczego:** Małe cele powodują przypadkowe kliknięcia.
- **Jak sprawdzić:** Zmierz rozmiary na widoku mobilnym.
- **Poprawka:** Zwiększ padding lub odstęp.
- **Test automatyczny:** `axe:target-size`
- **Źródła:** [WCAG 2.2, 2.5.8 Target Size (Minimum) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

<a id="mob-02"></a>

## MOB-02 Główne cele dotykowe mają 44–48 px

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Przyciski i pozycje menu ≥ 44×44 pt (Apple) / 48×48 dp (Material) / 1×1 cm (NN/g).
- **Dlaczego:** Czas trafienia zależy od rozmiaru celu i odległości (prawo Fittsa).
- **Jak sprawdzić:** Zmierz główne przyciski.
- **Poprawka:** Ustaw min-height: 48px.
- **Test automatyczny:** `x:target44`
- **Źródła:** [Apple, Human Interface Guidelines: Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility); [Google, Material Design 3: dostępność, struktura](https://m3.material.io/foundations/designing/structure); [Nielsen Norman Group, Cele dotykowe](https://www.nngroup.com/articles/touch-target-size/); [Google web.dev, Dostępne cele dotykowe](https://web.dev/articles/accessible-tap-targets); [WCAG 2.2, 2.5.5 Target Size (Enhanced) (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html); [Laws of UX, Prawo Fittsa](https://lawsofux.com/fittss-law/)

<a id="mob-03"></a>

## MOB-03 Można powiększać

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Meta viewport nie blokuje skalowania (brak user-scalable=no i maximum-scale mniejszego niż 2).
- **Dlaczego:** Zablokowany zoom odbiera pomoc osobom słabowidzącym.
- **Jak sprawdzić:** Powiększ gestem na telefonie.
- **Poprawka:** Usuń ograniczenia z viewport.
- **Test automatyczny:** `axe:meta-viewport`, `axe:meta-viewport-large`
- **Źródła:** [WCAG 2.2, 1.4.4 Resize Text (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html); [MDN, MDN: meta viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport)

<a id="mob-04"></a>

## MOB-04 Wersja mobilna ma tę samą treść

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Wszystkie treści i funkcje desktopu są dostępne na telefonie.
- **Dlaczego:** Google indeksuje wersję mobilną, a użytkownik oczekuje tego samego.
- **Jak sprawdzić:** Porównaj listę sekcji i funkcji.
- **Poprawka:** Przywróć brakujące elementy.
- **Źródła:** [Google, Google Search: mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing); [Nielsen Norman Group, Nawigacja mobilna](https://www.nngroup.com/articles/mobile-navigation-patterns/)

<a id="mob-05"></a>

## MOB-05 Strona działa w obu orientacjach

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Orientacja nie jest wymuszona.
- **Dlaczego:** Telefon bywa zamocowany na stałe, np. na wózku.
- **Jak sprawdzić:** Obróć urządzenie na każdym ekranie.
- **Poprawka:** Usuń blokadę orientacji.
- **Test automatyczny:** `axe:css-orientation-lock`
- **Źródła:** [WCAG 2.2, 1.3.4 Orientation (AA)](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)

<a id="mob-06"></a>

## MOB-06 Gest ma alternatywę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Przeciąganie, przesuwanie i gesty wielopalcowe można zastąpić pojedynczym dotknięciem.
- **Dlaczego:** Złożone gesty są niewykonalne dla części osób.
- **Jak sprawdzić:** Sprawdź suwaki, galerie, mapy.
- **Poprawka:** Dodaj przyciski strzałek i plus/minus.
- **Źródła:** [WCAG 2.2, 2.5.1 Pointer Gestures (A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html); [WCAG 2.2, 2.5.7 Dragging Movements (AA)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)

<a id="mob-07"></a>

## MOB-07 Nic istotnego nie zależy od najechania

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Treść pokazana po najechaniu jest dostępna także z fokusu i dotyku, można ją zamknąć i na nią najechać.
- **Dlaczego:** Na ekranie dotykowym nie ma stanu hover.
- **Jak sprawdzić:** Sprawdź dymki i rozwijane menu na telefonie.
- **Poprawka:** Użyj kliknięcia zamiast hover.
- **Źródła:** [WCAG 2.2, 1.4.13 Content on Hover or Focus (AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)

<a id="mob-08"></a>

## MOB-08 Przypadkowe dotknięcie można wycofać

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Akcja uruchamia się po puszczeniu, a nie po naciśnięciu. Przesunięcie palca poza element anuluje akcję.
- **Dlaczego:** Chroni osoby z drżeniem rąk.
- **Jak sprawdzić:** Naciśnij przycisk, przesuń poza i puść.
- **Poprawka:** Użyj zdarzenia click zamiast mousedown lub touchstart.
- **Źródła:** [WCAG 2.2, 2.5.2 Pointer Cancellation (A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)

<a id="mob-09"></a>

## MOB-09 Ruch urządzeniem nie jest jedynym sposobem

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Funkcję uruchamianą potrząśnięciem lub przechyleniem można wykonać przyciskiem i wyłączyć.
- **Dlaczego:** Urządzenie bywa zamocowane na stałe.
- **Jak sprawdzić:** Sprawdź funkcje używające czujników ruchu.
- **Poprawka:** Dodaj przycisk i wyłącznik.
- **Źródła:** [WCAG 2.2, 2.5.4 Motion Actuation (A)](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html)

---

[← Dostępność poznawcza i neuroróżnorodność](11-poznawcza-neuroroznorodnosc.md) · [Mapa wiedzy](../README.md) · [Wydajność →](13-wydajnosc.md)
