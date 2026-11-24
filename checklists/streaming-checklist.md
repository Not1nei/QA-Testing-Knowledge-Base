# Streaming Website Testing Checklist

## 1. Cel

Lista kontrolna do testowania serwisów z wideo i muzyką. Punkty UX i dostępności odwołują się do [bazy wiedzy UX](../ux/README.md).

Przykłady: YouTube, Netflix, Spotify, Twitch.

## 2. Katalog i wyszukiwanie
- [ ] Katalog wyświetla okładki, tytuły i kategorie.
- [ ] Wyszukiwarka znajduje treść mimo literówki ([TRA-02](../ux/wytyczne/15-transakcje-wyszukiwanie.md#tra-02)).
- [ ] Brak wyników wskazuje dalszą drogę ([TRA-03](../ux/wytyczne/15-transakcje-wyszukiwanie.md#tra-03)).
- [ ] Filtry można cofnąć ([TRA-05](../ux/wytyczne/15-transakcje-wyszukiwanie.md#tra-05)).

## 3. Odtwarzacz
- [ ] Odtwarzanie, pauza, przewijanie i głośność działają.
- [ ] Zmiana jakości i pełny ekran działają.
- [ ] Odtwarzacz działa z klawiatury ([KLA-01](../ux/wytyczne/08-klawiatura-fokus.md#kla-01)) i nie więzi fokusu ([KLA-02](../ux/wytyczne/08-klawiatura-fokus.md#kla-02)).
- [ ] Przyciski mają nazwy ([SEM-05](../ux/wytyczne/09-semantyka-czytniki.md#sem-05)).
- [ ] Po utracie połączenia pojawia się zrozumiały komunikat ([HEU-09](../ux/wytyczne/01-heurystyki.md#heu-09)).

## 4. Dostępność mediów
- [ ] Wideo ma napisy ([MED-01](../ux/wytyczne/10-multimedia-ruch.md#med-01)).
- [ ] Nagrania mają transkrypcję lub audiodeskrypcję ([MED-02](../ux/wytyczne/10-multimedia-ruch.md#med-02)).
- [ ] Nic nie gra samo ([MED-03](../ux/wytyczne/10-multimedia-ruch.md#med-03)).
- [ ] Transmisja na żywo ma napisy ([MED-09](../ux/wytyczne/10-multimedia-ruch.md#med-09)).
- [ ] Nic nie miga częściej niż 3 razy na sekundę ([MED-07](../ux/wytyczne/10-multimedia-ruch.md#med-07)).

## 5. Konto i subskrypcja
- [ ] Logowanie, wylogowanie i profile działają.
- [ ] Historia i kontynuowanie oglądania są poprawne.
- [ ] Cena i okres próbny są jasne przed płatnością ([TRA-08](../ux/wytyczne/15-transakcje-wyszukiwanie.md#tra-08)).
- [ ] Rezygnacja jest równie łatwa jak zapis ([ETY-06](../ux/wytyczne/14-etyka-prywatnosc-zaufanie.md#ety-06)).

## 6. Wyniki testowania

PASS, FAIL, BLOCKED, NOT TESTED.
