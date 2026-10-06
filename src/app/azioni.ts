"use server";
// I moduli del sito: Private Collection, proprietari, valutazione. Stesso schema di
// sloveniavillas: honeypot `sito_web`, tempo minimo 3 s (`t0`), validazione server,
// consegna firmata alla porta del CRM, poi redirect alla pagina «grazie».
// Se la porta non risponde l'esito è `porta`: il modulo chiede di scriverci, mai un finto grazie.
import { redirect } from "next/navigation";
import { bussaIngresso } from "@/lib/ingressoPorta";
import { GRAZIE, LINGUE, percorso, type Lingua } from "@/lib/rotte";

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
  const ok = await bussaIngresso("pc-orta", { nome, email, telefono: s(f, "telefono", 40) }, {
    lingua: s(f, "lingua", 5) || l, paese: s(f, "paese", 10), citta: s(f, "citta", 80),
    zone: f.getAll("zone").map(String).slice(0, 8), fascia: s(f, "fascia", 4), orizzonte: s(f, "orizzonte", 4), uso: s(f, "uso", 20),
    pcTrieste: f.get("pcTrieste") === "on", privacy: true, variante: s(f, "variante", 10), fonteCta: s(f, "fonteCta", 80), locale: l,
  });
  if (!ok) return { esito: "porta", valori: valori(f) };
  redirect(percorso(l, "pc", GRAZIE[l]));
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
  const ok = await bussaIngresso(modulo, { nome, email, telefono: tel }, {
    comune: s(f, "comune", 40), comuneAltro: s(f, "comuneAltro", 80), tipo: s(f, "tipo", 20), mq: mq ? Number(mq) : null,
    descrizione: s(f, "descrizione", 800), link, quando: s(f, "quando", 10), canale: s(f, "canale", 10),
    linguaRisposta: s(f, "linguaRisposta", 5), stima: s(f, "stima", 200), privacy: true, fonteCta: s(f, "fonteCta", 80), locale: l,
  });
  if (!ok) return { esito: "porta", valori: valori(f) };
  redirect(percorso(l, "proprietari", GRAZIE[l]));
}
