import type { Guida } from "../tipi";
import { vai } from "../link";
import { daA, t, tabellaOrigini } from "../dati";
import { NOMI_ORIGINI } from "@/content/titoli";

const l = "de" as const;
const v = vai(l);

export const arrivare: Guida = {
  titolo: "Anreise an den Ortasee: Flughäfen, Autobahnen, Züge, Schiffe",
  descrizione: "Malpensa 54 Minuten von Orta San Giulio, Linate 83, Zürich, Basel, Bern, Genf und München mit dem Auto, die Schweizer Autobahnvignette, die Züge mit Umstieg in Novara und die Schiffe von März bis Oktober.",
  occhiello: "Ratgeber",
  h1: "Wie man an den Ortasee kommt, und wie man sich dort bewegt",
  lead: "Der Flughafen des Sees ist Malpensa. Mit dem Auto kommt man über die Autostrada dei Laghi und die A26; mit dem Zug steigt man in Novara um; auf dem Wasser fahren von März bis Oktober die Linienschiffe. Hier die gemessenen Zeiten, die Regeln, die zählen, und die Lücken, die bleiben.",
  inBreve: [
    `Ohne Verkehr liegt Orta San Giulio ${t(daA("malpensa"), l)} von Malpensa entfernt, ${t(daA("milano"), l)} vom Domplatz in Mailand, ${t(daA("linate"), l)} von Linate.`,
    `Aus der Schweiz: Lugano ${t(daA("lugano"), l)}, Zürich ${t(daA("zurigo"), l)}, Genf ${t(daA("ginevra"), l)}, Bern ${t(daA("berna"), l)}, Basel ${t(daA("basilea"), l)}; aus München ${t(daA("monaco"), l)}.`,
    "Auf Schweizer Autobahnen braucht es die Autobahnvignette: 40 Franken, gültig vom 1. Dezember des Vorjahres bis zum 31. Januar des Folgejahres; die E-Vignette kauft man auf dem offiziellen Portal Via.",
    "Kein Direktzug nach Mailand: Ab Orta-Miasino steigt man in Novara um, insgesamt 1 h 33 bis 1 h 54. Nach Novara gab es am Mittwoch, 7. Oktober 2026, 8 Direktzüge.",
    "Die Linienschiffe fahren von März bis Oktober; von November bis Februar ist kein Liniendienst verzeichnet.",
  ],
  sezioni: [
    {
      id: "aeroporti",
      h2: "Flughäfen: zuerst Malpensa",
      blocchi: [
        `Malpensa Terminal 1 liegt **${t(daA("malpensa"), l)}** von Orta San Giulio entfernt, Linate **${t(daA("linate"), l)}**: OSRM-Zeiten bei freiem Verkehrsfluss, gemessen am 6. Oktober 2026[^1]. Von Malpensa führt die Strecke nicht über Mailand: SS336 und SS33 bis zur Abzweigung nach Gattico, dann die A26.`,
        "Strecken und Fluggesellschaften der beiden Flughäfen ändern sich jede Saison, und wir haben sie nicht in den Quellen der Flughäfen gelesen: Deshalb schreiben wir nicht, aus welchen Städten es Direktflüge gibt.",
        { nota: "Wie diese Zeiten zu lesen sind: Sie sind von OSRM auf dem Netz von OpenStreetMap berechnet, ohne Staus, Baustellen, Grenzkontrollen oder Pausen. Sie sind ein Minimum. Die tatsächliche Verzögerung zu Stoßzeiten haben wir nicht gemessen." },
      ],
    },
    {
      id: "auto",
      h2: "Mit dem Auto: A8, A26 und Staatsstraße 229",
      blocchi: [
        "Von Mailand nimmt man die A8 (Autostrada dei Laghi), dann die Abzweigung Gallarate–Gattico und die A26. Nach der berechneten Route verlässt man die A26 an der Ausfahrt, die die Schilder nach Arona ausweisen, dann die SS142, die Umfahrung von Borgomanero und die Staatsstraße 229 del Lago d'Orta bis Orta[^1]. Wer von Süden kommt (Turin, Genf über den Mont Blanc), fährt dagegen in Borgomanero ab.",
        "Die italienischen Autobahnen sind mautpflichtig: Den Betrag haben wir nicht berechnet.",
        { tabella: tabellaOrigini(l, ["Start", "Bis Orta San Giulio", "km", "Hauptstraßen"], ["malpensa", "milano", "linate", "novara", "torino", "lugano", "zurigo", "ginevra", "berna", "basilea", "monaco"], NOMI_ORIGINI) },
        "Von Zürich und Basel führt die schnellste Strecke über die Schweizer A2 bis Lugano und zurück nach Italien Richtung Varese; von Bern über den Simplon und die Staatsstraße 33; von Genf durch den Mont-Blanc-Tunnel und das Aostatal; von München durch Österreich und Graubünden[^1].",
        `Jeder Startort hat seine eigene Seite, mit den Zeiten zu allen sechzehn Orten: [Entfernungen](${v.distanze()}).`,
      ],
    },
    {
      id: "vignetta",
      h2: "Die Schweizer Autobahnvignette",
      blocchi: [
        "Auf Schweizer Autobahnen und Autostraßen müssen Fahrzeuge bis 3,5 Tonnen die Autobahnvignette haben. Laut dem Bundesamt für Zoll und Grenzsicherheit (BAZG)[^2]:",
        {
          lista: [
            "sie kostet **40 Franken**, auch in der elektronischen Version auf dem offiziellen Portal Via;",
            "sie gilt **vom 1. Dezember des Vorjahres bis zum 31. Januar des Folgejahres**: Die Vignette 2026 gilt vom 1. Dezember 2025 bis zum 31. Januar 2027;",
            "es gibt sie als Klebevignette (Automobilclubs und einige Grenzübergänge) oder elektronisch.",
          ],
        },
        "Läuft die Zahlung über Dritte, können laut BAZG Zuschläge anfallen: Kaufen Sie über das offizielle Portal. Die Strecke von München führt auch über mautpflichtige österreichische Autobahnen, die wir hier nicht berechnet haben.",
      ],
    },
    {
      id: "treno",
      h2: "Mit dem Zug: immer über Novara",
      blocchi: [
        "Der Bahnhof des Ortes ist **Orta-Miasino**, an der eingleisigen Strecke Novara–Domodossola, nur Regionalzüge[^4]. Am See gibt es außerdem die Bahnhöfe Gozzano, Bolzano Novarese, Pettenasco und Omegna, alle am Ostufer.",
        "Die Fahrplanauskunft von Trenitalia, abgefragt am 6. Oktober 2026[^3], zeigte für **Mittwoch, 7. Oktober, 8 Direktzüge** von Orta-Miasino nach Novara (06:26, 07:12, 08:04, 13:51, 14:57, 16:53, 18:54, 19:52), mit 42 bis 53 Minuten Fahrzeit, und **7** für Samstag, 10. Oktober. Zwischen 8:04 und 13:51 Uhr fährt kein Zug.",
        "**Nach Mailand gibt es keinen Direktzug**: Alle Verbindungen nach Milano Centrale am 7. Oktober erfordern einen Umstieg in Novara (die erste, um 06:26, zwei Umstiege), **1 h 33 bis 1 h 54**[^3].",
        "Es ist eine Stichprobe von zwei Tagen, kein veröffentlichter offizieller Fahrplan: Prüfen Sie immer am Reisetag nach.",
      ],
    },
    {
      id: "battelli",
      h2: "Auf dem See: die Schiffe",
      blocchi: [
        "Den öffentlichen Liniendienst betreibt Navigazione Lago d'Orta mit drei Motorschiffen; die wichtigsten Anlegestellen sind Omegna, Orta, die Insel San Giulio, Pella, Pettenasco und Gozzano, und die Fahrpläne bedienen auch San Filiberto, Lagna, Ronco und Oira[^5][^7].",
        "Die Linie verkehrt **von März bis Oktober**. Vom 4. bis 31. Oktober 2026 gilt die «Linea Rossa», täglich: Orta, Insel, Pella, San Filiberto, Lagna, Insel, Orta, mit Abfahrten alle 35–45 Minuten zwischen 10:15 und 17:45 Uhr[^6]. Von November bis Februar sehen die veröffentlichten Fahrpläne keinen Liniendienst vor.",
        `Das Schiff ist die einzige direkte Verbindung zwischen den beiden Ufern: Was sich zwischen Ost und West ändert, steht im Ratgeber [Ostufer oder Westufer](${v.guida("est-ovest")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Die Flugstrecken und -frequenzen ab Malpensa und Linate für den Winter 2026/27.",
    "Die tatsächlichen Fahrzeiten zu Stoßzeiten und an den Grenzübergängen zur Schweiz: Unsere gelten bei freiem Verkehrsfluss.",
    "Die Kosten der italienischen und österreichischen Maut auf den Strecken der Tabelle.",
    "Den offiziellen Regionalfahrplan der Strecke Novara–Domodossola und ob die Zeiten ohne Züge durch Ersatzbusse abgedeckt sind.",
    "Private Bootsverbindungen zwischen Orta und der Insel in den Monaten ohne Liniendienst.",
  ],
  faq: [
    { d: "Welcher Flughafen liegt dem Ortasee am nächsten?", r: `Malpensa: ${t(daA("malpensa"), l)} mit dem Auto von Orta San Giulio ohne Verkehr. Linate liegt ${t(daA("linate"), l)} entfernt.` },
    { d: "Brauche ich für die Anreise aus der Schweiz eine Vignette?", r: "Auf Schweizer Autobahnen ja: Die Autobahnvignette kostet 40 Franken und gilt vom 1. Dezember des Vorjahres bis zum 31. Januar des Folgejahres. In Italien sind die Autobahnen mautpflichtig." },
    { d: "Kommt man von Mailand mit dem Zug nach Orta?", r: "Ja, aber mit Umstieg in Novara: 1 h 33 bis 1 h 54 bis Milano Centrale laut der Fahrplanauskunft von Trenitalia für den 7. Oktober 2026. Der Bahnhof ist Orta-Miasino." },
    { d: "Wie lange braucht man ab Zürich?", r: `Ohne Verkehr ${t(daA("zurigo"), l)}, über die A2 bis Lugano und dann in Italien Richtung Varese und A26.` },
    { d: "Fahren die Schiffe das ganze Jahr?", r: "Nein. Der Liniendienst verkehrt von März bis Oktober; von November bis Februar ist kein Liniendienst verzeichnet." },
  ],
};
