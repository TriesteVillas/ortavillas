// Immagini Open Graph 1200×630, una per pagina: il rilievo scuro, il marchio, il titolo e la
// fonte dentro l'immagine (come sloveniavillas). Generate in build per tutte le chiavi note.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { LINGUE, type Lingua } from "@/lib/rotte";
import { SHELL } from "@/content/shell";
import { HOME } from "@/testi/home";
import { MONDI } from "@/content/mondi";
import { NOMI_ORIGINI } from "@/content/titoli";
import { LUOGHI, luogo } from "@/lib/luoghi";
import { MONDI_ID, ORIGINI_ID, GUIDE_ID, STRUMENTI_ID, type MondoId, type OrigineId } from "@/content/indice";
import { TITOLI_GUIDE, TITOLI_STRUMENTI } from "@/content/titoli";
import { tempo, numero } from "@/lib/fmt";
import { tempoDa } from "@/lib/dati";
import { mediaDelLuogo } from "@/content/media";

export const dynamic = "force-static";

const ALIAS: Record<string, string> = { owners: "proprietari", agencies: "agenzie", about: "chiSiamo", contact: "contatti", data: "dati", imprint: "noteLegali", cookies: "cookie", places: "luoghi", distances: "distanze", guides: "guide", tools: "strumenti" };
const SEZIONI = ["home", "luoghi", "distanze", "guide", "strumenti", "proprietari", "agenzie", "pc", "chiSiamo", "contatti", "ai", "dati", "privacy", "noteLegali", "cookie"];

export function generateStaticParams() {
  const ids = [...SEZIONI, ...Object.keys(ALIAS), ...MONDI_ID.map((m) => `mondo-${m}`), ...LUOGHI.map((x) => `luogo-${x.id}`), ...ORIGINI_ID.map((o) => `origine-${o}`),
    ...GUIDE_ID.map((g) => `guida-${g}`), ...STRUMENTI_ID.map((s) => `strumento-${s}`)];
  return LINGUE.flatMap((lingua) => ids.map((id) => ({ lingua, id })));
}

const FOTO_MONDO: Record<string, string> = { est: "orta-san-giulio", ovest: "pella", colline: "vacciago", capi: "omegna" };

function contenuto(l: Lingua, idGrezzo: string): { occhiello: string; titolo: string; sotto?: string; dato?: string; foto?: string } {
  const id = ALIAS[idGrezzo] ?? idGrezzo;
  const s = SHELL[l];
  if (id.startsWith("luogo-")) {
    const x = luogo(id.slice(6));
    if (x) return { foto: mediaDelLuogo(x.id)?.id, occhiello: MONDI[x.mondo][l].nome, titolo: x.nome, dato: `${tempo(x.daMilano, l)} · ${numero(tempoDa("milano", x.id)?.km ?? 0, l)} km · ${s.colophon.origineNome}`, sotto: `${x.lat.toFixed(3)}° N · ${x.lon.toFixed(3)}° E · ${x.quota} m` };
  }
  if (id.startsWith("mondo-")) { const m = id.slice(6) as MondoId; if (MONDI[m]) return { foto: FOTO_MONDO[m], occhiello: s.nav.luoghi, titolo: MONDI[m][l].nome, dato: MONDI[m][l].sotto }; }
  if (id.startsWith("origine-")) { const o = id.slice(8) as OrigineId; if (NOMI_ORIGINI[o]) { const r = tempoDa(o, "orta-san-giulio"); return { occhiello: s.nav.distanze, titolo: `${NOMI_ORIGINI[o][l]} → Orta`, dato: r ? `${tempo(r.minuti, l)} · ${numero(r.km, l)} km` : undefined }; } }
  if (id.startsWith("guida-")) { const g = id.slice(6) as keyof typeof TITOLI_GUIDE; if (TITOLI_GUIDE[g]) return { occhiello: s.nav.guide, titolo: TITOLI_GUIDE[g][l].titolo, dato: TITOLI_GUIDE[g][l].breve }; }
  if (id.startsWith("strumento-")) { const k = id.slice(10) as keyof typeof TITOLI_STRUMENTI; if (TITOLI_STRUMENTI[k]) return { occhiello: s.nav.strumenti, titolo: TITOLI_STRUMENTI[k][l].titolo, dato: TITOLI_STRUMENTI[k][l].breve }; }
  const sez: Record<string, string> = {
    luoghi: s.nav.luoghi, distanze: s.nav.distanze, guide: s.nav.guide, strumenti: s.nav.strumenti, pc: "Private Collection",
    proprietari: s.colophon.servizi.proprietari, agenzie: s.colophon.servizi.agenzie, chiSiamo: s.colophon.servizi.chiSiamo, contatti: s.colophon.servizi.contatti,
    ai: s.colophon.edizioneLink.ai, dati: s.colophon.edizioneLink.dati, privacy: s.colophon.edizioneLink.privacy, noteLegali: s.colophon.edizioneLink.noteLegali, cookie: s.colophon.edizioneLink.cookie,
  };
  if (sez[id]) return { occhiello: "Atlante", titolo: sez[id], dato: s.colophon.claim };
  return { occhiello: "Atlante", titolo: HOME[l].h1, dato: s.colophon.claim };
}

