import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("it");

export const affitti: Guida = {
  titolo: "Affittare la casa sul lago d'Orta: CIR, CIN, cedolare secca, regole del Piemonte",
  descrizione: "Locazioni turistiche sul lago d'Orta: comunicazione al Comune e CIR di 11 cifre entro 10 giorni, CIN nazionale dal 2025, sanzioni, cedolare secca 21% e 26%, soglia dei due appartamenti dal 2026.",
  occhiello: "Guida",
  h1: "Affittare la casa sul lago: le regole, nell'ordine in cui servono",
  lead: "Chi affitta ai turisti una casa sul lago d'Orta, per periodi fino a 30 giorni, deve fare due registrazioni, una regionale e una nazionale, esporre due codici e scegliere come pagare le imposte. Qui le regole lette sulle fonti, e dove le fonti sono di seconda mano.",
  inBreve: [
    "In Piemonte la locazione turistica fino a 30 giorni consecutivi si comunica al Comune entro 10 giorni dalla prima locazione: il Comune assegna un CIR di 11 cifre. Non serve cambiare destinazione d'uso.",
    "Il CIR va pubblicato in ogni annuncio, online e su carta: chi non lo fa rischia da 500 a 5.000 €, raddoppiati se recidivo.",
    "Dal 1° gennaio 2025 serve anche il CIN nazionale, dalla Banca dati del Ministero del Turismo; le sanzioni riportate dalla stampa di settore vanno da 800 a 8.000 € per chi non lo chiede.",
    "Cedolare secca sugli affitti brevi: 21% su un immobile scelto, 26% sugli altri. Dal 2026 il regime vale fino a 2 appartamenti; oltre, l'attività si presume d'impresa (fonti secondarie).",
    "L'imposta di soggiorno di Orta San Giulio non l'abbiamo trovata: né delibera né tariffe.",
  ],
  sezioni: [
    {
      id: "che-cosa",
      h2: "Che cos'è una locazione turistica in Piemonte",
      blocchi: [
        "Il quadro è la legge regionale 3 agosto 2017 n. 13 e il suo regolamento, il D.P.G.R. 8 giugno 2018 n. 4/R, che all'art. 14 disciplina chi affitta a fini turistici per periodi consecutivi **fino a 30 giorni**[^1]. Non è una struttura ricettiva: non servono il cambio di destinazione d'uso né i requisiti di un albergo o di un B&B.",
        "Le strutture ricettive (alberghi, affittacamere, case vacanze gestite in forma d'impresa) seguono altre regole e hanno un CIR di formato diverso, per esempio 001272-ALB-00282[^2]. Qui parliamo solo della casa privata affittata a turisti.",
        { nota: "Una sentenza del TAR Piemonte del 2023 avrebbe annullato alcune disposizioni del regolamento: l'abbiamo vista solo citata in una ricerca e non sappiamo quali articoli tocchi. Chiedete al Comune quale versione applica." },
      ],
    },
    {
      id: "cir",
      h2: "Passo 1: la comunicazione al Comune e il CIR",
      blocchi: [
        "**Entro 10 giorni dalla prima locazione** si invia al Comune il modello dell'allegato H del regolamento[^1]. Il Comune assegna il **CIR**, codice identificativo regionale, di **11 cifre**: 6 per il codice ISTAT del comune e 5 progressive.",
        "Il CIR va reso visibile anche sui portali. Dalla legge regionale 9 marzo 2023 n. 3 (art. 124) l'obbligo vale per **ogni comunicazione promozionale, online e cartacea**; la sanzione è **da 500 a 5.000 €**, raddoppiata in caso di reiterazione[^2].",
        `Il lago sta in due province (Novara e Verbano-Cusio-Ossola), ma la regione è una: la regola del CIR è la stessa a [Orta San Giulio](${v.luogo("orta-san-giulio")}) e a [Omegna](${v.luogo("omegna")}). Cambiano gli uffici comunali a cui si scrive.`,
      ],
    },
    {
      id: "cin",
      h2: "Passo 2: il CIN nazionale",
      blocchi: [
        "Dal **1° gennaio 2025** ogni unità affittata a fini turistici deve avere anche il **CIN**, codice identificativo nazionale (art. 13-ter del D.L. 145/2023), che si chiede alla Banca dati delle strutture ricettive del Ministero del Turismo[^3].",
        "Secondo la stampa di settore le sanzioni sono **da 800 a 8.000 €** per chi non lo chiede e **da 500 a 5.000 €** per chi non lo espone[^3]. Il testo di legge non l'abbiamo letto direttamente: prendete queste cifre come indicative.",
      ],
    },
    {
      id: "ospiti",
      h2: "Passo 3: gli ospiti",
      blocchi: [
        "Chi ospita deve comunicare le generalità degli ospiti alla Questura attraverso il portale Alloggiati Web della Polizia di Stato, secondo l'art. 109 del testo unico di pubblica sicurezza; le fonti di settore indicano 24 ore dall'arrivo, 6 per soggiorni più brevi[^6].",
        "Questa regola l'abbiamo letta solo su una fonte secondaria, in sintesi: verificate tempi e modalità con la Questura competente prima del primo ospite.",
      ],
    },
    {
      id: "imposte",
      h2: "Le imposte: cedolare secca e soglia dei due appartamenti",
      blocchi: [
        "Sulle locazioni brevi (fino a 30 giorni) il proprietario persona fisica può scegliere la **cedolare secca**: **21%** sul canone di un solo immobile, scelto da lui, e **26%** sugli altri[^4][^5].",
        "**Dal 2026** la legge di bilancio (L. 30 dicembre 2025 n. 199, art. 1 c. 17) fa valere il regime delle locazioni brevi solo per chi affitta **non più di 2 appartamenti** nel periodo d'imposta: oltre, l'attività si presume imprenditoriale[^4][^5]. Quale fosse la soglia prima non l'abbiamo verificato.",
        "Se l'affitto passa da un portale o da un intermediario che incassa, questi trattiene il **21%** a titolo d'acconto[^4].",
        { nota: "Tutto questo paragrafo viene da fonti secondarie (riviste fiscali, maggio 2026): la guida dell'Agenzia delle Entrate e il testo su Normattiva non si sono caricati quando li abbiamo cercati. Una proposta dell'autunno 2025 che riservava il 21% a chi non usa piattaforme, secondo le stesse fonti, non è entrata nel testo finale." },
        "Per chi risiede all'estero, come si coordinano queste imposte con quelle del proprio paese dipende dalle convenzioni contro le doppie imposizioni: è materia da commercialista, e qui non la riassumiamo.",
      ],
    },
    {
      id: "soggiorno",
      h2: "L'imposta di soggiorno",
      blocchi: [
        "Alcuni comuni chiedono agli ospiti un'imposta di soggiorno, che il proprietario riscuote e versa. Per **Orta San Giulio** non abbiamo trovato la delibera né le tariffe, né sul sito del Comune né sul portale del Ministero dell'Economia: non sappiamo dire se si applichi e quanto valga. Lo stesso per gli altri comuni del lago.",
      ],
    },
    {
      id: "conti",
      h2: "Prima di fare i conti",
      blocchi: [
        "Una resa calcolata moltiplicando una tariffa per 365 notti è finzione: il lago ha una stagione, e le notti vuote non compaiono in nessuna tariffa. Non pubblichiamo rendimenti perché non abbiamo dati di occupazione affidabili per il lago.",
        `Se state ancora scegliendo dove comprare, i tempi da Milano, Malpensa e dalla Svizzera sono nella guida [Come arrivare](${v.guida("arrivare")}); le imposte d'acquisto in [Costi d'acquisto a confronto](${v.guida("costi")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Quali articoli del regolamento 4/R siano stati annullati dal TAR Piemonte nel 2023, se lo sono stati.",
    "Il testo dell'art. 13-ter del D.L. 145/2023 e delle sanzioni CIN, letto sulla fonte primaria.",
    "La guida 2026 dell'Agenzia delle Entrate sulle locazioni brevi, letta direttamente, e la soglia in vigore prima del 2026.",
    "Tempi e modi della comunicazione degli ospiti, letti sulla fonte della Polizia di Stato.",
    "Se Orta San Giulio e gli altri comuni del lago applichino un'imposta di soggiorno, e con quali tariffe.",
    "Dati di occupazione e tariffe medie delle case affittate sul lago.",
  ],
  faq: [
    { d: "Che cos'è il CIR in Piemonte?", r: "Il codice identificativo regionale che il Comune assegna a chi comunica una locazione turistica: 11 cifre, 6 per il codice ISTAT del comune e 5 progressive. Va pubblicato in ogni annuncio." },
    { d: "Entro quando si comunica l'affitto turistico al Comune?", r: "Entro 10 giorni dalla prima locazione, con il modello dell'allegato H del regolamento regionale 4/R del 2018." },
    { d: "Serve anche il CIN?", r: "Sì, dal 1° gennaio 2025: è il codice nazionale che si chiede alla Banca dati delle strutture ricettive del Ministero del Turismo, in aggiunta al CIR regionale." },
    { d: "Quanto si paga di cedolare secca sugli affitti brevi?", r: "21% su un immobile scelto dal proprietario, 26% sugli altri. Dal 2026 il regime delle locazioni brevi vale fino a 2 appartamenti; oltre, l'attività si presume d'impresa. Sono dati letti su fonti fiscali secondarie." },
    { d: "A Orta San Giulio c'è l'imposta di soggiorno?", r: "Non lo sappiamo: non abbiamo trovato né la delibera né le tariffe. Chiedetelo al Comune." },
  ],
};
