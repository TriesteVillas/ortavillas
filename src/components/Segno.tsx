// Il segno di OrtaVillas: tre isoipse chiuse e allungate come il lago, dall'acqua verso il
// Mottarone, con l'isola di San Giulio come punto. Colori dall'interno: iso-15, sand-300, iso-45.
export function Segno({ className = "logo-segno", carta = false }: { className?: string; carta?: boolean }) {
  const c = carta ? ["#0f4a47", "#1d6b66", "#bfa274"] : ["#f2e6cb", "#e3cda4", "#bfa274"];
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g fill="none" transform="rotate(-14 24 24)">
        <ellipse cx="24" cy="24" rx="20.5" ry="22" stroke={c[2]} strokeWidth="2.4" />
        <ellipse cx="23" cy="25" rx="13.5" ry="17" stroke={c[1]} strokeWidth="2.6" />
        <ellipse cx="22" cy="26" rx="6.5" ry="11.5" stroke={c[0]} strokeWidth="2.8" />
      </g>
      <circle cx="21.5" cy="27" r="2.4" fill={c[0]} />
    </svg>
  );
}
