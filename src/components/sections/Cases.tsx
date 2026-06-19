export default function Cases() {
  return (
    <section className="section-py" id="casos" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.03) 100%)' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>Impacto real</div>
          <h2 className="section-title">Casos de éxito</h2>
          <p className="section-subtitle">Resultados tangibles de empresas que confiaron en nosotros para transformar su operación digital.</p>
        </div>
        
        <div className="cases-grid">
          {/* Caso 1 */}
          <div className="case-card animate-fade-up animate-delay-1">
            <div className="case-header">
              <div className="case-icon">🏥</div>
              <div className="case-industry">Clínica San Miguel</div>
            </div>
            <h4 className="case-title">Automatización de agendas y recordatorios médicos</h4>
            <div className="case-body">
              <div className="case-item">
                <span className="case-label">Problema:</span>
                <p>30% de inasistencias por falta de recordatorios. Gestión manual en Excel.</p>
              </div>
              <div className="case-item">
                <span className="case-label">Solución:</span>
                <p>Implementación de nuestro Sistema Odontológico con recordatorios por WhatsApp.</p>
              </div>
            </div>
            <div className="case-result">
              <span>Reducción del 85% en inasistencias</span>
              <div className="case-result-badge">+22% ingresos</div>
            </div>
          </div>
          
          {/* Caso 2 */}
          <div className="case-card animate-fade-up animate-delay-2">
            <div className="case-header">
              <div className="case-icon">🍕</div>
              <div className="case-industry">Pizzería La Mamma</div>
            </div>
            <h4 className="case-title">Sincronización de pedidos y cocina en tiempo real</h4>
            <div className="case-body">
              <div className="case-item">
                <span className="case-label">Problema:</span>
                <p>Pedidos perdidos en horas pico y tiempos de espera de más de 45 mins.</p>
              </div>
              <div className="case-item">
                <span className="case-label">Solución:</span>
                <p>Sistema para Restaurantes con comandas digitales directas a cocina.</p>
              </div>
            </div>
            <div className="case-result">
              <span>Tiempo de entrega reducido a 20 mins</span>
              <div className="case-result-badge" style={{ background: 'rgba(249,115,22,0.15)', color: '#fb923c' }}>⭐ 4.9 Rating</div>
            </div>
          </div>

          {/* Caso 3 */}
          <div className="case-card animate-fade-up animate-delay-3">
            <div className="case-header">
              <div className="case-icon">🏗️</div>
              <div className="case-industry">Constructora Nova</div>
            </div>
            <h4 className="case-title">ERP a medida para control de presupuestos</h4>
            <div className="case-body">
              <div className="case-item">
                <span className="case-label">Problema:</span>
                <p>Sobrecostos no detectados por falta de trazabilidad en compras de materiales.</p>
              </div>
              <div className="case-item">
                <span className="case-label">Solución:</span>
                <p>Desarrollo personalizado de ERP conectado a proveedores y almacén.</p>
              </div>
            </div>
            <div className="case-result">
              <span>Trazabilidad 100% en tiempo real</span>
              <div className="case-result-badge" style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80' }}>-15% mermas</div>
            </div>
          </div>
          
          {/* Caso 4 */}
          <div className="case-card animate-fade-up animate-delay-4">
            <div className="case-header">
              <div className="case-icon">🏋️</div>
              <div className="case-industry">Gym Fitness Club</div>
            </div>
            <h4 className="case-title">Control de accesos y renovación automática</h4>
            <div className="case-body">
              <div className="case-item">
                <span className="case-label">Problema:</span>
                <p>Usuarios ingresando con membresías vencidas. Alta tasa de abandono.</p>
              </div>
              <div className="case-item">
                <span className="case-label">Solución:</span>
                <p>Sistema de Gimnasios con torniquete integrado y cobro automático.</p>
              </div>
            </div>
            <div className="case-result">
              <span>0 accesos no autorizados</span>
              <div className="case-result-badge" style={{ background: 'rgba(168,85,247,0.15)', color: '#c084fc' }}>+40% retención</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
