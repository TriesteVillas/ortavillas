import type { Lingua } from "@/lib/rotte";
import { CATASTO } from "@/testi/strumenti/catasto";
import { comuniOmi } from "@/lib/strumenti/omi";
import { IT, valoreCatastale, type FonteId } from "@/lib/strumenti/regole";
import { fmtEuro } from "@/lib/strumenti/formato";
import { Strumento } from "./Template";
import { Catasto } from "./Catasto";

export const FONTI_CATASTO: FonteId[] = [IT.fonteCatasto, "adeConsultazione", "omi"];
const RENDITE = [500, 1000, 1500, 2000, 3000];

export function PaginaCatasto({ l }: { l: Lingua }) {
  const t = CATASTO[l];
  const reg = (vc: number, a: number) => fmtEuro(Math.max(IT.registroMin, Math.round((vc * a) / 100)), l);
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead><tr><th className="num">{t.colRendita}</th><th className="num">{t.colSeconda}</th><th className="num">{t.colReg}</th><th className="num">{t.colPrima}</th><th className="num">{t.colRegPrima}</th></tr></thead>
          <tbody>
            {RENDITE.map((r) => {
              const s = valoreCatastale(r, false), p = valoreCatastale(r, true);
              return <tr key={r}><th scope="row" className="num">{fmtEuro(r, l)}</th><td className="num">{fmtEuro(s, l)}</td><td className="num">{reg(s, IT.registro)}</td><td className="num">{fmtEuro(p, l)}</td><td className="num">{reg(p, IT.registroPrima)}</td></tr>;
            })}
          </tbody>
        </table>
      </div>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="catasto" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_CATASTO}
      calcolatore={<Catasto l={l} comuni={comuniOmi()} />}
      metodo={<>{t.metodo(l).map((x, i) => <p key={i}>{x}</p>)}</>}
      tabella={tabella} />
  );
}
