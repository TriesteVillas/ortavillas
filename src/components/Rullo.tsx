// Contatore a rullo: ogni cifra è una striscia 0–9 che scorre fino al suo valore quando il
// numero entra in vista (classe .visto messa da <Osservatore/>). Il testo vero sta in sr-only.
export function Rullo({ testo }: { testo: string }) {
  let i = 0;
  return (
    <span data-rullo="" className="rullo-contenitore">
      <span className="sr-only">{testo}</span>
      <span className="rullo" aria-hidden="true">
        {[...testo].map((ch, k) => {
          if (!/\d/.test(ch)) return <span key={k}>{ch}</span>;
          const d = Number(ch);
          const ritardo = i++ * 40;
          return (
            <span key={k} className="cifra">
              <span className="striscia" style={{ ["--d" as string]: d, transitionDelay: `${ritardo}ms` }}>
                {"0123456789".split("").map((c) => <span key={c}>{c}</span>)}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
