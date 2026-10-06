"use client";
// La lista di controllo di chi vende. Lo stato sta in localStorage («ov-documenti-vendita»),
// sempre dentro try/catch: in una finestra privata o con i dati bloccati la lista funziona lo stesso.
import { useEffect, useId, useState } from "react";
import type { Lingua } from "@/lib/rotte";
import { DOCUMENTI } from "@/testi/strumenti/documenti";
import { CHIAVE_DOC, FASI, VOCI_DOC, voceVerificata } from "@/lib/strumenti/documenti";
import { FONTI, dominio } from "@/lib/strumenti/regole";
import { dataLunga } from "@/testi/strumenti/comune";

type StatoDoc = "pronto" | "fare" | "no";
const STATI: StatoDoc[] = ["pronto", "fare", "no"];

export function Documenti({ l }: { l: Lingua }) {
  const t = DOCUMENTI[l];
  const base = useId();
  const [stato, setStato] = useState<Record<string, StatoDoc>>({});
  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem(CHIAVE_DOC) ?? "{}");
      if (v && typeof v === "object") setStato(Object.fromEntries(Object.entries(v).filter(([k, x]) => VOCI_DOC.some((d) => d.id === k) && STATI.includes(x as StatoDoc))) as Record<string, StatoDoc>);
    } catch { /* storage non disponibile */ }
  }, []);
  const salva = (n: Record<string, StatoDoc>) => {
    setStato(n);
    try { localStorage.setItem(CHIAVE_DOC, JSON.stringify(n)); } catch { /* storage non disponibile */ }
  };
  const totale = VOCI_DOC.length;
  const pronti = VOCI_DOC.filter((v) => stato[v.id] === "pronto").length;
  const no = VOCI_DOC.filter((v) => stato[v.id] === "no").length;
  const aperti = totale - pronti - no;
  const C = 326.7;
  const quota = totale - no > 0 ? pronti / (totale - no) : 0;
  return (
    <div>
      <div className="st-doc-testa">
        <svg className="st-anello" viewBox="0 0 120 120" aria-hidden="true">
          <circle className="fondo" cx="60" cy="60" r="52" />
          <circle className="avanti" cx="60" cy="60" r="52" strokeDasharray={`${C * quota} ${C}`} />
          <text x="60" y="62">{pronti}/{totale - no}</text>
        </svg>
        <div>
          <h2 className="t-h3" style={{ margin: 0 }}>{t.lista}</h2>
          <p aria-live="polite" style={{ margin: "6px 0 12px", color: "var(--fg-2)" }}>{t.riassunto(pronti, aperti)}</p>
          <div className="bottoni">
            <button type="button" className="bottone bottone-secondario" onClick={() => window.print()}>{t.stampa}</button>
            <button type="button" className="bottone bottone-secondario" disabled={Object.keys(stato).length === 0} onClick={() => salva({})}>{t.ricomincia}</button>
          </div>
          <p className="aiuto" style={{ marginTop: 10 }}>{t.soloBrowser}</p>
        </div>
      </div>
      {FASI.map((f, i) => (
        <section key={f} className="st-doc-fase" aria-labelledby={`${base}-${f}`}>
          <p className="occhiello" style={{ margin: "0 0 8px" }}>{String(i + 1).padStart(2, "0")}</p>
          <h2 className="t-h3" id={`${base}-${f}`} style={{ margin: 0 }}>{t.fasi[f][0]}</h2>
          <p>{t.fasi[f][1]}</p>
          <ol className="st-doc-lista">
            {VOCI_DOC.filter((v) => v.fase === f).map((v) => {
              const x = t.voci[v.id];
              const ok = voceVerificata(v);
              return (
                <li key={v.id} className="st-doc" data-stato={stato[v.id]}>
                  <h3>{x.titolo}{x.termine && <span className="aiuto" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}> · <i lang="it">{x.termine}</i></span>}</h3>
                  <p>{x.testo}</p>
                  <p className="dove"><b>{t.dove}</b> · {x.dove}</p>
                  <p className="fonte">
                    {v.fonti.map((fid, k) => {
                      const fo = FONTI[fid];
                      return <span key={fid}>{k > 0 && " · "}{fo.url ? <a href={fo.url} rel="noopener" title={fo.titolo}>{dominio(fo.url)}</a> : fo.titolo}{fo.verificato && <> · {t.fonteLetta} {dataLunga(fo.data, l)}</>}</span>;
                    })}
                    {!ok && <> · <span className="st-non-verificato">{t.nonVerificato}</span></>}
                  </p>
                  <div className="chips" role="radiogroup" aria-label={t.statoDi(x.titolo)}>
                    {STATI.map((s) => (
                      <label key={s} className="chip"><input type="radio" name={`${base}-${v.id}`} checked={stato[v.id] === s} onChange={() => salva({ ...stato, [v.id]: s })} /><span>{t.stati[s]}</span></label>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
