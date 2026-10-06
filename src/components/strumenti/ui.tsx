"use client";
// Controlli condivisi dei calcolatori e lo stato nell'hash (mai in query string: l'hash non
// arriva al server e non finisce nei log).
import { useEffect, useId, useRef, useState } from "react";
import type { Lingua } from "@/lib/rotte";

/** Stato del calcolatore nell'hash: letto all'apertura, riscritto solo dopo la prima modifica. */
export function useStatoHash<T extends Record<string, unknown>>(iniziale: T, campi: { [K in keyof T]: "n" | "b" | "s" }) {
  const [s, setS] = useState<T>(iniziale);
  const toccato = useRef(false);
  useEffect(() => {
    const h = location.hash.replace(/^#/, "");
    if (!h.includes("=")) return;
    const q = new URLSearchParams(h);
    const n: Record<string, unknown> = { ...iniziale };
    for (const k of Object.keys(campi)) {
      if (!q.has(k)) continue;
      const v = q.get(k)!;
      const tipo = campi[k as keyof T];
      if (tipo === "n") { if (v === "") n[k] = null; else { const x = Number(v); if (Number.isFinite(x)) n[k] = x; } }
      else if (tipo === "b") n[k] = v === "1";
      else n[k] = v;
    }
    setS(n as T);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!toccato.current) return;
    const q = new URLSearchParams();
    for (const k of Object.keys(campi)) {
      const v = s[k];
      const tipo = campi[k as keyof T];
      q.set(k, tipo === "b" ? (v ? "1" : "0") : v === null || v === undefined ? "" : String(v));
    }
    history.replaceState(null, "", "#" + q.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s]);
  const aggiorna = (x: Partial<T>) => { toccato.current = true; setS((v) => ({ ...v, ...x })); };
  return [s, aggiorna] as const;
}

export { fmtEuro, fmtNum, fmtPct } from "@/lib/strumenti/formato";
import { fmtEuro, fmtNum } from "@/lib/strumenti/formato";

/** Campo numerico formattato (euro o m²). `null` se vuoto e `vuoto` è permesso. */
export function CampoNumero(p: {
  l: Lingua; etichetta: string; valore: number | null; onChange: (v: number | null) => void;
  min?: number; max?: number; vuoto?: boolean; unita?: string; aiuto?: React.ReactNode; grande?: boolean;
}) {
  const id = useId();
  const fmt = (v: number | null) => (v === null ? "" : fmtNum(v, p.l));
  const [testo, setTesto] = useState(fmt(p.valore));
  const fuoco = useRef(false);
  useEffect(() => { if (!fuoco.current) setTesto(fmt(p.valore)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.valore, p.l]);
  const commit = (t: string) => {
    const cifre = t.replace(/[^\d]/g, "");
    if (!cifre) { if (p.vuoto) p.onChange(null); return; }
    let v = Number(cifre);
    if (p.max !== undefined) v = Math.min(p.max, v);
    p.onChange(v);
  };
  return (
    <div className={`campo st-campo${p.grande ? " st-grande" : ""}`}>
      <label htmlFor={id}>{p.etichetta}</label>
      <div className="st-unita">
        <input id={id} type="text" inputMode="numeric" autoComplete="off" value={testo}
          onFocus={() => { fuoco.current = true; }}
          onChange={(e) => { setTesto(e.target.value); commit(e.target.value); }}
          onBlur={() => {
            fuoco.current = false;
            if (p.min !== undefined && p.valore !== null && p.valore < p.min) p.onChange(p.min);
            setTesto(fmt(p.valore !== null && p.min !== undefined && p.valore < p.min ? p.min : p.valore));
          }} />
        {p.unita && <span aria-hidden="true">{p.unita}</span>}
      </div>
      {p.aiuto && <p className="aiuto">{p.aiuto}</p>}
    </div>
  );
}

/** Cursore logaritmico (0–1000) per prezzi e budget. */
export function CursoreLog(p: { l: Lingua; etichetta: string; valore: number; min: number; max: number; onChange: (v: number) => void; passo: (v: number) => number }) {
  const lo = Math.log(p.min), hi = Math.log(p.max);
  const pos = Math.round(((Math.log(Math.min(p.max, Math.max(p.min, p.valore))) - lo) / (hi - lo)) * 1000);
  return (
    <div className="st-cursore">
      <input type="range" min={0} max={1000} step={1} value={pos} aria-label={p.etichetta} aria-valuetext={fmtEuro(p.valore, p.l)}
        onChange={(e) => { const v = Math.exp(lo + (Number(e.target.value) / 1000) * (hi - lo)); const s = p.passo(v); p.onChange(Math.round(v / s) * s); }} />
      <div className="st-segni aiuto"><span>{fmtEuro(p.min, p.l)}</span><span>{fmtEuro(p.max, p.l)}</span></div>
    </div>
  );
}

export function Segmenti<T extends string | number>(p: { etichetta: string; valore: T; opzioni: { v: T; t: string }[]; onChange: (v: T) => void; aiuto?: React.ReactNode }) {
  const nome = useId();
  return (
    <fieldset className="st-fieldset">
      <legend className="etichetta-campo">{p.etichetta}</legend>
      <div className="chips">
        {p.opzioni.map((o) => (
          <label key={String(o.v)} className="chip"><input type="radio" name={nome} checked={p.valore === o.v} onChange={() => p.onChange(o.v)} /><span>{o.t}</span></label>
        ))}
      </div>
      {p.aiuto && <p className="aiuto" style={{ marginTop: 8 }}>{p.aiuto}</p>}
    </fieldset>
  );
}

export function Interruttore(p: { etichetta: string; valore: boolean; onChange: (v: boolean) => void; aiuto?: React.ReactNode }) {
  const id = useId();
  return (
    <div className="st-interruttore">
      <label htmlFor={id}>
        <input id={id} type="checkbox" role="switch" checked={p.valore} onChange={(e) => p.onChange(e.target.checked)} />
        <span className="st-switch" aria-hidden="true" />
        <span>{p.etichetta}</span>
      </label>
      {p.aiuto && <p className="aiuto">{p.aiuto}</p>}
    </div>
  );
}

export function Cursore(p: { etichetta: string; valore: number; min: number; max: number; passo: number; testo: string; onChange: (v: number) => void; aiuto?: React.ReactNode }) {
  const id = useId();
  return (
    <div className="st-cursore campo">
      <label htmlFor={id}>{p.etichetta} <b className="st-valore">{p.testo}</b></label>
      <input id={id} type="range" min={p.min} max={p.max} step={p.passo} value={p.valore} aria-valuetext={p.testo} onChange={(e) => p.onChange(Number(e.target.value))} />
      {p.aiuto && <p className="aiuto">{p.aiuto}</p>}
    </div>
  );
}

/** Riassunto per i lettori di schermo, con un po' di ritardo per non parlare a ogni tacca. */
export function Annuncio({ testo }: { testo: string }) {
  const [t, setT] = useState(testo);
  useEffect(() => { const h = setTimeout(() => setT(testo), 700); return () => clearTimeout(h); }, [testo]);
  return <p className="sr-only" aria-live="polite">{t}</p>;
}
