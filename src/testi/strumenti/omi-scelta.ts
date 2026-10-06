// Testi del selettore OMI condiviso da «Quanto vale casa tua» e «Dalla rendita catastale al mercato».
import type { Lingua } from "@/lib/rotte";
import type { Tipologia } from "@/lib/strumenti/quotazioni";

export type TestiSceltaOmi = {
  comune: string; zona: string; zonaAiuto: string; tipologia: string; tipologie: Record<Tipologia, string>;
  m2: string; m2Aiuto: string; fasce: Record<string, string>; nonQuotata: string;
};

export const SCELTA_OMI: Record<Lingua, TestiSceltaOmi> = {
  it: {
    comune: "Comune", zona: "Zona OMI", zonaAiuto: "Le zone sono descritte a parole: i perimetri ufficiali si consultano sulla mappa GEOPOI dell'Agenzia. Scegliete la descrizione più vicina alla vostra casa.",
    tipologia: "Tipologia", tipologie: { ville: "villa o villino", civili: "abitazione civile", economiche: "abitazione economica" },
    m2: "Superficie commerciale (lorda)", m2Aiuto: "Le quotazioni OMI sono su superficie lorda: muri compresi, balconi e pertinenze in parte. Non è la superficie calpestabile.",
    fasce: { Centrale: "centrale", Semicentrale: "semicentrale", Periferica: "periferica", Suburbana: "suburbana", Extraurbana: "extraurbana" },
    nonQuotata: "In questa zona l'OMI non quota questa tipologia: sceglietene un'altra.",
  },
  en: {
    comune: "Municipality", zona: "OMI zone", zonaAiuto: "Zones are described in words: the official boundaries are on the Agency's GEOPOI map. Choose the description closest to your home.",
    tipologia: "Type", tipologie: { ville: "villa or detached house", civili: "standard home", economiche: "basic home" },
    m2: "Gross floor area", m2Aiuto: "OMI quotations are on gross area: walls included, balconies and annexes in part. It is not the net walkable area.",
    fasce: { Centrale: "central", Semicentrale: "semi-central", Periferica: "outskirts", Suburbana: "suburban", Extraurbana: "rural" },
    nonQuotata: "OMI does not quote this type in this zone: choose another.",
  },
  de: {
    comune: "Gemeinde", zona: "OMI-Zone", zonaAiuto: "Die Zonen sind mit Worten beschrieben: Die amtlichen Grenzen zeigt die GEOPOI-Karte der Behörde. Wählen Sie die Beschreibung, die Ihrem Haus am nächsten kommt.",
    tipologia: "Typ", tipologie: { ville: "Villa oder Einfamilienhaus", civili: "Wohnung oder Haus, mittlerer Standard", economiche: "einfache Wohnung" },
    m2: "Bruttofläche", m2Aiuto: "OMI-Richtwerte gelten für die Bruttofläche: Mauern inklusive, Balkone und Zubehör anteilig. Es ist nicht die Wohnfläche.",
    fasce: { Centrale: "zentral", Semicentrale: "halbzentral", Periferica: "Randlage", Suburbana: "Vorort", Extraurbana: "ländlich" },
    nonQuotata: "In dieser Zone gibt es für diesen Typ keinen OMI-Wert: Wählen Sie einen anderen.",
  },
  sl: {
    comune: "Občina", zona: "Cona OMI", zonaAiuto: "Cone so opisane z besedami: uradne meje so na zemljevidu GEOPOI davčne uprave. Izberite opis, ki je najbližji vaši hiši.",
    tipologia: "Vrsta", tipologie: { ville: "vila ali samostojna hiša", civili: "stanovanje ali hiša srednjega standarda", economiche: "skromnejše stanovanje" },
    m2: "Bruto (komercialna) površina", m2Aiuto: "Ocene OMI veljajo za bruto površino: z zidovi, deloma z balkoni in pripadajočimi prostori. To ni neto tlorisna površina.",
    fasce: { Centrale: "središče", Semicentrale: "polsredišče", Periferica: "obrobje", Suburbana: "predmestje", Extraurbana: "podeželje" },
    nonQuotata: "V tej coni OMI te vrste ne ocenjuje: izberite drugo.",
  },
};
