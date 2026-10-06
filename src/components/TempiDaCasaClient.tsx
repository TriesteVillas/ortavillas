"use client";
import { useEffect, useState } from "react";
import type { Lingua } from "@/lib/rotte";

export type RigaTempi = { id: string; nome: string; href: string; mondo: string; colore: string; tempi: Record<string, number[]> };

const fmt = (min: number, l: Lingua) => {
  const u = l === "de" ? ["Std.", "Min."] : ["h", "min"];
  if (!Number.isFinite(min)) return "—";
  return min < 90 ? `${min} ${u[1]}` : `${Math.floor(min / 60)} ${u[0]} ${String(min % 60).padStart(2, "0")} ${u[1]}`;
};

export function TempiDaCasaClient({ l, righe, origini, t }: {
  l: Lingua; righe: RigaTempi[]; origini: { id: string; nome: string }[];
  t: { tutti: string; tabella: string; colonne: [string, string, string, string]; nota: string; rispetto: string; riferimento: string };
}) {
  const [o, setO] = useState("milano");
  useEffect(() => {
    try { const v = localStorage.getItem("ov-origine"); if (v) setO(v); } catch { /* */ }
    const f = (e: Event) => setO((e as CustomEvent).detail);
    window.addEventListener("ov:origine", f);
    return () => window.removeEventListener("ov:origine", f);
  }, []);
  const nome = origini.find((x) => x.id === o)?.nome ?? o;
  const ordinate = [...righe].sort((a, b) => a.tempi[o][0] - b.tempi[o][0]);
  const max = Math.max(...righe.map((r) => r.tempi[o][0]).filter(Number.isFinite));
  const n = new Intl.NumberFormat(l === "en" ? "en-GB" : l === "de" ? "de-DE" : l === "sl" ? "sl-SI" : "it-IT", { maximumFractionDigits: 0 });
  return (
    <details className="ripiega" style={{ marginTop: 48 }}>
      <summary>{t.tutti} · {nome}</summary>
      <div>
        <ol className="barre" style={{ marginBottom: 32 }}>
          {ordinate.map((r) => {
            const m = r.tempi[o][0];
            const d = m - r.tempi.milano[0];
            return (
              <li key={r.id} style={{ ["--c" as string]: r.colore, gridTemplateColumns: "170px 1fr 92px 120px" }}>
                <a href={r.href}>{r.nome}</a>
                <span className="barra"><i style={{ width: `${(m / max) * 100}%` }} /></span>
                <span className="num">{fmt(m, l)}</span>
                <span className="aiuto" style={{ textAlign: "right" }}>{o === "milano" ? t.riferimento : `${d > 0 ? "+" : d < 0 ? "−" : "±"}${Math.abs(d)} min ${t.rispetto}`}</span>
              </li>
            );
          })}
        </ol>
        <div className="tabella-scorre" tabIndex={0} role="region" aria-label={t.tabella}>
          <table className="tabella">
            <caption>{t.tabella}</caption>
            <thead><tr><th scope="col">{t.colonne[0]}</th>{origini.map((x) => <th key={x.id} scope="col" className="num">{x.nome}</th>)}</tr></thead>
            <tbody>
              {righe.map((r) => (
                <tr key={r.id}><th scope="row"><a href={r.href}>{r.nome}</a></th>{origini.map((x) => <td key={x.id} className="num" title={`${n.format(r.tempi[x.id][1])} km`}>{fmt(r.tempi[x.id][0], l)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nota-fonte">{t.nota}</p>
      </div>
    </details>
  );
}
