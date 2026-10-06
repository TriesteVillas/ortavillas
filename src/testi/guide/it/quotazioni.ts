import type { Guida } from "../tipi";
import { vai } from "../link";
import { n, pct, fq, q, ntn, tabellaOmi } from "../dati";

const l = "it" as const;
const v = vai(l);
const no = ntn("NO"), vb = ntn("VB");
const ortaB2 = q("orta-san-giulio", "B2", "ville")!;

export const quotazioni: Guida = {
  titolo: "Prezzi delle case sul lago d'Orta: le quotazioni OMI comune per comune",
  descrizione: "Le quotazioni OMI dei 13 comuni del lago d'Orta, zona per zona, 2° semestre 2025 contro 2° semestre 2024: come si leggono, perché non sono prezzi di vendita e perché in Italia non ci sono mediane pubbliche delle compravendite.",
  occhiello: "Guida",
  h1: "I prezzi del lago: che cosa dicono le quotazioni OMI, e che cosa no",
  lead: "In Italia non esiste un registro pubblico che dica a quanto si è venduta ogni casa. Il dato aperto più vicino sono le quotazioni dell'Osservatorio del Mercato Immobiliare: intervalli stimati per zona, non prezzi. Qui ci sono tutte quelle del lago d'Orta, e il modo per non leggerle male.",
  inBreve: [
    `La zona più quotata del lago è il lungolago di Orta San Giulio con l'isola: ville e villini ${fq("orta-san-giulio", "B2", "ville", l)}, abitazioni civili ${fq("orta-san-giulio", "B2", "civili", l)} (2° semestre 2025).`,
    "Le quotazioni OMI sono intervalli in €/m² di superficie lorda, stimati dall'Agenzia delle Entrate per zona e tipologia nello stato conservativo prevalente. Non sono medie di atti.",
    `Fra il 2° semestre 2024 e il 2° semestre 2025 l'OMI ha alzato tutte le quotazioni delle abitazioni civili del lago; le ville sono rimaste ferme solo nei quattro comuni del VCO. Le ville del lungolago di Orta: +${pct(ortaB2.varPct!, l)} al centro dell'intervallo.`,
    "I prezzi dichiarati negli atti esistono, ma si consultano solo con identità digitale, uno per uno, senza licenza aperta: niente mediane pubblicabili.",
    `Compravendite di abitazioni nei comuni non capoluogo della provincia di Novara: ${n(no.a2024, l)} nel 2024, ${n(no.a2025, l)} nel 2025 (provvisorio, ${pct(no.varPct, l)}). È tutta la provincia, non il lago.`,
  ],
  sezioni: [
    {
      id: "che-cosa-sono",
      h2: "Che cosa sono le quotazioni OMI",
      blocchi: [
        "Ogni semestre l'Osservatorio del Mercato Immobiliare dell'Agenzia delle Entrate divide ogni comune in zone omogenee e, per ogni zona e tipologia (abitazioni civili, economiche, signorili, ville e villini), pubblica un valore minimo e uno massimo in euro al metro quadro[^1]. Lo fa a partire da atti, offerte e rilevazioni proprie.",
        "Tre cose da sapere prima di usarle:",
        {
          lista: [
            "**Sono stime, non prezzi.** Non sono la media né la mediana delle vendite: sono un intervallo entro cui l'Agenzia colloca i valori normali della zona. L'Agenzia stessa avverte che non sostituiscono la stima di un immobile preciso.",
            "**Superficie lorda.** Tutte le quotazioni del lago sono riferite alla superficie lorda (commerciale), muri compresi.",
            "**Stato normale.** Sul lago è quotato solo lo stato conservativo prevalente, «normale». Una villa ristrutturata a nuovo sul lungolago può uscire dall'intervallo, sopra; una da rifare, sotto.",
          ],
        },
        "Quando una tipologia manca in una zona, vuol dire che l'OMI non la quota perché il mercato non è significativo: non che valga zero.",
      ],
    },
    {
      id: "tabella",
      h2: "Tutte le zone del lago, 2025 contro 2024",
      blocchi: [
        "Tredici comuni, tutte le zone con almeno una quotazione per abitazioni civili o ville e villini. La variazione è calcolata da noi sul centro dell'intervallo: misura di quanto l'OMI ha spostato la sua stima, non come sono andate le vendite[^1].",
        { tabella: tabellaOmi(l, ["Comune", "Zona OMI", "Tipologia", "2° sem. 2025 €/m²", "2° sem. 2024 €/m²", "Variazione"], { "Abitazioni civili": "Abitazioni civili", "Ville e Villini": "Ville e villini" }, "—") },
        "Estratto dal servizio pubblico di consultazione il 6 ottobre 2026; licenza CC BY 4.0, «Agenzia delle Entrate – OMI». Le zone sono descritte dall'Agenzia a parole: i perimetri si scaricano solo dall'area riservata[^2]. Legro sta nella zona C1 di Orta (che la nomina), Ronco nella E1 di Pella; per Vacciago nessuna zona di Ameno la nomina.",
      ],
    },
    {
      id: "leggere",
      h2: "Come leggerle senza sbagliare",
      blocchi: [
        {
          lista: [
            "**Moltiplicare non basta.** 200 m² per il massimo del lungolago di Orta danno un numero, non un prezzo: vista, accesso al lago, darsena, giardino, stato degli impianti spostano il valore più di qualunque coefficiente.",
            "**Lordo contro netto.** Un annuncio che dice «180 m²» può parlare di superficie calpestabile: confrontatela con un'OMI lorda e il prezzo al metro sembrerà più alto di quel che è.",
            "**Zone larghe.** Una zona «periferica» o «collinare» mette insieme case molto diverse. Sul lago la differenza fra la prima fila e la seconda può valere più del passaggio da una zona all'altra.",
            "**Il ritardo.** Il 2° semestre 2025 è l'ultimo pubblicato al 6 ottobre 2026: guarda indietro di quasi un anno.",
          ],
        },
        `Per stimare quanti metri quadri raggiunge un budget, comune per comune, c'è lo strumento [Cosa compra il vostro budget](${v.strumento("budget")}); per la forchetta di una casa precisa, [Quanto vale casa tua](${v.strumento("valore")}).`,
      ],
    },
    {
      id: "vendite-vere",
      h2: "Perché in Italia non ci sono mediane pubbliche delle vendite",
      blocchi: [
        "In Slovenia il registro pubblico delle compravendite mostra il prezzo di quasi ogni atto e si scarica liberamente: su SloveniaVillas ne ricaviamo mediane. In Italia l'equivalente più vicino è il servizio **«Consultazione valori immobiliari dichiarati»** dell'Agenzia delle Entrate[^3], e funziona diversamente:",
        {
          lista: [
            "richiede l'autenticazione con SPID, CIE o CNS (o credenziali Fisconline/Entratel);",
            "mostra gli atti degli ultimi cinque anni uno per uno, su una mappa;",
            "non offre un download massivo né dichiara una licenza aperta sulla pagina.",
          ],
        },
        "Per ricavarne mediane servirebbero una raccolta manuale e una verifica delle condizioni d'uso. Non usiamo credenziali per conto di nessuno: per questo, oggi, non pubblichiamo prezzi di compravendita del lago.",
        "Anche il numero di compravendite per singolo comune (NTN comunale) si scarica gratuitamente e con licenza aperta, ma solo dall'area riservata delle Forniture dati OMI[^2]. Chi ha un'identità digitale può farlo da sé.",
        "C'è infine il valore catastale, che serve per le imposte: con il prezzo-valore il registro si paga su quello e non sul prezzo[^5]. È un valore fiscale, molto lontano dal mercato, e non va usato per stimare una casa.",
      ],
    },
    {
      id: "volumi",
      h2: "Quante case si vendono: i volumi provinciali",
      blocchi: [
        "Come contesto, l'Agenzia pubblica in forma aperta il numero di transazioni normalizzate (NTN) di abitazioni, ma solo per il comune capoluogo e per l'insieme degli altri comuni di ogni provincia[^4]. Il lago d'Orta sta fra due province: Novara (Orta, Pettenasco, Pella, San Maurizio d'Opaglio, le colline e il fondo sud) e Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso).",
        {
          tabella: {
            testa: ["Comuni non capoluogo", "2023", "2024", "2025 (provv.)", "1° sem. 2026 (provv.)", "2025 su 2024"],
            num: [1, 2, 3, 4, 5],
            righe: [
              ["Provincia di Novara", n(no.a2023, l), n(no.a2024, l), n(no.a2025, l), n(no.s2026, l), `+${pct(no.varPct, l)}`],
              ["Provincia del VCO", n(vb.a2023, l), n(vb.a2024, l), n(vb.a2025, l), n(vb.s2026, l), `+${pct(vb.varPct, l)}`],
            ],
            didascalia: "Agenzia delle Entrate – OMI, Volumi di compravendita (RES.csv). NTN = transazioni normalizzate, cioè quote di proprietà sommate. Il 2025 e il 2026 sono provvisori.",
          },
        },
        "Sono decine di comuni, quasi tutti lontani dal lago: dicono che il mercato provinciale si è mosso, non quante case si sono vendute sulle rive.",
      ],
    },
  ],
  nonSappiamo: [
    "I prezzi effettivamente pagati negli atti del lago: il servizio dei valori dichiarati richiede identità digitale e non ha una licenza aperta dichiarata.",
    "Il numero di compravendite per singolo comune del lago (NTN comunale), scaricabile solo dall'area riservata.",
    "I perimetri delle zone OMI: le conosciamo solo dalla descrizione a parole.",
    "Come si sono mosse le quotazioni nel 1° semestre 2026, non ancora pubblicate al 6 ottobre 2026.",
    "Lo scarto tipico fra prezzi richiesti negli annunci e quotazioni OMI sul lago: non l'abbiamo misurato.",
  ],
  faq: [
    { d: "Le quotazioni OMI sono i prezzi a cui si vendono le case?", r: "No. Sono intervalli in €/m² di superficie lorda, stimati dall'Agenzia delle Entrate per zona omogenea e tipologia, nello stato conservativo prevalente. Non sono medie né mediane di atti." },
    { d: "Quanto costa al metro quadro una casa sul lago d'Orta?", r: `Dipende da comune e zona. Nel 2° semestre 2025 la quotazione più alta è il lungolago di Orta San Giulio con l'isola: ville ${fq("orta-san-giulio", "B2", "ville", l)}. Sul lungolago di Pella le ville sono quotate ${fq("pella", "B2", "ville", l)}.` },
    { d: "Si può sapere a quanto è stata venduta una casa precisa?", r: "Il servizio «Consultazione valori immobiliari dichiarati» dell'Agenzia delle Entrate mostra i corrispettivi degli atti degli ultimi cinque anni, uno per uno, a chi si autentica con SPID, CIE o CNS. Non è un dato aperto." },
    { d: "Perché OrtaVillas non pubblica mediane delle compravendite come SloveniaVillas?", r: "Perché in Italia i prezzi degli atti non sono scaricabili in forma aperta: si consultano uno per uno con identità digitale, senza una licenza dichiarata. Non usiamo credenziali per conto di nessuno." },
    { d: "Le quotazioni del lago sono salite?", r: "Fra il 2° semestre 2024 e il 2° semestre 2025 l'OMI ha alzato tutte le quotazioni delle abitazioni civili del lago, di qualche punto percentuale al centro dell'intervallo; le ville sono rimaste ferme a Omegna, Nonio, Quarna Sopra e Madonna del Sasso. È il movimento della stima, non delle vendite." },
  ],
};
