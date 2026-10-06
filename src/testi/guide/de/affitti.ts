import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("de");

export const affitti: Guida = {
  titolo: "Das Haus am Ortasee vermieten: CIR, CIN, Pauschalsteuer, Regeln des Piemont",
  descrizione: "Touristische Vermietung am Ortasee: Meldung an die Gemeinde und 11-stelliger CIR innerhalb von 10 Tagen, nationaler CIN seit 2025, Strafen, Pauschalsteuer (cedolare secca) 21 % und 26 %, Grenze von zwei Wohnungen ab 2026.",
  occhiello: "Ratgeber",
  h1: "Das Haus am See vermieten: die Regeln, in der Reihenfolge, in der Sie sie brauchen",
  lead: "Wer ein Haus am Ortasee für Zeiträume bis zu 30 Tagen an Touristen vermietet, muss zwei Registrierungen vornehmen, eine regionale und eine nationale, zwei Codes angeben und wählen, wie er die Steuern zahlt. Hier die Regeln, wie wir sie in den Quellen gelesen haben, und wo die Quellen aus zweiter Hand sind.",
  inBreve: [
    "Im Piemont wird die touristische Vermietung bis zu 30 aufeinanderfolgenden Tagen der Gemeinde innerhalb von 10 Tagen nach der ersten Vermietung gemeldet: Die Gemeinde vergibt einen 11-stelligen CIR. Eine Nutzungsänderung ist nicht nötig.",
    "Der CIR muss in jedem Inserat stehen, online und auf Papier: Wer das unterlässt, riskiert 500 bis 5.000 €, im Wiederholungsfall das Doppelte.",
    "Seit dem 1. Januar 2025 braucht es zusätzlich den nationalen CIN aus der Datenbank des Tourismusministeriums; die von der Fachpresse genannten Strafen für einen fehlenden Antrag reichen von 800 bis 8.000 €.",
    "Pauschalsteuer (cedolare secca) auf Kurzzeitvermietungen: 21 % auf eine gewählte Immobilie, 26 % auf die übrigen. Ab 2026 gilt die Regelung bis zu 2 Wohnungen; darüber wird eine unternehmerische Tätigkeit vermutet (Sekundärquellen).",
    "Die Aufenthaltsabgabe (imposta di soggiorno) von Orta San Giulio haben wir nicht gefunden: weder Beschluss noch Tarife.",
  ],
  sezioni: [
    {
      id: "che-cosa",
      h2: "Was eine touristische Vermietung im Piemont ist",
      blocchi: [
        "Den Rahmen bilden das Regionalgesetz Nr. 13 vom 3. August 2017 und seine Durchführungsverordnung, das D.P.G.R. Nr. 4/R vom 8. Juni 2018, das in Art. 14 regelt, wer zu touristischen Zwecken für aufeinanderfolgende Zeiträume **bis zu 30 Tagen** vermietet[^1]. Es ist kein Beherbergungsbetrieb: Weder eine Nutzungsänderung noch die Anforderungen an ein Hotel oder ein B&B sind nötig.",
        "Beherbergungsbetriebe (Hotels, Zimmervermietungen, gewerblich geführte Ferienhäuser) folgen anderen Regeln und haben einen CIR in anderem Format, zum Beispiel 001272-ALB-00282[^2]. Hier geht es nur um das private Haus, das an Touristen vermietet wird.",
        { nota: "Ein Urteil des Verwaltungsgerichts (TAR) Piemont von 2023 soll einige Bestimmungen der Verordnung aufgehoben haben: Wir haben es nur zitiert in einer Recherche gesehen und wissen nicht, welche Artikel es betrifft. Fragen Sie die Gemeinde, welche Fassung sie anwendet." },
      ],
    },
    {
      id: "cir",
      h2: "Schritt 1: die Meldung an die Gemeinde und der CIR",
      blocchi: [
        "**Innerhalb von 10 Tagen nach der ersten Vermietung** senden Sie der Gemeinde das Formular aus Anhang H der Verordnung[^1]. Die Gemeinde vergibt den **CIR**, den regionalen Identifikationscode, mit **11 Ziffern**: 6 für den ISTAT-Code der Gemeinde und 5 fortlaufende.",
        "Der CIR muss auch auf den Portalen sichtbar sein. Seit dem Regionalgesetz Nr. 3 vom 9. März 2023 (Art. 124) gilt die Pflicht für **jede Werbemitteilung, online und auf Papier**; die Strafe beträgt **500 bis 5.000 €**, im Wiederholungsfall das Doppelte[^2].",
        `Der See liegt in zwei Provinzen (Novara und Verbano-Cusio-Ossola), aber in einer Region: Die CIR-Regel ist in [Orta San Giulio](${v.luogo("orta-san-giulio")}) und in [Omegna](${v.luogo("omegna")}) dieselbe. Es ändern sich die Gemeindeämter, an die man schreibt.`,
      ],
    },
    {
      id: "cin",
      h2: "Schritt 2: der nationale CIN",
      blocchi: [
        "Seit dem **1. Januar 2025** muss jede zu touristischen Zwecken vermietete Einheit zusätzlich den **CIN** haben, den nationalen Identifikationscode (Art. 13-ter des D.L. 145/2023), den man bei der Datenbank der Beherbergungsbetriebe des Tourismusministeriums beantragt[^3].",
        "Laut Fachpresse betragen die Strafen **800 bis 8.000 €** für einen fehlenden Antrag und **500 bis 5.000 €** für fehlende Angabe[^3]. Den Gesetzestext haben wir nicht direkt gelesen: Nehmen Sie diese Zahlen als Richtwerte.",
      ],
    },
    {
      id: "ospiti",
      h2: "Schritt 3: die Gäste",
      blocchi: [
        "Wer Gäste beherbergt, muss deren Personalien der Polizeibehörde (Questura) über das Portal Alloggiati Web der Polizia di Stato melden, nach Art. 109 des Einheitstextes über die öffentliche Sicherheit; die Fachquellen nennen 24 Stunden nach Ankunft, 6 bei kürzeren Aufenthalten[^6].",
        "Diese Regel haben wir nur in einer Sekundärquelle gelesen, in Zusammenfassung: Prüfen Sie Fristen und Verfahren vor dem ersten Gast bei der zuständigen Questura nach.",
      ],
    },
    {
      id: "imposte",
      h2: "Die Steuern: Pauschalsteuer und die Grenze von zwei Wohnungen",
      blocchi: [
        "Bei Kurzzeitvermietungen (bis zu 30 Tagen) kann der Eigentümer als natürliche Person die **Pauschalsteuer (cedolare secca)** wählen: **21 %** auf die Miete einer einzigen, von ihm gewählten Immobilie und **26 %** auf die übrigen[^4][^5].",
        "**Ab 2026** lässt das Haushaltsgesetz (Gesetz Nr. 199 vom 30. Dezember 2025, Art. 1 Abs. 17) die Regelung für Kurzzeitvermietungen nur für jene gelten, die im Steuerjahr **nicht mehr als 2 Wohnungen** vermieten: darüber wird eine unternehmerische Tätigkeit vermutet[^4][^5]. Welche Grenze vorher galt, haben wir nicht geprüft.",
        "Läuft die Vermietung über ein Portal oder einen Vermittler, der kassiert, behält dieser **21 %** als Vorauszahlung ein[^4].",
        { nota: "Dieser ganze Abschnitt stammt aus Sekundärquellen (Steuerzeitschriften, Mai 2026): Der Leitfaden der Agenzia delle Entrate und der Text auf Normattiva ließen sich nicht laden, als wir sie suchten. Ein Vorschlag aus dem Herbst 2025, der die 21 % jenen vorbehielt, die keine Plattformen nutzen, ist nach denselben Quellen nicht in den endgültigen Text eingegangen." },
        "Für Personen mit Wohnsitz im Ausland hängt die Abstimmung dieser Steuern mit denen des eigenen Landes von den Doppelbesteuerungsabkommen ab: Das ist Sache eines Steuerberaters, und wir fassen es hier nicht zusammen.",
      ],
    },
    {
      id: "soggiorno",
      h2: "Die Aufenthaltsabgabe",
      blocchi: [
        "Manche Gemeinden verlangen von den Gästen eine Aufenthaltsabgabe (imposta di soggiorno), die der Eigentümer einzieht und abführt. Für **Orta San Giulio** haben wir weder den Beschluss noch die Tarife gefunden, weder auf der Website der Gemeinde noch auf dem Portal des Wirtschaftsministeriums: Wir können nicht sagen, ob sie erhoben wird und wie hoch sie ist. Dasselbe gilt für die anderen Gemeinden am See.",
      ],
    },
    {
      id: "conti",
      h2: "Bevor Sie rechnen",
      blocchi: [
        "Eine Rendite, berechnet aus einem Tarif mal 365 Nächten, ist Fiktion: Der See hat eine Saison, und leere Nächte stehen in keinem Tarif. Wir veröffentlichen keine Renditen, weil wir keine verlässlichen Belegungsdaten für den See haben.",
        `Wenn Sie noch wählen, wo Sie kaufen, stehen die Fahrzeiten von Mailand, Malpensa und aus der Schweiz im Ratgeber [Anreise](${v.guida("arrivare")}); die Erwerbssteuern in [Kaufnebenkosten im Vergleich](${v.guida("costi")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Welche Artikel der Verordnung 4/R 2023 vom TAR Piemont aufgehoben wurden, falls überhaupt.",
    "Den Text von Art. 13-ter des D.L. 145/2023 und der CIN-Strafen, gelesen in der Primärquelle.",
    "Den Leitfaden 2026 der Agenzia delle Entrate zu Kurzzeitvermietungen, direkt gelesen, und die vor 2026 geltende Grenze.",
    "Fristen und Verfahren der Gästemeldung, gelesen in der Quelle der Polizia di Stato.",
    "Ob Orta San Giulio und die anderen Gemeinden am See eine Aufenthaltsabgabe erheben, und zu welchen Tarifen.",
    "Belegungsdaten und Durchschnittstarife der am See vermieteten Häuser.",
  ],
  faq: [
    { d: "Was ist der CIR im Piemont?", r: "Der regionale Identifikationscode, den die Gemeinde vergibt, wenn jemand eine touristische Vermietung meldet: 11 Ziffern, 6 für den ISTAT-Code der Gemeinde und 5 fortlaufende. Er muss in jedem Inserat stehen." },
    { d: "Bis wann meldet man die touristische Vermietung der Gemeinde?", r: "Innerhalb von 10 Tagen nach der ersten Vermietung, mit dem Formular aus Anhang H der Regionalverordnung 4/R von 2018." },
    { d: "Braucht es auch den CIN?", r: "Ja, seit dem 1. Januar 2025: Es ist der nationale Code, den man bei der Datenbank der Beherbergungsbetriebe des Tourismusministeriums beantragt, zusätzlich zum regionalen CIR." },
    { d: "Wie viel Pauschalsteuer zahlt man auf Kurzzeitvermietungen?", r: "21 % auf eine vom Eigentümer gewählte Immobilie, 26 % auf die übrigen. Ab 2026 gilt die Regelung für Kurzzeitvermietungen bis zu 2 Wohnungen; darüber wird eine unternehmerische Tätigkeit vermutet. Diese Angaben stammen aus steuerlichen Sekundärquellen." },
    { d: "Gibt es in Orta San Giulio eine Aufenthaltsabgabe?", r: "Wir wissen es nicht: Wir haben weder den Beschluss noch die Tarife gefunden. Fragen Sie die Gemeinde." },
  ],
};
