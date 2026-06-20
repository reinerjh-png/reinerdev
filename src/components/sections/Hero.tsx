"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// Helper hook for animating numbers
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const end = target;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(start + (end - start) * easeProgress));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { count, ref };
}

function StatNumber({ target, suffix }: { target: number; suffix: string }) {
  const { count, ref } = useAnimatedCounter(target);
  return (
    <div ref={ref} className="hero-stat-num">
      {count}{suffix}
    </div>
  );
}

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
              Software <span className="text-gradient">SaaS para empresas</span> que buscan crecer
            </h1>
            
            <p className="hero-subtitle">
              Construimos soluciones digitales que automatizan procesos, optimizan operaciones y transforman negocios. Desde sistemas administrativos hasta plataformas completas a medida.
            </p>
            
            <div className="hero-actions">
              <Link href="#soluciones" className="btn btn-primary btn-lg">
                <span className="relative z-10 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  Explorar soluciones
                </span>
              </Link>
              <Link href="#desarrollo" className="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Solicitar proyecto
              </Link>
            </div>
            
            <div className="hero-stats">
              <div>
                <StatNumber target={50} suffix="+" />
                <div className="hero-stat-label">Proyectos entregados</div>
              </div>
              <div>
                <StatNumber target={4} suffix="" />
                <div className="hero-stat-label">Productos SaaS propios</div>
              </div>
              <div>
                <StatNumber target={99} suffix="%" />
                <div className="hero-stat-label">Satisfacción de clientes</div>
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
                    <div className="dash-metric-label">Pacientes hoy</div>
                    <div className="dash-metric-value">142</div>
                    <div className="dash-metric-change">▲ 12% vs ayer</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">Ingresos</div>
                    <div className="dash-metric-value">$8,240</div>
                    <div className="dash-metric-change">▲ 8% esta semana</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">Citas pendientes</div>
                    <div className="dash-metric-value">28</div>
                    <div className="dash-metric-change" style={{ color: '#60a5fa' }}>→ Ver agenda</div>
                  </div>
                </div>
                
                <div className="dash-chart">
                  <div className="dash-chart-title">Actividad semanal</div>
                  <div className="dash-bars">
                    <div className="dash-bar" style={{height: '40%'}}></div>
                    <div className="dash-bar" style={{height: '60%'}}></div>
                    <div className="dash-bar" style={{height: '45%'}}></div>
                    <div className="dash-bar" style={{height: '80%'}}></div>
                    <div className="dash-bar" style={{height: '65%'}}></div>
                    <div className="dash-bar" style={{height: '90%'}}></div>
                    <div className="dash-bar" style={{height: '100%'}}></div>
                    <div className="dash-bar" style={{height: '50%'}}></div>
                    <div className="dash-bar" style={{height: '75%'}}></div>
                    <div className="dash-bar" style={{height: '85%'}}></div>
                    <div className="dash-bar" style={{height: '35%'}}></div>
                    <div className="dash-bar" style={{height: '95%'}}></div>
                  </div>
                </div>
                
                <div className="dash-table">
                  <div className="dash-table-row">
                    <div className="dash-row-dot" style={{ background: '#3b82f6' }}></div>
                    <div className="dash-row-name">María González</div>
                    <div className="dash-row-val">10:30 AM</div>
                    <div className="dash-status active">Confirmada</div>
                  </div>
                  <div className="dash-table-row">
                    <div className="dash-row-dot" style={{ background: '#fbbf24' }}></div>
                    <div className="dash-row-name">Carlos Mendoza</div>
                    <div className="dash-row-val">11:00 AM</div>
                    <div className="dash-status pending">Pendiente</div>
                  </div>
                  <div className="dash-table-row">
                    <div className="dash-row-dot" style={{ background: '#4ade80' }}></div>
                    <div className="dash-row-name">Ana Torres</div>
                    <div className="dash-row-val">02:00 PM</div>
                    <div className="dash-status active">Confirmada</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-float-card hero-float-1">
              <div className="float-card-icon">📈</div>
              <div className="float-card-val">+34%</div>
              <div className="float-card-label">Productividad este mes</div>
            </div>
            
            <div className="hero-float-card hero-float-2">
              <div className="float-card-icon">⚡</div>
              <div className="float-card-val">2.4x</div>
              <div className="float-card-label">Procesos automatizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
