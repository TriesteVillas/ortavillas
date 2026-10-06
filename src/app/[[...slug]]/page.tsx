import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { risolvi, tuttiISlug, type Pagina } from "@/lib/risolvi";
import { metadati, type Meta } from "@/lib/meta";
import { Cornice } from "@/components/Cornice";
import { PAGINE } from "@/pagine/registro";

export const dynamicParams = false;
export function generateStaticParams() { return tuttiISlug(); }

type Props = { params: Promise<{ slug?: string[] }> };

function trova(p: Pagina) {
  const voce = PAGINE[p.chiave];
  return voce;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = risolvi((await params).slug);
  if (!p) return {};
  const m: Meta = trova(p).meta(p);
  return metadati(p, m);
}

export default async function Pagina({ params }: Props) {
  const p = risolvi((await params).slug);
  if (!p) notFound();
  const voce = trova(p);
  const Corpo = voce.Corpo;
  return (
    <Cornice pagina={p} carta={voce.carta?.(p) ?? false}>
      <Corpo p={p} />
    </Cornice>
  );
}
