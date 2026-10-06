import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { STRUMENTI_SLUG } from "@/content/indice";
import { DOCUMENTI } from "@/testi/strumenti/documenti";
import { VOCI_DOC } from "@/lib/strumenti/documenti";
import { Strumento } from "./Template";
import { Documenti } from "./Documenti";

export const FONTI_DOCUMENTI = VOCI_DOC.flatMap((v) => v.fonti);

export function PaginaDocumenti({ l }: { l: Lingua }) {
  const t = DOCUMENTI[l];
  return (
    <Strumento l={l} id="documenti" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_DOCUMENTI}
      calcolatore={<Documenti l={l} />}
      metodo={<>{t.metodo.map((x, i) => <p key={i}>{x}</p>)}<p><Link href={percorso(l, "strumenti", STRUMENTI_SLUG.netto[l])}>{t.nettoLink} →</Link></p></>} />
  );
}
