import type { Lingua } from "@/lib/rotte";

type UI = {
  indice: { titolo: string; descrizione: string; occhiello: (l: number, m: number) => string; h1: string; lead: string; cartaOcc: string; cartaH2: string; cartaLead: string; tutto: (m: string) => string; distanzeOcc: string; distanzeH2: string; distanzeTesto: string };
  daMilano: string; inAuto: string; quota: string; abitanti: string; frazione: (c: string) => string; sopraLago: (m: number) => string;
  briciole: string;
  mondoChip: (n: number, a: string, b: string) => string;
  inUnMinuto: string; iLuoghi: string; luogoPerLuogo: (m: string) => string; comeSiVive: string; tempiOcc: string; tempiH2: string; tempiCaption: (m: string) => string;
  onestamente: string; perChiH2: string; faPerVoi: string; altrove: string; confrontoOcc: string; domande: string; domandeH2: string; fonti: string; fontiLetta: string;
  confini: string; osrmNota: string;
  inUnaFrase: string; scheda: string; schedaAuto: string; da: string; tempo: string; km: string; schedaNota: string;
  quotaNota: string; quotaIntorno: (a: number, b: number) => string; soleTitolo: string; soleTesto: (h: string, a: string, b: string, teo: string) => string; soleNota: string;
  serviziTitolo: string; stazione: string; imbarcadero: string; scuole: string; nessunaScuola: string; lineaAria: string; rischiTitolo: string; frane: string; alluvioni: string; rischiNota: string;
  vicinoOcc: string; viciniH2: (n: string) => string; viciniCaption: (n: string) => string; viciniNota: string; tutteDistanze: string;
  vivere: (n: string) => string; prezziOcc: string; prezziH2: (n: string) => string; prezziNota: string; zona: string; tipologia: string; eurMq: string; affitto: string; variazione: string;
  faPerVoiH2: (n: string) => string; precedente: string; successiva: string; daMilanoBreve: string;
  ctaPCh2: (dove: string) => string; ctaPCt: string; ctaPCb: string; ctaProp: (dove: string) => string;
  mondi: string;
};

