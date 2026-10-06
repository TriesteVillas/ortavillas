import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("de");

export const comprare: Guida = {
  titolo: "Als Ausländer ein Haus in Italien kaufen: der Ratgeber für den Ortasee",
  descrizione: "Steuernummer, Gegenseitigkeit, Kaufangebot, Vorvertrag und Anzahlung, notarielle Urkunde beim Notar, den der Käufer wählt, Erstwohnsitz-Begünstigung: die Schritte der Reihe nach, mit den amtlichen Quellen.",
  occhiello: "Hauptratgeber",
  h1: "Wie man in Italien ein Haus kauft, Schritt für Schritt",
  lead: "Wer aus einem anderen Land der Europäischen Union kommt, kauft am Ortasee zu denselben Bedingungen wie ein Italiener; für alle anderen entscheidet die Gegenseitigkeit, die im Einzelfall zu prüfen ist. Die Reihenfolge ist immer dieselbe: Steuernummer, Kaufangebot, Vorvertrag mit Anzahlung, notarielle Urkunde vor einem Notar. Hier steht, was die Quellen sagen, und wo sie aufhören.",
  inBreve: [
    "Bürger der Europäischen Union kaufen in Italien wie Italiener. Für alle anderen gilt die Bedingung der Gegenseitigkeit (Art. 16 der Vorbestimmungen zum Zivilgesetzbuch, preleggi): Für die Schweiz, das Vereinigte Königreich und die Vereinigten Staaten haben wir sie nicht an der amtlichen Quelle geprüft.",
    "Sie brauchen eine italienische Steuernummer (codice fiscale): Aus dem Ausland stellt sie das Konsulat aus, oder eine bevollmächtigte Person beantragt sie in Italien.",
    "In der Provinz Novara, zu der Orta San Giulio gehört, sieht der Ortsbrauch beim Vorvertrag eine Anzahlung von mindestens 10 % vor und überlässt dem Käufer die Wahl des Notars und die Kosten der Urkunde, sofern nichts anderes vereinbart ist.",
    "Beim Kauf von einer Privatperson zahlen Sie 9 % Registersteuer (2 % beim Erstwohnsitz), dazu 50 + 50 € Hypotheken- und Katastersteuer; mit der Preis-Wert-Regel (prezzo-valore) ist die Bemessungsgrundlage der Katasterwert, nicht der Preis.",
    "Die Erstwohnsitz-Begünstigung verlangt, den Wohnsitz innerhalb von 18 Monaten in die Gemeinde zu verlegen: Wer das Haus als Zweitwohnsitz hält, erhält sie nicht.",
    "Für das Notarhonorar gibt es seit 2012 keinen festen Tarif mehr: Sie verlangen einen Kostenvoranschlag.",
  ],
  sezioni: [
    {
      id: "chi-puo-comprare",
      h2: "Wer kaufen darf",
      blocchi: [
        "Die allgemeine Regel steht in Art. 16 der Bestimmungen über das Gesetz im Allgemeinen: Ausländer sind zu den bürgerlichen Rechten zugelassen, «unter der Bedingung der Gegenseitigkeit» (a condizione di reciprocità), vorbehaltlich besonderer Gesetze[^5]. In der Praxis sind nach den Fachquellen, die wir gelesen haben, Bürger der Europäischen Union den Italienern gleichgestellt und unterliegen keiner Prüfung; bei Personen von außerhalb der Union, ohne Staatsvertrag und ohne Aufenthaltsgenehmigung, prüft der Notar die Gegenseitigkeit anhand der Tabellen des Außenministeriums[^6].",
        "**Schweiz, Vereinigtes Königreich, Vereinigte Staaten.** Die amtliche Seite des Außenministeriums zur Gegenseitigkeit hat uns am 6. Oktober 2026 mit einer Anti-Bot-Kontrolle geantwortet, die wir nicht umgangen haben: Wir haben sie nicht gelesen. Eine Sekundärquelle verbindet die Schweiz mit dem bilateralen Freizügigkeitsabkommen von 1999[^7], bestätigt haben wir das aber nicht. Bitten Sie den Notar, Ihre Staatsangehörigkeit vor dem Kaufangebot anhand der aktuellen Tabellen zu prüfen, nicht erst bei der Beurkundung.",
        "**Für den Kauf ist kein Wohnsitz nötig.** Keine der Quellen, die wir geprüft haben, verlangt ihn. Er zählt nur für die Erstwohnsitz-Begünstigung (weiter unten).",
      ],
    },
    {
      id: "codice-fiscale",
      h2: "Schritt 1: die Steuernummer",
      blocchi: [
        "Die Steuernummer (codice fiscale) ist das erste Dokument, nach dem man Sie fragt: für das Kaufangebot, für das Bankkonto, für den Notar. Wer nicht in Italien wohnt, kann sie bei der für seinen Wohnsitz zuständigen italienischen Konsularbehörde beantragen oder jemanden bevollmächtigen, sie bei einem Amt der Agenzia delle Entrate in Italien einzureichen[^4].",
        "Fristen und Formulare der Konsulate unterscheiden sich: Die Seite des Ministeriums haben wir nur in einer Zusammenfassung gesehen, prüfen Sie daher auf der Website Ihres Konsulats nach.",
      ],
    },
    {
      id: "proposta",
      h2: "Schritt 2: das Kaufangebot",
      blocchi: [
        "Meist beginnt es mit einem schriftlichen Kaufangebot (proposta d'acquisto): Der Käufer bietet einen Preis, nennt die Bedingungen (eine zu erhaltende Hypothek, eine technische Prüfung, das Datum der Beurkundung) und hält es für einen Zeitraum unwiderruflich. Nimmt der Verkäufer es schriftlich an und erreicht die Annahme den Käufer, ist der Vertrag zu den geschriebenen Bedingungen geschlossen: Deshalb sollten Sie es mit derselben Sorgfalt lesen wie den Vorvertrag.",
        "Verlangen Sie vor der Unterschrift die Unterlagen des Hauses: Katasterauszug und Katasterplan, Herkunftstitel, baurechtliche Situation, Energieausweis. In der Urkunde erklärt der Verkäufer, dass Katasterdaten und Pläne dem tatsächlichen Zustand entsprechen[^1]: Wenn nicht, erfahren Sie das besser vor der Anzahlung.",
        { nota: "Dieser Abschnitt beschreibt die gängige Praxis in Italien; wir zitieren keinen Gesetzesartikel, weil das Kaufangebot keine eigene Regelung neben den allgemeinen Vertragsregeln hat, die wir hier nicht zusammenfassen." },
      ],
    },
    {
      id: "compromesso",
      h2: "Schritt 3: Vorvertrag und Anzahlung",
      blocchi: [
        "Der Vorvertrag (compromesso, contratto preliminare) verpflichtet die Parteien, die notarielle Urkunde zu den vereinbarten Bedingungen zu unterzeichnen. Meist leistet der Käufer eine Anzahlung/Draufgabe (caparra confirmatoria): Sie bleibt beim Verkäufer, wenn der Käufer nicht abschließt, und ist doppelt zurückzuzahlen, wenn der Verkäufer zurücktritt.",
        "**Der Ortsbrauch in der Provinz Novara.** Die Provinzsammlung der Ortsbräuche der Handelskammer Novara sieht, sofern nichts anderes vereinbart ist, beim Vorvertrag eine Anzahlung von **nicht weniger als 10 %** des Preises vor[^3]. Es ist ein Brauch, kein Gesetz, und die Sammlung stammt von 2005: Man kann anderes vereinbaren, und man muss es schriftlich festhalten.",
        "Für Omegna, Nonio, Quarna Sopra und Madonna del Sasso, die in der Provinz Verbano-Cusio-Ossola liegen, haben wir die Sammlung der Ortsbräuche des VCO nicht gelesen.",
        "Zahlen Sie per Überweisung oder Scheck, nie in bar: In der Urkunde werden auch die Zahlungsmodalitäten angegeben.",
      ],
    },
    {
      id: "rogito",
      h2: "Schritt 4: die Beurkundung beim Notar",
      blocchi: [
        "In Italien geht das Eigentum mit der öffentlichen Urkunde vor einem Notar über, der notariellen Urkunde (rogito). Der Notar prüft die Identität der Parteien, kontrolliert die Immobilienregister, verliest die Urkunde, zieht die Steuern ein und führt sie an den Staat ab, dann lässt er die Urkunde eintragen.",
        "**Wer den Notar wählt.** Nach den Ortsbräuchen der Provinz Novara gehen die Vertragskosten **zulasten des Käufers, der den Notar wählt**[^3].",
        "**Was es kostet.** Die Notartarife wurden mit Art. 9 des D.L. 1/2012 abgeschafft: Das Honorar wird vereinbart, und Sie haben Anspruch auf einen Kostenvoranschlag[^8]. Wir veröffentlichen keinen «typischen» Prozentsatz, weil wir keine amtliche Quelle haben, die ihn nennt.",
        "**Wenn Sie kein Italienisch sprechen.** Die Urkunde ist auf Italienisch; versteht eine Partei die Sprache nicht, braucht es einen Dolmetscher und meist eine Übersetzung daneben. Fragen Sie den Notar danach, wenn Sie den Kostenvoranschlag anfordern.",
      ],
    },
    {
      id: "imposte",
      h2: "Schritt 5: die Erwerbssteuern",
      blocchi: [
        "Die Steuern hängen davon ab, wer verkauft[^1]:",
        {
          lista: [
            "**Von einer Privatperson** (mehrwertsteuerfreier Verkauf): Registersteuer (imposta di registro) **9 %**, oder **2 %** beim Erstwohnsitz (ausgenommen die Kategorien A/1, A/8, A/9), mindestens 1.000 €; Hypotheken- und Katastersteuer (imposta ipotecaria e catastale) **50 € + 50 €**[^1][^2].",
            "**Von einem Unternehmen mit Mehrwertsteuer**: Mehrwertsteuer **4 %** beim Erstwohnsitz, **10 %** für andere Wohnungen, **22 %** für A/1, A/8, A/9; Register-, Hypotheken- und Katastersteuer fest zu **je 200 €**[^1].",
          ],
        },
        "**Die Preis-Wert-Regel.** Zwischen natürlichen Personen kann der Käufer bei Wohnungen und Zubehör vom Notar verlangen, dass die Steuern auf dem Katasterwert statt auf dem Preis berechnet werden: Katasterertrag (rendita catastale) × 1,05 × **120**, oder × **110** beim Erstwohnsitz. Der tatsächliche Preis muss trotzdem in der Urkunde stehen; wird er verschwiegen, beträgt die Strafe 50 bis 100 % der Differenz[^1].",
        `Die Rechnung Posten für Posten, mit einem Beispiel und dem Vergleich mit der Schweiz, Deutschland und Österreich, steht im Ratgeber [Kaufnebenkosten im Vergleich](${v.guida("costi")}).`,
      ],
    },
    {
      id: "prima-casa",
      h2: "Erstwohnsitz und Wohnsitz innerhalb von 18 Monaten",
      blocchi: [
        "Die Erstwohnsitz-Begünstigung (prima casa: Registersteuer 2 % statt 9 %, oder Mehrwertsteuer 4 % statt 10 %) verlangt den Wohnsitz nicht zum Zeitpunkt des Kaufs, aber wer nicht bereits in der Gemeinde wohnt, muss **den Wohnsitz innerhalb von 18 Monaten dorthin verlegen** und dies in der Urkunde erklären, sonst entfällt die Begünstigung[^1].",
        "Wer ein Ferienhaus kauft und im Ausland wohnhaft bleibt, zahlt also 9 % (oder 10 % Mehrwertsteuer). Wer wirklich an den See ziehen will, sollte das vor der Beurkundung mit einem Steuerberater (commercialista) prüfen: Die Entscheidung fällt in der Urkunde.",
      ],
    },
    {
      id: "dopo",
      h2: "Nach der Beurkundung: IMU und Versorger",
      blocchi: [
        "Jedes Jahr zahlen Sie der Gemeinde die IMU (kommunale Immobiliensteuer). In Orta San Giulio beträgt der Satz 2026 für «andere Gebäude», also Zweitwohnungen, **0,96 %**; für den Hauptwohnsitz in den Kategorien A/1, A/8 und A/9 sind es 0,55 % (Beschluss vom 23. Dezember 2025)[^9]. Die anderen Gemeinden am See haben eigene Beschlüsse, die wir hier nicht gelesen haben.",
        "Die TARI (Abfallgebühr) ist ein kommunaler Tarif: Für Orta haben wir sie nicht geprüft.",
        `Wenn Sie das Haus vermieten möchten, solange Sie es nicht nutzen, stehen die Regeln im Ratgeber [Ferienvermietung am See](${v.guida("affitti")}).`,
      ],
    },
    {
      id: "noi",
      h2: "Was wir tun, und was nicht",
      blocchi: [
        "In Italien ist TriesteVillas srl eine eingetragene Immobilienagentur und **darf am Ortasee bereits vermitteln**. Heute hat die Private Collection des Sees allerdings **0 Häuser**: Keine dieser Seiten ist ein Inserat, und wir zeigen Ihnen keine Häuser, die wir nicht haben.",
        "Was wir in keinem Fall tun: Rechts- oder Steuerberatung. Dafür brauchen Sie einen Notar, einen Steuerberater oder einen Anwalt Ihrer Wahl.",
      ],
    },
  ],
  nonSappiamo: [
    "Den Stand der Gegenseitigkeit für Schweizer, britische und US-amerikanische Staatsangehörige: Die Tabelle des Außenministeriums war nicht lesbar, ohne eine Anti-Bot-Kontrolle zu umgehen.",
    "Ob die Sammlung der Ortsbräuche des Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) dieselbe Anzahlung und dieselbe Provision vorsieht wie die von Novara.",
    "Ein typisches Notarhonorar für einen Kauf am See: Es gibt keinen Tarif, und wir haben keine amtliche Quelle gefunden, die einen Durchschnitt nennt.",
    "Fristen und Formulare für die Steuernummer bei den einzelnen Konsulaten.",
    "Die IMU-Sätze 2026 der Seegemeinden außer Orta San Giulio und die TARI von Orta.",
    "Ob die Sammlung der Ortsbräuche von Novara aus dem Jahr 2005 seither aktualisiert wurde.",
  ],
  faq: [
    { d: "Darf ein Ausländer in Italien ein Haus kaufen?", r: "Ja. Bürger der Europäischen Union kaufen zu denselben Bedingungen wie Italiener. Für alle anderen gilt die Bedingung der Gegenseitigkeit nach Art. 16 der preleggi, die der Notar anhand der Tabellen des Außenministeriums prüft. Für die Schweiz, das Vereinigte Königreich und die Vereinigten Staaten haben wir sie nicht an der amtlichen Quelle geprüft." },
    { d: "Brauche ich für den Kauf einen Wohnsitz in Italien?", r: "Nein. Der Wohnsitz zählt nur für die Erstwohnsitz-Begünstigung, die verlangt, ihn innerhalb von 18 Monaten nach dem Kauf in die Gemeinde zu verlegen." },
    { d: "Wie hoch ist die Anzahlung am Ortasee?", r: "In der Provinz Novara sieht der Ortsbrauch beim Vorvertrag eine Anzahlung von nicht weniger als 10 % des Preises vor, sofern nichts anderes vereinbart ist. Es ist ein Brauch, den die Handelskammer 2005 gesammelt hat, keine gesetzliche Pflicht." },
    { d: "Wer wählt den Notar?", r: "Nach den Ortsbräuchen der Provinz Novara der Käufer: Die Kosten der Urkunde gehen zu seinen Lasten. Das Honorar wird vereinbart, weil die Notartarife 2012 abgeschafft wurden." },
    { d: "Welche Steuern zahlt, wer von einer Privatperson kauft?", r: "Registersteuer von 9 % (2 % beim Erstwohnsitz), mindestens 1.000 €, dazu 50 € Hypothekensteuer und 50 € Katastersteuer. Mit der Preis-Wert-Regel ist die Bemessungsgrundlage der Katasterwert: Katasterertrag × 1,05 × 120 (× 110 beim Erstwohnsitz)." },
    { d: "Erhalte ich die Erstwohnsitz-Begünstigung, wenn ich im Ausland wohnhaft bleibe?", r: "Nein, außer Sie verlegen den Wohnsitz innerhalb von 18 Monaten nach dem Kauf in die Gemeinde; diese Verpflichtung ist in der Urkunde zu erklären." },
    { d: "Kann OrtaVillas mir Häuser zum Verkauf am See zeigen?", r: "Heute nicht: Die Private Collection des Sees hat 0 Häuser. TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln; wenn Sie sich für die Private Collection anmelden, benachrichtigen wir Sie, sobald das erste Haus aufgenommen wird." },
  ],
};
