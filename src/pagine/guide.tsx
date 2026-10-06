// Sezione Guide: indice (senza figlio) e le sette guide (figlio = una di GUIDE_ID). Su carta.
import "@/app/css/guide.css";
import type { VocePagina } from "./tipi";
import { GUIDE_ID, type GuidaId } from "@/content/indice";
import { GUIDE_TESTI } from "@/testi/guide/comuni";
import { guida } from "@/testi/guide";
import { IndiceGuide } from "@/components/guide/IndiceGuide";
import { PaginaGuida } from "@/components/guide/Guida";

const idGuida = (x?: string): GuidaId | null => ((GUIDE_ID as readonly string[]).includes(x ?? "") ? (x as GuidaId) : null);

export const guide: VocePagina = {
  carta: () => true,
  meta: (p) => {
    const id = idGuida(p.figlio?.id);
    if (!id) return { titolo: GUIDE_TESTI[p.lingua].titolo, descrizione: GUIDE_TESTI[p.lingua].descrizione };
    const g = guida(id, p.lingua);
    return { titolo: g.titolo, descrizione: g.descrizione };
  },
  Corpo: ({ p }) => {
    const id = idGuida(p.figlio?.id);
    return id ? <PaginaGuida id={id} l={p.lingua} /> : <IndiceGuide l={p.lingua} />;
  },
};
