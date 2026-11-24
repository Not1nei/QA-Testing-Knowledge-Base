<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Multimedia i ruch (MED)

[← Semantyka i czytniki ekranu](09-semantyka-czytniki.md) · [Mapa wiedzy](../README.md) · [Dostępność poznawcza i neuroróżnorodność →](11-poznawcza-neuroroznorodnosc.md)

Ruch, dźwięk i miganie mogą nie tylko przeszkadzać, lecz także szkodzić zdrowiu.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [MED-01](#med-01) | Wideo ma napisy | NORMA A | 3 | automat |
| [MED-02](#med-02) | Nagrania mają alternatywę tekstową | NORMA A | 2 | ręcznie |
| [MED-03](#med-03) | Nic nie gra samo | NORMA A | 3 | automat |
| [MED-04](#med-04) | Ruch można zatrzymać | NORMA A | 3 | ręcznie |
| [MED-05](#med-05) | Karuzela nie przewija się sama | BADANIE | 2 | ręcznie |
| [MED-06](#med-06) | Strona szanuje prefers-reduced-motion | NORMA AAA | 2 | automat |
| [MED-07](#med-07) | Nic nie miga częściej niż 3 razy na sekundę | NORMA A | 4 | ręcznie |
| [MED-08](#med-08) | Animacje interfejsu trwają 100–500 ms | BADANIE | 1 | automat |
| [MED-09](#med-09) | Transmisja na żywo ma napisy | NORMA AA | 2 | ręcznie |

<a id="med-01"></a>

## MED-01 Wideo ma napisy

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Nagrane wideo z dźwiękiem ma napisy zsynchronizowane, obejmujące dialogi i istotne dźwięki.
- **Dlaczego:** Napisy są potrzebne osobom głuchym i wszystkim oglądającym bez dźwięku.
- **Jak sprawdzić:** Włącz napisy, sprawdź zgodność.
- **Poprawka:** Dodaj <track kind="captions">.
- **Test automatyczny:** `axe:video-caption`, `x:video`
- **Źródła:** [WCAG 2.2, 1.2.2 Captions (Prerecorded) (A)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html); [W3C WAI, WAI: dostępne audio i wideo](https://www.w3.org/WAI/media/av/)

<a id="med-02"></a>

## MED-02 Nagrania mają alternatywę tekstową

**Siła:** NORMA A · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Audio ma transkrypcję, wideo audiodeskrypcję.
- **Dlaczego:** Treść obrazu lub dźwięku musi być dostępna inaczej.
- **Jak sprawdzić:** Poszukaj transkrypcji i opisu.
- **Poprawka:** Dodaj transkrypcję pod odtwarzaczem.
- **Źródła:** [WCAG 2.2, 1.2.1 Audio-only and Video-only (Prerecorded) (A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html); [WCAG 2.2, 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html); [WCAG 2.2, 1.2.5 Audio Description (Prerecorded) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html); [W3C WAI, WAI: dostępne audio i wideo](https://www.w3.org/WAI/media/av/)

<a id="med-03"></a>

## MED-03 Nic nie gra samo

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** automat

- **Wymaganie:** Dźwięk dłuższy niż 3 s nie włącza się automatycznie, a jeśli się włącza, można go zatrzymać lub wyciszyć.
- **Dlaczego:** Dźwięk zagłusza czytnik ekranu.
- **Jak sprawdzić:** Otwórz stronę z dźwiękiem, sprawdź autoplay.
- **Poprawka:** Usuń autoplay.
- **Test automatyczny:** `axe:no-autoplay-audio`, `x:autoplay`
- **Źródła:** [WCAG 2.2, 1.4.2 Audio Control (A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)

<a id="med-04"></a>

## MED-04 Ruch można zatrzymać

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Treść ruszająca się automatycznie dłużej niż 5 s obok innej treści ma pauzę, stop lub ukrycie.
- **Dlaczego:** Ruch odciąga uwagę, m.in. osobom z ADHD.
- **Jak sprawdzić:** Znajdź karuzele, paski, wideo w tle.
- **Poprawka:** Dodaj przycisk pauzy albo usuń ruch.
- **Test automatyczny:** `x:animation`
- **Źródła:** [WCAG 2.2, 2.2.2 Pause, Stop, Hide (A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html); [W3C COGA, 4.9.1 Let Users Control When the Content Moves or Changes](https://www.w3.org/TR/coga-usable/#let-users-control-when-the-content-moves-or-changes-pattern)

<a id="med-05"></a>

## MED-05 Karuzela nie przewija się sama

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Karuzela zmienia się po akcji użytkownika. Jeśli się obraca, ma pauzę i zatrzymuje się po fokusie.
- **Dlaczego:** Automatyczna zmiana utrudnia przeczytanie i obniża widoczność treści (NN/g).
- **Jak sprawdzić:** Obserwuj karuzelę 15 s, użyj klawiatury.
- **Poprawka:** Wyłącz autoprzewijanie, najlepiej pokaż treści obok siebie.
- **Źródła:** [Nielsen Norman Group, Karuzele przewijane automatycznie](https://www.nngroup.com/articles/auto-forwarding/); [W3C WAI, APG: karuzela](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/); [WCAG 2.2, 2.2.2 Pause, Stop, Hide (A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

<a id="med-06"></a>

## MED-06 Strona szanuje prefers-reduced-motion

**Siła:** NORMA AAA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** automat

- **Wymaganie:** Przy ustawieniu ograniczenia ruchu animacje nieistotne są wyłączone lub zastąpione.
- **Dlaczego:** Ruch może wywoływać zawroty głowy.
- **Jak sprawdzić:** Emuluj prefers-reduced-motion i obejrzyj stronę.
- **Poprawka:** Dodaj blok @media (prefers-reduced-motion: reduce).
- **Test automatyczny:** `x:reducedmotion`
- **Źródła:** [WCAG 2.2, 2.3.3 Animation from Interactions (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html); [MDN, MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)

<a id="med-07"></a>

## MED-07 Nic nie miga częściej niż 3 razy na sekundę

**Siła:** NORMA A · **Domyślna waga naruszenia:** 4 (krytyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Brak treści migających więcej niż 3 razy w ciągu sekundy (lub poniżej progu błysku).
- **Dlaczego:** Miganie może wywołać napad padaczkowy.
- **Jak sprawdzić:** Obejrzyj animacje, zwolnij nagranie.
- **Poprawka:** Usuń miganie.
- **Test automatyczny:** `axe:blink`, `axe:marquee`
- **Źródła:** [WCAG 2.2, 2.3.1 Three Flashes or Below Threshold (A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)

<a id="med-08"></a>

## MED-08 Animacje interfejsu trwają 100–500 ms

**Siła:** BADANIE · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** automat

- **Wymaganie:** Przejścia trwają ok. 100–500 ms i pokazują związek przyczyny ze skutkiem.
- **Dlaczego:** Dłuższe animacje spowalniają pracę (NN/g).
- **Jak sprawdzić:** Odczytaj transition-duration.
- **Poprawka:** Skróć do 200–300 ms.
- **Test automatyczny:** `x:transition`
- **Źródła:** [Nielsen Norman Group, Czas trwania animacji](https://www.nngroup.com/articles/animation-duration/)

<a id="med-09"></a>

## MED-09 Transmisja na żywo ma napisy

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Transmisje z dźwiękiem mają napisy na żywo.
- **Dlaczego:** Bez nich osoba głucha nie bierze udziału w wydarzeniu.
- **Jak sprawdzić:** Włącz napisy w odtwarzaczu transmisji. Brak transmisji: nie dotyczy.
- **Poprawka:** Zamów napisy na żywo lub użyj zweryfikowanego automatu.
- **Źródła:** [WCAG 2.2, 1.2.4 Captions (Live) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html); [W3C WAI, WAI: dostępne audio i wideo](https://www.w3.org/WAI/media/av/)

---

[← Semantyka i czytniki ekranu](09-semantyka-czytniki.md) · [Mapa wiedzy](../README.md) · [Dostępność poznawcza i neuroróżnorodność →](11-poznawcza-neuroroznorodnosc.md)
