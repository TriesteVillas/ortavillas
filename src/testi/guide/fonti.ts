// Le fonti di ogni guida, numerate. L'ordine è il numero del rimando [^n] nei testi, in tutte
// e quattro le lingue: si aggiunge in coda, non si riordina. Etichette nella lingua del documento.
// Lette tutte il 6 ottobre 2026 salvo `letta` diversa (vedi ~/dev/.wt/ortavillas/dati/fatti.md e FONTI.md).
import type { GuidaId } from "@/content/indice";
import type { Fonte } from "./tipi";

const ADE_GUIDA: Fonte = { etichetta: "Agenzia delle Entrate: «L'acquisto della casa: le imposte e le agevolazioni fiscali», marzo 2024", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/3949367/Guida_acquisto__Casa_imposte_e_agevolazioni.pdf/2acccb92-af1e-e9ed-1cb8-754a3b8c5a1e" };
const ADE_2014: Fonte = { etichetta: "Agenzia delle Entrate: comunicato del 21 febbraio 2014 sulla tassazione degli atti immobiliari dal 1° gennaio 2014", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/314437/CS+21022014+nuova+tassazione+atti+immobiliari_022_Com+st+Circolare+immobili+21+02+14.pdf/9c13b067-34ed-248e-9e00-635ac39d5234/-/cs-21022014-nuova-tassazione-atti-immobiliari" };
const USI_NOVARA: Fonte = { etichetta: "Camera di Commercio di Novara: «Raccolta provinciale degli usi», 2005, Titolo III, Capo 1", url: "https://www.pno.camcom.it/sites/default/files/contenuto_redazione/Tutela%20%20imprese%20e%20consumatori/Usi/usi_Novara.pdf" };
const CNN: Fonte = { etichetta: "Consiglio Nazionale del Notariato: disciplinare di vendita che richiama l'art. 9 del D.L. 1/2012 (tariffe professionali abolite)", url: "https://www.notariato.it/wp-content/uploads/DISCIPLINARE-VENDITA-IMMOBILI-ANBSC-17_04_2024-45.pdf", parziale: true };
const IMU_ORTA: Fonte = { etichetta: "MEF, Dipartimento delle Finanze: prospetto aliquote IMU 2026 di Orta San Giulio (delibera C.C. n. 37 del 23/12/2025)", url: "https://www1.finanze.gov.it/finanze2/dipartimentopolitichefiscali/fiscalitalocale/nuova_imu/download_lib.php?key=0900f23080cce756&nome=16820_DIMUNIC-12no26g134d.pdf" };
const OSRM: Fonte = { etichetta: "OSRM, server pubblico router.project-osrm.org, profilo auto, dati © OpenStreetMap contributors (ODbL): tempi a flusso libero misurati il 6/10/2026", url: "https://router.project-osrm.org/" };
const OMI: Fonte = { etichetta: "Agenzia delle Entrate – OMI: Banca dati delle quotazioni immobiliari, 2° semestre 2025 e 2° semestre 2024 (CC BY 4.0)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm" };
const LEFRECCE: Fonte = { etichetta: "Trenitalia, motore orari lefrecce.it: soluzioni da Orta-Miasino per il 7 e il 10 ottobre 2026 (interrogazione del 6/10/2026)", url: "https://www.lefrecce.it/" };
const WIKI_FERROVIA: Fonte = { etichetta: "Wikipedia: «Ferrovia Domodossola-Novara»", url: "https://it.wikipedia.org/wiki/Ferrovia_Domodossola-Novara", secondaria: true };
const NLO_INVERNO: Fonte = { etichetta: "Navigazione Lago d'Orta: orario invernale 2026, «Linea Rossa» dal 4 al 31 ottobre (PDF)", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf" };
const NLO_HOME: Fonte = { etichetta: "Navigazione Lago d'Orta s.r.l.: servizio pubblico di linea, flotta e stagione", url: "https://www.navigazionelagodorta.it/" };
const NLO_2025: Fonte = { etichetta: "Navigazione Lago d'Orta: orari dal 1° aprile 2025 (PDF)", url: "https://www.navigazionelagodorta.it/userdata/documenti/ORARI-DAL-1-APRILE-2025.pdf" };

export const FONTI: Record<GuidaId, Fonte[]> = {
  comprare: [
    ADE_GUIDA, // 1
    ADE_2014, // 2
    USI_NOVARA, // 3
    { etichetta: "Ministero degli Affari Esteri: pagina «Codice fiscale» dei servizi consolari", url: "https://www.esteri.it/it/servizi-consolari-e-visti/italiani-all-estero/codice_fiscale/", parziale: true }, // 4
    { etichetta: "Brocardi: art. 16 delle Disposizioni sulla legge in generale (preleggi), condizione di reciprocità", url: "https://brocardi.it/preleggi/capo-ii/art16.html", secondaria: true, parziale: true }, // 5
    { etichetta: "Notaionline: acquisto della casa da parte di stranieri non residenti", url: "https://notaionline.it/guida/acquisto-casa-stranieri-non-residenti/", secondaria: true, parziale: true }, // 6
    { etichetta: "Fiscomania: acquisto di immobili in Italia da parte di cittadini svizzeri", url: "https://fiscomania.com/acquisto-immobili-italia-cittadini-svizzeri/", secondaria: true, parziale: true }, // 7
    CNN, // 8
    IMU_ORTA, // 9
  ],
  costi: [
    ADE_GUIDA, // 1
    ADE_2014, // 2
    USI_NOVARA, // 3
    CNN, // 4
    IMU_ORTA, // 5
    { etichetta: "oesterreich.gv.at: «Nebenkosten beim Wohnungs- und Grundstückskauf», letzte Aktualisierung 01.08.2026", url: "https://www.oesterreich.gv.at/themen/bauen_und_wohnen/wohnen/8/Seite.210150.html" }, // 6
    { etichetta: "Bundesministerium der Justiz, gesetze-im-internet.de: § 11 Grunderwerbsteuergesetz (Steuersatz)", url: "https://www.gesetze-im-internet.de/grestg_1983/__11.html" }, // 7
    { etichetta: "Haufe: «Grunderwerbsteuersatz klettert in NRW und im Saarland auf 6,5 %»", url: "https://www.haufe.de/steuern/gesetzgebung-politik/grunderwerbsteuersatz-klettert-auf-65_168_288266.html", secondaria: true, parziale: true }, // 8
    { etichetta: "finanz-tools.de: Grunderwerbsteuer, Tabelle der Bundesländer", url: "https://www.finanz-tools.de/grunderwerbsteuer/bundeslaender-tabelle", secondaria: true, parziale: true }, // 9
    { etichetta: "Repubblica e Cantone Ticino: Legge sulle tariffe per le operazioni nel Registro fondiario del 16 ottobre 2006, art. 11 (LexFind)", url: "https://www.lexfind.ch/tolv/127223/it" }, // 10
  ],
  "est-ovest": [
    OSRM, // 1
    { etichetta: "AWS Terrain Tiles (EU-DEM, SRTM; Mapzen): modello del terreno usato per il calcolo del sole, nostro calcolo con le formule NOAA", url: "https://registry.opendata.aws/terrain-tiles/" }, // 2
    OMI, // 3
    { etichetta: "ISPRA, piattaforma IdroGEO: indicatori di pericolosità da frana e idraulica per comune (CC BY 4.0)", url: "https://idrogeo.isprambiente.it/app/" }, // 4
    NLO_INVERNO, // 5
    WIKI_FERROVIA, // 6
    LEFRECCE, // 7
    { etichetta: "Ministero dell'Istruzione e del Merito: Anagrafe scuole statali a.s. 2026/27 (IODL 2.0)", url: "https://dati.istruzione.it/opendata/" }, // 8
    { etichetta: "ASL NO: avviso sul BUR Piemonte del 1/4/2026 (P.O. SS. Trinità di Borgomanero, DEA di I livello)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf" }, // 9
    { etichetta: "ASL VCO: prolungamento d'apertura del Punto di Primo Intervento di Omegna, 12/8/2026", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/" }, // 10
    NLO_HOME, // 11
  ],
  "orta-maggiore": [
    OSRM, // 1
    { etichetta: "Regione Piemonte: Piano di Tutela delle Acque, monografia L3 «Orta o Cusio» (rev. 03, 2007)", url: "https://www.regione.piemonte.it/web/sites/default/files/media/documenti/2018-11/l3_orta.pdf" }, // 2
    { etichetta: "Mosello R., Lami A. (CNR): «Climate change and related effects on water quality: examples from Lake Maggiore (Italy)», 2011", url: "https://iris.cnr.it/handle/20.500.14243/268150" }, // 3
    { etichetta: "EEA, Discodata WISE_BWD: classi di qualità delle acque di balneazione 2022–2024 per i 16 punti del lago d'Orta", url: "https://discodata.eea.europa.eu/" }, // 4
    { etichetta: "ARPA Piemonte: «Stato di qualità dei laghi in Piemonte», relazione tecnica triennio 2020–2022", url: "https://old-static.arpa.piemonte.it/approfondimenti/temi-ambientali/acqua/acque-superficiali-laghi/Relazione%20triennio_2020_2022%20LAGHI.pdf" }, // 5
    { etichetta: "ARPA Piemonte, Dip. Nord-est: «Da 30 anni al fianco dell'ambiente: i laghi», 2 luglio 2026", url: "https://www.arpa.piemonte.it/media/9636" }, // 6
    { etichetta: "ANSA: cinque anni dalla tragedia del Mottarone, 23/5/2026", url: "https://www.ansa.it/piemonte/notizie/2026/05/23/cinque-anni-da-tragedia-del-mottarone-qua-una-pesante-ombra-di-morte_b8d62fdc-a99e-4445-a47d-a5080c82bb40.html", secondaria: true }, // 7
    { etichetta: "Stresa Turismo: «Funivia Stresa-Alpino-Mottarone: la funivia è chiusa»", url: "https://www.stresaturismo.it/it/cosa-fare/funivia-stresa-alpino-mottarone-la-funivia-e-chiusa/" }, // 8
    { etichetta: "Regione Piemonte: accordo per la nuova funivia del Mottarone (24/11/2023)", url: "https://www.regione.piemonte.it/web/pinforma/notizie/accordo-per-nuova-funivia-mottarone" }, // 9
    OMI, // 10
    { etichetta: "Bonacina C. (CNR Pallanza): «Lake Orta: the undermining of an ecosystem», J. Limnol. 60(1), 2001", url: "https://jlimnol.it/jlimnol/article/download/jlimnol.2001.53/402/803" }, // 11
  ],
  arrivare: [
    OSRM, // 1
    { etichetta: "Ufficio federale dell'imposizione dei dazi e della sicurezza dei confini (UDSC/BAZG): contrassegno autostradale, due tipi", url: "https://www.bazg.admin.ch/it/contrassegno-autostrade-svizzere-due-tipi" }, // 2
    LEFRECCE, // 3
    WIKI_FERROVIA, // 4
    NLO_HOME, // 5
    NLO_INVERNO, // 6
    NLO_2025, // 7
  ],
  quotazioni: [
    OMI, // 1
    { etichetta: "Agenzia delle Entrate: Forniture dati OMI (area riservata)", url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/omi/forniture-dati-omi" }, // 2
    { etichetta: "Agenzia delle Entrate: Consultazione valori immobiliari dichiarati (pagina aggiornata il 19/6/2026)", url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/omi/consultazione-valori-immobiliari-dichiarati" }, // 3
    { etichetta: "Agenzia delle Entrate – OMI: Volumi di compravendita, file RESIDENZIALE 2011–2024 (definitivo) e 2025–2026 (provvisorio)", url: "https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/omi/banche-dati/volumi-di-compravendita" }, // 4
    ADE_GUIDA, // 5
  ],
  affitti: [
    { etichetta: "Regione Piemonte: Regolamento D.P.G.R. 8 giugno 2018 n. 4/R, adempimenti per le locazioni turistiche (BUR n. 24 S2 del 14/6/2018)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2018/24/attach/aa_aa_regione%20piemonte%20-%20regolamento_2018-06-11_63597.pdf" }, // 1
    { etichetta: "Regione Piemonte: avviso agli operatori sull'obbligo di pubblicare il CIR (L.R. 3/2023, art. 124)", url: "https://www.regione.piemonte.it/web/media/33307/download" }, // 2
    { etichetta: "Quality Travel: «Parte l'obbligo del CIN dal 1° gennaio», 31/12/2024", url: "https://www.qualitytravel.it/parte-lobbligo-del-cin-dal-1-gennaio-a-che-punto-siamo-e-cosa-rischia-chi-non-lo-espone/157164", secondaria: true }, // 3
    { etichetta: "MySolution: «Locazioni brevi 2026, aggiornata la guida delle Entrate», 11/5/2026", url: "https://www.mysolution.it/fisco/informazioni/news/2026/05/11/locazioni-brevi-2026-aggiornata-la-guida-delle-entrate/", secondaria: true }, // 4
    { etichetta: "LavoriPubblici.it: locazioni brevi 2026, limite dei due immobili, cedolare e intermediari", url: "https://www.lavoripubblici.it/news/locazioni-brevi-2026-guida-fisco-limite-2-immobili-cedolare-intermediari-37947", secondaria: true }, // 5
    { etichetta: "Chekin: comunicazione degli ospiti alla Questura (Alloggiati Web, art. 109 TULPS)", url: "https://chekin.com/it/blog/comunicazione-alla-questura-ospiti-guida/", secondaria: true, parziale: true }, // 6
  ],
};
