import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Ameno (nessuna zona nomina Vacciago)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS), comune di Ameno", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Ameno", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3002", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Fondazione Antonio e Carmela Calderara", url: "https://www.fondazionecalderara.it/", data: "2026-10-06" },
  { titolo: "Abbonamento Musei – Fondazione Antonio e Carmela Calderara (327 opere)", url: "https://abbonamentomusei.it/en/spazio_espositivo/fondazione-antonio-e-carmela-calderara/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Ameno (Casa Calderara con loggiato rinascimentale)", url: "https://it.wikipedia.org/wiki/Ameno", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Vacciago (Ameno): vivere sopra il lago d'Orta, prezzi e sole",
  descrizione: "Vacciago, frazione di Ameno a 194 m sopra il lago d'Orta: 8 h di sole il 21 dicembre, Fondazione Calderara, quotazioni OMI di Ameno, 72 min da Milano.",
  frase: "Vacciago è la frazione di Ameno affacciata verso Orta, 194 m sopra il lago e a 500 m dalla riva: 8 h di sole il 21 dicembre, 72 min da Milano, 8 min da Orta.",
  vivere: [
    {
      titolo: "Una frazione di Ameno",
      testo: "Vacciago non è un comune: è una frazione di Ameno, più in basso del capoluogo e rivolta verso Orta. Residenti, scuole, rischi e tasse sono quelli del comune: 874 abitanti in tutto (ISTAT, 1° gennaio 2025), senza distinzione per frazione nei dati che abbiamo usato.\n\nIl punto della frazione sta a 484 m, 194 m sopra il lago e a circa 500 m in linea d'aria dalla riva: è il luogo delle colline più vicino all'acqua. Qui ha sede la Fondazione Antonio e Carmela Calderara, nella casa-studio del pittore, un palazzo seicentesco: 327 opere, 56 di Calderara e 271 di artisti europei, americani, giapponesi e cinesi."
    },
    {
      titolo: "Otto ore di sole a dicembre",
      testo: "Il 21 dicembre il nostro calcolo dà a Vacciago 8 h 00 min di sole diretto, dalle 08:28 alle 16:27, su 8 h 29 min possibili: quasi quanto Ameno, il massimo dell'atlante, e 81 minuti più di piazza Motta. Il 21 giugno sono 14 h 35 min. Il calcolo considera solo il rilievo, senza edifici né alberi.\n\nPer ISPRA, nel comune di Ameno lo 0,1% dei residenti vive in aree a pericolosità da frana elevata o molto elevata; il 4,9% del territorio, con l'1,3% dei residenti, è a pericolosità idraulica lungo i corsi d'acqua."
    },
    {
      titolo: "Servizi: si scende a Orta",
      testo: "Nel comune di Ameno c'è solo la scuola dell'infanzia statale; primaria e medie sono a Orta (8 min) o a Miasino (3 min, primaria). Il liceo più vicino è a Gozzano, 8 min. Per la sanità, Omegna ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero.\n\nNegozi e servizi in frazione non li abbiamo censiti: per la vita di ogni giorno si conta su Orta e sui paesi vicini, in auto."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI nessuna zona di Ameno nomina Vacciago, quindi non sappiamo in quale zona cada. Nel comune, nel 2° semestre 2025, la zona collinare residenziale D1 quota le abitazioni civili 1.100–1.550 €/m² e ville e villini 1.150–1.650 €/m²; il vecchio nucleo B1 quota le civili 990–1.450 €/m². Sul 2° semestre 2024 le civili della D1 sono salite del 6,0% al centro dell'intervallo.\n\nLa zona C1 di Orta, poco sotto, quota le ville 1.300–1.950 €/m². Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 72 min (84 km) da Milano Duomo, 51 min (44 km) da Malpensa T1, 79 min da Lugano. La stazione Orta-Miasino è a 1,2 km in linea d'aria: in un mercoledì campione partono 8 treni diretti per Novara, nessuno tra le 08:04 e le 13:51; per Milano si cambia a Novara.\n\nL'imbarcadero di piazza Motta, a Orta, è a 2,3 km in linea d'aria e 8 min d'auto; i battelli viaggiano da marzo a ottobre."
    },
  ],
  perChi: {
    si: [
      "Volete il sole di collina (8 h il 21 dicembre) restando vicini a Orta.",
      "Cercate una casa sopra il lago a quotazioni di collina.",
      "Vi interessa vivere accanto a una collezione d'arte contemporanea.",
    ],
    no: [
      "Volete una frazione con negozi e scuole: qui si va a Orta o a Miasino.",
      "Volete un dato di prezzo preciso per la frazione: l'OMI non la nomina.",
      "Non volete usare l'auto ogni giorno.",
    ],
  },
  faq: [
    { d: "Vacciago è un comune?", r: "No, è una frazione di Ameno. Abitanti, scuole, rischi ISPRA e tasse sono del comune: 874 residenti al 1° gennaio 2025. Nel comune c'è solo la scuola dell'infanzia statale." },
    { d: "Quanto costa una casa a Vacciago?", r: "L'OMI non ha una zona che nomini Vacciago. Nel comune di Ameno la zona collinare D1 quota le abitazioni civili 1.100–1.550 €/m² e le ville 1.150–1.650 €/m² (2° semestre 2025). Sono intervalli stimati, non prezzi firmati." },
    { d: "Che cos'è la Fondazione Calderara?", r: "È la casa-studio del pittore Antonio Calderara (1903–1978) in un palazzo seicentesco di Vacciago. Conserva 327 opere: 56 sue e 271 di altri artisti europei, americani, giapponesi e cinesi. Orari e aperture vanno controllati sul sito della Fondazione." },
    { d: "Quanto sole c'è a Vacciago d'inverno?", r: "Il 21 dicembre 8 h 00 min di sole diretto, dalle 08:28 alle 16:27, secondo il nostro calcolo sul rilievo. Sono 81 minuti più di Orta, che sta 190 m più in basso. Edifici e alberi non sono considerati." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Vacciago (Ameno): living above Lake Orta, prices and sun",
  descrizione: "Vacciago, a hamlet of Ameno 194 m above Lake Orta: 8 h of sun on 21 December, the Calderara Foundation, Ameno's OMI values, 72 min from Milan.",
  frase: "Vacciago is the hamlet of Ameno facing Orta, 194 m above the lake and 500 m from the shore: 8 h of sun on 21 December, 72 min from Milan, 8 min from Orta.",
  vivere: [
    {
      titolo: "A hamlet of Ameno",
      testo: "Vacciago is not a municipality: it is a hamlet of Ameno, lower than the main village and facing Orta. Residents, schools, hazards and taxes are those of the municipality: 874 inhabitants in all (ISTAT, 1 January 2025), not split by hamlet in the data we used.\n\nThe hamlet's point is at 484 m, 194 m above the lake and about 500 m from the shore as the crow flies: the hill place closest to the water. It is home to the Antonio and Carmela Calderara Foundation, in the painter's house-studio, a 17th-century palazzo: 327 works, 56 by Calderara and 271 by European, American, Japanese and Chinese artists."
    },
    {
      titolo: "Eight hours of sun in December",
      testo: "On 21 December our calculation gives Vacciago 8 h 00 min of direct sun, from 8:28 am to 4:27 pm, out of 8 h 29 min possible: almost as much as Ameno, the atlas maximum, and 81 minutes more than Piazza Motta. On 21 June it is 14 h 35 min. The calculation covers terrain only, without buildings or trees.\n\nAccording to ISPRA, in the municipality of Ameno 0.1% of residents live in areas of high or very high landslide hazard; 4.9% of the territory, with 1.3% of residents, has flood hazard along watercourses."
    },
    {
      titolo: "Services: you go down to Orta",
      testo: "The municipality of Ameno has only a state nursery school; primary and lower secondary are in Orta (8 min) or Miasino (3 min, primary). The nearest liceo is in Gozzano, 8 min. For healthcare, Omegna has a first-aid point, not an emergency department; the level-I emergency department is in Borgomanero.\n\nWe have not surveyed shops and services in the hamlet: for everyday life you rely on Orta and the nearby villages, by car."
    },
    {
      titolo: "What you buy and at what price",
      testo: "No OMI zone of Ameno names Vacciago, so we do not know which zone it falls in. In the municipality, in the 2nd half of 2025, the residential hill zone D1 values standard homes at €1,100–1,550/m² and villas at €1,150–1,650/m²; the old core B1 values standard homes at €990–1,450/m². Against the 2nd half of 2024, D1 standard homes rose by 6.0% at the midpoint.\n\nOrta's zone C1, just below, values villas at €1,300–1,950/m². These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 72 min (84 km) from Milan's Duomo, 51 min (44 km) from Malpensa T1, 79 min from Lugano. Orta-Miasino station is 1.2 km away as the crow flies: on a sample Wednesday 8 direct trains leave for Novara, none between 8:04 am and 1:51 pm; for Milan you change at Novara.\n\nThe Piazza Motta boat landing in Orta is 2.3 km away as the crow flies and 8 min by car; boats run from March to October."
    },
  ],
  perChi: {
    si: [
      "You want hillside sun (8 h on 21 December) while staying close to Orta.",
      "You want a house above the lake at hillside values.",
      "You like the idea of living next to a contemporary art collection.",
    ],
    no: [
      "You want a hamlet with shops and schools: here you go to Orta or Miasino.",
      "You want a precise price figure for the hamlet: OMI does not name it.",
      "You do not want to use the car every day.",
    ],
  },
  faq: [
    { d: "Is Vacciago a municipality?", r: "No, it is a hamlet of Ameno. Residents, schools, ISPRA hazards and taxes are the municipality's: 874 residents on 1 January 2025. The municipality has only a state nursery school." },
    { d: "How much does a house cost in Vacciago?", r: "OMI has no zone naming Vacciago. In the municipality of Ameno, hill zone D1 values standard homes at €1,100–1,550/m² and villas at €1,150–1,650/m² (2nd half of 2025). These are estimated ranges, not signed prices." },
    { d: "What is the Calderara Foundation?", r: "It is the house-studio of the painter Antonio Calderara (1903–1978) in a 17th-century palazzo in Vacciago. It holds 327 works: 56 of his and 271 by other European, American, Japanese and Chinese artists. Check opening times on the Foundation's website." },
    { d: "How much winter sun does Vacciago get?", r: "On 21 December, 8 h 00 min of direct sun, from 8:28 am to 4:27 pm, according to our terrain calculation. That is 81 minutes more than Orta, 190 m lower down. Buildings and trees are not considered." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Vacciago (Ameno): Wohnen über dem Ortasee, Preise und Sonne",
  descrizione: "Vacciago, Ortsteil von Ameno 194 m über dem Ortasee: 8 h Sonne am 21. Dezember, Fondazione Calderara, OMI-Werte von Ameno, 72 Min. von Mailand.",
  frase: "Vacciago ist der Ortsteil von Ameno mit Blick Richtung Orta, 194 m über dem See und 500 m vom Ufer: 8 h Sonne am 21. Dezember, 72 Min. von Mailand, 8 Min. von Orta.",
  vivere: [
    {
      titolo: "Ein Ortsteil von Ameno",
      testo: "Vacciago ist keine Gemeinde, sondern ein Ortsteil von Ameno, tiefer als der Hauptort und nach Orta ausgerichtet. Einwohner, Schulen, Risiken und Steuern sind die der Gemeinde: insgesamt 874 Einwohner (ISTAT, 1. Januar 2025), in unseren Daten nicht nach Ortsteilen getrennt.\n\nDer Punkt des Ortsteils liegt auf 484 m, 194 m über dem See und etwa 500 m Luftlinie vom Ufer: der Hügelort, der dem Wasser am nächsten ist. Hier sitzt die Fondazione Antonio e Carmela Calderara, im Wohnatelier des Malers, einem Palazzo aus dem 17. Jahrhundert: 327 Werke, 56 von Calderara und 271 von europäischen, amerikanischen, japanischen und chinesischen Künstlern."
    },
    {
      titolo: "Acht Stunden Sonne im Dezember",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Vacciago 8 h 00 min direkte Sonne, von 8.28 bis 16.27 Uhr, von 8 h 29 min möglichen: fast so viel wie Ameno, das Maximum im Atlas, und 81 Minuten mehr als an der Piazza Motta. Am 21. Juni sind es 14 h 35 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nLaut ISPRA leben in der Gemeinde Ameno 0,1 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr; 4,9 % des Gebiets, mit 1,3 % der Einwohner, haben Hochwassergefahr entlang der Bäche."
    },
    {
      titolo: "Versorgung: hinunter nach Orta",
      testo: "Die Gemeinde Ameno hat nur einen staatlichen Kindergarten; Grund- und Mittelschule sind in Orta (8 Min.) oder Miasino (3 Min., Grundschule). Das nächste Gymnasium ist in Gozzano, 8 Min. Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero.\n\nGeschäfte und Dienste im Ortsteil haben wir nicht erhoben: Für den Alltag rechnet man mit Orta und den Nachbarorten, mit dem Auto."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Keine OMI-Zone von Ameno nennt Vacciago, daher wissen wir nicht, in welche Zone es fällt. In der Gemeinde bewertet die Hangwohnzone D1 im 2. Halbjahr 2025 Wohnungen mit 1.100–1.550 €/m² und Villen mit 1.150–1.650 €/m²; der alte Kern B1 Wohnungen mit 990–1.450 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen in D1 um 6,0 % in der Mitte der Spanne.\n\nDie Zone C1 von Orta, knapp darunter, bewertet Villen mit 1.300–1.950 €/m². Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 72 Min. (84 km) vom Mailänder Dom, 51 Min. (44 km) von Malpensa T1, 79 Min. von Lugano. Der Bahnhof Orta-Miasino liegt 1,2 km Luftlinie entfernt: An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara, zwischen 8.04 und 13.51 Uhr keiner; nach Mailand steigt man in Novara um.\n\nDie Anlegestelle an der Piazza Motta in Orta ist 2,3 km Luftlinie und 8 Autominuten entfernt; die Schiffe fahren von März bis Oktober."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Hügelsonne (8 h am 21. Dezember) und Orta in der Nähe.",
      "Sie suchen ein Haus über dem See zu Hügelwerten.",
      "Sie mögen die Nähe einer Sammlung zeitgenössischer Kunst.",
    ],
    no: [
      "Sie wollen einen Ortsteil mit Geschäften und Schulen: Dafür fährt man nach Orta oder Miasino.",
      "Sie wollen einen genauen Preiswert für den Ortsteil: Die OMI nennt ihn nicht.",
      "Sie wollen nicht jeden Tag Auto fahren.",
    ],
  },
  faq: [
    { d: "Ist Vacciago eine Gemeinde?", r: "Nein, ein Ortsteil von Ameno. Einwohner, Schulen, ISPRA-Risiken und Steuern sind die der Gemeinde: 874 Einwohner am 1. Januar 2025. In der Gemeinde gibt es nur einen staatlichen Kindergarten." },
    { d: "Was kostet ein Haus in Vacciago?", r: "Die OMI hat keine Zone, die Vacciago nennt. In der Gemeinde Ameno bewertet die Hangzone D1 Wohnungen mit 1.100–1.550 €/m² und Villen mit 1.150–1.650 €/m² (2. Halbjahr 2025). Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Was ist die Fondazione Calderara?", r: "Das Wohnatelier des Malers Antonio Calderara (1903–1978) in einem Palazzo des 17. Jahrhunderts in Vacciago. Sie bewahrt 327 Werke: 56 von ihm und 271 von anderen europäischen, amerikanischen, japanischen und chinesischen Künstlern. Öffnungszeiten stehen auf der Website der Stiftung." },
    { d: "Wie viel Wintersonne hat Vacciago?", r: "Am 21. Dezember 8 h 00 min direkte Sonne, von 8.28 bis 16.27 Uhr, nach unserer Geländeberechnung. Das sind 81 Minuten mehr als in Orta, 190 m tiefer. Gebäude und Bäume sind nicht berücksichtigt." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Vacciago (Ameno): življenje nad jezerom Orta, cene in sonce",
  descrizione: "Vacciago, zaselek Amena 194 m nad jezerom Orta: 8 h sonca 21. decembra, fundacija Calderara, vrednosti OMI za Ameno, 72 min od Milana.",
  frase: "Vacciago je zaselek Amena, obrnjen proti Orti, 194 m nad jezerom in 500 m od obale: 8 h sonca 21. decembra, 72 min od Milana, 8 min od Orte.",
  vivere: [
    {
      titolo: "Zaselek Amena",
      testo: "Vacciago ni občina, temveč zaselek Amena, niže od glavnega naselja in obrnjen proti Orti. Prebivalci, šole, tveganja in davki so podatki občine: skupaj 874 prebivalcev (ISTAT, 1. januar 2025), v naših podatkih niso ločeni po zaselkih.\n\nTočka zaselka je na 484 m, 194 m nad jezerom in približno 500 m zračne črte od obale: gričevnati kraj, ki je vodi najbližji. Tu ima sedež fundacija Antonio e Carmela Calderara, v slikarjevi hiši-ateljeju, palači iz 17. stoletja: 327 del, 56 Calderarovih in 271 evropskih, ameriških, japonskih in kitajskih umetnikov."
    },
    {
      titolo: "Osem ur sonca decembra",
      testo: "21. decembra naš izračun Vacciagu da 8 h 00 min neposrednega sonca, od 8.28 do 16.27, od 8 h 29 min mogočih: skoraj toliko kot Ameno, največ v atlasu, in 81 minut več kot na trgu Piazza Motta. 21. junija je sonca 14 h 35 min. Izračun upošteva le teren, brez stavb in dreves.\n\nPo podatkih ISPRA v občini Ameno 0,1 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov; 4,9 % ozemlja, z 1,3 % prebivalcev, ima poplavno nevarnost ob vodotokih."
    },
    {
      titolo: "Storitve: navzdol v Orto",
      testo: "Občina Ameno ima le državni vrtec; osnovna in nižja srednja šola sta v Orti (8 min) ali Miasinu (3 min, osnovna šola). Najbližja gimnazija je v Gozzanu, 8 min. Omegna ima točko prve pomoči, ne urgence; urgenca I. stopnje je v Borgomaneru.\n\nTrgovin in storitev v zaselku nismo popisali: za vsakdan računate na Orto in sosednje kraje, z avtom."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Nobena cona OMI v Amenu ne imenuje Vacciaga, zato ne vemo, v katero cono spada. V občini gričevnata stanovanjska cona D1 v 2. polletju 2025 vrednoti običajna stanovanja na 1.100–1.550 €/m², vile na 1.150–1.650 €/m²; staro jedro B1 stanovanja na 990–1.450 €/m². Glede na 2. polletje 2024 so se stanovanja v D1 v sredini razpona podražila za 6,0 %.\n\nCona C1 v Orti, tik pod zaselkom, vrednoti vile na 1.300–1.950 €/m². To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 72 min (84 km) od milanske stolnice, 51 min (44 km) od letališča Malpensa T1, 79 min od Lugana. Postaja Orta-Miasino je 1,2 km zračne črte stran: na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro, med 8.04 in 13.51 nobeden; za Milano prestopite v Novari.\n\nPristan na trgu Piazza Motta v Orti je 2,3 km zračne črte in 8 min vožnje stran; ladje vozijo od marca do oktobra."
    },
  ],
  perChi: {
    si: [
      "Želite sonce na griču (8 h 21. decembra) in Orto v bližini.",
      "Iščete hišo nad jezerom po gričevnatih vrednostih.",
      "Všeč vam je bližina zbirke sodobne umetnosti.",
    ],
    no: [
      "Želite zaselek s trgovinami in šolami: zanje se vozite v Orto ali Miasino.",
      "Želite natančen podatek o cenah za zaselek: OMI ga ne imenuje.",
      "Ne želite vsak dan voziti avtomobila.",
    ],
  },
  faq: [
    { d: "Ali je Vacciago občina?", r: "Ne, je zaselek Amena. Prebivalci, šole, tveganja ISPRA in davki so podatki občine: 874 prebivalcev 1. januarja 2025. V občini je le državni vrtec." },
    { d: "Koliko stane hiša v Vacciagu?", r: "OMI nima cone, ki bi imenovala Vacciago. V občini Ameno gričevnata cona D1 vrednoti običajna stanovanja na 1.100–1.550 €/m², vile na 1.150–1.650 €/m² (2. polletje 2025). To so ocenjeni razponi, ne podpisane cene." },
    { d: "Kaj je fundacija Calderara?", r: "To je hiša-atelje slikarja Antonia Calderare (1903–1978) v palači iz 17. stoletja v Vacciagu. Hrani 327 del: 56 njegovih in 271 drugih evropskih, ameriških, japonskih in kitajskih umetnikov. Urnik obiskov preverite na spletni strani fundacije." },
    { d: "Koliko zimskega sonca ima Vacciago?", r: "21. decembra 8 h 00 min neposrednega sonca, od 8.28 do 16.27, po našem izračunu na reliefu. To je 81 minut več kot v Orti, ki leži 190 m niže. Stavbe in drevesa niso upoštevani." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
