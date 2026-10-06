// Strumento 02 — Cosa compra il vostro budget. Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";
import type { Tipologia } from "@/lib/strumenti/quotazioni";

export type TestiBudget = {
  titolo: string; descrizione: string; h1: string; lead: string;
  budget: string; scala: string; esempi: string; cosa: string; tipologie: Record<Tipologia, string>; aiuti: Record<Tipologia, string>;
  circa: (m2: string) => string; forchetta: (a: string, b: string) => string;
  quotazioni: (min: string, max: string, zone: number, cara: string) => string; nonQuotata: string;
  confronto: (budget: string, volte: string, grande: string, piccolo: string) => string;
  fonteRiga: string; avviso: string;
  metodo: string[];
  tabTitolo: string; tabCaption: string; colComune: string; colQuot: (t: string) => string; colCon: (b: string) => string; tabNota: string;
};

export const BUDGET: Record<Lingua, TestiBudget> = {
  it: {
    titolo: "Cosa compra il vostro budget sul lago d'Orta",
    descrizione: "Quanti metri quadrati raggiunge il vostro budget a Orta San Giulio, Pella, Omegna e negli altri comuni del lago, alle quotazioni OMI dell'Agenzia delle Entrate. Quotazioni, non prezzi.",
    h1: "Quanto spazio compra il vostro budget.",
    lead: "Dividiamo il budget per le quotazioni OMI di ogni comune del lago: il risultato è una forchetta di metri quadrati, dal più caro al più economico. Sono quotazioni stimate dall'Agenzia delle Entrate, non prezzi di vendite vere.",
    budget: "Il vostro budget", scala: "Budget, su scala logaritmica", esempi: "Budget d'esempio", cosa: "Che cosa cercate",
    tipologie: { ville: "una villa", civili: "una casa o un appartamento", economiche: "una casa economica" },
    aiuti: {
      ville: "«Ville e villini» nella classificazione OMI. La quotazione comprende di norma la pertinenza scoperta: il risultato è un ordine di grandezza.",
      civili: "«Abitazioni civili» nella classificazione OMI: appartamenti e case di livello medio.",
      economiche: "«Abitazioni di tipo economico»: finiture e impianti modesti. In alcuni comuni l'OMI non la quota.",
    },
    circa: (m) => `circa ${m}`,
    forchetta: (a, b) => `da ${a} a ${b} fra la quotazione più alta e la più bassa`,
    quotazioni: (min, max, z, cara) => `quotazioni da ${min} a ${max} in ${z === 1 ? "1 zona" : `${z} zone`} · la più cara è la ${cara}`,
    nonQuotata: "l'OMI non quota questa tipologia nel comune",
    confronto: (b, v, g, p) => `Con ${b}: circa ${v} volte lo spazio a ${g} rispetto a ${p}, al centro delle quotazioni.`,
    fonteRiga: "Agenzia delle Entrate – OMI, quotazioni del 2° semestre 2025, stato conservativo normale, superficie lorda · estratte il 6 ottobre 2026.",
    avviso: "Quotazioni, non prezzi: l'OMI stima un intervallo per zona e tipologia. Una casa precisa può stare fuori.",
    metodo: [
      "Per ogni comune prendiamo, per la tipologia scelta, tutte le zone OMI che la quotano: il minimo più basso e il massimo più alto. I metri quadrati sono il budget diviso per il massimo (il minimo di spazio), per il centro dell'intervallo e per il minimo (il massimo di spazio), arrotondati a 5.",
      "Le quotazioni OMI sono intervalli in euro al metro quadrato stimati dall'Agenzia delle Entrate per zona omogenea, tipologia e stato conservativo, anche da atti e offerte. Non sono medie di compravendite e non sostituiscono una stima. Qui sono tutte su superficie lorda (commerciale) e stato «normale», il prevalente di zona: ottimo e scadente non sono quotati in questi comuni.",
      "In Italia i prezzi dei singoli atti non sono scaricabili in blocco: il servizio dell'Agenzia richiede l'autenticazione e mostra un atto alla volta. Per questo non diamo mediane di vendite vere, come facciamo dove il registro è pubblico.",
      "Quando una tipologia manca in un comune, l'OMI non la quota perché il mercato non è significativo: non è un prezzo zero, e la riga lo dice.",
    ],
    tabTitolo: "Le quotazioni, comune per comune", tabCaption: "Quotazioni OMI 2° semestre 2025 (€/m², minimo–massimo fra le zone) e metri quadrati al centro dell'intervallo",
    colComune: "Comune", colQuot: (t) => `${t} €/m²`, colCon: (b) => `m² ville con ${b}`,
    tabNota: "Agenzia delle Entrate – OMI, estratte il 6 ottobre 2026, licenza CC BY 4.0. Stato conservativo normale, superficie lorda. «—» = tipologia non quotata.",
  },
  en: {
    titolo: "What your budget buys on Lake Orta",
    descrizione: "How many square metres your budget reaches in Orta San Giulio, Pella, Omegna and the other lake municipalities, at the OMI quotations of the Italian Revenue Agency. Quotations, not prices.",
    h1: "How much space your budget buys.",
    lead: "We divide the budget by the OMI quotations of each lake municipality: the result is a range of square metres, from the most to the least expensive. These are quotations estimated by the Italian Revenue Agency, not prices of actual sales.",
    budget: "Your budget", scala: "Budget, on a logarithmic scale", esempi: "Example budgets", cosa: "What you are looking for",
    tipologie: { ville: "a villa", civili: "a house or a flat", economiche: "a basic house" },
    aiuti: {
      ville: "\"Ville e villini\" in the OMI classification. The quotation normally includes the open grounds: the result is an order of magnitude.",
      civili: "\"Abitazioni civili\" in the OMI classification: mid-range flats and houses.",
      economiche: "\"Abitazioni di tipo economico\": modest finishes and systems. In some municipalities OMI does not quote it.",
    },
    circa: (m) => `about ${m}`,
    forchetta: (a, b) => `from ${a} to ${b} between the highest and lowest quotation`,
    quotazioni: (min, max, z, cara) => `quotations from ${min} to ${max} in ${z === 1 ? "1 zone" : `${z} zones`} · the most expensive is ${cara}`,
    nonQuotata: "OMI does not quote this type in the municipality",
    confronto: (b, v, g, p) => `With ${b}: about ${v} times the space in ${g} compared with ${p}, at the middle of the quotations.`,
    fonteRiga: "Italian Revenue Agency – OMI, quotations for the second half of 2025, normal condition, gross floor area · extracted on 6 October 2026.",
    avviso: "Quotations, not prices: OMI estimates a range per zone and type. A specific home can fall outside it.",
    metodo: [
      "For each municipality we take, for the chosen type, every OMI zone that quotes it: the lowest minimum and the highest maximum. Square metres are the budget divided by the maximum (the least space), by the middle of the range and by the minimum (the most space), rounded to 5.",
      "OMI quotations are ranges in euros per square metre estimated by the Revenue Agency per homogeneous zone, type and condition, partly from deeds and offers. They are not averages of sales and do not replace a valuation. Here they are all on gross (commercial) floor area and \"normal\" condition, the prevailing one in the zone: excellent and poor are not quoted in these municipalities.",
      "In Italy the prices of individual deeds cannot be downloaded in bulk: the Agency's service requires authentication and shows one deed at a time. That is why we do not give medians of actual sales, as we do where the register is public.",
      "When a type is missing in a municipality, OMI does not quote it because the market is not significant: it is not a zero price, and the row says so.",
    ],
    tabTitolo: "The quotations, municipality by municipality", tabCaption: "OMI quotations, second half of 2025 (€/m², minimum–maximum across zones) and square metres at the middle of the range",
    colComune: "Municipality", colQuot: (t) => `${t} €/m²`, colCon: (b) => `m² of villa with ${b}`,
    tabNota: "Italian Revenue Agency – OMI, extracted on 6 October 2026, licence CC BY 4.0. Normal condition, gross floor area. \"—\" = type not quoted.",
  },
  de: {
    titolo: "Was Ihr Budget am Ortasee kauft",
    descrizione: "Wie viele Quadratmeter Ihr Budget in Orta San Giulio, Pella, Omegna und den anderen Seegemeinden erreicht, zu den OMI-Richtwerten der italienischen Steuerbehörde. Richtwerte, keine Preise.",
    h1: "Wie viel Fläche Ihr Budget kauft.",
    lead: "Wir teilen das Budget durch die OMI-Richtwerte jeder Seegemeinde: Heraus kommt eine Spanne an Quadratmetern, vom teuersten bis zum günstigsten Wert. Es sind von der Agenzia delle Entrate geschätzte Richtwerte, keine Preise echter Verkäufe.",
    budget: "Ihr Budget", scala: "Budget, logarithmische Skala", esempi: "Beispielbudgets", cosa: "Was Sie suchen",
    tipologie: { ville: "eine Villa", civili: "ein Haus oder eine Wohnung", economiche: "ein einfaches Haus" },
    aiuti: {
      ville: "„Ville e villini“ in der OMI-Einteilung. Der Richtwert umfasst in der Regel die Freifläche: Das Ergebnis ist eine Größenordnung.",
      civili: "„Abitazioni civili“ in der OMI-Einteilung: Wohnungen und Häuser mittleren Standards.",
      economiche: "„Abitazioni di tipo economico“: einfache Ausstattung. In manchen Gemeinden gibt es keinen OMI-Wert.",
    },
    circa: (m) => `etwa ${m}`,
    forchetta: (a, b) => `von ${a} bis ${b} zwischen höchstem und niedrigstem Richtwert`,
    quotazioni: (min, max, z, cara) => `Richtwerte von ${min} bis ${max} in ${z === 1 ? "1 Zone" : `${z} Zonen`} · die teuerste ist ${cara}`,
    nonQuotata: "für diesen Typ gibt es in der Gemeinde keinen OMI-Wert",
    confronto: (b, v, g, p) => `Mit ${b}: etwa ${v}-mal so viel Fläche in ${g} wie in ${p}, in der Mitte der Richtwerte.`,
    fonteRiga: "Agenzia delle Entrate – OMI, Richtwerte 2. Halbjahr 2025, normaler Zustand, Bruttofläche · abgerufen am 6. Oktober 2026.",
    avviso: "Richtwerte, keine Preise: Die OMI schätzt eine Spanne pro Zone und Typ. Ein bestimmtes Haus kann darunter oder darüber liegen.",
    metodo: [
      "Für jede Gemeinde nehmen wir für den gewählten Typ alle OMI-Zonen, die ihn bewerten: das niedrigste Minimum und das höchste Maximum. Die Quadratmeter sind das Budget geteilt durch das Maximum (die kleinste Fläche), durch die Mitte der Spanne und durch das Minimum (die größte Fläche), auf 5 gerundet.",
      "OMI-Richtwerte sind Spannen in Euro pro Quadratmeter, die die Agenzia delle Entrate je homogener Zone, Typ und Zustand schätzt, auch aus Urkunden und Angeboten. Sie sind keine Durchschnitte von Verkäufen und ersetzen kein Gutachten. Hier gelten alle für Bruttofläche (Verkaufsfläche) und „normalen“ Zustand, den in der Zone vorherrschenden: sehr gut und schlecht sind in diesen Gemeinden nicht bewertet.",
      "In Italien lassen sich die Preise einzelner Urkunden nicht gesammelt herunterladen: Der Dienst der Behörde verlangt eine Anmeldung und zeigt eine Urkunde nach der anderen. Deshalb geben wir keine Mediane echter Verkäufe an, wie dort, wo das Register öffentlich ist.",
      "Fehlt ein Typ in einer Gemeinde, bewertet ihn die OMI nicht, weil der Markt nicht aussagekräftig ist: Das ist kein Preis von null, und die Zeile sagt es.",
    ],
    tabTitolo: "Die Richtwerte, Gemeinde für Gemeinde", tabCaption: "OMI-Richtwerte 2. Halbjahr 2025 (€/m², Minimum–Maximum über die Zonen) und Quadratmeter in der Mitte der Spanne",
    colComune: "Gemeinde", colQuot: (t) => `${t} €/m²`, colCon: (b) => `m² Villa mit ${b}`,
    tabNota: "Agenzia delle Entrate – OMI, abgerufen am 6. Oktober 2026, Lizenz CC BY 4.0. Normaler Zustand, Bruttofläche. „—“ = Typ nicht bewertet.",
  },
  sl: {
    titolo: "Kaj kupite s proračunom ob jezeru Orta",
    descrizione: "Koliko kvadratnih metrov doseže vaš proračun v Orti San Giulio, Pelli, Omegni in drugih občinah ob jezeru, po ocenah OMI italijanske davčne uprave. Ocene, ne cene.",
    h1: "Koliko prostora kupi vaš proračun.",
    lead: "Proračun delimo z ocenami OMI za vsako občino ob jezeru: rezultat je razpon kvadratnih metrov, od najdražje do najcenejše vrednosti. To so ocene, ki jih pripravi italijanska davčna uprava (Agenzia delle Entrate), ne cene dejanskih prodaj.",
    budget: "Vaš proračun", scala: "Proračun, na logaritemski lestvici", esempi: "Primeri proračuna", cosa: "Kaj iščete",
    tipologie: { ville: "vilo", civili: "hišo ali stanovanje", economiche: "skromnejšo hišo" },
    aiuti: {
      ville: "»Ville e villini« v razvrstitvi OMI. Ocena praviloma vključuje zunanje površine: rezultat je red velikosti.",
      civili: "»Abitazioni civili« v razvrstitvi OMI: stanovanja in hiše srednjega standarda.",
      economiche: "»Abitazioni di tipo economico«: skromna oprema in napeljave. V nekaterih občinah ocene OMI ni.",
    },
    circa: (m) => `približno ${m}`,
    forchetta: (a, b) => `od ${a} do ${b} med najvišjo in najnižjo oceno`,
    quotazioni: (min, max, z, cara) => `ocene od ${min} do ${max} v ${z === 1 ? "1 coni" : z === 2 ? "2 conah" : `${z} conah`} · najdražja je ${cara}`,
    nonQuotata: "za to vrsto v občini ocene OMI ni",
    confronto: (b, v, g, p) => `Pri proračunu ${b}: približno ${v}-krat več prostora v kraju ${g} kot v kraju ${p}, na sredini ocen.`,
    fonteRiga: "Agenzia delle Entrate – OMI, ocene za 2. polletje 2025, normalno stanje, bruto površina · pridobljeno 6. oktobra 2026.",
    avviso: "Ocene, ne cene: OMI oceni razpon za cono in vrsto. Posamezna hiša je lahko zunaj njega.",
    metodo: [
      "Za vsako občino za izbrano vrsto vzamemo vse cone OMI, ki jo ocenjujejo: najnižji minimum in najvišji maksimum. Kvadratni metri so proračun, deljen z maksimumom (najmanj prostora), s sredino razpona in z minimumom (največ prostora), zaokroženi na 5.",
      "Ocene OMI so razponi v evrih na kvadratni meter, ki jih davčna uprava oceni za homogeno cono, vrsto in stanje, tudi na podlagi pogodb in ponudb. Niso povprečja prodaj in ne nadomeščajo cenitve. Tu so vse na bruto (komercialno) površino in »normalno« stanje, ki v coni prevladuje: odlično in slabo stanje v teh občinah nista ocenjena.",
      "V Italiji cen posameznih pogodb ni mogoče prenesti v celoti: storitev davčne uprave zahteva prijavo in pokaže eno pogodbo naenkrat. Zato ne navajamo median dejanskih prodaj, kot to počnemo tam, kjer je register javen.",
      "Ko vrsta v občini manjka, je OMI ne oceni, ker trg ni pomemben: to ni cena nič, in vrstica to pove.",
    ],
    tabTitolo: "Ocene po občinah", tabCaption: "Ocene OMI za 2. polletje 2025 (€/m², minimum–maksimum po conah) in kvadratni metri na sredini razpona",
    colComune: "Občina", colQuot: (t) => `${t} €/m²`, colCon: (b) => `m² vile pri ${b}`,
    tabNota: "Agenzia delle Entrate – OMI, pridobljeno 6. oktobra 2026, licenca CC BY 4.0. Normalno stanje, bruto površina. »—« = vrsta ni ocenjena.",
  },
};
