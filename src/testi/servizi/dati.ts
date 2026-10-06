import type { Lingua } from "@/lib/rotte";

// Dati e metodo. Le fonti vengono da ~/dev/.wt/ortavillas/dati/FONTI.md e fatti.md (estrazione
// del 6 ottobre 2026); quello che lì non è verificato qui resta detto come non verificato.
export type Fonte = { id: string; titolo: string; data: string; metodo: string; licenza: string; link?: [string, string] };
export type TestiDati = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string; edizione: string;
  indice: { origine: string; fonti: string; file: string; citare: string };
  origine: string[];
  fontiIntro: string;
  fonti: Fonte[];
  file: { intro: string; distanze: string; quote: string; colonne: string; licenzaDistanze: string; licenzaQuote: string; nota: string };
  citare: { intro: string; testo: string; aiuto: string };
};

const L = {
  osrm: ["project-osrm.org", "https://project-osrm.org/"] as [string, string],
  osm: ["openstreetmap.org/copyright", "https://www.openstreetmap.org/copyright"] as [string, string],
  tiles: ["registry.opendata.aws/terrain-tiles", "https://registry.opendata.aws/terrain-tiles/"] as [string, string],
  openmeteo: ["open-meteo.com", "https://open-meteo.com/"] as [string, string],
  omi: ["agenziaentrate.gov.it · OMI", "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm"] as [string, string],
  ntn: ["agenziaentrate.gov.it · volumi di compravendita", "https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/omi/banche-dati/volumi-di-compravendita"] as [string, string],
  istat: ["demo.istat.it", "https://demo.istat.it/"] as [string, string],
  mim: ["dati.istruzione.it/opendata", "https://dati.istruzione.it/opendata/"] as [string, string],
  ispra: ["idrogeo.isprambiente.it", "https://idrogeo.isprambiente.it/"] as [string, string],
  eea: ["discodata.eea.europa.eu", "https://discodata.eea.europa.eu/"] as [string, string],
  arpa: ["arpa.piemonte.it", "https://www.arpa.piemonte.it/media/9636"] as [string, string],
  pta: ["regione.piemonte.it · PTA, monografia L3", "https://www.regione.piemonte.it/web/sites/default/files/media/documenti/2018-11/l3_orta.pdf"] as [string, string],
};

