import type { Fonte, PerLingua, TestiMondoPagina } from "../luoghi/tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 (Orta San Giulio, Pettenasco, Pella, San Maurizio d'Opaglio, Madonna del Sasso)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità per comune", url: "https://idrogeo.isprambiente.it/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "Ministero della Cultura, Ufficio UNESCO – Sacri Monti del Piemonte e della Lombardia", url: "https://unesco.cultura.gov.it/en/projects/sacri-monti-of-piedmont-and-lombardy/", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiMondoPagina = {
  titolo: "Sponda est del lago d'Orta: Orta, Legro, Pettenasco",
  descrizione: "La sponda est del lago d'Orta: Orta San Giulio, Legro e Pettenasco. Treno, battelli, OMI fino a 3.000 €/m², sole d'inverno corto, 73–75 min da Milano.",
  h1: "Orta San Giulio, Legro e Pettenasco: la sponda est del lago d'Orta",
  minuto: "La sponda est è la riva con il treno: due stazioni sulla linea Novara–Domodossola, Orta-Miasino a Legro e Pettenasco, e la strada che corre lungo l'acqua. Qui stanno l'isola di San Giulio, il Sacro Monte UNESCO e l'imbarcadero principale, in piazza Motta. La riva guarda a ovest: il lago e il sole del pomeriggio sono davanti, il Mottarone alle spalle ritarda l'alba d'inverno, e il 21 dicembre il sole diretto dura 6 h 19 min – 6 h 46 min. Sul lungolago di Orta l'OMI quota le ville 2.100–3.000 €/m², i valori più alti del lago; Pettenasco, 5 min più a nord, sta circa il 40% sotto. Da Milano sono 73–75 min senza traffico.",
  vivere: [
    {
      titolo: "Tre luoghi, una riva",
      testo: "Orta San Giulio è il borgo con l'isola davanti, 1.102 abitanti, piazza Motta a 9 m sopra il lago. Legro è la sua frazione a mezza costa, 70 m più su, con la stazione. Pettenasco, 1.308 abitanti, è il paese dei tornitori, con spiaggia, imbarcadero e stazione propri. Si passa dall'uno all'altro in 4–5 minuti d'auto."
    },
    {
      titolo: "Il treno c'è, ma non spesso",
      testo: "Le due stazioni, Orta-Miasino a Legro e Pettenasco, sono a pochi passi dalle case: sulla sponda ovest non ce n'è nessuna. In un mercoledì campione da Orta-Miasino partono 8 treni diretti per Novara, in 42–53 minuti, con un vuoto tra le 08:04 e le 13:51. Per Milano si cambia a Novara: 1 h 33 min – 1 h 54 min. I battelli collegano Orta, l'isola e Pettenasco da marzo a ottobre."
    },
    {
      titolo: "Il prezzo della riva",
      testo: "L'OMI (2° semestre 2025) quota sul lungolago di Orta le abitazioni civili 2.050–2.950 €/m² e le ville 2.100–3.000 €/m²; sul lungolago di Pettenasco le civili 1.250–1.800 €/m² e le ville 1.500–2.250 €/m². La fascia collinare di Orta, che comprende Legro, sta a 1.200–1.750 €/m² per le civili. Sono quotazioni, non prezzi di compravendita."
    },
    {
      titolo: "I limiti della sponda est",
      testo: "Il sole d'inverno è corto: il Mottarone a est alza l'orizzonte a 14–16°, e il 21 dicembre il primo sole arriva tra le 09:10 e le 09:33. Orta si riempie di visitatori nei fine settimana d'estate. A Pettenasco, per ISPRA, il 18,9% dei residenti vive in aree a pericolosità da frana elevata o molto elevata e il 19,8% in aree a pericolosità idraulica media. Il DEA di I livello più vicino è a Borgomanero; Omegna ha un Punto di Primo Intervento."
    },
  ],
  perChi: {
    si: [
      "Volete l'isola e il borgo a piedi, con il treno a 1–2 km.",
      "Cercate il lago con i servizi turistici e culturali più vicini.",
      "Vi va bene pagare le quotazioni più alte del lago per stare sull'acqua.",
    ],
    no: [
      "Volete sole lungo d'inverno: le colline sopra ne hanno fino a 8 h 04 min.",
      "Cercate quiete nei fine settimana d'estate.",
      "Avete un budget da collina: lì le ville stanno a 1.150–1.650 €/m².",
    ],
  },
  confronto: {
    titolo: "Sponda est e sponda ovest a confronto",
    altro: "Sponda ovest",
    righe: [
      ["Ferrovia", "2 stazioni (Orta-Miasino, Pettenasco)", "Nessuna"],
      ["Da Milano Duomo, senza traffico", "73–75 min", "72–82 min"],
      ["Sole diretto il 21 dicembre", "6 h 19 min – 6 h 46 min", "5 h 39 min – 7 h 17 min"],
      ["Primo sole il 21 dicembre", "09:10–09:33", "08:11–08:28"],
      ["Ville, zona OMI più cara", "2.100–3.000 €/m² (Orta, lungolago)", "1.550–2.200 €/m² (Pella, lungolago)"],
      ["Residenti dei comuni (2025)", "2.410", "4.226"],
      ["Residenti in aree di frana P3–P4 (ISPRA)", "1,1–18,9%", "0–8,6%"],
    ],
  },
  faq: [
    { d: "Qual è la differenza tra sponda est e sponda ovest?", r: "La sponda est ha il treno, Orta e l'isola, e guarda il sole del pomeriggio; la sponda ovest non ha ferrovia, guarda Orta da lontano e ha il sole del mattino. Sulla riva est le ville a lago sono quotate fino a 3.000 €/m², su quella ovest fino a 2.200 €/m². I tempi da Milano sono simili, 72–82 min." },
    { d: "Quanto costa vivere sulla sponda est?", r: "Dipende molto dal luogo: le ville sul lungolago di Orta sono quotate 2.100–3.000 €/m², quelle sul lungolago di Pettenasco 1.500–2.250 €/m², le civili della collina di Orta e di Legro 1.200–1.750 €/m² (OMI, 2° semestre 2025). Sono intervalli stimati, non prezzi firmati." },
    { d: "Sulla sponda est si può vivere senza auto?", r: "In parte: due stazioni, battelli da marzo a ottobre e un borgo da girare a piedi. Ma i treni sono 8 al giorno verso Novara, con un vuoto di quasi sei ore al mattino, e da novembre a febbraio non risulta servizio di battelli. Per la spesa grande e la sanità serve l'auto." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiMondoPagina = {
  titolo: "Lake Orta's east shore: Orta, Legro, Pettenasco",
  descrizione: "Lake Orta's east shore: Orta San Giulio, Legro and Pettenasco. Trains, boats, OMI values up to €3,000/m², short winter sun. 73–75 min from Milan.",
  h1: "Orta San Giulio, Legro and Pettenasco: the east shore of Lake Orta",
  minuto: "The east shore is the shore with the train: two stations on the Novara–Domodossola line, Orta-Miasino at Legro and Pettenasco, and the road running along the water. Here are the island of San Giulio, the UNESCO Sacro Monte and the main boat landing, on Piazza Motta. The shore faces west: the lake and the afternoon sun are in front, Mottarone behind delays winter sunrise, and on 21 December direct sun lasts 6 h 19 min – 6 h 46 min. On Orta's lakefront OMI values villas at €2,100–3,000/m², the highest on the lake; Pettenasco, 5 min north, is about 40% lower. Milan is 73–75 min away without traffic.",
  vivere: [
    {
      titolo: "Three places, one shore",
      testo: "Orta San Giulio is the village with the island in front, 1,102 residents, Piazza Motta 9 m above the lake. Legro is its hillside hamlet, 70 m higher, with the station. Pettenasco, 1,308 residents, is the wood turners' village, with its own beach, boat landing and station. You drive from one to the other in 4–5 minutes."
    },
    {
      titolo: "There is a train, but not often",
      testo: "The two stations, Orta-Miasino at Legro and Pettenasco, are a short walk from the houses: the west shore has none. On a sample Wednesday 8 direct trains leave Orta-Miasino for Novara, taking 42–53 minutes, with a gap between 8:04 am and 1:51 pm. For Milan you change at Novara: 1 h 33 min – 1 h 54 min. Boats link Orta, the island and Pettenasco from March to October."
    },
    {
      titolo: "The price of the shore",
      testo: "OMI (2nd half of 2025) values standard homes on Orta's lakefront at €2,050–2,950/m² and villas at €2,100–3,000/m²; on Pettenasco's lakefront standard homes at €1,250–1,800/m² and villas at €1,500–2,250/m². Orta's hillside band, which includes Legro, is at €1,200–1,750/m² for standard homes. These are valuations, not sale prices."
    },
    {
      titolo: "The limits of the east shore",
      testo: "Winter sun is short: Mottarone to the east raises the horizon to 14–16°, and on 21 December the first sun arrives between 9:10 and 9:33 am. Orta fills with visitors on summer weekends. In Pettenasco, according to ISPRA, 18.9% of residents live in areas of high or very high landslide hazard and 19.8% in areas of medium flood hazard. The nearest level-I emergency department is in Borgomanero; Omegna has a first-aid point."
    },
  ],
  perChi: {
    si: [
      "You want the island and the village on foot, with the train 1–2 km away.",
      "You want the lake with tourist and cultural services closest at hand.",
      "You accept the lake's highest values to live on the water.",
    ],
    no: [
      "You want long winter sun: the hills above get up to 8 h 04 min.",
      "You want quiet on summer weekends.",
      "Your budget is a hillside one: there villas are at €1,150–1,650/m².",
    ],
  },
  confronto: {
    titolo: "East shore and west shore compared",
    altro: "West shore",
    righe: [
      ["Railway", "2 stations (Orta-Miasino, Pettenasco)", "None"],
      ["From Milan's Duomo, no traffic", "73–75 min", "72–82 min"],
      ["Direct sun on 21 December", "6 h 19 min – 6 h 46 min", "5 h 39 min – 7 h 17 min"],
      ["First sun on 21 December", "9:10–9:33 am", "8:11–8:28 am"],
      ["Villas, highest OMI zone", "€2,100–3,000/m² (Orta, lakefront)", "€1,550–2,200/m² (Pella, lakefront)"],
      ["Residents of the municipalities (2025)", "2,410", "4,226"],
      ["Residents in P3–P4 landslide areas (ISPRA)", "1.1–18.9%", "0–8.6%"],
    ],
  },
  faq: [
    { d: "What is the difference between the east and west shores?", r: "The east shore has the train, Orta and the island, and faces the afternoon sun; the west shore has no railway, looks at Orta from across the water and gets the morning sun. On the east shore lakefront villas are valued up to €3,000/m², on the west up to €2,200/m². Times from Milan are similar, 72–82 min." },
    { d: "How much does it cost to live on the east shore?", r: "It depends a lot on the place: villas on Orta's lakefront are valued at €2,100–3,000/m², on Pettenasco's lakefront at €1,500–2,250/m², standard homes on Orta's hillside and in Legro at €1,200–1,750/m² (OMI, 2nd half of 2025). These are estimated ranges, not signed prices." },
    { d: "Can you live on the east shore without a car?", r: "Partly: two stations, boats from March to October and a village you can walk. But there are 8 trains a day to Novara, with a gap of almost six hours in the morning, and from November to February no boat service is listed. For big shopping and healthcare you need a car." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiMondoPagina = {
  titolo: "Ostufer des Ortasees: Orta, Legro, Pettenasco",
  descrizione: "Das Ostufer des Ortasees: Orta San Giulio, Legro und Pettenasco. Bahn, Schiffe, OMI-Werte bis 3.000 €/m², kurze Wintersonne. 73–75 Min. von Mailand.",
  h1: "Orta San Giulio, Legro und Pettenasco: das Ostufer des Ortasees",
  minuto: "Das Ostufer ist das Ufer mit der Bahn: zwei Bahnhöfe an der Strecke Novara–Domodossola, Orta-Miasino in Legro und Pettenasco, und die Straße am Wasser entlang. Hier liegen die Insel San Giulio, der Sacro Monte (UNESCO) und die wichtigste Anlegestelle an der Piazza Motta. Das Ufer schaut nach Westen: See und Nachmittagssonne liegen vorn, der Mottarone im Rücken verzögert den Sonnenaufgang im Winter, und am 21. Dezember dauert die direkte Sonne 6 h 19 min – 6 h 46 min. Am Ufer von Orta bewertet die OMI Villen mit 2.100–3.000 €/m², die höchsten Werte am See; Pettenasco, 5 Min. nördlich, liegt etwa 40 % darunter. Mailand ist ohne Verkehr 73–75 Min. entfernt.",
  vivere: [
    {
      titolo: "Drei Orte, ein Ufer",
      testo: "Orta San Giulio ist der Ort mit der Insel davor, 1.102 Einwohner, die Piazza Motta 9 m über dem See. Legro ist sein Ortsteil am Hang, 70 m höher, mit dem Bahnhof. Pettenasco, 1.308 Einwohner, ist das Dorf der Drechsler, mit eigenem Strand, eigener Anlegestelle und eigenem Bahnhof. Von einem zum anderen fährt man 4–5 Minuten."
    },
    {
      titolo: "Die Bahn ist da, aber nicht oft",
      testo: "Die zwei Bahnhöfe, Orta-Miasino in Legro und Pettenasco, liegen in Gehweite der Häuser: Das Westufer hat keinen. An einem Stichproben-Mittwoch fahren ab Orta-Miasino 8 direkte Züge nach Novara, in 42–53 Minuten, mit einer Lücke zwischen 8.04 und 13.51 Uhr. Nach Mailand steigt man in Novara um: 1 h 33 min – 1 h 54 min. Schiffe verbinden Orta, die Insel und Pettenasco von März bis Oktober."
    },
    {
      titolo: "Der Preis des Ufers",
      testo: "Die OMI (2. Halbjahr 2025) bewertet am Ufer von Orta Wohnungen mit 2.050–2.950 €/m² und Villen mit 2.100–3.000 €/m²; am Ufer von Pettenasco Wohnungen mit 1.250–1.800 €/m² und Villen mit 1.500–2.250 €/m². Der Hangstreifen von Orta, zu dem Legro gehört, liegt bei 1.200–1.750 €/m² für Wohnungen. Das sind Richtwerte, keine Kaufpreise."
    },
    {
      titolo: "Die Grenzen des Ostufers",
      testo: "Die Wintersonne ist kurz: Der Mottarone im Osten hebt den Horizont auf 14–16°, und am 21. Dezember kommt die erste Sonne zwischen 9.10 und 9.33 Uhr. Orta füllt sich an Sommerwochenenden mit Besuchern. In Pettenasco leben laut ISPRA 18,9 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr und 19,8 % in Gebieten mittlerer Hochwassergefahr. Die nächste Notaufnahme der Stufe I ist in Borgomanero; Omegna hat eine Erste-Hilfe-Stelle."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Insel und Ortskern zu Fuß, mit der Bahn in 1–2 km.",
      "Sie wollen den See mit dem nächsten touristischen und kulturellen Angebot.",
      "Sie zahlen für das Wasser die höchsten Werte am See.",
    ],
    no: [
      "Sie wollen lange Wintersonne: Die Hügel darüber haben bis zu 8 h 04 min.",
      "Sie suchen Ruhe an Sommerwochenenden.",
      "Ihr Budget ist eines für die Hügel: Dort liegen Villen bei 1.150–1.650 €/m².",
    ],
  },
  confronto: {
    titolo: "Ostufer und Westufer im Vergleich",
    altro: "Westufer",
    righe: [
      ["Bahn", "2 Bahnhöfe (Orta-Miasino, Pettenasco)", "Keine"],
      ["Ab Mailänder Dom, ohne Verkehr", "73–75 Min.", "72–82 Min."],
      ["Direkte Sonne am 21. Dezember", "6 h 19 min – 6 h 46 min", "5 h 39 min – 7 h 17 min"],
      ["Erste Sonne am 21. Dezember", "9.10–9.33 Uhr", "8.11–8.28 Uhr"],
      ["Villen, teuerste OMI-Zone", "2.100–3.000 €/m² (Orta, Seeufer)", "1.550–2.200 €/m² (Pella, Seeufer)"],
      ["Einwohner der Gemeinden (2025)", "2.410", "4.226"],
      ["Einwohner in Rutschgebieten P3–P4 (ISPRA)", "1,1–18,9 %", "0–8,6 %"],
    ],
  },
  faq: [
    { d: "Was unterscheidet Ostufer und Westufer?", r: "Das Ostufer hat die Bahn, Orta und die Insel und schaut in die Nachmittagssonne; das Westufer hat keine Bahn, blickt über das Wasser auf Orta und hat die Morgensonne. Am Ostufer werden Villen am See bis 3.000 €/m² bewertet, am Westufer bis 2.200 €/m². Die Fahrzeiten ab Mailand sind ähnlich, 72–82 Min." },
    { d: "Was kostet das Leben am Ostufer?", r: "Das hängt stark vom Ort ab: Villen am Ufer von Orta werden mit 2.100–3.000 €/m² bewertet, am Ufer von Pettenasco mit 1.500–2.250 €/m², Wohnungen am Hang von Orta und in Legro mit 1.200–1.750 €/m² (OMI, 2. Halbjahr 2025). Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Kann man am Ostufer ohne Auto leben?", r: "Teilweise: zwei Bahnhöfe, Schiffe von März bis Oktober und ein Ortskern zum Gehen. Aber es fahren 8 Züge am Tag nach Novara, mit einer Lücke von fast sechs Stunden am Vormittag, und von November bis Februar ist kein Schiffsdienst ausgewiesen. Für den großen Einkauf und die Gesundheit braucht man das Auto." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiMondoPagina = {
  titolo: "Vzhodna obala jezera Orta: Orta, Legro, Pettenasco",
  descrizione: "Vzhodna obala jezera Orta: Orta San Giulio, Legro in Pettenasco. Vlak, ladje, vrednosti OMI do 3.000 €/m², kratko zimsko sonce. 73–75 min od Milana.",
  h1: "Orta San Giulio, Legro in Pettenasco: vzhodna obala jezera Orta",
  minuto: "Vzhodna obala je obala z vlakom: dve postaji na progi Novara–Domodossola, Orta-Miasino v Legru in Pettenasco, ter cesta ob vodi. Tu so otok San Giulio, Sveta gora (UNESCO) in glavni pristan na trgu Piazza Motta. Obala gleda na zahod: jezero in popoldansko sonce sta spredaj, Mottarone zadaj pozimi zamakne sončni vzhod, 21. decembra pa neposredno sonce traja 6 h 19 min – 6 h 46 min. Ob obali v Orti OMI vrednoti vile na 2.100–3.000 €/m², najvišje vrednosti ob jezeru; Pettenasco, 5 min severneje, je približno 40 % niže. Milano je brez prometa 73–75 min stran.",
  vivere: [
    {
      titolo: "Trije kraji, ena obala",
      testo: "Orta San Giulio je kraj z otokom pred seboj, 1.102 prebivalca, trg Piazza Motta 9 m nad jezerom. Legro je njen zaselek na pobočju, 70 m više, s postajo. Pettenasco, 1.308 prebivalcev, je vas strugarjev, z lastno plažo, pristanom in postajo. Od enega do drugega se vozite 4–5 minut."
    },
    {
      titolo: "Vlak je, a ne pogosto",
      testo: "Postaji Orta-Miasino v Legru in Pettenasco sta na dosegu peš od hiš: zahodna obala nima nobene. Na vzorčno sredo iz Orta-Miasino odpelje 8 neposrednih vlakov v Novaro, v 42–53 minutah, z vrzeljo med 8.04 in 13.51. Za Milano prestopite v Novari: 1 h 33 min – 1 h 54 min. Ladje povezujejo Orto, otok in Pettenasco od marca do oktobra."
    },
    {
      titolo: "Cena obale",
      testo: "OMI (2. polletje 2025) ob obali v Orti vrednoti običajna stanovanja na 2.050–2.950 €/m², vile na 2.100–3.000 €/m²; ob obali v Pettenascu stanovanja na 1.250–1.800 €/m², vile na 1.500–2.250 €/m². Gričevnati pas Orte, ki vključuje Legro, je pri 1.200–1.750 €/m² za stanovanja. To so ocenjene vrednosti, ne kupnine."
    },
    {
      titolo: "Omejitve vzhodne obale",
      testo: "Zimsko sonce je kratko: Mottarone na vzhodu dvigne obzorje na 14–16°, 21. decembra pa prvo sonce pride med 9.10 in 9.33. Orta se ob poletnih koncih tedna napolni z obiskovalci. V Pettenascu po podatkih ISPRA 18,9 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, 19,8 % pa na območjih srednje poplavne nevarnosti. Najbližja urgenca I. stopnje je v Borgomaneru; Omegna ima točko prve pomoči."
    },
  ],
  perChi: {
    si: [
      "Želite otok in staro jedro peš, z vlakom na 1–2 km.",
      "Želite jezero z najbližjo turistično in kulturno ponudbo.",
      "Za življenje ob vodi ste pripravljeni plačati najvišje vrednosti ob jezeru.",
    ],
    no: [
      "Želite dolgo zimsko sonce: griči nad obalo ga imajo do 8 h 04 min.",
      "Iščete mir ob poletnih koncih tedna.",
      "Vaš proračun je za griče: tam so vile po 1.150–1.650 €/m².",
    ],
  },
  confronto: {
    titolo: "Vzhodna in zahodna obala v primerjavi",
    altro: "Zahodna obala",
    righe: [
      ["Železnica", "2 postaji (Orta-Miasino, Pettenasco)", "Nobene"],
      ["Od milanske stolnice, brez prometa", "73–75 min", "72–82 min"],
      ["Neposredno sonce 21. decembra", "6 h 19 min – 6 h 46 min", "5 h 39 min – 7 h 17 min"],
      ["Prvo sonce 21. decembra", "9.10–9.33", "8.11–8.28"],
      ["Vile, najdražja cona OMI", "2.100–3.000 €/m² (Orta, obala)", "1.550–2.200 €/m² (Pella, obala)"],
      ["Prebivalci občin (2025)", "2.410", "4.226"],
      ["Prebivalci na plazovitih območjih P3–P4 (ISPRA)", "1,1–18,9 %", "0–8,6 %"],
    ],
  },
  faq: [
    { d: "V čem se razlikujeta vzhodna in zahodna obala?", r: "Vzhodna obala ima vlak, Orto in otok ter gleda v popoldansko sonce; zahodna obala nima železnice, na Orto gleda čez vodo in ima jutranje sonce. Na vzhodni obali so vile ob jezeru ovrednotene do 3.000 €/m², na zahodni do 2.200 €/m². Časi od Milana so podobni, 72–82 min." },
    { d: "Koliko stane življenje na vzhodni obali?", r: "Zelo je odvisno od kraja: vile ob obali v Orti so ovrednotene na 2.100–3.000 €/m², ob obali v Pettenascu na 1.500–2.250 €/m², stanovanja na pobočju Orte in v Legru na 1.200–1.750 €/m² (OMI, 2. polletje 2025). To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali se na vzhodni obali da živeti brez avtomobila?", r: "Deloma: dve postaji, ladje od marca do oktobra in staro jedro za pešce. Toda v Novaro pelje 8 vlakov na dan, s skoraj šesturno dopoldansko vrzeljo, od novembra do februarja pa ladje niso navedene. Za večje nakupe in zdravstvo potrebujete avto." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiMondoPagina> = { it, en, de, sl };
export default testi;
