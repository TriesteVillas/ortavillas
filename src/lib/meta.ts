import type { Metadata } from "next";
import { LINGUE, OG_LOCALE, assoluto, type Lingua } from "./rotte";
import { inAltraLingua, type Pagina } from "./risolvi";

export type Meta = { titolo: string; descrizione: string; noindex?: boolean; og?: string };

/** canonical, hreflang (x-default = italiano, la radice), Open Graph. */
export function metadati(p: Pagina, m: Meta): Metadata {
  const self = inAltraLingua(p, p.lingua)!;
  const languages: Record<string, string> = {};
  if (!m.noindex) {
    for (const l of LINGUE) { const h = inAltraLingua(p, l); if (h) languages[l] = assoluto(h); }
    if (languages.it) languages["x-default"] = languages.it;
  }
  const og = `/og/${p.lingua}/${m.og ?? "home"}`;
  return {
    metadataBase: new URL("https://ortavillas.com"),
    title: m.titolo,
    description: m.descrizione,
    alternates: { canonical: assoluto(self), languages },
    robots: m.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website", title: m.titolo, description: m.descrizione, url: assoluto(self), siteName: "OrtaVillas",
      locale: OG_LOCALE[p.lingua], alternateLocale: LINGUE.filter((x) => x !== p.lingua).map((x) => OG_LOCALE[x as Lingua]),
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: m.titolo, description: m.descrizione, images: [og] },
    icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
    manifest: "/manifest.webmanifest",
  };
}
