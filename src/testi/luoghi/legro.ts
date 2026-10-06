import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Orta San Giulio, zona C1 «Semicentrale – fascia a lago collinare e frazione Legro»", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS), comune di Orta San Giulio", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Orta San Giulio", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3112", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "OpenStreetMap – nodo della frazione Legro e stazione Orta-Miasino (Overpass)", url: "https://www.openstreetmap.org/node/2088481867", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Legro (Orta San Giulio): vivere sopra il borgo, prezzi e treni",
  descrizione: "Legro, frazione di Orta San Giulio a 70 m sopra il lago, con la stazione Orta-Miasino: quotazioni OMI zona C1, sole d'inverno, tempi da Milano e Malpensa.",
  frase: "Legro è la frazione di Orta San Giulio a mezza costa, 70 m sopra il lago, dove ferma il treno: la stazione Orta-Miasino è in paese, il borgo è a 4 min d'auto, Milano a 73 min.",
  vivere: [
    {
      titolo: "Una frazione, non un comune",
      testo: "Legro è una frazione del comune di Orta San Giulio. Popolazione, scuole, rischi e tasse sono quelli del comune: 1.102 residenti in tutto (ISTAT, 1° gennaio 2025), un dato che non distingue la frazione dal borgo. L'ISTAT non pubblica i residenti per frazione nei file che abbiamo usato.\n\nIl punto di Legro sta a 360 m di quota, circa 450 m in linea d'aria dalla riva. Da qui il lago non è davanti alla porta come in piazza Motta: lo si guarda dall'alto, tra le case e il verde della collina."
    },
    {
      titolo: "La stazione è in paese",
      testo: "Il fatto che distingue Legro è la ferrovia: la stazione Orta-Miasino, sulla linea Novara–Domodossola, è nella frazione. In un mercoledì campione partono 8 treni diretti per Novara (42–53 min); tra le 08:04 e le 13:51 non ce n'è nessuno. Per Milano Centrale si cambia a Novara: 1 h 33 min – 1 h 54 min.\n\nIn auto, senza traffico, Milano Duomo è a 73 min (86 km) e Malpensa T1 a 53 min. Il borgo di Orta e l'imbarcadero di piazza Motta sono a 4 min, Miasino e Pettenasco a 4 min, Ameno a 6. I battelli girano da marzo a ottobre."
    },
    {
      titolo: "Un po' più di sole del borgo",
      testo: "Il 21 dicembre il nostro calcolo sul rilievo dà a Legro 6 h 46 min di sole diretto, dalle 09:26 alle 16:11: sette minuti più di piazza Motta, e il sole se ne va 23 minuti più tardi. Il 21 giugno sono 13 h 36 min. È un calcolo sul terreno, senza edifici né alberi.\n\nPer i rischi valgono i numeri del comune: per ISPRA lo 0,8% della superficie di Orta è a pericolosità da frana elevata o molto elevata, e l'1,2% dei residenti sta in aree a pericolosità idraulica media, soprattutto lungo la riva. Ospedale: Omegna ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero."
    },
    {
      titolo: "La zona OMI la nomina",
      testo: "L'Agenzia delle Entrate mette Legro nella zona C1 di Orta, «Semicentrale – fascia a lago collinare e frazione Legro». Nel 2° semestre 2025 le abitazioni civili sono quotate 1.200–1.750 €/m², ville e villini 1.300–1.950 €/m², le abitazioni economiche 670–1.000 €/m². Sul 2° semestre 2024 il centro dell'intervallo delle civili è salito del 5,4%.\n\nPer confronto, il lungolago del borgo (zona B2) arriva a 2.050–2.950 €/m² per le civili. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato conservativo normale."
    },
  ],
  perChi: {
    si: [
      "Volete il treno sotto casa: la stazione Orta-Miasino è nella frazione.",
      "Cercate Orta a quotazioni più basse del lungolago (1.200–1.750 €/m² contro 2.050–2.950).",
      "Preferite guardare il lago dall'alto, a 4 min dal borgo.",
    ],
    no: [
      "Volete l'acqua davanti casa: qui la riva è a circa 450 m.",
      "Vi serve un treno ogni mezz'ora: al mattino c'è un vuoto di quasi sei ore.",
      "Cercate negozi e servizi in paese: sono nel borgo o a Omegna.",
    ],
  },
  faq: [
    { d: "Legro è un comune?", r: "No, è una frazione di Orta San Giulio. Residenti, scuole, rischi ISPRA e IMU sono del comune: 1.102 abitanti in tutto al 1° gennaio 2025. Le scuole statali del comune sono infanzia, primaria e secondaria di primo grado." },
    { d: "Quanto costa una casa a Legro?", r: "L'OMI colloca Legro nella zona C1 di Orta: abitazioni civili 1.200–1.750 €/m², ville e villini 1.300–1.950 €/m² nel 2° semestre 2025. Sono quotazioni stimate, non prezzi firmati. Il lungolago del borgo è quotato circa il 70% in più." },
    { d: "Quanti treni ci sono da Orta-Miasino?", r: "Nel campione di mercoledì 7 ottobre 2026: 8 treni diretti per Novara, tra le 06:26 e le 19:52, con viaggi di 42–53 min. Il sabato 10 ottobre erano 7. Non è un orario ufficiale pubblicato: va controllato prima di contarci." },
    { d: "Quanto sole c'è a Legro il 21 dicembre?", r: "6 h 46 min di sole diretto, dalle 09:26 alle 16:11, secondo il nostro calcolo sul rilievo. Su 8 h 29 min possibili, il Mottarone a est ne toglie quasi due. Edifici e alberi non sono nel calcolo." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Legro (Orta San Giulio): living above the village, prices, trains",
  descrizione: "Legro, a hamlet of Orta San Giulio 70 m above the lake, with Orta-Miasino station: OMI values for zone C1, winter sun, times from Milan and Malpensa.",
  frase: "Legro is the hillside hamlet of Orta San Giulio, 70 m above the lake, where the train stops: Orta-Miasino station is in the hamlet, the old village is 4 min by car, Milan 73 min.",
  vivere: [
    {
      titolo: "A hamlet, not a municipality",
      testo: "Legro is a hamlet (frazione) of the municipality of Orta San Giulio. Population, schools, hazards and taxes are those of the municipality: 1,102 residents in all (ISTAT, 1 January 2025), a figure that does not separate the hamlet from the village. ISTAT does not publish residents by hamlet in the files we used.\n\nLegro's point is at 360 m, about 450 m from the shore as the crow flies. Here the lake is not at the door as on Piazza Motta: you look down on it, between the houses and the green of the hill."
    },
    {
      titolo: "The station is in the hamlet",
      testo: "What sets Legro apart is the railway: Orta-Miasino station, on the Novara–Domodossola line, is in the hamlet. On a sample Wednesday 8 direct trains leave for Novara (42–53 min); there are none between 8:04 am and 1:51 pm. For Milano Centrale you change at Novara: 1 h 33 min – 1 h 54 min.\n\nBy car, without traffic, Milan's Duomo is 73 min (86 km) away and Malpensa T1 53 min. The old village of Orta and the Piazza Motta boat landing are 4 min away, Miasino and Pettenasco 4 min, Ameno 6. Boats run from March to October."
    },
    {
      titolo: "A little more sun than the village",
      testo: "On 21 December our terrain calculation gives Legro 6 h 46 min of direct sun, from 9:26 am to 4:11 pm: seven minutes more than Piazza Motta, and the sun leaves 23 minutes later. On 21 June it is 13 h 36 min. The calculation covers terrain only, no buildings or trees.\n\nFor hazards the municipal figures apply: according to ISPRA, 0.8% of Orta's area has high or very high landslide hazard, and 1.2% of residents live in areas of medium flood hazard, mostly along the shore. Hospital: Omegna has a first-aid point, not an emergency department; the level-I emergency department is in Borgomanero."
    },
    {
      titolo: "The OMI zone names it",
      testo: "The Revenue Agency places Legro in Orta's zone C1, \"Semi-central – hillside lake band and Legro hamlet\". In the 2nd half of 2025 standard homes are valued at €1,200–1,750/m², villas at €1,300–1,950/m², economy homes at €670–1,000/m². Against the 2nd half of 2024, the midpoint for standard homes rose by 5.4%.\n\nFor comparison, the village lakefront (zone B2) reaches €2,050–2,950/m² for standard homes. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
  ],
  perChi: {
    si: [
      "You want the train on your doorstep: Orta-Miasino station is in the hamlet.",
      "You want Orta at lower values than the lakefront (€1,200–1,750/m² against €2,050–2,950).",
      "You prefer to look down on the lake, 4 min from the old village.",
    ],
    no: [
      "You want the water in front of the house: the shore is about 450 m away.",
      "You need a train every half hour: in the morning there is a gap of almost six hours.",
      "You want shops and services in the hamlet: they are in the old village or in Omegna.",
    ],
  },
  faq: [
    { d: "Is Legro a municipality?", r: "No, it is a hamlet of Orta San Giulio. Residents, schools, ISPRA hazards and IMU are those of the municipality: 1,102 inhabitants in all on 1 January 2025. The municipality's state schools are nursery, primary and lower secondary." },
    { d: "How much does a house cost in Legro?", r: "OMI places Legro in Orta's zone C1: standard homes €1,200–1,750/m², villas €1,300–1,950/m² in the 2nd half of 2025. These are estimated valuations, not signed prices. The village lakefront is valued about 70% higher." },
    { d: "How many trains leave Orta-Miasino?", r: "In the sample of Wednesday 7 October 2026: 8 direct trains to Novara, between 6:26 am and 7:52 pm, with journeys of 42–53 min. On Saturday 10 October there were 7. This is not a published official timetable: check it before relying on it." },
    { d: "How much sun does Legro get on 21 December?", r: "6 h 46 min of direct sun, from 9:26 am to 4:11 pm, according to our terrain calculation. Of 8 h 29 min possible, Mottarone to the east takes away almost two hours. Buildings and trees are not in the calculation." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Legro (Orta San Giulio): Wohnen über dem Ort, Preise, Züge",
  descrizione: "Legro, Ortsteil von Orta San Giulio 70 m über dem See, mit dem Bahnhof Orta-Miasino: OMI-Werte Zone C1, Wintersonne, Fahrzeiten ab Mailand und Malpensa.",
  frase: "Legro ist der Ortsteil von Orta San Giulio am Hang, 70 m über dem See, wo der Zug hält: Der Bahnhof Orta-Miasino liegt im Ort, der alte Ortskern ist 4 Min. mit dem Auto entfernt, Mailand 73 Min.",
  vivere: [
    {
      titolo: "Ein Ortsteil, keine Gemeinde",
      testo: "Legro ist ein Ortsteil (frazione) der Gemeinde Orta San Giulio. Einwohner, Schulen, Risiken und Steuern sind die der Gemeinde: insgesamt 1.102 Einwohner (ISTAT, 1. Januar 2025), eine Zahl, die Ortsteil und Kern nicht trennt. Einwohner nach Ortsteilen veröffentlicht ISTAT in den von uns genutzten Dateien nicht.\n\nDer Punkt von Legro liegt auf 360 m, etwa 450 m Luftlinie vom Ufer. Der See liegt hier nicht vor der Tür wie an der Piazza Motta: Man sieht ihn von oben, zwischen Häusern und dem Grün des Hügels."
    },
    {
      titolo: "Der Bahnhof liegt im Ort",
      testo: "Was Legro auszeichnet, ist die Bahn: Der Bahnhof Orta-Miasino an der Strecke Novara–Domodossola liegt im Ortsteil. An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara (42–53 Min.); zwischen 8.04 und 13.51 Uhr keiner. Nach Milano Centrale steigt man in Novara um: 1 h 33 min – 1 h 54 min.\n\nMit dem Auto, ohne Verkehr, ist der Mailänder Dom 73 Min. (86 km) entfernt, Malpensa T1 53 Min. Der Ortskern von Orta und die Anlegestelle an der Piazza Motta sind 4 Min. entfernt, Miasino und Pettenasco 4 Min., Ameno 6. Die Schiffe fahren von März bis Oktober."
    },
    {
      titolo: "Etwas mehr Sonne als unten",
      testo: "Am 21. Dezember ergibt unsere Geländeberechnung für Legro 6 h 46 min direkte Sonne, von 9.26 bis 16.11 Uhr: sieben Minuten mehr als an der Piazza Motta, und die Sonne geht 23 Minuten später. Am 21. Juni sind es 13 h 36 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nFür die Risiken gelten die Zahlen der Gemeinde: Laut ISPRA haben 0,8 % der Fläche von Orta eine hohe oder sehr hohe Rutschungsgefahr, und 1,2 % der Einwohner leben in Gebieten mittlerer Hochwassergefahr, vor allem am Ufer. Krankenhaus: Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero."
    },
    {
      titolo: "Die OMI-Zone nennt es beim Namen",
      testo: "Die Steuerbehörde ordnet Legro der Zone C1 von Orta zu, „Halbzentral – Hangstreifen am See und Ortsteil Legro“. Im 2. Halbjahr 2025 werden Wohnungen mit 1.200–1.750 €/m² bewertet, Villen mit 1.300–1.950 €/m², einfache Wohnungen mit 670–1.000 €/m². Gegenüber dem 2. Halbjahr 2024 stieg die Mitte der Spanne für Wohnungen um 5,4 %.\n\nZum Vergleich: Das Seeufer im Ortskern (Zone B2) erreicht 2.050–2.950 €/m² für Wohnungen. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
  ],
  perChi: {
    si: [
      "Sie wollen den Zug vor der Haustür: Der Bahnhof Orta-Miasino liegt im Ortsteil.",
      "Sie suchen Orta zu niedrigeren Werten als am Ufer (1.200–1.750 €/m² statt 2.050–2.950).",
      "Sie sehen den See lieber von oben, 4 Min. vom Ortskern.",
    ],
    no: [
      "Sie wollen das Wasser vor dem Haus: Das Ufer ist etwa 450 m entfernt.",
      "Sie brauchen einen Zug jede halbe Stunde: Vormittags gibt es eine Lücke von fast sechs Stunden.",
      "Sie wollen Geschäfte im Ort: Die sind im Ortskern oder in Omegna.",
    ],
  },
  faq: [
    { d: "Ist Legro eine Gemeinde?", r: "Nein, ein Ortsteil von Orta San Giulio. Einwohner, Schulen, ISPRA-Risiken und IMU sind die der Gemeinde: insgesamt 1.102 Einwohner am 1. Januar 2025. Die staatlichen Schulen der Gemeinde sind Kindergarten, Grundschule und Mittelschule." },
    { d: "Was kostet ein Haus in Legro?", r: "Die OMI ordnet Legro der Zone C1 von Orta zu: Wohnungen 1.200–1.750 €/m², Villen 1.300–1.950 €/m² im 2. Halbjahr 2025. Das sind geschätzte Richtwerte, keine unterschriebenen Preise. Das Seeufer im Ortskern liegt etwa 70 % höher." },
    { d: "Wie viele Züge fahren ab Orta-Miasino?", r: "In der Stichprobe von Mittwoch, 7. Oktober 2026: 8 direkte Züge nach Novara zwischen 6.26 und 19.52 Uhr, Fahrzeit 42–53 Min. Am Samstag, 10. Oktober, waren es 7. Das ist kein veröffentlichter Fahrplan: Prüfen Sie ihn, bevor Sie darauf bauen." },
    { d: "Wie viel Sonne hat Legro am 21. Dezember?", r: "6 h 46 min direkte Sonne, von 9.26 bis 16.11 Uhr, nach unserer Geländeberechnung. Von 8 h 29 min möglichen nimmt der Mottarone im Osten fast zwei Stunden. Gebäude und Bäume sind nicht berücksichtigt." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Legro (Orta San Giulio): življenje nad krajem, cene in vlaki",
  descrizione: "Legro, zaselek kraja Orta San Giulio 70 m nad jezerom, s postajo Orta-Miasino: vrednosti OMI v coni C1, zimsko sonce, časi od Milana in letališča Malpensa.",
  frase: "Legro je zaselek kraja Orta San Giulio na pobočju, 70 m nad jezerom, kjer ustavi vlak: postaja Orta-Miasino je v zaselku, staro jedro je 4 min vožnje stran, Milano 73 min.",
  vivere: [
    {
      titolo: "Zaselek, ne občina",
      testo: "Legro je zaselek (frazione) občine Orta San Giulio. Prebivalstvo, šole, tveganja in davki so podatki občine: skupaj 1.102 prebivalca (ISTAT, 1. januar 2025), številka, ki zaselka ne loči od jedra. ISTAT v datotekah, ki smo jih uporabili, ne objavlja prebivalcev po zaselkih.\n\nTočka Legra je na 360 m nadmorske višine, približno 450 m zračne črte od obale. Jezero tu ni pred vrati kot na trgu Piazza Motta: gledate ga od zgoraj, med hišami in zelenjem griča."
    },
    {
      titolo: "Postaja je v zaselku",
      testo: "Legro odlikuje železnica: postaja Orta-Miasino na progi Novara–Domodossola je v zaselku. Na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro (42–53 min); med 8.04 in 13.51 nobeden. Za Milano Centrale prestopite v Novari: 1 h 33 min – 1 h 54 min.\n\nZ avtom, brez prometa, je milanska stolnica 73 min (86 km) stran, letališče Malpensa T1 53 min. Staro jedro Orte in pristan na trgu Piazza Motta sta 4 min stran, Miasino in Pettenasco 4 min, Ameno 6. Ladje vozijo od marca do oktobra."
    },
    {
      titolo: "Nekaj več sonca kot spodaj",
      testo: "21. decembra naš izračun na reliefu Legru da 6 h 46 min neposrednega sonca, od 9.26 do 16.11: sedem minut več kot na trgu Piazza Motta, sonce pa zaide 23 minut pozneje. 21. junija je sonca 13 h 36 min. Izračun upošteva le teren, brez stavb in dreves.\n\nZa tveganja veljajo podatki občine: po podatkih ISPRA ima 0,8 % površine Orte visoko ali zelo visoko nevarnost zemeljskih plazov, 1,2 % prebivalcev pa živi na območjih srednje poplavne nevarnosti, predvsem ob obali. Bolnišnica: Omegna ima točko prve pomoči, ne urgence; urgenca I. stopnje je v Borgomaneru."
    },
    {
      titolo: "Cona OMI ga imenuje",
      testo: "Davčna uprava Legro uvršča v cono C1 Orte, »polsrednja – gričevnati pas ob jezeru in zaselek Legro«. V 2. polletju 2025 so običajna stanovanja ovrednotena na 1.200–1.750 €/m², vile na 1.300–1.950 €/m², skromnejša stanovanja na 670–1.000 €/m². Glede na 2. polletje 2024 se je sredina razpona za stanovanja zvišala za 5,4 %.\n\nZa primerjavo: obala v jedru kraja (cona B2) doseže 2.050–2.950 €/m² za stanovanja. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
  ],
  perChi: {
    si: [
      "Želite vlak pred vrati: postaja Orta-Miasino je v zaselku.",
      "Iščete Orto po nižjih vrednostih kot ob obali (1.200–1.750 €/m² namesto 2.050–2.950).",
      "Jezero raje gledate od zgoraj, 4 min od starega jedra.",
    ],
    no: [
      "Želite vodo pred hišo: obala je približno 450 m stran.",
      "Potrebujete vlak vsake pol ure: dopoldne je skoraj šesturna vrzel.",
      "Želite trgovine v zaselku: te so v jedru ali v Omegni.",
    ],
  },
  faq: [
    { d: "Ali je Legro občina?", r: "Ne, je zaselek občine Orta San Giulio. Prebivalci, šole, tveganja ISPRA in IMU so podatki občine: skupaj 1.102 prebivalca 1. januarja 2025. Državne šole v občini so vrtec, osnovna šola in nižja srednja šola." },
    { d: "Koliko stane hiša v Legru?", r: "OMI Legro uvršča v cono C1 Orte: običajna stanovanja 1.200–1.750 €/m², vile 1.300–1.950 €/m² v 2. polletju 2025. To so ocenjene vrednosti, ne podpisane cene. Obala v jedru kraja je ovrednotena za približno 70 % više." },
    { d: "Koliko vlakov odpelje s postaje Orta-Miasino?", r: "V vzorcu za sredo, 7. oktobra 2026: 8 neposrednih vlakov v Novaro med 6.26 in 19.52, vožnja 42–53 min. V soboto, 10. oktobra, jih je bilo 7. To ni objavljen uradni vozni red: preverite ga, preden računate nanj." },
    { d: "Koliko sonca ima Legro 21. decembra?", r: "6 h 46 min neposrednega sonca, od 9.26 do 16.11, po našem izračunu na reliefu. Od 8 h 29 min mogočih jih Mottarone na vzhodu vzame skoraj dve uri. Stavbe in drevesa niso upoštevani." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
