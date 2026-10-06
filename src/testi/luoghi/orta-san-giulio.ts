import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Orta San Giulio", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Orta San Giulio", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3112", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Ministero della Cultura, Ufficio UNESCO – Sacri Monti del Piemonte e della Lombardia", url: "https://unesco.cultura.gov.it/en/projects/sacri-monti-of-piedmont-and-lombardy/", data: "2026-10-06" },
  { titolo: "Abbazia Benedettina Mater Ecclesiae – La Basilica", url: "https://benedettineisolasangiulio.org/lisola-di-san-giulio/la-basilica/", data: "2026-10-06" },
  { titolo: "Abbazia Benedettina Mater Ecclesiae – La Storia", url: "https://benedettineisolasangiulio.org/lisola-di-san-giulio/la-storia/", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Palazzotto, Piazza Motta", url: "https://www.illagomaggiore.com/en_US/26131,Poi.html", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Orta San Giulio (Villa Bossi, Borghi più belli d'Italia, Bandiera arancione: non verificati sui siti dei circuiti)", url: "https://it.wikipedia.org/wiki/Orta_San_Giulio", data: "2026-10-06" },
  { titolo: "Sky TG24 – Guida Michelin 2026, tre stelle (fonte secondaria)", url: "https://tg24.sky.it/lifestyle/2025/11/19/guida-michelin-2026-migliori-ristoranti-italia-tre-stelle", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "MEF – Prospetto aliquote IMU 2026, Orta San Giulio", url: "https://www1.finanze.gov.it/finanze2/dipartimentopolitichefiscali/fiscalitalocale/nuova_imu/download_lib.php?key=0900f23080cce756&nome=16820_DIMUNIC-12no26g134d.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Orta San Giulio: vivere sul lago d'Orta, prezzi e tempi",
  descrizione: "Orta San Giulio a 9 m sopra il lago e 75 min da Milano: isola, Sacro Monte UNESCO, quotazioni OMI 2025, scuole, sole d'inverno, treni e battelli.",
  frase: "Orta San Giulio è il borgo da cui si parte per l'isola di San Giulio: 1.102 abitanti, Piazza Motta a 9 m sopra il lago, 75 min da Milano e 54 min da Malpensa senza traffico.",
  vivere: [
    {
      titolo: "Un borgo con un'isola davanti",
      testo: "Il borgo sta su una penisola della sponda est, e l'isola di San Giulio, a circa 400 m dalla riva, fa parte del comune. Il nome di Orta compare per la prima volta in un documento del 29 luglio 962, la «Bolla di Ottone», datata qui dopo l'assedio dell'isola. Sull'isola la basilica nasce da un oratorio degli ultimi decenni del IV secolo; l'ambone romanico in serpentino d'Oira è datato 1110–1120. Dal 1973 sull'isola vive una comunità di monache benedettine, l'abbazia Mater Ecclesiae.\n\nIn piazza Motta c'è il Palazzotto del 1582, sede della Comunità della Riviera, che ebbe statuti propri dal 1345 al 1753. Il municipio è a Villa Bossi, sul lago. Sopra il borgo il Sacro Monte di Orta è patrimonio UNESCO dal 2003, uno dei nove complessi del sito «Sacri Monti del Piemonte e della Lombardia»; il Ministero della Cultura conta 21 cappelle."
    },
    {
      titolo: "La vita di ogni giorno è da paese",
      testo: "Orta ha 1.102 residenti (ISTAT, 1° gennaio 2025; la stima per il 2026 è 1.086). Nel comune ci sono scuola dell'infanzia, primaria e secondaria di primo grado statali; per le superiori si va fuori, per esempio a Omegna o a Gozzano. A Villa Crespi il ristorante di Antonino Cannavacciuolo ha tre stelle nella Guida Michelin 2026.\n\nPer la sanità il riferimento più vicino è Omegna, che ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero. Sull'acqua: i quattro punti di balneazione del comune risultano tra «buona» ed «eccellente» nella stagione 2024 (dati EEA; l'attribuzione al comune è dedotta dai codici)."
    },
    {
      titolo: "I limiti si conoscono prima",
      testo: "Il sole d'inverno è corto: il 21 dicembre, in piazza Motta, il rilievo lascia 6 h 39 min di sole diretto su 8 h 29 min teoriche, dalle 09:10 alle 15:48. Il Mottarone alle spalle ritarda l'alba; è un calcolo nostro sul terreno, senza edifici né alberi. Il 21 giugno le ore diventano 13 h 12 min.\n\nNei fine settimana e d'estate il borgo si riempie di visitatori: non abbiamo trovato una misura pubblica delle presenze. Le guide turistiche descrivono un centro storico pedonale con parcheggi a pagamento ai margini, ma il regolamento della ZTL non l'abbiamo verificato. Per ISPRA lo 0,8% della superficie comunale è a pericolosità da frana elevata o molto elevata, e l'1,2% dei residenti vive in aree a pericolosità idraulica media, soprattutto lungo la riva."
    },
    {
      titolo: "Le quotazioni più alte del lago",
      testo: "Per l'Agenzia delle Entrate (OMI, 2° semestre 2025) nella zona B2 «Lungolago, Isola S. Giulio» le abitazioni civili sono quotate 2.050–2.950 €/m² e ville e villini 2.100–3.000 €/m². Nella zona centrale B1 le civili stanno a 1.650–2.400 €/m², nella fascia collinare C1 (che comprende Legro) a 1.200–1.750 €/m². Rispetto al 2° semestre 2024 il centro dell'intervallo delle ville a lago è salito dell'8,5%.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati dall'Agenzia per zona, tipologia e stato conservativo normale, su superficie lorda. Una casa precisa può stare fuori dall'intervallo. L'IMU 2026 sulle seconde case è dello 0,96%."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 75 min (87 km) da piazza del Duomo a Milano, 54 min (47 km) da Malpensa T1, 82 min da Lugano, 97 min da Torino. La stazione Orta-Miasino è a 1,2 km in linea d'aria, sulla linea Novara–Domodossola: in un mercoledì campione ci sono 8 treni diretti per Novara (42–53 min) e nessuno tra le 08:04 e le 13:51; per Milano si cambia a Novara, 1 h 33 min – 1 h 54 min.\n\nL'imbarcadero è in piazza Motta. I battelli di linea viaggiano da marzo a ottobre; dal 4 al 31 ottobre 2026 il giro Orta–Isola–Pella–San Filiberto–Lagna parte ogni 35–45 minuti dalle 10:15 alle 17:45. Da novembre a febbraio non risulta un servizio di linea."
    },
  ],
  perChi: {
    si: [
      "Volete la casa a lago con l'isola davanti e il borgo da girare a piedi.",
      "Vi serve un treno per Novara a 1,2 km, e Malpensa a meno di un'ora.",
      "Cercate un luogo con storia documentata, dal 962 al Sacro Monte UNESCO.",
    ],
    no: [
      "Volete sole lungo d'inverno: qui il 21 dicembre finisce alle 15:48.",
      "Non sopportate la folla dei fine settimana d'estate.",
      "Cercate i prezzi più bassi del lago: qui le quotazioni a lago arrivano a 3.000 €/m².",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Orta San Giulio?", r: "L'OMI quota le abitazioni civili sul lungolago e sull'isola 2.050–2.950 €/m² e le ville 2.100–3.000 €/m² (2° semestre 2025). In collina, zona C1, le civili scendono a 1.200–1.750 €/m². Sono intervalli stimati, non prezzi firmati: la singola casa va stimata a parte." },
    { d: "Si arriva a Orta in treno da Milano?", r: "Sì, con un cambio a Novara: nel campione del 7 ottobre 2026 il viaggio da Orta-Miasino a Milano Centrale dura 1 h 33 min – 1 h 54 min. Da Orta-Miasino partono 8 treni diretti per Novara in un giorno feriale, con un vuoto tra le 08:04 e le 13:51. La stazione è a 1,2 km dal borgo, in salita." },
    { d: "Quanto sole c'è d'inverno in piazza Motta?", r: "Il 21 dicembre il nostro calcolo dà 6 h 39 min di sole diretto, dalle 09:10 alle 15:48, su 8 h 29 min possibili a orizzonte piatto. Il Mottarone, a est, ritarda il primo sole. Le frazioni più in alto, come Legro, ne hanno qualche minuto in più." },
    { d: "Dove si va in caso di emergenza sanitaria?", r: "Omegna ha un Punto di Primo Intervento con orario limitato, non un pronto soccorso. Il DEA di I livello più vicino per la provincia di Novara è all'ospedale SS. Trinità di Borgomanero, con 250 letti. I tempi in auto verso gli ospedali non li abbiamo misurati." },
    { d: "I battelli per l'isola girano tutto l'anno?", r: "Il servizio di linea di Navigazione Lago d'Orta è attivo da marzo a ottobre; a ottobre 2026 c'è un giro ogni 35–45 minuti dalle 10:15 alle 17:45. Da novembre a febbraio non risulta servizio di linea. Se d'inverno ci siano motoscafi privati per l'isola non l'abbiamo verificato." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Orta San Giulio: living on Lake Orta, prices and travel times",
  descrizione: "Orta San Giulio, 9 m above Lake Orta and 75 min from Milan: the island, the UNESCO Sacro Monte, OMI values 2025, schools, winter sun, trains and boats.",
  frase: "Orta San Giulio is the village you leave from for the island of San Giulio: 1,102 residents, Piazza Motta 9 m above the lake, 75 min from Milan and 54 min from Malpensa without traffic.",
  vivere: [
    {
      titolo: "A village with an island in front",
      testo: "The village sits on a peninsula of the east shore, and the island of San Giulio, about 400 m offshore, belongs to the municipality. Orta's name first appears in a document of 29 July 962, the \"Bull of Otto\", dated here after the siege of the island. On the island, the basilica grew from an oratory of the last decades of the 4th century; its Romanesque pulpit in Oira serpentine is dated 1110–1120. Since 1973 a community of Benedictine nuns has lived on the island, the Mater Ecclesiae abbey.\n\nOn Piazza Motta stands the Palazzotto of 1582, seat of the Comunità della Riviera, which had its own statutes from 1345 to 1753. The town hall is in Villa Bossi, on the water. Above the village, the Sacro Monte of Orta has been a UNESCO World Heritage Site since 2003, one of nine complexes in the \"Sacri Monti of Piedmont and Lombardy\" site; the Italian Ministry of Culture counts 21 chapels."
    },
    {
      titolo: "Daily life is village life",
      testo: "Orta has 1,102 residents (ISTAT, 1 January 2025; the 2026 estimate is 1,086). The municipality has a state nursery school, primary school and lower secondary school; for upper secondary, pupils travel, for example to Omegna or Gozzano. At Villa Crespi, Antonino Cannavacciuolo's restaurant holds three stars in the Michelin Guide 2026.\n\nFor healthcare the nearest point is Omegna, which has a first-aid point (Punto di Primo Intervento), not an emergency department; the nearest level-I emergency department (DEA) is in Borgomanero. On the water: the municipality's four bathing points were rated \"good\" to \"excellent\" in the 2024 season (EEA data; the assignment to the municipality is inferred from the codes)."
    },
    {
      titolo: "Know the limits first",
      testo: "Winter sun is short: on 21 December the terrain leaves Piazza Motta 6 h 39 min of direct sun out of a theoretical 8 h 29 min, from 9:10 am to 3:48 pm. Mottarone behind the village delays sunrise; this is our own calculation on the terrain, without buildings or trees. On 21 June the figure is 13 h 12 min.\n\nAt weekends and in summer the village fills with visitors; we found no public measure of visitor numbers. Guidebooks describe a pedestrian centre with paid parking on the edges, but we have not verified the restricted-traffic rules. According to ISPRA, 0.8% of the municipal area has high or very high landslide hazard, and 1.2% of residents live in areas of medium flood hazard, mostly along the shore."
    },
    {
      titolo: "The highest values on the lake",
      testo: "According to the Italian Revenue Agency (OMI, 2nd half of 2025), in zone B2 \"Lakefront, Isola S. Giulio\" standard homes are valued at €2,050–2,950/m² and villas at €2,100–3,000/m². In the central zone B1 standard homes are at €1,650–2,400/m², on the hillside zone C1 (which includes Legro) at €1,200–1,750/m². Compared with the 2nd half of 2024, the midpoint of the lakefront villa range rose by 8.5%.\n\nThese are valuations, not sale prices: ranges estimated by the Agency by zone, property type and normal condition, on gross floor area. A specific house can fall outside the range. Municipal property tax (IMU) on second homes is 0.96% in 2026."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 75 min (87 km) from Piazza del Duomo in Milan, 54 min (47 km) from Malpensa T1, 82 min from Lugano, 97 min from Turin. Orta-Miasino station is 1.2 km away as the crow flies, on the Novara–Domodossola line: on a sample Wednesday there are 8 direct trains to Novara (42–53 min) and none between 8:04 am and 1:51 pm; for Milan you change at Novara, 1 h 33 min – 1 h 54 min.\n\nThe boat landing is on Piazza Motta. Scheduled boats run from March to October; from 4 to 31 October 2026 the Orta–Island–Pella–San Filiberto–Lagna loop leaves every 35–45 minutes from 10:15 am to 5:45 pm. From November to February no scheduled service is listed."
    },
  ],
  perChi: {
    si: [
      "You want a lakeside home facing the island, in a village you can walk.",
      "You need a train to Novara 1.2 km away, and Malpensa under an hour.",
      "You want a place with documented history, from 962 to the UNESCO Sacro Monte.",
    ],
    no: [
      "You want long winter sun: here it ends at 3:48 pm on 21 December.",
      "You cannot stand summer weekend crowds.",
      "You are after the lake's lowest prices: lakefront values here reach €3,000/m².",
    ],
  },
  faq: [
    { d: "How much does a house cost in Orta San Giulio?", r: "OMI values standard homes on the lakefront and the island at €2,050–2,950/m² and villas at €2,100–3,000/m² (2nd half of 2025). On the hillside, zone C1, standard homes drop to €1,200–1,750/m². These are estimated ranges, not signed prices: a specific house needs its own valuation." },
    { d: "Can I reach Orta by train from Milan?", r: "Yes, with a change in Novara: in our sample of 7 October 2026 the trip from Orta-Miasino to Milano Centrale takes 1 h 33 min – 1 h 54 min. Orta-Miasino has 8 direct trains to Novara on a weekday, with a gap between 8:04 am and 1:51 pm. The station is 1.2 km from the village, uphill." },
    { d: "How much winter sun does Piazza Motta get?", r: "On 21 December our calculation gives 6 h 39 min of direct sun, from 9:10 am to 3:48 pm, out of 8 h 29 min possible with a flat horizon. Mottarone, to the east, delays the first sun. Higher hamlets such as Legro get a few minutes more." },
    { d: "Where do I go in a medical emergency?", r: "Omegna has a first-aid point with limited hours, not an emergency department. The nearest level-I emergency department for the province of Novara is at SS. Trinità hospital in Borgomanero, with 250 beds. We have not measured driving times to the hospitals." },
    { d: "Do boats to the island run all year?", r: "Navigazione Lago d'Orta runs its scheduled service from March to October; in October 2026 there is a loop every 35–45 minutes from 10:15 am to 5:45 pm. From November to February no scheduled service is listed. We have not verified whether private water taxis cross to the island in winter." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Orta San Giulio: Leben am Ortasee, Preise und Fahrzeiten",
  descrizione: "Orta San Giulio, 9 m über dem Ortasee, 75 Min. von Mailand: Insel, Sacro Monte (UNESCO), OMI-Werte 2025, Schulen, Wintersonne, Züge und Schiffe.",
  frase: "Orta San Giulio ist der Ort, von dem aus man zur Insel San Giulio fährt: 1.102 Einwohner, die Piazza Motta 9 m über dem See, ohne Verkehr 75 Min. von Mailand und 54 Min. von Malpensa.",
  vivere: [
    {
      titolo: "Ein Ort mit einer Insel davor",
      testo: "Der Ort liegt auf einer Halbinsel am Ostufer, und die Insel San Giulio, etwa 400 m vor dem Ufer, gehört zur Gemeinde. Der Name Orta erscheint zum ersten Mal in einer Urkunde vom 29. Juli 962, der „Bulle Ottos“, die nach der Belagerung der Insel hier ausgestellt wurde. Die Basilika auf der Insel geht auf ein Oratorium der letzten Jahrzehnte des 4. Jahrhunderts zurück; der romanische Ambo aus Serpentin von Oira ist auf 1110–1120 datiert. Seit 1973 lebt auf der Insel eine Gemeinschaft von Benediktinerinnen, die Abtei Mater Ecclesiae.\n\nAn der Piazza Motta steht der Palazzotto von 1582, Sitz der Comunità della Riviera, die von 1345 bis 1753 eigene Statuten hatte. Das Rathaus ist die Villa Bossi am See. Über dem Ort ist der Sacro Monte di Orta seit 2003 UNESCO-Welterbe, einer von neun Komplexen der Stätte „Sacri Monti im Piemont und in der Lombardei“; das italienische Kulturministerium zählt 21 Kapellen."
    },
    {
      titolo: "Der Alltag ist dörflich",
      testo: "Orta hat 1.102 Einwohner (ISTAT, 1. Januar 2025; Schätzung für 2026: 1.086). In der Gemeinde gibt es einen staatlichen Kindergarten, eine Grundschule und eine Mittelschule; für die Oberstufe fährt man weg, etwa nach Omegna oder Gozzano. In der Villa Crespi hat das Restaurant von Antonino Cannavacciuolo drei Sterne im Guide Michelin 2026.\n\nFür die Gesundheit ist Omegna am nächsten, mit einer Erste-Hilfe-Stelle (Punto di Primo Intervento), keiner Notaufnahme; die nächste Notaufnahme der Stufe I (DEA) ist in Borgomanero. Zum Wasser: Die vier Badestellen der Gemeinde wurden in der Saison 2024 mit „gut“ bis „ausgezeichnet“ bewertet (EEA-Daten; die Zuordnung zur Gemeinde ist aus den Codes abgeleitet)."
    },
    {
      titolo: "Die Grenzen kennt man vorher",
      testo: "Die Wintersonne ist kurz: Am 21. Dezember lässt das Relief der Piazza Motta 6 h 39 min direkte Sonne von theoretisch 8 h 29 min, von 9.10 bis 15.48 Uhr. Der Mottarone im Rücken verzögert den Sonnenaufgang; es ist unsere eigene Berechnung auf dem Gelände, ohne Gebäude und Bäume. Am 21. Juni sind es 13 h 12 min.\n\nAn Wochenenden und im Sommer füllt sich der Ort mit Besuchern; eine öffentliche Zählung haben wir nicht gefunden. Reiseführer beschreiben ein Fußgängerzentrum mit gebührenpflichtigen Parkplätzen am Rand, die Regeln der verkehrsberuhigten Zone haben wir aber nicht geprüft. Laut ISPRA haben 0,8 % der Gemeindefläche eine hohe oder sehr hohe Rutschungsgefahr, und 1,2 % der Einwohner leben in Gebieten mittlerer Hochwassergefahr, vor allem am Ufer."
    },
    {
      titolo: "Die höchsten Werte am See",
      testo: "Laut italienischer Steuerbehörde (OMI, 2. Halbjahr 2025) werden in der Zone B2 „Seeufer, Isola S. Giulio“ Wohnungen mit 2.050–2.950 €/m² und Villen mit 2.100–3.000 €/m² bewertet. In der zentralen Zone B1 liegen Wohnungen bei 1.650–2.400 €/m², am Hang in Zone C1 (zu der Legro gehört) bei 1.200–1.750 €/m². Gegenüber dem 2. Halbjahr 2024 stieg die Mitte der Spanne für Villen am See um 8,5 %.\n\nDas sind Richtwerte, keine Kaufpreise: von der Behörde geschätzte Spannen nach Zone, Haustyp und normalem Zustand, auf die Bruttofläche. Ein bestimmtes Haus kann außerhalb liegen. Die Grundsteuer IMU auf Zweitwohnungen beträgt 2026 0,96 %."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 75 Min. (87 km) vom Domplatz in Mailand, 54 Min. (47 km) von Malpensa T1, 82 Min. von Lugano, 97 Min. von Turin. Der Bahnhof Orta-Miasino liegt 1,2 km Luftlinie entfernt, an der Strecke Novara–Domodossola: An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara (42–53 Min.), zwischen 8.04 und 13.51 Uhr keiner; nach Mailand steigt man in Novara um, 1 h 33 min – 1 h 54 min.\n\nDie Schiffsanlegestelle ist an der Piazza Motta. Linienschiffe fahren von März bis Oktober; vom 4. bis 31. Oktober 2026 fährt die Runde Orta–Insel–Pella–San Filiberto–Lagna alle 35–45 Minuten von 10.15 bis 17.45 Uhr. Von November bis Februar ist kein Liniendienst ausgewiesen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen ein Haus am See mit Blick auf die Insel und einen Ort zum Gehen.",
      "Sie brauchen einen Zug nach Novara in 1,2 km und Malpensa in unter einer Stunde.",
      "Sie suchen einen Ort mit belegter Geschichte, von 962 bis zum Sacro Monte.",
    ],
    no: [
      "Sie wollen lange Wintersonne: Hier endet sie am 21. Dezember um 15.48 Uhr.",
      "Sie meiden volle Sommerwochenenden.",
      "Sie suchen die niedrigsten Preise am See: Am Ufer reichen die Werte bis 3.000 €/m².",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Orta San Giulio?", r: "Die OMI bewertet Wohnungen am Seeufer und auf der Insel mit 2.050–2.950 €/m² und Villen mit 2.100–3.000 €/m² (2. Halbjahr 2025). Am Hang, Zone C1, sinken Wohnungen auf 1.200–1.750 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise: Ein bestimmtes Haus braucht eine eigene Bewertung." },
    { d: "Kommt man mit dem Zug von Mailand nach Orta?", r: "Ja, mit Umstieg in Novara: In unserer Stichprobe vom 7. Oktober 2026 dauert die Fahrt von Orta-Miasino nach Milano Centrale 1 h 33 min – 1 h 54 min. Von Orta-Miasino fahren werktags 8 direkte Züge nach Novara, mit einer Lücke zwischen 8.04 und 13.51 Uhr. Der Bahnhof liegt 1,2 km oberhalb des Ortes." },
    { d: "Wie viel Wintersonne hat die Piazza Motta?", r: "Am 21. Dezember ergibt unsere Berechnung 6 h 39 min direkte Sonne, von 9.10 bis 15.48 Uhr, von 8 h 29 min bei flachem Horizont. Der Mottarone im Osten verzögert die erste Sonne. Höher gelegene Ortsteile wie Legro haben ein paar Minuten mehr." },
    { d: "Wohin im medizinischen Notfall?", r: "Omegna hat eine Erste-Hilfe-Stelle mit begrenzten Zeiten, keine Notaufnahme. Die nächste Notaufnahme der Stufe I in der Provinz Novara ist im Krankenhaus SS. Trinità in Borgomanero, mit 250 Betten. Fahrzeiten zu den Krankenhäusern haben wir nicht gemessen." },
    { d: "Fahren die Schiffe zur Insel das ganze Jahr?", r: "Navigazione Lago d'Orta fährt im Liniendienst von März bis Oktober; im Oktober 2026 alle 35–45 Minuten von 10.15 bis 17.45 Uhr. Von November bis Februar ist kein Liniendienst ausgewiesen. Ob im Winter private Boote zur Insel fahren, haben wir nicht geprüft." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Orta San Giulio: življenje ob jezeru Orta, cene in časi",
  descrizione: "Orta San Giulio, 9 m nad jezerom Orta in 75 min od Milana: otok, Sacro Monte (UNESCO), vrednosti OMI 2025, šole, zimsko sonce, vlaki in ladje.",
  frase: "Orta San Giulio je kraj, od koder se odpravite na otok San Giulio: 1.102 prebivalca, trg Piazza Motta 9 m nad jezerom, brez prometa 75 min od Milana in 54 min od letališča Malpensa.",
  vivere: [
    {
      titolo: "Kraj z otokom pred seboj",
      testo: "Kraj stoji na polotoku vzhodne obale, otok San Giulio, približno 400 m od obale, pa spada v občino. Ime Orta se prvič pojavi v listini z dne 29. julija 962, »Otonovi buli«, izdani tukaj po obleganju otoka. Bazilika na otoku izhaja iz oratorija iz zadnjih desetletij 4. stoletja; romanski ambon iz serpentina iz Oire je datiran v leta 1110–1120. Od leta 1973 na otoku živi skupnost benediktink, opatija Mater Ecclesiae.\n\nNa trgu Piazza Motta stoji Palazzotto iz leta 1582, sedež skupnosti Comunità della Riviera, ki je imela lastne statute od leta 1345 do 1753. Občina ima sedež v vili Villa Bossi ob jezeru. Nad krajem je Sacro Monte di Orta od leta 2003 na Unescovem seznamu svetovne dediščine, eden od devetih kompleksov »Svetih gora Piemonta in Lombardije«; italijansko ministrstvo za kulturo navaja 21 kapel."
    },
    {
      titolo: "Vsakdan je vaški",
      testo: "Orta ima 1.102 prebivalca (ISTAT, 1. januar 2025; ocena za leto 2026 je 1.086). V občini so državni vrtec, osnovna šola in nižja srednja šola; za višjo srednjo šolo se vozi drugam, na primer v Omegno ali Gozzano. V vili Villa Crespi ima restavracija Antonina Cannavacciuola tri zvezdice v vodniku Michelin 2026.\n\nZa zdravstvo je najbližja Omegna, ki ima točko prve pomoči (Punto di Primo Intervento), ne urgence; najbližja urgenca I. stopnje (DEA) je v Borgomaneru. Kopalna voda: štiri kopalna mesta v občini so bila v sezoni 2024 ocenjena kot »dobra« do »odlična« (podatki EEA; pripis občini je izpeljan iz kod)."
    },
    {
      titolo: "Omejitve poznate vnaprej",
      testo: "Zimsko sonce je kratko: 21. decembra relief trgu Piazza Motta pusti 6 h 39 min neposrednega sonca od teoretičnih 8 h 29 min, od 9.10 do 15.48. Mottarone za krajem zamakne sončni vzhod; to je naš izračun na terenu, brez stavb in dreves. 21. junija je sonca 13 h 12 min.\n\nOb koncih tedna in poleti se kraj napolni z obiskovalci; javnega merjenja obiska nismo našli. Turistični vodniki opisujejo zgodovinsko središče za pešce s plačljivimi parkirišči na robu, pravil cone z omejenim prometom pa nismo preverili. Po podatkih ISPRA ima 0,8 % površine občine visoko ali zelo visoko nevarnost zemeljskih plazov, 1,2 % prebivalcev pa živi na območjih srednje poplavne nevarnosti, predvsem ob obali."
    },
    {
      titolo: "Najvišje vrednosti ob jezeru",
      testo: "Po podatkih italijanske davčne uprave (OMI, 2. polletje 2025) so v coni B2 »Lungolago, Isola S. Giulio« običajna stanovanja ovrednotena na 2.050–2.950 €/m², vile na 2.100–3.000 €/m². V osrednji coni B1 so stanovanja po 1.650–2.400 €/m², v gričevnati coni C1 (ki vključuje Legro) po 1.200–1.750 €/m². Glede na 2. polletje 2024 se je sredina razpona za vile ob jezeru zvišala za 8,5 %.\n\nTo so ocenjene vrednosti, ne kupnine: razponi, ki jih uprava oceni po coni, vrsti nepremičnine in običajnem stanju, na bruto površino. Posamezna hiša je lahko zunaj razpona. Občinski davek IMU (občinski davek na nepremičnine) za druga stanovanja znaša v letu 2026 0,96 %."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 75 min (87 km) od trga Piazza del Duomo v Milanu, 54 min (47 km) od letališča Malpensa T1, 82 min od Lugana, 97 min od Torina. Železniška postaja Orta-Miasino je 1,2 km zračne črte stran, na progi Novara–Domodossola: na vzorčno sredo pelje 8 neposrednih vlakov v Novaro (42–53 min), med 8.04 in 13.51 nobeden; v Milano prestopite v Novari, 1 h 33 min – 1 h 54 min.\n\nPristan je na trgu Piazza Motta. Redne ladje vozijo od marca do oktobra; od 4. do 31. oktobra 2026 krožna linija Orta–otok–Pella–San Filiberto–Lagna odpelje vsakih 35–45 minut od 10.15 do 17.45. Od novembra do februarja redna linija ni navedena."
    },
  ],
  perChi: {
    si: [
      "Želite hišo ob jezeru s pogledom na otok in kraj, ki ga prehodite peš.",
      "Potrebujete vlak za Novaro na 1,2 km in letališče Malpensa v manj kot uri.",
      "Iščete kraj z dokumentirano zgodovino, od leta 962 do Svete gore.",
    ],
    no: [
      "Želite dolgo zimsko sonce: tu se 21. decembra konča ob 15.48.",
      "Ne prenašate gneče ob poletnih koncih tedna.",
      "Iščete najnižje cene ob jezeru: ob obali vrednosti dosežejo 3.000 €/m².",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v kraju Orta San Giulio?", r: "OMI vrednoti stanovanja ob obali in na otoku na 2.050–2.950 €/m², vile na 2.100–3.000 €/m² (2. polletje 2025). Na pobočju, v coni C1, stanovanja padejo na 1.200–1.750 €/m². To so ocenjeni razponi, ne podpisane cene: posamezna hiša potrebuje lastno cenitev." },
    { d: "Ali se iz Milana pride v Orto z vlakom?", r: "Da, s prestopom v Novari: v našem vzorcu 7. oktobra 2026 vožnja od postaje Orta-Miasino do Milano Centrale traja 1 h 33 min – 1 h 54 min. Iz Orta-Miasino ob delavnikih pelje 8 neposrednih vlakov v Novaro, z vrzeljo med 8.04 in 13.51. Postaja je 1,2 km nad krajem." },
    { d: "Koliko zimskega sonca ima trg Piazza Motta?", r: "21. decembra naš izračun da 6 h 39 min neposrednega sonca, od 9.10 do 15.48, od 8 h 29 min, ki bi jih omogočilo ravno obzorje. Mottarone na vzhodu zamakne prvo sonce. Višje ležeči zaselki, kot je Legro, imajo nekaj minut več." },
    { d: "Kam v primeru nujne zdravstvene pomoči?", r: "Omegna ima točko prve pomoči z omejenim urnikom, ne urgence. Najbližja urgenca I. stopnje v pokrajini Novara je v bolnišnici SS. Trinità v Borgomaneru, z 250 posteljami. Časov vožnje do bolnišnic nismo merili." },
    { d: "Ali ladje na otok vozijo vse leto?", r: "Navigazione Lago d'Orta vozi redno linijo od marca do oktobra; oktobra 2026 vsakih 35–45 minut od 10.15 do 17.45. Od novembra do februarja redna linija ni navedena. Ali pozimi na otok vozijo zasebni čolni, nismo preverili." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
