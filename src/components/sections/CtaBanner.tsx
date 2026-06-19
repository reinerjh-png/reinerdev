import Link from 'next/link';

export default function CtaBanner() {
  return (
    <div className="container pb-[120px]">
      <div className="cta-banner animate-fade-up">
        <div className="cta-banner-bg"></div>
        <div className="cta-banner-content">
          <h2>¿Listo para escalar tu empresa al <span className="text-gradient">siguiente nivel</span>?</h2>
          <p>Ya sea que necesites uno de nuestros productos SaaS o un desarrollo a medida, estamos listos para ayudarte a crecer.</p>
          <div className="cta-banner-actions">
            <Link href="#cotizacion" className="btn btn-primary btn-lg">Solicitar proyecto</Link>
            <button className="btn btn-secondary btn-lg">Agendar consultoría gratis</button>
          </div>
        </div>
      </div>
    </div>
  );
}