const it: TestiDati = {
  titolo: "Dati e metodo · Edizione 01 · Ottobre 2026",
  descrizione: "Le fonti dell'atlante del lago d'Orta con metodo, licenza e data di estrazione: OSRM e OpenStreetMap, Copernicus, OMI, ISTAT, ISPRA, EEA. I file aperti e come citare.",
  briciola: "Dati e metodo",
  occhiello: "Dati e metodo",
  h1: "Da dove vengono i numeri.",
  lead: "Ogni cifra di questo sito arriva da una fonte pubblica, da un nostro calcolo dichiarato o dal CRM di TriesteVillas, con la data dell'estrazione. Qui il metodo, le licenze e i file aperti.",
  edizione: "Edizione 01 · Ottobre 2026 · estrazione del 6 ottobre 2026",
  indice: { origine: "Un solo punto di partenza", fonti: "Le fonti", file: "I file aperti", citare: "Come citare" },
  origine: [
    "Ogni tempo «da Milano» parte da un solo punto: piazza del Duomo, 45.464° N · 9.191° E (OpenStreetMap, via Nominatim). Il secondo riferimento è Malpensa Terminal 1, 45.627° N · 8.711° E, la stazione ferroviaria sotto il terminal.",
    "Gli arrivi sono il punto del paese in OpenStreetMap: il nodo del capoluogo per i comuni, il nodo della frazione per Legro, Ronco e Vacciago, il municipio per Madonna del Sasso. Ogni punto porta nei dati il suo identificativo OSM.",
  ],
  fontiIntro: "Per ogni fonte: che cosa misura, come la usiamo, la licenza e la data.",
  fonti: [
    { id: "tempi", titolo: "Tempi e distanze in auto", data: "misurato il 6 ottobre 2026", metodo: "OSRM, il motore di instradamento libero, sul server dimostrativo pubblico; profilo auto, senza traffico. 11 città di partenza per 16 luoghi, più 10 percorsi di confronto verso gli altri laghi. Sono tempi di solito ottimistici: non contano code (tangenziali di Milano, A8 nelle ore di punta), cantieri, controlli al confine svizzero né soste.", licenza: "Dati © OpenStreetMap contributors, ODbL 1.0", link: L.osrm },
    { id: "luoghi", titolo: "Punti dei luoghi", data: "estratto il 6 ottobre 2026", metodo: "OpenStreetMap Nominatim, una richiesta ogni 1,2–1,3 secondi; punti controllati sui nodi «place» dello stesso estratto.", licenza: "© OpenStreetMap contributors, ODbL 1.0", link: L.osm },
    { id: "quote", titolo: "Quote del terreno", data: "estratto il 6 ottobre 2026", metodo: "La quota del punto viene da Copernicus DEM GLO-90 (circa 90 m) attraverso Open-Meteo; minima, mediana e massima nel raggio di 400 m dalle Terrain Tiles di AWS (EU-DEM e SRTM, zoom 12, circa 27 m per pixel). È la quota del terreno, non degli edifici. Le due fonti differiscono di 0–13 m sui 16 punti.", licenza: "Copernicus DEM © DLR e/o Airbus, uso libero con attribuzione; Open-Meteo CC BY 4.0; Terrain Tiles: Copernicus, NASA, Mapzen", link: L.tiles },
    { id: "rilievo", titolo: "Il rilievo e le curve di livello", data: "estratto il 6 ottobre 2026", metodo: "Griglia di 181 × 181 quote sul riquadro 45.70–45.95° N, 8.25–8.55° E, dalle Terrain Tiles; curve ogni 100 m calcolate da noi. I modelli a 30–90 m smussano le cime: la vetta del Mottarone esce circa 25 m più bassa del vero.", licenza: "Copernicus (EU-DEM), NASA (SRTM), Mapzen", link: L.tiles },
    { id: "sole", titolo: "Il sole d'inverno", data: "calcolato il 6 ottobre 2026", metodo: "Calcolo nostro: l'orizzonte di ogni luogo dal rilievo, ogni 2° di direzione fino a 15 km, con curvatura e rifrazione; posizione del sole con le formule NOAA. Minuti di sole diretto il 21 dicembre. Nessun edificio, albero o nuvola: è il massimo che il rilievo concede.", licenza: "Calcolo di TriesteVillas srl sui dati del rilievo" },
    { id: "omi", titolo: "Quotazioni immobiliari OMI", data: "estratto il 6 ottobre 2026", metodo: "Banca dati delle quotazioni dell'Agenzia delle Entrate, servizio pubblico di consultazione: 13 comuni, tutte le zone, destinazione residenziale, 2° semestre 2025 (l'ultimo pubblicato) e 2° semestre 2024. Non sono prezzi di vendita: sono intervalli min–max in €/m² di superficie lorda, stimati per zona, tipologia e stato prevalente.", licenza: "CC BY 4.0, «Agenzia delle Entrate – OMI»", link: L.omi },
    { id: "ntn", titolo: "Compravendite (NTN)", data: "estratto il 6 ottobre 2026", metodo: "Volumi di compravendita residenziale per provincia (Novara e Verbano-Cusio-Ossola), capoluogo e resto della provincia; il 2025 e il primo semestre 2026 sono provvisori. Il dettaglio per comune richiede l'area riservata con identità digitale: non lo abbiamo scaricato, perché non usiamo credenziali per conto di nessuno.", licenza: "CC BY 4.0, «Agenzia delle Entrate – OMI»", link: L.ntn },
    { id: "istat", titolo: "Abitanti", data: "estratto il 6 ottobre 2026", metodo: "ISTAT, popolazione residente al 1° gennaio 2025 per comune (la stima al 1° gennaio 2026 resta di contorno).", licenza: "CC BY 4.0, ISTAT", link: L.istat },
    { id: "scuole", titolo: "Scuole", data: "estratto il 6 ottobre 2026", metodo: "Ministero dell'Istruzione e del Merito, anagrafe delle scuole statali, anno scolastico 2026/27. Solo scuole statali: le paritarie non ci sono.", licenza: "IODL 2.0", link: L.mim },
    { id: "rischi", titolo: "Frane e alluvioni", data: "estratto il 6 ottobre 2026", metodo: "ISPRA, piattaforma IdroGEO: quota di popolazione e di superficie comunale in aree a pericolosità da frana elevata o molto elevata e a pericolosità idraulica media. Sono valori per l'intero comune: non dicono nulla di una casa precisa.", licenza: "CC BY 4.0, ISPRA", link: L.ispra },
    { id: "balneazione", titolo: "Acque di balneazione", data: "consultato il 6 ottobre 2026", metodo: "Agenzia europea dell'ambiente: 16 punti di balneazione sul lago, classe per stagione fino al 2024, l'ultima disponibile. Il comune di ogni punto è dedotto dal codice nell'identificativo, non verificato uno per uno.", licenza: "Dati pubblici EEA; la licenza della singola tabella non è verificata", link: L.eea },
    { id: "lago", titolo: "Il lago: misure e stato delle acque", data: "consultato il 6 ottobre 2026", metodo: "Regione Piemonte, Piano di Tutela delle Acque, monografia del lago d'Orta (superficie, profondità, bacino); ARPA Piemonte per lo stato ecologico e chimico. Dove le fonti non concordano, sul sito diamo entrambi i valori.", licenza: "Documenti pubblici, citati con la fonte", link: L.pta },
    { id: "carte", titolo: "Riva, strade, ferrovia, battelli", data: "estratto il 6 ottobre 2026", metodo: "OpenStreetMap via Overpass: il poligono del lago, le strade principali, la ferrovia, le stazioni, gli imbarcaderi, le linee dei battelli e gli ospedali delle carte.", licenza: "© OpenStreetMap contributors, ODbL 1.0", link: L.osm },
    { id: "crm", titolo: "I numeri di TriesteVillas", data: "misurato il 5 ottobre 2026", metodo: "Il CRM di TriesteVillas, letto in sola lettura, e i cataloghi pubblici dei siti del gruppo. Conteggi fatti con un programma e controllati con un secondo metodo che deve dare lo stesso risultato; esclusi collaudi, doppioni e spam. Riguardano il gruppo, quasi tutto a Trieste, non il lago.", licenza: "TriesteVillas srl" },
  ],
  file: {
    intro: "Due tabelle in UTF-8, separate da virgole, generate dagli stessi dati che usa il sito. Se le riusate, citate la fonte e la licenza dei dati di partenza.",
    distanze: "Tutte le coppie di partenza e arrivo del sito, in auto, con minuti, chilometri e data della misura: 186 righe.",
    quote: "Per ogni luogo: la quota del punto, la minima, la mediana e la massima nel raggio di 400 m, la distanza dalla riva e i minuti di sole il 21 dicembre: 16 righe.",
    colonne: "Colonne",
    licenzaDistanze: "Derivato da OpenStreetMap: ODbL 1.0.",
    licenzaQuote: "Derivato da Copernicus DEM, Terrain Tiles e OpenStreetMap: citate le tre fonti.",
    nota: "Le quotazioni OMI non sono fra i file aperti: si consultano alla fonte, sul servizio dell'Agenzia delle Entrate.",
  },
  citare: {
    intro: "Per citare l'atlante, o una sua pagina:",
    testo: "OrtaVillas, Edizione 01 · Ottobre 2026. Il lago d'Orta misurato da Milano. TriesteVillas srl, Trieste. ortavillas.com (consultato il …).",
    aiuto: "Un clic sul riquadro seleziona tutto il testo.",
  },
};

