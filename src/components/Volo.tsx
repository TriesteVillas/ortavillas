"use client";
// «Il volo»: il palco col rilievo resta fermo (sticky) mentre i capitoli scorrono sopra;
// il capitolo che occupa il centro dello schermo decide la posa della camera e gli strati.
import { useEffect, useRef, useState } from "react";
import { Rilievo, type Etichetta, type Posa, type Tracciato } from "./Rilievo";

export type Capitolo = { id: string; posa: Posa; strati: string[]; contenuto: React.ReactNode };

export function Volo({ capitoli, etichette, tracciati, alt, aria }: { capitoli: Capitolo[]; etichette: Etichetta[]; tracciati: Tracciato[]; alt: string; aria: string }) {
  const [attivo, setAttivo] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver((voci) => {
      voci.forEach((v) => {
        if (v.isIntersecting) setAttivo(Number((v.target as HTMLElement).dataset.indice));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);
  const c = capitoli[attivo];
  return (
    <section className="volo" id="volo" aria-label={aria}>
      <div className="volo-palco">
        <Rilievo posa={c.posa} strati={c.strati} etichette={etichette} tracciati={tracciati} alt={alt} className="rilievo-pieno" />
        <div className="volo-velo" />
        <div className="reticolo sx" /><div className="reticolo dx" />
      </div>
      <div className="volo-capitoli">
        {capitoli.map((k, i) => (
          <div key={k.id} className="capitolo" data-indice={i} ref={(el) => { refs.current[i] = el; }}>
            <div className="contenitore"><div className="pannello">{k.contenuto}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
