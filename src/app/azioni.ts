"use server";
// I moduli del sito: Private Collection, proprietari, valutazione. Stesso schema di
// sloveniavillas: honeypot `sito_web`, tempo minimo 3 s (`t0`), validazione server,
// consegna firmata alla porta del CRM, poi redirect alla pagina «grazie».
// Se la porta non risponde l'esito è `porta`: il modulo chiede di scriverci, mai un finto grazie.
//
// Al CRM ogni richiesta arriva con un `messaggio` composto qui, come fa sappadavillas: una riga
// per risposta data, in italiano, coi valori per esteso («Sponda est», non «est»), le parole
// del cliente in fondo. È il testo che legge chi lavora il lead (scheda, storia, avviso via
// mail): senza, il CRM metteva nel messaggio la sola descrizione della casa, o niente.
// I campi strutturati vanno coi nomi che il CRM legge già (lib/ingresso/moduli-siti.ts e
// dettaglio-modulo.ts di tsv-pg): `zone`, `budgetMin`/`budgetMax`, `scopo`, `comune`,
// `tipologia`, `quando`, `lingua`. I codici del modulo (f2, o1, est…) restano sul sito.
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { bussaIngresso } from "@/lib/ingressoPorta";
import { GRAZIE, LINGUE, percorso, type Lingua } from "@/lib/rotte";
import { TESTI_MODULI } from "@/testi/moduli";

export type Esito = { esito: "iniziale" | "errori" | "veloce" | "porta" | "ok"; errori?: Record<string, string>; valori?: Record<string, string | string[]> };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").trim().slice(0, max);
const lingua = (f: FormData): Lingua => ((LINGUE as readonly string[]).includes(s(f, "locale")) ? (s(f, "locale") as Lingua) : "it");
const troppoVeloce = (f: FormData) => { const t0 = Number(s(f, "t0")); return !t0 || Date.now() - t0 < 3000; };
const valori = (f: FormData) => {
  const v: Record<string, string | string[]> = {};
  for (const k of new Set(f.keys())) if (!k.startsWith("$") && k !== "sito_web") { const a = f.getAll(k).map(String); v[k] = a.length > 1 ? a : a[0]; }
  return v;
};

// ── Il messaggio per il CRM: sempre in italiano, lo legge chi lavora il lead ─────────────
const IT = TESTI_MODULI.it;
const NOMI_LINGUA: Record<string, string> = { it: "italiano", en: "inglese", de: "tedesco", sl: "sloveno" };
/** Le fasce del modulo in euro, per le colonne di budget del CRM. */
const FASCE_EUR: Record<string, [number | null, number | null]> = {
  f1: [null, 500_000], f2: [500_000, 1_000_000], f3: [1_000_000, 2_000_000], f4: [2_000_000, null],
};
const voce = (m: Record<string, string>, k: string) => (k && Object.hasOwn(m, k) ? m[k] : "");
const riga = (etichetta: string, valore: string) => (valore ? `${etichetta}: ${valore}` : "");
const piede = (l: Lingua, fonte: string) => `Pagina in: ${l}${fonte ? ` · invito: ${fonte}` : ""}`;

export async function inviaPC(_prev: Esito, f: FormData): Promise<Esito> {
  if (s(f, "sito_web")) return { esito: "ok" }; // honeypot: si finge il successo, non si consegna
  const l = lingua(f);
  const errori: Record<string, string> = {};
  const email = s(f, "email", 160);
  const nome = s(f, "nome", 120);
  if (!EMAIL.test(email)) errori.email = "email";
  if (nome.length < 2) errori.nome = "nome";
  if (f.get("privacy") !== "on") errori.privacy = "privacy";
  if (Object.keys(errori).length) return { esito: "errori", errori, valori: valori(f) };
  if (troppoVeloce(f)) return { esito: "veloce", valori: valori(f) };

  const zone = [...new Set(f.getAll("zone").map(String))].filter((z) => Object.hasOwn(IT.zoneVoci, z)).slice(0, 8);
  const fascia = s(f, "fascia", 4);
  const [budgetMin, budgetMax] = FASCE_EUR[fascia] ?? [null, null];
  const orizzonte = voce(IT.orizzonti, s(f, "orizzonte", 4));
  const scopo = voce(IT.usi, s(f, "uso", 20));
  const paese = voce(IT.paesi, s(f, "paese", 10));
  const citta = s(f, "citta", 80);
  const linguaCom = s(f, "lingua", 5) || l;
  const variante = s(f, "variante", 10) === "completo" ? "completo" : "breve";
  const pcTrieste = f.get("pcTrieste") === "on";
  const fonteCta = s(f, "fonteCta", 80);
  const messaggio = [
    `Iscrizione alla Private Collection del Lago d'Orta (ortavillas.com, modulo ${variante}): vuole sapere delle case prima che escano.`,
    riga("Zone", zone.map((z) => IT.zoneVoci[z]).join("; ")),
    riga("Budget", voce(IT.fasce, fascia)),
    riga("Quando compra", orizzonte),
    riga("Uso", scopo),
    riga("Paese di partenza", paese),
    riga("Città di partenza", citta),
    riga("Lingua delle comunicazioni", NOMI_LINGUA[linguaCom] ?? linguaCom),
    pcTrieste ? "CHIEDE ANCHE LA PRIVATE COLLECTION DI TRIESTE (consenso a parte, spuntato): la richiesta d'accesso va inoltrata a mano, da questo modulo non parte." : "",
    piede(l, fonteCta),
  ].filter(Boolean).join("\n");

  const ok = await bussaIngresso("pc-orta", { nome, email, telefono: s(f, "telefono", 40) }, {
    messaggio, lingua: linguaCom, paese, citta,
    // Al CRM le zone come nomi corti («Sponda est»); «non so ancora» resta una riga del messaggio.
    zone: zone.filter((z) => z !== "nonso").map((z) => IT.zoneVoci[z].split(" · ")[0]),
    budgetMin, budgetMax, orizzonte, scopo,
    pcTrieste, privacy: true, variante, fonteCta, locale: l,
  });
  if (!ok) return { esito: "porta", valori: valori(f) };
  await segnaLeadArrivato("pc-orta");
  redirect(percorso(l, "pc", GRAZIE[l]));
}

