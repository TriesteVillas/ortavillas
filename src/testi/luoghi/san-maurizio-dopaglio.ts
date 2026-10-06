import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, San Maurizio d'Opaglio", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di San Maurizio d'Opaglio", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3133", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Museo del rubinetto e della sua tecnologia", url: "https://www.illagomaggiore.com/poi/museum-of-taps-and-their-technology/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – San Maurizio d'Opaglio (prima rubinetteria verso il 1920; unione di Briallo, Lagna e Opaglio nel 1568)", url: "https://it.wikipedia.org/wiki/San_Maurizio_d'Opaglio", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "San Maurizio d'Opaglio: vivere sul lago d'Orta, prezzi e scuole",
  descrizione: "San Maurizio d'Opaglio, 2.999 abitanti, il paese del rubinetto: quotazioni OMI 2025, scuole fino alle medie, rischi bassi, 72 min da Milano, battello a Lagna.",
  frase: "San Maurizio d'Opaglio è il paese della rubinetteria sulla sponda ovest: 2.999 abitanti, 82 m sopra il lago, scuole fino alle medie, 72 min da Milano e 51 da Malpensa.",
  vivere: [
    {
      titolo: "Il paese del rubinetto",
      testo: "San Maurizio d'Opaglio è il centro del distretto della rubinetteria del lago d'Orta. Il Museo del rubinetto e della sua tecnologia racconta oltre 150 anni di industria e presenta aziende nate tra il 1860 e il 1965 e ancora attive. Secondo Wikipedia la prima rubinetteria del paese nacque verso il 1920, e il comune si formò nel 1568 dall'unione dei villaggi di Briallo, Lagna e Opaglio.\n\nÈ un paese che lavora tutto l'anno, non una località di villeggiatura. Il punto centrale sta a 372 m, 82 m sopra il lago e circa 1,3 km dalla riva; sull'acqua c'è la frazione di Lagna, con imbarcadero."
    },
    {
      titolo: "Servizi completi per un paese",
      testo: "Con 2.999 residenti (ISTAT, 1° gennaio 2025; stima 2026: 2.931) è il comune più popoloso della sponda ovest. Ha scuola dell'infanzia, primaria e secondaria di primo grado statali, ed è sede dell'Istituto comprensivo San Giulio. Gozzano, con il liceo, è a 7 min; Pella a 6.\n\nPer la sanità il DEA di I livello più vicino per la provincia di Novara è a Borgomanero; Omegna ha un Punto di Primo Intervento, non un pronto soccorso. I tre punti di balneazione attribuiti al comune (Porto di Lagna, Prarolo, Pascolo) risultano «eccellenti» nella stagione 2024 (dati EEA)."
    },
    {
      titolo: "Sole buono, rischi bassi",
      testo: "Il 21 dicembre il nostro calcolo dà 7 h 17 min di sole diretto, dalle 08:15 alle 15:31: è il valore più alto della sponda ovest, perché il paese sta su un ripiano aperto, non sotto il crinale. Il 21 giugno sono 13 h 49 min. Il calcolo considera solo il rilievo.\n\nPer ISPRA solo lo 0,3% dei residenti vive in aree a pericolosità da frana elevata o molto elevata (0,9% della superficie) e lo 0,2% in aree a pericolosità idraulica media. Sono tra i valori più bassi del lago. Il limite è un altro: sulla sponda ovest non c'è ferrovia."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nella zona semicentrale C1 le abitazioni civili sono quotate 1.200–1.750 €/m² e ville e villini 1.300–1.950 €/m². Nel centro (B1) le civili stanno a 1.100–1.550 €/m², nella periferia residenziale (D1) a 1.150–1.700 €/m², con ville a 1.350–1.950 €/m². Sul 2° semestre 2024 le civili della zona C1 sono salite del 5,4% al centro dell'intervallo.\n\nL'OMI non ha qui una zona lungolago separata. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 72 min (84 km) da Milano Duomo, 51 min (44 km) da Malpensa T1, 79 min da Lugano. È il luogo della sponda ovest più vicino a Milano. Le stazioni più vicine sono Orta-Miasino (3,4 km in linea d'aria, sull'altra riva) e Bolzano Novarese (4,2 km); per Milano si cambia a Novara.\n\nL'imbarcadero di Lagna è a 1,4 km. Dal 4 al 31 ottobre 2026 il giro Orta–Isola–Pella–San Filiberto–Lagna parte ogni 35–45 minuti. Il servizio di linea è attivo da marzo a ottobre; da novembre a febbraio non risulta."
    },
  ],
  perChi: {
    si: [
      "Volete un paese vivo tutto l'anno, con scuole fino alle medie.",
      "Cercate più sole d'inverno della riva: 7 h 17 min il 21 dicembre.",
      "Vi interessano rischi idrogeologici bassi: lo 0,3% dei residenti in area di frana P3–P4.",
    ],
    no: [
      "Volete la casa sull'acqua: il centro è a 1,3 km dalla riva.",
      "Vi serve il treno in paese: la stazione più vicina è a 3,4 km in linea d'aria.",
      "Cercate un borgo turistico: qui l'identità è la fabbrica.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a San Maurizio d'Opaglio?", r: "L'OMI quota le abitazioni civili 1.100–1.750 €/m² a seconda della zona e ville e villini 1.300–1.950 €/m² (2° semestre 2025). La zona più quotata è la semicentrale C1. Sono intervalli stimati, non prezzi firmati." },
    { d: "Che scuole ci sono?", r: "Scuola dell'infanzia, primaria e secondaria di primo grado statali, più la sede dell'Istituto comprensivo San Giulio. Per le superiori il liceo più vicino è a Gozzano, a 7 min d'auto. Le scuole paritarie non sono nel dato del Ministero." },
    { d: "San Maurizio d'Opaglio è sul lago?", r: "Il comune sì: la frazione di Lagna è sulla riva, con imbarcadero e tre punti di balneazione «eccellenti» nel 2024. Il centro del paese però è a circa 1,3 km dall'acqua, 82 m più in alto." },
    { d: "Quanto è lontano da Milano?", r: "72 min (84 km) da piazza del Duomo e 51 min da Malpensa T1, in auto senza traffico. È il luogo della sponda ovest più vicino a Milano. In treno serve la stazione di Bolzano Novarese o Orta-Miasino e un cambio a Novara." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "San Maurizio d'Opaglio: living on Lake Orta, prices, schools",
  descrizione: "San Maurizio d'Opaglio, 2,999 residents, the tap-making town: OMI values 2025, schools to age 14, low hazards, 72 min from Milan, boats at Lagna.",
  frase: "San Maurizio d'Opaglio is the tap-making town of the west shore: 2,999 residents, 82 m above the lake, schools up to lower secondary, 72 min from Milan and 51 from Malpensa.",
  vivere: [
    {
      titolo: "The town of the tap",
      testo: "San Maurizio d'Opaglio is the centre of Lake Orta's tap and valve district. The Museum of Taps and their Technology tells over 150 years of industry and presents companies founded between 1860 and 1965 that are still operating. According to Wikipedia the town's first tap works opened around 1920, and the municipality was formed in 1568 from the union of the villages of Briallo, Lagna and Opaglio.\n\nIt is a town that works all year, not a holiday resort. Its centre is at 372 m, 82 m above the lake and about 1.3 km from the shore; on the water is the hamlet of Lagna, with a boat landing."
    },
    {
      titolo: "Full services for a small town",
      testo: "With 2,999 residents (ISTAT, 1 January 2025; 2026 estimate: 2,931) it is the most populous municipality on the west shore. It has a state nursery, primary and lower secondary school, and is the seat of the San Giulio comprehensive school institute. Gozzano, with its upper secondary school, is 7 min away; Pella 6.\n\nFor healthcare, the nearest level-I emergency department for the province of Novara is in Borgomanero; Omegna has a first-aid point, not an emergency department. The three bathing points assigned to the municipality (Porto di Lagna, Prarolo, Pascolo) were rated \"excellent\" in the 2024 season (EEA data)."
    },
    {
      titolo: "Good sun, low hazards",
      testo: "On 21 December our calculation gives 7 h 17 min of direct sun, from 8:15 am to 3:31 pm: the highest figure on the west shore, because the town sits on an open terrace, not under the ridge. On 21 June it is 13 h 49 min. The calculation covers terrain only.\n\nAccording to ISPRA only 0.3% of residents live in areas of high or very high landslide hazard (0.9% of the area) and 0.2% in areas of medium flood hazard. These are among the lowest figures on the lake. The limit lies elsewhere: there is no railway on the west shore."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the semi-central zone C1 standard homes are valued at €1,200–1,750/m² and villas at €1,300–1,950/m². In the centre (B1) standard homes are at €1,100–1,550/m², in the residential outskirts (D1) at €1,150–1,700/m², with villas at €1,350–1,950/m². Against the 2nd half of 2024, standard homes in zone C1 rose by 5.4% at the midpoint.\n\nOMI has no separate lakefront zone here. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 72 min (84 km) from Milan's Duomo, 51 min (44 km) from Malpensa T1, 79 min from Lugano. It is the west-shore place closest to Milan. The nearest stations are Orta-Miasino (3.4 km as the crow flies, on the other shore) and Bolzano Novarese (4.2 km); for Milan you change at Novara.\n\nThe Lagna boat landing is 1.4 km away. From 4 to 31 October 2026 the Orta–Island–Pella–San Filiberto–Lagna loop leaves every 35–45 minutes. Scheduled service runs from March to October; from November to February none is listed."
    },
  ],
  perChi: {
    si: [
      "You want a town that is alive all year, with schools up to lower secondary.",
      "You want more winter sun than the shore: 7 h 17 min on 21 December.",
      "Low hydrogeological hazard matters to you: 0.3% of residents in P3–P4 landslide areas.",
    ],
    no: [
      "You want a house on the water: the centre is 1.3 km from the shore.",
      "You need a train in town: the nearest station is 3.4 km away as the crow flies.",
      "You are after a tourist village: here the identity is the factory.",
    ],
  },
  faq: [
    { d: "How much does a house cost in San Maurizio d'Opaglio?", r: "OMI values standard homes at €1,100–1,750/m² depending on the zone and villas at €1,300–1,950/m² (2nd half of 2025). The highest-valued zone is the semi-central C1. These are estimated ranges, not signed prices." },
    { d: "Which schools are there?", r: "A state nursery, primary and lower secondary school, plus the seat of the San Giulio comprehensive institute. For upper secondary, the nearest liceo is in Gozzano, 7 min by car. Private (paritarie) schools are not in the Ministry data." },
    { d: "Is San Maurizio d'Opaglio on the lake?", r: "The municipality is: the hamlet of Lagna is on the shore, with a boat landing and three bathing points rated \"excellent\" in 2024. The town centre, however, is about 1.3 km from the water and 82 m higher." },
    { d: "How far is it from Milan?", r: "72 min (84 km) from Piazza del Duomo and 51 min from Malpensa T1, by car without traffic. It is the west-shore place closest to Milan. By train you need Bolzano Novarese or Orta-Miasino station and a change at Novara." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "San Maurizio d'Opaglio: Leben am Ortasee, Preise, Schulen",
  descrizione: "San Maurizio d'Opaglio, 2.999 Einwohner, der Ort der Armaturen: OMI-Werte 2025, Schulen bis zur Mittelschule, geringe Risiken, 72 Min. von Mailand.",
  frase: "San Maurizio d'Opaglio ist der Ort der Armaturenindustrie am Westufer: 2.999 Einwohner, 82 m über dem See, Schulen bis zur Mittelschule, 72 Min. von Mailand und 51 von Malpensa.",
  vivere: [
    {
      titolo: "Der Ort der Wasserhähne",
      testo: "San Maurizio d'Opaglio ist das Zentrum des Armaturenbezirks am Ortasee. Das Museum des Wasserhahns und seiner Technik erzählt über 150 Jahre Industrie und zeigt Firmen, die zwischen 1860 und 1965 gegründet wurden und noch arbeiten. Laut Wikipedia entstand die erste Armaturenfabrik des Ortes um 1920, und die Gemeinde bildete sich 1568 aus den Dörfern Briallo, Lagna und Opaglio.\n\nEs ist ein Ort, der das ganze Jahr arbeitet, kein Ferienort. Das Zentrum liegt auf 372 m, 82 m über dem See und etwa 1,3 km vom Ufer; am Wasser liegt der Ortsteil Lagna mit Anlegestelle."
    },
    {
      titolo: "Volle Versorgung für einen kleinen Ort",
      testo: "Mit 2.999 Einwohnern (ISTAT, 1. Januar 2025; Schätzung 2026: 2.931) ist es die bevölkerungsreichste Gemeinde am Westufer. Es gibt einen staatlichen Kindergarten, eine Grundschule und eine Mittelschule, dazu den Sitz des Schulverbunds San Giulio. Gozzano mit Gymnasium ist 7 Min. entfernt, Pella 6.\n\nDie nächste Notaufnahme der Stufe I in der Provinz Novara ist in Borgomanero; Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme. Die drei der Gemeinde zugeordneten Badestellen (Porto di Lagna, Prarolo, Pascolo) wurden in der Saison 2024 mit „ausgezeichnet“ bewertet (EEA-Daten)."
    },
    {
      titolo: "Gute Sonne, geringe Risiken",
      testo: "Am 21. Dezember ergibt unsere Berechnung 7 h 17 min direkte Sonne, von 8.15 bis 15.31 Uhr: der höchste Wert am Westufer, weil der Ort auf einer offenen Terrasse liegt und nicht unter dem Kamm. Am 21. Juni sind es 13 h 49 min. Berechnet ist nur das Gelände.\n\nLaut ISPRA leben nur 0,3 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr (0,9 % der Fläche) und 0,2 % in Gebieten mittlerer Hochwassergefahr. Das gehört zu den niedrigsten Werten am See. Die Grenze liegt woanders: Am Westufer gibt es keine Bahn."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden in der halbzentralen Zone C1 Wohnungen mit 1.200–1.750 €/m² und Villen mit 1.300–1.950 €/m² bewertet. Im Zentrum (B1) liegen Wohnungen bei 1.100–1.550 €/m², am Ortsrand (D1) bei 1.150–1.700 €/m², Villen dort bei 1.350–1.950 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen in Zone C1 um 5,4 % in der Mitte der Spanne.\n\nEine eigene Uferzone hat die OMI hier nicht. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 72 Min. (84 km) vom Mailänder Dom, 51 Min. (44 km) von Malpensa T1, 79 Min. von Lugano. Es ist der Ort am Westufer, der Mailand am nächsten liegt. Die nächsten Bahnhöfe sind Orta-Miasino (3,4 km Luftlinie, am anderen Ufer) und Bolzano Novarese (4,2 km); nach Mailand steigt man in Novara um.\n\nDie Anlegestelle Lagna ist 1,4 km entfernt. Vom 4. bis 31. Oktober 2026 fährt die Runde Orta–Insel–Pella–San Filiberto–Lagna alle 35–45 Minuten. Der Liniendienst fährt von März bis Oktober; von November bis Februar ist keiner ausgewiesen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen einen Ort, der das ganze Jahr lebt, mit Schulen bis zur Mittelschule.",
      "Sie suchen mehr Wintersonne als am Ufer: 7 h 17 min am 21. Dezember.",
      "Geringe Naturgefahren sind Ihnen wichtig: 0,3 % der Einwohner in Rutschgebieten P3–P4.",
    ],
    no: [
      "Sie wollen ein Haus am Wasser: Das Zentrum liegt 1,3 km vom Ufer.",
      "Sie brauchen einen Bahnhof im Ort: Der nächste ist 3,4 km Luftlinie entfernt.",
      "Sie suchen ein Touristendorf: Hier prägt die Fabrik den Ort.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in San Maurizio d'Opaglio?", r: "Die OMI bewertet Wohnungen je nach Zone mit 1.100–1.750 €/m² und Villen mit 1.300–1.950 €/m² (2. Halbjahr 2025). Die höchstbewertete Zone ist die halbzentrale C1. Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Welche Schulen gibt es?", r: "Einen staatlichen Kindergarten, eine Grundschule und eine Mittelschule, dazu den Sitz des Schulverbunds San Giulio. Das nächste Gymnasium ist in Gozzano, 7 Min. mit dem Auto. Private Schulen (paritarie) sind in den Daten des Ministeriums nicht enthalten." },
    { d: "Liegt San Maurizio d'Opaglio am See?", r: "Die Gemeinde ja: Der Ortsteil Lagna liegt am Ufer, mit Anlegestelle und drei 2024 als „ausgezeichnet“ bewerteten Badestellen. Das Ortszentrum liegt aber etwa 1,3 km vom Wasser und 82 m höher." },
    { d: "Wie weit ist es nach Mailand?", r: "72 Min. (84 km) vom Domplatz und 51 Min. von Malpensa T1, mit dem Auto ohne Verkehr. Es ist der Ort am Westufer, der Mailand am nächsten liegt. Mit dem Zug braucht man den Bahnhof Bolzano Novarese oder Orta-Miasino und einen Umstieg in Novara." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "San Maurizio d'Opaglio: življenje ob jezeru Orta, cene, šole",
  descrizione: "San Maurizio d'Opaglio, 2.999 prebivalcev, kraj pip in armatur: vrednosti OMI 2025, šole do nižje srednje, nizka tveganja, 72 min od Milana.",
  frase: "San Maurizio d'Opaglio je kraj industrije armatur na zahodni obali: 2.999 prebivalcev, 82 m nad jezerom, šole do nižje srednje, 72 min od Milana in 51 od letališča Malpensa.",
  vivere: [
    {
      titolo: "Kraj pip",
      testo: "San Maurizio d'Opaglio je središče okrožja armatur ob jezeru Orta. Muzej pipe in njene tehnologije pripoveduje več kot 150 let industrije in predstavlja podjetja, ustanovljena med letoma 1860 in 1965, ki še delujejo. Po navedbah Wikipedije je prva tovarna armatur v kraju nastala okoli leta 1920, občina pa se je oblikovala leta 1568 z združitvijo vasi Briallo, Lagna in Opaglio.\n\nTo je kraj, ki dela vse leto, ne letovišče. Središče je na 372 m, 82 m nad jezerom in približno 1,3 km od obale; ob vodi leži zaselek Lagna s pristanom."
    },
    {
      titolo: "Polne storitve za majhen kraj",
      testo: "Z 2.999 prebivalci (ISTAT, 1. januar 2025; ocena 2026: 2.931) je najštevilčnejša občina na zahodni obali. Ima državni vrtec, osnovno šolo in nižjo srednjo šolo ter sedež šolskega zavoda San Giulio. Gozzano z gimnazijo je 7 min stran, Pella 6.\n\nNajbližja urgenca I. stopnje v pokrajini Novara je v Borgomaneru; Omegna ima točko prve pomoči, ne urgence. Tri kopalna mesta, pripisana občini (Porto di Lagna, Prarolo, Pascolo), so bila v sezoni 2024 ocenjena kot »odlična« (podatki EEA)."
    },
    {
      titolo: "Dobro sonce, nizka tveganja",
      testo: "21. decembra naš izračun da 7 h 17 min neposrednega sonca, od 8.15 do 15.31: najvišja vrednost na zahodni obali, ker kraj leži na odprti terasi, ne pod grebenom. 21. junija je sonca 13 h 49 min. Izračun upošteva le teren.\n\nPo podatkih ISPRA le 0,3 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov (0,9 % površine), 0,2 % pa na območjih srednje poplavne nevarnosti. To je med najnižjimi vrednostmi ob jezeru. Omejitev je drugje: na zahodni obali ni železnice."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v polsrednji coni C1 običajna stanovanja ovrednotena na 1.200–1.750 €/m², vile na 1.300–1.950 €/m². V središču (B1) so stanovanja po 1.100–1.550 €/m², na stanovanjskem obrobju (D1) po 1.150–1.700 €/m², vile tam po 1.350–1.950 €/m². Glede na 2. polletje 2024 so se stanovanja v coni C1 v sredini razpona podražila za 5,4 %.\n\nLočene obalne cone OMI tu nima. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 72 min (84 km) od milanske stolnice, 51 min (44 km) od letališča Malpensa T1, 79 min od Lugana. To je kraj na zahodni obali, ki je Milanu najbližji. Najbližji postaji sta Orta-Miasino (3,4 km zračne črte, na drugi obali) in Bolzano Novarese (4,2 km); za Milano prestopite v Novari.\n\nPristan Lagna je 1,4 km stran. Od 4. do 31. oktobra 2026 krožna linija Orta–otok–Pella–San Filiberto–Lagna odpelje vsakih 35–45 minut. Redna linija vozi od marca do oktobra; od novembra do februarja ni navedena."
    },
  ],
  perChi: {
    si: [
      "Želite kraj, ki živi vse leto, s šolami do nižje srednje.",
      "Iščete več zimskega sonca kot ob obali: 7 h 17 min 21. decembra.",
      "Pomembna so vam nizka tveganja: 0,3 % prebivalcev na plazovitih območjih P3–P4.",
    ],
    no: [
      "Želite hišo ob vodi: središče je 1,3 km od obale.",
      "Potrebujete železniško postajo v kraju: najbližja je 3,4 km zračne črte stran.",
      "Iščete turistično vas: tu identiteto določa tovarna.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v San Maurizio d'Opaglio?", r: "OMI vrednoti običajna stanovanja glede na cono na 1.100–1.750 €/m², vile na 1.300–1.950 €/m² (2. polletje 2025). Najvišje ovrednotena je polsrednja cona C1. To so ocenjeni razponi, ne podpisane cene." },
    { d: "Katere šole so v kraju?", r: "Državni vrtec, osnovna šola in nižja srednja šola ter sedež šolskega zavoda San Giulio. Najbližja gimnazija je v Gozzanu, 7 min vožnje. Zasebne šole (paritarie) niso v podatkih ministrstva." },
    { d: "Ali San Maurizio d'Opaglio leži ob jezeru?", r: "Občina da: zaselek Lagna je ob obali, s pristanom in tremi kopalnimi mesti, ki so bila leta 2024 ocenjena kot »odlična«. Središče kraja pa je približno 1,3 km od vode in 82 m višje." },
    { d: "Kako daleč je Milano?", r: "72 min (84 km) od trga Piazza del Duomo in 51 min od letališča Malpensa T1, z avtom brez prometa. To je kraj na zahodni obali, ki je Milanu najbližji. Z vlakom potrebujete postajo Bolzano Novarese ali Orta-Miasino in prestop v Novari." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