const it: UI = {
  indice: {
    titolo: "Lago d'Orta: i luoghi, sponda per sponda", descrizione: "16 luoghi intorno al lago d'Orta in 4 mondi, da 67 a 96 minuti da Milano: tempi, quote, sole d'inverno e quotazioni OMI, con le fonti.",
    occhiello: (l, m) => `${l} luoghi · ${m} mondi`, h1: "Il lago d'Orta, luogo per luogo",
    lead: "Sedici luoghi fra 67 e 96 minuti da piazza del Duomo: il borgo e l'isola, la riva di fronte, le colline sotto il Mottarone e le due cittadine ai capi del lago. Ognuno con i suoi tempi, la sua quota, il suo sole d'inverno e le quotazioni dell'Agenzia delle Entrate.",
    cartaOcc: "La carta", cartaH2: "Quattro mondi intorno a un lago di diciotto chilometri quadrati",
    cartaLead: "Le linee sono isoipse vere ogni cinquanta metri; sotto ogni nome, i minuti in auto da piazza del Duomo senza traffico.",
    tutto: (m) => `Tutto su ${m}`,
    distanzeOcc: "Distanze", distanzeH2: "Il lago misurato in minuti", distanzeTesto: "Da Milano, Malpensa, Lugano, Zurigo, Ginevra, Monaco e altre città: ogni luogo, ogni tempo.",
  },
  daMilano: "da piazza del Duomo, in auto", inAuto: "in auto", quota: "quota", abitanti: "abitanti", frazione: (c) => `frazione di ${c}`, sopraLago: (m) => `${m} m sopra il lago`,
  briciole: "Luoghi",
  mondoChip: (n, a, b) => `${n} luoghi · da ${a} a ${b} da Milano`,
  inUnMinuto: "In un minuto", iLuoghi: "I luoghi", luogoPerLuogo: (m) => `${m}, luogo per luogo`, comeSiVive: "Come si vive",
  tempiOcc: "Tempi e quote", tempiH2: "Quanto ci vuole, da casa vostra", tempiCaption: (m) => `${m}: tempi in auto dalle città di partenza e quota`,
  onestamente: "Onestamente", perChiH2: "Per chi è, per chi no", faPerVoi: "Fa per voi se", altrove: "Guardate altrove se", confrontoOcc: "A confronto",
  domande: "Domande", domandeH2: "Le domande che ci fanno", fonti: "Fonti", fontiLetta: "letta il",
  confini: "Confini dei mondi indicativi, tracciati da noi.", osrmNota: "In auto, senza traffico · OSRM su dati OpenStreetMap, misurato il 6 ottobre 2026.",
  inUnaFrase: "In una frase", scheda: "Scheda dati", schedaAuto: "In auto, senza traffico", da: "Da", tempo: "Tempo in auto", km: "Chilometri",
  schedaNota: "OSRM su dati OpenStreetMap, senza traffico, misurati il 6 ottobre 2026. Arrivo al centro del luogo.",
  quotaNota: "Copernicus DEM (GLO-90) per il punto; Terrain Tiles per i dintorni (raggio 400 m). Quota del terreno, non degli edifici.",
  quotaIntorno: (a, b) => `da ${a} m a ${b} m nei dintorni del punto`,
  soleTitolo: "Sole il 21 dicembre", soleTesto: (h, a, b, teo) => `${h} di sole diretto, dalle ${a} alle ${b} (su ${teo} di giorno teorico)`,
  soleNota: "Calcolo nostro sul rilievo (Terrain Tiles): conta solo la montagna, non edifici né alberi.",
  serviziTitolo: "Treno, battello, scuole", stazione: "Stazione più vicina", imbarcadero: "Imbarcadero più vicino", scuole: "Scuole statali nel comune", nessunaScuola: "nessuna scuola statale nel comune", lineaAria: "in linea d'aria",
  rischiTitolo: "Frane e alluvioni (comune)", frane: "abitanti in aree a pericolosità di frana elevata o molto elevata", alluvioni: "abitanti in aree a pericolosità idraulica media",
  rischiNota: "ISPRA IdroGEO, percentuali sull'intero comune (popolazione al censimento 2021), non sul punto.",
  vicinoOcc: "Distanze", viciniH2: (n) => `${n} e i suoi vicini`, viciniCaption: (n) => `Da ${n} agli altri luoghi, in auto`,
  viciniNota: "OSRM senza traffico, misurato il 6 ottobre 2026. Sul lago la strada gira intorno all'acqua: da una riva all'altra l'auto impiega più del battello.",
  tutteDistanze: "Tutte le distanze, da ogni città di partenza",
  vivere: (n) => `Vivere ${n}`, prezziOcc: "Quotazioni", prezziH2: (n) => `Che cosa dicono le quotazioni ${n}`,
  prezziNota: "Agenzia delle Entrate, OMI, 2° semestre 2025, stato conservativo normale; variazione sul 2° semestre 2024. Sono intervalli stimati per zona, non prezzi di singole compravendite.",
  zona: "Zona OMI", tipologia: "Tipologia", eurMq: "€/m²", affitto: "Affitto €/m² al mese", variazione: "Var. sul 2024",
  faPerVoiH2: (n) => `${n} fa per voi?`, precedente: "Luogo precedente", successiva: "Luogo successivo", daMilanoBreve: "da Milano",
  ctaPCh2: (d) => `Avvisatemi quando entrano case ${d}.`, ctaPCt: "Oggi la collezione del lago è vuota: lasciateci un indirizzo e le zone, vi scriviamo quando entra la prima casa.", ctaPCb: "Private Collection: avvisatemi per primi",
  ctaProp: (d) => `Avete una casa ${d}? Ecco come la racconteremmo`,
  mondi: "I mondi",
};

