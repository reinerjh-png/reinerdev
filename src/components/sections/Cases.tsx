export default function Cases() {
  return (
    <section className="section-py" id="soluciones" aria-labelledby="cases-title">
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>Casos reales</div>
          <h2 className="section-title" id="cases-title">
            Sistemas creados para <span className="text-gradient">negocios reales</span>
          </h2>
          <p className="section-subtitle">
            Cada proyecto que entregamos resuelve un problema real. Así es como hemos transformado negocios como el tuyo.
          </p>
        </div>

        <div className="cases-grid">
          {/* Caso 1 */}
          <div className="case-card animate-fade-up animate-delay-1">
            <div className="case-icon">🦷</div>
            <div className="case-industry">Sector salud dental</div>
            <h3 className="case-title">Clínica Dental Digital</h3>
            <div className="case-item">
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#ef4444' }}>Problema</span>
                <span className="case-row-text">Gestión de citas en Excel, historial clínico en papel, pérdida de información y baja productividad del personal.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#3b82f6' }}>Solución</span>
                <span className="case-row-text">Sistema odontológico centralizado con agenda digital, historial clínico electrónico y control de pagos.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#22c55e' }}>Resultado</span>
                <div>
                  <span className="case-row-text">Reducción del 70% en tiempos administrativos.</span>
                  <div className="case-result-badge" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                    ✅ +70% eficiencia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="case-card animate-fade-up animate-delay-2">
            <div className="case-icon">🍽️</div>
            <div className="case-industry">Industria gastronómica</div>
            <h3 className="case-title">Restaurante Modernizado</h3>
            <div className="case-item">
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#ef4444' }}>Problema</span>
                <span className="case-row-text">Comandas perdidas, errores en pedidos, sin datos de ventas y cocina desorganizada en horas pico.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#3b82f6' }}>Solución</span>
                <span className="case-row-text">Sistema POS con módulo de cocina en tiempo real, gestión de mesas y reportes de ventas diarios.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#22c55e' }}>Resultado</span>
                <div>
                  <span className="case-row-text">Cero errores en pedidos y +35% en velocidad de atención.</span>
                  <div className="case-result-badge" style={{ background: 'rgba(249,115,22,0.1)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.2)' }}>
                    🚀 +35% en velocidad
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 3 */}
          <div className="case-card animate-fade-up animate-delay-3">
            <div className="case-icon">💪</div>
            <div className="case-industry">Sector fitness</div>
            <h3 className="case-title">Cadena de Gimnasios</h3>
            <div className="case-item">
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#ef4444' }}>Problema</span>
                <span className="case-row-text">Sin control de membresías vencidas, cobros manuales y sin datos sobre retención de clientes.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#3b82f6' }}>Solución</span>
                <span className="case-row-text">Plataforma de gestión de miembros con alertas de vencimiento, cobros automáticos y reportes de asistencia.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#22c55e' }}>Resultado</span>
                <div>
                  <span className="case-row-text">+40% en retención de clientes y recuperación de ingresos perdidos.</span>
                  <div className="case-result-badge" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                    💎 +40% retención
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 4 */}
          <div className="case-card animate-fade-up animate-delay-4">
            <div className="case-icon">💊</div>
            <div className="case-industry">Farmacia y retail</div>
            <h3 className="case-title">Farmacia Automatizada</h3>
            <div className="case-item">
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#ef4444' }}>Problema</span>
                <span className="case-row-text">Inventario desactualizado, pérdidas por vencimientos y sin control de ventas por turno.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#3b82f6' }}>Solución</span>
                <span className="case-row-text">Sistema farmacéutico con inventario en tiempo real, alertas de stock bajo y control de ventas por cajero.</span>
              </div>
              <div className="case-row">
                <span className="case-row-label" style={{ color: '#22c55e' }}>Resultado</span>
                <div>
                  <span className="case-row-text">Reducción del 60% en pérdidas y control total de inventario.</span>
                  <div className="case-result-badge" style={{ background: 'rgba(168,85,247,0.1)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.2)' }}>
                    📊 -60% en pérdidas
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
