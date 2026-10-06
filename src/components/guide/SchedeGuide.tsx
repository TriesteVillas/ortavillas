import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { GUIDE_SLUG, type GuidaId } from "@/content/indice";
import { TITOLI_GUIDE } from "@/content/titoli";
import { GUIDE_TESTI } from "@/testi/guide/comuni";
import { FONTI } from "@/testi/guide/fonti";
import { guida, SCHEDE } from "@/testi/guide";
import { AGGIORNATA } from "@/testi/guide/dati";
import { DATA_LUNGA, minutiLettura } from "./comune";

/** Le guide in schede (indice e «Le altre guide»). */
export function SchedeGuide({ l, escludi, conMeta = false }: { l: Lingua; escludi?: GuidaId; conMeta?: boolean }) {
  const T = GUIDE_TESTI[l];
  return (
    <ul className="schede guida-schede">
      {SCHEDE.filter((s) => s.id !== escludi).map((s) => {
        const tit = TITOLI_GUIDE[s.id][l];
        return (
          <li key={s.id}>
            <Link className="scheda" href={percorso(l, "guide", GUIDE_SLUG[s.id][l])}>
              <span className="guida-num t-data">{String(SCHEDE.findIndex((x) => x.id === s.id) + 1).padStart(2, "0")}{s.principale && conMeta ? ` · ${T.principale}` : ""}</span>
              <h3 className="t-h3">{tit.titolo}</h3>
              <p>{tit.breve}</p>
              {conMeta && (
                <span className="piede">{T.aggiornata} {DATA_LUNGA[l](AGGIORNATA)} · {T.fonti(FONTI[s.id].length)} · {T.minuti(minutiLettura(guida(s.id, l)))}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