const en: TestiDati = {
  titolo: "Data and method · Edition 01 · October 2026",
  descrizione: "The sources of the Lake Orta atlas with method, licence and extraction date: OSRM and OpenStreetMap, Copernicus, OMI, ISTAT, ISPRA, EEA. Open files and how to cite.",
  briciola: "Data and method",
  occhiello: "Data and method",
  h1: "Where the numbers come from.",
  lead: "Every figure on this site comes from a public source, from a calculation of ours that we declare, or from the TriesteVillas CRM, with the date of extraction. Here are the method, the licences and the open files.",
  edizione: "Edition 01 · October 2026 · extracted on 6 October 2026",
  indice: { origine: "One starting point", fonti: "The sources", file: "The open files", citare: "How to cite" },
  origine: [
    "Every time “from Milan” starts from a single point: Piazza del Duomo, 45.464° N · 9.191° E (OpenStreetMap, via Nominatim). The second reference is Malpensa Terminal 1, 45.627° N · 8.711° E, the railway station beneath the terminal.",
    "Arrivals are the village point in OpenStreetMap: the main village node for municipalities, the hamlet node for Legro, Ronco and Vacciago, the town hall for Madonna del Sasso. Every point carries its OSM identifier in the data.",
  ],
  fontiIntro: "For each source: what it measures, how we use it, the licence and the date.",
  fonti: [
    { id: "tempi", titolo: "Driving times and distances", data: "measured on 6 October 2026", metodo: "OSRM, the open routing engine, on the public demo server; car profile, no traffic. 11 starting cities to 16 places, plus 10 comparison routes to the other lakes. These times are usually optimistic: they ignore queues (Milan ring roads, the A8 at rush hour), roadworks, Swiss border checks and stops.", licenza: "Data © OpenStreetMap contributors, ODbL 1.0", link: L.osrm },
    { id: "luoghi", titolo: "Place points", data: "extracted on 6 October 2026", metodo: "OpenStreetMap Nominatim, one request every 1.2–1.3 seconds; points checked against the “place” nodes of the same extract.", licenza: "© OpenStreetMap contributors, ODbL 1.0", link: L.osm },
    { id: "quote", titolo: "Ground elevation", data: "extracted on 6 October 2026", metodo: "The point elevation comes from Copernicus DEM GLO-90 (about 90 m) via Open-Meteo; minimum, median and maximum within 400 m from AWS Terrain Tiles (EU-DEM and SRTM, zoom 12, about 27 m per pixel). It is ground elevation, not buildings. The two sources differ by 0–13 m across the 16 points.", licenza: "Copernicus DEM © DLR and/or Airbus, free use with attribution; Open-Meteo CC BY 4.0; Terrain Tiles: Copernicus, NASA, Mapzen", link: L.tiles },
    { id: "rilievo", titolo: "Relief and contour lines", data: "extracted on 6 October 2026", metodo: "A 181 × 181 elevation grid over 45.70–45.95° N, 8.25–8.55° E, from Terrain Tiles; 100 m contours computed by us. 30–90 m models smooth the summits: the top of the Mottarone comes out about 25 m lower than it is.", licenza: "Copernicus (EU-DEM), NASA (SRTM), Mapzen", link: L.tiles },
    { id: "sole", titolo: "Winter sun", data: "calculated on 6 October 2026", metodo: "Our own calculation: each place's horizon from the relief, every 2° of direction up to 15 km, with curvature and refraction; sun position from the NOAA formulas. Minutes of direct sun on 21 December. No buildings, trees or clouds: it is the most the terrain allows.", licenza: "Calculation by TriesteVillas srl on the relief data" },
    { id: "omi", titolo: "OMI property quotations", data: "extracted on 6 October 2026", metodo: "The Italian Revenue Agency's quotation database, public consultation service: 13 municipalities, all zones, residential use, second half of 2025 (the latest published) and second half of 2024. These are not sale prices: they are min–max ranges in €/m² of gross area, estimated per zone, type and prevailing condition.", licenza: "CC BY 4.0, “Agenzia delle Entrate – OMI”", link: L.omi },
    { id: "ntn", titolo: "Sales (NTN)", data: "extracted on 6 October 2026", metodo: "Residential sales volumes by province (Novara and Verbano-Cusio-Ossola), capital and rest of the province; 2025 and the first half of 2026 are provisional. Municipal detail requires the reserved area with a digital identity: we did not download it, because we use nobody's credentials.", licenza: "CC BY 4.0, “Agenzia delle Entrate – OMI”", link: L.ntn },
    { id: "istat", titolo: "Population", data: "extracted on 6 October 2026", metodo: "ISTAT, resident population on 1 January 2025 by municipality (the 1 January 2026 estimate is context only).", licenza: "CC BY 4.0, ISTAT", link: L.istat },
    { id: "scuole", titolo: "Schools", data: "extracted on 6 October 2026", metodo: "Italian Ministry of Education and Merit, register of state schools, school year 2026/27. State schools only: private accredited schools are not included.", licenza: "IODL 2.0", link: L.mim },
    { id: "rischi", titolo: "Landslides and floods", data: "extracted on 6 October 2026", metodo: "ISPRA, IdroGEO platform: share of population and municipal area in high or very high landslide hazard zones and medium flood hazard zones. These are values for the whole municipality: they say nothing about a specific house.", licenza: "CC BY 4.0, ISPRA", link: L.ispra },
    { id: "balneazione", titolo: "Bathing water", data: "consulted on 6 October 2026", metodo: "European Environment Agency: 16 bathing points on the lake, class per season up to 2024, the latest available. Each point's municipality is inferred from the code in its identifier, not checked one by one.", licenza: "Public EEA data; the licence of the single table is not verified", link: L.eea },
    { id: "lago", titolo: "The lake: measurements and water status", data: "consulted on 6 October 2026", metodo: "Piedmont Region, Water Protection Plan, Lake Orta monograph (area, depth, catchment); ARPA Piemonte for ecological and chemical status. Where sources disagree, the site gives both values.", licenza: "Public documents, cited with their source", link: L.pta },
    { id: "carte", titolo: "Shore, roads, railway, boats", data: "extracted on 6 October 2026", metodo: "OpenStreetMap via Overpass: the lake polygon, main roads, railway, stations, landing stages, boat lines and hospitals on the maps.", licenza: "© OpenStreetMap contributors, ODbL 1.0", link: L.osm },
    { id: "crm", titolo: "TriesteVillas numbers", data: "measured on 5 October 2026", metodo: "The TriesteVillas CRM, read only, and the public catalogues of the group's sites. Counts made with a program and checked with a second method that must give the same result; excluding tests, duplicates and spam. They concern the group, almost all in Trieste, not the lake.", licenza: "TriesteVillas srl" },
  ],
  file: {
    intro: "Two UTF-8 tables, comma-separated, generated from the same data the site uses. If you reuse them, cite the source and the licence of the original data.",
    distanze: "Every start and arrival pair on the site, by car, with minutes, kilometres and measurement date: 186 rows.",
    quote: "For each place: point elevation, minimum, median and maximum within 400 m, distance from the shore and minutes of sun on 21 December: 16 rows.",
    colonne: "Columns",
    licenzaDistanze: "Derived from OpenStreetMap: ODbL 1.0.",
    licenzaQuote: "Derived from Copernicus DEM, Terrain Tiles and OpenStreetMap: cite all three.",
    nota: "The OMI quotations are not among the open files: consult them at the source, on the Revenue Agency's service.",
  },
  citare: {
    intro: "To cite the atlas, or one of its pages:",
    testo: "OrtaVillas, Edition 01 · October 2026. Lake Orta measured from Milan. TriesteVillas srl, Trieste. ortavillas.com (accessed on …).",
    aiuto: "One click on the box selects all the text.",
  },
};

