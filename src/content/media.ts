// Le immagini rielaborate con l'AI: una riga per media, con foto di partenza (Wikimedia
// Commons, licenza libera), autore, licenza, job Higgsfield e che cosa è cambiato.
// Rielaborate il 6 ottobre 2026 con Nano Banana 2 su Higgsfield (il job riporta «nano_banana_flash»).
// Regola: cambiano luce, cielo, foschia e stagione; si tolgono cartelli, auto e persone;
// la geometria (edifici, rive, barche, alberi) è quella della foto di partenza.
import grezzo from "@/data/media.json";
import type { Lingua } from "@/lib/rotte";

type Riga = { file: string; url: string; pagina: string; w: number; h: number; autore: string; licenza: string; licenza_url: string; job: string };
const R = grezzo as Record<string, Riga>;

export type Media = Riga & {
  id: string;
  luogo?: string;
  forma: "16x9" | "1x1";
  /** che cosa raffigura, per l'alt */
  soggetto: Record<Lingua, string>;
  /** che cosa è cambiato rispetto alla foto di partenza */
  cambiato: Record<Lingua, string>;
};

const LUCE = {
  sera: {
    it: "Luce calda di fine pomeriggio e cielo azzurro con poche nuvole alte al posto della luce e del cielo dell'originale.",
    en: "Warm late-afternoon light and a pale blue sky with a few high clouds in place of the original light and sky.",
    de: "Warmes Spätnachmittagslicht und hellblauer Himmel mit wenigen hohen Wolken statt Licht und Himmel des Originals.",
    sl: "Topla popoldanska svetloba in svetlo modro nebo z nekaj visokimi oblaki namesto svetlobe in neba izvirnika.",
  },
  mattino: {
    it: "Luce calda del mattino (la riva guarda a est) e cielo terso al posto del cielo grigio dell'originale.",
    en: "Warm morning light (the shore faces east) and a clear sky in place of the original grey sky.",
    de: "Warmes Morgenlicht (das Ufer blickt nach Osten) und klarer Himmel statt des grauen Himmels des Originals.",
    sl: "Topla jutranja svetloba (obala gleda proti vzhodu) in jasno nebo namesto sivega neba izvirnika.",
  },
  foschia: {
    it: "Tolta la foschia, aria tersa, luce calda di fine pomeriggio.",
    en: "Haze removed, clear air, warm late-afternoon light.",
    de: "Dunst entfernt, klare Luft, warmes Spätnachmittagslicht.",
    sl: "Odstranjena meglica, čist zrak, topla popoldanska svetloba.",
  },
} as const;
const TOLTI = {
  it: " Tolti cartelli leggibili, auto e persone dove c'erano, con ciò che plausibilmente stava dietro.",
  en: " Readable signs, cars and people removed where present, filled with what was plausibly behind them.",
  de: " Lesbare Schilder, Autos und Personen entfernt, wo vorhanden, ergänzt durch das plausibel Dahinterliegende.",
  sl: " Odstranjeni berljivi napisi, avtomobili in ljudje, kjer so bili, zapolnjeno s tem, kar je verjetno za njimi.",
};
const INVARIATO = {
  it: " Edifici, rive, barche, alberi e inquadratura sono quelli dell'originale; i dettagli piccoli e lontani sono resi dal modello e non vanno letti come documento.",
  en: " Buildings, shores, boats, trees and framing are those of the original; small distant details are rendered by the model and should not be read as a record.",
  de: " Gebäude, Ufer, Boote, Bäume und Bildausschnitt sind die des Originals; kleine, ferne Details stammen vom Modell und sind kein Dokument.",
  sl: " Stavbe, obale, čolni, drevesa in kader so iz izvirnika; majhne oddaljene podrobnosti je izrisal model in niso dokument.",
};
const ESTESO = {
  it: " Il formato 16:9 è ottenuto anche estendendo cielo e terreno ai bordi.",
  en: " The 16:9 format was partly obtained by extending sky and ground at the edges.",
  de: " Das 16:9-Format entstand teils durch Erweitern von Himmel und Boden an den Rändern.",
  sl: " Format 16 : 9 je delno dosežen z razširitvijo neba in tal ob robovih.",
};

