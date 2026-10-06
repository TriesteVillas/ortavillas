import Link from "next/link";
import { percorso, assoluto, type Lingua } from "@/lib/rotte";
import { GUIDE_TESTI } from "@/testi/guide/comuni";
import { JsonLd, briciole } from "@/components/JsonLd";
import { SchedeGuide } from "./SchedeGuide";
import { CtaGuide } from "./CtaGuide";

export function IndiceGuide({ l }: { l: Lingua }) {
  const T = GUIDE_TESTI[l];
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(percorso(l, "home")) }, { nome: T.sezione }])} />
      <header className="testata-carta">
        <div className="contenitore">
          <nav className="briciole" aria-label="Breadcrumb">
            <Link href={percorso(l, "home")}>OrtaVillas</Link><span aria-hidden="true">›</span>
            <span aria-current="page">{T.sezione}</span>
          </nav>
          <p className="occhiello">{T.occhiello}</p>
          <h1 className="t-display-l">{T.h1}</h1>
          <p className="t-lead">{T.lead}</p>
        </div>
      </header>
      <div className="contenitore guida-indice-corpo">
        <SchedeGuide l={l} conMeta />
        <aside className="guida-principio" aria-labelledby="principio">
          <h2 id="principio" className="t-data-label">{T.principioTitolo}</h2>
          {T.principio.map((p, i) => <p key={i}>{p}</p>)}
        </aside>
      </div>
      <CtaGuide l={l} pubblico="compra" />
    </>
  );
}
