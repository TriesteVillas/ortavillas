// Il file delle regole degli strumenti. Le aliquote NON stanno nel codice dei calcolatori:
// stanno qui, ognuna con la sua fonte, l'URL, la data in cui l'abbiamo letta e se è
// verificata. Una voce con `verificato: false` resta fuori dai totali (che diventano «almeno»)
// e la pagina la conta da sola nella riga «n voci in verifica».
// Lettura delle fonti: 6 ottobre 2026 (vedi ~/dev/.wt/ortavillas/dati/fatti.md §12–13 e le
// verifiche aggiunte per Svizzera, Germania e Austria lo stesso giorno).

export const AGGIORNATO = "2026-10-06";

export type Fonte = { id: string; titolo: string; url?: string; data: string; verificato: boolean };

const f = (id: string, titolo: string, url: string | undefined, verificato = true, data = AGGIORNATO): Fonte => ({ id, titolo, url, data, verificato });

/** Tutte le fonti degli strumenti. I titoli sono quelli dei documenti, nella loro lingua. */
export const FONTI = {
  adeGuida: f("adeGuida", "Agenzia delle Entrate, «L'acquisto della casa: le imposte e le agevolazioni fiscali» (marzo 2024)", "https://www.agenziaentrate.gov.it/portale/documents/20143/3949367/Guida_acquisto__Casa_imposte_e_agevolazioni.pdf/2acccb92-af1e-e9ed-1cb8-754a3b8c5a1e"),
  ade2014: f("ade2014", "Agenzia delle Entrate, comunicato del 21/2/2014 sulla tassazione degli atti immobiliari dal 1/1/2014", "https://www.agenziaentrate.gov.it/portale/documents/20143/314437/CS+21022014+nuova+tassazione+atti+immobiliari_022_Com+st+Circolare+immobili+21+02+14.pdf/9c13b067-34ed-248e-9e00-635ac39d5234/-/cs-21022014-nuova-tassazione-atti-immobiliari"),
  notaioIt: f("notaioIt", "Compenso del notaio: tariffe abolite dall'art. 9 D.L. 1/2012, preventivo libero (letto solo in una sintesi di ricerca)", "https://www.notariato.it/", false),
  usiNovara: f("usiNovara", "Camera di Commercio di Novara, «Raccolta provinciale degli usi» 2005, Titolo III, Cap. 1", "https://www.pno.camcom.it/sites/default/files/contenuto_redazione/Tutela%20%20imprese%20e%20consumatori/Usi/usi_Novara.pdf"),
  chPue: f("chPue", "Sorveglianza dei prezzi (Preisüberwachung), «Handänderung von Liegenschaften», luglio 2024", "https://www.preisueberwacher.admin.ch/dam/pue/it/dokumente/studien/bericht_handaenderungen_liegenschaften.pdf.download.pdf/Bericht_Hand%C3%A4nderungen%20Liegenschaften.pdf"),
  chZh: f("chZh", "Kanton Zürich, Notariatsgebührenverordnung (NotGebV, LS 243), Gebührentarif Ziff. 1.1.1 e 2.2.1", "https://www.notes.zh.ch/appl/zhlex_r.nsf/WebView/1ACC7E02DB4CD001C1258A4C002F06E5/$File/243_9.3.09_123.pdf"),
  chMakler: f("chMakler", "Svizzera: provvigione del mediatore a carico di chi compra (nessuna fonte ufficiale trovata)", undefined, false),
  deGrest: f("deGrest", "Bayerisches Landesamt für Steuern, Grunderwerbsteuer: häufig gestellte Fragen", "https://www.lfst.bayern.de/steuerinfos/haeufig-gestellte-fragen/grunderwerbsteuer"),
  deGrestBund: f("deGrestBund", "Grunderwerbsteuergesetz, § 11 (Steuersatz)", "https://www.gesetze-im-internet.de/grestg_1983/__11.html"),
  deNotar: f("deNotar", "Germania: notaio e Grundbuch (GNotKG, tabella B degressiva): importo non riletto", "https://www.gesetze-im-internet.de/gnotkg/", false),
  deMakler: f("deMakler", "Germania: provvigione del compratore (BGB §§ 656c–656d): percentuale non fissata per legge", "https://www.gesetze-im-internet.de/bgb/__656c.html", false),
  atGrest: f("atGrest", "Bundesministerium für Finanzen (AT), Grunderwerbsteuer – Steuersatz (agg. 1/1/2026)", "https://www.bmf.gv.at/themen/steuern/immobilien-grundstuecke/grunderwerbsteuer/steuersatz.html"),
  atGrundbuch: f("atGrundbuch", "oesterreich.gv.at, Eintragung des Eigentumsrechts ins Grundbuch (agg. 1/8/2026)", "https://www.oesterreich.gv.at/en/themen/bauen_und_wohnen/grundstueckskauf_und_grundbuch/grundstueckskauf/Seite.200060"),
  atNotar: f("atNotar", "Austria: contratto, notaio o avvocato e fiduciario: nessuna tariffa riletta", undefined, false),
  atMakler: f("atMakler", "Austria: provvigione del compratore (Immobilienmaklerverordnung): non riletta", undefined, false),
  plusvalenza: f("plusvalenza", "Fiscomania, «Plusvalenza da cessione di immobili» (2/3/2025, fonte secondaria): art. 67 TUIR e imposta sostitutiva", "https://fiscomania.com/plusvalenza-da-cessione-di-immobili"),
  ance274: f("ance274", "ANCE, circolare 274/C/2024 sulla circolare AdE 13/E del 13/6/2024 (Superbonus e plusvalenze; sostitutiva 26%)", "https://ance.it/wp-content/uploads/allegati/Circolare_n%C2%B0274_C_2024.pdf"),
  costiInerenti: f("costiInerenti", "Art. 68 TUIR: quali costi si aggiungono al prezzo d'acquisto (non riletto sul testo)", undefined, false),
  apeSanzione: f("apeSanzione", "ANCE Enna, «Modificata la normativa in materia di APE» (7/1/2014): D.L. 145/2013, sanzione 3.000–18.000 €", "https://enna.ance.it/2014/01/07/modificata-la-normativa-in-materia-di-attestato-di-prestazione-energetica/?print=pdf"),
  apeCosto: f("apeCosto", "Costo di un APE: nessun tariffario ufficiale trovato", undefined, false),
  conformitaCosto: f("conformitaCosto", "Costo delle verifiche di conformità (tecnico): nessun tariffario ufficiale trovato", undefined, false),
  sipee: f("sipee", "Regione Piemonte, SIPEE – Sistema informativo per la prestazione energetica degli edifici", "https://servizi.regione.piemonte.it/catalogo/sistema-informativo-per-prestazione-energetica-degli-edifici-sipee"),
  adeConsultazione: f("adeConsultazione", "Agenzia delle Entrate, «Consultazione personale»: visure, planimetrie e ispezioni ipotecarie dei propri immobili", "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/consultazione-personale/consultazione-personale-online"),
  dpr380: f("dpr380", "D.P.R. 380/2001 (Testo unico edilizia), artt. 24 e 46: letti solo su fonti secondarie", "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2001-06-06;380", false),
  dm37: f("dm37", "D.M. 37/2008, dichiarazione di conformità degli impianti: non riletto", undefined, false),
  condominio: f("condominio", "Spese condominiali e cessione (art. 63 disp. att. c.c.): non riletto", undefined, false),
  codiceFiscale: f("codiceFiscale", "MAECI, «Codice fiscale» per chi risiede all'estero (vista solo in sintesi di ricerca)", "https://www.esteri.it/it/servizi-consolari-e-visti/italiani-all-estero/codice_fiscale/", false),
  cin: f("cin", "CIN per le locazioni turistiche (art. 13-ter D.L. 145/2023), riportato da Quality Travel (fonte secondaria)", "https://www.qualitytravel.it/parte-lobbligo-del-cin-dal-1-gennaio-a-che-punto-siamo-e-cosa-rischia-chi-non-lo-espone/157164", false),
  omi: f("omi", "Agenzia delle Entrate – OMI, Banca dati delle quotazioni immobiliari, 2° semestre 2025 (CC BY 4.0)", "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm"),
  osrm: f("osrm", "OSRM, tempi d'auto senza traffico (misurati da noi)", "https://project-osrm.org/"),
  copernicus: f("copernicus", "Copernicus GLO-90 e Terrain Tiles: quote e sole sul rilievo (calcolo nostro)", "https://registry.opendata.aws/terrain-tiles/"),
  istat: f("istat", "ISTAT, popolazione residente al 1° gennaio 2025", "https://demo.istat.it/"),
  osm: f("osm", "OpenStreetMap: stazioni e imbarcaderi (ODbL)", "https://www.openstreetmap.org/"),
} as const satisfies Record<string, Fonte>;
export type FonteId = keyof typeof FONTI;

