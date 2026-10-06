import type { MetadataRoute } from "next";
import { LINGUE, GRAZIE, percorso } from "@/lib/rotte";

export default function robots(): MetadataRoute.Robots {
  const grazie = LINGUE.flatMap((l) => [percorso(l, "proprietari", GRAZIE[l]), percorso(l, "pc", GRAZIE[l])]);
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: [...grazie, "/api/", "/*?*"] }],
    sitemap: "https://ortavillas.com/sitemap.xml",
  };
}
