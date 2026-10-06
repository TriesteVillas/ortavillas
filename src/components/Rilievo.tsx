"use client";
// Il rilievo del Cusio con una «camera» 2D: una posa = centro (lat, lon) + zoom. Le etichette
// e i tracciati vivono nello spazio dell'immagine, così restano incollati al terreno mentre la
// camera si muove; il testo delle etichette è contro-scalato e non cresce con lo zoom.
import { useEffect, useRef, useState } from "react";
import { RILIEVO, proietta } from "@/lib/mappa";

export type Posa = { lat: number; lon: number; zoom: number; zoomTelefono?: number; spostaX?: number };
export type Etichetta = { id: string; testo: string; sotto?: string; lat: number; lon: number; colore?: string; lato?: "dx" | "sx"; href?: string; strati?: string[]; forte?: boolean };
export type Tracciato = { id: string; punti: [number, number][]; colore?: string; tratteggio?: boolean; strati?: string[]; spessore?: number };

export function Rilievo(p: {
  posa: Posa; etichette?: Etichetta[]; tracciati?: Tracciato[]; strati?: string[]; alt: string;
  className?: string; priorita?: boolean; anelli?: { lat: number; lon: number; raggiKm: number[] };
}) {
  const box = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ w: 1200, h: 800 });
  useEffect(() => {
    const el = box.current; if (!el) return;
    const f = () => setDim({ w: el.clientWidth, h: el.clientHeight });
    f();
    const ro = new ResizeObserver(f); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const telefono = dim.w < 768;
  // lo zoom è relativo a «immagine larga quanto il contenitore»
  const base = Math.max(dim.w / RILIEVO.w, dim.h / RILIEVO.h);
  const z = base * (telefono ? p.posa.zoomTelefono ?? p.posa.zoom * 0.8 : p.posa.zoom);
  const c = proietta(p.posa.lat, p.posa.lon);
  const sx = (p.posa.spostaX ?? 0) * (telefono ? 0 : dim.w);
  const tx = dim.w / 2 + sx - c.x * z;
  const ty = dim.h / 2 - c.y * z;
  const attivi = new Set(p.strati ?? []);
  const visibile = (s?: string[]) => !s || s.some((x) => attivi.has(x));
  const kmPx = 1000 / 13.3145; // px dell'immagine per km (px_m del rilievo)
  return (
    <div ref={box} className={`rilievo ${p.className ?? ""}`} role="img" aria-label={p.alt}>
      <div className="rilievo-camera" style={{ transform: `translate(${tx}px, ${ty}px) scale(${z})`, ["--z" as string]: z }}>
        <img src={RILIEVO.src} width={RILIEVO.w} height={RILIEVO.h} alt="" fetchPriority={p.priorita ? "high" : undefined} draggable={false} />
        <svg className="rilievo-svg" viewBox={`0 0 ${RILIEVO.w} ${RILIEVO.h}`} aria-hidden="true">
          {p.anelli && p.anelli.raggiKm.map((r, i) => {
            const o = proietta(p.anelli!.lat, p.anelli!.lon);
            return <circle key={r} cx={o.x} cy={o.y} r={r * kmPx} fill="none" stroke={["#f2e6cb", "#e3cda4", "#bfa274"][i % 3]} strokeOpacity="0.55" strokeWidth={1.6 / z} strokeDasharray={`${4 / z} ${5 / z}`} />;
          })}
          {(p.tracciati ?? []).map((t) => {
            const d = t.punti.map(([lon, lat], i) => { const q = proietta(lat, lon); return `${i ? "L" : "M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`; }).join("");
            return (
              <path key={t.id} d={d} fill="none" stroke={t.colore ?? "var(--gold)"} strokeWidth={(t.spessore ?? 2.2) / z}
                strokeDasharray={t.tratteggio ? `${6 / z} ${5 / z}` : undefined} strokeLinejoin="round" strokeLinecap="round"
                className="rilievo-tracciato" data-visibile={visibile(t.strati) ? "si" : "no"} pathLength={1} />
            );
          })}
        </svg>
        {(p.etichette ?? []).map((e) => {
          const q = proietta(e.lat, e.lon);
          const Tag = e.href ? "a" : "span";
          return (
            <Tag key={e.id} href={e.href} className="etichetta etichetta-rilievo" data-lato={e.lato} data-visibile={visibile(e.strati) ? "si" : "no"} data-forte={e.forte ? "si" : undefined}
              style={{ left: `${q.x.toFixed(2)}px`, top: `${q.y.toFixed(2)}px`, ["--c" as string]: e.colore ?? "var(--gold)" }}>
              <span className="punto" />
              <span className="testo"><span className="nome">{e.testo}</span>{e.sotto && <span className="min">{e.sotto}</span>}</span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
