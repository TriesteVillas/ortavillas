import type { Lingua } from "@/lib/rotte";
import type { Guida, Blocco } from "@/testi/guide/tipi";
import { piano } from "./Inline";

/** «6 ottobre 2026» nella lingua della pagina (sloveno al genitivo, come vuole il Pravopis). */
export const DATA_LUNGA: Record<Lingua, (iso: string) => string> = {
  it: (iso) => new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00")),
  en: (iso) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00")),
  de: (iso) => new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00")),
  sl: (iso) => {
    const d = new Date(iso + "T12:00:00");
    const mesi = ["januarja", "februarja", "marca", "aprila", "maja", "junija", "julija", "avgusta", "septembra", "oktobra", "novembra", "decembra"];
    return `${d.getDate()}. ${mesi[d.getMonth()]} ${d.getFullYear()}`;
  },
};

function testoBlocco(b: Blocco): string {
  if (typeof b === "string") return b;
  if ("lista" in b) return b.lista.join(" ");
  if ("tabella" in b) return [b.tabella.testa.join(" "), ...b.tabella.righe.map((r) => r.join(" "))].join(" ");
  if ("nota" in b) return b.nota;
  return b.h3;
}

/** Minuti di lettura: 200 parole al minuto, arrotondato per eccesso. */
export function minutiLettura(g: Guida): number {
  const testo = [g.lead, ...g.inBreve, ...g.sezioni.flatMap((s) => [s.h2, ...s.blocchi.map(testoBlocco)]), ...g.nonSappiamo, ...g.faq.flatMap((f) => [f.d, f.r])].map(piano).join(" ");
  return Math.max(1, Math.ceil(testo.split(/\s+/).filter(Boolean).length / 200));
}
