<!-- Plik wygenerowany z ux/data przez tools/build.mjs. Nie edytuj ręcznie. -->

# Dostępność poznawcza i neuroróżnorodność (KOG)

[← Multimedia i ruch](10-multimedia-ruch.md) · [Mapa wiedzy](../README.md) · [Urządzenia mobilne i dotyk →](12-mobile-dotyk.md)

Wytyczne W3C COGA oraz plakaty Home Office dla osób z ADHD, dysleksją, w spektrum autyzmu i z trudnościami pamięci.

| ID | Wytyczna | Siła | Waga | Sprawdzanie |
|---|---|---|---|---|
| [KOG-01](#kog-01) | Nic nie przerywa zadania | WYTYCZNA | 3 | na ścieżce persony |
| [KOG-02](#kog-02) | Wiadomo, ile kroków zostało | WYTYCZNA | 2 | na ścieżce persony |
| [KOG-03](#kog-03) | Ekran zadania ma jeden cel | WYTYCZNA | 2 | ręcznie |
| [KOG-04](#kog-04) | Logowanie nie wymaga testu pamięci | NORMA AA | 3 | na ścieżce persony |
| [KOG-05](#kog-05) | Limit czasu można wyłączyć lub wydłużyć | NORMA A | 3 | ręcznie |
| [KOG-06](#kog-06) | Ikony mają podpis | BADANIE | 2 | ręcznie |
| [KOG-07](#kog-07) | Użytkownik nie musi liczyć ani przeliczać | WYTYCZNA | 2 | ręcznie |
| [KOG-08](#kog-08) | Instrukcja i pomoc są przy zadaniu | WYTYCZNA | 1 | ręcznie |
| [KOG-09](#kog-09) | Dłuższy tekst ma skrót | WYTYCZNA | 1 | ręcznie |

<a id="kog-01"></a>

## KOG-01 Nic nie przerywa zadania

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Brak samoczynnych okien, powiadomień i czatów w trakcie zadania. Przerwania można wyłączyć.
- **Dlaczego:** Po przerwaniu trudno wrócić do wątku.
- **Jak sprawdzić:** Przejdź ścieżkę i policz przerwania niewywołane przez personę.
- **Poprawka:** Usuń lub odłóż do zakończenia zadania.
- **Źródła:** [W3C COGA, 4.6.1 Limit Interruptions](https://www.w3.org/TR/coga-usable/#limit-interruptions-pattern); [Nielsen Norman Group, Pop-upy](https://www.nngroup.com/articles/popups/)

<a id="kog-02"></a>

## KOG-02 Wiadomo, ile kroków zostało

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Proces pokazuje kroki, bieżący etap i co będzie potrzebne przed startem.
- **Dlaczego:** Niepewność zniechęca do rozpoczęcia.
- **Jak sprawdzić:** Na początku procesu zapytaj: ile potrwa, co przygotować?
- **Poprawka:** Dodaj listę kroków i informację o potrzebnych danych.
- **Źródła:** [W3C COGA, 4.2.4 Make Each Step Clear](https://www.w3.org/TR/coga-usable/#make-each-step-clear-pattern); [W3C COGA, 4.6.4 Provide Information So a User Can Complete and Prepare for a Task](https://www.w3.org/TR/coga-usable/#provide-information-so-a-user-can-complete-and-prepare-for-a-task-pattern)

<a id="kog-03"></a>

## KOG-03 Ekran zadania ma jeden cel

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** W procesie jeden ekran odpowiada za jedną decyzję lub jeden temat.
- **Dlaczego:** Zasada „one thing per page” (GOV.UK) zmniejsza obciążenie.
- **Jak sprawdzić:** Policz decyzje na ekranie.
- **Poprawka:** Podziel na kroki.
- **Źródła:** [GOV.UK, GOV.UK Service Manual: struktura formularza](https://www.gov.uk/service-manual/design/form-structure); [W3C COGA, 4.6.3 Avoid Too Much Content](https://www.w3.org/TR/coga-usable/#avoid-too-much-content-pattern)

<a id="kog-04"></a>

## KOG-04 Logowanie nie wymaga testu pamięci

**Siła:** NORMA AA · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** na ścieżce persony

- **Wymaganie:** Nie trzeba przepisywać, pamiętać ani rozwiązywać zagadki. Wklejanie i menedżer haseł działają.
- **Dlaczego:** Test poznawczy wyklucza część użytkowników.
- **Jak sprawdzić:** Wklej hasło, użyj menedżera, sprawdź CAPTCHA.
- **Poprawka:** Pozwól wklejać, dodaj link logowania.
- **Test automatyczny:** `x:paste`
- **Źródła:** [WCAG 2.2, 3.3.8 Accessible Authentication (Minimum) (AA)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html); [W3C COGA, 4.7.1 Provide a Login that Does Not Rely on Memory or Other Cognitive Skills](https://www.w3.org/TR/coga-usable/#provide-a-login-that-does-not-rely-on-memory-or-other-cognitive-skills-pattern); [NIST, NIST SP 800-63B-4: hasła](https://pages.nist.gov/800-63-4/sp800-63b.html)

<a id="kog-05"></a>

## KOG-05 Limit czasu można wyłączyć lub wydłużyć

**Siła:** NORMA A · **Domyślna waga naruszenia:** 3 (poważny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Limit można wyłączyć, zmienić lub przedłużyć co najmniej 10 razy, z ostrzeżeniem minimum 20 s.
- **Dlaczego:** Część osób potrzebuje więcej czasu na przeczytanie.
- **Jak sprawdzić:** Zostaw formularz na dłużej.
- **Poprawka:** Dodaj przedłużenie i zapis postępu.
- **Test automatyczny:** `axe:meta-refresh`
- **Źródła:** [WCAG 2.2, 2.2.1 Timing Adjustable (A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html); [W3C COGA, 4.5.9 Avoid Data Loss and “Timeouts”](https://www.w3.org/TR/coga-usable/#avoid-data-loss-and-timeouts-pattern)

<a id="kog-06"></a>

## KOG-06 Ikony mają podpis

**Siła:** BADANIE · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Ikony niosące znaczenie mają widoczną etykietę (wyjątek: powszechnie znane, np. lupa przy polu).
- **Dlaczego:** Mało ikon jest uniwersalnie rozumianych (NN/g).
- **Jak sprawdzić:** Zasłoń podpisy i zapytaj, co znaczą ikony.
- **Poprawka:** Dodaj tekst obok ikony.
- **Źródła:** [Nielsen Norman Group, Użyteczność ikon](https://www.nngroup.com/articles/icon-usability/); [W3C COGA, 4.2.7 Use Icons that Help the User](https://www.w3.org/TR/coga-usable/#use-icons-that-help-the-user-pattern)

<a id="kog-07"></a>

## KOG-07 Użytkownik nie musi liczyć ani przeliczać

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 2 (drobny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Sumy, terminy i jednostki są podane wprost (np. cena całkowita, data dostawy).
- **Dlaczego:** Liczenie w pamięci obciąża i prowadzi do błędów.
- **Jak sprawdzić:** Zaznacz miejsca, w których persona musi coś policzyć.
- **Poprawka:** Policz w systemie i pokaż wynik.
- **Źródła:** [W3C COGA, 4.7.5 Do Not Rely on Users Calculations or Memorizing Information](https://www.w3.org/TR/coga-usable/#do-not-rely-on-users-calculations-or-memorizing-information-pattern); [W3C COGA, 4.5.12 Use Familiar Metrics and Units](https://www.w3.org/TR/coga-usable/#use-familiar-metrics-and-units-pattern)

<a id="kog-08"></a>

## KOG-08 Instrukcja i pomoc są przy zadaniu

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Trudne pole lub decyzja ma krótką pomoc obok, a nie w osobnym dokumencie.
- **Dlaczego:** Przejście do FAQ odrywa od zadania.
- **Jak sprawdzić:** Wskaż trudne pola. Czy mają podpowiedź?
- **Poprawka:** Dodaj podpowiedź lub rozwijaną pomoc.
- **Źródła:** [W3C COGA, 4.8.4 Provide Help for Forms and Non-standard Controls](https://www.w3.org/TR/coga-usable/#provide-help-for-forms-and-non-standard-controls-pattern); [Nielsen Norman Group, Heurystyka 10: pomoc i dokumentacja](https://www.nngroup.com/articles/help-and-documentation/)

<a id="kog-09"></a>

## KOG-09 Dłuższy tekst ma skrót

**Siła:** WYTYCZNA · **Domyślna waga naruszenia:** 1 (kosmetyczny) · **Sprawdzanie:** ręcznie

- **Wymaganie:** Dokument dłuższy niż kilka ekranów ma podsumowanie i spis treści.
- **Dlaczego:** Skrót pozwala zdecydować, czy czytać dalej.
- **Jak sprawdzić:** Sprawdź regulamin, artykuły, instrukcje.
- **Poprawka:** Dodaj „W skrócie” i spis treści.
- **Źródła:** [W3C COGA, 4.4.8 Provide Summary of Long Documents and Media](https://www.w3.org/TR/coga-usable/#provide-summary-of-long-documents-and-media-pattern); [W3C COGA, 4.3.3 Use a Clear and Understandable Page Structure](https://www.w3.org/TR/coga-usable/#use-a-clear-and-understandable-page-structure-pattern)

---

[← Multimedia i ruch](10-multimedia-ruch.md) · [Mapa wiedzy](../README.md) · [Urządzenia mobilne i dotyk →](12-mobile-dotyk.md)
