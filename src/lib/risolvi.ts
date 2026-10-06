// Dal percorso alla pagina: /de/orte/pella → { lingua: "de", chiave: "luoghi", figlio: "pella" }.
// È l'unico punto che conosce la forma degli URL; tutto il resto chiede a `percorso()`.
import { LINGUE, SEGMENTI, GRAZIE, percorso, type ChiavePagina, type Lingua } from "./rotte";
import { FIGLI, type Figlio } from "@/content/indice";

export type Pagina = {
  lingua: Lingua;
  chiave: ChiavePagina;
  figlio?: Figlio; // un luogo, un mondo, una guida, uno strumento
  grazie?: boolean;
  origine?: string; // distanze/<città>
};

export function risolvi(slug: string[] | undefined): Pagina | null {
  const parti = [...(slug ?? [])].map(decodeURIComponent);
  let lingua: Lingua = "it";
  if (parti.length && (LINGUE as readonly string[]).includes(parti[0]) && parti[0] !== "it") {
    lingua = parti.shift() as Lingua;
  }
  if (parti.length === 0) return { lingua, chiave: "home" };
  const [primo, secondo, ...resto] = parti;
  if (resto.length) return null;
  const chiave = (Object.keys(SEGMENTI) as ChiavePagina[]).find((k) => k !== "home" && SEGMENTI[k][lingua] === primo);
  if (!chiave) return null;
  if (!secondo) return { lingua, chiave };
  if ((chiave === "proprietari" || chiave === "pc") && secondo === GRAZIE[lingua]) return { lingua, chiave, grazie: true };
  if (chiave === "luoghi" || chiave === "guide" || chiave === "strumenti" || chiave === "distanze") {
    const f = FIGLI[chiave].find((x) => x.slug[lingua] === secondo);
    if (f) return { lingua, chiave, figlio: f };
  }
  return null;
}

/** La stessa pagina in un'altra lingua (null se lì non esiste). */
export function inAltraLingua(p: Pagina, l: Lingua): string | null {
  if (p.figlio) {
    if (p.figlio.lingue && !p.figlio.lingue.includes(l)) return null;
    return percorso(l, p.chiave, p.figlio.slug[l]);
  }
  if (p.grazie) return percorso(l, p.chiave, GRAZIE[l]);
  return percorso(l, p.chiave);
}

/** Tutti i percorsi da generare in build. */
export function tuttiISlug(): { slug: string[] }[] {
  const out: { slug: string[] }[] = [];
  const spezza = (p: string) => ({ slug: p.split("/").filter(Boolean) });
  for (const l of LINGUE) {
    for (const k of Object.keys(SEGMENTI) as ChiavePagina[]) out.push(spezza(percorso(l, k)));
    for (const k of ["proprietari", "pc"] as const) out.push(spezza(percorso(l, k, GRAZIE[l])));
    for (const sez of ["luoghi", "guide", "strumenti", "distanze"] as const) {
      for (const f of FIGLI[sez]) if (!f.lingue || f.lingue.includes(l)) out.push(spezza(percorso(l, sez, f.slug[l])));
    }
  }
  return out;
}
