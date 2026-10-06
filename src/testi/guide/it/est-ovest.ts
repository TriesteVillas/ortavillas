import type { Guida } from "../tipi";
import { vai } from "../link";
import { L, n, t, ora, pct, fq, tabellaSole, tabellaServizi } from "../dati";

const l = "it" as const;
const v = vai(l);
const orta = L("orta-san-giulio"), pet = L("pettenasco"), pella = L("pella"), ronco = L("ronco"), smo = L("san-maurizio-dopaglio"), mds = L("madonna-del-sasso"), legro = L("legro");
const s = (x: typeof orta) => x.soleDic!;

export const estOvest: Guida = {
  titolo: "Lago d'Orta, sponda est o sponda ovest? Sole, treni, strade, prezzi",
  descrizione: "Sponda est o sponda ovest del lago d'Orta: minuti di sole il 21 dicembre, ferrovia, strade, battelli, quotazioni OMI, rischi ISPRA e servizi, comune per comune.",
  occhiello: "Guida",
  h1: "Sponda est o sponda ovest: due rive che si guardano",
  lead: "Da Orta a Pella ci sono pochi minuti di battello, ma le due rive vivono a orari diversi. La est ha la ferrovia, il borgo e le quotazioni più alte; la ovest ha il sole del mattino e la vista sull'isola. Qui i numeri che le distinguono, e dove i numeri non bastano.",
  inBreve: [
    `Il 21 dicembre Orta San Giulio ha ${s(orta).minuti} minuti di sole diretto (dalle ${ora(s(orta).primo, l)} alle ${ora(s(orta).ultimo, l)}), Pella ${s(pella).minuti} (dalle ${ora(s(pella).primo, l)} alle ${ora(s(pella).ultimo, l)}): quasi lo stesso totale, a orari spostati di quaranta minuti.`,
    `Il caso estremo è Ronco, sulla riva ovest: ultimo sole alle ${ora(s(ronco).ultimo, l)}, ${s(ronco).minuti} minuti in tutto.`,
    "La ferrovia Novara–Domodossola corre solo sulla sponda est (stazioni Orta-Miasino e Pettenasco); sulla ovest ci sono battelli e strada provinciale.",
    `Lungolago OMI, ville e villini: Orta ${fq("orta-san-giulio", "B2", "ville", l)}, Pella ${fq("pella", "B2", "ville", l)}, Pettenasco ${fq("pettenasco", "B2", "ville", l)} (2° semestre 2025).`,
    `Rischio frane e alluvioni (ISPRA, % della popolazione del comune): il valore più alto fra le due rive è Pettenasco, ${pct(pet.frane!, l)} e ${pct(pet.alluvioni!, l)}.`,
  ],
  sezioni: [
    {
      id: "due-rive",
      h2: "Due rive, un lago stretto",
      blocchi: [
        "Il lago è stretto: da una riva si vede bene l'altra. Noi chiamiamo **sponda est** Orta San Giulio, la frazione di Legro e Pettenasco; **sponda ovest** Pella, la sua frazione Ronco, San Maurizio d'Opaglio e, sul crinale, Madonna del Sasso. I confini sono indicativi e tracciati da noi.",
        `La riva est guarda a ovest: lago e tramonto davanti, il Mottarone alle spalle. La riva ovest guarda a est: alba sul lago e vista su Orta e sull'isola di San Giulio, ma il crinale dietro le case anticipa il tramonto. I paesi delle colline del Mottarone (Ameno, Vacciago, Miasino, Armeno) stanno sopra la sponda est e hanno schede proprie fra i luoghi, per esempio [Ameno](${v.luogo("ameno")}).`,
      ],
    },
    {
      id: "sole",
      h2: "Il sole del 21 dicembre",
      blocchi: [
        `Abbiamo calcolato l'orizzonte di ogni luogo dal modello del terreno, ogni 2° di azimut fino a 15 km, e la posizione del sole con le formule NOAA[^2]. Il risultato è il sole che il rilievo concede, senza case, alberi né nuvole: un massimo, non una promessa. Con l'orizzonte piatto il 21 dicembre avrebbe ${s(orta).teorici} minuti di sole.`,
        {
          tabella: tabellaSole(l, ["Luogo", "Riva", "Quota", "Minuti di sole", "Primo sole", "Ultimo sole"], { est: "est", ovest: "ovest" }),
        },
        `Il totale cambia poco; cambia l'ora. Sulla est il sole arriva tardi (a Orta alle ${ora(s(orta).primo, l)}, a Pettenasco alle ${ora(s(pet).primo, l)}) perché lo coprono le pendici del Mottarone, e resta fino a metà pomeriggio. Sulla ovest arriva verso le otto e mezza e se ne va prima: a Pella alle ${ora(s(pella).ultimo, l)}, a Ronco alle ${ora(s(ronco).ultimo, l)}. Legro, in alto sopra Orta, guadagna un quarto d'ora la sera (${ora(s(legro).ultimo, l)}).`,
        "Il 21 giugno, con lo stesso calcolo, Pella ha 822 minuti di sole, Orta 792, Ronco 717: d'estate il crinale di Ronco pesa ancora.",
      ],
    },
    {
      id: "spostarsi",
      h2: "Treno, strade e battelli",
      blocchi: [
        "**Il treno è solo a est.** La linea Novara–Domodossola, a binario unico, ha sul lago le stazioni di Gozzano, Bolzano Novarese, Orta-Miasino, Pettenasco e Omegna[^6]. Il 7 ottobre 2026 il motore orari Trenitalia dava **8 treni diretti** da Orta-Miasino verso Novara, con un buco fra le 8:04 e le 13:51; per Milano serve sempre un cambio a Novara[^7].",
        `**Le strade.** La sponda est è servita dalla statale 229 del Lago d'Orta, la stessa che si prende uscendo dall'autostrada A26: da Milano, senza traffico, Orta è a ${t(orta.daMilano, l)}. La sponda ovest è servita dalla provinciale 46 e si raggiunge girando dal fondo del lago: Pella è a ${t(pella.daMilano, l)}, Ronco a ${t(ronco.daMilano, l)}[^1].`,
        "**I battelli** sono l'unico collegamento diretto fra le due rive. Navigazione Lago d'Orta, servizio pubblico di linea, opera da marzo a ottobre[^11]; dal 4 al 31 ottobre 2026 la «Linea Rossa» gira ogni 35–45 minuti fra Orta, l'isola, Pella, San Filiberto e Lagna[^5]. Da novembre a febbraio non risulta un servizio di linea.",
      ],
    },
    {
      id: "prezzi",
      h2: "Le quotazioni OMI sulle due rive",
      blocchi: [
        "L'Osservatorio del Mercato Immobiliare dell'Agenzia delle Entrate pubblica intervalli in €/m² per zona e tipologia: sono stime, non prezzi di vendita[^3]. Ecco le zone sul lago e le più care di ciascun comune, 2° semestre 2025:",
        {
          tabella: {
            testa: ["Comune", "Zona OMI", "Abitazioni civili", "Ville e villini"],
            righe: [
              ["Orta San Giulio", "B2 · Lungolago, isola", fq("orta-san-giulio", "B2", "civili", l), fq("orta-san-giulio", "B2", "ville", l)],
              ["Orta San Giulio", "C1 · Fascia collinare e Legro", fq("orta-san-giulio", "C1", "civili", l), fq("orta-san-giulio", "C1", "ville", l)],
              ["Pettenasco", "B2 · Lungolago", fq("pettenasco", "B2", "civili", l), fq("pettenasco", "B2", "ville", l)],
              ["Pella", "B2 · Lungolago", fq("pella", "B2", "civili", l), fq("pella", "B2", "ville", l)],
              ["Pella", "E1 · Ronco", fq("pella", "E1", "civili", l), fq("pella", "E1", "ville", l)],
              ["San Maurizio d'Opaglio", "C1 · Semicentrale", fq("san-maurizio-dopaglio", "C1", "civili", l), fq("san-maurizio-dopaglio", "C1", "ville", l)],
              ["Madonna del Sasso", "B1 · Centro abitato", fq("madonna-del-sasso", "B1", "civili", l), fq("madonna-del-sasso", "B1", "ville", l)],
            ],
            didascalia: "Agenzia delle Entrate – OMI, stato conservativo normale, superficie lorda. «—» = tipologia non quotata in quella zona.",
          },
        },
        `Il lungolago di Orta, con l'isola, è la zona più quotata di tutto il lago. Pella e Pettenasco sul lungolago stanno un gradino sotto e quasi alla pari fra loro. Tutte le zone, con il confronto sul 2024, sono nella guida [I prezzi del lago](${v.guida("quotazioni")}).`,
      ],
    },
    {
      id: "rischi-servizi",
      h2: "Rischi e servizi, comune per comune",
      blocchi: [
        "ISPRA pubblica, per ogni comune, la quota di popolazione che vive in aree a pericolosità da frana elevata o molto elevata (P3–P4) e in aree a pericolosità idraulica media (P2)[^4]. Sono percentuali sull'intero comune: non dicono niente di una casa precisa, che va verificata sulle carte del piano di assetto idrogeologico.",
        { tabella: tabellaServizi(l, ["Luogo", "Da Milano", "Stazione più vicina (linea d'aria)", "Frane P3–P4", "Alluvioni P2", "Scuole statali"], "—") },
        `Pettenasco ha i valori più alti delle due rive (${pct(pet.frane!, l)} della popolazione in aree franose P3–P4, ${pct(pet.alluvioni!, l)} in aree alluvionabili P2); Pella segue con ${pct(pella.frane!, l)} e ${pct(pella.alluvioni!, l)}. Madonna del Sasso, sul crinale, ha zero su entrambi. Le scuole sono quelle statali dell'anagrafe ministeriale 2026/27[^8]: le paritarie non ci sono. Legro e Ronco sono frazioni: valgono i dati dei loro comuni.`,
        "**Ospedali.** Il pronto soccorso più vicino per entrambe le rive, fra le fonti lette, è l'ospedale SS. Trinità di Borgomanero, DEA di I livello con 250 letti[^9], a sud del lago. A Omegna c'è un Punto di Primo Intervento, non un pronto soccorso, con orari ridotti[^10]. Il tempo dalle case all'ospedale non l'abbiamo misurato.",
      ],
    },
    {
      id: "per-chi",
      h2: "Per chi è fatta ciascuna riva",
      blocchi: [
        { h3: "Scegliete la sponda est se…" },
        {
          lista: [
            "volete arrivare in treno, o avere un treno per Novara a pochi minuti a piedi;",
            "volete il borgo di Orta, l'imbarcadero principale e i servizi a portata di passeggiata;",
            "preferite il sole del pomeriggio e il tramonto sull'acqua, e accettate un'alba più tarda d'inverno;",
            "il budget regge le quotazioni più alte del lago.",
          ],
        },
        { h3: "Scegliete la sponda ovest se…" },
        {
          lista: [
            "volete la vista su Orta e sull'isola, e il sole del mattino;",
            "vi basta l'auto o il battello stagionale, senza ferrovia;",
            `cercate quotazioni un gradino più basse a parità di affaccio, o il balcone di Madonna del Sasso, a ${n(mds.quota, l)} m;`,
            `sapete che d'inverno il sole se ne va presto: a Ronco alle ${ora(s(ronco).ultimo, l)}.`,
          ],
        },
        `San Maurizio d'Opaglio, il comune più grande della riva ovest (${n(smo.abitanti ?? 0, l)} abitanti), sta a ${n(smo.riva, l)} m dall'acqua e ha la giornata invernale più lunga delle due rive: ${s(smo).minuti} minuti.`,
      ],
    },
  ],
  nonSappiamo: [
    "Il sole reale di una casa precisa: il nostro calcolo esclude edifici, alberi e nuvole e usa un modello del terreno a circa 27 m.",
    "Le differenze di temperatura, nebbia e vento fra le due rive: non abbiamo trovato una stazione meteo pubblicata per ciascuna sponda.",
    "Il tempo reale dalle case al pronto soccorso di Borgomanero, e l'orario ordinario del Punto di Primo Intervento di Omegna.",
    "Se d'inverno, quando il battello di linea non c'è, esistano collegamenti privati fra le rive.",
    "Le compravendite per comune (NTN comunale): si scaricano solo con un'identità digitale e non le abbiamo.",
  ],
  faq: [
    { d: "Sul lago d'Orta è più soleggiata la sponda est o la ovest?", r: `Il 21 dicembre il totale è simile: Orta San Giulio ${s(orta).minuti} minuti di sole diretto, Pella ${s(pella).minuti}. Cambia l'orario: sulla est il sole arriva verso le nove e un quarto e resta fino alle quattro meno un quarto, sulla ovest arriva verso le otto e mezza e se ne va prima. Ronco, sulla ovest, perde il sole alle ${ora(s(ronco).ultimo, l)}.` },
    { d: "Il treno arriva su entrambe le rive?", r: "No, solo sulla sponda est: stazioni Orta-Miasino e Pettenasco sulla linea Novara–Domodossola. Per Milano serve un cambio a Novara." },
    { d: "Dove costano di più le case sul lago d'Orta?", r: `Fra le quotazioni OMI la zona più cara è il lungolago di Orta San Giulio con l'isola: abitazioni civili ${fq("orta-san-giulio", "B2", "civili", l)}, ville ${fq("orta-san-giulio", "B2", "ville", l)} nel 2° semestre 2025. Sono stime per zona, non prezzi di vendita.` },
    { d: "Come si va da una riva all'altra?", r: "Con il battello di linea da marzo a ottobre, oppure in auto girando dal fondo del lago. Da novembre a febbraio non risulta un servizio di linea." },
    { d: "Quale riva ha meno rischio di frane?", r: `Fra i comuni delle due rive, secondo ISPRA, Madonna del Sasso ha zero popolazione in aree franose P3–P4, San Maurizio d'Opaglio ${pct(smo.frane!, l)}, Orta ${pct(orta.frane!, l)}, Pella ${pct(pella.frane!, l)}, Pettenasco ${pct(pet.frane!, l)}. È un dato comunale: per una casa contano le carte del piano di assetto idrogeologico.` },
  ],
};