// ── Italia, chi compra ────────────────────────────────────────────────
export const IT = {
  registro: 9, registroPrima: 2, registroMin: 1000, fonteRegistro: "adeGuida" as FonteId,
  ipotecaria: 50, catastale: 50, fonteIpocatastali: "ade2014" as FonteId,
  ivaPrima: 4, ivaAltre: 10, ivaLusso: 22, fisseImpresa: 200, fonteImpresa: "adeGuida" as FonteId,
  rivalutazione: 5, moltiplicatore: 120, moltiplicatorePrima: 110, fonteCatasto: "adeGuida" as FonteId,
  mesiResidenza: 18,
  notaio: { verificato: false, fonte: "notaioIt" as FonteId },
  agenzia: { pct: 3, min: 0, max: 4, passo: 0.5, iva: 22, fonte: "usiNovara" as FonteId },
  caparraPct: 10,
} as const;

export const valoreCatastale = (rendita: number, primaCasa: boolean) =>
  Math.round(rendita * (1 + IT.rivalutazione / 100) * (primaCasa ? IT.moltiplicatorePrima : IT.moltiplicatore));

// ── Svizzera (Canton Zurigo), Germania (Baviera), Austria ────────────
export const ESTERO = {
  ch: { handaenderung: 0, beurkundungPm: 1, grundbuchPm: 1, minimo: 100, fonti: ["chPue", "chZh"] as FonteId[], makler: "chMakler" as FonteId },
  de: { grest: 3.5, fonti: ["deGrest", "deGrestBund"] as FonteId[], notar: "deNotar" as FonteId, makler: "deMakler" as FonteId },
  at: { grest: 3.5, eintragung: 1.1, eingabe: 81, fonti: ["atGrest", "atGrundbuch"] as FonteId[], notar: "atNotar" as FonteId, makler: "atMakler" as FonteId },
} as const;

// ── Italia, chi vende ─────────────────────────────────────────────────
export const VENDITA = {
  anniPlusvalenza: 5, sostitutiva: 26, anniSuperbonus: 10,
  fontePlus: "plusvalenza" as FonteId, fonteSuperbonus: "ance274" as FonteId, fonteCosti: "costiInerenti" as FonteId,
  agenzia: { pct: 3, min: 0, max: 5, passo: 0.25, iva: 22, fonte: "usiNovara" as FonteId },
  apeSanzione: [3000, 18000] as const,
} as const;

/** Quante fonti e quante voci in verifica, per la riga meta di ogni strumento. */
export function conteggio(ids: FonteId[]) {
  const unici = [...new Set(ids)];
  return { fonti: unici.length, inVerifica: unici.filter((i) => !FONTI[i].verificato).length };
}
export const dominio = (u?: string) => (u ? u.replace(/^https?:\/\/(www\d?\.)?/, "").split("/")[0] : "");
