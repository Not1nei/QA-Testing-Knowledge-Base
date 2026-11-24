# Procedura audytu

[Mapa wiedzy](../README.md)

Procedura łączy ocenę heurystyczną ([NN/g](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)), przejście ścieżki persony i etapy [WCAG-EM](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/).

1. **Zakres.** Adres, wersja, przeglądarka, urządzenia, główne zadania, co pomijamy i dlaczego.
2. **Spis ekranów.** Wypisz ekrany i stany: pusty, błąd, ładowanie, sukces, okno, menu mobilne, 404.
3. **Persona.** [Szablon persony](../szablony/persona.md).
4. **Ścieżka.** [Szablon ścieżki](../szablony/sciezka.md). Pokryj jak najwięcej ekranów, w tym co najmniej jeden błąd użytkownika.
5. **Przejście.** Zrzut każdego etapu na komputerze i telefonie. Zapisz, co persona myśli i czuje.
6. **Testy automatyczne.** axe-core, pomiary, linki. Każde trafienie potwierdź ręcznie.
7. **Testy ręczne.** Sama klawiatura, czytnik ekranu (NVDA lub VoiceOver), zoom 200% i 400%, ograniczenie ruchu, prawdziwy telefon.
8. **Checklista.** Każdy punkt ma wynik OK, BŁĄD, ND lub NS. Dla ND i NS podaj powód.
9. **Wagi.** [Skala i zasady](wagi.md).
10. **Poprawki.** Konkretna zmiana i nakład S/M/L.
11. **Raport.** [Szablon raportu](../szablony/raport.md) lub generator skilla.
12. **Retest.** Po naprawie sprawdź te same punkty.

Dla pełniejszego obrazu poproś 3–5 osób o niezależną ocenę i połącz wyniki. Badanie z 5 użytkownikami wykrywa ok. 85% problemów użyteczności według modelu [NN/g](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/).
