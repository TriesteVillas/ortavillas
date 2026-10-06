import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { LUOGHI_SLUG, ORIGINI_ID, STRUMENTI_SLUG, type OrigineId } from "@/content/indice";
import { NOMI_ORIGINI } from "@/content/titoli";
import { MONDI } from "@/content/mondi";
import { COLORE_MONDO } from "@/content/luoghi-base";
import { LUOGHI } from "@/lib/luoghi";
import { datiSestante, ABITANTI_FRAZIONE } from "@/lib/sestante-dati";
import { tempo } from "@/lib/fmt";
import { TROVA } from "@/testi/strumenti/trova";
import type { FonteId } from "@/lib/strumenti/regole";
import { fmtNum } from "@/lib/strumenti/formato";
import { Sestante, type LuogoUI } from "@/components/Sestante";
import { Strumento } from "./Template";

export const FONTI_TROVA: FonteId[] = ["osrm", "copernicus", "istat", "omi", "osm"];

const oreMin = (m: number, l: Lingua) => `${Math.floor(m / 60)}${l === "de" ? " Std." : " h"} ${String(m % 60).padStart(2, "0")}${l === "de" ? " Min." : " min"}`;

export function PaginaTrova({ l }: { l: Lingua }) {
  const t = TROVA[l];
  const dati = datiSestante();
  const ui: LuogoUI[] = LUOGHI.map((x) => ({ id: x.id, nome: x.nome, href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]), colore: COLORE_MONDO[x.mondo].notte, mondoNome: MONDI[x.mondo][l].nome }));
  const nomi = Object.fromEntries(ORIGINI_ID.map((o) => [o, NOMI_ORIGINI[o][l]])) as Record<OrigineId, string>;
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead>
            <tr>{(["luogo", "mondo", "milano", "malpensa", "quota", "omi", "sole", "abitanti", "stazione", "battello"] as const).map((k, i) => <th key={k} className={i > 1 ? "num" : undefined}>{t.col[k]}</th>)}</tr>
          </thead>
          <tbody>
            {LUOGHI.map((x) => {
              const d = dati.find((y) => y.id === x.id)!;
              return (
                <tr key={x.id}>
                  <th scope="row"><Link href={percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])}>{x.nome}</Link></th>
                  <td>{MONDI[x.mondo][l].nome}</td>
                  <td className="num">{tempo(x.daMilano, l)}</td>
                  <td className="num">{tempo(x.daMalpensa, l)}</td>
                  <td className="num">{fmtNum(x.sopraLago, l)} m</td>
                  <td className="num">{d.omiMax ? fmtNum(d.omiMax, l) : "—"}</td>
                  <td className="num">{x.soleDic ? oreMin(x.soleDic.minuti, l) : "—"}</td>
                  <td className="num">{x.abitanti ? fmtNum(x.abitanti, l) : <span className="aiuto">{t.frazione} · {fmtNum(ABITANTI_FRAZIONE, l)}</span>}</td>
                  <td className="num">{x.stazione ? `${fmtNum(x.stazione.km, l, 1)} km` : "—"}</td>
                  <td className="num">{x.imbarcadero ? `${fmtNum(x.imbarcadero.km, l, 1)} km` : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="trova" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_TROVA}
      calcolatore={<Sestante dati={dati} luoghi={ui} l={l} variante="completo" nomiOrigini={nomi} hrefPC={percorso(l, "pc")} hrefTrova={percorso(l, "strumenti", STRUMENTI_SLUG.trova[l])} fonte={t.fonte} />}
      metodo={<><p>{t.metodoIntro}</p><ul>{t.criteri.map((c, i) => <li key={i}>{c}</li>)}</ul><p>{t.formula}</p>{t.limiti.map((x, i) => <p key={i}>{x}</p>)}</>}
      tabella={tabella} />
  );
}
