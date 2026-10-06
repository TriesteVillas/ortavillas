import type { Guida } from "../tipi";
import { vai } from "../link";
import { n, pct, fq, q, ntn, tabellaOmi } from "../dati";

const l = "de" as const;
const v = vai(l);
const no = ntn("NO"), vb = ntn("VB");
const ortaB2 = q("orta-san-giulio", "B2", "ville")!;

export const quotazioni: Guida = {
  titolo: "Immobilienpreise am Ortasee: die OMI-Werte Gemeinde für Gemeinde",
  descrizione: "Die OMI-Werte der 13 Gemeinden am Ortasee, Zone für Zone, 2. Halbjahr 2025 gegenüber 2. Halbjahr 2024: wie man sie liest, warum sie keine Verkaufspreise sind und warum es in Italien keine öffentlichen Medianwerte der Verkäufe gibt.",
  occhiello: "Ratgeber",
  h1: "Die Preise am See: was die OMI-Werte sagen, und was nicht",
  lead: "In Italien gibt es kein öffentliches Register, das sagt, zu welchem Preis jedes Haus verkauft wurde. Die nächstliegenden offenen Daten sind die Werte der Beobachtungsstelle für den Immobilienmarkt (OMI): geschätzte Spannen pro Zone, keine Preise. Hier stehen alle Werte für den Ortasee, und wie man sie nicht falsch liest.",
  inBreve: [
    `Die am höchsten bewertete Zone des Sees ist das Seeufer von Orta San Giulio mit der Insel: Villen und Einfamilienhäuser ${fq("orta-san-giulio", "B2", "ville", l)}, normale Wohnungen ${fq("orta-san-giulio", "B2", "civili", l)} (2. Halbjahr 2025).`,
    "Die OMI-Werte sind Spannen in €/m² Bruttofläche, von der Agenzia delle Entrate pro Zone und Gebäudetyp im vorherrschenden Erhaltungszustand geschätzt. Sie sind keine Durchschnitte aus Kaufurkunden.",
    `Zwischen dem 2. Halbjahr 2024 und dem 2. Halbjahr 2025 hat die OMI alle Werte für normale Wohnungen am See angehoben; die Villen sind nur in den vier Gemeinden des VCO unverändert geblieben. Die Villen am Seeufer von Orta: +${pct(ortaB2.varPct!, l)} in der Mitte der Spanne.`,
    "Die in den Urkunden erklärten Preise gibt es, aber man kann sie nur mit digitaler Identität einsehen, einzeln, ohne offene Lizenz: keine veröffentlichungsfähigen Medianwerte.",
    `Verkäufe von Wohnungen in den Gemeinden außerhalb der Provinzhauptstadt in der Provinz Novara: ${n(no.a2024, l)} im Jahr 2024, ${n(no.a2025, l)} im Jahr 2025 (vorläufig, ${pct(no.varPct, l)}). Das ist die ganze Provinz, nicht der See.`,
  ],
  sezioni: [
    {
      id: "che-cosa-sono",
      h2: "Was die OMI-Werte sind",
      blocchi: [
        "Jedes Halbjahr teilt die Beobachtungsstelle für den Immobilienmarkt der Agenzia delle Entrate jede Gemeinde in homogene Zonen ein und veröffentlicht für jede Zone und jeden Gebäudetyp (normale Wohnungen, einfache Wohnungen, gehobene Wohnungen, Villen und Einfamilienhäuser) einen Mindest- und einen Höchstwert in Euro pro Quadratmeter[^1]. Grundlage sind Kaufurkunden, Angebote und eigene Erhebungen.",
        "Drei Dinge sollten Sie wissen, bevor Sie sie verwenden:",
        {
          lista: [
            "**Es sind Schätzungen, keine Preise.** Sie sind weder Durchschnitt noch Median der Verkäufe: Sie sind eine Spanne, in der die Agentur die üblichen Werte der Zone ansiedelt. Die Agentur selbst weist darauf hin, dass sie die Schätzung einer bestimmten Immobilie nicht ersetzen.",
            "**Bruttofläche.** Alle Werte am See beziehen sich auf die Bruttofläche (Verkaufsfläche), einschließlich Mauern.",
            "**Normaler Zustand.** Am See ist nur der vorherrschende Erhaltungszustand bewertet, «normal». Eine neuwertig sanierte Villa am Seeufer kann über der Spanne liegen; eine renovierungsbedürftige darunter.",
          ],
        },
        "Fehlt ein Gebäudetyp in einer Zone, heißt das, dass die OMI ihn nicht bewertet, weil der Markt nicht aussagekräftig ist: nicht, dass er null wert ist.",
      ],
    },
    {
      id: "tabella",
      h2: "Alle Zonen am See, 2025 gegenüber 2024",
      blocchi: [
        "Dreizehn Gemeinden, alle Zonen mit mindestens einem Wert für normale Wohnungen oder Villen und Einfamilienhäuser. Die Veränderung haben wir an der Mitte der Spanne berechnet: Sie misst, wie stark die OMI ihre Schätzung verschoben hat, nicht wie die Verkäufe gelaufen sind[^1].",
        { tabella: tabellaOmi(l, ["Gemeinde", "OMI-Zone", "Gebäudetyp", "2. Hj. 2025 €/m²", "2. Hj. 2024 €/m²", "Veränderung"], { "Abitazioni civili": "Normale Wohnungen", "Ville e Villini": "Villen und Einfamilienhäuser" }, "—") },
        "Abgerufen über den öffentlichen Abfragedienst am 6. Oktober 2026; Lizenz CC BY 4.0, «Agenzia delle Entrate – OMI». Die Zonen beschreibt die Agentur nur in Worten: Die Abgrenzungen lassen sich nur aus dem geschützten Bereich herunterladen[^2]. Legro liegt in der Zone C1 von Orta (die es nennt), Ronco in der E1 von Pella; Vacciago wird von keiner Zone von Ameno genannt.",
      ],
    },
    {
      id: "leggere",
      h2: "Wie man sie liest, ohne sich zu irren",
      blocchi: [
        {
          lista: [
            "**Multiplizieren genügt nicht.** 200 m² mal der Höchstwert am Seeufer von Orta ergeben eine Zahl, keinen Preis: Aussicht, Seezugang, Bootshaus, Garten, Zustand der Haustechnik verschieben den Wert mehr als jeder Koeffizient.",
            "**Brutto gegenüber netto.** Ein Inserat mit «180 m²» kann die Wohnfläche meinen: Vergleichen Sie sie mit einem OMI-Bruttowert, wirkt der Quadratmeterpreis höher, als er ist.",
            "**Weite Zonen.** Eine Zone «Randlage» oder «Hügelzone» fasst sehr unterschiedliche Häuser zusammen. Am See kann der Unterschied zwischen erster und zweiter Reihe mehr ausmachen als der Wechsel von einer Zone in die andere.",
            "**Die Verzögerung.** Das 2. Halbjahr 2025 ist am 6. Oktober 2026 das letzte veröffentlichte: Es blickt fast ein Jahr zurück.",
          ],
        },
        `Um abzuschätzen, wie viele Quadratmeter ein Budget erreicht, Gemeinde für Gemeinde, gibt es das Werkzeug [Was Ihr Budget kauft](${v.strumento("budget")}); für die Spanne eines bestimmten Hauses [Was ist mein Haus wert](${v.strumento("valore")}).`,
      ],
    },
    {
      id: "vendite-vere",
      h2: "Warum es in Italien keine öffentlichen Medianwerte der Verkäufe gibt",
      blocchi: [
        "In Slowenien zeigt das öffentliche Kaufpreisregister den Preis fast jeder Urkunde und lässt sich frei herunterladen: Auf SloveniaVillas leiten wir daraus Medianwerte ab. In Italien ist das nächstliegende Gegenstück der Dienst **«Consultazione valori immobiliari dichiarati»** (Abfrage der erklärten Immobilienwerte) der Agenzia delle Entrate[^3], und er funktioniert anders:",
        {
          lista: [
            "er verlangt die Anmeldung mit SPID, CIE oder CNS (oder Zugangsdaten Fisconline/Entratel);",
            "er zeigt die Urkunden der letzten fünf Jahre einzeln, auf einer Karte;",
            "er bietet keinen Massen-Download und nennt auf der Seite keine offene Lizenz.",
          ],
        },
        "Um daraus Medianwerte zu gewinnen, bräuchte es eine manuelle Erhebung und eine Prüfung der Nutzungsbedingungen. Wir verwenden für niemanden Zugangsdaten: Deshalb veröffentlichen wir heute keine Verkaufspreise vom See.",
        "Auch die Zahl der Verkäufe pro Gemeinde (kommunale NTN) lässt sich kostenlos und mit offener Lizenz herunterladen, aber nur aus dem geschützten Bereich der OMI-Datenlieferungen (Forniture dati OMI)[^2]. Wer eine digitale Identität hat, kann das selbst tun.",
        "Schließlich gibt es den Katasterwert, der für die Steuern dient: Mit der Preis-Wert-Regel (prezzo-valore) wird die Registersteuer auf ihn gezahlt und nicht auf den Preis[^5]. Es ist ein steuerlicher Wert, weit vom Markt entfernt, und er taugt nicht zur Schätzung eines Hauses.",
      ],
    },
    {
      id: "volumi",
      h2: "Wie viele Häuser verkauft werden: die Volumen der Provinzen",
      blocchi: [
        "Als Kontext veröffentlicht die Agentur in offener Form die Zahl der normalisierten Transaktionen (NTN) von Wohnungen, aber nur für die Provinzhauptstadt und für die Gesamtheit der übrigen Gemeinden jeder Provinz[^4]. Der Ortasee liegt zwischen zwei Provinzen: Novara (Orta, Pettenasco, Pella, San Maurizio d'Opaglio, die Hügel und das Südende) und Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso).",
        {
          tabella: {
            testa: ["Gemeinden außer Provinzhauptstadt", "2023", "2024", "2025 (vorl.)", "1. Hj. 2026 (vorl.)", "2025 zu 2024"],
            num: [1, 2, 3, 4, 5],
            righe: [
              ["Provinz Novara", n(no.a2023, l), n(no.a2024, l), n(no.a2025, l), n(no.s2026, l), `+${pct(no.varPct, l)}`],
              ["Provinz VCO", n(vb.a2023, l), n(vb.a2024, l), n(vb.a2025, l), n(vb.s2026, l), `+${pct(vb.varPct, l)}`],
            ],
            didascalia: "Agenzia delle Entrate – OMI, Verkaufsvolumen (RES.csv). NTN = normalisierte Transaktionen, also summierte Eigentumsanteile. 2025 und 2026 sind vorläufig.",
          },
        },
        "Es sind Dutzende Gemeinden, fast alle weit vom See entfernt: Sie zeigen, dass sich der Markt der Provinz bewegt hat, nicht wie viele Häuser an den Ufern verkauft wurden.",
      ],
    },
  ],
  nonSappiamo: [
    "Die tatsächlich in den Urkunden am See bezahlten Preise: Der Dienst der erklärten Werte verlangt eine digitale Identität und hat keine erklärte offene Lizenz.",
    "Die Zahl der Verkäufe pro Gemeinde am See (kommunale NTN), die sich nur aus dem geschützten Bereich herunterladen lässt.",
    "Die Abgrenzungen der OMI-Zonen: Wir kennen sie nur aus der Beschreibung in Worten.",
    "Wie sich die Werte im 1. Halbjahr 2026 entwickelt haben, die am 6. Oktober 2026 noch nicht veröffentlicht waren.",
    "Den typischen Abstand zwischen Angebotspreisen in Inseraten und OMI-Werten am See: Wir haben ihn nicht gemessen.",
  ],
  faq: [
    { d: "Sind die OMI-Werte die Preise, zu denen Häuser verkauft werden?", r: "Nein. Es sind Spannen in €/m² Bruttofläche, von der Agenzia delle Entrate pro homogener Zone und Gebäudetyp im vorherrschenden Erhaltungszustand geschätzt. Sie sind weder Durchschnitte noch Medianwerte aus Urkunden." },
    { d: "Was kostet ein Haus am Ortasee pro Quadratmeter?", r: `Das hängt von Gemeinde und Zone ab. Im 2. Halbjahr 2025 ist der höchste Wert das Seeufer von Orta San Giulio mit der Insel: Villen ${fq("orta-san-giulio", "B2", "ville", l)}. Am Seeufer von Pella sind Villen mit ${fq("pella", "B2", "ville", l)} bewertet.` },
    { d: "Kann man erfahren, zu welchem Preis ein bestimmtes Haus verkauft wurde?", r: "Der Dienst «Consultazione valori immobiliari dichiarati» der Agenzia delle Entrate zeigt die Kaufpreise der Urkunden der letzten fünf Jahre, einzeln, für alle, die sich mit SPID, CIE oder CNS anmelden. Es sind keine offenen Daten." },
    { d: "Warum veröffentlicht OrtaVillas keine Medianwerte der Verkäufe wie SloveniaVillas?", r: "Weil sich in Italien die Preise der Urkunden nicht in offener Form herunterladen lassen: Man sieht sie einzeln mit digitaler Identität ein, ohne erklärte Lizenz. Wir verwenden für niemanden Zugangsdaten." },
    { d: "Sind die Werte am See gestiegen?", r: "Zwischen dem 2. Halbjahr 2024 und dem 2. Halbjahr 2025 hat die OMI alle Werte für normale Wohnungen am See angehoben, um einige Prozentpunkte in der Mitte der Spanne; die Villen sind in Omegna, Nonio, Quarna Sopra und Madonna del Sasso unverändert geblieben. Es ist die Bewegung der Schätzung, nicht der Verkäufe." },
  ],
};
