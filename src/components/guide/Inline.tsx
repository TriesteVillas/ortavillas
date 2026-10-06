// Markup minimo dei testi delle guide: **grassetto**, [testo](url), [^n] rimando alla fonte n.
import Link from "next/link";
import type { ReactNode } from "react";

const RE = /\*\*(.+?)\*\*|\[\^(\d+)\]|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function Inline({ testo, etichettaFonte }: { testo: string; etichettaFonte: (n: number) => string }) {
  const out: ReactNode[] = [];
  let ultimo = 0;
  let k = 0;
  for (const m of testo.matchAll(RE)) {
    const i = m.index ?? 0;
    if (i > ultimo) out.push(testo.slice(ultimo, i));
    if (m[1] !== undefined) {
      out.push(<strong key={k++}><Inline testo={m[1]} etichettaFonte={etichettaFonte} /></strong>);
    } else if (m[2] !== undefined) {
      const n = Number(m[2]);
      out.push(<sup key={k++} className="rimando"><a href={`#fonte-${n}`} aria-label={etichettaFonte(n)}>{n}</a></sup>);
    } else {
      const url = m[4];
      out.push(
        url.startsWith("/")
          ? <Link key={k++} href={url}>{m[3]}</Link>
          : <a key={k++} href={url} target="_blank" rel="noopener noreferrer">{m[3]}</a>,
      );
    }
    ultimo = i + m[0].length;
  }
  if (ultimo < testo.length) out.push(testo.slice(ultimo));
  return <>{out}</>;
}

/** Testo semplice (per JSON-LD e conteggi): toglie il markup. */
export function piano(testo: string): string {
  return testo.replace(/\[\^\d+\]/g, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}
