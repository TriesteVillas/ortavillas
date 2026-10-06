import type { Fonte, PerLingua, TestiMondoPagina } from "../luoghi/tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 (Pella, San Maurizio d'Opaglio, Madonna del Sasso, Orta San Giulio, Pettenasco)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità per comune", url: "https://idrogeo.isprambiente.it/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Museo del rubinetto e della sua tecnologia", url: "https://www.illagomaggiore.com/poi/museum-of-taps-and-their-technology/", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Santuario della Madonna del Sasso", url: "https://www.illagomaggiore.com/poi/sanctuary-of-the-madonna-del-sasso-our-lady-of-the-rock/", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiMondoPagina = {
  titolo: "Sponda ovest del lago d'Orta: Pella, Ronco, San Maurizio",
  descrizione: "La sponda ovest del lago d'Orta: Pella, Ronco, San Maurizio d'Opaglio e Madonna del Sasso. Sole del mattino, niente treno, quotazioni OMI, 72–82 min da Milano.",
  h1: "Pella, Ronco, San Maurizio d'Opaglio e Madonna del Sasso: la sponda ovest del lago d'Orta",
  minuto: "La sponda ovest è la riva che guarda Orta e l'isola dall'altra parte dell'acqua. Non ha ferrovia: la linea corre sull'altra sponda, e le stazioni più vicine sono a 2–4 km in linea d'aria ma sulla riva opposta. Guarda a est, quindi il sole arriva presto (il 21 dicembre tra le 08:11 e le 08:28) e d'inverno se ne va presto dietro il crinale: a Ronco alle 14:06. Va dalla riva di Pella e Ronco, con gli imbarcaderi, al paese industriale di San Maurizio d'Opaglio, fino al santuario di Madonna del Sasso, circa 400 m sopra il lago. Le ville sul lungolago di Pella sono quotate 1.550–2.200 €/m², circa un terzo meno che a Orta. Da Milano sono 72–82 min.",
  vivere: [
    {
      titolo: "Quattro luoghi, dalla riva al crinale",
      testo: "Pella, 876 abitanti, sta di fronte a Orta, 24 m sopra il lago. Ronco, sua località più a nord, è a 45 m dall'acqua, stretta sotto la montagna. San Maurizio d'Opaglio, 2.999 abitanti, è il paese della rubinetteria, su un ripiano a 1,3 km dalla riva, con la frazione di Lagna sul lago. Madonna del Sasso, 351 abitanti, ha il municipio a Boleto a 689 m e il santuario settecentesco su uno sperone di granito."
    },
    {
      titolo: "Senza treno, con i battelli",
      testo: "Sulla sponda ovest si vive in auto: Orta, dall'altra parte, è a 19 min da Pella, Gozzano a 13. I battelli fermano a Pella, San Filiberto e Lagna, e a Ronco nella stagione piena; dal 4 al 31 ottobre 2026 il giro Orta–Isola–Pella–San Filiberto–Lagna parte ogni 35–45 minuti. Da novembre a febbraio non risulta servizio di linea."
    },
    {
      titolo: "Che cosa costa",
      testo: "L'OMI (2° semestre 2025) quota sul lungolago di Pella le abitazioni civili 1.350–1.950 €/m² e le ville 1.550–2.200 €/m²; nella zona di Ronco le civili 1.350–2.000 €/m². A San Maurizio d'Opaglio le civili stanno a 1.100–1.750 €/m² e le ville a 1.300–1.950 €/m²; a Madonna del Sasso le civili a 900–1.350 €/m². Sono quotazioni, non prezzi di compravendita."
    },
    {
      titolo: "Servizi e limiti",
      testo: "Le scuole fino alle medie sono a San Maurizio d'Opaglio; Pella ha solo la primaria di Alzo, Madonna del Sasso nessuna scuola statale. Il DEA di I livello più vicino è a Borgomanero. Per ISPRA il rischio frana è basso a San Maurizio (0,3% dei residenti in aree P3–P4) e nullo a Madonna del Sasso, più alto a Pella (8,6%). I quattro punti di balneazione attribuiti a Pella e San Maurizio sono «buoni» o «eccellenti» nel 2024."
    },
  ],
  perChi: {
    si: [
      "Volete vedere Orta e l'isola, non viverci in mezzo.",
      "Vi piace il sole del mattino e la riva più tranquilla.",
      "Cercate la riva a quotazioni un terzo più basse di Orta.",
    ],
    no: [
      "Vi serve il treno: su questa sponda non c'è.",
      "Volete sole il pomeriggio d'inverno: a Ronco finisce alle 14:06.",
      "Volete servizi completi a piedi: per la maggior parte si prende l'auto.",
    ],
  },
  confronto: {
    titolo: "Sponda ovest e sponda est a confronto",
    altro: "Sponda est",
    righe: [
      ["Ferrovia", "Nessuna", "2 stazioni (Orta-Miasino, Pettenasco)"],
      ["Da Milano Duomo, senza traffico", "72–82 min", "73–75 min"],
      ["Sole diretto il 21 dicembre", "5 h 39 min – 7 h 17 min", "6 h 19 min – 6 h 46 min"],
      ["Primo sole il 21 dicembre", "08:11–08:28", "09:10–09:33"],
      ["Ville, zona OMI più cara", "1.550–2.200 €/m² (Pella, lungolago)", "2.100–3.000 €/m² (Orta, lungolago)"],
      ["Residenti dei comuni (2025)", "4.226", "2.410"],
      ["Residenti in aree di frana P3–P4 (ISPRA)", "0–8,6%", "1,1–18,9%"],
    ],
  },
  faq: [
    { d: "Sulla sponda ovest c'è il treno?", r: "No. La linea Novara–Domodossola corre sulla sponda est; le stazioni più vicine, Pettenasco e Orta-Miasino, sono a 2–4 km in linea d'aria ma sull'altra riva. Da San Maurizio d'Opaglio la più comoda è Bolzano Novarese, a 4,2 km." },
    { d: "Quanto costa vivere sulla sponda ovest?", r: "Le ville sul lungolago di Pella sono quotate 1.550–2.200 €/m², le civili di San Maurizio d'Opaglio 1.100–1.750 €/m², quelle di Madonna del Sasso 900–1.350 €/m² (OMI, 2° semestre 2025). Sono intervalli stimati, non prezzi firmati." },
    { d: "Sulla sponda ovest c'è più sole?", r: "Il sole arriva prima, tra le 08:11 e le 08:28 il 21 dicembre, ma se ne va anche prima. Il totale varia molto: 7 h 17 min a San Maurizio d'Opaglio, 5 h 39 min a Ronco, contro 6 h 19 min – 6 h 46 min sulla sponda est. È un calcolo sul rilievo, senza edifici né alberi." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiMondoPagina = {
  titolo: "Lake Orta's west shore: Pella, Ronco, San Maurizio",
  descrizione: "Lake Orta's west shore: Pella, Ronco, San Maurizio d'Opaglio and Madonna del Sasso. Morning sun, no railway, OMI values 2025, 72–82 min from Milan.",
  h1: "Pella, Ronco, San Maurizio d'Opaglio and Madonna del Sasso: the west shore of Lake Orta",
  minuto: "The west shore is the shore that looks at Orta and the island across the water. It has no railway: the line runs on the other side, and the nearest stations are 2–4 km away as the crow flies but on the opposite shore. It faces east, so the sun comes early (between 8:11 and 8:28 am on 21 December) and in winter leaves early behind the ridge: at Ronco at 2:06 pm. It runs from the shore of Pella and Ronco, with boat landings, to the industrial town of San Maurizio d'Opaglio, up to the sanctuary of Madonna del Sasso, about 400 m above the lake. Villas on Pella's lakefront are valued at €1,550–2,200/m², about a third less than in Orta. Milan is 72–82 min away.",
  vivere: [
    {
      titolo: "Four places, from shore to ridge",
      testo: "Pella, 876 residents, faces Orta, 24 m above the lake. Ronco, its locality further north, is 45 m from the water, squeezed under the mountain. San Maurizio d'Opaglio, 2,999 residents, is the tap-making town, on a terrace 1.3 km from the shore, with the hamlet of Lagna on the lake. Madonna del Sasso, 351 residents, has its town hall in Boleto at 689 m and its 18th-century sanctuary on a granite spur."
    },
    {
      titolo: "No train, but boats",
      testo: "On the west shore life runs on the car: Orta, on the other side, is 19 min from Pella, Gozzano 13. Boats call at Pella, San Filiberto and Lagna, and at Ronco in high season; from 4 to 31 October 2026 the Orta–Island–Pella–San Filiberto–Lagna loop leaves every 35–45 minutes. From November to February no scheduled service is listed."
    },
    {
      titolo: "What it costs",
      testo: "OMI (2nd half of 2025) values standard homes on Pella's lakefront at €1,350–1,950/m² and villas at €1,550–2,200/m²; in the Ronco zone standard homes at €1,350–2,000/m². In San Maurizio d'Opaglio standard homes are at €1,100–1,750/m² and villas at €1,300–1,950/m²; in Madonna del Sasso standard homes at €900–1,350/m². These are valuations, not sale prices."
    },
    {
      titolo: "Services and limits",
      testo: "Schools up to lower secondary are in San Maurizio d'Opaglio; Pella has only the primary school in Alzo, Madonna del Sasso no state school. The nearest level-I emergency department is in Borgomanero. According to ISPRA landslide hazard is low in San Maurizio (0.3% of residents in P3–P4 areas) and nil in Madonna del Sasso, higher in Pella (8.6%). The four bathing points assigned to Pella and San Maurizio were rated \"good\" or \"excellent\" in 2024."
    },
  ],
  perChi: {
    si: [
      "You want to look at Orta and the island, not live in the middle of them.",
      "You like morning sun and the quieter shore.",
      "You want the shore at values a third lower than Orta.",
    ],
    no: [
      "You need the train: this shore has none.",
      "You want winter afternoon sun: at Ronco it ends at 2:06 pm.",
      "You want full services on foot: for most things you take the car.",
    ],
  },
  confronto: {
    titolo: "West shore and east shore compared",
    altro: "East shore",
    righe: [
      ["Railway", "None", "2 stations (Orta-Miasino, Pettenasco)"],
      ["From Milan's Duomo, no traffic", "72–82 min", "73–75 min"],
      ["Direct sun on 21 December", "5 h 39 min – 7 h 17 min", "6 h 19 min – 6 h 46 min"],
      ["First sun on 21 December", "8:11–8:28 am", "9:10–9:33 am"],
      ["Villas, highest OMI zone", "€1,550–2,200/m² (Pella, lakefront)", "€2,100–3,000/m² (Orta, lakefront)"],
      ["Residents of the municipalities (2025)", "4,226", "2,410"],
      ["Residents in P3–P4 landslide areas (ISPRA)", "0–8.6%", "1.1–18.9%"],
    ],
  },
  faq: [
    { d: "Is there a train on the west shore?", r: "No. The Novara–Domodossola line runs on the east shore; the nearest stations, Pettenasco and Orta-Miasino, are 2–4 km away as the crow flies but on the other shore. From San Maurizio d'Opaglio the handiest is Bolzano Novarese, 4.2 km away." },
    { d: "How much does it cost to live on the west shore?", r: "Villas on Pella's lakefront are valued at €1,550–2,200/m², standard homes in San Maurizio d'Opaglio at €1,100–1,750/m², in Madonna del Sasso at €900–1,350/m² (OMI, 2nd half of 2025). These are estimated ranges, not signed prices." },
    { d: "Does the west shore get more sun?", r: "The sun arrives earlier, between 8:11 and 8:28 am on 21 December, but also leaves earlier. The total varies a lot: 7 h 17 min in San Maurizio d'Opaglio, 5 h 39 min in Ronco, against 6 h 19 min – 6 h 46 min on the east shore. It is a terrain calculation, without buildings or trees." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiMondoPagina = {
  titolo: "Westufer des Ortasees: Pella, Ronco, San Maurizio",
  descrizione: "Das Westufer des Ortasees: Pella, Ronco, San Maurizio d'Opaglio und Madonna del Sasso. Morgensonne, keine Bahn, OMI-Werte 2025, 72–82 Min. von Mailand.",
  h1: "Pella, Ronco, San Maurizio d'Opaglio und Madonna del Sasso: das Westufer des Ortasees",
  minuto: "Das Westufer ist das Ufer, das über das Wasser auf Orta und die Insel blickt. Es hat keine Bahn: Die Strecke verläuft auf der anderen Seite, und die nächsten Bahnhöfe liegen 2–4 km Luftlinie entfernt, aber am gegenüberliegenden Ufer. Es schaut nach Osten, die Sonne kommt also früh (am 21. Dezember zwischen 8.11 und 8.28 Uhr) und geht im Winter früh hinter dem Kamm: in Ronco um 14.06 Uhr. Es reicht vom Ufer von Pella und Ronco mit ihren Anlegestellen über den Industrieort San Maurizio d'Opaglio bis zur Wallfahrtskirche Madonna del Sasso, etwa 400 m über dem See. Villen am Ufer von Pella werden mit 1.550–2.200 €/m² bewertet, etwa ein Drittel weniger als in Orta. Mailand ist 72–82 Min. entfernt.",
  vivere: [
    {
      titolo: "Vier Orte, vom Ufer bis zum Kamm",
      testo: "Pella, 876 Einwohner, liegt gegenüber von Orta, 24 m über dem See. Ronco, sein Ortsteil weiter nördlich, ist 45 m vom Wasser entfernt, eng unter dem Berg. San Maurizio d'Opaglio, 2.999 Einwohner, ist der Ort der Armaturen, auf einer Terrasse 1,3 km vom Ufer, mit dem Ortsteil Lagna am See. Madonna del Sasso, 351 Einwohner, hat sein Rathaus in Boleto auf 689 m und seine Wallfahrtskirche aus dem 18. Jahrhundert auf einem Granitsporn."
    },
    {
      titolo: "Ohne Bahn, mit Schiffen",
      testo: "Am Westufer lebt man mit dem Auto: Orta auf der anderen Seite ist 19 Min. von Pella entfernt, Gozzano 13. Schiffe halten in Pella, San Filiberto und Lagna, in der Hauptsaison auch in Ronco; vom 4. bis 31. Oktober 2026 fährt die Runde Orta–Insel–Pella–San Filiberto–Lagna alle 35–45 Minuten. Von November bis Februar ist kein Liniendienst ausgewiesen."
    },
    {
      titolo: "Was es kostet",
      testo: "Die OMI (2. Halbjahr 2025) bewertet am Ufer von Pella Wohnungen mit 1.350–1.950 €/m² und Villen mit 1.550–2.200 €/m²; in der Zone Ronco Wohnungen mit 1.350–2.000 €/m². In San Maurizio d'Opaglio liegen Wohnungen bei 1.100–1.750 €/m² und Villen bei 1.300–1.950 €/m²; in Madonna del Sasso Wohnungen bei 900–1.350 €/m². Das sind Richtwerte, keine Kaufpreise."
    },
    {
      titolo: "Versorgung und Grenzen",
      testo: "Schulen bis zur Mittelschule gibt es in San Maurizio d'Opaglio; Pella hat nur die Grundschule in Alzo, Madonna del Sasso keine staatliche Schule. Die nächste Notaufnahme der Stufe I ist in Borgomanero. Laut ISPRA ist die Rutschungsgefahr in San Maurizio gering (0,3 % der Einwohner in Gebieten P3–P4), in Madonna del Sasso null, in Pella höher (8,6 %). Die vier Pella und San Maurizio zugeordneten Badestellen waren 2024 „gut“ oder „ausgezeichnet“."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Orta und die Insel ansehen, nicht mittendrin wohnen.",
      "Sie mögen Morgensonne und das ruhigere Ufer.",
      "Sie suchen das Ufer zu Werten, die ein Drittel unter Orta liegen.",
    ],
    no: [
      "Sie brauchen die Bahn: An diesem Ufer gibt es keine.",
      "Sie wollen Nachmittagssonne im Winter: In Ronco endet sie um 14.06 Uhr.",
      "Sie wollen alles zu Fuß erledigen: Meist nimmt man das Auto.",
    ],
  },
  confronto: {
    titolo: "Westufer und Ostufer im Vergleich",
    altro: "Ostufer",
    righe: [
      ["Bahn", "Keine", "2 Bahnhöfe (Orta-Miasino, Pettenasco)"],
      ["Ab Mailänder Dom, ohne Verkehr", "72–82 Min.", "73–75 Min."],
      ["Direkte Sonne am 21. Dezember", "5 h 39 min – 7 h 17 min", "6 h 19 min – 6 h 46 min"],
      ["Erste Sonne am 21. Dezember", "8.11–8.28 Uhr", "9.10–9.33 Uhr"],
      ["Villen, teuerste OMI-Zone", "1.550–2.200 €/m² (Pella, Seeufer)", "2.100–3.000 €/m² (Orta, Seeufer)"],
      ["Einwohner der Gemeinden (2025)", "4.226", "2.410"],
      ["Einwohner in Rutschgebieten P3–P4 (ISPRA)", "0–8,6 %", "1,1–18,9 %"],
    ],
  },
  faq: [
    { d: "Gibt es am Westufer eine Bahn?", r: "Nein. Die Strecke Novara–Domodossola verläuft am Ostufer; die nächsten Bahnhöfe, Pettenasco und Orta-Miasino, liegen 2–4 km Luftlinie entfernt, aber am anderen Ufer. Von San Maurizio d'Opaglio aus ist Bolzano Novarese am praktischsten, 4,2 km entfernt." },
    { d: "Was kostet das Leben am Westufer?", r: "Villen am Ufer von Pella werden mit 1.550–2.200 €/m² bewertet, Wohnungen in San Maurizio d'Opaglio mit 1.100–1.750 €/m², in Madonna del Sasso mit 900–1.350 €/m² (OMI, 2. Halbjahr 2025). Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Hat das Westufer mehr Sonne?", r: "Die Sonne kommt früher, am 21. Dezember zwischen 8.11 und 8.28 Uhr, geht aber auch früher. Die Summe schwankt stark: 7 h 17 min in San Maurizio d'Opaglio, 5 h 39 min in Ronco, gegenüber 6 h 19 min – 6 h 46 min am Ostufer. Es ist eine Geländeberechnung, ohne Gebäude und Bäume." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiMondoPagina = {
  titolo: "Zahodna obala jezera Orta: Pella, Ronco, San Maurizio",
  descrizione: "Zahodna obala jezera Orta: Pella, Ronco, San Maurizio d'Opaglio in Madonna del Sasso. Jutranje sonce, brez železnice, vrednosti OMI 2025, 72–82 min od Milana.",
  h1: "Pella, Ronco, San Maurizio d'Opaglio in Madonna del Sasso: zahodna obala jezera Orta",
  minuto: "Zahodna obala je obala, ki čez vodo gleda na Orto in otok. Železnice nima: proga teče po drugi strani, najbližje postaje pa so 2–4 km zračne črte stran, vendar na nasprotni obali. Gleda na vzhod, zato sonce pride zgodaj (21. decembra med 8.11 in 8.28), pozimi pa zgodaj zaide za grebenom: v Roncu ob 14.06. Sega od obale Pelle in Ronca s pristani do industrijskega kraja San Maurizio d'Opaglio in vse do svetišča Madonna del Sasso, približno 400 m nad jezerom. Vile ob obali v Pelli so ovrednotene na 1.550–2.200 €/m², približno tretjino manj kot v Orti. Milano je 72–82 min stran.",
  vivere: [
    {
      titolo: "Štirje kraji, od obale do grebena",
      testo: "Pella, 876 prebivalcev, leži nasproti Orte, 24 m nad jezerom. Ronco, njen kraj severneje, je 45 m od vode, stisnjen pod goro. San Maurizio d'Opaglio, 2.999 prebivalcev, je kraj armatur, na terasi 1,3 km od obale, z zaselkom Lagna ob jezeru. Madonna del Sasso, 351 prebivalcev, ima sedež občine v Boletu na 689 m in svetišče iz 18. stoletja na granitnem pomolu."
    },
    {
      titolo: "Brez vlaka, z ladjami",
      testo: "Na zahodni obali se živi z avtom: Orta na drugi strani je 19 min od Pelle, Gozzano 13. Ladje ustavljajo v Pelli, San Filibertu in Lagni, v glavni sezoni tudi v Roncu; od 4. do 31. oktobra 2026 krožna linija Orta–otok–Pella–San Filiberto–Lagna odpelje vsakih 35–45 minut. Od novembra do februarja redna linija ni navedena."
    },
    {
      titolo: "Koliko stane",
      testo: "OMI (2. polletje 2025) ob obali v Pelli vrednoti običajna stanovanja na 1.350–1.950 €/m², vile na 1.550–2.200 €/m²; v coni Ronco stanovanja na 1.350–2.000 €/m². V San Maurizio d'Opaglio so stanovanja po 1.100–1.750 €/m², vile po 1.300–1.950 €/m²; v Madonna del Sasso stanovanja po 900–1.350 €/m². To so ocenjene vrednosti, ne kupnine."
    },
    {
      titolo: "Storitve in omejitve",
      testo: "Šole do nižje srednje so v San Maurizio d'Opaglio; Pella ima le osnovno šolo v Alzu, Madonna del Sasso nobene državne šole. Najbližja urgenca I. stopnje je v Borgomaneru. Po podatkih ISPRA je nevarnost plazov nizka v San Mauriziu (0,3 % prebivalcev na območjih P3–P4), v Madonna del Sasso nična, v Pelli višja (8,6 %). Štiri kopalna mesta, pripisana Pelli in San Mauriziu, so bila leta 2024 »dobra« ali »odlična«."
    },
  ],
  perChi: {
    si: [
      "Orto in otok želite gledati, ne živeti sredi njiju.",
      "Všeč sta vam jutranje sonce in mirnejša obala.",
      "Iščete obalo po vrednostih, ki so za tretjino nižje kot v Orti.",
    ],
    no: [
      "Potrebujete vlak: na tej obali ga ni.",
      "Želite popoldansko zimsko sonce: v Roncu se konča ob 14.06.",
      "Želite vse storitve peš: večinoma potrebujete avto.",
    ],
  },
  confronto: {
    titolo: "Zahodna in vzhodna obala v primerjavi",
    altro: "Vzhodna obala",
    righe: [
      ["Železnica", "Nobene", "2 postaji (Orta-Miasino, Pettenasco)"],
      ["Od milanske stolnice, brez prometa", "72–82 min", "73–75 min"],
      ["Neposredno sonce 21. decembra", "5 h 39 min – 7 h 17 min", "6 h 19 min – 6 h 46 min"],
      ["Prvo sonce 21. decembra", "8.11–8.28", "9.10–9.33"],
      ["Vile, najdražja cona OMI", "1.550–2.200 €/m² (Pella, obala)", "2.100–3.000 €/m² (Orta, obala)"],
      ["Prebivalci občin (2025)", "4.226", "2.410"],
      ["Prebivalci na plazovitih območjih P3–P4 (ISPRA)", "0–8,6 %", "1,1–18,9 %"],
    ],
  },
  faq: [
    { d: "Ali je na zahodni obali vlak?", r: "Ne. Proga Novara–Domodossola teče po vzhodni obali; najbližji postaji, Pettenasco in Orta-Miasino, sta 2–4 km zračne črte stran, vendar na drugi obali. Iz San Maurizio d'Opaglio je najprikladnejša postaja Bolzano Novarese, 4,2 km stran." },
    { d: "Koliko stane življenje na zahodni obali?", r: "Vile ob obali v Pelli so ovrednotene na 1.550–2.200 €/m², stanovanja v San Maurizio d'Opaglio na 1.100–1.750 €/m², v Madonna del Sasso na 900–1.350 €/m² (OMI, 2. polletje 2025). To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali ima zahodna obala več sonca?", r: "Sonce pride prej, 21. decembra med 8.11 in 8.28, a tudi prej odide. Skupaj se zelo razlikuje: 7 h 17 min v San Maurizio d'Opaglio, 5 h 39 min v Roncu, na vzhodni obali pa 6 h 19 min – 6 h 46 min. Gre za izračun na reliefu, brez stavb in dreves." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiMondoPagina> = { it, en, de, sl };
export default testi;