/** Il segno per la pagina «grazie»: SOLO dopo l'ok della porta, un minuto, il
 *  nome del modulo e nient'altro. Lo consuma components/LeadArrivato.tsx, che
 *  manda `generate_lead` una volta (09/10/2026). La trappola `sito_web` finge il
 *  successo senza redirect, quindi senza segno: un robot non diventa un lead. */
async function segnaLeadArrivato(modulo: string): Promise<void> {
  try {
    (await cookies()).set("ov_lead", modulo, { maxAge: 60, path: "/", sameSite: "lax", secure: true, httpOnly: false });
  } catch {
    /* senza il segno si perde un evento di misura, non la richiesta */
  }
}

export async function inviaProprietario(_prev: Esito, f: FormData): Promise<Esito> {
  if (s(f, "sito_web")) return { esito: "ok" };
  const l = lingua(f);
  const errori: Record<string, string> = {};
  const nome = s(f, "nome", 120);
  const email = s(f, "email", 160);
  const tel = s(f, "telefono", 40);
  if (nome.length < 2) errori.nome = "nome";
  if (email && !EMAIL.test(email)) errori.email = "email";
  if (!EMAIL.test(email) && tel.replace(/\D/g, "").length < 6) errori.recapito = "recapito";
  if (!s(f, "comune")) errori.comune = "comune";
  if (s(f, "comune") === "altro" && s(f, "comuneAltro", 80).length < 2) errori.comuneAltro = "comuneAltro";
  if (!s(f, "tipo")) errori.tipo = "tipo";
  if (s(f, "descrizione", 2000).length > 800) errori.descrizione = "descrizione";
  const link = s(f, "link", 500);
  if (link && !/^https?:\/\/\S+\.\S+/i.test(link)) errori.link = "link";
  const mq = s(f, "mq", 12).replace(/[.\s]/g, "").replace(",", ".");
  if (mq && !(Number(mq) > 0 && Number(mq) <= 100000)) errori.mq = "mq";
  if (f.get("privacy") !== "on") errori.privacy = "privacy";
  if (Object.keys(errori).length) return { esito: "errori", errori, valori: valori(f) };
  if (troppoVeloce(f)) return { esito: "veloce", valori: valori(f) };

  const modulo = s(f, "modulo", 20) === "valutazione" ? "valutazione" : "proprietario";
  const comuneId = s(f, "comune", 40);
  const fuoriElenco = comuneId === "altro";
  const comune = fuoriElenco ? s(f, "comuneAltro", 80) : voce(IT.comuni, comuneId) || comuneId;
  const tipologia = voce(IT.tipi, s(f, "tipo", 20));
  const quando = voce(IT.quandi, s(f, "quando", 10));
  const canale = voce(IT.canali, s(f, "canale", 10));
  const linguaRisposta = s(f, "linguaRisposta", 5);
  // La lingua in cui il CRM ci farà rispondere: quella chiesta (it · en · de), altrimenti quella
  // della pagina; dallo sloveno l'inglese, come propone il modulo.
  const linguaLead = Object.hasOwn(IT.lingueRisposta, linguaRisposta) ? linguaRisposta : l === "sl" ? "en" : l;
  // La stima dello strumento «quanto vale» supera i 200 caratteri: tagliata lì, perdeva la forchetta.
  const stima = s(f, "stima", 500);
  const descrizione = s(f, "descrizione", 800);
  const fonteCta = s(f, "fonteCta", 80);
  const messaggio = [
    modulo === "valutazione"
      ? "Richiesta di valutazione dallo strumento «Quanto vale» di ortavillas.com: il proprietario chiede di essere ricontattato."
      : "Un proprietario presenta la sua casa sul Lago d'Orta (ortavillas.com): chiede di essere ricontattato.",
    riga("Comune", comune + (fuoriElenco ? " (fuori dall'elenco del sito)" : "")),
    riga("Tipo di immobile", tipologia),
    riga("Superficie indicativa", mq ? `${mq} m²` : ""),
    riga("Quando vende", quando),
    riga("Annuncio esistente", link),
    riga("Stima dello strumento", stima),
    riga("Preferisce essere contattato via", canale),
    riga("Lingua della risposta", NOMI_LINGUA[linguaLead] ?? linguaLead),
    piede(l, fonteCta),
    descrizione ? `\nLa casa, nelle sue parole:\n${descrizione}` : "",
  ].filter(Boolean).join("\n");

  const ok = await bussaIngresso(modulo, { nome, email, telefono: tel }, {
    messaggio, lingua: linguaLead, comune, tipologia, mq: mq ? Number(mq) : null,
    descrizione, link, quando, canale, linguaRisposta, stima, privacy: true, fonteCta, locale: l,
  });
  if (!ok) return { esito: "porta", valori: valori(f) };
  await segnaLeadArrivato(modulo);
  redirect(percorso(l, "proprietari", GRAZIE[l]));
}
