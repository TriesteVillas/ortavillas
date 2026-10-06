import type { Guida } from "../tipi";
import { vai } from "../link";
import { laghi, t, fq, tabellaLaghi } from "../dati";

const l = "de" as const;
const v = vai(l);
const mi = (id: string) => laghi("milano").find((r) => r.a === id)!.minuti;
const mx = (id: string) => laghi("malpensa").find((r) => r.a === id)!.minuti;

export const NOMI_LAGHI_DE: Record<string, string> = {
  stresa: "Lago Maggiore · Stresa",
  como: "Comer See · Como",
  bellagio: "Comer See · Bellagio",
  sirmione: "Gardasee · Sirmione",
  "orta-san-giulio": "Ortasee · Orta San Giulio",
};

export const ortaMaggiore: Guida = {
  titolo: "Ortasee oder Lago Maggiore? Fahrzeiten, Größe, Wasser und Preise",
  descrizione: "Orta oder Maggiore: Fahrzeiten von Mailand und Malpensa nach Stresa, Como, Bellagio, Sirmione und Orta, Größe der beiden Seen, Wasserqualität, die geschlossene Seilbahn auf den Mottarone, und welche Preise wir tatsächlich haben.",
  occhiello: "Ratgeber",
  h1: "Orta oder Maggiore: zwei Seen, ein Berg dazwischen",
  lead: "Der Mottarone trennt den Ortasee vom Lago Maggiore: Von Orta nach Stresa sind es in der Luftlinie wenige Kilometer. Die beiden Seen haben aber verschiedene Maßstäbe, und ein ehrlicher Vergleich muss auch sagen, welche Zahlen fehlen.",
  inBreve: [
    `Von Mailand liegt Orta San Giulio ohne Verkehr ${t(mi("orta-san-giulio"), l)} entfernt, Stresa ${t(mi("stresa"), l)}, Como ${t(mi("como"), l)}, Bellagio ${t(mi("bellagio"), l)}. Von Malpensa liegt Orta ${t(mx("orta-san-giulio"), l)} entfernt, Stresa ${t(mx("stresa"), l)}.`,
    "Der Ortasee hat 18 km² Fläche und 143 m maximale Tiefe; der Maggiore 212 km² und 370 m. Das Volumen des Maggiore ist etwa dreißigmal so groß wie das des Ortasees.",
    "2024 waren von den 16 Badestellen des Ortasees 10 in der Klasse «ausgezeichnet», 4 «gut» und 2 «ausreichend» (an die EU übermittelte Daten).",
    "Die Seilbahn Stresa–Mottarone, stillgelegt seit dem Unglück vom 23. Mai 2021, war im Mai 2026 noch geschlossen.",
    "Für die Preise am Maggiore haben wir die OMI-Werte nicht ausgewertet: Einen Preisvergleich mit dem Ortasee veröffentlichen wir heute nicht.",
  ],
  sezioni: [
    {
      id: "tempi",
      h2: "Von Mailand und von Malpensa",
      blocchi: [
        "Fahrzeiten mit dem Auto, gemessen mit OSRM am 6. Oktober 2026, bei freiem Verkehrsfluss: keine Staus auf der Ringautobahn, keine Baustellen, keine Pausen[^1]. Sie sind ein Minimum, kein Versprechen. Start: Domplatz in Mailand und Terminal 1 in Malpensa; Ziel: das Zentrum jedes Ortes.",
        { tabella: tabellaLaghi(l, ["See und Ort", "Ab Mailand", "km", "Ab Malpensa", "km"], NOMI_LAGHI_DE) },
        `Orta und Stresa liegen von Mailand fast gleichauf (${t(mi("orta-san-giulio"), l)} gegenüber ${t(mi("stresa"), l)}): Beide Strecken teilen sich die A8 und die Abzweigung nach Gattico und trennen sich dann auf der A26. Von Malpensa ist Stresa zwei Minuten näher. Como ist von Mailand aus am nächsten; Bellagio und Sirmione liegen weiter entfernt als Orta.`,
        `Alle Fahrzeiten zu den sechzehn Orten am Ortasee, von elf Städten aus, stehen im Bereich [Entfernungen](${v.distanze()}).`,
      ],
    },
    {
      id: "dimensioni",
      h2: "Zwei verschiedene Maßstäbe",
      blocchi: [
        {
          tabella: {
            testa: ["", "Ortasee", "Lago Maggiore"],
            num: [1, 2],
            righe: [
              ["Fläche", "18 km²", "212 km²"],
              ["Maximale Tiefe", "143 m", "370 m"],
              ["Volumen", "1,3 km³", "37,5 km³"],
            ],
            didascalia: "Orta: Regione Piemonte, Piano di Tutela delle Acque, Monografie L3 (2007). Maggiore: Mosello und Lami, CNR (2011).",
          },
        },
        "Der Ortasee ist 12,55 km lang und höchstens 1,85 km breit[^2]: Von fast jedem Haus am Ufer sieht man das gegenüberliegende. Der Maggiore ist der Fläche nach der zweitgrößte See Italiens[^3].",
        "Der Ortasee hat zudem eine hydrografische Besonderheit: Der Abfluss verlässt ihn am Nordende, nach dem CNR ein Einzelfall unter den italienischen Voralpenseen[^11]. Sein Wasser gelangt trotzdem in den Maggiore, über die Strona und den Toce.",
      ],
    },
    {
      id: "acque",
      h2: "Das Wasser: Baden und Zustand des Sees",
      blocchi: [
        "**Baden.** Am Ortasee gibt es 16 offizielle Messstellen. In der Saison 2024, der letzten klassifizierten in den an die Europäische Umweltagentur übermittelten Daten, waren **10** in der Klasse ausgezeichnet, **4** gut und **2** ausreichend; die beiden ausreichenden sind Strände in Omegna am Nordende (Bagnella und das Strandbad des Sportzentrums)[^4].",
        "**Zustand des Sees.** Für die Jahre 2020–2022 hat ARPA Piemonte den ökologischen Zustand des Ortasees als «gut» eingestuft, als einen von nur zwei piemontesischen Seen in dieser Klasse, während der chemische Zustand wegen Überschreitung des PFOS-Jahresmittels «nicht gut» ausfiel[^5]. Für 2023–2025 war die Einstufung im Juli 2026 noch in Bewertung[^6].",
        "Das Ergebnis wiegt schwerer, wenn man die Geschichte kennt: Jahrzehntelang hatten Industrieabwässer den Ortasee zu einem sauren See gemacht, saniert mit einer Kalkbehandlung zwischen 1989 und 1990[^11].",
        "**Der Maggiore.** Die Badeklassen der Messstellen am Lago Maggiore haben wir für diese Ausgabe nicht ausgewertet: Deshalb schreiben wir nicht, welcher der beiden Seen «sauberer» ist.",
      ],
    },
    {
      id: "mottarone",
      h2: "Der Mottarone und die geschlossene Seilbahn",
      blocchi: [
        "Der Mottarone, 1.491 m an der Bergstation der Seilbahn[^8], ist der Berg zwischen den beiden Seen. Die Seilbahn Stresa–Alpino–Mottarone steht seit dem Unglück vom **23. Mai 2021** still, bei dem 14 Menschen starben. Im November 2023 unterzeichneten das Tourismusministerium, die Region und die Gemeinde Stresa eine Vereinbarung über 15 Millionen Euro für eine neue Anlage, mit der Wiedereröffnung für den Sommer 2025 geplant[^9].",
        "Dieses Datum ist verstrichen: Am fünften Jahrestag, dem 23. Mai 2026, stand die Seilbahn noch still[^7], und das Tourismusbüro von Stresa schreibt, dass sie geschlossen ist, ohne eine Wiedereröffnung zu nennen[^8]. Ob im Oktober 2026 gebaut wird, konnten wir nicht prüfen.",
      ],
    },
    {
      id: "prezzi",
      h2: "Preise: was wir haben, was nicht",
      blocchi: [
        `Für den Ortasee haben wir die OMI-Werte von dreizehn Gemeinden, Zone für Zone[^10]. Der höchste ist das Seeufer von Orta San Giulio mit der Insel: normale Wohnungen ${fq("orta-san-giulio", "B2", "civili", l)}, Villen ${fq("orta-san-giulio", "B2", "ville", l)} (2. Halbjahr 2025). Das vollständige Bild steht im Ratgeber [Immobilienpreise am Ortasee](${v.guida("quotazioni")}).`,
        "Für den Lago Maggiore (Stresa, Baveno, Verbania, Arona, das lombardische Ufer) **haben wir die Werte nicht ausgewertet**: Ein Preisvergleich zwischen den beiden Seen würde dieselbe Auswertung erfordern, mit demselben Halbjahr und denselben Gebäudetypen. Solange wir sie nicht gemacht haben, schreiben wir nicht, dass der Ortasee weniger oder mehr kostet als der Maggiore.",
        "Dasselbe gilt für das Gedränge im Sommer: Wir haben keine vergleichbaren Zahlen zu Übernachtungen an beiden Seen, und wir ersetzen sie nicht durch einen Eindruck.",
      ],
    },
    {
      id: "scegliere",
      h2: "Wie Sie wählen",
      blocchi: [
        { h3: "Der Ortasee passt zu Ihnen, wenn …" },
        {
          lista: [
            "Sie einen kleinen See möchten, an dem das gegenüberliegende Ufer zur Landschaft vor dem Haus gehört;",
            `Ihnen ${t(mi("orta-san-giulio"), l)} ab Mailand und ${t(mx("orta-san-giulio"), l)} ab Malpensa ohne Verkehr genügen;`,
            "Sie einen See mit «gutem» ökologischem Zustand und überwiegend ausgezeichneter Badequalität suchen, in Kenntnis des PFOS.",
          ],
        },
        { h3: "Der Lago Maggiore passt zu Ihnen, wenn …" },
        {
          lista: [
            "Sie einen großen See mit weiten Horizonten möchten;",
            "Sie mehr Infrastruktur und mehr Schiffsverbindungen brauchen, als der Ortasee bietet (was wir hier nicht gemessen haben);",
            "Sie in Kauf nehmen, dass die Zahlen dieses Ratgebers zum Maggiore weniger vollständig sind.",
          ],
        },
      ],
    },
  ],
  nonSappiamo: [
    "Die OMI-Werte der Gemeinden am Lago Maggiore, ausgewertet mit derselben Methode wie die des Ortasees.",
    "Die Badeklassen 2024 der Messstellen am Lago Maggiore.",
    "Vergleichbare Zahlen zu Sommerübernachtungen an beiden Seen.",
    "Den Stand der Arbeiten an der neuen Mottarone-Seilbahn im Oktober 2026 und das Datum der Wiedereröffnung.",
    "Die ARPA-Einstufung 2023–2025 des ökologischen und chemischen Zustands des Ortasees.",
    "Die tatsächlichen Fahrzeiten zu Stoßzeiten: Unsere gelten bei freiem Verkehrsfluss.",
  ],
  faq: [
    { d: "Liegt der Ortasee oder der Lago Maggiore näher an Mailand?", r: `Fast gleich: Ohne Verkehr liegt Orta San Giulio ${t(mi("orta-san-giulio"), l)} vom Domplatz entfernt, Stresa ${t(mi("stresa"), l)}. Von Malpensa liegt Stresa ${t(mx("stresa"), l)} entfernt, Orta ${t(mx("orta-san-giulio"), l)}.` },
    { d: "Wie groß ist der Ortasee im Vergleich zum Maggiore?", r: "18 km² gegenüber 212 km² Fläche, 143 m gegenüber 370 m maximale Tiefe, 1,3 gegenüber 37,5 km³ Volumen." },
    { d: "Kann man im Ortasee baden?", r: "Ja, an den zugelassenen Badestellen. 2024 waren von den 16 offiziellen Stellen 10 in der Klasse ausgezeichnet, 4 gut und 2 ausreichend." },
    { d: "Ist die Seilbahn auf den Mottarone geöffnet?", r: "Nein. Sie steht seit dem 23. Mai 2021 still; im Mai 2026 war sie noch geschlossen, und das Tourismusbüro von Stresa nennt kein Datum für die Wiedereröffnung." },
    { d: "Sind die Häuser am Ortasee günstiger als am Maggiore?", r: "Mit vergleichbaren Daten können wir das nicht sagen: Wir haben die OMI-Werte des Ortasees, nicht die des Maggiore nach derselben Methode ausgewertet." },
  ],
};
