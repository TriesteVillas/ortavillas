import type { Guida } from "../tipi";
import { vai } from "../link";
import { laghi, t, fq, tabellaLaghi } from "../dati";

const l = "it" as const;
const v = vai(l);
const mi = (id: string) => laghi("milano").find((r) => r.a === id)!.minuti;
const mx = (id: string) => laghi("malpensa").find((r) => r.a === id)!.minuti;

export const NOMI_LAGHI_IT: Record<string, string> = {
  stresa: "Lago Maggiore · Stresa",
  como: "Lago di Como · Como",
  bellagio: "Lago di Como · Bellagio",
  sirmione: "Lago di Garda · Sirmione",
  "orta-san-giulio": "Lago d'Orta · Orta San Giulio",
};

export const ortaMaggiore: Guida = {
  titolo: "Lago d'Orta o Lago Maggiore? Tempi, dimensioni, acque e prezzi",
  descrizione: "Orta o Maggiore: tempi da Milano e Malpensa verso Stresa, Como, Bellagio, Sirmione e Orta, dimensioni dei due laghi, qualità delle acque, la funivia del Mottarone chiusa, e quali prezzi abbiamo davvero.",
  occhiello: "Guida",
  h1: "Orta o Maggiore: due laghi, una montagna in mezzo",
  lead: "Il Mottarone separa il lago d'Orta dal Lago Maggiore: da Orta a Stresa sono pochi chilometri in linea d'aria. I due laghi però hanno scale diverse, e un confronto onesto deve dire anche quali numeri mancano.",
  inBreve: [
    `Da Milano, senza traffico, Orta San Giulio è a ${t(mi("orta-san-giulio"), l)}, Stresa a ${t(mi("stresa"), l)}, Como a ${t(mi("como"), l)}, Bellagio a ${t(mi("bellagio"), l)}. Da Malpensa Orta è a ${t(mx("orta-san-giulio"), l)}, Stresa a ${t(mx("stresa"), l)}.`,
    "Il lago d'Orta ha 18 km² di superficie e 143 m di profondità massima; il Maggiore 212 km² e 370 m. Il volume del Maggiore è circa trenta volte quello dell'Orta.",
    "Nel 2024 dei 16 punti di balneazione dell'Orta 10 erano in classe «eccellente», 4 «buona» e 2 «sufficiente» (dati trasmessi all'UE).",
    "La funivia Stresa–Mottarone, ferma dall'incidente del 23 maggio 2021, a maggio 2026 era ancora chiusa.",
    "Per i prezzi del Maggiore non abbiamo estratto le quotazioni OMI: un confronto di prezzi con l'Orta oggi non lo pubblichiamo.",
  ],
  sezioni: [
    {
      id: "tempi",
      h2: "Da Milano e da Malpensa",
      blocchi: [
        "Tempi d'auto misurati con OSRM il 6 ottobre 2026, a flusso libero: niente code in tangenziale, niente cantieri, niente soste[^1]. Sono un minimo, non una promessa. Partenze: piazza del Duomo a Milano e il Terminal 1 di Malpensa; arrivi: il centro di ciascun paese.",
        { tabella: tabellaLaghi(l, ["Lago e paese", "Da Milano", "km", "Da Malpensa", "km"], NOMI_LAGHI_IT) },
        `Orta e Stresa sono quasi alla pari da Milano (${t(mi("orta-san-giulio"), l)} contro ${t(mi("stresa"), l)}): le due strade condividono la A8 e la diramazione per Gattico, poi si separano sulla A26. Da Malpensa Stresa è due minuti più vicina. Como, da Milano, è la più vicina di tutte; Bellagio e Sirmione sono più lontane di Orta.`,
        `Tutti i tempi verso i sedici luoghi del lago d'Orta, da undici città, sono nella sezione [Distanze](${v.distanze()}).`,
      ],
    },
    {
      id: "dimensioni",
      h2: "Due scale diverse",
      blocchi: [
        {
          tabella: {
            testa: ["", "Lago d'Orta", "Lago Maggiore"],
            num: [1, 2],
            righe: [
              ["Superficie", "18 km²", "212 km²"],
              ["Profondità massima", "143 m", "370 m"],
              ["Volume", "1,3 km³", "37,5 km³"],
            ],
            didascalia: "Orta: Regione Piemonte, Piano di Tutela delle Acque, monografia L3 (2007). Maggiore: Mosello e Lami, CNR (2011).",
          },
        },
        "L'Orta è lungo 12,55 km e largo al massimo 1,85 km[^2]: da quasi ogni casa sulla riva si vede quella di fronte. Il Maggiore è il secondo lago d'Italia per superficie[^3].",
        "L'Orta ha poi una particolarità idrografica: l'emissario esce dall'estremità nord, caso unico fra i laghi subalpini italiani secondo il CNR[^11]. Le sue acque arrivano comunque al Maggiore, attraverso lo Strona e il Toce.",
      ],
    },
    {
      id: "acque",
      h2: "Le acque: balneazione e stato del lago",
      blocchi: [
        "**Balneazione.** Sul lago d'Orta ci sono 16 punti di monitoraggio ufficiali. Nella stagione 2024, l'ultima classificata nei dati trasmessi all'Agenzia europea dell'ambiente, **10** erano in classe eccellente, **4** buona e **2** sufficiente; le due sufficienti sono spiagge di Omegna, all'estremità nord (Bagnella e il lido del centro sportivo)[^4].",
        "**Stato del lago.** Nel triennio 2020–2022 ARPA Piemonte ha classificato lo stato ecologico dell'Orta «buono», uno dei due soli laghi piemontesi in quella classe, mentre lo stato chimico è risultato «non buono» per il superamento della media annua di PFOS[^5]. Per il 2023–2025 la classificazione era ancora in valutazione a luglio 2026[^6].",
        "Il risultato pesa di più se si ricorda la storia: per decenni gli scarichi industriali avevano reso l'Orta un lago acido, risanato con un trattamento di calcare fra il 1989 e il 1990[^11].",
        "**Il Maggiore.** Le classi di balneazione dei punti del Lago Maggiore non le abbiamo estratte per questa edizione: per questo non scriviamo quale dei due laghi sia «più pulito».",
      ],
    },
    {
      id: "mottarone",
      h2: "Il Mottarone e la funivia chiusa",
      blocchi: [
        "Il Mottarone, 1.491 m all'arrivo della funivia[^8], è la montagna fra i due laghi. La funivia Stresa–Alpino–Mottarone è ferma dall'incidente del **23 maggio 2021**, in cui morirono 14 persone. Nel novembre 2023 Ministero del Turismo, Regione e Comune di Stresa hanno firmato un accordo da 15 milioni di euro per un impianto nuovo, con la riapertura prevista per l'estate 2025[^9].",
        "Quella data è passata: al quinto anniversario, il 23 maggio 2026, la funivia era ancora ferma[^7], e l'ufficio turistico di Stresa scrive che è chiusa, senza indicare una riapertura[^8]. Se i lavori siano in corso a ottobre 2026 non l'abbiamo potuto verificare.",
      ],
    },
    {
      id: "prezzi",
      h2: "Prezzi: che cosa abbiamo, che cosa no",
      blocchi: [
        `Per il lago d'Orta abbiamo le quotazioni OMI di tredici comuni, zona per zona[^10]. La più alta è il lungolago di Orta San Giulio con l'isola: abitazioni civili ${fq("orta-san-giulio", "B2", "civili", l)}, ville ${fq("orta-san-giulio", "B2", "ville", l)} (2° semestre 2025). Il quadro completo è nella guida [I prezzi del lago](${v.guida("quotazioni")}).`,
        "Per il Lago Maggiore (Stresa, Baveno, Verbania, Arona, la sponda lombarda) **non abbiamo estratto le quotazioni**: un confronto di prezzi fra i due laghi richiederebbe la stessa estrazione, con lo stesso semestre e le stesse tipologie. Finché non l'abbiamo fatta, non scriviamo che l'Orta costa meno o più del Maggiore.",
        "Lo stesso vale per la folla d'estate: non abbiamo un dato comparabile di presenze turistiche per i due laghi, e non lo sostituiamo con un'impressione.",
      ],
    },
    {
      id: "scegliere",
      h2: "Come scegliere",
      blocchi: [
        { h3: "Il lago d'Orta fa per voi se…" },
        {
          lista: [
            "volete un lago piccolo, dove la riva di fronte è parte del paesaggio di casa;",
            `vi basta essere a ${t(mi("orta-san-giulio"), l)} da Milano e a ${t(mx("orta-san-giulio"), l)} da Malpensa, senza traffico;`,
            "cercate un lago dallo stato ecologico «buono» e balneazione per lo più eccellente, sapendo del PFOS.",
          ],
        },
        { h3: "Il Lago Maggiore fa per voi se…" },
        {
          lista: [
            "volete un lago grande, con orizzonti larghi;",
            "vi servono più servizi e più collegamenti lacustri di quanti l'Orta ne offra (che qui non abbiamo misurato);",
            "accettate che i numeri di questa guida, sul Maggiore, siano meno completi.",
          ],
        },
      ],
    },
  ],
  nonSappiamo: [
    "Le quotazioni OMI dei comuni del Lago Maggiore, estratte con lo stesso metodo di quelle dell'Orta.",
    "Le classi di balneazione 2024 dei punti del Lago Maggiore.",
    "Un dato comparabile di presenze turistiche estive sui due laghi.",
    "Lo stato dei lavori della nuova funivia del Mottarone a ottobre 2026 e la data di riapertura.",
    "La classificazione ARPA 2023–2025 dello stato ecologico e chimico dell'Orta.",
    "I tempi reali nelle ore di punta: i nostri sono a flusso libero.",
  ],
  faq: [
    { d: "È più vicino a Milano il lago d'Orta o il Lago Maggiore?", r: `Quasi uguali: senza traffico Orta San Giulio è a ${t(mi("orta-san-giulio"), l)} da piazza del Duomo, Stresa a ${t(mi("stresa"), l)}. Da Malpensa Stresa è a ${t(mx("stresa"), l)}, Orta a ${t(mx("orta-san-giulio"), l)}.` },
    { d: "Quanto è grande il lago d'Orta rispetto al Maggiore?", r: "18 km² contro 212 km² di superficie, 143 m contro 370 m di profondità massima, 1,3 contro 37,5 km³ di volume." },
    { d: "Nel lago d'Orta si può fare il bagno?", r: "Sì, nei punti di balneazione autorizzati. Nel 2024 dei 16 punti ufficiali 10 erano in classe eccellente, 4 buona e 2 sufficiente." },
    { d: "La funivia del Mottarone è aperta?", r: "No. È ferma dal 23 maggio 2021; a maggio 2026 era ancora chiusa e l'ufficio turistico di Stresa non indica una data di riapertura." },
    { d: "Le case costano meno sul lago d'Orta che sul Maggiore?", r: "Non lo sappiamo dire con dati comparabili: abbiamo le quotazioni OMI dell'Orta, non quelle del Maggiore estratte con lo stesso metodo." },
  ],
};
