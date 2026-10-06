// La sezione Strumenti: l'indice (p.figlio assente) e i sette strumenti.
import "@/app/css/strumenti.css";
import Link from "next/link";
import { assoluto, percorso } from "@/lib/rotte";
import type { VocePagina } from "./tipi";
import type { StrumentoId } from "@/content/indice";
import { STRUMENTI_ID } from "@/content/indice";
import { TITOLI_STRUMENTI } from "@/content/titoli";
import { COMUNE } from "@/testi/strumenti/comune";
import { COSTI } from "@/testi/strumenti/costi";
import { BUDGET } from "@/testi/strumenti/budget";
import { TROVA } from "@/testi/strumenti/trova";
import { NETTO } from "@/testi/strumenti/netto";
import { VALORE } from "@/testi/strumenti/valore";
import { CATASTO } from "@/testi/strumenti/catasto";
import { DOCUMENTI } from "@/testi/strumenti/documenti";
import { JsonLd, briciole } from "@/components/JsonLd";
import { Cta, SchedaStrumento } from "@/components/strumenti/Template";
import { PaginaCosti } from "@/components/strumenti/PaginaCosti";
import { PaginaBudget } from "@/components/strumenti/PaginaBudget";
import { PaginaTrova } from "@/components/strumenti/PaginaTrova";
import { PaginaNetto } from "@/components/strumenti/PaginaNetto";
import { PaginaValore } from "@/components/strumenti/PaginaValore";
import { PaginaCatasto } from "@/components/strumenti/PaginaCatasto";
import { PaginaDocumenti } from "@/components/strumenti/PaginaDocumenti";

const META: Record<StrumentoId, Record<string, { titolo: string; descrizione: string }>> = {
  costi: COSTI, budget: BUDGET, trova: TROVA, netto: NETTO, valore: VALORE, catasto: CATASTO, documenti: DOCUMENTI,
};

export const strumenti: VocePagina = {
  meta: (p) => {
    if (!p.figlio) return { titolo: COMUNE[p.lingua].indice.titolo, descrizione: COMUNE[p.lingua].indice.descrizione, og: "strumenti" };
    const m = META[p.figlio.id as StrumentoId][p.lingua];
    return { titolo: m.titolo.includes("OrtaVillas") ? m.titolo : `${m.titolo} | OrtaVillas`, descrizione: m.descrizione, og: `strumento-${p.figlio.id}` };
  },
  Corpo: ({ p }) => {
    const l = p.lingua;
    switch (p.figlio?.id as StrumentoId | undefined) {
      case "costi": return <PaginaCosti l={l} />;
      case "budget": return <PaginaBudget l={l} />;
      case "trova": return <PaginaTrova l={l} />;
      case "netto": return <PaginaNetto l={l} />;
      case "valore": return <PaginaValore l={l} />;
      case "catasto": return <PaginaCatasto l={l} />;
      case "documenti": return <PaginaDocumenti l={l} />;
    }
    const c = COMUNE[l];
    const t = c.indice;
    const gruppo = (pub: "compra" | "vende") => STRUMENTI_ID.filter((id) => TITOLI_STRUMENTI[id].pubblico === pub);
    return (
      <>
        <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(percorso(l, "home")) }, { nome: c.sezione }])} />
        <section className="testata-notte st-testata">
          <div className="contenitore">
            <nav className="briciole" aria-label={c.briciole}><Link href={percorso(l, "home")}>OrtaVillas</Link><span aria-hidden="true">›</span><span aria-current="page">{c.sezione}</span></nav>
            <p className="occhiello">{t.occhiello}</p>
            <h1 className="t-display-l">{t.h1}</h1>
            <p className="t-lead">{t.lead(STRUMENTI_ID.length)}</p>
          </div>
        </section>
        {(["compra", "vende"] as const).map((pub) => (
          <section key={pub} className="sezione" id={pub === "compra" ? "per-chi-compra" : "per-chi-vende"}>
            <div className="contenitore">
              <div className="intestazione">
                <h2 className="t-display-l">{pub === "compra" ? t.compraH2 : t.vendeH2}</h2>
                <p className="t-lead">{pub === "compra" ? t.compraLead : t.vendeLead}</p>
              </div>
              <ul className="schede st-schede">{gruppo(pub).map((id) => <SchedaStrumento key={id} l={l} id={id} />)}</ul>
            </div>
          </section>
        ))}
        <section className="sezione">
          <div className="contenitore">
            <div className="st-principio">
              <p className="occhiello">{t.principio}</p>
              <p className="t-h3">{t.principioTesto}</p>
              <p className="aiuto" style={{ marginTop: 14 }}>{t.principioSotto}</p>
              <p style={{ marginTop: 14 }}><Link className="link-freccia" href={percorso(l, "guide")}>{t.guide} <span className="freccia">→</span></Link></p>
            </div>
          </div>
        </section>
        <Cta l={l} pubblico="compra" />
      </>
    );
  },
};
