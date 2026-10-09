"use client";
import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// `generate_lead` SOLO PER UNA RICHIESTA ARRIVATA DAVVERO (09/10/2026, «conta
// solo le richieste arrivate davvero, su tutti i siti»).
//
// Fino a quel giorno l'evento partiva da Preferenze.tsx a ogni submit di un
// <form>: anche quando la porta del CRM rifiutava, anche quando la validazione
// fermava il modulo, anche per il cancello dell'assistente. I due moduli
// (azioni.ts) a richiesta accettata REINDIRIZZANO alla pagina «grazie», e il
// browser non vede un esito da contare. Contare le visite a «grazie» non va:
// una ricarica o un indirizzo scritto a mano sarebbero lead. Quindi l'azione,
// SOLO dopo l'ok della porta, lascia un cookie di un minuto (`ov_lead`, il nome
// del modulo e nient'altro); la pagina «grazie» lo legge una volta, manda
// l'evento e lo cancella.
//
// gtag lo definisce lo script di Preferenze.tsx (afterInteractive), che può
// arrivare dopo questo effetto: si aspetta fino a 5 secondi, poi si rinuncia.
// Mai un push diretto nel dataLayer prima del `consent default`: l'evento
// passerebbe prima della regola del consenso.
// ─────────────────────────────────────────────────────────────────────────────

export const COOKIE_LEAD = "ov_lead";

export function LeadArrivato() {
  useEffect(() => {
    const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_LEAD}=([a-z-]{1,24})`));
    if (!m) return;
    document.cookie = `${COOKIE_LEAD}=; Max-Age=0; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    let giri = 0;
    const prova = () => {
      if (window.gtag) { window.gtag("event", "generate_lead", { modulo: m[1] }); return; }
      if (++giri < 20) h = window.setTimeout(prova, 250);
    };
    let h = window.setTimeout(prova, 0);
    return () => window.clearTimeout(h);
  }, []);
  return null;
}
