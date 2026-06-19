export default function ClientArea() {
  return (
    <section className="client-area animate-fade-up">
      <div className="container">
        <div className="client-area-inner">
          <div className="client-area-content">
            <h3 className="client-area-title">Portal de Clientes</h3>
            <p className="client-area-desc">¿Ya eres cliente de ReinerDev? Accede a tu dashboard para ver el progreso de tu proyecto, gestionar facturas y comunicarte con tu equipo asignado.</p>
            <ul className="client-features">
              <li><div className="client-feature-icon">✓</div> Seguimiento de hitos en tiempo real</li>
              <li><div className="client-feature-icon">✓</div> Repositorio seguro de archivos y credenciales</li>
              <li><div className="client-feature-icon">✓</div> Soporte prioritario 24/7</li>
            </ul>
            <button className="btn btn-secondary">
              Iniciar sesión en el Portal
            </button>
          </div>
          <div className="client-area-visual">
            <div className="client-mockup">
              <div className="client-mockup-header">
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>Mi Proyecto</div>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>ERP Industrial Nova</div>
                    <div style={{ fontSize: '12px', color: '#60a5fa' }}>Fase 2: Desarrollo Core</div>
                  </div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '14px' }}>65%</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px', height: '8px', marginBottom: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #60a5fa, #3b82f6)' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '4px' }}>PRÓXIMA ENTREGA</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Módulo de Ventas</div>
                    <div style={{ fontSize: '11px', color: '#22c55e', marginTop: '4px' }}>En 3 días</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '4px' }}>FACTURACIÓN</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Sin deuda</div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Siguiente: 15 Dic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