const STAGIONE = {
  it: " Gli alberi spogli d'inverno sono resi in colori di inizio autunno.",
  en: " The bare winter trees are rendered in early-autumn colours.",
  de: " Die kahlen Winterbäume sind in Farben des Frühherbstes wiedergegeben.",
  sl: " Gola zimska drevesa so upodobljena v barvah zgodnje jeseni.",
};

const cambia = (luce: keyof typeof LUCE, extra: string[] = []): Record<Lingua, string> => {
  const out = {} as Record<Lingua, string>;
  for (const l of ["it", "en", "de", "sl"] as Lingua[]) {
    out[l] = LUCE[luce][l] + (extra.includes("tolti") ? TOLTI[l] : "") + (extra.includes("stagione") ? STAGIONE[l] : "") + INVARIATO[l] + (extra.includes("esteso") ? ESTESO[l] : "");
  }
  return out;
};
const s4 = (it: string, en: string, de: string, sl: string): Record<Lingua, string> => ({ it, en, de, sl });

const META: Record<string, Omit<Media, keyof Riga | "id">> = {
  "orta-san-giulio": { luogo: "orta-san-giulio", forma: "16x9", soggetto: s4("Orta San Giulio vista dal lago, le case di piazza Motta e i pontili", "Orta San Giulio seen from the lake, the houses of Piazza Motta and the jetties", "Orta San Giulio vom See aus, die Häuser der Piazza Motta und die Stege", "Orta San Giulio z jezera, hiše na trgu Piazza Motta in pomoli"), cambiato: cambia("sera", ["tolti"]) },
  legro: { luogo: "legro", forma: "16x9", soggetto: s4("L'oratorio di Santa Caterina a Legro", "The oratory of Santa Caterina in Legro", "Das Oratorium Santa Caterina in Legro", "Oratorij svete Katarine v Legru"), cambiato: cambia("sera", ["tolti", "esteso"]) },
  pettenasco: { luogo: "pettenasco", forma: "16x9", soggetto: s4("Pettenasco vista dall'altra riva del lago", "Pettenasco seen from across the lake", "Pettenasco vom anderen Ufer aus", "Pettenasco z nasprotne obale jezera"), cambiato: cambia("sera") },
  vacciago: { luogo: "vacciago", forma: "16x9", soggetto: s4("Il lago d'Orta dal santuario della Madonna della Bocciola, sopra Vacciago", "Lake Orta from the sanctuary of Madonna della Bocciola, above Vacciago", "Der Ortasee vom Heiligtum Madonna della Bocciola oberhalb von Vacciago", "Jezero Orta s svetišča Madonna della Bocciola nad Vacciagom"), cambiato: cambia("foschia") },
  ameno: { luogo: "ameno", forma: "16x9", soggetto: s4("La chiesa di San Bernardino ad Ameno", "The church of San Bernardino in Ameno", "Die Kirche San Bernardino in Ameno", "Cerkev San Bernardino v Amenu"), cambiato: cambia("sera", ["tolti", "esteso"]) },
  miasino: { luogo: "miasino", forma: "16x9", soggetto: s4("Miasino fra i boschi, con la chiesa e il campanile", "Miasino among the woods, with its church and bell tower", "Miasino zwischen den Wäldern, mit Kirche und Glockenturm", "Miasino med gozdovi, s cerkvijo in zvonikom"), cambiato: cambia("sera") },
  armeno: { luogo: "armeno", forma: "16x9", soggetto: s4("Coiromonte, frazione di Armeno, in autunno", "Coiromonte, a hamlet of Armeno, in autumn", "Coiromonte, Ortsteil von Armeno, im Herbst", "Coiromonte, zaselek Armena, jeseni"), cambiato: cambia("foschia") },
  "quarna-sopra": { luogo: "quarna-sopra", forma: "16x9", soggetto: s4("L'oratorio del Fontegno a Quarna Sopra", "The oratory of Fontegno in Quarna Sopra", "Das Oratorium Fontegno in Quarna Sopra", "Oratorij Fontegno v Quarni Sopra"), cambiato: cambia("sera") },
  "madonna-del-sasso": { luogo: "madonna-del-sasso", forma: "16x9", soggetto: s4("Il santuario della Madonna del Sasso sopra il lago", "The sanctuary of Madonna del Sasso above the lake", "Das Heiligtum Madonna del Sasso über dem See", "Svetišče Madonna del Sasso nad jezerom"), cambiato: cambia("sera", ["tolti", "stagione"]) },
  omegna: { luogo: "omegna", forma: "16x9", soggetto: s4("Omegna e la punta nord del lago d'Orta dall'alto", "Omegna and the north end of Lake Orta from above", "Omegna und das Nordende des Ortasees von oben", "Omegna in severni konec jezera Orta od zgoraj"), cambiato: cambia("sera") },
  nonio: { luogo: "nonio", forma: "16x9", soggetto: s4("Il masso erratico di Nonio", "The glacial erratic boulder of Nonio", "Der Findling von Nonio", "Eratični balvan v Noniu"), cambiato: cambia("sera", ["tolti"]) },
  ronco: { luogo: "ronco", forma: "16x9", soggetto: s4("Ronco di Pella sulla riva ovest del lago", "Ronco di Pella on the west shore of the lake", "Ronco di Pella am Westufer des Sees", "Ronco di Pella na zahodni obali jezera"), cambiato: cambia("mattino") },
  pella: { luogo: "pella", forma: "16x9", soggetto: s4("Pella vista dall'altra riva del lago", "Pella seen from across the lake", "Pella vom anderen Ufer aus", "Pella z nasprotne obale jezera"), cambiato: cambia("mattino") },
  "san-maurizio-dopaglio": { luogo: "san-maurizio-dopaglio", forma: "16x9", soggetto: s4("San Maurizio d'Opaglio e la punta sud del lago dalla Madonna del Sasso", "San Maurizio d'Opaglio and the south end of the lake from Madonna del Sasso", "San Maurizio d'Opaglio und das Südende des Sees von Madonna del Sasso aus", "San Maurizio d'Opaglio in južni konec jezera z Madonne del Sasso"), cambiato: cambia("foschia") },
  gozzano: { luogo: "gozzano", forma: "16x9", soggetto: s4("La chiesa della Madonna del Boggio a Gozzano", "The church of Madonna del Boggio in Gozzano", "Die Kirche Madonna del Boggio in Gozzano", "Cerkev Madonna del Boggio v Gozzanu"), cambiato: cambia("sera", ["tolti", "esteso"]) },
  "bolzano-novarese": { luogo: "bolzano-novarese", forma: "16x9", soggetto: s4("Una cappella fra i giardini di Bolzano Novarese", "A chapel among the gardens of Bolzano Novarese", "Eine Kapelle zwischen den Gärten von Bolzano Novarese", "Kapela med vrtovi v Bolzanu Novarese"), cambiato: cambia("sera", ["esteso"]) },
  "lente-isola": { forma: "1x1", soggetto: s4("L'isola di San Giulio con la basilica e il campanile", "The island of San Giulio with its basilica and bell tower", "Die Insel San Giulio mit Basilika und Glockenturm", "Otok San Giulio z baziliko in zvonikom"), cambiato: cambia("sera") },
  "lente-sacro-monte": { forma: "1x1", soggetto: s4("Una cappella del Sacro Monte di Orta fra gli alberi", "A chapel of the Sacro Monte di Orta among the trees", "Eine Kapelle des Sacro Monte di Orta zwischen den Bäumen", "Kapela Sacro Monte di Orta med drevesi"), cambiato: cambia("sera", ["tolti"]) },
  "lente-battelli": { forma: "1x1", soggetto: s4("I pontili dei battelli in piazza Motta, a Orta", "The boat jetties at Piazza Motta, Orta", "Die Bootsstege an der Piazza Motta in Orta", "Pomoli za čolne na trgu Piazza Motta v Orti"), cambiato: cambia("sera", ["tolti"]) },
};

export const MEDIA: Media[] = Object.entries(META).map(([id, m]) => ({ ...R[id], ...m, id }));
export const mediaDi = (id: string) => MEDIA.find((m) => m.id === id);
export const mediaDelLuogo = (luogo: string) => MEDIA.find((m) => m.luogo === luogo);
export const src = (m: Media, taglio: "16x9.1280" | "16x9.2400" | "4x3.960" | "1x1.720") => `/media/${m.id}/${m.id}.${taglio}.webp`;
export const DATA_MEDIA = "2026-10-06";
