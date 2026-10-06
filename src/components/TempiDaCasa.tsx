// Server: prepara la matrice dei tempi; il client sceglie la colonna dalla città salvata.
import { LUOGHI, perTempo } from "@/lib/luoghi";
import { tempoDa } from "@/lib/dati";
import { ORIGINI_ID, LUOGHI_SLUG } from "@/content/indice";
import { NOMI_ORIGINI } from "@/content/titoli";
import { MONDI } from "@/content/mondi";
import { COLORE_MONDO } from "@/content/luoghi-base";
import { HOME } from "@/testi/home";
import { percorso, type Lingua } from "@/lib/rotte";
import { TempiDaCasaClient, type RigaTempi } from "./TempiDaCasaClient";

export function TempiDaCasa({ l }: { l: Lingua }) {
  const righe: RigaTempi[] = perTempo(LUOGHI).map((x) => ({
    id: x.id, nome: x.nome, href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]), mondo: MONDI[x.mondo][l].nome, colore: COLORE_MONDO[x.mondo].notte,
    tempi: Object.fromEntries(ORIGINI_ID.map((o) => { const r = tempoDa(o, x.id); return [o, r ? [r.minuti, r.km] : [NaN, NaN]]; })),
  }));
  const t = HOME[l].daCasa;
  return <TempiDaCasaClient l={l} righe={righe} origini={ORIGINI_ID.map((o) => ({ id: o, nome: NOMI_ORIGINI[o][l] }))} t={{ tutti: t.tuttiTempi, tabella: t.tabellaTitolo, colonne: t.colonne, nota: t.nota, rispetto: t.rispetto, riferimento: t.riferimento }} />;
}
