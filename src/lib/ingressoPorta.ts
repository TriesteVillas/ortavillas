import { createHmac, randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { INTESTAZIONE_PROVENIENZA, provenienzaDaIntestazione } from "@/lib/provenienza";

// ─────────────────────────────────────────────────────────────────────────────
// LA BUSSATA ALLA PORTA DEL CRM v4.
//
// Ogni modulo di ortavillas.com viene POSATO nel fondo `ingresso` di tsv-pg, con il
// contratto della porta unica (PIANO-INGRESSO del KB): «prima si posa, poi si capisce».
// Qui non c'è Airtable accanto: è il v4 e basta, come per sloveniavillas (porta sito-sv).
//
// Tre proprietà, tutte deliberate:
//  · senza la env INGRESSO_HMAC non consegna niente e lo DICE (false): il modulo
//    allora risponde «non siamo riusciti a registrare, scriveteci», mai un finto grazie;
//  · timeout 6 s, errori in console: la porta che non risponde non blocca la pagina;
//  · firma HMAC-SHA256 del corpo grezzo (x-porta + x-firma), idempotenza a carico del fondo.
//
// ⚠️ COPIA del file omonimo dei siti del gruppo (lignanovillas, triestevillas-web,
// triesteimmobiliare, triesteaffitti): cambiano solo PORTA e SITO. Qui però la porta
// è l'UNICA strada del modulo — su GitHub Pages non c'era niente — quindi la funzione
// dice se ha consegnato (bussaIngresso → boolean) e il modulo, se no, chiede di scriverci.
// La porta `sito-orta` esiste nel CRM dal 09/10/2026: segreto `ingresso_hmac_sito-orta` in tsv-pg,
// la stessa stringa in INGRESSO_HMAC sul progetto Vercel `ortavillas` (Sensitive, solo Production:
// le anteprime non bussano). Ruotarlo = cambiare tutti e due e ridistribuire.
// ─────────────────────────────────────────────────────────────────────────────

const URL_PORTA = process.env.INGRESSO_URL ?? "https://tsv-pg.vercel.app/api/ingresso";
const SEGRETO = process.env.INGRESSO_HMAC ?? "";
const PORTA = "sito-orta";
const SITO = "orta";

/** DA DOVE È ARRIVATA LA VISITA (10/10/2026, lib/provenienza.ts, come su
 *  triestevillas.com 28e6fe9): il browser la manda come intestazione su ogni
 *  invio verso il sito (lib/provenienza-moduli.ts, montato in Consenso). Qui si
 *  bussa da due posti, ed entrambi stanno DENTRO una richiesta, dove `headers()`
 *  risponde: le server action di app/azioni.ts (che il browser chiama con una
 *  fetch POST, quindi l'intestazione c'è) e la rotta /api/chat. Fuori da una
 *  richiesta (un lavoro dopo la risposta, un cron) `headers()` lancia: la
 *  provenienza manca, e basta.
 *  Il POST HTML classico (le form di components/Moduli.tsx usano `action={azione}`
 *  di useActionState, che senza JavaScript ripiega su un invio nativo) non
 *  porterebbe l'intestazione — ma oggi non arriva mai qui: il campo `t0` lo
 *  scrive solo un effetto nel browser, e senza `t0` azioni.ts risponde «veloce»
 *  prima di bussare. Se un giorno il controllo del tempo cambia, quel caso
 *  arriverà al CRM senza provenienza (la richiesta arriva lo stesso). */
async function provenienzaDellaRichiesta(): Promise<Record<string, unknown> | null> {
  try {
    const h = await headers();
    return provenienzaDaIntestazione(h.get(INTESTAZIONE_PROVENIENZA)) as Record<string, unknown> | null;
  } catch {
    return null;
  }
}

const s = (v: unknown, max = 200): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/** Posa una submission nel fondo del v4. Non lancia mai: true se la porta ha risposto 2xx. */
export async function bussaIngresso(
  modulo: string,
  contatto: { nome?: unknown; cognome?: unknown; email?: unknown; telefono?: unknown },
  dati: Record<string, unknown>,
): Promise<boolean> {
  if (!SEGRETO) {
    // Come nelle altre copie: senza questa riga un modulo che non consegna non lascia traccia
    // nei log di Vercel, e il «non siamo riusciti» del cliente resta l'unico segnale.
    console.error(`[ingresso] porta ${PORTA}: INGRESSO_HMAC assente, la richiesta non va al CRM`);
    return false;
  }
  try {
    const slug = modulo.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 24) || "info";
    // La provenienza: quella che il chiamante ha già messo vince, se no
    // l'intestazione della richiesta. Il CRM la ripulisce di nuovo
    // (tsv-pg web/lib/ingresso/provenienza.ts, da payload.dati.provenienza).
    if (dati.provenienza == null) {
      const p = await provenienzaDellaRichiesta();
      if (p) dati = { ...dati, provenienza: p };
    }
    const corpo = JSON.stringify({
      canale: "modulo",
      origine: `sito:${SITO}/${slug}`,
      elementi: [{
        chiave: randomUUID(),
        payload: {
          modulo: slug,
          contatto: {
            nome: s(contatto.nome, 120), cognome: s(contatto.cognome, 120),
            email: s(contatto.email, 160), telefono: s(contatto.telefono, 40),
          },
          dati,
        },
      }],
    });
    const firma = createHmac("sha256", SEGRETO).update(corpo, "utf8").digest("hex");
    const res = await fetch(URL_PORTA, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-porta": PORTA, "x-firma": firma },
      body: corpo,
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) {
      console.error(`[ingresso] porta ${PORTA}: ${res.status} ${(await res.text()).slice(0, 200)}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error(`[ingresso] porta ${PORTA} non raggiunta:`, e);
    return false;
  }
}
