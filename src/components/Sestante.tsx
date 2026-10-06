"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { classifica, codifica, decodifica, hashPC, INIZIALI, VICINI, type DatiLuogo, type Risposte } from "@/lib/sestante";
import { ORIGINI_ID, type OrigineId } from "@/content/indice";
import { TESTI_SESTANTE } from "@/testi/sestante";
import type { Lingua } from "@/lib/rotte";

export type LuogoUI = { id: string; nome: string; href: string; colore: string; mondoNome: string };
export type TestiSestante = {
  da: string; acqua: string; acquaSegni: [string, string]; acquaValori: string[]; acquaAiuto?: string;
  budget: string; budgetValori: string[]; nonSo: string; budgetAiuto?: string;
  sole: string; soleValori: string[]; soleAiuto?: string;
  ritmo: string; ritmoValori: string[]; indifferente: string; ritmoAiuto?: string;
  vicino: string; viciniValori: Record<string, string>; vicinoAiuto?: string;
  carta: string; partenza: string; primo: (a: string, b: string, c: string) => string; su100: string; su100Title: string;
  motivi: Record<string, (v: number, l: LuogoUI) => string>;
  avvisami: string; copia: string; copiato: string; soloRisposte: string; completa: string; tutti: string;
};

const ORIGINE_KEY = "ov-origine";