const en: UI = {
  indice: {
    titolo: "Lake Orta: the places, shore by shore", descrizione: "16 places around Lake Orta in 4 worlds, 67 to 96 minutes from Milan: drive times, elevations, winter sun and OMI price quotations, with sources.",
    occhiello: (l, m) => `${l} places · ${m} worlds`, h1: "Lake Orta, place by place",
    lead: "Sixteen places between 67 and 96 minutes from Piazza del Duomo: the old town and the island, the opposite shore, the hills below the Mottarone and the two small towns at the ends of the lake. Each with its drive times, elevation, winter sun and the Italian Revenue Agency's quotations.",
    cartaOcc: "The map", cartaH2: "Four worlds around a lake of eighteen square kilometres",
    cartaLead: "The lines are real contours every fifty metres; under each name, the minutes by car from Piazza del Duomo without traffic.",
    tutto: (m) => `All about ${m}`,
    distanzeOcc: "Distances", distanzeH2: "The lake measured in minutes", distanzeTesto: "From Milan, Malpensa, Lugano, Zurich, Geneva, Munich and other cities: every place, every time.",
  },
  daMilano: "from Piazza del Duomo, by car", inAuto: "by car", quota: "elevation", abitanti: "residents", frazione: (c) => `hamlet of ${c}`, sopraLago: (m) => `${m} m above the lake`,
  briciole: "Places",
  mondoChip: (n, a, b) => `${n} places · ${a} to ${b} from Milan`,
  inUnMinuto: "In a minute", iLuoghi: "The places", luogoPerLuogo: (m) => `${m}, place by place`, comeSiVive: "How life is",
  tempiOcc: "Times and elevations", tempiH2: "How long it takes, from your home", tempiCaption: (m) => `${m}: drive times from the starting cities and elevation`,
  onestamente: "Honestly", perChiH2: "Who it suits, who it doesn't", faPerVoi: "It suits you if", altrove: "Look elsewhere if", confrontoOcc: "Compared",
  domande: "Questions", domandeH2: "The questions we are asked", fonti: "Sources", fontiLetta: "read on",
  confini: "World boundaries are indicative, drawn by us.", osrmNota: "By car, without traffic · OSRM on OpenStreetMap data, measured on 6 October 2026.",
  inUnaFrase: "In one sentence", scheda: "Data sheet", schedaAuto: "By car, without traffic", da: "From", tempo: "Drive time", km: "Kilometres",
  schedaNota: "OSRM on OpenStreetMap data, without traffic, measured on 6 October 2026. Arrival at the centre of the place.",
  quotaNota: "Copernicus DEM (GLO-90) for the point; Terrain Tiles for the surroundings (400 m radius). Ground elevation, not buildings.",
  quotaIntorno: (a, b) => `from ${a} m to ${b} m around the point`,
  soleTitolo: "Sun on 21 December", soleTesto: (h, a, b, teo) => `${h} of direct sun, from ${a} to ${b} (out of ${teo} of theoretical daylight)`,
  soleNota: "Our own calculation on the terrain (Terrain Tiles): only the mountains count, not buildings or trees.",
  serviziTitolo: "Train, boat, schools", stazione: "Nearest station", imbarcadero: "Nearest pier", scuole: "State schools in the municipality", nessunaScuola: "no state school in the municipality", lineaAria: "as the crow flies",
  rischiTitolo: "Landslides and floods (municipality)", frane: "of residents in high or very high landslide hazard areas", alluvioni: "of residents in medium flood hazard areas",
  rischiNota: "ISPRA IdroGEO, percentages for the whole municipality (2021 census population), not for the point.",
  vicinoOcc: "Distances", viciniH2: (n) => `${n} and its neighbours`, viciniCaption: (n) => `From ${n} to the other places, by car`,
  viciniNota: "OSRM without traffic, measured on 6 October 2026. On the lake the road goes round the water: from one shore to the other the car takes longer than the boat.",
  tutteDistanze: "All distances, from every starting city",
  vivere: (n) => `Living ${n}`, prezziOcc: "Quotations", prezziH2: (n) => `What the quotations say ${n}`,
  prezziNota: "Italian Revenue Agency, OMI, 2nd half of 2025, normal condition; change on the 2nd half of 2024. These are estimated ranges per zone, not individual sale prices.",
  zona: "OMI zone", tipologia: "Type", eurMq: "€/m²", affitto: "Rent €/m² per month", variazione: "Change on 2024",
  faPerVoiH2: (n) => `Does ${n} suit you?`, precedente: "Previous place", successiva: "Next place", daMilanoBreve: "from Milan",
  ctaPCh2: (d) => `Tell me when homes ${d} arrive.`, ctaPCt: "Today the lake collection is empty: leave us an address and your areas, and we will write when the first home arrives.", ctaPCb: "Private Collection: tell me first",
  ctaProp: (d) => `Do you own a home ${d}? This is how we would present it`,
  mondi: "The worlds",
};

