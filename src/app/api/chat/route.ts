// L'assistente AI del sito. Contratto uguale a sloveniavillas:
//   POST { sid, locale, pagina, messages, identita? } → { text } | { gate } | { blocked } | { spento, pagine } | { error }
// Risponde SOLO con il corpus dell'atlante (dati misurati + testi delle pagine), messo nel
// prompt di sistema con la cache. Dalla quarta domanda chiede nome e un recapito: la conversazione
// arriva nel CRM dalla porta firmata (modulo «chat»). Senza ANTHROPIC_API_KEY risponde «spento»
// con le pagine pertinenti: l'assistente nasce acceso solo quando lo si configura.
import Anthropic from "@anthropic-ai/sdk";
import { NextResponse, type NextRequest } from "next/server";
import { LINGUE, percorso, type Lingua } from "@/lib/rotte";
import { corpus } from "@/lib/corpus";
import { bussaIngresso } from "@/lib/ingressoPorta";
import { SHELL } from "@/content/shell";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODELLO = "claude-opus-5-5";
const DOMANDE_LIBERE = 3; // dalla quarta serve l'identità
const MAX_DOMANDE = 30;
const finestra = new Map<string, number[]>(); // limite grezzo per IP, per istanza

type Msg = { role: "user" | "assistant"; content: string };
type Corpo = { sid?: string; locale?: string; pagina?: string; messages?: Msg[]; identita?: { nome?: string; email?: string; telefono?: string; consenso?: boolean } };

function troppe(ip: string): boolean {
  const ora = Date.now();
  const v = (finestra.get(ip) ?? []).filter((t) => ora - t < 10 * 60_000);
  v.push(ora);
  finestra.set(ip, v);
  return v.length > 20;
}

function pagineUtili(l: Lingua, domanda: string) {
  const q = domanda.toLowerCase();
  const s = SHELL[l];
  const out: { titolo: string; href: string }[] = [];
  if (/(cost|tass|impost|tax|steuer|davk|notai|registro)/.test(q)) out.push({ titolo: s.nav.strumenti, href: percorso(l, "strumenti") });
  if (/(prezz|price|preis|cen|omi|€|euro|vale)/.test(q)) out.push({ titolo: s.nav.guide, href: percorso(l, "guide") });
  if (/(minut|dist|tempo|time|zeit|čas|km|malpensa|milan|zur|zür)/.test(q)) out.push({ titolo: s.nav.distanze, href: percorso(l, "distanze") });
  out.push({ titolo: s.nav.luoghi, href: percorso(l, "luoghi") });
  out.push({ titolo: s.colophon.servizi.contatti, href: percorso(l, "contatti") });
  return out.slice(0, 4);
}

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "?";
  if (troppe(ip)) return NextResponse.json({ error: "rate" }, { status: 429 });
  let b: Corpo;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "json" }, { status: 400 }); }
  const l: Lingua = (LINGUE as readonly string[]).includes(b.locale ?? "") ? (b.locale as Lingua) : "it";
  const messaggi = (b.messages ?? []).filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string").slice(-24);
  const ultima = messaggi[messaggi.length - 1];
  if (!ultima || ultima.role !== "user") return NextResponse.json({ error: "vuoto" }, { status: 400 });
  if (ultima.content.length > 1500) return NextResponse.json({ error: "too_long" });
  const domande = messaggi.filter((m) => m.role === "user").length;
  if (domande > MAX_DOMANDE) return NextResponse.json({ blocked: true });

  const id = b.identita;
  const identificato = !!(id?.consenso && (id.nome ?? "").trim().length >= 2 && ((id.email ?? "").includes("@") || (id.telefono ?? "").replace(/\D/g, "").length >= 6));
  if (domande > DOMANDE_LIBERE && !identificato) return NextResponse.json({ gate: true });

  if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ spento: true, pagine: pagineUtili(l, ultima.content) });

  const client = new Anthropic();
  try {
    const risposta = await client.beta.messages.create({
      model: MODELLO,
      max_tokens: 2000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      system: [
        { type: "text", text: corpus(), cache_control: { type: "ephemeral", ttl: "1h" } },
        { type: "text", text: `Lingua della risposta: ${l}. Pagina da cui scrive il visitatore: ${String(b.pagina ?? "/").slice(0, 200)}.` },
      ],
      messages: messaggi.map((m) => ({ role: m.role, content: m.content })),
    } as Anthropic.Beta.MessageCreateParamsNonStreaming);
    if (risposta.stop_reason === "refusal") return NextResponse.json({ error: "refusal" }, { status: 502 });
    const testo = risposta.content.filter((x): x is Anthropic.Beta.BetaTextBlock => x.type === "text").map((x) => x.text).join("\n").trim();
    if (!testo) throw new Error("risposta vuota");
    if (identificato) {
      // Nel CRM una riga per scambio, firmata: il motore la lega al lead per identità.
      await bussaIngresso("chat", { nome: id!.nome, email: id!.email, telefono: id!.telefono }, {
        sid: String(b.sid ?? "").slice(0, 40), pagina: String(b.pagina ?? "").slice(0, 200), locale: l, privacy: true,
        conversazione: [...messaggi, { role: "assistant", content: testo }].slice(-12),
      });
    }
    return NextResponse.json({ text: testo, identificato });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return NextResponse.json({ error: "rate" }, { status: 429 });
    console.error("[chat]", e instanceof Anthropic.APIError ? `${e.status} ${e.message}` : e);
    return NextResponse.json({ error: "errore" }, { status: 502 });
  }
}
