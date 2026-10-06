import type { VocePagina } from "./tipi";
export const provvisoria: VocePagina = {
  meta: (p) => ({ titolo: `OrtaVillas · ${p.chiave}`, descrizione: "In costruzione." }),
  Corpo: ({ p }) => (
    <section className="testata-notte"><div className="contenitore"><p className="occhiello">{p.chiave}</p><h1 className="t-display-l">In costruzione.</h1></div></section>
  ),
};