const de: UI = {
  indice: {
    titolo: "Ortasee: die Orte, Ufer für Ufer", descrizione: "16 Orte rund um den Ortasee in 4 Welten, 67 bis 96 Minuten von Mailand: Fahrzeiten, Höhen, Wintersonne und OMI-Richtwerte, mit Quellen.",
    occhiello: (l, m) => `${l} Orte · ${m} Welten`, h1: "Der Ortasee, Ort für Ort",
    lead: "Sechzehn Orte zwischen 67 und 96 Minuten von der Piazza del Duomo: der Ort Orta und die Insel, das gegenüberliegende Ufer, die Hügel unter dem Mottarone und die beiden Kleinstädte an den Seeenden. Jeder mit seinen Fahrzeiten, seiner Höhe, seiner Wintersonne und den Richtwerten der italienischen Steuerbehörde.",
    cartaOcc: "Die Karte", cartaH2: "Vier Welten um einen See von achtzehn Quadratkilometern",
    cartaLead: "Die Linien sind echte Höhenlinien alle fünfzig Meter; unter jedem Namen die Fahrminuten von der Piazza del Duomo ohne Verkehr.",
    tutto: (m) => `Alles über ${m}`,
    distanzeOcc: "Entfernungen", distanzeH2: "Der See, gemessen in Minuten", distanzeTesto: "Aus Mailand, Malpensa, Lugano, Zürich, Genf, München und anderen Städten: jeder Ort, jede Zeit.",
  },
  daMilano: "von der Piazza del Duomo, mit dem Auto", inAuto: "mit dem Auto", quota: "Höhe", abitanti: "Einwohner", frazione: (c) => `Ortsteil von ${c}`, sopraLago: (m) => `${m} m über dem See`,
  briciole: "Orte",
  mondoChip: (n, a, b) => `${n} Orte · ${a} bis ${b} von Mailand`,
  inUnMinuto: "In einer Minute", iLuoghi: "Die Orte", luogoPerLuogo: (m) => `${m}, Ort für Ort`, comeSiVive: "Wie man lebt",
  tempiOcc: "Zeiten und Höhen", tempiH2: "Wie lange es dauert, von zu Hause", tempiCaption: (m) => `${m}: Fahrzeiten aus den Ausgangsstädten und Höhe`,
  onestamente: "Ehrlich gesagt", perChiH2: "Für wen es passt, für wen nicht", faPerVoi: "Passt zu Ihnen, wenn", altrove: "Schauen Sie woanders, wenn", confrontoOcc: "Im Vergleich",
  domande: "Fragen", domandeH2: "Die Fragen, die man uns stellt", fonti: "Quellen", fontiLetta: "gelesen am",
  confini: "Die Grenzen der Welten sind ungefähr, von uns gezogen.", osrmNota: "Mit dem Auto, ohne Verkehr · OSRM auf OpenStreetMap-Daten, gemessen am 6. Oktober 2026.",
  inUnaFrase: "In einem Satz", scheda: "Datenblatt", schedaAuto: "Mit dem Auto, ohne Verkehr", da: "Von", tempo: "Fahrzeit", km: "Kilometer",
  schedaNota: "OSRM auf OpenStreetMap-Daten, ohne Verkehr, gemessen am 6. Oktober 2026. Ankunft im Ortszentrum.",
  quotaNota: "Copernicus DEM (GLO-90) für den Punkt; Terrain Tiles für die Umgebung (Radius 400 m). Geländehöhe, nicht Gebäude.",
  quotaIntorno: (a, b) => `von ${a} m bis ${b} m rund um den Punkt`,
  soleTitolo: "Sonne am 21. Dezember", soleTesto: (h, a, b, teo) => `${h} direkte Sonne, von ${a} bis ${b} Uhr (von ${teo} theoretischem Tageslicht)`,
  soleNota: "Unsere eigene Berechnung aus dem Gelände (Terrain Tiles): Es zählen nur die Berge, weder Gebäude noch Bäume.",
  serviziTitolo: "Zug, Schiff, Schulen", stazione: "Nächster Bahnhof", imbarcadero: "Nächste Anlegestelle", scuole: "Staatliche Schulen in der Gemeinde", nessunaScuola: "keine staatliche Schule in der Gemeinde", lineaAria: "Luftlinie",
  rischiTitolo: "Erdrutsche und Hochwasser (Gemeinde)", frane: "der Einwohner in Gebieten mit hoher oder sehr hoher Rutschgefahr", alluvioni: "der Einwohner in Gebieten mit mittlerer Hochwassergefahr",
  rischiNota: "ISPRA IdroGEO, Anteile für die ganze Gemeinde (Bevölkerung laut Zensus 2021), nicht für den Punkt.",
  vicinoOcc: "Entfernungen", viciniH2: (n) => `${n} und seine Nachbarn`, viciniCaption: (n) => `Von ${n} zu den anderen Orten, mit dem Auto`,
  viciniNota: "OSRM ohne Verkehr, gemessen am 6. Oktober 2026. Am See führt die Straße um das Wasser herum: Von einem Ufer zum anderen braucht das Auto länger als das Schiff.",
  tutteDistanze: "Alle Entfernungen, aus jeder Ausgangsstadt",
  vivere: (n) => `Leben ${n}`, prezziOcc: "Richtwerte", prezziH2: (n) => `Was die Richtwerte ${n} sagen`,
  prezziNota: "Italienische Steuerbehörde, OMI, 2. Halbjahr 2025, normaler Zustand; Veränderung zum 2. Halbjahr 2024. Geschätzte Spannen je Zone, keine Preise einzelner Verkäufe.",
  zona: "OMI-Zone", tipologia: "Typ", eurMq: "€/m²", affitto: "Miete €/m² pro Monat", variazione: "Veränd. zu 2024",
  faPerVoiH2: (n) => `Passt ${n} zu Ihnen?`, precedente: "Vorheriger Ort", successiva: "Nächster Ort", daMilanoBreve: "von Mailand",
  ctaPCh2: (d) => `Benachrichtigen Sie mich, wenn Häuser ${d} dazukommen.`, ctaPCt: "Heute ist die Collection am See leer: Hinterlassen Sie uns eine Adresse und Ihre Gegenden, wir schreiben Ihnen, wenn das erste Haus dazukommt.", ctaPCb: "Private Collection: zuerst benachrichtigen",
  ctaProp: (d) => `Sie besitzen ein Haus ${d}? So würden wir es präsentieren`,
  mondi: "Die Welten",
};

