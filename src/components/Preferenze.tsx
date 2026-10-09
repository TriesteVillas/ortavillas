"use client";
// Movimento e cookie: i due bottoni del colophon e il banner di consenso (Consent Mode v2).
// Il banner esiste solo se c'è una proprietà GA (NEXT_PUBLIC_GA_ID): senza statistiche
// non c'è niente da consentire, e un banner inutile è un banner che mente.
import { useEffect, useState } from "react";
import Script from "next/script";

const GA = process.env.NEXT_PUBLIC_GA_ID || "";
const CHIAVE = "ov_consenso_v1";

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void } }

function leggi(k: string): string | null { try { return localStorage.getItem(k); } catch { return null; } }
function scrivi(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* privato */ } }

export function Consenso(p: { testo: string; link: string; href: string; rifiuto: string; accetto: string; aria: string }) {
  const [mostra, setMostra] = useState(false);
  useEffect(() => {
    if (!GA) return;
    const v = leggi(CHIAVE);
    if (v !== "si" && v !== "no") setMostra(true);
    const riapri = () => setMostra(true);
    window.addEventListener("ov:cookie", riapri);
    return () => window.removeEventListener("ov:cookie", riapri);
  }, []);
  // eventi di contatto: telefono, WhatsApp, email. `generate_lead` NON più da
  // qui (09/10/2026): contava ogni submit, anche rifiutato o fermato dalla
  // validazione. Ora parte solo a richiesta arrivata: LeadArrivato.tsx sulle
  // pagine «grazie», e l'assistente quando la porta ha preso la persona.
  useEffect(() => {
    if (!GA) return;
    const clic = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a || !window.gtag) return;
      const h = a.href;
      const canale = h.startsWith("tel:") ? "telefono" : /wa\.me|whatsapp/.test(h) ? "whatsapp" : h.startsWith("mailto:") ? "email" : null;
      if (canale) window.gtag("event", "contatto", { canale });
    };
    document.addEventListener("click", clic, true);
    return () => { document.removeEventListener("click", clic, true); };
  }, []);
  if (!GA) return null;
  const scegli = (si: boolean) => {
    scrivi(CHIAVE, si ? "si" : "no");
    window.gtag?.("consent", "update", { analytics_storage: si ? "granted" : "denied" });
    setMostra(false);
  };
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">{`
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CHIAVE}')==='si'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());gtag('config','${GA}');`}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="lazyOnload" />
      {mostra && (
        <div className="cc-bar" role="dialog" aria-modal="false" aria-label={p.aria}>
          <p>{p.testo} <a href={p.href}>{p.link}</a></p>
          <div className="bottoni">
            <button type="button" className="bottone bottone-secondario" onClick={() => scegli(false)}>{p.rifiuto}</button>
            <button type="button" className="bottone bottone-secondario" onClick={() => scegli(true)}>{p.accetto}</button>
          </div>
        </div>
      )}
    </>
  );
}

export function BottoniColophon(p: { movimento: [string, string]; sotto: string; cookie: string }) {
  const [on, setOn] = useState(true);
  useEffect(() => { setOn(document.documentElement.dataset.motion !== "off"); }, []);
  const cambia = () => {
    const nuovo = !on;
    setOn(nuovo);
    document.documentElement.dataset.motion = nuovo ? "on" : "off";
    scrivi("ov-motion", nuovo ? "si" : "no");
  };
  return (
    <div className="colophon-bottoni">
      <button type="button" onClick={cambia} aria-pressed={on}>{on ? p.movimento[0] : p.movimento[1]}<small>{p.sotto}</small></button>
      {GA && <button type="button" onClick={() => window.dispatchEvent(new Event("ov:cookie"))}>{p.cookie}</button>}
    </div>
  );
}

/** Rivela gli elementi .rivela quando entrano in vista, e avvia i contatori a rullo. */
export function Osservatore() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rivela, [data-rullo]");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("visto")); return; }
    const io = new IntersectionObserver((voci) => {
      voci.forEach((v) => { if (v.isIntersecting) { v.target.classList.add("visto"); io.unobserve(v.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
  return null;
}
