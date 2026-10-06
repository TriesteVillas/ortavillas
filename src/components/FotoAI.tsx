// Una foto rielaborata con l'AI, sempre col suo segno «AI» e la sua riga di credito:
// foto d'origine, autore, licenza, e il link alla riga nei titoli di coda.
import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { src, type Media } from "@/content/media";

const T: Record<Lingua, { badge: string; titolo: string; origine: string; licenza: string; riga: string }> = {
  it: { badge: "Rielaborata con l'AI", titolo: "Che cosa è cambiato", origine: "Foto d'origine", licenza: "Licenza", riga: "La sua riga nei titoli di coda" },
  en: { badge: "Reworked with AI", titolo: "What changed", origine: "Source photo", licenza: "Licence", riga: "Its line in the closing credits" },
  de: { badge: "Mit KI bearbeitet", titolo: "Was sich geändert hat", origine: "Ausgangsfoto", licenza: "Lizenz", riga: "Seine Zeile im Abspann" },
  sl: { badge: "Predelano z UI", titolo: "Kaj se je spremenilo", origine: "Izvirna fotografija", licenza: "Licenca", riga: "Njena vrstica v odjavni špici" },
};

export function CreditoAI({ m, l, compatto = false }: { m: Media; l: Lingua; compatto?: boolean }) {
  const t = T[l];
  return (
    <details className="credito-ai">
      <summary><span className="badge-ai">AI</span>{!compatto && <span>{t.badge}</span>}</summary>
      <div className="credito-ai-pannello">
        <p><b>{t.titolo}.</b> {m.cambiato[l]}</p>
        <p>{t.origine}: <a href={m.pagina} rel="noopener">{m.file}</a> · {m.autore}</p>
        <p>{t.licenza}: {m.licenza_url ? <a href={m.licenza_url} rel="noopener">{m.licenza}</a> : m.licenza} · Nano Banana 2 (Higgsfield) · 6/10/2026</p>
        <p><Link href={`${percorso(l, "ai")}#${m.id}`}>{t.riga} →</Link></p>
      </div>
    </details>
  );
}

export function FotoAI({ m, l, taglio, className, priorita }: { m: Media; l: Lingua; taglio: "16x9" | "4x3" | "1x1"; className?: string; priorita?: boolean }) {
  const s = taglio === "16x9"
    ? { src: src(m, "16x9.1280"), srcSet: `${src(m, "16x9.1280")} 1280w, ${src(m, "16x9.2400")} 2400w`, w: 1280, h: 720 }
    : taglio === "4x3" ? { src: src(m, "4x3.960"), srcSet: undefined, w: 960, h: 720 } : { src: src(m, "1x1.720"), srcSet: undefined, w: 720, h: 720 };
  return (
    <img className={className} src={s.src} srcSet={s.srcSet} sizes={taglio === "16x9" ? "100vw" : "(max-width: 768px) 90vw, 360px"} width={s.w} height={s.h}
      alt={m.soggetto[l]} loading={priorita ? "eager" : "lazy"} fetchPriority={priorita ? "high" : undefined} />
  );
}
