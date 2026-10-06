// Strumento 03 — Trova il vostro lago (il Sestante completo). Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";

export type TestiTrova = {
  titolo: string; descrizione: string; h1: string; lead: string; fonte: string;
  metodoIntro: string; criteri: string[]; formula: string; limiti: string[];
  tabTitolo: string; tabCaption: string;
  col: { luogo: string; mondo: string; milano: string; malpensa: string; quota: string; omi: string; sole: string; abitanti: string; stazione: string; battello: string };
  frazione: string; tabNota: string;
};

export const TROVA: Record<Lingua, TestiTrova> = {
  it: {
    titolo: "Trova il vostro lago: il Sestante del lago d'Orta",
    descrizione: "Sei domande, sedici luoghi del lago d'Orta, una classifica motivata da tempi OSRM, quote sul rilievo, sole d'inverno, abitanti ISTAT e quotazioni OMI. Con il link della vostra carta.",
    h1: "Trova il vostro lago.",
    lead: "Sei domande, sedici luoghi intorno al lago d'Orta. Il Sestante non indovina e non vende: mette in fila i luoghi coi dati che abbiamo misurato e vi dice perché.",
    fonte: "Tempi OSRM senza traffico, misurati il 6 ottobre 2026 · quote e sole calcolati sul rilievo · abitanti ISTAT al 1° gennaio 2025 · quotazioni OMI 2° semestre 2025.",
    metodoIntro: "Ogni risposta diventa un criterio. Per ogni criterio portiamo i sedici luoghi su una scala da 0 a 1 e misuriamo quanto ciascuno è vicino a quello che avete chiesto:",
    criteri: [
      "Tempo: minuti d'auto senza traffico dalla città di partenza (OSRM). Il più vicino vale 1. Peso 1.",
      "L'acqua o la collina: metri sopra il pelo del lago al centro del luogo, messi in fila per rango, perché sulle rive i valori si affollano vicino allo zero. Il cursore sposta il bersaglio da «l'acqua a piedi» (0) a «la collina aperta» (1). Peso 2.",
      "Budget: il livello delle quotazioni OMI delle ville nella zona più cara del comune. Le quattro fasce puntano a 0; 0,4; 0,8; 1 della scala: non premiano il luogo più economico. Peso 1,5, solo se scegliete una fascia.",
      "Sole d'inverno: minuti di sole diretto sul terreno il 21 dicembre, calcolati da noi sul rilievo. Peso 1 se «conta», 2 se «è essenziale».",
      "Ritmo: gli abitanti, in scala logaritmica. Le frazioni (Legro, Ronco, Vacciago) contano come 200 abitanti, perché l'ISTAT non le conta a parte. Peso 1, solo se scegliete.",
      "Vicino: distanza in linea d'aria dalla stazione e dall'imbarcadero, minuti d'auto da Malpensa. Peso 1 per ogni voce spuntata.",
    ],
    formula: "Il punteggio è la media pesata delle vicinanze, da 0 a 100: per ogni criterio peso × (1 − distanza dal bersaglio), sommato e diviso per la somma dei pesi. A parità vince l'ordine geografico. Stesse risposte, stessa classifica: nessun caso, nessuna preferenza commerciale.",
    limiti: [
      "Il Sestante non conosce le case: conosce i luoghi. Una casa precisa può avere più sole, più vista o più rumore del centro del suo paese.",
      "I tempi sono senza traffico; il sole non tiene conto di edifici e alberi; le quotazioni OMI sono stime per zona, non prezzi.",
    ],
    tabTitolo: "I dati di ogni luogo", tabCaption: "I numeri che il Sestante usa, luogo per luogo",
    col: { luogo: "Luogo", mondo: "Mondo", milano: "da Milano", malpensa: "da Malpensa", quota: "Sopra il lago", omi: "Ville, max OMI", sole: "Sole il 21/12", abitanti: "Abitanti", stazione: "Stazione", battello: "Imbarcadero" },
    frazione: "frazione",
    tabNota: "Tempi OSRM senza traffico (6 ottobre 2026). Quota sopra il pelo del lago (290 m). Quotazione OMI massima delle ville nella zona più cara del comune, €/m². Sole diretto sul terreno il 21 dicembre. Abitanti ISTAT al 1° gennaio 2025, del comune. Stazione e imbarcadero in linea d'aria dal centro.",
  },
  en: {
    titolo: "Find your lake: the Lake Orta Sestante",
    descrizione: "Six questions, sixteen places on Lake Orta, a ranking explained by OSRM times, terrain heights, winter sun, ISTAT population and OMI quotations. With a link to your map.",
    h1: "Find your lake.",
    lead: "Six questions, sixteen places around Lake Orta. The Sestante does not guess and does not sell: it ranks the places with the data we measured and tells you why.",
    fonte: "OSRM times without traffic, measured on 6 October 2026 · heights and sun calculated on the terrain · ISTAT population on 1 January 2025 · OMI quotations, second half of 2025.",
    metodoIntro: "Each answer becomes a criterion. For each criterion we put the sixteen places on a scale from 0 to 1 and measure how close each one is to what you asked for:",
    criteri: [
      "Time: driving minutes without traffic from your starting city (OSRM). The closest scores 1. Weight 1.",
      "Water or hillside: metres above the lake surface at the centre of the place, ranked, because on the shores the values crowd near zero. The slider moves the target from \"water on foot\" (0) to \"open hillside\" (1). Weight 2.",
      "Budget: the level of OMI villa quotations in the municipality's most expensive zone. The four bands aim at 0, 0.4, 0.8 and 1 on the scale: they do not reward the cheapest place. Weight 1.5, only if you choose a band.",
      "Winter sun: minutes of direct sun on the ground on 21 December, calculated by us on the terrain. Weight 1 if it \"matters\", 2 if \"essential\".",
      "Pace: population, on a logarithmic scale. The hamlets (Legro, Ronco, Vacciago) count as 200 residents, because ISTAT does not count them separately. Weight 1, only if you choose.",
      "Nearby: straight-line distance to the station and the pier, driving minutes from Malpensa. Weight 1 for each item ticked.",
    ],
    formula: "The score is the weighted average of closeness, from 0 to 100: for each criterion weight × (1 − distance from the target), summed and divided by the sum of weights. Ties go to geographic order. Same answers, same ranking: no randomness, no commercial preference.",
    limiti: [
      "The Sestante does not know homes: it knows places. A specific home can have more sun, more view or more noise than the centre of its village.",
      "Times are without traffic; the sun ignores buildings and trees; OMI quotations are estimates per zone, not prices.",
    ],
    tabTitolo: "The data for each place", tabCaption: "The numbers the Sestante uses, place by place",
    col: { luogo: "Place", mondo: "World", milano: "from Milan", malpensa: "from Malpensa", quota: "Above the lake", omi: "Villas, OMI max", sole: "Sun on 21/12", abitanti: "Population", stazione: "Station", battello: "Pier" },
    frazione: "hamlet",
    tabNota: "OSRM times without traffic (6 October 2026). Height above the lake surface (290 m). Highest OMI villa quotation in the municipality's most expensive zone, €/m². Direct sun on the ground on 21 December. ISTAT population on 1 January 2025, of the municipality. Station and pier as the crow flies from the centre.",
  },
  de: {
    titolo: "Ihren See finden: der Sestante des Ortasees",
    descrizione: "Sechs Fragen, sechzehn Orte am Ortasee, eine Rangliste begründet mit OSRM-Fahrzeiten, Geländehöhen, Wintersonne, ISTAT-Einwohnern und OMI-Richtwerten. Mit dem Link zu Ihrer Karte.",
    h1: "Ihren See finden.",
    lead: "Sechs Fragen, sechzehn Orte rund um den Ortasee. Der Sestante rät nicht und verkauft nicht: Er ordnet die Orte nach den Daten, die wir gemessen haben, und sagt Ihnen, warum.",
    fonte: "OSRM-Fahrzeiten ohne Verkehr, gemessen am 6. Oktober 2026 · Höhen und Sonne aus dem Gelände berechnet · ISTAT-Einwohner zum 1. Januar 2025 · OMI-Richtwerte 2. Halbjahr 2025.",
    metodoIntro: "Jede Antwort wird zu einem Kriterium. Für jedes Kriterium bringen wir die sechzehn Orte auf eine Skala von 0 bis 1 und messen, wie nah jeder an dem liegt, was Sie gewählt haben:",
    criteri: [
      "Zeit: Fahrminuten ohne Verkehr ab Ihrer Startstadt (OSRM). Der nächste Ort erhält 1. Gewicht 1.",
      "Wasser oder Hang: Meter über dem Seespiegel im Ortszentrum, nach Rang geordnet, weil sich die Werte an den Ufern nahe null drängen. Der Regler verschiebt das Ziel von „Wasser zu Fuß“ (0) bis „offener Hang“ (1). Gewicht 2.",
      "Budget: das Niveau der OMI-Richtwerte für Villen in der teuersten Zone der Gemeinde. Die vier Spannen zielen auf 0; 0,4; 0,8; 1 der Skala: Der billigste Ort wird nicht bevorzugt. Gewicht 1,5, nur wenn Sie eine Spanne wählen.",
      "Wintersonne: Minuten direkter Sonne auf dem Boden am 21. Dezember, von uns aus dem Gelände berechnet. Gewicht 1 bei „wichtig“, 2 bei „unverzichtbar“.",
      "Rhythmus: die Einwohnerzahl, logarithmisch. Die Ortsteile (Legro, Ronco, Vacciago) zählen als 200 Einwohner, weil die ISTAT sie nicht getrennt zählt. Gewicht 1, nur wenn Sie wählen.",
      "In der Nähe: Luftlinie zum Bahnhof und zur Anlegestelle, Fahrminuten ab Malpensa. Gewicht 1 je angekreuztem Punkt.",
    ],
    formula: "Die Punktzahl ist der gewichtete Durchschnitt der Nähe, von 0 bis 100: je Kriterium Gewicht × (1 − Abstand vom Ziel), summiert und durch die Summe der Gewichte geteilt. Bei Gleichstand entscheidet die geografische Reihenfolge. Gleiche Antworten, gleiche Rangliste: kein Zufall, keine kommerzielle Bevorzugung.",
    limiti: [
      "Der Sestante kennt keine Häuser, sondern Orte. Ein bestimmtes Haus kann mehr Sonne, mehr Aussicht oder mehr Lärm haben als das Zentrum seines Dorfes.",
      "Die Zeiten gelten ohne Verkehr; die Sonne berücksichtigt weder Gebäude noch Bäume; OMI-Richtwerte sind Schätzungen je Zone, keine Preise.",
    ],
    tabTitolo: "Die Daten jedes Ortes", tabCaption: "Die Zahlen, die der Sestante verwendet, Ort für Ort",
    col: { luogo: "Ort", mondo: "Welt", milano: "ab Mailand", malpensa: "ab Malpensa", quota: "Über dem See", omi: "Villen, OMI max", sole: "Sonne am 21.12.", abitanti: "Einwohner", stazione: "Bahnhof", battello: "Anlegestelle" },
    frazione: "Ortsteil",
    tabNota: "OSRM-Fahrzeiten ohne Verkehr (6. Oktober 2026). Höhe über dem Seespiegel (290 m). Höchster OMI-Richtwert für Villen in der teuersten Zone der Gemeinde, €/m². Direkte Sonne auf dem Boden am 21. Dezember. ISTAT-Einwohner der Gemeinde zum 1. Januar 2025. Bahnhof und Anlegestelle in Luftlinie vom Zentrum.",
  },
  sl: {
    titolo: "Najdite svoje jezero: Sestante jezera Orta",
    descrizione: "Šest vprašanj, šestnajst krajev ob jezeru Orta, razvrstitev, utemeljena s časi OSRM, višinami na reliefu, zimskim soncem, prebivalci ISTAT in ocenami OMI. S povezavo do vašega zemljevida.",
    h1: "Najdite svoje jezero.",
    lead: "Šest vprašanj, šestnajst krajev okoli jezera Orta. Sestante ne ugiba in ne prodaja: kraje razvrsti s podatki, ki smo jih izmerili, in vam pove, zakaj.",
    fonte: "Časi OSRM brez prometa, izmerjeni 6. oktobra 2026 · višine in sonce, izračunani na reliefu · prebivalci ISTAT na dan 1. januarja 2025 · ocene OMI za 2. polletje 2025.",
    metodoIntro: "Vsak odgovor postane merilo. Za vsako merilo šestnajst krajev postavimo na lestvico od 0 do 1 in izmerimo, kako blizu je vsak temu, kar ste izbrali:",
    criteri: [
      "Čas: minute vožnje brez prometa iz izhodiščnega mesta (OSRM). Najbližji dobi 1. Utež 1.",
      "Voda ali pobočje: metri nad gladino jezera v središču kraja, razvrščeni po rangu, ker se vrednosti ob obalah gnetejo blizu nič. Drsnik premakne cilj od »voda peš« (0) do »odprto pobočje« (1). Utež 2.",
      "Proračun: raven ocen OMI za vile v najdražji coni občine. Štirje razredi merijo na 0; 0,4; 0,8 in 1 lestvice: najcenejši kraj ni nagrajen. Utež 1,5, le če izberete razred.",
      "Zimsko sonce: minute neposrednega sonca na tleh 21. decembra, ki smo jih izračunali na reliefu. Utež 1, če »je pomembno«, 2, če »je nujno«.",
      "Ritem: število prebivalcev, na logaritemski lestvici. Zaselki (Legro, Ronco, Vacciago) štejejo kot 200 prebivalcev, ker jih ISTAT ne šteje posebej. Utež 1, le če izberete.",
      "V bližini: zračna razdalja do železniške postaje in pristana, minute vožnje od Malpense. Utež 1 za vsako označeno postavko.",
    ],
    formula: "Ocena je tehtano povprečje bližine, od 0 do 100: za vsako merilo utež × (1 − razdalja od cilja), sešteto in deljeno z vsoto uteži. Pri izenačenju odloča geografski vrstni red. Isti odgovori, ista razvrstitev: brez naključja, brez poslovne prednosti.",
    limiti: [
      "Sestante ne pozna hiš, pozna kraje. Posamezna hiša ima lahko več sonca, več razgleda ali več hrupa kot središče svoje vasi.",
      "Časi so brez prometa; sonce ne upošteva stavb in dreves; ocene OMI so ocene po conah, ne cene.",
    ],
    tabTitolo: "Podatki za vsak kraj", tabCaption: "Številke, ki jih uporablja Sestante, kraj za krajem",
    col: { luogo: "Kraj", mondo: "Svet", milano: "iz Milana", malpensa: "iz Malpense", quota: "Nad jezerom", omi: "Vile, OMI maks.", sole: "Sonce 21. 12.", abitanti: "Prebivalci", stazione: "Postaja", battello: "Pristan" },
    frazione: "zaselek",
    tabNota: "Časi OSRM brez prometa (6. oktobra 2026). Višina nad gladino jezera (290 m). Najvišja ocena OMI za vile v najdražji coni občine, €/m². Neposredno sonce na tleh 21. decembra. Prebivalci občine po ISTAT na dan 1. januarja 2025. Postaja in pristan zračne razdalje od središča.",
  },
};