const de: TestiDati = {
  titolo: "Daten und Methode · Ausgabe 01 · Oktober 2026",
  descrizione: "Die Quellen des Atlas vom Ortasee mit Methode, Lizenz und Abrufdatum: OSRM und OpenStreetMap, Copernicus, OMI, ISTAT, ISPRA, EUA. Offene Dateien und Zitierweise.",
  briciola: "Daten und Methode",
  occhiello: "Daten und Methode",
  h1: "Woher die Zahlen kommen.",
  lead: "Jede Zahl dieser Website stammt aus einer öffentlichen Quelle, aus einer offengelegten eigenen Berechnung oder aus dem CRM von TriesteVillas, mit dem Datum des Abrufs. Hier die Methode, die Lizenzen und die offenen Dateien.",
  edizione: "Ausgabe 01 · Oktober 2026 · Abruf vom 6. Oktober 2026",
  indice: { origine: "Ein einziger Ausgangspunkt", fonti: "Die Quellen", file: "Die offenen Dateien", citare: "Wie man zitiert" },
  origine: [
    "Jede Zeit „ab Mailand“ beginnt an einem einzigen Punkt: Piazza del Duomo, 45.464° N · 9.191° E (OpenStreetMap, über Nominatim). Der zweite Bezugspunkt ist Malpensa Terminal 1, 45.627° N · 8.711° E, der Bahnhof unter dem Terminal.",
    "Ziele sind der Ortspunkt in OpenStreetMap: der Knoten des Hauptorts bei Gemeinden, der Knoten des Ortsteils bei Legro, Ronco und Vacciago, das Rathaus bei Madonna del Sasso. Jeder Punkt trägt in den Daten seine OSM-Kennung.",
  ],
  fontiIntro: "Für jede Quelle: was sie misst, wie wir sie nutzen, Lizenz und Datum.",
  fonti: [
    { id: "tempi", titolo: "Fahrzeiten und Entfernungen", data: "gemessen am 6. Oktober 2026", metodo: "OSRM, die freie Routing-Software, auf dem öffentlichen Demo-Server; Autoprofil, ohne Verkehr. 11 Ausgangsstädte zu 16 Orten, plus 10 Vergleichsrouten zu den anderen Seen. Die Zeiten sind meist optimistisch: Staus (Mailänder Ringstraßen, A8 zur Hauptverkehrszeit), Baustellen, Kontrollen an der Schweizer Grenze und Pausen fehlen.", licenza: "Daten © OpenStreetMap-Mitwirkende, ODbL 1.0", link: L.osrm },
    { id: "luoghi", titolo: "Ortspunkte", data: "abgerufen am 6. Oktober 2026", metodo: "OpenStreetMap Nominatim, eine Anfrage alle 1,2–1,3 Sekunden; Punkte geprüft an den „place“-Knoten desselben Auszugs.", licenza: "© OpenStreetMap-Mitwirkende, ODbL 1.0", link: L.osm },
    { id: "quote", titolo: "Geländehöhen", data: "abgerufen am 6. Oktober 2026", metodo: "Die Punkthöhe stammt aus Copernicus DEM GLO-90 (etwa 90 m) über Open-Meteo; Minimum, Median und Maximum im Umkreis von 400 m aus den AWS Terrain Tiles (EU-DEM und SRTM, Zoom 12, etwa 27 m pro Pixel). Es ist die Geländehöhe, nicht die der Gebäude. Die beiden Quellen weichen an den 16 Punkten um 0–13 m ab.", licenza: "Copernicus DEM © DLR und/oder Airbus, freie Nutzung mit Quellenangabe; Open-Meteo CC BY 4.0; Terrain Tiles: Copernicus, NASA, Mapzen", link: L.tiles },
    { id: "rilievo", titolo: "Relief und Höhenlinien", data: "abgerufen am 6. Oktober 2026", metodo: "Ein Raster von 181 × 181 Höhen über 45,70–45,95° N, 8,25–8,55° E, aus den Terrain Tiles; Höhenlinien alle 100 m von uns berechnet. Modelle mit 30–90 m glätten die Gipfel: Der Gipfel des Mottarone liegt bei uns etwa 25 m zu tief.", licenza: "Copernicus (EU-DEM), NASA (SRTM), Mapzen", link: L.tiles },
    { id: "sole", titolo: "Wintersonne", data: "berechnet am 6. Oktober 2026", metodo: "Eigene Berechnung: der Horizont jedes Orts aus dem Relief, alle 2° Richtung bis 15 km, mit Erdkrümmung und Refraktion; Sonnenstand nach den NOAA-Formeln. Minuten direkter Sonne am 21. Dezember. Ohne Gebäude, Bäume oder Wolken: das Maximum, das das Gelände zulässt.", licenza: "Berechnung der TriesteVillas srl auf den Reliefdaten" },
    { id: "omi", titolo: "OMI-Immobilienrichtwerte", data: "abgerufen am 6. Oktober 2026", metodo: "Die Richtwertdatenbank der italienischen Steuerbehörde, öffentlicher Abfragedienst: 13 Gemeinden, alle Zonen, Wohnnutzung, 2. Halbjahr 2025 (das zuletzt veröffentlichte) und 2. Halbjahr 2024. Das sind keine Verkaufspreise: Es sind Spannen in €/m² Bruttofläche, geschätzt je Zone, Typ und vorherrschendem Zustand.", licenza: "CC BY 4.0, „Agenzia delle Entrate – OMI“", link: L.omi },
    { id: "ntn", titolo: "Verkäufe (NTN)", data: "abgerufen am 6. Oktober 2026", metodo: "Verkaufsvolumen von Wohnimmobilien je Provinz (Novara und Verbano-Cusio-Ossola), Hauptstadt und übrige Provinz; 2025 und das erste Halbjahr 2026 sind vorläufig. Gemeindewerte erfordern den geschützten Bereich mit digitaler Identität: Wir haben sie nicht abgerufen, weil wir keine fremden Zugangsdaten verwenden.", licenza: "CC BY 4.0, „Agenzia delle Entrate – OMI“", link: L.ntn },
    { id: "istat", titolo: "Einwohner", data: "abgerufen am 6. Oktober 2026", metodo: "ISTAT, Wohnbevölkerung am 1. Januar 2025 je Gemeinde (die Schätzung zum 1. Januar 2026 dient nur als Kontext).", licenza: "CC BY 4.0, ISTAT", link: L.istat },
    { id: "scuole", titolo: "Schulen", data: "abgerufen am 6. Oktober 2026", metodo: "Italienisches Bildungsministerium, Verzeichnis der staatlichen Schulen, Schuljahr 2026/27. Nur staatliche Schulen: anerkannte Privatschulen fehlen.", licenza: "IODL 2.0", link: L.mim },
    { id: "rischi", titolo: "Erdrutsche und Hochwasser", data: "abgerufen am 6. Oktober 2026", metodo: "ISPRA, Plattform IdroGEO: Anteil von Bevölkerung und Gemeindefläche in Gebieten mit hoher oder sehr hoher Rutschungsgefahr und mittlerer Hochwassergefahr. Werte für die ganze Gemeinde: Sie sagen nichts über ein bestimmtes Haus.", licenza: "CC BY 4.0, ISPRA", link: L.ispra },
    { id: "balneazione", titolo: "Badegewässer", data: "eingesehen am 6. Oktober 2026", metodo: "Europäische Umweltagentur: 16 Badestellen am See, Einstufung je Saison bis 2024, der letzten verfügbaren. Die Gemeinde jeder Stelle ist aus dem Code der Kennung abgeleitet, nicht einzeln geprüft.", licenza: "Öffentliche Daten der EUA; die Lizenz der einzelnen Tabelle ist nicht geprüft", link: L.eea },
    { id: "lago", titolo: "Der See: Maße und Gewässerzustand", data: "eingesehen am 6. Oktober 2026", metodo: "Region Piemont, Gewässerschutzplan, Monografie des Ortasees (Fläche, Tiefe, Einzugsgebiet); ARPA Piemonte für den ökologischen und chemischen Zustand. Wo die Quellen abweichen, nennt die Website beide Werte.", licenza: "Öffentliche Dokumente, mit Quelle zitiert", link: L.pta },
    { id: "carte", titolo: "Ufer, Straßen, Bahn, Schiffe", data: "abgerufen am 6. Oktober 2026", metodo: "OpenStreetMap über Overpass: das Seepolygon, Hauptstraßen, Bahnlinie, Bahnhöfe, Anlegestellen, Schiffslinien und Krankenhäuser der Karten.", licenza: "© OpenStreetMap-Mitwirkende, ODbL 1.0", link: L.osm },
    { id: "crm", titolo: "Die Zahlen von TriesteVillas", data: "gemessen am 5. Oktober 2026", metodo: "Das CRM von TriesteVillas, nur lesend, und die öffentlichen Kataloge der Websites der Gruppe. Zählungen mit einem Programm, geprüft mit einer zweiten Methode, die dasselbe Ergebnis liefern muss; ohne Tests, Dubletten und Spam. Sie betreffen die Gruppe, fast alles in Triest, nicht den See.", licenza: "TriesteVillas srl" },
  ],
  file: {
    intro: "Zwei Tabellen in UTF-8, kommagetrennt, aus denselben Daten wie die Website. Wenn Sie sie weiterverwenden, nennen Sie Quelle und Lizenz der Ausgangsdaten.",
    distanze: "Alle Start-Ziel-Paare der Website, mit dem Auto, mit Minuten, Kilometern und Messdatum: 186 Zeilen.",
    quote: "Für jeden Ort: Punkthöhe, Minimum, Median und Maximum im Umkreis von 400 m, Abstand zum Ufer und Sonnenminuten am 21. Dezember: 16 Zeilen.",
    colonne: "Spalten",
    licenzaDistanze: "Abgeleitet aus OpenStreetMap: ODbL 1.0.",
    licenzaQuote: "Abgeleitet aus Copernicus DEM, Terrain Tiles und OpenStreetMap: alle drei nennen.",
    nota: "Die OMI-Richtwerte gehören nicht zu den offenen Dateien: Sie sind an der Quelle abrufbar, beim Dienst der Steuerbehörde.",
  },
  citare: {
    intro: "Um den Atlas oder eine seiner Seiten zu zitieren:",
    testo: "OrtaVillas, Ausgabe 01 · Oktober 2026. Der Ortasee, gemessen von Mailand. TriesteVillas srl, Triest. ortavillas.com (abgerufen am …).",
    aiuto: "Ein Klick auf das Feld markiert den ganzen Text.",
  },
};

