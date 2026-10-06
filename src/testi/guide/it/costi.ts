import type { Guida } from "../tipi";
import { vai } from "../link";
import { ES, eur, sulPrezzo } from "../dati";

const l = "it" as const;
const v = vai(l);
const e = (x: number) => eur(x, l);
const p = (x: number) => sulPrezzo(x, l);

const itSeconda = ES.registro2 + ES.fisse;
const itPrima = ES.registro1 + ES.fisse;
const at = ES.atGrest + ES.atGb;

export const costi: Guida = {
  titolo: "Quanto costa comprare casa sul lago d'Orta: Italia, Svizzera, Germania, Austria",
  descrizione: "Imposta di registro, prezzo-valore, IVA, notaio, provvigione e IMU su una casa al lago d'Orta, voce per voce; accanto, le imposte d'acquisto in Austria, Germania e Svizzera dove le abbiamo verificate.",
  occhiello: "Guida principale",
  h1: "Che cosa costa comprare casa sul lago, voce per voce",
  lead: "In Italia la voce più pesante per chi compra da un privato non è il prezzo dichiarato ma il valore catastale: su quello si calcola l'imposta di registro. Qui ci sono le formule, un esempio su una casa da 600.000 € e il confronto con ciò che abbiamo potuto verificare in Austria, Germania e Svizzera.",
  inBreve: [
    "Da un privato: registro 9% (2% prima casa), minimo 1.000 €, più 50 + 50 € di ipotecaria e catastale. Da un'impresa: IVA 10% (4% prima casa, 22% per A/1, A/8, A/9) più 600 € di imposte fisse.",
    "Con il prezzo-valore il 9% si applica al valore catastale (rendita × 1,05 × 120), non al prezzo: su una casa da 600.000 € con rendita 2.000 € l'imposta è " + e(ES.registro2) + ".",
    "In provincia di Novara l'uso prevede una provvigione del 3% per parte, a cui si aggiunge l'IVA al 22%: " + e(ES.agenzia) + " su 600.000 €.",
    "Il notaio non ha tariffa dal 2012: si chiede un preventivo, e nell'esempio non lo sommiamo.",
    "Austria: imposta di acquisto 3,5% più 1,1% di iscrizione al registro fondiario (fonte ufficiale, aggiornata al 1° agosto 2026). Germania: 3,5% di aliquota federale, fino al 6,5% secondo il Land, in verifica. Svizzera: dipende dal cantone, in verifica.",
    "Ogni anno: IMU sulle seconde case a Orta San Giulio 0,96% (2026).",
  ],
  sezioni: [
    {
      id: "da-privato",
      h2: "Italia, da un privato: registro, ipotecaria, catastale",
      blocchi: [
        "Quando vende una persona fisica la compravendita è esente IVA e il compratore paga[^1][^2]:",
        {
          lista: [
            "**Imposta di registro 9%**, oppure **2%** se è la prima casa (A/1, A/8, A/9 escluse), con un minimo di **1.000 €**;",
            "**imposta ipotecaria 50 €** e **imposta catastale 50 €**.",
          ],
        },
        "**Il prezzo-valore.** Tra persone fisiche, per abitazioni e pertinenze, chi compra può chiedere al notaio che la base imponibile sia il valore catastale: rendita catastale × 1,05 × **120** (seconda casa) o × **110** (prima casa). Il prezzo vero va comunque scritto nell'atto: occultarlo costa una sanzione dal 50 al 100% della differenza[^1]. Su una casa del lago il valore catastale è quasi sempre molto più basso del prezzo, per questo il prezzo-valore pesa più di qualunque altra voce.",
        `La rendita catastale è nella visura: come si legge e perché non è il prezzo lo spiega lo strumento [Dalla rendita catastale al mercato](${v.strumento("catasto")}).`,
      ],
    },
    {
      id: "da-impresa",
      h2: "Italia, da un'impresa: l'IVA",
      blocchi: [
        "Se vende un'impresa che applica l'IVA (tipicamente un costruttore, su una casa nuova o ristrutturata), il compratore paga l'IVA sul prezzo: **4%** prima casa, **10%** altre abitazioni, **22%** per le categorie A/1, A/8, A/9. Registro, ipotecaria e catastale diventano fisse, **200 € ciascuna**[^1]. Qui il prezzo-valore non si applica: si paga sul prezzo pieno.",
      ],
    },
    {
      id: "notaio-agenzia",
      h2: "Notaio e agenzia",
      blocchi: [
        "**Notaio.** Le tariffe professionali sono state abolite dall'art. 9 del D.L. 1/2012: il compenso si concorda e il notaio deve dare un preventivo[^4]. Negli usi della provincia di Novara le spese del contratto sono a carico del compratore, che sceglie il notaio[^3]. Non abbiamo una fonte ufficiale per un compenso «tipico» e non ne inventiamo uno.",
        "**Agenzia.** In provincia di Novara, dove sta Orta San Giulio, la Raccolta provinciale degli usi indica, salvo patto diverso, una provvigione del **3% per ciascuna parte** sul prezzo effettivo[^3]. È un uso del 2005, non un tetto di legge; l'IVA al 22% si aggiunge. Per i comuni della sponda nord in provincia del VCO (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) la raccolta degli usi non l'abbiamo letta.",
      ],
    },
    {
      id: "esempio",
      h2: "L'esempio: una casa da 600.000 € in quattro paesi",
      blocchi: [
        `Ipotesi: prezzo **${e(ES.prezzo)}**, venditore privato, compratore persona fisica, nessun mutuo. Per l'Italia serve una rendita catastale: ne ipotizziamo una di **${e(ES.rendita)}**, che dà un valore catastale di ${e(ES.valCat2)} come seconda casa e ${e(ES.valCat1)} come prima casa. Non è la rendita di una casa vera: la vostra è nella visura, e cambia tutto.`,
        {
          tabella: {
            testa: ["Scenario", "Imposte e registri", "Agenzia, quota di chi compra", "Totale noto", "Sul prezzo"],
            num: [1, 2, 3, 4],
            righe: [
              ["Italia, seconda casa da privato, prezzo-valore", e(itSeconda), e(ES.agenzia), e(itSeconda + ES.agenzia), p(itSeconda + ES.agenzia)],
              ["Italia, stessa casa come prima casa", e(itPrima), e(ES.agenzia), e(itPrima + ES.agenzia), p(itPrima + ES.agenzia)],
              ["Italia, seconda casa da impresa (IVA 10%)", e(ES.ivaImpresa), e(ES.agenzia), e(ES.ivaImpresa + ES.agenzia), p(ES.ivaImpresa + ES.agenzia)],
              ["Austria", e(at), e(ES.atMakler), e(at + ES.atMakler), p(at + ES.atMakler)],
              ["Germania", "in verifica", "in verifica", "—", "—"],
              ["Svizzera", "in verifica", "in verifica", "—", "—"],
            ],
            didascalia: "Esclusi in tutte le righe: notaio o avvocato, traduzioni, perizie, interessi di un mutuo. Per Germania e Svizzera i dati non sono abbastanza verificati per sommarli: le voci note sono nelle sezioni qui sotto.",
          },
        },
        `Che cosa dice la tabella: con il prezzo-valore l'imposta italiana sulla seconda casa è il ${p(itSeconda)} del prezzo, meno dell'imposta austriaca (${p(at)}), perché si calcola su un valore catastale molto più basso del prezzo. Senza l'ipotesi sulla rendita il confronto non regge: con una rendita di 4.000 € l'imposta di registro raddoppia.`,
        "In Austria al conto noto si aggiunge l'avvocato o il notaio che redige il contratto: la fonte ufficiale parla di circa l'1–3% del prezzo[^6], cioè tra " + e(ES.atAvvMin) + " e " + e(ES.atAvvMax) + " su questa casa. Non lo sommiamo perché è un intervallo, non una tariffa.",
        `Per rifare il conto con i vostri numeri c'è lo strumento [Costi d'acquisto a confronto](${v.strumento("costi")}).`,
      ],
    },
    {
      id: "austria",
      h2: "Austria: 3,5% più 1,1%",
      blocchi: [
        "Secondo il portale ufficiale oesterreich.gv.at (aggiornato al 1° agosto 2026)[^6]:",
        {
          lista: [
            "**Grunderwerbsteuer** (imposta sull'acquisto) **3,5%** del prezzo;",
            "**iscrizione al registro fondiario** (Eintragungsgebühr) **1,1%** del prezzo, più una tassa di presentazione di 85 €; se c'è un'ipoteca, l'iscrizione costa l'1,2% del suo valore;",
            "**provvigione massima** dell'agente, per prezzi oltre 48.448,52 €, **3%** più IVA al 20%;",
            "**avvocato o notaio**: circa l'1–3% del prezzo, secondo le tariffe delle rispettive camere.",
          ],
        },
        "Le regole per gli acquirenti stranieri in Austria (le leggi fondiarie dei Länder) non le abbiamo lette.",
      ],
    },
    {
      id: "germania",
      h2: "Germania: dal 3,5% al 6,5% secondo il Land",
      blocchi: [
        "La legge federale sull'imposta di acquisto fissa l'aliquota al **3,5%** (§ 11 GrEStG)[^7]. Secondo fonti secondarie, dal 2006 i Länder possono fissarne una propria, la Baviera applica ancora il 3,5% e la Renania Settentrionale-Vestfalia il 6,5% dal 2015[^8][^9]. Non abbiamo letto le leggi dei singoli Länder: per questo nella tabella la Germania resta «in verifica».",
        "Notaio, registro fondiario e provvigione in Germania non li abbiamo ricalcolati su fonte per questa edizione: per questo la riga tedesca della tabella non ha un totale.",
      ],
    },
    {
      id: "svizzera",
      h2: "Svizzera: decide il cantone",
      blocchi: [
        "In Svizzera le imposte e le tasse sul trasferimento sono cantonali, e talvolta comunali. Un esempio letto sulla fonte: in **Ticino** la legge sulle tariffe del registro fondiario applica all'iscrizione di un trapasso a titolo oneroso una tassa dell'**11 per mille** del valore (art. 11 LTRF)[^10], cioè l'1,1%.",
        "Non sappiamo dire, su fonte primaria, quali altre imposte o tasse notarili si aggiungano in Ticino, né quanto costi un acquisto a Zurigo o a Berna: la Svizzera resta «in verifica». Per chi compra in Svizzera da straniero vale inoltre una legge federale che limita gli acquisti di persone all'estero, che qui non abbiamo letto.",
      ],
    },
    {
      id: "ogni-anno",
      h2: "Ogni anno: IMU",
      blocchi: [
        "A Orta San Giulio, per il 2026, l'IMU sugli «altri fabbricati», cioè le seconde case, è allo **0,96%**; per l'abitazione principale nelle categorie di lusso A/1, A/8, A/9 è allo **0,55%**; per il comodato a parenti di primo grado allo 0,56% (delibera C.C. n. 37 del 23 dicembre 2025, prospetto MEF)[^5].",
        "L'aliquota si applica alla base imponibile IMU, calcolata dalla rendita catastale con coefficienti propri che qui non abbiamo riletto: per questo non scriviamo un importo annuo dell'esempio.",
        `Se la casa viene affittata, le imposte sui canoni sono nella guida [Affittare la casa sul lago](${v.guida("affitti")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Un compenso notarile tipico per una compravendita al lago d'Orta.",
    "Gli usi del Verbano-Cusio-Ossola su provvigione e caparra, per Omegna, Nonio, Quarna Sopra e Madonna del Sasso.",
    "Le aliquote della Grunderwerbsteuer lette nelle leggi dei singoli Länder, e i costi notarili e di registro tedeschi su una casa da 600.000 €.",
    "Il totale di un acquisto in Ticino, a Zurigo o a Berna, comprese tasse notarili e comunali; le regole federali svizzere per gli acquisti di persone all'estero.",
    "Le regole dei Länder austriaci per gli acquirenti stranieri.",
    "La base imponibile IMU della casa dell'esempio e le aliquote 2026 dei comuni del lago diversi da Orta San Giulio.",
  ],
  faq: [
    { d: "Quanto si paga di imposte comprando casa da un privato in Italia?", r: "Imposta di registro del 9% (2% se prima casa), minimo 1.000 €, più 50 € di ipotecaria e 50 € di catastale. Con il prezzo-valore il 9% si applica al valore catastale (rendita × 1,05 × 120), non al prezzo." },
    { d: "Che cos'è il prezzo-valore?", r: "È la regola per cui, nelle vendite tra persone fisiche di abitazioni, le imposte si calcolano sul valore catastale invece che sul prezzo, su richiesta di chi compra al notaio. Il prezzo vero va comunque scritto nell'atto." },
    { d: "Se compro da un costruttore pago l'imposta di registro?", r: "No: si paga l'IVA (4% prima casa, 10% altre abitazioni, 22% per A/1, A/8, A/9) e registro, ipotecaria e catastale fisse a 200 € ciascuna." },
    { d: "Quanto prende un'agenzia sul lago d'Orta?", r: "In provincia di Novara l'uso, salvo patto diverso, è il 3% per ciascuna parte sul prezzo effettivo, più IVA al 22%. È un uso del 2005, non un limite di legge." },
    { d: "Comprare in Austria costa di più che in Italia?", r: "Dipende dal valore catastale italiano. In Austria si pagano 3,5% di imposta e 1,1% di iscrizione sul prezzo; in Italia, con il prezzo-valore, il 9% su un valore catastale di solito molto più basso. Nel nostro esempio da 600.000 € con rendita 2.000 € l'imposta italiana è più bassa." },
    { d: "Quanto è l'IMU su una seconda casa a Orta San Giulio?", r: "Nel 2026 l'aliquota per gli altri fabbricati, cioè le seconde case, è 0,96% della base imponibile IMU." },
  ],
};
