import type { Lingua } from "@/lib/rotte";
import type { MondoId } from "./indice";

export type TestiMondo = { nome: string; sotto: string; inMondo: string };

// I quattro mondi del lago. Confini indicativi, tracciati da noi: lo dice ogni pagina.
export const MONDI: Record<MondoId, Record<Lingua, TestiMondo>> = {
  est: {
    it: { nome: "Sponda est", sotto: "Orta, l'isola e il Sacro Monte: la riva del sole del pomeriggio", inMondo: "sulla sponda est" },
    en: { nome: "East shore", sotto: "Orta, the island and the Sacro Monte: the shore of the afternoon sun", inMondo: "on the east shore" },
    de: { nome: "Ostufer", sotto: "Orta, die Insel und der Sacro Monte: das Ufer der Nachmittagssonne", inMondo: "am Ostufer" },
    sl: { nome: "Vzhodna obala", sotto: "Orta, otok in Sacro Monte: obala popoldanskega sonca", inMondo: "na vzhodni obali" },
  },
  ovest: {
    it: { nome: "Sponda ovest", sotto: "Pella, Ronco e i paesi a picco: la riva che guarda Orta", inMondo: "sulla sponda ovest" },
    en: { nome: "West shore", sotto: "Pella, Ronco and the cliff-top villages: the shore that looks at Orta", inMondo: "on the west shore" },
    de: { nome: "Westufer", sotto: "Pella, Ronco und die Dörfer über dem Steilhang: das Ufer mit Blick auf Orta", inMondo: "am Westufer" },
    sl: { nome: "Zahodna obala", sotto: "Pella, Ronco in vasi nad strmino: obala, ki gleda na Orto", inMondo: "na zahodni obali" },
  },
  colline: {
    it: { nome: "Colline del Mottarone", sotto: "Ville dell'Ottocento, prati e boschi sopra la riva est", inMondo: "sulle colline del Mottarone" },
    en: { nome: "Mottarone hills", sotto: "Nineteenth-century villas, meadows and woods above the east shore", inMondo: "in the Mottarone hills" },
    de: { nome: "Mottarone-Hügel", sotto: "Villen des 19. Jahrhunderts, Wiesen und Wälder über dem Ostufer", inMondo: "in den Mottarone-Hügeln" },
    sl: { nome: "Griči Mottarone", sotto: "Vile iz 19. stoletja, travniki in gozdovi nad vzhodno obalo", inMondo: "v gričih Mottarone" },
  },
  capi: {
    it: { nome: "I capi del lago", sotto: "Omegna a nord, Gozzano a sud: le cittadine, coi servizi a piedi", inMondo: "ai capi del lago" },
    en: { nome: "The lake ends", sotto: "Omegna to the north, Gozzano to the south: the small towns, services on foot", inMondo: "at the ends of the lake" },
    de: { nome: "Die Seeenden", sotto: "Omegna im Norden, Gozzano im Süden: die Kleinstädte, alles zu Fuß", inMondo: "an den Seeenden" },
    sl: { nome: "Konca jezera", sotto: "Omegna na severu, Gozzano na jugu: mesteca s storitvami peš", inMondo: "na koncih jezera" },
  },
};
