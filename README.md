
# Grundlagen

- `nodejs` & `npm` muss installiert sein
- erstmals alle dependencies mittels `npm install` installieren
- mit `gulp` wird das projekt im `build` folder gebaut - danach einfach `index.html` öffnen
- die site ist in in react/jsx/es6 geschrieben und wird mittels browserify und babel transpiled/bundeled

# Aufgabe

1. Einen neuen branch names `dev` erstellen.
2. Darauf eine neue Komponente names `DemoComponent` mit folgenden Features implementieren:
    - der Komponente kann ein Array mit Strings übergeben werden
    - die Komponente zeigt die Länge das Arrays an
    - die Komponente zeigt die Liste so an dass der Inhalt der einzelnen Strings umgekehrt ist. Beispiel:
        + `['Das', 'Beispiel']` wird zu `saD leipsieB`
        + jeder zweite String wird rot dargestellt
3. Die `DemoComponent` soll unterhalb der `ListComponent` im `MainComponent` einbaut sein
4. Alle Änderungen mit der message `step 1` commiten
5. Einbindung von `DemoComponent` auf folgende Weise anpassen:
    - mit jedem Klick auf ein Item der `ListComponent` wird dieses der Liste der `DemoComponent` hinzugefügt
    - es werden maximal die 10 neuesten Items der `DemoComponent` Liste dargestellt
6. Alle Änderungen mit der message `step 2` commiten

