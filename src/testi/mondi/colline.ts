import type { Fonte, PerLingua, TestiMondoPagina } from "../luoghi/tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 (Ameno, Miasino, Armeno, Omegna, Gozzano, Nonio, Quarna Sopra, Bolzano Novarese)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità per comune", url: "https://idrogeo.isprambiente.it/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quote: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Fondazione Antonio e Carmela Calderara", url: "https://www.fondazionecalderara.it/", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Miasino e Villa Nigra", url: "https://www.illagomaggiore.com/destination/miasino/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Armeno (SP41 per il Mottarone)", url: "https://it.wikipedia.org/wiki/Armeno_(Italia)", data: "2026-10-06" },
  { titolo: "Stresa Turismo – Funivia Stresa-Alpino-Mottarone: la funivia è chiusa", url: "https://www.stresaturismo.it/it/cosa-fare/funivia-stresa-alpino-mottarone-la-funivia-e-chiusa/", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
];

const it: TestiMondoPagina = {
  titolo: "Colline del Mottarone: Ameno, Vacciago, Miasino, Armeno",
  descrizione: "Le colline sopra il lago d'Orta: Ameno, Vacciago, Miasino e Armeno, a 478–543 m. Il sole d'inverno più lungo del lago, ville storiche, quotazioni OMI 2025.",
  h1: "Ameno, Vacciago, Miasino e Armeno: le colline del Mottarone sopra il lago d'Orta",
  minuto: "Le colline del Mottarone sono i paesi a mezza costa sopra Orta, tra 478 e 543 m di quota e a 0,5–2,5 km dalla riva. Il lago non è sotto casa: lo si guarda dall'alto, quando la posizione lo permette. In cambio hanno il sole d'inverno più lungo dell'atlante: il 21 dicembre 7 h 38 min – 8 h 04 min di sole diretto, contro le 6 h 39 min di piazza Motta. Sono paesi di case signorili, come Villa Nigra a Miasino, con la Fondazione Calderara a Vacciago e la strada per la vetta del Mottarone che parte da Armeno. Le ville sono quotate 1.150–2.200 €/m² secondo il paese. Da Milano sono 72–77 min, e la stazione Orta-Miasino è a 0,9–1,8 km da tre dei quattro luoghi.",
  vivere: [
    {
      titolo: "Quattro paesi a mezza costa",
      testo: "Ameno (874 abitanti, 531 m) è il paese con più sole d'inverno dei sedici luoghi. Vacciago è la sua frazione verso Orta, a 484 m e 500 m dalla riva, sede della Fondazione Calderara. Miasino (810 abitanti, 478 m) è il paese delle case sei-settecentesche, con Villa Nigra in centro. Armeno (2.085 abitanti, 543 m) è il più grande, il più lontano dall'acqua e la porta della SP41 per il Mottarone."
    },
    {
      titolo: "Il sole è il motivo per salire",
      testo: "Il 21 dicembre il nostro calcolo sul rilievo dà 8 h 04 min di sole diretto ad Ameno, 8 h 00 min a Vacciago, 7 h 47 min a Miasino, 7 h 38 min ad Armeno, su 8 h 29 min possibili. Il Mottarone è più vicino ma l'orizzonte intorno è basso, perché i paesi stanno già in alto. Il calcolo non considera edifici né alberi."
    },
    {
      titolo: "Che cosa costa",
      testo: "L'OMI (2° semestre 2025) quota le ville 1.500–2.200 €/m² nella zona D1 di Miasino, 1.150–1.650 €/m² nelle zone collinari di Ameno e Armeno. Le abitazioni civili stanno tra 920 e 1.800 €/m² secondo paese e zona. Le ville di Ameno e Armeno sono quotate circa la metà di quelle sul lungolago di Orta. Sono quotazioni, non prezzi di compravendita."
    },
    {
      titolo: "Servizi e limiti",
      testo: "Le scuole fino alle medie sono ad Armeno; Miasino ha la primaria, Ameno l'infanzia. Per le superiori si va a Gozzano o a Omegna. Si vive in auto: niente imbarcadero, e il lago è a 6–9 min. Per ISPRA a Miasino il 10,5% dei residenti vive in aree a pericolosità da frana elevata o molto elevata. La funivia del Mottarone, dal versante di Stresa, è chiusa dal 2021."
    },
  ],
  perChi: {
    si: [
      "Volete più sole d'inverno: fino a 8 h 04 min il 21 dicembre.",
      "Cercate una villa storica o con terreno, a quotazioni di collina.",
      "Vi basta vedere il lago dall'alto e raggiungerlo in 6–9 min.",
    ],
    no: [
      "Volete l'acqua sotto casa e il battello a piedi.",
      "Vi servono scuole superiori e servizi completi in paese.",
      "Non volete dipendere dall'auto ogni giorno.",
    ],
  },
  confronto: {
    titolo: "Colline del Mottarone e capi del lago a confronto",
    altro: "Capi del lago",
    righe: [
      ["Quota del punto", "478–543 m", "307–844 m"],
      ["Distanza dalla riva", "0,5–2,5 km", "0,5–2,1 km"],
      ["Sole diretto il 21 dicembre", "7 h 38 min – 8 h 04 min", "5 h 37 min – 7 h 48 min"],
      ["Residenti dei comuni (2025)", "3.769", "21.884"],
      ["Da Milano Duomo, senza traffico", "72–77 min", "67–96 min"],
      ["Ville, zona OMI più cara", "1.500–2.200 €/m² (Miasino)", "1.500–2.200 €/m² (Omegna, Bagnella)"],
      ["Scuole superiori statali", "Nessuna", "A Omegna e a Gozzano"],
    ],
  },
  faq: [
    { d: "Perché scegliere le colline invece della riva?", r: "Per il sole e lo spazio: il 21 dicembre le colline hanno 7 h 38 min – 8 h 04 min di sole diretto, contro 6 h 19 min – 6 h 46 min della sponda est. Le ville sono quotate 1.150–2.200 €/m², contro 2.100–3.000 €/m² sul lungolago di Orta. In cambio il lago si vede dall'alto e si raggiunge in auto." },
    { d: "Dalle colline si vede il lago?", r: "Da molte posizioni sì, perché i paesi stanno 190–250 m sopra l'acqua; da altre no, per esposizione, alberi o edifici. Armeno, il più lontano, guarda soprattutto il Mottarone. Va verificato casa per casa." },
    { d: "Le colline sono collegate in treno?", r: "La stazione Orta-Miasino è a 0,9 km da Miasino, 1,2 km da Vacciago e 1,8 km da Ameno in linea d'aria; per Armeno la più vicina è Pettenasco, a 2,5 km. In un mercoledì campione partono 8 treni diretti per Novara; per Milano si cambia a Novara." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiMondoPagina = {
  titolo: "The Mottarone hills: Ameno, Vacciago, Miasino, Armeno",
  descrizione: "The hills above Lake Orta: Ameno, Vacciago, Miasino and Armeno, at 478–543 m. The longest winter sun on the lake, historic villas, OMI values 2025.",
  h1: "Ameno, Vacciago, Miasino and Armeno: the Mottarone hills above Lake Orta",
  minuto: "The Mottarone hills are the villages halfway up the slope above Orta, between 478 and 543 m and 0.5–2.5 km from the shore. The lake is not at your door: you look down on it, where the spot allows. In exchange they have the longest winter sun in the atlas: on 21 December 7 h 38 min – 8 h 04 min of direct sun, against 6 h 39 min on Piazza Motta. They are villages of grand houses, such as Villa Nigra in Miasino, with the Calderara Foundation in Vacciago and the road to the top of Mottarone starting in Armeno. Villas are valued at €1,150–2,200/m² depending on the village. Milan is 72–77 min away, and Orta-Miasino station is 0.9–1.8 km from three of the four places.",
  vivere: [
    {
      titolo: "Four hillside villages",
      testo: "Ameno (874 residents, 531 m) is the village with the most winter sun of the sixteen places. Vacciago is its hamlet towards Orta, at 484 m and 500 m from the shore, home to the Calderara Foundation. Miasino (810 residents, 478 m) is the village of 17th- and 18th-century houses, with Villa Nigra in the centre. Armeno (2,085 residents, 543 m) is the largest, the furthest from the water and the gateway to the SP41 up Mottarone."
    },
    {
      titolo: "The sun is the reason to go up",
      testo: "On 21 December our terrain calculation gives 8 h 04 min of direct sun in Ameno, 8 h 00 min in Vacciago, 7 h 47 min in Miasino, 7 h 38 min in Armeno, out of 8 h 29 min possible. Mottarone is closer, but the horizon around is low because the villages already sit high. The calculation does not include buildings or trees."
    },
    {
      titolo: "What it costs",
      testo: "OMI (2nd half of 2025) values villas at €1,500–2,200/m² in Miasino's zone D1, €1,150–1,650/m² in the hill zones of Ameno and Armeno. Standard homes range from €920 to €1,800/m² by village and zone. Villas in Ameno and Armeno are valued at about half those on Orta's lakefront. These are valuations, not sale prices."
    },
    {
      titolo: "Services and limits",
      testo: "Schools up to lower secondary are in Armeno; Miasino has a primary school, Ameno a nursery. For upper secondary you go to Gozzano or Omegna. Life runs on the car: no boat landing, and the lake is 6–9 min away. According to ISPRA, in Miasino 10.5% of residents live in areas of high or very high landslide hazard. The Mottarone cable car, on the Stresa side, has been shut since 2021."
    },
  ],
  perChi: {
    si: [
      "You want more winter sun: up to 8 h 04 min on 21 December.",
      "You want a historic villa or one with land, at hillside values.",
      "Seeing the lake from above and reaching it in 6–9 min is enough.",
    ],
    no: [
      "You want the water at your door and the boat on foot.",
      "You need upper secondary schools and full services in the village.",
      "You do not want to depend on the car every day.",
    ],
  },
  confronto: {
    titolo: "The Mottarone hills and the lake's ends compared",
    altro: "The lake's ends",
    righe: [
      ["Height of the point", "478–543 m", "307–844 m"],
      ["Distance from the shore", "0.5–2.5 km", "0.5–2.1 km"],
      ["Direct sun on 21 December", "7 h 38 min – 8 h 04 min", "5 h 37 min – 7 h 48 min"],
      ["Residents of the municipalities (2025)", "3,769", "21,884"],
      ["From Milan's Duomo, no traffic", "72–77 min", "67–96 min"],
      ["Villas, highest OMI zone", "€1,500–2,200/m² (Miasino)", "€1,500–2,200/m² (Omegna, Bagnella)"],
      ["State upper secondary schools", "None", "In Omegna and Gozzano"],
    ],
  },
  faq: [
    { d: "Why choose the hills over the shore?", r: "For sun and space: on 21 December the hills get 7 h 38 min – 8 h 04 min of direct sun, against 6 h 19 min – 6 h 46 min on the east shore. Villas are valued at €1,150–2,200/m², against €2,100–3,000/m² on Orta's lakefront. In exchange you see the lake from above and reach it by car." },
    { d: "Can you see the lake from the hills?", r: "From many spots yes, because the villages are 190–250 m above the water; from others no, because of aspect, trees or buildings. Armeno, the furthest, looks mainly at Mottarone. Check house by house." },
    { d: "Are the hills served by train?", r: "Orta-Miasino station is 0.9 km from Miasino, 1.2 km from Vacciago and 1.8 km from Ameno as the crow flies; for Armeno the nearest is Pettenasco, 2.5 km away. On a sample Wednesday 8 direct trains leave for Novara; for Milan you change at Novara." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiMondoPagina = {
  titolo: "Die Hügel am Mottarone: Ameno, Vacciago, Miasino, Armeno",
  descrizione: "Die Hügel über dem Ortasee: Ameno, Vacciago, Miasino und Armeno, auf 478–543 m. Die längste Wintersonne am See, historische Villen, OMI-Werte 2025.",
  h1: "Ameno, Vacciago, Miasino und Armeno: die Hügel am Mottarone über dem Ortasee",
  minuto: "Die Hügel am Mottarone sind die Dörfer auf halber Höhe über Orta, zwischen 478 und 543 m und 0,5–2,5 km vom Ufer. Der See liegt nicht vor der Tür: Man sieht ihn von oben, wo die Lage es erlaubt. Dafür haben sie die längste Wintersonne im Atlas: am 21. Dezember 7 h 38 min – 8 h 04 min direkte Sonne, gegenüber 6 h 39 min an der Piazza Motta. Es sind Dörfer mit Herrenhäusern wie der Villa Nigra in Miasino, mit der Fondazione Calderara in Vacciago und der Straße auf den Mottarone, die in Armeno beginnt. Villen werden je nach Ort mit 1.150–2.200 €/m² bewertet. Mailand ist 72–77 Min. entfernt, und der Bahnhof Orta-Miasino liegt 0,9–1,8 km von drei der vier Orte.",
  vivere: [
    {
      titolo: "Vier Dörfer am Hang",
      testo: "Ameno (874 Einwohner, 531 m) ist der Ort mit der meisten Wintersonne der sechzehn Orte. Vacciago ist sein Ortsteil Richtung Orta, auf 484 m und 500 m vom Ufer, Sitz der Fondazione Calderara. Miasino (810 Einwohner, 478 m) ist das Dorf der Häuser aus dem 17. und 18. Jahrhundert, mit der Villa Nigra im Zentrum. Armeno (2.085 Einwohner, 543 m) ist das größte, das am weitesten vom Wasser entfernte und das Tor zur SP41 auf den Mottarone."
    },
    {
      titolo: "Die Sonne ist der Grund hinaufzuziehen",
      testo: "Am 21. Dezember ergibt unsere Geländeberechnung 8 h 04 min direkte Sonne in Ameno, 8 h 00 min in Vacciago, 7 h 47 min in Miasino, 7 h 38 min in Armeno, von 8 h 29 min möglichen. Der Mottarone ist näher, aber der Horizont ringsum ist niedrig, weil die Dörfer schon hoch liegen. Gebäude und Bäume sind nicht berücksichtigt."
    },
    {
      titolo: "Was es kostet",
      testo: "Die OMI (2. Halbjahr 2025) bewertet Villen mit 1.500–2.200 €/m² in der Zone D1 von Miasino, mit 1.150–1.650 €/m² in den Hügelzonen von Ameno und Armeno. Wohnungen liegen je nach Ort und Zone zwischen 920 und 1.800 €/m². Villen in Ameno und Armeno liegen bei etwa der Hälfte der Werte am Ufer von Orta. Das sind Richtwerte, keine Kaufpreise."
    },
    {
      titolo: "Versorgung und Grenzen",
      testo: "Schulen bis zur Mittelschule gibt es in Armeno; Miasino hat eine Grundschule, Ameno einen Kindergarten. Zur Oberschule fährt man nach Gozzano oder Omegna. Man lebt mit dem Auto: keine Anlegestelle, der See ist 6–9 Min. entfernt. Laut ISPRA leben in Miasino 10,5 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr. Die Mottarone-Seilbahn auf der Seite von Stresa ist seit 2021 geschlossen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen mehr Wintersonne: bis zu 8 h 04 min am 21. Dezember.",
      "Sie suchen eine historische Villa oder eine mit Grund, zu Hügelwerten.",
      "Ihnen reicht der See von oben, in 6–9 Min. erreichbar.",
    ],
    no: [
      "Sie wollen das Wasser vor der Tür und das Schiff zu Fuß.",
      "Sie brauchen Oberschulen und volle Versorgung im Ort.",
      "Sie wollen nicht jeden Tag vom Auto abhängen.",
    ],
  },
  confronto: {
    titolo: "Die Hügel am Mottarone und die Seeenden im Vergleich",
    altro: "Die Seeenden",
    righe: [
      ["Höhe des Punktes", "478–543 m", "307–844 m"],
      ["Entfernung vom Ufer", "0,5–2,5 km", "0,5–2,1 km"],
      ["Direkte Sonne am 21. Dezember", "7 h 38 min – 8 h 04 min", "5 h 37 min – 7 h 48 min"],
      ["Einwohner der Gemeinden (2025)", "3.769", "21.884"],
      ["Ab Mailänder Dom, ohne Verkehr", "72–77 Min.", "67–96 Min."],
      ["Villen, teuerste OMI-Zone", "1.500–2.200 €/m² (Miasino)", "1.500–2.200 €/m² (Omegna, Bagnella)"],
      ["Staatliche Oberschulen", "Keine", "In Omegna und Gozzano"],
    ],
  },
  faq: [
    { d: "Warum die Hügel statt des Ufers?", r: "Wegen Sonne und Platz: Am 21. Dezember haben die Hügel 7 h 38 min – 8 h 04 min direkte Sonne, das Ostufer 6 h 19 min – 6 h 46 min. Villen werden mit 1.150–2.200 €/m² bewertet, am Ufer von Orta mit 2.100–3.000 €/m². Dafür sieht man den See von oben und erreicht ihn mit dem Auto." },
    { d: "Sieht man von den Hügeln den See?", r: "Von vielen Stellen ja, weil die Dörfer 190–250 m über dem Wasser liegen; von anderen nicht, wegen Ausrichtung, Bäumen oder Gebäuden. Armeno, am weitesten entfernt, schaut vor allem auf den Mottarone. Das prüft man Haus für Haus." },
    { d: "Sind die Hügel per Bahn erreichbar?", r: "Der Bahnhof Orta-Miasino liegt 0,9 km Luftlinie von Miasino, 1,2 km von Vacciago und 1,8 km von Ameno; für Armeno ist Pettenasco am nächsten, 2,5 km entfernt. An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara; nach Mailand steigt man in Novara um." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiMondoPagina = {
  titolo: "Griči pod Mottaronejem: Ameno, Vacciago, Miasino, Armeno",
  descrizione: "Griči nad jezerom Orta: Ameno, Vacciago, Miasino in Armeno, na 478–543 m. Najdaljše zimsko sonce ob jezeru, zgodovinske vile, vrednosti OMI 2025.",
  h1: "Ameno, Vacciago, Miasino in Armeno: griči pod Mottaronejem nad jezerom Orta",
  minuto: "Griči pod Mottaronejem so vasi na pol pobočja nad Orto, med 478 in 543 m nadmorske višine in 0,5–2,5 km od obale. Jezero ni pred vrati: gledate ga od zgoraj, kjer lega to dopušča. V zameno imajo najdaljše zimsko sonce v atlasu: 21. decembra 7 h 38 min – 8 h 04 min neposrednega sonca, na trgu Piazza Motta pa 6 h 39 min. To so vasi meščanskih hiš, kot je vila Nigra v Miasinu, s fundacijo Calderara v Vacciagu in cesto na vrh Mottaroneja, ki se začne v Armenu. Vile so glede na vas ovrednotene na 1.150–2.200 €/m². Milano je 72–77 min stran, postaja Orta-Miasino pa je 0,9–1,8 km od treh od štirih krajev.",
  vivere: [
    {
      titolo: "Štiri vasi na pobočju",
      testo: "Ameno (874 prebivalcev, 531 m) je vas z največ zimskega sonca med šestnajstimi kraji. Vacciago je njen zaselek proti Orti, na 484 m in 500 m od obale, sedež fundacije Calderara. Miasino (810 prebivalcev, 478 m) je vas hiš iz 17. in 18. stoletja, z vilo Nigra v središču. Armeno (2.085 prebivalcev, 543 m) je največja, od vode najbolj oddaljena in vstopna točka ceste SP41 na Mottarone."
    },
    {
      titolo: "Sonce je razlog, da se povzpnete",
      testo: "21. decembra naš izračun na reliefu da 8 h 04 min neposrednega sonca v Amenu, 8 h 00 min v Vacciagu, 7 h 47 min v Miasinu, 7 h 38 min v Armenu, od 8 h 29 min mogočih. Mottarone je bližje, a obzorje okoli je nizko, ker vasi že ležijo visoko. Stavbe in drevesa niso upoštevani."
    },
    {
      titolo: "Koliko stane",
      testo: "OMI (2. polletje 2025) vrednoti vile na 1.500–2.200 €/m² v coni D1 Miasina, na 1.150–1.650 €/m² v gričevnatih conah Amena in Armena. Običajna stanovanja so glede na vas in cono med 920 in 1.800 €/m². Vile v Amenu in Armenu so ovrednotene na približno polovico tistih ob obali v Orti. To so ocenjene vrednosti, ne kupnine."
    },
    {
      titolo: "Storitve in omejitve",
      testo: "Šole do nižje srednje so v Armenu; Miasino ima osnovno šolo, Ameno vrtec. Za višjo srednjo šolo se vozi v Gozzano ali Omegno. Živi se z avtom: ni pristana, jezero je 6–9 min stran. Po podatkih ISPRA v Miasinu 10,5 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov. Žičnica na Mottarone s strani Strese je zaprta od leta 2021."
    },
  ],
  perChi: {
    si: [
      "Želite več zimskega sonca: do 8 h 04 min 21. decembra.",
      "Iščete zgodovinsko vilo ali vilo z zemljiščem, po gričevnatih vrednostih.",
      "Zadostuje vam jezero od zgoraj, dosegljivo v 6–9 min.",
    ],
    no: [
      "Želite vodo pred vrati in ladjo peš.",
      "Potrebujete višje srednje šole in vse storitve v kraju.",
      "Ne želite biti vsak dan odvisni od avtomobila.",
    ],
  },
  confronto: {
    titolo: "Griči pod Mottaronejem in konca jezera v primerjavi",
    altro: "Konca jezera",
    righe: [
      ["Nadmorska višina točke", "478–543 m", "307–844 m"],
      ["Oddaljenost od obale", "0,5–2,5 km", "0,5–2,1 km"],
      ["Neposredno sonce 21. decembra", "7 h 38 min – 8 h 04 min", "5 h 37 min – 7 h 48 min"],
      ["Prebivalci občin (2025)", "3.769", "21.884"],
      ["Od milanske stolnice, brez prometa", "72–77 min", "67–96 min"],
      ["Vile, najdražja cona OMI", "1.500–2.200 €/m² (Miasino)", "1.500–2.200 €/m² (Omegna, Bagnella)"],
      ["Državne višje srednje šole", "Nobene", "V Omegni in Gozzanu"],
    ],
  },
  faq: [
    { d: "Zakaj izbrati griče namesto obale?", r: "Zaradi sonca in prostora: 21. decembra imajo griči 7 h 38 min – 8 h 04 min neposrednega sonca, vzhodna obala pa 6 h 19 min – 6 h 46 min. Vile so ovrednotene na 1.150–2.200 €/m², ob obali v Orti na 2.100–3.000 €/m². V zameno jezero vidite od zgoraj in do njega pridete z avtom." },
    { d: "Ali se z gričev vidi jezero?", r: "Z mnogih mest da, ker vasi ležijo 190–250 m nad vodo; z drugih ne, zaradi lege, dreves ali stavb. Armeno, najbolj oddaljen, gleda predvsem na Mottarone. Preverite za vsako hišo posebej." },
    { d: "Ali so griči povezani z vlakom?", r: "Postaja Orta-Miasino je 0,9 km zračne črte od Miasina, 1,2 km od Vacciaga in 1,8 km od Amena; za Armeno je najbližja postaja Pettenasco, 2,5 km stran. Na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro; za Milano prestopite v Novari." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiMondoPagina> = { it, en, de, sl };
export default testi;
