import type { Guida } from "../tipi";
import { vai } from "../link";
import { daA, t, tabellaOrigini } from "../dati";
import { NOMI_ORIGINI } from "@/content/titoli";

const l = "it" as const;
const v = vai(l);

export const arrivare: Guida = {
  titolo: "Come arrivare al lago d'Orta: aeroporti, autostrade, treni, battelli",
  descrizione: "Malpensa a 54 minuti da Orta San Giulio, Linate a 83, Zurigo, Basilea, Berna, Ginevra e Monaco in auto, la vignetta svizzera, i treni con cambio a Novara e i battelli da marzo a ottobre.",
  occhiello: "Guida",
  h1: "Come si arriva sul lago d'Orta, e come ci si muove una volta lì",
  lead: "L'aeroporto del lago è Malpensa. In auto si arriva dall'autostrada dei Laghi e dalla A26; in treno si cambia a Novara; sull'acqua, da marzo a ottobre, girano i battelli di linea. Qui i tempi misurati, le regole che contano e i buchi che restano.",
  inBreve: [
    `Senza traffico Orta San Giulio è a ${t(daA("malpensa"), l)} da Malpensa, ${t(daA("milano"), l)} da piazza del Duomo a Milano, ${t(daA("linate"), l)} da Linate.`,
    `Dalla Svizzera: Lugano ${t(daA("lugano"), l)}, Zurigo ${t(daA("zurigo"), l)}, Ginevra ${t(daA("ginevra"), l)}, Berna ${t(daA("berna"), l)}, Basilea ${t(daA("basilea"), l)}; da Monaco di Baviera ${t(daA("monaco"), l)}.`,
    "Sulle autostrade svizzere serve il contrassegno: 40 franchi, valido dal 1° dicembre dell'anno precedente al 31 gennaio di quello successivo; l'e-vignetta si compra sul portale ufficiale Via.",
    "Nessun treno diretto per Milano: da Orta-Miasino si cambia a Novara, da 1 h 33 a 1 h 54 in tutto. Verso Novara, mercoledì 7 ottobre 2026, 8 treni diretti.",
    "I battelli di linea navigano da marzo a ottobre; da novembre a febbraio non risulta un servizio di linea.",
  ],
  sezioni: [
    {
      id: "aeroporti",
      h2: "Aeroporti: Malpensa prima di tutto",
      blocchi: [
        `Malpensa Terminal 1 è a **${t(daA("malpensa"), l)}** da Orta San Giulio, Linate a **${t(daA("linate"), l)}**: tempi OSRM a flusso libero, misurati il 6 ottobre 2026[^1]. Da Malpensa la strada non passa per Milano: SS336 e SS33 fino alla diramazione per Gattico, poi la A26.`,
        "Rotte e compagnie dei due aeroporti cambiano a ogni stagione e non le abbiamo lette sulle fonti degli scali: per questo non scriviamo da quali città si vola diretti.",
        { nota: "Come leggere questi tempi: sono calcolati da OSRM sulla rete di OpenStreetMap, senza code, cantieri, controlli al confine né soste. Sono un minimo. Il ritardo reale nelle ore di punta non l'abbiamo misurato." },
      ],
    },
    {
      id: "auto",
      h2: "In auto: A8, A26 e statale 229",
      blocchi: [
        "Da Milano si prende la A8 (Autostrada dei Laghi), poi la diramazione Gallarate–Gattico e la A26. Secondo il percorso calcolato, si esce dalla A26 allo svincolo che i cartelli indicano per Arona, poi la SS142, la variante di Borgomanero e la statale 229 del Lago d'Orta fino a Orta[^1]. Chi arriva da sud (Torino, Ginevra per il Monte Bianco) esce invece a Borgomanero.",
        "Le autostrade italiane sono a pedaggio: l'importo non l'abbiamo calcolato.",
        { tabella: tabellaOrigini(l, ["Partenza", "Fino a Orta San Giulio", "km", "Strade principali"], ["malpensa", "milano", "linate", "novara", "torino", "lugano", "zurigo", "ginevra", "berna", "basilea", "monaco"], NOMI_ORIGINI) },
        "Da Zurigo e da Basilea la strada più veloce scende lungo la A2 svizzera fino a Lugano e rientra in Italia verso Varese; da Berna passa per il Sempione e la statale 33; da Ginevra per il traforo del Monte Bianco e la Valle d'Aosta; da Monaco attraversa l'Austria e i Grigioni[^1].",
        `Ogni partenza ha la sua pagina, con i tempi verso tutti i sedici luoghi: [Distanze](${v.distanze()}).`,
      ],
    },
    {
      id: "vignetta",
      h2: "La vignetta svizzera",
      blocchi: [
        "Sulle autostrade e semiautostrade svizzere i veicoli fino a 3,5 tonnellate devono avere il contrassegno autostradale. Secondo l'Ufficio federale delle dogane e della sicurezza dei confini (UDSC)[^2]:",
        {
          lista: [
            "costa **40 franchi**, anche nella versione elettronica sul portale ufficiale Via;",
            "vale **dal 1° dicembre dell'anno precedente al 31 gennaio dell'anno successivo**: il contrassegno 2026 copre dal 1° dicembre 2025 al 31 gennaio 2027;",
            "esiste adesivo (club automobilistici e alcuni valichi doganali) o elettronico.",
          ],
        },
        "Se il pagamento passa da terzi, l'UDSC avverte che possono aggiungersi supplementi: comprate dal portale ufficiale. Il percorso da Monaco passa anche per autostrade austriache a pedaggio, che qui non abbiamo calcolato.",
      ],
    },
    {
      id: "treno",
      h2: "In treno: sempre via Novara",
      blocchi: [
        "La stazione del borgo è **Orta-Miasino**, sulla linea Novara–Domodossola, a binario unico, solo treni regionali[^4]. Sul lago ci sono anche le stazioni di Gozzano, Bolzano Novarese, Pettenasco e Omegna, tutte sulla sponda est.",
        "Il motore orari Trenitalia, interrogato il 6 ottobre 2026[^3], dava per **mercoledì 7 ottobre 8 treni diretti** da Orta-Miasino a Novara (06:26, 07:12, 08:04, 13:51, 14:57, 16:53, 18:54, 19:52), da 42 a 53 minuti, e **7** per sabato 10 ottobre. Fra le 8:04 e le 13:51 nessun treno.",
        "**Per Milano non c'è un treno diretto**: tutte le soluzioni per Milano Centrale del 7 ottobre richiedono un cambio a Novara (la prima, alle 06:26, due cambi), da **1 h 33 a 1 h 54**[^3].",
        "È un campione di due giorni, non un orario ufficiale pubblicato: verificate sempre il giorno del viaggio.",
      ],
    },
    {
      id: "battelli",
      h2: "Sul lago: i battelli",
      blocchi: [
        "Il servizio pubblico di linea è di Navigazione Lago d'Orta, con tre motonavi; gli approdi principali sono Omegna, Orta, l'isola di San Giulio, Pella, Pettenasco e Gozzano, e gli orari toccano anche San Filiberto, Lagna, Ronco e Oira[^5][^7].",
        "La linea è attiva **da marzo a ottobre**. Dal 4 al 31 ottobre 2026 vale la «Linea Rossa», tutti i giorni: Orta, isola, Pella, San Filiberto, Lagna, isola, Orta, con partenze ogni 35–45 minuti fra le 10:15 e le 17:45[^6]. Da novembre a febbraio gli orari pubblicati non prevedono servizio di linea.",
        `Il battello è l'unico collegamento diretto fra le due rive: per sapere che cosa cambia fra est e ovest c'è la guida [Sponda est o sponda ovest](${v.guida("est-ovest")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Le rotte e le frequenze dei voli da Malpensa e Linate per l'inverno 2026/27.",
    "I tempi reali nelle ore di punta e ai valichi con la Svizzera: i nostri sono a flusso libero.",
    "Il costo dei pedaggi italiani e austriaci sui percorsi della tabella.",
    "L'orario ufficiale regionale della Novara–Domodossola e se le fasce senza treni siano coperte da autobus sostitutivi.",
    "Collegamenti privati in barca fra Orta e l'isola nei mesi senza servizio di linea.",
  ],
  faq: [
    { d: "Qual è l'aeroporto più vicino al lago d'Orta?", r: `Malpensa: ${t(daA("malpensa"), l)} in auto da Orta San Giulio senza traffico. Linate è a ${t(daA("linate"), l)}.` },
    { d: "Serve la vignetta per arrivare dalla Svizzera?", r: "Sulle autostrade svizzere sì: il contrassegno costa 40 franchi e vale dal 1° dicembre dell'anno precedente al 31 gennaio di quello successivo. In Italia le autostrade sono a pedaggio." },
    { d: "Si arriva a Orta in treno da Milano?", r: "Sì, ma con un cambio a Novara: da 1 h 33 a 1 h 54 fino a Milano Centrale secondo il motore orari Trenitalia per il 7 ottobre 2026. La stazione è Orta-Miasino." },
    { d: "Quanto ci vuole da Zurigo?", r: `Senza traffico ${t(daA("zurigo"), l)}, lungo la A2 fino a Lugano e poi in Italia verso Varese e la A26.` },
    { d: "I battelli girano tutto l'anno?", r: "No. Il servizio di linea è attivo da marzo a ottobre; da novembre a febbraio non risulta un servizio di linea." },
  ],
};
