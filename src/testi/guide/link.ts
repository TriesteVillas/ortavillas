// Percorsi interni per i testi delle guide, nella lingua giusta.
import { percorso, type Lingua } from "@/lib/rotte";
import { GUIDE_SLUG, LUOGHI_SLUG, STRUMENTI_SLUG, ORIGINI_SLUG, type GuidaId, type LuogoId, type StrumentoId, type OrigineId } from "@/content/indice";

export const vai = (l: Lingua) => ({
  guida: (id: GuidaId) => percorso(l, "guide", GUIDE_SLUG[id][l]),
  luogo: (id: LuogoId) => percorso(l, "luoghi", LUOGHI_SLUG[id][l]),
  strumento: (id: StrumentoId) => percorso(l, "strumenti", STRUMENTI_SLUG[id][l]),
  distanze: (id?: OrigineId) => percorso(l, "distanze", id ? ORIGINI_SLUG[id][l] : undefined),
  pc: percorso(l, "pc"),
  proprietari: percorso(l, "proprietari"),
  dati: percorso(l, "dati"),
});