export function Sestante(p: {
  dati: DatiLuogo[]; luoghi: LuogoUI[]; l: Lingua; nomiOrigini: Record<OrigineId, string>;
  variante: "breve" | "completo"; hrefPC: string; hrefTrova?: string; fonte: string;
}) {
  const [r, setR] = useState<Risposte>(INIZIALI);
  const toccato = useRef(false);
  const [copiato, setCopiato] = useState(false);
  useEffect(() => {
    let base = INIZIALI;
    try { const o = localStorage.getItem(ORIGINE_KEY); if (o && (ORIGINI_ID as readonly string[]).includes(o)) base = { ...base, o: o as OrigineId }; } catch { /* */ }
    setR(p.variante === "completo" && location.hash.includes("=") ? decodifica(location.hash, base) : base);
  }, [p.variante]);
  const aggiorna = (x: Partial<Risposte>) => {
    toccato.current = true;
    setR((v) => {
      const n = { ...v, ...x };
      if (x.o) { try { localStorage.setItem(ORIGINE_KEY, x.o); } catch { /* */ } window.dispatchEvent(new CustomEvent("ov:origine", { detail: x.o })); }
      return n;
    });
  };
  useEffect(() => {
    if (p.variante === "completo" && toccato.current) history.replaceState(null, "", "#" + codifica(r));
  }, [r, p.variante]);
  const res = useMemo(() => classifica(p.dati, r), [p.dati, r]);
  const top = res.slice(0, 3);
  const L = (id: string) => p.luoghi.find((x) => x.id === id)!;
  const t = TESTI_SESTANTE[p.l];
  const name = p.variante === "breve" ? "s-breve" : "s-full";
  const copia = async () => {
    const url = location.href.split("#")[0].replace(/\/$/, "") + (p.variante === "breve" && p.hrefTrova ? "" : "") ;
    const link = (p.variante === "breve" && p.hrefTrova ? location.origin + p.hrefTrova : url) + "#" + codifica(r);
    try { await navigator.clipboard.writeText(link); } catch { /* */ }
    setCopiato(true); setTimeout(() => setCopiato(false), 2600);
  };
  return (
    <div className="sestante griglia-2">
      <form aria-label={t.carta} onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="etichetta-campo">{t.da}</legend>
          <div className="chips">
            {ORIGINI_ID.map((o) => (
              <label key={o} className="chip"><input type="radio" name={`${name}-o`} checked={r.o === o} onChange={() => aggiorna({ o })} /><span>{p.nomiOrigini[o]}</span></label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="etichetta-campo">{t.acqua}</legend>
          <input type="range" min={0} max={4} step={1} value={r.m} aria-valuetext={t.acquaValori[r.m]} onChange={(e) => aggiorna({ m: Number(e.target.value) })} />
          <div style={{ display: "flex", justifyContent: "space-between" }} className="aiuto"><span>{t.acquaSegni[0]}</span><b style={{ color: "var(--gold)", fontWeight: 500 }}>{t.acquaValori[r.m]}</b><span>{t.acquaSegni[1]}</span></div>
          {p.variante === "completo" && t.acquaAiuto && <p className="aiuto" style={{ marginTop: 8 }}>{t.acquaAiuto}</p>}
        </fieldset>
        <fieldset>
          <legend className="etichetta-campo">{t.budget}</legend>
          <div className="chips">
            {t.budgetValori.map((v, i) => (
              <label key={v} className="chip"><input type="radio" name={`${name}-b`} checked={r.b === i} onChange={() => aggiorna({ b: i })} /><span>{v}</span></label>
            ))}
            <label className="chip"><input type="radio" name={`${name}-b`} checked={r.b === null} onChange={() => aggiorna({ b: null })} /><span>{t.nonSo}</span></label>
          </div>
          {p.variante === "completo" && t.budgetAiuto && <p className="aiuto" style={{ marginTop: 8 }}>{t.budgetAiuto}</p>}
        </fieldset>
        {p.variante === "completo" && (
          <>
            <fieldset>
              <legend className="etichetta-campo">{t.sole}</legend>
              <div className="chips">
                {t.soleValori.map((v, i) => (
                  <label key={v} className="chip"><input type="radio" name={`${name}-v`} checked={r.v === i} onChange={() => aggiorna({ v: i })} /><span>{v}</span></label>
                ))}
              </div>
              {t.soleAiuto && <p className="aiuto" style={{ marginTop: 8 }}>{t.soleAiuto}</p>}
            </fieldset>
            <fieldset>
              <legend className="etichetta-campo">{t.ritmo}</legend>
              <div className="chips">
                <label className="chip"><input type="radio" name={`${name}-r`} checked={r.r === null} onChange={() => aggiorna({ r: null })} /><span>{t.indifferente}</span></label>
                {t.ritmoValori.map((v, i) => (
                  <label key={v} className="chip"><input type="radio" name={`${name}-r`} checked={r.r === i} onChange={() => aggiorna({ r: i })} /><span>{v}</span></label>
                ))}
              </div>
              {t.ritmoAiuto && <p className="aiuto" style={{ marginTop: 8 }}>{t.ritmoAiuto}</p>}
            </fieldset>
            <fieldset>
              <legend className="etichetta-campo">{t.vicino}</legend>
              <div className="chips">
                {VICINI.map((k) => (
                  <label key={k} className="chip"><input type="checkbox" checked={r.n.includes(k)} onChange={(e) => aggiorna({ n: e.target.checked ? [...r.n, k] : r.n.filter((x) => x !== k) })} /><span>{t.viciniValori[k]}</span></label>
                ))}
              </div>
              {t.vicinoAiuto && <p className="aiuto" style={{ marginTop: 8 }}>{t.vicinoAiuto}</p>}
            </fieldset>
          </>
        )}
      </form>
      <section id="la-vostra-carta" aria-live="polite">
        <p className="etichetta-campo" style={{ margin: "0 0 6px" }}>{t.carta} · {t.partenza} {p.nomiOrigini[r.o]}</p>
        <p className="t-h3" style={{ margin: "0 0 20px" }}>{t.primo(L(top[0].id).nome, L(top[1].id).nome, L(top[2].id).nome)}</p>
        <ol className="risultati" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
          {top.map((x, i) => {
            const l = L(x.id);
            return (
              <li key={x.id} className="scheda" style={{ ["--c" as string]: l.colore, flexDirection: "row", alignItems: "flex-start", gap: 16 }}>
                <span className="rombo" aria-hidden="true">{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <a href={l.href} className="t-h3" style={{ textDecoration: "none" }}>{l.nome}</a>
                  <p className="t-data-label" style={{ color: "var(--c)", margin: "4px 0 10px" }}>{l.mondoNome}</p>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--fg-2)", fontSize: 14.5 }}>
                    {x.motivi.map((m) => <li key={m.chiave}>{t.motivi[m.chiave]?.(m.valore, l) ?? m.chiave}</li>)}
                  </ul>
                </div>
                <div style={{ textAlign: "right" }} title={t.su100Title}>
                  <span className="t-num-xl" style={{ fontSize: 44, color: "var(--gold)" }}>{Math.round(x.punteggio)}</span>
                  <span className="t-data-label" style={{ display: "block", color: "var(--fg-3)" }}>{t.su100}</span>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="bottoni" style={{ marginTop: 20 }}>
          <a className="bottone bottone-primario" href={`${p.hrefPC}#${hashPC(top.map((x) => L(x.id) && p.dati.find((d) => d.id === x.id)!.mondo), r.b, r.o, p.variante === "breve" ? "sestante" : "trova")}`}>{t.avvisami} <span className="freccia">→</span></a>
          <button type="button" className="bottone bottone-secondario" onClick={copia}>{copiato ? t.copiato : t.copia}</button>
        </div>
        <p className="aiuto" style={{ marginTop: 10 }}>{t.soloRisposte}</p>
        {p.variante === "breve" && p.hrefTrova && <p style={{ marginTop: 16 }}><a className="link-freccia" href={`${p.hrefTrova}#${codifica(r)}`}>{t.completa} <span className="freccia">→</span></a></p>}
        {p.variante === "completo" && (
          <details className="ripiega">
            <summary>{t.tutti}</summary>
            <div>
              <ol className="barre">
                {res.map((x) => { const l = L(x.id); return (
                  <li key={x.id} style={{ ["--c" as string]: l.colore }}><a href={l.href}>{l.nome}</a><span className="barra"><i style={{ width: `${Math.max(2, x.punteggio)}%` }} /></span><span className="num">{Math.round(x.punteggio)}</span></li>
                ); })}
              </ol>
            </div>
          </details>
        )}
        <p className="nota-fonte">{p.fonte}</p>
      </section>
    </div>
  );
}
