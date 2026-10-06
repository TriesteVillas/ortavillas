import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { GUIDE_TESTI } from "@/testi/guide/comuni";
import type { Pubblico } from "@/testi/guide/tipi";

/** CTA in fondo: chi compra → Private Collection; chi possiede → proprietari. */
export function CtaGuide({ l, pubblico }: { l: Lingua; pubblico: Pubblico }) {
  const T = GUIDE_TESTI[l];
  const c = pubblico === "compra" ? T.ctaCompra : T.ctaVende;
  const primo = percorso(l, pubblico === "compra" ? "pc" : "proprietari");
  const altro = percorso(l, pubblico === "compra" ? "proprietari" : "pc");
  return (
    <section className="guida-cta" aria-labelledby="guida-cta-titolo">
      <div className="contenitore">
        <div className="guida-cta-box">
          <p className="occhiello">{c.occhiello}</p>
          <h2 id="guida-cta-titolo" className="t-display-l">{c.h2}</h2>
          <p className="t-lead">{c.testo}</p>
          <div className="bottoni">
            <Link className="bottone bottone-primario" href={primo}>{c.bottone}</Link>
            <Link className="link-freccia" href={altro}>{c.secondario} →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
