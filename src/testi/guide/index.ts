// Le sette guide in quattro lingue, e il loro ordine nell'indice.
import type { Lingua } from "@/lib/rotte";
import type { GuidaId } from "@/content/indice";
import type { Guida, SchedaGuida } from "./tipi";
import * as it from "./it";
import * as en from "./en";
import * as de from "./de";
import * as sl from "./sl";

type Modulo = { comprare: Guida; costi: Guida; estOvest: Guida; ortaMaggiore: Guida; arrivare: Guida; quotazioni: Guida; affitti: Guida };
const PER_LINGUA: Record<Lingua, Modulo> = { it, en, de, sl };

const CHIAVE: Record<GuidaId, keyof Modulo> = {
  comprare: "comprare", costi: "costi", "est-ovest": "estOvest", "orta-maggiore": "ortaMaggiore",
  arrivare: "arrivare", quotazioni: "quotazioni", affitti: "affitti",
};

export function guida(id: GuidaId, l: Lingua): Guida {
  return PER_LINGUA[l][CHIAVE[id]];
}

/** Ordine dell'indice; pubblico decide la CTA in fondo alla guida. */
export const SCHEDE: SchedaGuida[] = [
  { id: "comprare", pubblico: "compra", principale: true },
  { id: "costi", pubblico: "compra", principale: true },
  { id: "est-ovest", pubblico: "compra" },
  { id: "orta-maggiore", pubblico: "compra" },
  { id: "arrivare", pubblico: "compra" },
  { id: "quotazioni", pubblico: "compra" },
  { id: "affitti", pubblico: "vende" },
];
