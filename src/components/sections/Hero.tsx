import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      
      <div className="container relative z-10">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <div className="badge">
                <span className="dot"></span>
                Software SaaS
              </div>
              <span className="text-sm text-slate-500 font-medium tracking-wide">Para empresas que crecen</span>
            </div>
            
            <h1 className="hero-title text-white">
              Software <span className="text-gradient">SaaS</span> para empresas que buscan crecer
            </h1>
            
            <p className="hero-subtitle">
              Construimos soluciones digitales que automatizan procesos, optimizan operaciones y transforman negocios. Desde sistemas administrativos hasta plataformas completas a medida.
            </p>
            
            <div className="hero-actions">
              <Link href="#soluciones" className="btn btn-primary">
                <span className="relative z-10 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  Explorar soluciones
                </span>
              </Link>
              <Link href="#cotizacion" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Solicitar proyecto
              </Link>
            </div>
            
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">50+</div>
                <div className="hero-stat-label">Proyectos exitosos</div>
              </div>
              <div>
                <div className="hero-stat-num">4</div>
                <div className="hero-stat-label">SaaS propios</div>
              </div>
              <div>
                <div className="hero-stat-num">99%</div>
                <div className="hero-stat-label">Satisfacción</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual hidden lg:block">
            <div className="hero-dashboard">
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="dashboard-url">app.reinerdev.com/dashboard</div>
              </div>
              <div className="dashboard-body">
                <div className="dash-metrics">
                  <div className="dash-metric">
                    <div className="dash-metric-label">Usuarios activos</div>
                    <div className="dash-metric-value">2,450</div>
                    <div className="dash-metric-change">▲ +12% este mes</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">Ingresos MRR</div>
                    <div className="dash-metric-value">$14,200</div>
                    <div className="dash-metric-change">▲ +8% este mes</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">Retención</div>
                    <div className="dash-metric-value">98.5%</div>
                    <div className="dash-metric-change text-slate-400">Estable</div>
                  </div>
                </div>
                
                <div className="dash-chart">
                  <div className="dash-chart-title">Actividad Semanal</div>
                  <div className="dash-bars">
                    <div className="dash-bar" style={{height: '40%'}}></div>
                    <div className="dash-bar" style={{height: '60%'}}></div>
                    <div className="dash-bar" style={{height: '45%'}}></div>
                    <div className="dash-bar" style={{height: '80%'}}></div>
                    <div className="dash-bar" style={{height: '65%'}}></div>
                    <div className="dash-bar" style={{height: '90%'}}></div>
                    <div className="dash-bar" style={{height: '100%'}}></div>
                  </div>
                </div>
                
                <div className="dash-table">
                  <div className="dash-table-row">
                    <div className="dash-row-dot bg-green-500"></div>
                    <div className="dash-row-name">Implementación ERP Corp</div>
                    <div className="dash-status active">Completado</div>
                  </div>
                  <div className="dash-table-row">
                    <div className="dash-row-dot bg-amber-500"></div>
                    <div className="dash-row-name">Migración Cloud</div>
                    <div className="dash-status pending">En progreso</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-float-card hero-float-1">
              <div className="float-card-icon">⚡</div>
              <div className="float-card-val">0.4s</div>
              <div className="float-card-label">Tiempo de respuesta</div>
            </div>
            
            <div className="hero-float-card hero-float-2">
              <div className="float-card-icon">🔒</div>
              <div className="float-card-val">100%</div>
              <div className="float-card-label">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
