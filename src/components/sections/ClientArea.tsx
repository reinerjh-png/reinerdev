export default function ClientArea() {
  return (
    <section className="section-py client-area" id="clientes" aria-labelledby="client-title">
      <div className="client-area-bg"></div>
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>Portal de clientes</div>
          <h2 className="section-title" id="client-title">
            Tu acceso a todo, <span className="text-gradient">en un solo lugar</span>
          </h2>
          <p className="section-subtitle">
            Clientes de ReinerDev tienen acceso a su portal privado donde gestionan todo sobre su sistema contratado.
          </p>
        </div>

        <div className="client-features-grid">
          <div className="client-feature animate-fade-up animate-delay-1">
            <span className="client-feature-icon">🖥️</span>
            <h4>Tu sistema</h4>
            <p>Acceso directo a tu plataforma SaaS contratada, siempre actualizada.</p>
          </div>
          <div className="client-feature animate-fade-up animate-delay-2">
            <span className="client-feature-icon">💳</span>
            <h4>Pagos y facturación</h4>
            <p>Gestiona tu suscripción, historial de pagos y facturas desde el portal.</p>
          </div>
          <div className="client-feature animate-fade-up animate-delay-3">
            <span className="client-feature-icon">🛠️</span>
            <h4>Soporte técnico</h4>
            <p>Crea tickets, consulta el estado de tus solicitudes y habla con el equipo.</p>
          </div>
          <div className="client-feature animate-fade-up animate-delay-4">
            <span className="client-feature-icon">🔄</span>
            <h4>Actualizaciones</h4>
            <p>Mantente al día con las nuevas funciones y mejoras de tu plataforma.</p>
          </div>
        </div>

        <div className="client-cta animate-fade-up" style={{ marginTop: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
            ¿Ya eres cliente de ReinerDev?
          </h3>
          <p style={{ color: 'var(--color-gray-400)', marginBottom: '28px', fontSize: '15px' }}>
            Accede a tu portal personalizado para gestionar tu sistema, soporte y facturación.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Acceder al portal
            </a>
            <button className="btn btn-secondary">Convertirme en cliente</button>
          </div>
        </div>
      </div>
    </section>
  );
}
