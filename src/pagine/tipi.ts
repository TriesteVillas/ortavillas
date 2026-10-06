import type { Pagina } from "@/lib/risolvi";
import type { Meta } from "@/lib/meta";
export type VocePagina = { meta: (p: Pagina) => Meta; Corpo: (props: { p: Pagina }) => React.ReactNode; carta?: (p: Pagina) => boolean };
