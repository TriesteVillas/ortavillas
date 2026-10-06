// Strumento 05 — Quanto vale casa tua. Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";

export type TestiValore = {
  titolo: string; descrizione: string; h1: string; lead: string; privacy: string;
  stato: string; stati: { normale: string; ottimo: string; ristrutturare: string }; statiAiuto: { normale: string; ottimo: string; ristrutturare: string };
  risultato: string; per: (m2: string, tipo: string, zona: string, comune: string) => string; vuoto: string;
  alM2: (min: string, max: string) => string; lettura: string;
  moduloOcchiello: string; moduloTitolo: string; moduloLead: string; moduloStima: (s: string) => string; moduloSenza: string;
  metodo: string[];
  tabTitolo: string; tabCaption: string; colComune: string; colZona: string; colTipo: (t: string) => string; tabNota: string;
};

export const VALORE: Record<Lingua, TestiValore> = {
  it: {
    titolo: "Quanto vale casa tua sul lago d'Orta: la forchetta OMI",
    descrizione: "Comune, zona OMI, tipologia e metri quadrati: la forchetta delle quotazioni dell'Agenzia delle Entrate per la vostra casa sul lago d'Orta, dichiaratamente indicativa. Poi, se volete, una valutazione fatta da una persona.",
    h1: "Quanto vale casa tua, secondo le quotazioni.",
    lead: "Scegliete comune, zona e tipologia, scrivete i metri quadrati: vi diamo la forchetta delle quotazioni OMI moltiplicata per la vostra superficie. È un punto di partenza, non una stima: la casa, per valutarla, bisogna vederla.",
    privacy: "Il calcolo avviene nel vostro browser: comune, zona e metri quadrati non lasciano questa pagina. Partono solo se scegliete di mandarci il modulo qui sotto, insieme alla forchetta calcolata.",
    stato: "Stato della casa", stati: { normale: "abitabile, com'è", ottimo: "rifatta da poco", ristrutturare: "da rifare" },
    statiAiuto: {
      normale: "Lo stato «normale» è quello che l'OMI quota in questi comuni.",
      ottimo: "L'OMI qui non quota lo stato «ottimo»: una casa rifatta tende alla parte alta della forchetta o sopra. Di quanto, i dati pubblici non lo dicono.",
      ristrutturare: "L'OMI qui non quota lo stato «scadente»: una casa da rifare tende alla parte bassa della forchetta o sotto. Di quanto, i dati pubblici non lo dicono.",
    },
    risultato: "La forchetta delle quotazioni",
    per: (m, t, z, c) => `per ${m} di ${t}, zona ${z}, ${c}`, vuoto: "Scrivete la superficie commerciale per vedere la forchetta.",
    alM2: (a, b) => `quotazione OMI da ${a} a ${b}, 2° semestre 2025, stato normale`,
    lettura: "La forchetta è il minimo e il massimo della quotazione OMI moltiplicati per la vostra superficie. Dice come l'Agenzia delle Entrate stima il mercato di quella zona per quella tipologia, non quanto vale la vostra casa: vista, giardino, piano, stato e conformità fanno il resto.",
    moduloOcchiello: "Una valutazione fatta da una persona",
    moduloTitolo: "Volete sapere quanto vale davvero?",
    moduloLead: "Mandateci la casa: una persona di TriesteVillas la guarda, la confronta con il mercato del lago e vi risponde. È gratuito e senza impegno. In Italia siamo un'agenzia iscritta: se poi vorrete vendere, possiamo farlo noi.",
    moduloStima: (s) => `Con il modulo ci arriva anche la forchetta calcolata qui: ${s}.`,
    moduloSenza: "Se scrivete i metri quadrati, con il modulo ci arriva anche la forchetta calcolata qui.",
    metodo: [
      "Le quotazioni OMI sono intervalli in euro al metro quadrato che l'Agenzia delle Entrate stima ogni semestre per zona omogenea, tipologia e stato conservativo. Usiamo il 2° semestre 2025, l'ultimo pubblicato al 6 ottobre 2026.",
      "La forchetta è minimo × metri quadrati e massimo × metri quadrati, arrotondati al migliaio. Le quotazioni sono su superficie lorda (commerciale): se scrivete la superficie calpestabile, la forchetta esce troppo bassa.",
      "In questi comuni l'OMI quota solo lo stato «normale», il prevalente di zona: per una casa rifatta o da rifare non spostiamo i numeri, perché nessuna fonte pubblica dice di quanto. Lo diciamo accanto al risultato.",
      "L'Agenzia stessa avverte che le quotazioni non sostituiscono la stima puntuale. Non sono prezzi di compravendite: in Italia gli atti si consultano uno per uno, con autenticazione, e non abbiamo mediane di vendite vere da offrire.",
    ],
    tabTitolo: "Le quotazioni, zona per zona", tabCaption: "Quotazioni OMI 2° semestre 2025, stato normale, €/m² di superficie lorda",
    colComune: "Comune", colZona: "Zona", colTipo: (t) => t, tabNota: "Agenzia delle Entrate – OMI, estratte il 6 ottobre 2026, licenza CC BY 4.0. «—» = tipologia non quotata nella zona. Le zone agricole senza quotazioni abitative non sono in tabella.",
  },
  en: {
    titolo: "What is my home on Lake Orta worth: the OMI range",
    descrizione: "Municipality, OMI zone, type and square metres: the range of the Italian Revenue Agency's quotations for your home on Lake Orta, openly indicative. Then, if you wish, a valuation made by a person.",
    h1: "What your home is worth, according to the quotations.",
    lead: "Choose municipality, zone and type, enter the square metres: we give you the OMI quotation range multiplied by your floor area. It is a starting point, not a valuation: to value a home, someone has to see it.",
    privacy: "The calculation happens in your browser: municipality, zone and square metres do not leave this page. They are sent only if you choose to send us the form below, together with the calculated range.",
    stato: "Condition of the home", stati: { normale: "habitable, as it is", ottimo: "recently renovated", ristrutturare: "needs renovating" },
    statiAiuto: {
      normale: "\"Normal\" is the condition OMI quotes in these municipalities.",
      ottimo: "OMI does not quote \"excellent\" condition here: a renovated home tends towards the top of the range or above. By how much, public data does not say.",
      ristrutturare: "OMI does not quote \"poor\" condition here: a home to renovate tends towards the bottom of the range or below. By how much, public data does not say.",
    },
    risultato: "The quotation range",
    per: (m, t, z, c) => `for ${m} of ${t}, zone ${z}, ${c}`, vuoto: "Enter the gross floor area to see the range.",
    alM2: (a, b) => `OMI quotation from ${a} to ${b}, second half of 2025, normal condition`,
    lettura: "The range is the minimum and maximum OMI quotation multiplied by your floor area. It says how the Revenue Agency estimates the market of that zone for that type, not what your home is worth: view, garden, floor, condition and compliance do the rest.",
    moduloOcchiello: "A valuation made by a person",
    moduloTitolo: "Want to know what it is really worth?",
    moduloLead: "Send us the home: a person at TriesteVillas looks at it, compares it with the lake market and replies. It is free and without obligation. In Italy we are a registered agency: if you then want to sell, we can do it.",
    moduloStima: (s) => `The form also sends us the range calculated here: ${s}.`,
    moduloSenza: "If you enter the square metres, the form also sends us the range calculated here.",
    metodo: [
      "OMI quotations are ranges in euros per square metre that the Revenue Agency estimates every six months per homogeneous zone, type and condition. We use the second half of 2025, the latest published on 6 October 2026.",
      "The range is minimum × square metres and maximum × square metres, rounded to the thousand. Quotations are on gross (commercial) floor area: if you enter the net walkable area, the range comes out too low.",
      "In these municipalities OMI quotes only \"normal\" condition, the prevailing one in the zone: for a renovated home or one to renovate we do not move the numbers, because no public source says by how much. We say so next to the result.",
      "The Agency itself warns that quotations do not replace a specific valuation. They are not sale prices: in Italy deeds are consulted one by one, with authentication, and we have no medians of actual sales to offer.",
    ],
    tabTitolo: "The quotations, zone by zone", tabCaption: "OMI quotations, second half of 2025, normal condition, €/m² of gross area",
    colComune: "Municipality", colZona: "Zone", colTipo: (t) => t, tabNota: "Italian Revenue Agency – OMI, extracted on 6 October 2026, licence CC BY 4.0. \"—\" = type not quoted in the zone. Farmland zones without residential quotations are not listed.",
  },
  de: {
    titolo: "Was ist mein Haus am Ortasee wert: die OMI-Spanne",
    descrizione: "Gemeinde, OMI-Zone, Typ und Quadratmeter: die Spanne der Richtwerte der italienischen Steuerbehörde für Ihr Haus am Ortasee, ausdrücklich unverbindlich. Danach, wenn Sie möchten, eine Bewertung durch einen Menschen.",
    h1: "Was Ihr Haus wert ist, laut den Richtwerten.",
    lead: "Wählen Sie Gemeinde, Zone und Typ, tragen Sie die Quadratmeter ein: Sie erhalten die OMI-Spanne, multipliziert mit Ihrer Fläche. Ein Ausgangspunkt, kein Gutachten: Um ein Haus zu bewerten, muss man es sehen.",
    privacy: "Die Berechnung läuft in Ihrem Browser: Gemeinde, Zone und Quadratmeter verlassen diese Seite nicht. Sie werden nur gesendet, wenn Sie uns das Formular unten schicken, zusammen mit der berechneten Spanne.",
    stato: "Zustand des Hauses", stati: { normale: "bewohnbar, wie es ist", ottimo: "kürzlich renoviert", ristrutturare: "renovierungsbedürftig" },
    statiAiuto: {
      normale: "„Normal“ ist der Zustand, den die OMI in diesen Gemeinden bewertet.",
      ottimo: "Den Zustand „sehr gut“ bewertet die OMI hier nicht: Ein renoviertes Haus liegt eher im oberen Teil der Spanne oder darüber. Um wie viel, sagen die öffentlichen Daten nicht.",
      ristrutturare: "Den Zustand „schlecht“ bewertet die OMI hier nicht: Ein renovierungsbedürftiges Haus liegt eher im unteren Teil der Spanne oder darunter. Um wie viel, sagen die öffentlichen Daten nicht.",
    },
    risultato: "Die Spanne der Richtwerte",
    per: (m, t, z, c) => `für ${m} ${t}, Zone ${z}, ${c}`, vuoto: "Tragen Sie die Bruttofläche ein, um die Spanne zu sehen.",
    alM2: (a, b) => `OMI-Richtwert von ${a} bis ${b}, 2. Halbjahr 2025, normaler Zustand`,
    lettura: "Die Spanne ist der minimale und maximale OMI-Richtwert mal Ihre Fläche. Sie zeigt, wie die Steuerbehörde den Markt dieser Zone für diesen Typ einschätzt, nicht was Ihr Haus wert ist: Aussicht, Garten, Stockwerk, Zustand und Konformität machen den Rest.",
    moduloOcchiello: "Eine Bewertung durch einen Menschen",
    moduloTitolo: "Möchten Sie wissen, was es wirklich wert ist?",
    moduloLead: "Schicken Sie uns das Haus: Ein Mensch bei TriesteVillas sieht es sich an, vergleicht es mit dem Markt am See und antwortet Ihnen. Kostenlos und unverbindlich. In Italien sind wir eine eingetragene Agentur: Wenn Sie dann verkaufen möchten, können wir das übernehmen.",
    moduloStima: (s) => `Mit dem Formular erhalten wir auch die hier berechnete Spanne: ${s}.`,
    moduloSenza: "Wenn Sie die Quadratmeter eintragen, erhalten wir mit dem Formular auch die hier berechnete Spanne.",
    metodo: [
      "OMI-Richtwerte sind Spannen in Euro pro Quadratmeter, die die Agenzia delle Entrate halbjährlich je homogener Zone, Typ und Zustand schätzt. Wir verwenden das 2. Halbjahr 2025, das am 6. Oktober 2026 zuletzt veröffentlichte.",
      "Die Spanne ist Minimum × Quadratmeter und Maximum × Quadratmeter, auf Tausend gerundet. Die Richtwerte gelten für die Bruttofläche: Wer die Wohnfläche einträgt, erhält eine zu niedrige Spanne.",
      "In diesen Gemeinden bewertet die OMI nur den „normalen“ Zustand, den in der Zone vorherrschenden: Für ein renoviertes oder renovierungsbedürftiges Haus verschieben wir die Zahlen nicht, weil keine öffentliche Quelle sagt, um wie viel. Wir sagen es neben dem Ergebnis.",
      "Die Behörde selbst weist darauf hin, dass die Richtwerte kein Einzelgutachten ersetzen. Es sind keine Verkaufspreise: In Italien werden Urkunden einzeln und mit Anmeldung eingesehen, und wir haben keine Mediane echter Verkäufe anzubieten.",
    ],
    tabTitolo: "Die Richtwerte, Zone für Zone", tabCaption: "OMI-Richtwerte 2. Halbjahr 2025, normaler Zustand, €/m² Bruttofläche",
    colComune: "Gemeinde", colZona: "Zone", colTipo: (t) => t, tabNota: "Agenzia delle Entrate – OMI, abgerufen am 6. Oktober 2026, Lizenz CC BY 4.0. „—“ = Typ in der Zone nicht bewertet. Landwirtschaftliche Zonen ohne Wohn-Richtwerte fehlen in der Tabelle.",
  },
  sl: {
    titolo: "Koliko je vredna vaša hiša ob jezeru Orta: razpon OMI",
    descrizione: "Občina, cona OMI, vrsta in kvadratni metri: razpon ocen italijanske davčne uprave za vašo hišo ob jezeru Orta, izrecno okviren. Nato, če želite, cenitev, ki jo opravi človek.",
    h1: "Koliko je vredna vaša hiša, po ocenah.",
    lead: "Izberite občino, cono in vrsto, vpišite kvadratne metre: dobite razpon ocen OMI, pomnožen z vašo površino. To je izhodišče, ne cenitev: hišo je treba za cenitev videti.",
    privacy: "Izračun poteka v vašem brskalniku: občina, cona in kvadratni metri ne zapustijo te strani. Pošljejo se le, če nam pošljete spodnji obrazec, skupaj z izračunanim razponom.",
    stato: "Stanje hiše", stati: { normale: "vseljiva, kakršna je", ottimo: "nedavno prenovljena", ristrutturare: "potrebna prenove" },
    statiAiuto: {
      normale: "»Normalno« stanje je tisto, ki ga OMI v teh občinah ocenjuje.",
      ottimo: "Stanja »odlično« OMI tu ne ocenjuje: prenovljena hiša se nagiba k zgornjemu delu razpona ali nad njim. Za koliko, javni podatki ne povedo.",
      ristrutturare: "Stanja »slabo« OMI tu ne ocenjuje: hiša, potrebna prenove, se nagiba k spodnjemu delu razpona ali pod njim. Za koliko, javni podatki ne povedo.",
    },
    risultato: "Razpon ocen",
    per: (m, t, z, c) => `za ${m}, ${t}, cona ${z}, ${c}`, vuoto: "Vpišite bruto površino, da vidite razpon.",
    alM2: (a, b) => `ocena OMI od ${a} do ${b}, 2. polletje 2025, normalno stanje`,
    lettura: "Razpon je najnižja in najvišja ocena OMI, pomnožena z vašo površino. Pove, kako davčna uprava ocenjuje trg te cone za to vrsto, ne koliko je vredna vaša hiša: razgled, vrt, nadstropje, stanje in skladnost naredijo ostalo.",
    moduloOcchiello: "Cenitev, ki jo opravi človek",
    moduloTitolo: "Želite vedeti, koliko je zares vredna?",
    moduloLead: "Pošljite nam hišo: človek pri TriesteVillas si jo ogleda, jo primerja s trgom ob jezeru in vam odgovori. Brezplačno in brez obveznosti. V Italiji smo registrirana nepremičninska agencija: če boste nato želeli prodati, lahko to storimo mi.",
    moduloStima: (s) => `Z obrazcem prejmemo tudi tu izračunani razpon: ${s}.`,
    moduloSenza: "Če vpišete kvadratne metre, z obrazcem prejmemo tudi tu izračunani razpon.",
    metodo: [
      "Ocene OMI so razponi v evrih na kvadratni meter, ki jih davčna uprava vsako polletje oceni za homogeno cono, vrsto in stanje. Uporabljamo 2. polletje 2025, zadnje objavljeno na dan 6. oktobra 2026.",
      "Razpon je minimum × kvadratni metri in maksimum × kvadratni metri, zaokroženo na tisoč. Ocene veljajo za bruto (komercialno) površino: če vpišete neto tlorisno površino, je razpon prenizek.",
      "V teh občinah OMI ocenjuje le »normalno« stanje, ki v coni prevladuje: za prenovljeno hišo ali hišo, potrebno prenove, številk ne premikamo, ker noben javni vir ne pove, za koliko. To zapišemo ob rezultatu.",
      "Davčna uprava sama opozarja, da ocene ne nadomeščajo posamične cenitve. To niso prodajne cene: v Italiji se pogodbe pregledujejo posamično, s prijavo, zato nimamo median dejanskih prodaj.",
    ],
    tabTitolo: "Ocene po conah", tabCaption: "Ocene OMI za 2. polletje 2025, normalno stanje, €/m² bruto površine",
    colComune: "Občina", colZona: "Cona", colTipo: (t) => t, tabNota: "Agenzia delle Entrate – OMI, pridobljeno 6. oktobra 2026, licenca CC BY 4.0. »—« = vrsta v coni ni ocenjena. Kmetijske cone brez ocen za stanovanja niso v tabeli.",
  },
};