const sl: TestiDati = {
  titolo: "Podatki in metoda · izdaja 01 · oktober 2026",
  descrizione: "Viri atlasa jezera Orta z metodo, licenco in datumom pridobitve: OSRM in OpenStreetMap, Copernicus, OMI, ISTAT, ISPRA, EEA. Odprte datoteke in kako citirati.",
  briciola: "Podatki in metoda",
  occhiello: "Podatki in metoda",
  h1: "Od kod prihajajo številke.",
  lead: "Vsaka številka na tem spletnem mestu prihaja iz javnega vira, iz našega priznanega izračuna ali iz CRM TriesteVillas, z datumom pridobitve. Tu so metoda, licence in odprte datoteke.",
  edizione: "Izdaja 01 · oktober 2026 · pridobljeno 6. oktobra 2026",
  indice: { origine: "Ena sama izhodiščna točka", fonti: "Viri", file: "Odprte datoteke", citare: "Kako citirati" },
  origine: [
    "Vsak čas »iz Milana« se začne v eni točki: Piazza del Duomo, 45.464° N · 9.191° E (OpenStreetMap, prek Nominatima). Druga referenca je Malpensa Terminal 1, 45.627° N · 8.711° E, železniška postaja pod terminalom.",
    "Cilji so točka kraja v OpenStreetMap: vozlišče glavnega naselja pri občinah, vozlišče zaselka pri Legru, Roncu in Vacciagu, občinska stavba pri Madonni del Sasso. Vsaka točka ima v podatkih svoj identifikator OSM.",
  ],
  fontiIntro: "Za vsak vir: kaj meri, kako ga uporabljamo, licenca in datum.",
  fonti: [
    { id: "tempi", titolo: "Časi in razdalje z avtom", data: "izmerjeno 6. oktobra 2026", metodo: "OSRM, prosti usmerjevalnik, na javnem predstavitvenem strežniku; profil avto, brez prometa. 11 izhodiščnih mest do 16 krajev in 10 primerjalnih poti do drugih jezer. Časi so praviloma optimistični: ne upoštevajo zastojev (milanske obvoznice, A8 v konicah), del na cesti, kontrol na švicarski meji in postankov.", licenza: "Podatki © sodelavci OpenStreetMap, ODbL 1.0", link: L.osrm },
    { id: "luoghi", titolo: "Točke krajev", data: "pridobljeno 6. oktobra 2026", metodo: "OpenStreetMap Nominatim, ena zahteva vsakih 1,2–1,3 sekunde; točke preverjene na vozliščih »place« istega izvlečka.", licenza: "© sodelavci OpenStreetMap, ODbL 1.0", link: L.osm },
    { id: "quote", titolo: "Nadmorske višine terena", data: "pridobljeno 6. oktobra 2026", metodo: "Višina točke je iz Copernicus DEM GLO-90 (približno 90 m) prek Open-Meteo; najnižja, mediana in najvišja v polmeru 400 m iz AWS Terrain Tiles (EU-DEM in SRTM, povečava 12, približno 27 m na piksel). To je višina terena, ne stavb. Vira se na 16 točkah razlikujeta za 0–13 m.", licenza: "Copernicus DEM © DLR in/ali Airbus, prosta uporaba z navedbo; Open-Meteo CC BY 4.0; Terrain Tiles: Copernicus, NASA, Mapzen", link: L.tiles },
    { id: "rilievo", titolo: "Relief in plastnice", data: "pridobljeno 6. oktobra 2026", metodo: "Mreža 181 × 181 višin na območju 45,70–45,95° N, 8,25–8,55° E iz Terrain Tiles; plastnice na 100 m smo izračunali sami. Modeli s 30–90 m zgladijo vrhove: vrh Mottaroneja je pri nas približno 25 m nižji od dejanskega.", licenza: "Copernicus (EU-DEM), NASA (SRTM), Mapzen", link: L.tiles },
    { id: "sole", titolo: "Zimsko sonce", data: "izračunano 6. oktobra 2026", metodo: "Naš izračun: obzorje vsakega kraja iz reliefa, vsaki 2° smeri do 15 km, z ukrivljenostjo in lomom svetlobe; položaj sonca po formulah NOAA. Minute neposrednega sonca 21. decembra. Brez stavb, dreves in oblakov: to je največ, kar dopušča teren.", licenza: "Izračun TriesteVillas srl na podatkih reliefa" },
    { id: "omi", titolo: "Ocene vrednosti OMI", data: "pridobljeno 6. oktobra 2026", metodo: "Podatkovna zbirka ocen vrednosti italijanske davčne uprave, javna storitev za vpogled: 13 občin, vsa območja, stanovanjska raba, 2. polletje 2025 (zadnje objavljeno) in 2. polletje 2024. To niso prodajne cene: so razponi v €/m² bruto površine, ocenjeni po območju, vrsti in prevladujočem stanju.", licenza: "CC BY 4.0, »Agenzia delle Entrate – OMI«", link: L.omi },
    { id: "ntn", titolo: "Prodaje (NTN)", data: "pridobljeno 6. oktobra 2026", metodo: "Obseg prodaj stanovanjskih nepremičnin po pokrajinah (Novara in Verbano-Cusio-Ossola), glavno mesto in preostanek pokrajine; leto 2025 in prvo polletje 2026 sta začasna. Podatki po občinah zahtevajo zaščiteno območje z digitalno identiteto: nismo jih prenesli, ker ne uporabljamo tujih poverilnic.", licenza: "CC BY 4.0, »Agenzia delle Entrate – OMI«", link: L.ntn },
    { id: "istat", titolo: "Prebivalci", data: "pridobljeno 6. oktobra 2026", metodo: "ISTAT, prebivalstvo na dan 1. januarja 2025 po občinah (ocena za 1. januar 2026 služi le kot okvir).", licenza: "CC BY 4.0, ISTAT", link: L.istat },
    { id: "scuole", titolo: "Šole", data: "pridobljeno 6. oktobra 2026", metodo: "Italijansko ministrstvo za izobraževanje, register državnih šol, šolsko leto 2026/27. Samo državne šole: zasebnih ni.", licenza: "IODL 2.0", link: L.mim },
    { id: "rischi", titolo: "Zemeljski plazovi in poplave", data: "pridobljeno 6. oktobra 2026", metodo: "ISPRA, platforma IdroGEO: delež prebivalstva in površine občine na območjih z visoko ali zelo visoko nevarnostjo plazov in srednjo poplavno nevarnostjo. Vrednosti za celotno občino: o posamezni hiši ne povedo ničesar.", licenza: "CC BY 4.0, ISPRA", link: L.ispra },
    { id: "balneazione", titolo: "Kopalne vode", data: "vpogled 6. oktobra 2026", metodo: "Evropska agencija za okolje: 16 kopalnih mest na jezeru, razred po sezonah do leta 2024, zadnjega razpoložljivega. Občina vsakega mesta je izpeljana iz kode v identifikatorju, ni preverjena posamično.", licenza: "Javni podatki EEA; licenca posamezne tabele ni preverjena", link: L.eea },
    { id: "lago", titolo: "Jezero: mere in stanje voda", data: "vpogled 6. oktobra 2026", metodo: "Dežela Piemont, načrt varstva voda, monografija jezera Orta (površina, globina, porečje); ARPA Piemonte za ekološko in kemijsko stanje. Kjer se viri ne ujemajo, spletno mesto navede obe vrednosti.", licenza: "Javni dokumenti, citirani z virom", link: L.pta },
    { id: "carte", titolo: "Obala, ceste, železnica, ladje", data: "pridobljeno 6. oktobra 2026", metodo: "OpenStreetMap prek Overpass: poligon jezera, glavne ceste, železnica, postaje, pristani, ladijske linije in bolnišnice na zemljevidih.", licenza: "© sodelavci OpenStreetMap, ODbL 1.0", link: L.osm },
    { id: "crm", titolo: "Številke TriesteVillas", data: "izmerjeno 5. oktobra 2026", metodo: "CRM TriesteVillas, samo za branje, in javni katalogi spletnih mest skupine. Štetja s programom, preverjena z drugo metodo, ki mora dati enak rezultat; brez preizkusov, dvojnikov in neželene pošte. Nanašajo se na skupino, skoraj vse v Trstu, ne na jezero.", licenza: "TriesteVillas srl" },
  ],
  file: {
    intro: "Dve tabeli v UTF-8, ločeni z vejicami, ustvarjeni iz istih podatkov, ki jih uporablja spletno mesto. Če ju ponovno uporabite, navedite vir in licenco izhodiščnih podatkov.",
    distanze: "Vsi pari izhodišča in cilja na spletnem mestu, z avtom, z minutami, kilometri in datumom meritve: 186 vrstic.",
    quote: "Za vsak kraj: višina točke, najnižja, mediana in najvišja v polmeru 400 m, razdalja od obale in minute sonca 21. decembra: 16 vrstic.",
    colonne: "Stolpci",
    licenzaDistanze: "Izpeljano iz OpenStreetMap: ODbL 1.0.",
    licenzaQuote: "Izpeljano iz Copernicus DEM, Terrain Tiles in OpenStreetMap: navedite vse tri.",
    nota: "Ocene vrednosti OMI niso med odprtimi datotekami: preverite jih pri viru, na storitvi davčne uprave.",
  },
  citare: {
    intro: "Za citiranje atlasa ali ene od njegovih strani:",
    testo: "OrtaVillas, izdaja 01 · oktober 2026. Jezero Orta, izmerjeno iz Milana. TriesteVillas srl, Trst. ortavillas.com (dostop …).",
    aiuto: "En klik na okvir označi vse besedilo.",
  },
};

export const DATI: Record<Lingua, TestiDati> = { it, en, de, sl };
