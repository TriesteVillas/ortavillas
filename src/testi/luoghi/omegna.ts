import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Omegna", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Omegna", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/103050", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Bonacina, Lake Orta: the undermining of an ecosystem, J. Limnol. 60(1), 2001 (emissario a nord)", url: "https://jlimnol.it/jlimnol/article/download/jlimnol.2001.53/402/803", data: "2026-10-06" },
  { titolo: "Poste Italiane – bollettino del francobollo «Cento di questi Gianni» (Rodari, Omegna)", url: "https://filatelia.poste.it/media/catalog/product/attachments/B.I.%20Gianni%20Rodari.pdf", data: "2026-10-06" },
  { titolo: "Alessi – History (Fratelli Alessi Omegna, 1921; sede a Crusinallo)", url: "https://alessi.com/pages/history", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Forum di Omegna, Fondazione Museo Arti e Industria", url: "https://www.illagomaggiore.com/poi/arts-and-industry-museum-foundation/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Omegna (Museo Rodari inaugurato il 16/10/2021; museo «Le fabbriche del gioco», marzo 2026)", url: "https://it.wikipedia.org/wiki/Omegna", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna (agosto 2026)", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL VCO – avviso BUR Piemonte 20/7/2026 (COQ Omegna; DEA di I livello Verbania e Domodossola)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/30/attach/co_azienda%20sanitaria%20locale%20vco_2026-07-20_101592.pdf", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – orari 2025 e 2026", url: "https://www.navigazionelagodorta.it/", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Omegna: vivere nella città del lago d'Orta, prezzi e servizi",
  descrizione: "Omegna, 14.185 abitanti, l'unica città del lago d'Orta: scuole superiori, stazione, quotazioni OMI, il sole d'inverno più corto dell'atlante, 82 min da Milano.",
  frase: "Omegna è l'unica città del lago d'Orta, alla sua estremità nord: 14.185 abitanti, scuole fino alle superiori, stazione a 1 km, 82 min da Milano e 62 da Malpensa.",
  vivere: [
    {
      titolo: "La città dove il lago esce verso nord",
      testo: "Omegna sta all'estremità settentrionale del lago, dove esce la Nigoglia: l'Orta è l'unico tra i laghi subalpini italiani con l'emissario a nord (CNR, 2001). È la città natale di Gianni Rodari, primo scrittore italiano a vincere il Premio Andersen, nel 1970; il Museo Rodari è stato inaugurato nel 2021.\n\nÈ anche una città industriale. Alessi nacque qui nel 1921 come «Fratelli Alessi Omegna» e ha ancora sede a Crusinallo; il Forum di Omegna espone i prodotti delle aziende storiche del distretto del casalingo, tra cui Alessi, Lagostina e Bialetti. Secondo Wikipedia nel marzo 2026 ha aperto il museo «Le fabbriche del gioco»."
    },
    {
      titolo: "Servizi da città",
      testo: "Con 14.185 residenti (ISTAT, 1° gennaio 2025) Omegna ha più di due volte e mezzo gli abitanti di Gozzano, il secondo comune dell'atlante. Ha due istituti comprensivi, sei plessi di scuola primaria, due scuole medie, e alle superiori licei (scientifico, artistico, sportivo, musicale), un istituto tecnico commerciale e un professionale per l'industria. Il giovedì c'è il mercato, e i battelli rinforzano le corse.\n\nL'ospedale Madonna del Popolo, oggi Centro Ortopedico di Quadrante, ha un Punto di Primo Intervento, non un pronto soccorso: l'orario ordinario non l'abbiamo verificato, ma nell'agosto 2026 l'apertura fino a mezzanotte era un'eccezione. I DEA di I livello dell'ASL VCO sono a Verbania e Domodossola."
    },
    {
      titolo: "I limiti: sole corto, acqua meno limpida",
      testo: "Omegna sta in fondo a una valle chiusa dai monti, e d'inverno si vede: il 21 dicembre il nostro calcolo dà 5 h 37 min di sole diretto, dalle 10:01 alle 15:37. È il valore più basso dei sedici luoghi. Il 21 giugno sono 11 h 57 min. Il calcolo considera solo il rilievo.\n\nNel 2024 i soli due punti di balneazione del lago in classe «sufficiente» sono a Omegna: la spiaggia della Bagnella e il Lido; l'area dei Canottieri è «buona». Per ISPRA l'11,5% dei residenti vive in aree a pericolosità da frana elevata o molto elevata e il 9,6% in aree a pericolosità idraulica media, soprattutto lungo la riva e i torrenti."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) in centro (B1) le abitazioni civili sono quotate 1.150–1.650 €/m² e ville e villini 1.450–2.150 €/m². Alla Bagnella (C1), sul lago, le civili stanno a 1.100–1.550 €/m² e le ville a 1.500–2.200 €/m²; sulla fascia lago est (C3) le civili a 1.050–1.500 €/m². Nelle frazioni Crusinallo e Cireggio le civili scendono a 950–1.400 €/m², ad Agrano a 850–1.250 €/m². Sul 2° semestre 2024 le civili in centro sono salite dell'1,8%, le ville sono ferme.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale. Il centro di Omegna è quotato circa un terzo in meno del centro di Orta."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 82 min (106 km) da Milano Duomo, 62 min (66 km) da Malpensa T1, 89 min da Lugano. La stazione di Omegna è a 1 km in linea d'aria, quella di Omegna-Crusinallo a 2,1 km, sulla linea Novara–Domodossola; per Milano si cambia a Novara.\n\nOmegna è uno degli approdi principali della Navigazione Lago d'Orta, attiva da marzo a ottobre; da novembre a febbraio non risulta servizio di linea. Nonio è a 7 min, Pettenasco a 13, Orta a 18."
    },
  ],
  perChi: {
    si: [
      "Volete una città con scuole superiori, mercato e treno.",
      "Cercate il lago a quotazioni da città: 1.100–1.550 €/m² per le civili alla Bagnella.",
      "Vi interessa la storia industriale del design italiano.",
    ],
    no: [
      "Volete sole d'inverno: qui il 21 dicembre arriva alle 10:01 e se ne va alle 15:37.",
      "Volete un pronto soccorso vicino: Omegna ha solo un Punto di Primo Intervento.",
      "Cercate la quiete del borgo: è una città che lavora.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Omegna?", r: "L'OMI quota in centro le abitazioni civili 1.150–1.650 €/m² e le ville 1.450–2.150 €/m² (2° semestre 2025). Alla Bagnella le ville arrivano a 1.500–2.200 €/m²; nelle frazioni le civili scendono a 850–1.400 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "Omegna ha un pronto soccorso?", r: "No. L'ospedale Madonna del Popolo ha un Punto di Primo Intervento con orario limitato. I DEA di I livello più vicini dell'ASL VCO sono a Verbania e Domodossola; per la provincia di Novara a Borgomanero." },
    { d: "Che scuole superiori ci sono a Omegna?", r: "L'istituto Gobetti, con licei scientifico, artistico, sportivo e musicale, e l'istituto Dalla Chiesa-Spinelli, con tecnico commerciale e professionale per l'industria. In tutto l'anagrafe del Ministero elenca nel comune 20 voci tra scuole e istituti statali. Le paritarie non sono nel dato del Ministero." },
    { d: "Si può fare il bagno a Omegna?", r: "Nel 2024 il punto dei Canottieri è in classe «buona», la spiaggia della Bagnella e il Lido in classe «sufficiente»: sono le classi più basse del lago. Gli altri tredici punti del lago sono «buoni» o «eccellenti». Il dato è dell'Agenzia europea dell'ambiente." },
    { d: "Quanto sole c'è a Omegna d'inverno?", r: "Il 21 dicembre 5 h 37 min di sole diretto, dalle 10:01 alle 15:37, secondo il nostro calcolo sul rilievo. È il minimo dei sedici luoghi. Le frazioni in alto, come Quarna Sopra e Nonio, ne hanno di più." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Omegna: living in Lake Orta's town, prices and services",
  descrizione: "Omegna, 14,185 residents, the only town on Lake Orta: upper secondary schools, a station, OMI values, the shortest winter sun in the atlas, 82 min from Milan.",
  frase: "Omegna is the only town on Lake Orta, at its northern end: 14,185 residents, schools up to upper secondary, a station 1 km away, 82 min from Milan and 62 from Malpensa.",
  vivere: [
    {
      titolo: "The town where the lake flows north",
      testo: "Omegna sits at the northern end of the lake, where the Nigoglia flows out: Orta is the only Italian subalpine lake whose outflow is at the north end (CNR, 2001). It is the birthplace of Gianni Rodari, the first Italian writer to win the Hans Christian Andersen Award, in 1970; the Rodari Museum opened in 2021.\n\nIt is also an industrial town. Alessi was founded here in 1921 as \"Fratelli Alessi Omegna\" and still has its seat in Crusinallo; the Forum di Omegna shows products of the historic companies of the housewares district, including Alessi, Lagostina and Bialetti. According to Wikipedia the museum \"Le fabbriche del gioco\" opened in March 2026."
    },
    {
      titolo: "Town-level services",
      testo: "With 14,185 residents (ISTAT, 1 January 2025) Omegna has more than two and a half times the population of Gozzano, the second-largest municipality in the atlas. It has two comprehensive school institutes, six primary school sites, two lower secondary schools, and at upper secondary level licei (science, art, sport, music), a commercial technical institute and a vocational school for industry. Thursday is market day, and boats run extra trips.\n\nThe Madonna del Popolo hospital, now the Centro Ortopedico di Quadrante, has a first-aid point, not an emergency department: we have not verified its normal hours, but in August 2026 opening until midnight was an exception. The ASL VCO level-I emergency departments are in Verbania and Domodossola."
    },
    {
      titolo: "The limits: short sun, less clear water",
      testo: "Omegna lies at the bottom of a valley closed in by mountains, and in winter it shows: on 21 December our calculation gives 5 h 37 min of direct sun, from 10:01 am to 3:37 pm. It is the lowest figure of the sixteen places. On 21 June it is 11 h 57 min. The calculation covers terrain only.\n\nIn 2024 the only two bathing points on the lake rated \"sufficient\" are in Omegna: the Bagnella beach and the Lido; the rowing club area is \"good\". According to ISPRA, 11.5% of residents live in areas of high or very high landslide hazard and 9.6% in areas of medium flood hazard, mostly along the shore and streams."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the centre (B1) standard homes are valued at €1,150–1,650/m² and villas at €1,450–2,150/m². At Bagnella (C1), on the lake, standard homes are at €1,100–1,550/m² and villas at €1,500–2,200/m²; on the east lake band (C3) standard homes at €1,050–1,500/m². In the hamlets of Crusinallo and Cireggio standard homes drop to €950–1,400/m², in Agrano to €850–1,250/m². Against the 2nd half of 2024, central standard homes rose by 1.8%; villas are flat.\n\nThese are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition. Central Omegna is valued about a third lower than central Orta."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 82 min (106 km) from Milan's Duomo, 62 min (66 km) from Malpensa T1, 89 min from Lugano. Omegna station is 1 km away as the crow flies, Omegna-Crusinallo 2.1 km, on the Novara–Domodossola line; for Milan you change at Novara.\n\nOmegna is one of the main stops of Navigazione Lago d'Orta, running from March to October; from November to February no scheduled service is listed. Nonio is 7 min away, Pettenasco 13, Orta 18."
    },
  ],
  perChi: {
    si: [
      "You want a town with upper secondary schools, a market and a train.",
      "You want the lake at town values: €1,100–1,550/m² for standard homes at Bagnella.",
      "Italian industrial design history interests you.",
    ],
    no: [
      "You want winter sun: on 21 December it arrives at 10:01 am and leaves at 3:37 pm.",
      "You want an emergency department nearby: Omegna has only a first-aid point.",
      "You are after village quiet: this is a working town.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Omegna?", r: "In the centre OMI values standard homes at €1,150–1,650/m² and villas at €1,450–2,150/m² (2nd half of 2025). At Bagnella villas reach €1,500–2,200/m²; in the hamlets standard homes drop to €850–1,400/m². These are estimated ranges, not signed prices." },
    { d: "Does Omegna have an emergency department?", r: "No. The Madonna del Popolo hospital has a first-aid point with limited hours. The nearest ASL VCO level-I emergency departments are in Verbania and Domodossola; for the province of Novara, in Borgomanero." },
    { d: "Which upper secondary schools are in Omegna?", r: "The Gobetti institute, with science, art, sport and music licei, and the Dalla Chiesa-Spinelli institute, with commercial technical and industrial vocational courses. In all, the Ministry register lists 20 state schools and institutes in the municipality. Private (paritarie) schools are not in the Ministry data." },
    { d: "Can you swim in Omegna?", r: "In 2024 the rowing club point is rated \"good\", the Bagnella beach and the Lido \"sufficient\": the lowest classes on the lake. The other thirteen points on the lake are \"good\" or \"excellent\". The data come from the European Environment Agency." },
    { d: "How much winter sun does Omegna get?", r: "On 21 December, 5 h 37 min of direct sun, from 10:01 am to 3:37 pm, according to our terrain calculation. It is the minimum of the sixteen places. Higher places such as Quarna Sopra and Nonio get more." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Omegna: Leben in der Stadt am Ortasee, Preise, Versorgung",
  descrizione: "Omegna, 14.185 Einwohner, die einzige Stadt am Ortasee: Oberschulen, Bahnhof, OMI-Werte 2025, die kürzeste Wintersonne im Atlas, 82 Min. von Mailand.",
  frase: "Omegna ist die einzige Stadt am Ortasee, an seinem Nordende: 14.185 Einwohner, Schulen bis zur Oberstufe, Bahnhof in 1 km, 82 Min. von Mailand und 62 von Malpensa.",
  vivere: [
    {
      titolo: "Die Stadt, in der der See nach Norden abfließt",
      testo: "Omegna liegt am Nordende des Sees, wo die Nigoglia abfließt: Der Ortasee ist der einzige der italienischen Voralpenseen mit dem Abfluss im Norden (CNR, 2001). Hier wurde Gianni Rodari geboren, 1970 als erster italienischer Autor mit dem Hans-Christian-Andersen-Preis ausgezeichnet; das Rodari-Museum wurde 2021 eröffnet.\n\nEs ist auch eine Industriestadt. Alessi entstand hier 1921 als „Fratelli Alessi Omegna“ und hat seinen Sitz noch in Crusinallo; das Forum di Omegna zeigt Produkte der historischen Firmen des Haushaltswarenbezirks, darunter Alessi, Lagostina und Bialetti. Laut Wikipedia eröffnete im März 2026 das Museum „Le fabbriche del gioco“."
    },
    {
      titolo: "Versorgung einer Stadt",
      testo: "Mit 14.185 Einwohnern (ISTAT, 1. Januar 2025) hat Omegna mehr als zweieinhalbmal so viele Einwohner wie Gozzano, die zweitgrößte Gemeinde des Atlas. Es gibt zwei Schulverbünde, sechs Grundschulstandorte, zwei Mittelschulen und in der Oberstufe Gymnasien (naturwissenschaftlich, künstlerisch, sportlich, musikalisch), eine Handelsfachschule und eine Berufsschule für Industrie. Donnerstag ist Markttag, und die Schiffe fahren zusätzlich.\n\nDas Krankenhaus Madonna del Popolo, heute Centro Ortopedico di Quadrante, hat eine Erste-Hilfe-Stelle, keine Notaufnahme: Die regulären Zeiten haben wir nicht geprüft, aber im August 2026 war die Öffnung bis Mitternacht eine Ausnahme. Die Notaufnahmen der Stufe I der ASL VCO sind in Verbania und Domodossola."
    },
    {
      titolo: "Die Grenzen: kurze Sonne, weniger klares Wasser",
      testo: "Omegna liegt am Grund eines von Bergen umschlossenen Tals, und im Winter merkt man das: Am 21. Dezember ergibt unsere Berechnung 5 h 37 min direkte Sonne, von 10.01 bis 15.37 Uhr. Das ist der niedrigste Wert der sechzehn Orte. Am 21. Juni sind es 11 h 57 min. Berechnet ist nur das Gelände.\n\n2024 liegen die einzigen zwei Badestellen des Sees mit „ausreichend“ in Omegna: der Strand Bagnella und der Lido; die Stelle am Ruderclub ist „gut“. Laut ISPRA leben 11,5 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr und 9,6 % in Gebieten mittlerer Hochwassergefahr, vor allem an Ufer und Bächen."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden im Zentrum (B1) Wohnungen mit 1.150–1.650 €/m² und Villen mit 1.450–2.150 €/m² bewertet. In Bagnella (C1) am See liegen Wohnungen bei 1.100–1.550 €/m² und Villen bei 1.500–2.200 €/m²; am östlichen Seestreifen (C3) Wohnungen bei 1.050–1.500 €/m². In den Ortsteilen Crusinallo und Cireggio sinken Wohnungen auf 950–1.400 €/m², in Agrano auf 850–1.250 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen im Zentrum um 1,8 %, Villen blieben gleich.\n\nDas sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand. Das Zentrum von Omegna liegt etwa ein Drittel unter dem Zentrum von Orta."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 82 Min. (106 km) vom Mailänder Dom, 62 Min. (66 km) von Malpensa T1, 89 Min. von Lugano. Der Bahnhof Omegna liegt 1 km Luftlinie entfernt, Omegna-Crusinallo 2,1 km, an der Strecke Novara–Domodossola; nach Mailand steigt man in Novara um.\n\nOmegna ist eine der Hauptstationen der Navigazione Lago d'Orta, von März bis Oktober; von November bis Februar ist kein Liniendienst ausgewiesen. Nonio ist 7 Min. entfernt, Pettenasco 13, Orta 18."
    },
  ],
  perChi: {
    si: [
      "Sie wollen eine Stadt mit Oberschulen, Markt und Bahn.",
      "Sie suchen den See zu Stadtwerten: 1.100–1.550 €/m² für Wohnungen in Bagnella.",
      "Sie interessiert die Industriegeschichte des italienischen Designs.",
    ],
    no: [
      "Sie wollen Wintersonne: Am 21. Dezember kommt sie um 10.01 Uhr und geht um 15.37 Uhr.",
      "Sie wollen eine Notaufnahme in der Nähe: Omegna hat nur eine Erste-Hilfe-Stelle.",
      "Sie suchen Dorfruhe: Das ist eine arbeitende Stadt.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Omegna?", r: "Im Zentrum bewertet die OMI Wohnungen mit 1.150–1.650 €/m² und Villen mit 1.450–2.150 €/m² (2. Halbjahr 2025). In Bagnella erreichen Villen 1.500–2.200 €/m²; in den Ortsteilen sinken Wohnungen auf 850–1.400 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Hat Omegna eine Notaufnahme?", r: "Nein. Das Krankenhaus Madonna del Popolo hat eine Erste-Hilfe-Stelle mit begrenzten Zeiten. Die nächsten Notaufnahmen der Stufe I der ASL VCO sind in Verbania und Domodossola; für die Provinz Novara in Borgomanero." },
    { d: "Welche Oberschulen gibt es in Omegna?", r: "Das Institut Gobetti mit naturwissenschaftlichem, künstlerischem, sportlichem und musikalischem Gymnasium und das Institut Dalla Chiesa-Spinelli mit Handelsfachschule und Berufsschule für Industrie. Insgesamt führt das Register des Ministeriums in der Gemeinde 20 staatliche Schulen und Institute. Private Schulen sind in den Daten des Ministeriums nicht enthalten." },
    { d: "Kann man in Omegna baden?", r: "2024 ist die Stelle am Ruderclub mit „gut“ bewertet, der Strand Bagnella und der Lido mit „ausreichend“: die niedrigsten Klassen am See. Die übrigen dreizehn Stellen am See sind „gut“ oder „ausgezeichnet“. Die Daten stammen von der Europäischen Umweltagentur." },
    { d: "Wie viel Wintersonne hat Omegna?", r: "Am 21. Dezember 5 h 37 min direkte Sonne, von 10.01 bis 15.37 Uhr, nach unserer Geländeberechnung. Das ist das Minimum der sechzehn Orte. Höher gelegene Orte wie Quarna Sopra und Nonio haben mehr." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Omegna: življenje v mestu ob jezeru Orta, cene in storitve",
  descrizione: "Omegna, 14.185 prebivalcev, edino mesto ob jezeru Orta: srednje šole, postaja, vrednosti OMI 2025, najkrajše zimsko sonce v atlasu, 82 min od Milana.",
  frase: "Omegna je edino mesto ob jezeru Orta, na njegovem severnem koncu: 14.185 prebivalcev, šole do višje srednje, postaja 1 km stran, 82 min od Milana in 62 od letališča Malpensa.",
  vivere: [
    {
      titolo: "Mesto, kjer jezero odteka proti severu",
      testo: "Omegna leži na severnem koncu jezera, kjer odteka Nigoglia: Orta je edino italijansko predalpsko jezero z odtokom na severu (CNR, 2001). Tu se je rodil Gianni Rodari, leta 1970 prvi italijanski pisatelj z Andersenovo nagrado; Rodarijev muzej je bil odprt leta 2021.\n\nJe tudi industrijsko mesto. Alessi je nastal tu leta 1921 kot »Fratelli Alessi Omegna« in ima sedež še vedno v Crusinallu; Forum di Omegna razstavlja izdelke zgodovinskih podjetij okrožja gospodinjskih izdelkov, med njimi Alessi, Lagostina in Bialetti. Po navedbah Wikipedije je marca 2026 odprl vrata muzej »Le fabbriche del gioco«."
    },
    {
      titolo: "Mestne storitve",
      testo: "S 14.185 prebivalci (ISTAT, 1. januar 2025) ima Omegna več kot dvakrat in pol toliko prebivalcev kot Gozzano, druga največja občina atlasa. Ima dva šolska zavoda, šest osnovnošolskih enot, dve nižji srednji šoli, na višji stopnji pa gimnazije (naravoslovno, umetniško, športno, glasbeno), srednjo ekonomsko šolo in poklicno šolo za industrijo. Ob četrtkih je tržni dan in ladje vozijo pogosteje.\n\nBolnišnica Madonna del Popolo, danes Centro Ortopedico di Quadrante, ima točko prve pomoči, ne urgence: rednega urnika nismo preverili, avgusta 2026 pa je bilo odprtje do polnoči izjema. Urgenci I. stopnje ASL VCO sta v Verbanii in Domodossoli."
    },
    {
      titolo: "Omejitve: kratko sonce, manj čista voda",
      testo: "Omegna leži na dnu doline, ki jo zapirajo gore, in pozimi se to pozna: 21. decembra naš izračun da 5 h 37 min neposrednega sonca, od 10.01 do 15.37. To je najnižja vrednost med šestnajstimi kraji. 21. junija je sonca 11 h 57 min. Izračun upošteva le teren.\n\nLeta 2024 sta edini kopalni mesti ob jezeru v razredu »zadostno« v Omegni: plaža Bagnella in Lido; mesto pri veslaškem klubu je »dobro«. Po podatkih ISPRA 11,5 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, 9,6 % pa na območjih srednje poplavne nevarnosti, predvsem ob obali in potokih."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v središču (B1) običajna stanovanja ovrednotena na 1.150–1.650 €/m², vile na 1.450–2.150 €/m². V Bagnelli (C1) ob jezeru so stanovanja po 1.100–1.550 €/m², vile po 1.500–2.200 €/m²; na vzhodnem obalnem pasu (C3) stanovanja po 1.050–1.500 €/m². V zaselkih Crusinallo in Cireggio stanovanja padejo na 950–1.400 €/m², v Agranu na 850–1.250 €/m². Glede na 2. polletje 2024 so se stanovanja v središču podražila za 1,8 %, vile so ostale enake.\n\nTo so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju. Središče Omegne je ovrednoteno približno za tretjino niže od središča Orte."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 82 min (106 km) od milanske stolnice, 62 min (66 km) od letališča Malpensa T1, 89 min od Lugana. Postaja Omegna je 1 km zračne črte stran, Omegna-Crusinallo 2,1 km, na progi Novara–Domodossola; za Milano prestopite v Novari.\n\nOmegna je eno glavnih postajališč Navigazione Lago d'Orta, od marca do oktobra; od novembra do februarja redna linija ni navedena. Nonio je 7 min stran, Pettenasco 13, Orta 18."
    },
  ],
  perChi: {
    si: [
      "Želite mesto s srednjimi šolami, tržnico in vlakom.",
      "Iščete jezero po mestnih vrednostih: 1.100–1.550 €/m² za stanovanja v Bagnelli.",
      "Zanima vas industrijska zgodovina italijanskega oblikovanja.",
    ],
    no: [
      "Želite zimsko sonce: 21. decembra pride ob 10.01 in odide ob 15.37.",
      "Želite urgenco v bližini: Omegna ima le točko prve pomoči.",
      "Iščete vaški mir: to je mesto, ki dela.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Omegni?", r: "V središču OMI vrednoti običajna stanovanja na 1.150–1.650 €/m², vile na 1.450–2.150 €/m² (2. polletje 2025). V Bagnelli vile dosežejo 1.500–2.200 €/m²; v zaselkih stanovanja padejo na 850–1.400 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali ima Omegna urgenco?", r: "Ne. Bolnišnica Madonna del Popolo ima točko prve pomoči z omejenim urnikom. Najbližji urgenci I. stopnje ASL VCO sta v Verbanii in Domodossoli; za pokrajino Novara v Borgomaneru." },
    { d: "Katere srednje šole so v Omegni?", r: "Zavod Gobetti z naravoslovno, umetniško, športno in glasbeno gimnazijo ter zavod Dalla Chiesa-Spinelli z ekonomsko in poklicno industrijsko šolo. Register ministrstva v občini skupaj navaja 20 državnih šol in zavodov. Zasebne šole niso v podatkih ministrstva." },
    { d: "Ali se v Omegni lahko kopate?", r: "Leta 2024 je mesto pri veslaškem klubu v razredu »dobro«, plaža Bagnella in Lido pa v razredu »zadostno«: to so najnižji razredi ob jezeru. Preostalih trinajst mest ob jezeru je »dobrih« ali »odličnih«. Podatki so Evropske agencije za okolje." },
    { d: "Koliko zimskega sonca ima Omegna?", r: "21. decembra 5 h 37 min neposrednega sonca, od 10.01 do 15.37, po našem izračunu na reliefu. To je najmanj med šestnajstimi kraji. Višje ležeči kraji, kot sta Quarna Sopra in Nonio, ga imajo več." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
