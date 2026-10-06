import type { MetadataRoute } from "next";
import { LINGUE, SEGMENTI, assoluto, percorso, type ChiavePagina } from "@/lib/rotte";
import { FIGLI } from "@/content/indice";
import { inAltraLingua, type Pagina } from "@/lib/risolvi";

// Una voce per pagina indicizzabile e per lingua, con tutti gli alternate. lastmod = data
// dell'edizione, non la data del file. Fuori: distanze per città (noindex) e pagine «grazie».
const EDIZIONE = new Date("2026-10-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const pagine: Omit<Pagina, "lingua">[] = [
    ...(Object.keys(SEGMENTI) as ChiavePagina[]).map((chiave) => ({ chiave })),
    ...(["luoghi", "guide", "strumenti"] as const).flatMap((chiave) => FIGLI[chiave].map((figlio) => ({ chiave, figlio }))),
  ];
  return pagine.flatMap((p) =>
    LINGUE.filter((l) => !p.figlio?.lingue || p.figlio.lingue.includes(l)).map((l) => {
      const languages: Record<string, string> = {};
      for (const x of LINGUE) { const h = inAltraLingua({ ...p, lingua: l }, x); if (h) languages[x] = assoluto(h); }
      if (languages.it) languages["x-default"] = languages.it;
      return { url: assoluto(inAltraLingua({ ...p, lingua: l }, l) ?? percorso(l, "home")), lastModified: EDIZIONE, alternates: { languages } };
    }),
  );
}
