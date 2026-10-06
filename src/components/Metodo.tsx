"use client";
// Le cinque tappe del metodo, su un caso pubblico di Trieste. Tour 3D e film si caricano
// solo al clic, in un palco sovrapposto: prima del clic nessun cookie di terzi.
import { useState } from "react";
import { HOME } from "@/testi/home";
import type { Lingua } from "@/lib/rotte";

const SCHEDA = { it: "", en: "en/", de: "de/", sl: "sl/" } as const;

export function Metodo({ l, conCaso = true }: { l: Lingua; conCaso?: boolean }) {
  const t = HOME[l].metodo;
  const [palco, setPalco] = useState<null | "tour" | "film">(null);
  return (
    <>
      {conCaso && <p className="credito" style={{ marginBottom: 24 }}>{t.caso}</p>}
      <ol className="metodo">
        {t.passi.map((p, i) => (
          <li key={p.titolo} className="rivela">
            <span className="metodo-n">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="t-h3">{p.titolo}</h3>
              <p>{p.testo}</p>
              {i === 1 && <button type="button" className="link-freccia bottone-testo" onClick={() => setPalco("tour")}>{t.tour} <small>{t.tourSotto}</small></button>}
              {i === 2 && <button type="button" className="link-freccia bottone-testo" onClick={() => setPalco("film")}>{t.film} <small>{t.filmSotto}</small></button>}
              {i === 3 && (
                <p className="chips" style={{ marginTop: 10 }}>
                  {(["en", "it", "de", "sl"] as const).map((x) => (
                    <a key={x} className="chip" href={`https://triestevillas.com/${SCHEDA[x]}annuncio/villa-storica-strada-costiera-0003`} rel="noopener" lang={x}><span>{x.toUpperCase()}</span></a>
                  ))}
                </p>
              )}
              {i === 4 && <a className="link-freccia" href="https://triestevillas.com/private" rel="noopener">{t.pc} ↗</a>}
            </div>
          </li>
        ))}
      </ol>
      {palco && (
        <div className="palco" role="region" aria-label={palco === "tour" ? t.tour : t.film}>
          <button type="button" className="bottone bottone-secondario palco-chiudi" onClick={() => setPalco(null)}>✕</button>
          <iframe
            title={palco === "tour" ? "Tour 3D · Villa storica Strada Costiera" : "Film · Villa storica Strada Costiera"}
            src={palco === "tour" ? "https://my.matterport.com/show/?m=H51vm1o64mF&play=1&qs=1" : `https://www.youtube-nocookie.com/embed/3d7Alzfxv3w?autoplay=1&rel=0&modestbranding=1&hl=${l}`}
            allow="autoplay; fullscreen; xr-spatial-tracking" allowFullScreen
          />
        </div>
      )}
    </>
  );
}