export async function GET(_req: Request, { params }: { params: Promise<{ lingua: string; id: string }> }) {
  const { lingua, id } = await params;
  const l = ((LINGUE as readonly string[]).includes(lingua) ? lingua : "it") as Lingua;
  const c = contenuto(l, id);
  const [fraunces, spline, sfondo] = await Promise.all([
    readFile(path.join(process.cwd(), "src/og/fraunces.ttf")),
    readFile(path.join(process.cwd(), "src/og/spline.ttf")),
    readFile(path.join(process.cwd(), c.foto ? `public/media/${c.foto}/${c.foto}.og.jpg` : "public/geo/og-sfondo.jpg")),
  ]);
  const bg = `data:image/jpeg;base64,${sfondo.toString("base64")}`;
  const s = SHELL[l];
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", position: "relative", background: "#04090d", color: "#ede8dd" }}>
        <img src={bg} width={1200} height={630} style={{ position: "absolute", left: 0, top: 0 }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", backgroundImage: "linear-gradient(90deg, rgba(4,9,13,0.94) 0%, rgba(4,9,13,0.80) 48%, rgba(4,9,13,0.15) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 380, width: 1200, height: 250, display: "flex", backgroundImage: "linear-gradient(0deg, rgba(4,9,13,0.85) 0%, rgba(4,9,13,0) 100%)" }} />
        <div style={{ position: "absolute", left: 64, top: 52, right: 64, display: "flex", justifyContent: "space-between", fontFamily: "Spline", fontSize: 18, letterSpacing: 2, color: "#e3cda4" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "Fraunces", fontSize: 34, letterSpacing: 0, color: "#ede8dd" }}>OrtaVillas</span>
            <span style={{ fontSize: 14 }}>BY TRIESTEVILLAS</span>
          </div>
          <span>{s.edizione.toUpperCase()}</span>
        </div>
        <div style={{ position: "absolute", left: 64, bottom: 110, width: 760, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "Spline", fontSize: 18, letterSpacing: 3, color: "#e3cda4", textTransform: "uppercase" }}>
            <div style={{ width: 10, height: 10, background: "#e9c27a", transform: "rotate(45deg)", marginRight: 14 }} />{c.occhiello}
          </div>
          <div style={{ fontFamily: "Fraunces", fontSize: c.titolo.length > 40 ? 58 : 80, lineHeight: 1.02, marginTop: 18 }}>{c.titolo}</div>
          {c.dato && <div style={{ fontFamily: "Spline", fontSize: 21, color: "#e9c27a", marginTop: 22 }}>{c.dato}</div>}
          {c.sotto && <div style={{ fontFamily: "Spline", fontSize: 17, color: "#a7b3bb", marginTop: 8 }}>{c.sotto}</div>}
        </div>
        <div style={{ position: "absolute", left: 64, right: 64, bottom: 44, display: "flex", justifyContent: "space-between", fontFamily: "Spline", fontSize: 14, color: "#8796a0" }}>
          <span>{c.foto ? "AI · " + (mediaDelLuogo(c.foto)?.licenza ?? "CC") + " · Wikimedia Commons · OSRM · 6/10/2026" : "OSRM · Terrain Tiles · © OpenStreetMap · OMI · 6/10/2026"}</span>
          <span style={{ color: "#e9c27a" }}>ortavillas.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: [{ name: "Fraunces", data: fraunces, weight: 400 }, { name: "Spline", data: spline, weight: 500 }] },
  );
}
