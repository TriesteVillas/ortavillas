import type { ChiavePagina } from "@/lib/rotte";
import type { VocePagina } from "./tipi";
import { home } from "./home";
import { luoghi } from "./luoghi";
import { distanze } from "./distanze";
import { guide } from "./guide";
import { strumenti } from "./strumenti";
import { proprietari } from "./servizi/proprietari";
import { agenzie } from "./servizi/agenzie";
import { pc } from "./servizi/pc";
import { chiSiamo } from "./servizi/chiSiamo";
import { contatti } from "./servizi/contatti";
import { ai } from "./servizi/ai";
import { dati } from "./servizi/dati";
import { privacy } from "./servizi/privacy";
import { noteLegali } from "./servizi/noteLegali";
import { cookie } from "./servizi/cookie";

// Una voce per chiave di pagina. Le pagine con figli (luoghi, guide, strumenti, distanze)
// smistano da sé fra indice e figlio leggendo p.figlio.
export const PAGINE: Record<ChiavePagina, VocePagina> = {
  home, luoghi, distanze, guide, strumenti, proprietari, agenzie, pc, chiSiamo, contatti, ai, dati, privacy, noteLegali, cookie,
};
