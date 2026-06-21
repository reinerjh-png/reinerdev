import Link from "next/link";

export default function CtaBanner() {
  return (
    <div className="container">
      <div className="cta-banner animate-fade-up" id="contacto">
        <div className="cta-banner-bg"></div>
        <div className="cta-banner-content">
          <div className="badge" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
            <span className="dot"></span>
            ¿Listo para empezar?
          </div>
          <h2>Tu negocio merece <span className="text-gradient">software de calidad</span></h2>
          <p>Hablemos sobre cómo ReinerDev puede transformar tus operaciones con tecnología diseñada para crecer.</p>
          <div className="cta-banner-actions">
            <Link href="?modal=demo" scroll={false} className="btn btn-primary btn-lg" id="cta-btn-demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Solicitar demo gratuita
            </Link>
            <Link href="/#desarrollo" className="btn btn-secondary btn-lg" id="cta-btn-quote">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Cotizar mi proyecto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
