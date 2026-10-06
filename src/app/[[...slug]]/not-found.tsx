import Link from "next/link";
export default function NonTrovata() {
  return (
    <main className="testata-notte" style={{ minHeight: "80vh" }}>
      <div className="contenitore">
        <p className="occhiello">Fuori carta · Off the map</p>
        <h1 className="t-display-l">Questa pagina non è sulla carta.</h1>
        <p className="t-lead" lang="en">This page is not on the map.</p>
        <p className="t-lead">L&apos;indirizzo non porta da nessuna parte: forse è cambiato, forse è scritto male. Da qui si riparte.</p>
        <div className="bottoni" style={{ marginTop: 28 }}>
          <Link className="bottone bottone-primario" href="/">Prima pagina <span className="freccia">→</span></Link>
          <Link className="bottone bottone-secondario" href="/en" lang="en">Home page</Link>
          <Link className="bottone bottone-secondario" href="/de" lang="de">Startseite</Link>
          <Link className="bottone bottone-secondario" href="/sl" lang="sl">Prva stran</Link>
        </div>
      </div>
    </main>
  );
}
