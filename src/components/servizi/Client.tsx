"use client";
// Due piccoli pezzi interattivi delle pagine di edizione: il bottone che riapre il banner dei
// cookie (lo stesso evento del colophon) e il riquadro «Come citare» che si seleziona al clic.
import { useRef } from "react";

export function BottoneCookie({ testo }: { testo: string }) {
  return (
    <button type="button" className="bottone bottone-secondario" onClick={() => window.dispatchEvent(new Event("ov:cookie"))}>
      {testo}
    </button>
  );
}

export function Citazione({ testo, aiuto }: { testo: string; aiuto: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const seleziona = () => {
    const el = ref.current;
    if (!el) return;
    const r = document.createRange();
    r.selectNodeContents(el);
    const s = window.getSelection();
    s?.removeAllRanges();
    s?.addRange(r);
  };
  return (
    <figure className="sv-cita">
      <p ref={ref} tabIndex={0} onClick={seleziona} onFocus={seleziona}>{testo}</p>
      <figcaption className="aiuto">{aiuto}</figcaption>
    </figure>
  );
}