const sl: UI = {
  indice: {
    titolo: "Jezero Orta: kraji, obala za obalo", descrizione: "16 krajev okoli jezera Orta v 4 svetovih, 67 do 96 minut od Milana: časi vožnje, nadmorske višine, zimsko sonce in ocene OMI, z viri.",
    occhiello: (l, m) => `${l} krajev · ${m} svetovi`, h1: "Jezero Orta, kraj za krajem",
    lead: "Šestnajst krajev med 67 in 96 minutami od trga Piazza del Duomo: staro mesto in otok, nasprotna obala, griči pod Mottaronejem in mesteci na koncih jezera. Vsak s svojimi časi vožnje, nadmorsko višino, zimskim soncem in ocenami italijanske davčne uprave.",
    cartaOcc: "Zemljevid", cartaH2: "Štirje svetovi okoli jezera z osemnajstimi kvadratnimi kilometri",
    cartaLead: "Črte so prave plastnice na vsakih petdeset metrov; pod vsakim imenom minute vožnje od trga Piazza del Duomo brez prometa.",
    tutto: (m) => `Vse o: ${m}`,
    distanzeOcc: "Razdalje", distanzeH2: "Jezero, izmerjeno v minutah", distanzeTesto: "Iz Milana, Malpense, Lugana, Züricha, Ženeve, Münchna in drugih mest: vsak kraj, vsak čas.",
  },
  daMilano: "od trga Piazza del Duomo, z avtom", inAuto: "z avtom", quota: "nadmorska višina", abitanti: "prebivalcev", frazione: (c) => `zaselek občine ${c}`, sopraLago: (m) => `${m} m nad jezerom`,
  briciole: "Kraji",
  mondoChip: (n, a, b) => `${n} krajev · od ${a} do ${b} od Milana`,
  inUnMinuto: "V minuti", iLuoghi: "Kraji", luogoPerLuogo: (m) => `${m}, kraj za krajem`, comeSiVive: "Kako se živi",
  tempiOcc: "Časi in višine", tempiH2: "Koliko traja, od doma", tempiCaption: (m) => `${m}: časi vožnje iz izhodiščnih mest in nadmorska višina`,
  onestamente: "Iskreno", perChiH2: "Za koga je, za koga ne", faPerVoi: "Je za vas, če", altrove: "Poglejte drugam, če", confrontoOcc: "V primerjavi",
  domande: "Vprašanja", domandeH2: "Vprašanja, ki nam jih postavljate", fonti: "Viri", fontiLetta: "prebrano",
  confini: "Meje svetov so okvirne, zarisali smo jih sami.", osrmNota: "Z avtom, brez prometa · OSRM na podatkih OpenStreetMap, izmerjeno 6. oktobra 2026.",
  inUnaFrase: "V enem stavku", scheda: "Podatkovni list", schedaAuto: "Z avtom, brez prometa", da: "Od", tempo: "Čas vožnje", km: "Kilometri",
  schedaNota: "OSRM na podatkih OpenStreetMap, brez prometa, izmerjeno 6. oktobra 2026. Prihod v središče kraja.",
  quotaNota: "Copernicus DEM (GLO-90) za točko; Terrain Tiles za okolico (polmer 400 m). Višina terena, ne stavb.",
  quotaIntorno: (a, b) => `od ${a} m do ${b} m okoli točke`,
  soleTitolo: "Sonce 21. decembra", soleTesto: (h, a, b, teo) => `${h} neposrednega sonca, od ${a} do ${b} (od ${teo} teoretične dnevne svetlobe)`,
  soleNota: "Naš izračun na reliefu (Terrain Tiles): štejejo samo gore, ne stavbe ne drevesa.",
  serviziTitolo: "Vlak, ladja, šole", stazione: "Najbližja postaja", imbarcadero: "Najbližji pristan", scuole: "Državne šole v občini", nessunaScuola: "v občini ni državne šole", lineaAria: "zračne razdalje",
  rischiTitolo: "Plazovi in poplave (občina)", frane: "prebivalcev na območjih z visoko ali zelo visoko nevarnostjo plazov", alluvioni: "prebivalcev na območjih s srednjo poplavno nevarnostjo",
  rischiNota: "ISPRA IdroGEO, deleži za celotno občino (prebivalstvo ob popisu 2021), ne za točko.",
  vicinoOcc: "Razdalje", viciniH2: (n) => `${n} in sosedje`, viciniCaption: (n) => `Iz kraja ${n} do drugih krajev, z avtom`,
  viciniNota: "OSRM brez prometa, izmerjeno 6. oktobra 2026. Ob jezeru cesta obide vodo: z ene obale na drugo potrebuje avto več časa kot ladja.",
  tutteDistanze: "Vse razdalje, iz vsakega izhodiščnega mesta",
  vivere: (n) => `Življenje ${n}`, prezziOcc: "Ocene vrednosti", prezziH2: (n) => `Kaj povedo ocene ${n}`,
  prezziNota: "Italijanska davčna uprava, OMI, 2. polletje 2025, običajno stanje; sprememba glede na 2. polletje 2024. To so ocenjeni razponi po conah, ne cene posameznih prodaj.",
  zona: "Cona OMI", tipologia: "Vrsta", eurMq: "€/m²", affitto: "Najemnina €/m² na mesec", variazione: "Spr. glede na 2024",
  faPerVoiH2: (n) => `Je ${n} za vas?`, precedente: "Prejšnji kraj", successiva: "Naslednji kraj", daMilanoBreve: "od Milana",
  ctaPCh2: (d) => `Obvestite me, ko pridejo hiše ${d}.`, ctaPCt: "Danes je zbirka ob jezeru prazna: pustite nam naslov in območja, pisali vam bomo, ko pride prva hiša.", ctaPCb: "Private Collection: obvestite me prvega",
  ctaProp: (d) => `Imate hišo ${d}? Tako bi jo predstavili`,
  mondi: "Svetovi",
};

export const UI_LUOGHI: Record<Lingua, UI> = { it, en, de, sl };
