import type { Guida } from "../tipi";
import { vai } from "../link";
import { L, n, t, ora, pct, fq, tabellaSole, tabellaServizi } from "../dati";

const l = "de" as const;
const v = vai(l);
const orta = L("orta-san-giulio"), pet = L("pettenasco"), pella = L("pella"), ronco = L("ronco"), smo = L("san-maurizio-dopaglio"), mds = L("madonna-del-sasso"), legro = L("legro");
const s = (x: typeof orta) => x.soleDic!;

export const estOvest: Guida = {
  titolo: "Ortasee, Ostufer oder Westufer? Sonne, Züge, Straßen, Preise",
  descrizione: "Ost- oder Westufer des Ortasees: Sonnenminuten am 21. Dezember, Bahn, Straßen, Schiffe, OMI-Werte, ISPRA-Risiken und Infrastruktur, Gemeinde für Gemeinde.",
  occhiello: "Ratgeber",
  h1: "Ostufer oder Westufer: zwei Ufer, die sich anschauen",
  lead: "Von Orta nach Pella sind es wenige Minuten mit dem Schiff, aber die beiden Ufer leben nach verschiedenen Uhrzeiten. Das Ostufer hat die Bahn, den Ort und die höchsten Werte; das Westufer hat die Morgensonne und den Blick auf die Insel. Hier die Zahlen, die sie unterscheiden, und wo Zahlen nicht genügen.",
  inBreve: [
    `Am 21. Dezember hat Orta San Giulio ${s(orta).minuti} Minuten direkte Sonne (von ${ora(s(orta).primo, l)} bis ${ora(s(orta).ultimo, l)} Uhr), Pella ${s(pella).minuti} (von ${ora(s(pella).primo, l)} bis ${ora(s(pella).ultimo, l)} Uhr): fast dieselbe Summe, um vierzig Minuten verschoben.`,
    `Der Extremfall ist Ronco am Westufer: letzte Sonne um ${ora(s(ronco).ultimo, l)} Uhr, ${s(ronco).minuti} Minuten insgesamt.`,
    "Die Bahnstrecke Novara–Domodossola verläuft nur am Ostufer (Bahnhöfe Orta-Miasino und Pettenasco); am Westufer gibt es Schiffe und die Provinzstraße.",
    `Seeufer laut OMI, Villen und Einfamilienhäuser: Orta ${fq("orta-san-giulio", "B2", "ville", l)}, Pella ${fq("pella", "B2", "ville", l)}, Pettenasco ${fq("pettenasco", "B2", "ville", l)} (2. Halbjahr 2025).`,
    `Risiko von Erdrutschen und Hochwasser (ISPRA, % der Gemeindebevölkerung): Den höchsten Wert der beiden Ufer hat Pettenasco, ${pct(pet.frane!, l)} und ${pct(pet.alluvioni!, l)}.`,
  ],
  sezioni: [
    {
      id: "due-rive",
      h2: "Zwei Ufer, ein schmaler See",
      blocchi: [
        "Der See ist schmal: Von einem Ufer sieht man das andere gut. Wir nennen **Ostufer** Orta San Giulio, den Ortsteil Legro und Pettenasco; **Westufer** Pella, seinen Ortsteil Ronco, San Maurizio d'Opaglio und, auf dem Kamm, Madonna del Sasso. Die Grenzen sind ungefähr und von uns gezogen.",
        `Das Ostufer schaut nach Westen: See und Sonnenuntergang vor sich, den Mottarone im Rücken. Das Westufer schaut nach Osten: Sonnenaufgang über dem See und Blick auf Orta und die Insel San Giulio, aber der Kamm hinter den Häusern zieht den Sonnenuntergang vor. Die Orte auf den Hügeln des Mottarone (Ameno, Vacciago, Miasino, Armeno) liegen oberhalb des Ostufers und haben eigene Seiten unter den Orten, zum Beispiel [Ameno](${v.luogo("ameno")}).`,
      ],
    },
    {
      id: "sole",
      h2: "Die Sonne am 21. Dezember",
      blocchi: [
        `Wir haben den Horizont jedes Ortes aus dem Geländemodell berechnet, alle 2° Azimut bis 15 km, und den Sonnenstand mit den NOAA-Formeln[^2]. Das Ergebnis ist die Sonne, die das Relief zulässt, ohne Häuser, Bäume und Wolken: ein Höchstwert, kein Versprechen. Bei flachem Horizont hätte man am 21. Dezember ${s(orta).teorici} Minuten Sonne.`,
        {
          tabella: tabellaSole(l, ["Ort", "Ufer", "Höhe", "Sonnenminuten", "Erste Sonne", "Letzte Sonne"], { est: "Ost", ovest: "West" }),
        },
        `Die Summe ändert sich wenig; es ändert sich die Uhrzeit. Am Ostufer kommt die Sonne spät (in Orta um ${ora(s(orta).primo, l)}, in Pettenasco um ${ora(s(pet).primo, l)} Uhr), weil die Hänge des Mottarone sie verdecken, und bleibt bis zum Nachmittag. Am Westufer kommt sie gegen halb neun und geht früher: in Pella um ${ora(s(pella).ultimo, l)}, in Ronco um ${ora(s(ronco).ultimo, l)} Uhr. Legro, hoch über Orta, gewinnt am Abend eine Viertelstunde (${ora(s(legro).ultimo, l)} Uhr).`,
        "Am 21. Juni hat Pella mit derselben Berechnung 822 Minuten Sonne, Orta 792, Ronco 717: Auch im Sommer wirkt der Kamm von Ronco noch.",
      ],
    },
    {
      id: "spostarsi",
      h2: "Bahn, Straßen und Schiffe",
      blocchi: [
        "**Die Bahn gibt es nur im Osten.** Die eingleisige Strecke Novara–Domodossola hat am See die Bahnhöfe Gozzano, Bolzano Novarese, Orta-Miasino, Pettenasco und Omegna[^6]. Am 7. Oktober 2026 zeigte die Fahrplanauskunft von Trenitalia **8 Direktzüge** von Orta-Miasino nach Novara, mit einer Lücke zwischen 8:04 und 13:51 Uhr; nach Mailand ist immer ein Umstieg in Novara nötig[^7].",
        `**Die Straßen.** Das Ostufer erschließt die Staatsstraße 229 del Lago d'Orta, dieselbe, die man nach der Ausfahrt von der Autobahn A26 nimmt: Von Mailand liegt Orta ohne Verkehr ${t(orta.daMilano, l)} entfernt. Das Westufer erschließt die Provinzstraße 46, man erreicht es, indem man um das Südende des Sees fährt: Pella liegt ${t(pella.daMilano, l)} entfernt, Ronco ${t(ronco.daMilano, l)}[^1].`,
        "**Die Schiffe** sind die einzige direkte Verbindung zwischen den beiden Ufern. Navigazione Lago d'Orta, öffentlicher Linienverkehr, fährt von März bis Oktober[^11]; vom 4. bis 31. Oktober 2026 verkehrt die «Linea Rossa» alle 35–45 Minuten zwischen Orta, der Insel, Pella, San Filiberto und Lagna[^5]. Von November bis Februar ist kein Liniendienst verzeichnet.",
      ],
    },
    {
      id: "prezzi",
      h2: "Die OMI-Werte an beiden Ufern",
      blocchi: [
        "Die Beobachtungsstelle für den Immobilienmarkt (OMI) der Agenzia delle Entrate veröffentlicht Spannen in €/m² nach Zone und Gebäudetyp: Es sind Schätzungen, keine Verkaufspreise[^3]. Hier die Zonen am See und die teuersten jeder Gemeinde, 2. Halbjahr 2025:",
        {
          tabella: {
            testa: ["Gemeinde", "OMI-Zone", "Normale Wohnungen", "Villen und Einfamilienhäuser"],
            righe: [
              ["Orta San Giulio", "B2 · Seeufer, Insel", fq("orta-san-giulio", "B2", "civili", l), fq("orta-san-giulio", "B2", "ville", l)],
              ["Orta San Giulio", "C1 · Hügelzone und Legro", fq("orta-san-giulio", "C1", "civili", l), fq("orta-san-giulio", "C1", "ville", l)],
              ["Pettenasco", "B2 · Seeufer", fq("pettenasco", "B2", "civili", l), fq("pettenasco", "B2", "ville", l)],
              ["Pella", "B2 · Seeufer", fq("pella", "B2", "civili", l), fq("pella", "B2", "ville", l)],
              ["Pella", "E1 · Ronco", fq("pella", "E1", "civili", l), fq("pella", "E1", "ville", l)],
              ["San Maurizio d'Opaglio", "C1 · Halbzentral", fq("san-maurizio-dopaglio", "C1", "civili", l), fq("san-maurizio-dopaglio", "C1", "ville", l)],
              ["Madonna del Sasso", "B1 · Ortskern", fq("madonna-del-sasso", "B1", "civili", l), fq("madonna-del-sasso", "B1", "ville", l)],
            ],
            didascalia: "Agenzia delle Entrate – OMI, normaler Erhaltungszustand, Bruttofläche. «—» = Gebäudetyp in dieser Zone nicht bewertet.",
          },
        },
        `Das Seeufer von Orta mit der Insel ist die am höchsten bewertete Zone des ganzen Sees. Pella und Pettenasco liegen am Seeufer eine Stufe darunter und fast gleichauf. Alle Zonen, mit dem Vergleich zu 2024, stehen im Ratgeber [Immobilienpreise am Ortasee](${v.guida("quotazioni")}).`,
      ],
    },
    {
      id: "rischi-servizi",
      h2: "Risiken und Infrastruktur, Gemeinde für Gemeinde",
      blocchi: [
        "ISPRA veröffentlicht für jede Gemeinde den Anteil der Bevölkerung, der in Gebieten mit hoher oder sehr hoher Erdrutschgefahr (P3–P4) und in Gebieten mit mittlerer Hochwassergefahr (P2) lebt[^4]. Es sind Prozentwerte für die ganze Gemeinde: Über ein bestimmtes Haus sagen sie nichts, das ist anhand der Karten des hydrogeologischen Plans (piano di assetto idrogeologico) zu prüfen.",
        { tabella: tabellaServizi(l, ["Ort", "Ab Mailand", "Nächster Bahnhof (Luftlinie)", "Erdrutsch P3–P4", "Hochwasser P2", "Staatliche Schulen"], "—") },
        `Pettenasco hat die höchsten Werte der beiden Ufer (${pct(pet.frane!, l)} der Bevölkerung in Erdrutschgebieten P3–P4, ${pct(pet.alluvioni!, l)} in Hochwassergebieten P2); es folgt Pella mit ${pct(pella.frane!, l)} und ${pct(pella.alluvioni!, l)}. Madonna del Sasso auf dem Kamm hat bei beiden null. Die Schulen sind die staatlichen aus dem Schulregister des Ministeriums 2026/27[^8]: Private anerkannte Schulen sind nicht enthalten. Legro und Ronco sind Ortsteile: Es gelten die Daten ihrer Gemeinden.`,
        "**Krankenhäuser.** Die nächste Notaufnahme für beide Ufer ist, nach den gelesenen Quellen, das Krankenhaus SS. Trinità in Borgomanero, Notfallzentrum der I. Stufe (DEA di I livello) mit 250 Betten[^9], südlich des Sees. In Omegna gibt es eine Erstversorgungsstelle (Punto di Primo Intervento), keine Notaufnahme, mit eingeschränkten Zeiten[^10]. Die Fahrzeit von den Häusern zum Krankenhaus haben wir nicht gemessen.",
      ],
    },
    {
      id: "per-chi",
      h2: "Für wen welches Ufer passt",
      blocchi: [
        { h3: "Wählen Sie das Ostufer, wenn …" },
        {
          lista: [
            "Sie mit dem Zug anreisen oder einen Zug nach Novara wenige Gehminuten entfernt haben möchten;",
            "Sie den Ort Orta, die Hauptanlegestelle und die Infrastruktur zu Fuß erreichen möchten;",
            "Sie die Nachmittagssonne und den Sonnenuntergang über dem Wasser vorziehen und im Winter einen späteren Sonnenaufgang hinnehmen;",
            "Ihr Budget die höchsten Werte des Sees trägt.",
          ],
        },
        { h3: "Wählen Sie das Westufer, wenn …" },
        {
          lista: [
            "Sie den Blick auf Orta und die Insel und die Morgensonne möchten;",
            "Ihnen das Auto oder das saisonale Schiff genügt, ohne Bahn;",
            `Sie bei gleicher Seelage eine Stufe niedrigere Werte suchen, oder den Balkon von Madonna del Sasso auf ${n(mds.quota, l)} m;`,
            `Sie wissen, dass die Sonne im Winter früh geht: in Ronco um ${ora(s(ronco).ultimo, l)} Uhr.`,
          ],
        },
        `San Maurizio d'Opaglio, die größte Gemeinde am Westufer (${n(smo.abitanti ?? 0, l)} Einwohner), liegt ${n(smo.riva, l)} m vom Wasser entfernt und hat den längsten Wintertag der beiden Ufer: ${s(smo).minuti} Minuten.`,
      ],
    },
  ],
  nonSappiamo: [
    "Die tatsächliche Sonne eines bestimmten Hauses: Unsere Berechnung schließt Gebäude, Bäume und Wolken aus und verwendet ein Geländemodell mit etwa 27 m Auflösung.",
    "Die Unterschiede bei Temperatur, Nebel und Wind zwischen den beiden Ufern: Wir haben keine veröffentlichte Wetterstation für jedes Ufer gefunden.",
    "Die tatsächliche Fahrzeit von den Häusern zur Notaufnahme in Borgomanero und die regulären Öffnungszeiten der Erstversorgungsstelle in Omegna.",
    "Ob es im Winter, wenn das Linienschiff nicht fährt, private Verbindungen zwischen den Ufern gibt.",
    "Die Verkäufe pro Gemeinde (kommunale NTN): Sie lassen sich nur mit einer digitalen Identität herunterladen, und wir haben sie nicht.",
  ],
  faq: [
    { d: "Ist am Ortasee das Ostufer oder das Westufer sonniger?", r: `Am 21. Dezember ist die Summe ähnlich: Orta San Giulio ${s(orta).minuti} Minuten direkte Sonne, Pella ${s(pella).minuti}. Es ändert sich die Uhrzeit: Am Ostufer kommt die Sonne gegen Viertel nach neun und bleibt bis Viertel vor vier, am Westufer kommt sie gegen halb neun und geht früher. Ronco am Westufer verliert die Sonne um ${ora(s(ronco).ultimo, l)} Uhr.` },
    { d: "Fährt die Bahn an beide Ufer?", r: "Nein, nur ans Ostufer: Bahnhöfe Orta-Miasino und Pettenasco an der Strecke Novara–Domodossola. Nach Mailand ist ein Umstieg in Novara nötig." },
    { d: "Wo sind die Häuser am Ortasee am teuersten?", r: `Unter den OMI-Werten ist die teuerste Zone das Seeufer von Orta San Giulio mit der Insel: normale Wohnungen ${fq("orta-san-giulio", "B2", "civili", l)}, Villen ${fq("orta-san-giulio", "B2", "ville", l)} im 2. Halbjahr 2025. Es sind Schätzungen pro Zone, keine Verkaufspreise.` },
    { d: "Wie kommt man von einem Ufer zum anderen?", r: "Mit dem Linienschiff von März bis Oktober, oder mit dem Auto um das Südende des Sees herum. Von November bis Februar ist kein Liniendienst verzeichnet." },
    { d: "Welches Ufer hat das geringere Erdrutschrisiko?", r: `Unter den Gemeinden der beiden Ufer hat laut ISPRA Madonna del Sasso null Bevölkerung in Erdrutschgebieten P3–P4, San Maurizio d'Opaglio ${pct(smo.frane!, l)}, Orta ${pct(orta.frane!, l)}, Pella ${pct(pella.frane!, l)}, Pettenasco ${pct(pet.frane!, l)}. Es ist ein Gemeindewert: Für ein Haus zählen die Karten des hydrogeologischen Plans.` },
  ],
};
