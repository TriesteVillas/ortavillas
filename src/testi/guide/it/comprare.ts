import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("it");

export const comprare: Guida = {
  titolo: "Comprare casa in Italia da straniero: la guida per il lago d'Orta",
  descrizione: "Codice fiscale, reciprocità, proposta, compromesso e caparra, rogito dal notaio scelto da chi compra, agevolazione prima casa: i passi in ordine, con le fonti ufficiali.",
  occhiello: "Guida principale",
  h1: "Come si compra casa in Italia, passo per passo",
  lead: "Chi viene da un altro paese dell'Unione compra sul lago d'Orta alle stesse condizioni di un italiano; per gli altri decide la reciprocità, che va verificata caso per caso. La sequenza è sempre la stessa: codice fiscale, proposta, compromesso con caparra, rogito davanti a un notaio. Qui c'è ciò che dicono le fonti, e dove si fermano.",
  inBreve: [
    "I cittadini dell'Unione europea comprano casa in Italia come gli italiani. Per gli altri vale la condizione di reciprocità (art. 16 delle preleggi): per Svizzera, Regno Unito e Stati Uniti non l'abbiamo verificata sulla fonte ufficiale.",
    "Serve un codice fiscale italiano: dall'estero lo rilascia il consolato, oppure lo chiede in Italia una persona delegata.",
    "In provincia di Novara, dove sta Orta San Giulio, l'uso vuole una caparra di almeno il 10% al compromesso e lascia al compratore la scelta del notaio e le spese dell'atto, salvo patti diversi.",
    "Da un privato si pagano imposta di registro al 9% (2% se prima casa), più 50 + 50 € di ipotecaria e catastale; con il «prezzo-valore» la base è il valore catastale, non il prezzo.",
    "L'agevolazione prima casa chiede di portare la residenza nel comune entro 18 mesi: per chi tiene la casa come seconda residenza non vale.",
    "Il compenso del notaio non ha più una tariffa fissa dal 2012: si chiede un preventivo.",
  ],
  sezioni: [
    {
      id: "chi-puo-comprare",
      h2: "Chi può comprare",
      blocchi: [
        "La regola generale è nell'art. 16 delle disposizioni sulla legge in generale: lo straniero è ammesso ai diritti civili «a condizione di reciprocità», salvo leggi speciali[^5]. In pratica, secondo le fonti di settore che abbiamo letto, i cittadini dell'Unione europea sono equiparati agli italiani e non sono soggetti alla verifica; per chi viene da fuori dall'Unione, senza trattato e senza permesso di soggiorno, il notaio controlla la reciprocità sulle tabelle del Ministero degli Esteri[^6].",
        "**Svizzera, Regno Unito, Stati Uniti.** La pagina ufficiale del Ministero degli Esteri sulla reciprocità, il 6 ottobre 2026, ci ha risposto con un controllo anti-bot che non abbiamo aggirato: non l'abbiamo letta. Una fonte secondaria collega la Svizzera all'accordo bilaterale del 1999 sulla libera circolazione[^7], ma non l'abbiamo confermato. Chiedete al notaio di verificare la vostra nazionalità sulle tabelle aggiornate prima della proposta, non al rogito.",
        "**La residenza non serve per comprare.** Nessuna delle fonti che abbiamo esaminato la chiede. Conta solo per l'agevolazione prima casa (più sotto).",
      ],
    },
    {
      id: "codice-fiscale",
      h2: "Passo 1: il codice fiscale",
      blocchi: [
        "Il codice fiscale è il primo documento che vi chiederanno: per la proposta, per il conto corrente, per il notaio. Chi non risiede in Italia può chiederlo all'ufficio consolare italiano competente per la propria residenza, oppure delegare qualcuno che lo presenti a un ufficio dell'Agenzia delle Entrate in Italia[^4].",
        "Tempi e modulistica del consolato variano: la pagina del Ministero l'abbiamo vista solo in sintesi, quindi verificate sul sito del vostro consolato.",
      ],
    },
    {
      id: "proposta",
      h2: "Passo 2: la proposta d'acquisto",
      blocchi: [
        "Di solito si comincia con una proposta scritta: il compratore offre un prezzo, indica le condizioni (un mutuo da ottenere, una verifica tecnica, la data del rogito) e la lascia irrevocabile per un periodo. Se il venditore la accetta per iscritto e l'accettazione arriva al compratore, il contratto è concluso nei termini scritti: per questo conviene leggerla con lo stesso scrupolo del compromesso.",
        "Prima di firmare, chiedete i documenti della casa: visura e planimetria catastale, titolo di provenienza, situazione urbanistica, attestato di prestazione energetica. Nell'atto il venditore dichiara che dati catastali e planimetrie corrispondono allo stato di fatto[^1]: se non corrispondono, è meglio scoprirlo prima della caparra.",
        { nota: "Questa sezione descrive la prassi corrente in Italia; non citiamo un articolo di legge perché la proposta non ha una disciplina propria separata dalle regole generali sui contratti, che qui non riassumiamo." },
      ],
    },
    {
      id: "compromesso",
      h2: "Passo 3: compromesso e caparra",
      blocchi: [
        "Il compromesso (contratto preliminare) obbliga le parti a firmare il rogito alle condizioni pattuite. Di solito il compratore versa una caparra confirmatoria, che resta al venditore se il compratore non conclude e va restituita al doppio se è il venditore a tirarsi indietro.",
        "**L'uso in provincia di Novara.** La Raccolta provinciale degli usi della Camera di Commercio di Novara prevede, salvo patto diverso, una caparra **non inferiore al 10%** del prezzo al compromesso[^3]. È un uso, non una legge, e la raccolta è del 2005: si può pattuire diversamente, e si deve scrivere.",
        "Per Omegna, Nonio, Quarna Sopra e Madonna del Sasso, che stanno in provincia del Verbano-Cusio-Ossola, la raccolta degli usi del VCO non l'abbiamo letta.",
        "Pagate con bonifico o assegno, mai in contanti: nell'atto si indicano anche le modalità di pagamento.",
      ],
    },
    {
      id: "rogito",
      h2: "Passo 4: il rogito dal notaio",
      blocchi: [
        "In Italia la proprietà passa con l'atto pubblico davanti a un notaio, il rogito. Il notaio verifica l'identità delle parti, controlla i registri immobiliari, legge l'atto, riscuote le imposte e le versa allo Stato, poi trascrive l'atto.",
        "**Chi sceglie il notaio.** Secondo gli usi della provincia di Novara le spese del contratto sono **a carico del compratore, che sceglie il notaio**[^3].",
        "**Quanto costa.** Le tariffe notarili sono state abolite dall'art. 9 del D.L. 1/2012: il compenso si concorda e avete diritto a un preventivo[^8]. Non pubblichiamo una percentuale «tipica» perché non abbiamo una fonte ufficiale che la dia.",
        "**Se non parlate italiano.** L'atto è in italiano; se una parte non conosce la lingua serve un interprete e, di solito, una traduzione a fronte. Chiedetelo al notaio quando chiedete il preventivo.",
      ],
    },
    {
      id: "imposte",
      h2: "Passo 5: le imposte d'acquisto",
      blocchi: [
        "Le imposte dipendono da chi vende[^1]:",
        {
          lista: [
            "**Da un privato** (vendita esente IVA): imposta di registro **9%**, oppure **2%** se è la prima casa (escluse le categorie A/1, A/8, A/9), con un minimo di 1.000 €; imposte ipotecaria e catastale **50 € + 50 €**[^1][^2].",
            "**Da un'impresa con IVA**: IVA **4%** se prima casa, **10%** per le altre abitazioni, **22%** per A/1, A/8, A/9; registro, ipotecaria e catastale fisse a **200 € ciascuna**[^1].",
          ],
        },
        "**Il prezzo-valore.** Tra persone fisiche, per abitazioni e pertinenze, il compratore può chiedere al notaio che le imposte si calcolino sul valore catastale invece che sul prezzo: rendita × 1,05 × **120**, oppure × **110** se prima casa. Il prezzo vero va comunque scritto nell'atto; se viene nascosto, la sanzione va dal 50 al 100% della differenza[^1].",
        `Il conto voce per voce, con un esempio e il confronto con Svizzera, Germania e Austria, è nella guida [Costi d'acquisto a confronto](${v.guida("costi")}).`,
      ],
    },
    {
      id: "prima-casa",
      h2: "Prima casa e residenza entro 18 mesi",
      blocchi: [
        "L'agevolazione prima casa (registro 2% invece del 9%, o IVA 4% invece del 10%) non chiede la residenza al momento dell'acquisto, ma chi non risiede già nel comune deve **trasferirvi la residenza entro 18 mesi**, dichiarandolo nell'atto, a pena di decadenza[^1].",
        "Per chi compra una casa per le vacanze e resta residente all'estero, quindi, l'aliquota è il 9% (o l'IVA al 10%). Chi pensa di trasferirsi davvero sul lago lo valuti con un commercialista prima del rogito: la scelta va fatta nell'atto.",
      ],
    },
    {
      id: "dopo",
      h2: "Dopo il rogito: IMU e utenze",
      blocchi: [
        "Ogni anno si paga l'IMU al comune. A Orta San Giulio, per il 2026, l'aliquota sugli «altri fabbricati», cioè le seconde case, è **0,96%**; per l'abitazione principale nelle categorie A/1, A/8 e A/9 è 0,55% (delibera del 23 dicembre 2025)[^9]. Gli altri comuni del lago hanno delibere proprie, che qui non abbiamo letto.",
        "La TARI (rifiuti) è una tariffa comunale: per Orta non l'abbiamo verificata.",
        `Se pensate di affittare la casa quando non la usate, le regole sono nella guida [Affittare la casa sul lago](${v.guida("affitti")}).`,
      ],
    },
    {
      id: "noi",
      h2: "Che cosa facciamo noi, e che cosa no",
      blocchi: [
        "In Italia TriesteVillas srl è un'agenzia immobiliare iscritta e sul lago d'Orta **può già mediare**. Oggi però la Private Collection del lago ha **0 case**: nessuna di queste pagine è un annuncio, e non vi mostreremo case che non abbiamo.",
        "Quello che non facciamo in nessun caso: consulenza legale o fiscale. Per quella servono un notaio, un commercialista o un avvocato scelti da voi.",
      ],
    },
  ],
  nonSappiamo: [
    "Lo stato della reciprocità per cittadini svizzeri, britannici e statunitensi: la tabella del Ministero degli Esteri non era leggibile senza aggirare un controllo anti-bot.",
    "Se la raccolta degli usi del Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) preveda la stessa caparra e la stessa provvigione di quella di Novara.",
    "Un compenso notarile tipico per una compravendita sul lago: non esiste una tariffa e non abbiamo trovato una fonte ufficiale che dia una media.",
    "Tempi e modulistica per il codice fiscale nei singoli consolati.",
    "Le aliquote IMU 2026 dei comuni del lago diversi da Orta San Giulio e la TARI di Orta.",
    "Se la raccolta degli usi di Novara del 2005 sia stata aggiornata da allora.",
  ],
  faq: [
    { d: "Uno straniero può comprare casa in Italia?", r: "Sì. I cittadini dell'Unione europea comprano alle stesse condizioni degli italiani. Per gli altri vale la condizione di reciprocità dell'art. 16 delle preleggi, che il notaio verifica sulle tabelle del Ministero degli Esteri. Per Svizzera, Regno Unito e Stati Uniti non l'abbiamo verificata sulla fonte ufficiale." },
    { d: "Serve la residenza in Italia per comprare?", r: "No. La residenza serve solo per l'agevolazione prima casa, che chiede di trasferirla nel comune entro 18 mesi dall'acquisto." },
    { d: "Quanto si versa di caparra sul lago d'Orta?", r: "In provincia di Novara l'uso prevede una caparra non inferiore al 10% del prezzo al compromesso, salvo patto diverso. È un uso raccolto dalla Camera di Commercio nel 2005, non un obbligo di legge." },
    { d: "Chi sceglie il notaio?", r: "Secondo gli usi della provincia di Novara, il compratore: le spese dell'atto sono a suo carico. Il compenso si concorda, perché le tariffe notarili sono state abolite nel 2012." },
    { d: "Quali imposte paga chi compra da un privato?", r: "Imposta di registro del 9% (2% se prima casa), con un minimo di 1.000 €, più 50 € di imposta ipotecaria e 50 € di catastale. Con il prezzo-valore la base è il valore catastale: rendita × 1,05 × 120 (× 110 se prima casa)." },
    { d: "Posso avere l'agevolazione prima casa se resto residente all'estero?", r: "No, salvo trasferire la residenza nel comune entro 18 mesi dall'acquisto, impegno che va dichiarato nell'atto." },
    { d: "OrtaVillas può mostrarmi case in vendita sul lago?", r: "Oggi no: la Private Collection del lago ha 0 case. TriesteVillas srl è un'agenzia iscritta e sul lago può mediare; iscrivendovi alla Private Collection vi avvisiamo quando entra la prima casa." },
  ],
};
