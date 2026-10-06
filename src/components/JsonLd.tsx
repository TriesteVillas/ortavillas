import { RECAPITI, SOCIETA } from "@/content/shell";
import { LINGUE, type Lingua } from "@/lib/rotte";

export function JsonLd({ dati }: { dati: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dati).replace(/</g, "\\u003c") }} />;
}

const GRUPPO = ["https://triestevillas.com", "https://triesteimmobiliare.com", "https://triesteaffitti.com", "https://friulivillas.com", "https://lignanovillas.com", "https://sloveniavillas.com"];

/** Organization OrtaVillas con TriesteVillas srl come capogruppo. Niente aggregateRating:
 *  le recensioni sono del gruppo, non di questo sito. */
export function organizzazione(l: Lingua, conSito = false, extra: object[] = []) {
  const org = {
    "@type": "Organization", "@id": "https://ortavillas.com/#organization", name: "OrtaVillas", url: "https://ortavillas.com",
    logo: "https://ortavillas.com/icon.svg", email: RECAPITI.email, telephone: RECAPITI.tel, areaServed: { "@type": "Place", name: "Lago d'Orta" },
    knowsLanguage: ["it", "en", "de"],
    parentOrganization: {
      "@type": "RealEstateAgent", "@id": "https://triestevillas.com/#agency", name: "TriesteVillas", legalName: SOCIETA.nome, vatID: `IT${SOCIETA.piva}`,
      url: "https://triestevillas.com", address: { "@type": "PostalAddress", streetAddress: "Via Milano 5", postalCode: "34132", addressLocality: "Trieste", addressCountry: "IT" },
      subOrganization: GRUPPO.map((u) => ({ "@type": "Organization", url: u })),
    },
  };
  const graph: object[] = [org, ...extra];
  if (conSito) graph.push({ "@type": "WebSite", "@id": "https://ortavillas.com/#website", name: "OrtaVillas", url: "https://ortavillas.com", inLanguage: [...LINGUE], publisher: { "@id": "https://ortavillas.com/#organization" } });
  return { "@context": "https://schema.org", "@graph": graph, inLanguage: l };
}

export function briciole(voci: { nome: string; url?: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: voci.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: v.nome, ...(v.url ? { item: v.url } : {}) })),
  };
}
