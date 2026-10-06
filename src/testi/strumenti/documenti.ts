// Strumento 07 — I documenti per vendere. Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";
import type { Fase } from "@/lib/strumenti/documenti";
import { plSl } from "./comune";

type Voce = { titolo: string; termine?: string; testo: string; dove: string };

export type TestiDocumenti = {
  titolo: string; descrizione: string; h1: string; lead: string;
  lista: string; stampa: string; ricomincia: string; soloBrowser: string;
  stati: { pronto: string; fare: string; no: string }; statoDi: (v: string) => string;
  riassunto: (pronti: number, aperti: number) => string;
  fasi: Record<Fase, [string, string]>;
  dove: string; fonteLetta: string; nonVerificato: string;
  voci: Record<string, Voce>;
  metodo: string[]; nettoLink: string;
};

export const DOCUMENTI: Record<Lingua, TestiDocumenti> = {
  it: {
    titolo: "Documenti per vendere casa sul lago d'Orta",
    descrizione: "La lista di controllo di chi vende in Italia: visura e planimetria catastale, conformità catastale e urbanistica, agibilità, APE, provenienza, impianti, condominio. Con dove si chiedono e le fonti.",
    h1: "I documenti per vendere, nell'ordine in cui servono.",
    lead: "Tredici voci, dalla visura catastale al rogito. Per ognuna: che cos'è, dove si chiede, la fonte. Dove non abbiamo trovato una fonte ufficiale da rileggere lo scriviamo accanto, in rosso.",
    lista: "La vostra lista", stampa: "Stampa la lista", ricomincia: "Ricomincia", soloBrowser: "Le vostre spunte restano in questo browser: noi non le riceviamo.",
    stati: { pronto: "ce l'ho", fare: "da fare", no: "non serve" }, statoDi: (v) => `Stato di: ${v}`,
    riassunto: (p, a) => `${p === 0 ? "Nessun documento pronto" : p === 1 ? "Un documento pronto" : `${p} documenti pronti`}, ${a === 0 ? "nessuno ancora aperto" : a === 1 ? "uno ancora da preparare o da controllare" : `${a} ancora da preparare o da controllare`}.`,
    fasi: {
      prima: ["Prima di mettere in vendita", "Quello che chi compra, il suo notaio e la sua banca chiedono per primo. L'APE serve già per l'annuncio."],
      compromesso: ["Prima del compromesso", "Le verifiche che si fanno prima di firmare il preliminare e di ricevere la caparra."],
      rogito: ["Al rogito", "Quello che serve il giorno della firma dal notaio."],
    },
    dove: "Dove", fonteLetta: "fonte letta il", nonVerificato: "non verificato su fonte ufficiale",
    voci: {
      visura: { titolo: "Visura catastale", testo: "Intestatari, categoria, classe, consistenza e rendita di ogni unità. È il primo documento che il notaio controlla.", dove: "Agenzia delle Entrate, servizio «Consultazione personale»: gratis per i propri immobili, con SPID, CIE o CNS. Oppure a uno sportello del catasto." },
      planimetria: { titolo: "Planimetria catastale", testo: "Il disegno dell'unità depositato al catasto. Deve corrispondere a com'è la casa oggi.", dove: "Stesso servizio «Consultazione personale», riservato agli intestatari e ai loro delegati." },
      conformitaCatastale: { titolo: "Conformità catastale", testo: "Nell'atto chi vende dichiara che dati catastali e planimetria corrispondono allo stato di fatto; la dichiarazione può essere sostituita dall'attestazione di un tecnico. Se non corrispondono, si aggiorna il catasto prima del rogito.", dove: "Un geometra, architetto o ingegnere confronta planimetria e casa e, se serve, presenta l'aggiornamento." },
      urbanistica: { titolo: "Conformità urbanistica e titoli edilizi", testo: "Licenze, concessioni, permessi, condoni: gli estremi vanno citati nell'atto per le costruzioni iniziate dopo il 17 marzo 1985, pena la nullità (art. 46 D.P.R. 380/2001). Un tecnico verifica che la casa corrisponda a ciò che è stato autorizzato.", dove: "Ufficio tecnico (edilizia privata) del comune, con una richiesta di accesso agli atti." },
      agibilita: { titolo: "Agibilità", testo: "Oggi è una segnalazione certificata che attesta sicurezza, igiene e conformità dell'edificio (art. 24 D.P.R. 380/2001). Per le case vecchie può mancare: va detto a chi compra.", dove: "Ufficio tecnico del comune; per una nuova segnalazione, un tecnico abilitato." },
      ape: { titolo: "Attestato di prestazione energetica (APE)", testo: "Serve per l'annuncio e va allegato al rogito: senza, la sanzione va da 3.000 a 18.000 €, in solido fra le parti. Vale al massimo 10 anni.", dove: "Un certificatore abilitato lo redige e lo trasmette al SIPEE della Regione Piemonte, dove si può consultare." },
      provenienza: { titolo: "Atto di provenienza", testo: "Come siete diventati proprietari: atto d'acquisto, donazione, dichiarazione di successione con l'accettazione dell'eredità. Il notaio di chi compra ricostruisce i passaggi di proprietà.", dove: "Copia dal notaio che ha rogato l'atto, oppure ispezione ipotecaria dal servizio «Consultazione personale»." },
      ipoteche: { titolo: "Ipoteche e mutuo residuo", testo: "Se c'è un mutuo, l'ipoteca si cancella con l'estinzione, di solito al rogito, col prezzo pagato da chi compra.", dove: "Ispezione ipotecaria dal servizio «Consultazione personale»; il conteggio di estinzione lo dà la banca." },
      impianti: { titolo: "Certificazioni degli impianti", testo: "Le dichiarazioni di conformità di impianto elettrico, gas e riscaldamento (D.M. 37/2008), se esistono. Si possono anche escludere per accordo nell'atto: dipende da chi compra.", dove: "Gli installatori che hanno fatto gli impianti; per quelli vecchi, una dichiarazione di rispondenza di un tecnico." },
      condominio: { titolo: "Spese condominiali, se c'è un condominio", testo: "Spese ordinarie e straordinarie già deliberate, regolamento, eventuali liti. Chi compra può rispondere delle spese degli ultimi anni: meglio averle in chiaro.", dove: "L'amministratore di condominio, con una dichiarazione sulla situazione dei pagamenti." },
      affitti: { titolo: "Affitti in corso e CIN", testo: "Contratti di locazione in essere; per gli affitti brevi, il CIN nazionale e il CIR regionale, che chi compra dovrà richiedere a suo nome.", dove: "I vostri contratti registrati; il CIN alla Banca dati delle strutture ricettive del Ministero del Turismo." },
      identita: { titolo: "Documento d'identità e codice fiscale di tutti i venditori", testo: "Firmano tutti gli intestatari, o chi ha una procura notarile. Chi vive all'estero deve avere un codice fiscale italiano.", dove: "Il codice fiscale si chiede al consolato italiano del paese di residenza o a un ufficio dell'Agenzia delle Entrate, anche per delega." },
      plusvalenza: { titolo: "Scelta sulla plusvalenza, se vendete entro 5 anni", testo: "Se la plusvalenza è tassabile, al rogito si può chiedere al notaio di applicare l'imposta sostitutiva del 26%, che riscuote lui.", dove: "Il notaio, al rogito, con l'atto d'acquisto e le fatture dei costi documentati." },
    },
    metodo: [
      "Le voci seguono l'ordine in cui di solito servono: prima di mettere in vendita, prima del compromesso, al rogito. Ogni voce dice dove si chiede e porta la sua fonte con la data in cui l'abbiamo letta.",
      "È una lista di controllo, non un'istruttoria: non sostituisce il notaio, il geometra né l'avvocato. Le voci su conformità urbanistica, agibilità, impianti, condominio, affitti e codice fiscale le abbiamo lette solo su fonti secondarie o in sintesi: sono segnate «non verificato su fonte ufficiale», e la regola esatta va chiesta a un professionista.",
      "Le spunte restano nel vostro browser (localStorage) e non arrivano a noi: «Ricomincia» le cancella.",
    ],
    nettoLink: "Quanto resta dalla vendita, dopo imposte e provvigione",
  },
  en: {
    titolo: "Documents to sell a home on Lake Orta",
    descrizione: "The seller's checklist in Italy: cadastral record and floor plan, cadastral and planning compliance, habitability, energy certificate, title, systems, condominium. With where to get them and the sources.",
    h1: "The documents to sell, in the order you need them.",
    lead: "Thirteen items, from the cadastral record to the deed. For each: what it is, where to get it, the source. Where we found no official source to re-read, we say so next to it, in red.",
    lista: "Your list", stampa: "Print the list", ricomincia: "Start again", soloBrowser: "Your ticks stay in this browser: we do not receive them.",
    stati: { pronto: "I have it", fare: "to do", no: "not needed" }, statoDi: (v) => `Status of: ${v}`,
    riassunto: (p, a) => `${p === 0 ? "No document ready" : p === 1 ? "One document ready" : `${p} documents ready`}, ${a === 0 ? "none still open" : a === 1 ? "one still to prepare or check" : `${a} still to prepare or check`}.`,
    fasi: {
      prima: ["Before putting it on the market", "What the buyer, their notary and their bank ask for first. The energy certificate is already needed for the listing."],
      compromesso: ["Before the preliminary contract", "The checks made before signing the preliminary contract and receiving the deposit."],
      rogito: ["At the deed", "What you need on the day of signing at the notary."],
    },
    dove: "Where", fonteLetta: "source read on", nonVerificato: "not verified on an official source",
    voci: {
      visura: { titolo: "Cadastral record", termine: "visura catastale", testo: "Owners, category, class, size and cadastral income of each unit. It is the first document the notary checks.", dove: "Revenue Agency, «Consultazione personale» service: free for your own properties, with SPID, CIE or CNS. Or at a land registry office." },
      planimetria: { titolo: "Cadastral floor plan", termine: "planimetria catastale", testo: "The drawing of the unit filed with the land registry. It must match the home as it is today.", dove: "The same «Consultazione personale» service, reserved for owners and their delegates." },
      conformitaCatastale: { titolo: "Cadastral compliance", termine: "conformità catastale", testo: "In the deed the seller declares that cadastral data and floor plan match the actual state; the declaration can be replaced by a technician's certificate. If they do not match, the registry is updated before the deed.", dove: "A surveyor, architect or engineer compares plan and home and, if needed, files the update." },
      urbanistica: { titolo: "Planning compliance and building permits", termine: "conformità urbanistica", testo: "Licences, permits, amnesties: their references must be cited in the deed for buildings begun after 17 March 1985, or the deed is void (art. 46 D.P.R. 380/2001). A technician checks that the home matches what was authorised.", dove: "The municipality's building office (edilizia privata), with a request for access to records." },
      agibilita: { titolo: "Habitability", termine: "agibilità", testo: "Today it is a certified notice attesting the building's safety, hygiene and compliance (art. 24 D.P.R. 380/2001). Older homes may lack it: the buyer must be told.", dove: "The municipality's building office; for a new notice, a qualified technician." },
      ape: { titolo: "Energy performance certificate", termine: "APE", testo: "Needed for the listing and attached to the deed: without it the fine ranges from €3,000 to €18,000, jointly on both parties. Valid for up to 10 years.", dove: "A qualified assessor draws it up and files it with the Piedmont Region's SIPEE system, where it can be looked up." },
      provenienza: { titolo: "Title deed", termine: "atto di provenienza", testo: "How you became owner: purchase deed, gift, inheritance declaration with acceptance of the estate. The buyer's notary traces the previous transfers of ownership.", dove: "A copy from the notary who drew up the deed, or a mortgage-register search from the «Consultazione personale» service." },
      ipoteche: { titolo: "Mortgages and outstanding loan", termine: "ipoteche", testo: "If there is a loan, the mortgage is cancelled when it is repaid, usually at the deed, with the buyer's payment.", dove: "Mortgage-register search from the «Consultazione personale» service; the bank provides the payoff statement." },
      impianti: { titolo: "Systems certificates", termine: "dichiarazioni di conformità", testo: "Compliance declarations for electrical, gas and heating systems (D.M. 37/2008), if they exist. They can also be waived by agreement in the deed: it depends on the buyer.", dove: "The installers who fitted the systems; for old ones, a technician's statement of adequacy." },
      condominio: { titolo: "Condominium charges, if there is a condominium", termine: "spese condominiali", testo: "Ordinary and extraordinary charges already approved, rules, any disputes. The buyer can be liable for recent years' charges: better to have them clear.", dove: "The condominium administrator, with a statement on the payment position." },
      affitti: { titolo: "Current lettings and CIN", termine: "CIN", testo: "Existing tenancy contracts; for short lets, the national CIN and the regional CIR, which the buyer will have to request in their own name.", dove: "Your registered contracts; the CIN from the Tourism Ministry's database of accommodation." },
      identita: { titolo: "ID and Italian tax code of every seller", termine: "codice fiscale", testo: "All registered owners sign, or someone with a notarial power of attorney. Those living abroad need an Italian tax code.", dove: "The tax code is requested from the Italian consulate of your country of residence or from a Revenue Agency office, also by proxy." },
      plusvalenza: { titolo: "Capital gains choice, if you sell within 5 years", termine: "plusvalenza", testo: "If the gain is taxable, at the deed you can ask the notary to apply the 26% substitute tax, which the notary collects.", dove: "The notary, at the deed, with the purchase deed and invoices for documented costs." },
    },
    metodo: [
      "The items follow the order in which they are usually needed: before marketing, before the preliminary contract, at the deed. Each says where to get it and carries its source with the date we read it.",
      "It is a checklist, not a legal review: it does not replace the notary, the surveyor or the lawyer. The items on planning compliance, habitability, systems, condominium, lettings and tax code we read only on secondary sources or in summaries: they are marked \"not verified on an official source\", and the exact rule must be asked of a professional.",
      "Your ticks stay in your browser (localStorage) and do not reach us: \"Start again\" clears them.",
    ],
    nettoLink: "What is left from the sale, after tax and commission",
  },
  de: {
    titolo: "Unterlagen für den Hausverkauf am Ortasee",
    descrizione: "Die Checkliste des Verkäufers in Italien: Katasterauszug und Grundriss, Kataster- und Baukonformität, Bewohnbarkeit, Energieausweis, Herkunftsurkunde, Anlagen, Eigentümergemeinschaft. Mit Bezugsstellen und Quellen.",
    h1: "Die Unterlagen für den Verkauf, in der Reihenfolge, in der sie gebraucht werden.",
    lead: "Dreizehn Punkte, vom Katasterauszug bis zur Urkunde. Für jeden: was er ist, wo man ihn bekommt, die Quelle. Wo wir keine amtliche Quelle zum Nachlesen gefunden haben, steht es daneben, in Rot.",
    lista: "Ihre Liste", stampa: "Liste drucken", ricomincia: "Neu beginnen", soloBrowser: "Ihre Häkchen bleiben in diesem Browser: Wir erhalten sie nicht.",
    stati: { pronto: "habe ich", fare: "zu erledigen", no: "nicht nötig" }, statoDi: (v) => `Status: ${v}`,
    riassunto: (p, a) => `${p === 0 ? "Keine Unterlage bereit" : p === 1 ? "Eine Unterlage bereit" : `${p} Unterlagen bereit`}, ${a === 0 ? "keine mehr offen" : a === 1 ? "eine noch vorzubereiten oder zu prüfen" : `${a} noch vorzubereiten oder zu prüfen`}.`,
    fasi: {
      prima: ["Vor dem Verkaufsstart", "Was Käufer, ihr Notar und ihre Bank zuerst verlangen. Der Energieausweis ist schon für die Anzeige nötig."],
      compromesso: ["Vor dem Vorvertrag", "Die Prüfungen vor der Unterschrift unter den Vorvertrag und vor der Anzahlung."],
      rogito: ["Bei der Urkunde", "Was am Tag der Unterschrift beim Notar gebraucht wird."],
    },
    dove: "Wo", fonteLetta: "Quelle gelesen am", nonVerificato: "nicht an amtlicher Quelle geprüft",
    voci: {
      visura: { titolo: "Katasterauszug", termine: "visura catastale", testo: "Eigentümer, Kategorie, Klasse, Größe und Katasterertrag jeder Einheit. Das erste Dokument, das der Notar prüft.", dove: "Agenzia delle Entrate, Dienst „Consultazione personale“: kostenlos für eigene Immobilien, mit SPID, CIE oder CNS. Oder an einem Katasterschalter." },
      planimetria: { titolo: "Katastergrundriss", termine: "planimetria catastale", testo: "Die beim Kataster hinterlegte Zeichnung der Einheit. Sie muss dem heutigen Zustand entsprechen.", dove: "Derselbe Dienst „Consultazione personale“, nur für Eigentümer und Bevollmächtigte." },
      conformitaCatastale: { titolo: "Katasterkonformität", termine: "conformità catastale", testo: "In der Urkunde erklärt der Verkäufer, dass Katasterdaten und Grundriss dem tatsächlichen Zustand entsprechen; die Erklärung kann durch die Bescheinigung eines Technikers ersetzt werden. Stimmt es nicht, wird das Kataster vor der Urkunde berichtigt.", dove: "Ein Geometer, Architekt oder Ingenieur vergleicht Grundriss und Haus und reicht bei Bedarf die Berichtigung ein." },
      urbanistica: { titolo: "Baukonformität und Baugenehmigungen", termine: "conformità urbanistica", testo: "Lizenzen, Genehmigungen, Amnestien: Ihre Angaben müssen bei Bauten mit Baubeginn nach dem 17. März 1985 in der Urkunde stehen, sonst ist sie nichtig (Art. 46 D.P.R. 380/2001). Ein Techniker prüft, ob das Haus dem Genehmigten entspricht.", dove: "Bauamt (edilizia privata) der Gemeinde, mit einem Antrag auf Akteneinsicht." },
      agibilita: { titolo: "Bewohnbarkeit", termine: "agibilità", testo: "Heute eine zertifizierte Meldung über Sicherheit, Hygiene und Konformität des Gebäudes (Art. 24 D.P.R. 380/2001). Bei alten Häusern kann sie fehlen: Das muss der Käufer erfahren.", dove: "Bauamt der Gemeinde; für eine neue Meldung ein befähigter Techniker." },
      ape: { titolo: "Energieausweis", termine: "APE", testo: "Nötig für die Anzeige und als Anlage zur Urkunde: ohne ihn Bußgeld von 3.000 bis 18.000 €, gesamtschuldnerisch. Gültig höchstens 10 Jahre.", dove: "Ein zugelassener Aussteller erstellt ihn und übermittelt ihn an das SIPEE der Region Piemont, wo er abrufbar ist." },
      provenienza: { titolo: "Herkunftsurkunde", termine: "atto di provenienza", testo: "Wie Sie Eigentümer wurden: Kaufurkunde, Schenkung, Erbschaftserklärung mit Annahme der Erbschaft. Der Notar des Käufers verfolgt die früheren Eigentumsübertragungen.", dove: "Kopie beim Notar, der die Urkunde errichtet hat, oder Grundbuch-Recherche über den Dienst „Consultazione personale“." },
      ipoteche: { titolo: "Hypotheken und Restdarlehen", termine: "ipoteche", testo: "Bei einem Darlehen wird die Hypothek mit der Tilgung gelöscht, meist bei der Urkunde, mit dem Kaufpreis.", dove: "Hypothekenrecherche über „Consultazione personale“; die Ablöseberechnung liefert die Bank." },
      impianti: { titolo: "Anlagenzertifikate", termine: "dichiarazioni di conformità", testo: "Konformitätserklärungen für Elektro-, Gas- und Heizungsanlagen (D.M. 37/2008), sofern vorhanden. Sie können auch vertraglich ausgeschlossen werden: Es hängt vom Käufer ab.", dove: "Die Installateure der Anlagen; bei alten Anlagen eine Erklärung eines Technikers." },
      condominio: { titolo: "Gemeinschaftskosten, falls Eigentümergemeinschaft", termine: "spese condominiali", testo: "Bereits beschlossene ordentliche und außerordentliche Kosten, Hausordnung, etwaige Streitigkeiten. Der Käufer kann für Kosten der letzten Jahre haften: besser, sie sind geklärt.", dove: "Der Verwalter, mit einer Erklärung zum Zahlungsstand." },
      affitti: { titolo: "Laufende Vermietungen und CIN", termine: "CIN", testo: "Bestehende Mietverträge; bei Kurzzeitvermietung die nationale CIN und der regionale CIR, die der Käufer auf seinen Namen beantragen muss.", dove: "Ihre registrierten Verträge; die CIN bei der Datenbank der Unterkünfte des Tourismusministeriums." },
      identita: { titolo: "Ausweis und Steuernummer aller Verkäufer", termine: "codice fiscale", testo: "Alle eingetragenen Eigentümer unterschreiben, oder wer eine notarielle Vollmacht hat. Wer im Ausland lebt, braucht eine italienische Steuernummer.", dove: "Die Steuernummer beim italienischen Konsulat des Wohnsitzlandes oder bei einem Amt der Agenzia delle Entrate, auch per Vollmacht." },
      plusvalenza: { titolo: "Wahl zum Veräußerungsgewinn, bei Verkauf innerhalb von 5 Jahren", termine: "plusvalenza", testo: "Ist der Gewinn steuerpflichtig, kann man bei der Urkunde den Notar bitten, die Ersatzsteuer von 26 % anzuwenden, die er einzieht.", dove: "Der Notar, bei der Urkunde, mit Kaufurkunde und Rechnungen der belegten Kosten." },
    },
    metodo: [
      "Die Punkte folgen der Reihenfolge, in der sie meist gebraucht werden: vor dem Verkaufsstart, vor dem Vorvertrag, bei der Urkunde. Jeder sagt, wo man die Unterlage bekommt, und trägt seine Quelle mit dem Lesedatum.",
      "Es ist eine Checkliste, keine rechtliche Prüfung: Sie ersetzt weder Notar noch Geometer noch Anwalt. Die Punkte zu Baukonformität, Bewohnbarkeit, Anlagen, Eigentümergemeinschaft, Vermietung und Steuernummer haben wir nur in Sekundärquellen oder Zusammenfassungen gelesen: Sie sind als „nicht an amtlicher Quelle geprüft“ markiert, die genaue Regel erfragen Sie bei einer Fachperson.",
      "Ihre Häkchen bleiben in Ihrem Browser (localStorage) und erreichen uns nicht: „Neu beginnen“ löscht sie.",
    ],
    nettoLink: "Was vom Verkauf nach Steuern und Provision bleibt",
  },
  sl: {
    titolo: "Dokumenti za prodajo hiše ob jezeru Orta",
    descrizione: "Kontrolni seznam prodajalca v Italiji: katastrski izpisek in tloris, katastrska in urbanistična skladnost, uporabno dovoljenje, energetska izkaznica, izvorna listina, napeljave, etažna lastnina. Kje jih dobite in viri.",
    h1: "Dokumenti za prodajo, v vrstnem redu, v katerem jih potrebujete.",
    lead: "Trinajst postavk, od katastrskega izpiska do podpisa pri notarju. Za vsako: kaj je, kje jo dobite, vir. Kjer nismo našli uradnega vira, ki bi ga lahko preverili, to zapišemo zraven, z rdečo.",
    lista: "Vaš seznam", stampa: "Natisnite seznam", ricomincia: "Začnite znova", soloBrowser: "Vaše oznake ostanejo v tem brskalniku: mi jih ne prejmemo.",
    stati: { pronto: "imam", fare: "še urediti", no: "ni potrebno" }, statoDi: (v) => `Stanje: ${v}`,
    riassunto: (p, a) => `Pripravljeni: ${p} ${plSl(p, ["dokument", "dokumenta", "dokumenti", "dokumentov"])}; še odprto: ${a}.`,
    fasi: {
      prima: ["Pred začetkom prodaje", "Kar kupec, njegov notar in banka zahtevajo najprej. Energetska izkaznica je potrebna že za oglas."],
      compromesso: ["Pred predpogodbo (compromesso)", "Preverjanja pred podpisom predpogodbe in prejemom are."],
      rogito: ["Ob podpisu pri notarju (rogito)", "Kar potrebujete na dan podpisa pri notarju."],
    },
    dove: "Kje", fonteLetta: "vir prebran", nonVerificato: "ni preverjeno v uradnem viru",
    voci: {
      visura: { titolo: "Katastrski izpisek", termine: "visura catastale", testo: "Lastniki, kategorija, razred, velikost in katastrski donos vsake enote. Prvi dokument, ki ga preveri notar.", dove: "Davčna uprava, storitev »Consultazione personale«: brezplačno za lastne nepremičnine, s SPID, CIE ali CNS. Ali na katastrskem okencu." },
      planimetria: { titolo: "Katastrski tloris", termine: "planimetria catastale", testo: "Risba enote, vložena v katastru. Ujemati se mora z današnjim stanjem hiše.", dove: "Ista storitev »Consultazione personale«, le za lastnike in pooblaščence." },
      conformitaCatastale: { titolo: "Katastrska skladnost", termine: "conformità catastale", testo: "V pogodbi prodajalec izjavi, da se katastrski podatki in tloris ujemajo z dejanskim stanjem; izjavo lahko nadomesti potrdilo strokovnjaka. Če se ne ujemajo, se kataster posodobi pred podpisom.", dove: "Geometer, arhitekt ali inženir primerja tloris in hišo ter po potrebi vloži posodobitev." },
      urbanistica: { titolo: "Urbanistična skladnost in gradbena dovoljenja", termine: "conformità urbanistica", testo: "Licence, dovoljenja, legalizacije: za gradnje, začete po 17. marcu 1985, morajo biti njihovi podatki navedeni v pogodbi, sicer je nična (46. člen D.P.R. 380/2001). Strokovnjak preveri, ali se hiša ujema z dovoljenim.", dove: "Tehnični urad (edilizia privata) občine, z zahtevo za vpogled v spise." },
      agibilita: { titolo: "Uporabno dovoljenje", termine: "agibilità", testo: "Danes je to overjena prijava o varnosti, higieni in skladnosti stavbe (24. člen D.P.R. 380/2001). Pri starejših hišah lahko manjka: kupec mora to vedeti.", dove: "Tehnični urad občine; za novo prijavo pooblaščeni strokovnjak." },
      ape: { titolo: "Energetska izkaznica", termine: "APE", testo: "Potrebna je za oglas in mora biti priložena pogodbi: brez nje je globa od 3.000 do 18.000 €, solidarno za obe stranki. Velja največ 10 let.", dove: "Pooblaščeni izdajatelj jo pripravi in pošlje v sistem SIPEE dežele Piemont, kjer jo je mogoče preveriti." },
      provenienza: { titolo: "Izvorna listina", termine: "atto di provenienza", testo: "Kako ste postali lastnik: kupoprodajna pogodba, darilo, izjava o dedovanju s sprejemom dediščine. Kupčev notar preveri prejšnje prenose lastništva.", dove: "Kopija pri notarju, ki je sestavil listino, ali hipotekarni pregled prek storitve »Consultazione personale«." },
      ipoteche: { titolo: "Hipoteke in preostanek kredita", termine: "ipoteche", testo: "Če obstaja kredit, se hipoteka izbriše ob poplačilu, navadno ob podpisu, s kupnino.", dove: "Hipotekarni pregled prek »Consultazione personale«; izračun poplačila da banka." },
      impianti: { titolo: "Potrdila o napeljavah", termine: "dichiarazioni di conformità", testo: "Izjave o skladnosti električne, plinske in ogrevalne napeljave (D.M. 37/2008), če obstajajo. Z dogovorom v pogodbi jih je mogoče tudi izključiti: odvisno od kupca.", dove: "Inštalaterji, ki so napeljave izvedli; za stare izjava strokovnjaka." },
      condominio: { titolo: "Skupni stroški, če gre za etažno lastnino", termine: "spese condominiali", testo: "Že sprejeti redni in izredni stroški, pravilnik, morebitni spori. Kupec lahko odgovarja za stroške zadnjih let: bolje je, da so jasni.", dove: "Upravnik stavbe, z izjavo o stanju plačil." },
      affitti: { titolo: "Tekoči najemi in CIN", termine: "CIN", testo: "Veljavne najemne pogodbe; za kratkoročni najem nacionalni CIN in deželni CIR, ki ju bo moral kupec pridobiti na svoje ime.", dove: "Vaše registrirane pogodbe; CIN v podatkovni zbirki nastanitev ministrstva za turizem." },
      identita: { titolo: "Osebni dokument in davčna številka vseh prodajalcev", termine: "codice fiscale", testo: "Podpišejo vsi vpisani lastniki ali kdo z notarskim pooblastilom. Kdor živi v tujini, potrebuje italijansko davčno številko.", dove: "Davčno številko izda italijanski konzulat v državi prebivališča ali urad davčne uprave, tudi po pooblaščencu." },
      plusvalenza: { titolo: "Izbira glede kapitalskega dobička, če prodajate v 5 letih", termine: "plusvalenza", testo: "Če je dobiček obdavčljiv, lahko ob podpisu notarja prosite, naj uporabi nadomestni davek 26 %, ki ga pobere sam.", dove: "Notar, ob podpisu, s kupoprodajno pogodbo in računi dokumentiranih stroškov." },
    },
    metodo: [
      "Postavke sledijo vrstnemu redu, v katerem jih običajno potrebujete: pred začetkom prodaje, pred predpogodbo, ob podpisu. Vsaka pove, kje jo dobite, in nosi svoj vir z datumom, ko smo ga prebrali.",
      "To je kontrolni seznam, ne pravni pregled: ne nadomešča notarja, geometra ali odvetnika. Postavke o urbanistični skladnosti, uporabnem dovoljenju, napeljavah, etažni lastnini, najemih in davčni številki smo prebrali le v sekundarnih virih ali povzetkih: označene so »ni preverjeno v uradnem viru«, natančno pravilo pa preverite pri strokovnjaku.",
      "Vaše oznake ostanejo v vašem brskalniku (localStorage) in ne pridejo do nas: »Začnite znova« jih izbriše.",
    ],
    nettoLink: "Koliko ostane od prodaje po davkih in proviziji",
  },
};
