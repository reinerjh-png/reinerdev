"use client";

import { useState } from 'react';
import { services } from '@/data/services';

export default function CustomDev() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section className="section-py relative" id="desarrollo">
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>A la medida</div>
          <h2 className="section-title">Desarrollo de Software <span className="text-gradient">Personalizado</span></h2>
          <p className="section-subtitle">Si tienes un requerimiento único, construimos la solución desde cero ajustándonos exactamente a tu flujo de trabajo y objetivos.</p>
        </div>

        <div className="custom-dev-grid">
          {/* Services list */}
          <div className="custom-dev-services animate-fade-up animate-delay-1">
            {services.map(service => (
              <div key={service.id} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote form */}
          <div className="animate-fade-up animate-delay-2">
            <div className="quote-panel">
              <h3>Cotiza tu proyecto</h3>
              <p>Cuéntanos qué necesitas y te responderemos en 24 horas.</p>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-name">Nombre *</label>
                      <input type="text" id="q-name" className="form-control" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-company">Empresa</label>
                      <input type="text" id="q-company" className="form-control" placeholder="Nombre de empresa" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-sector">Sector</label>
                      <select id="q-sector" className="form-control" defaultValue="">
                        <option value="" disabled>Selecciona sector</option>
                        <option value="salud">Salud / Medicina</option>
                        <option value="gastronomia">Gastronomía</option>
                        <option value="retail">Retail / E-commerce</option>
                        <option value="servicios">Servicios B2B</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-type">Tipo de proyecto</label>
                      <select id="q-type" className="form-control" defaultValue="">
                        <option value="" disabled>Tipo de proyecto</option>
                        <option value="webapp">Aplicación Web</option>
                        <option value="erp">Sistema ERP / CRM</option>
                        <option value="integracion">Integración de API</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="q-details">Descripción del proyecto *</label>
                    <textarea id="q-details" className="form-control" rows={4} placeholder="Cuéntanos qué necesitas..." required></textarea>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-budget">Presupuesto aproximado</label>
                      <select id="q-budget" className="form-control" defaultValue="">
                        <option value="" disabled>Rango de inversión</option>
                        <option value="low">&lt; $2,000 USD</option>
                        <option value="mid">$2,000 - $5,000 USD</option>
                        <option value="high">$5,000 - $10,000 USD</option>
                        <option value="enterprise">&gt; $10,000 USD</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="q-contact">WhatsApp / Correo *</label>
                      <input type="text" id="q-contact" className="form-control" placeholder="+1 000 0000000" required />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        Enviar cotización
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <div className="form-success-icon">🎉</div>
                  <h3>¡Cotización enviada!</h3>
                  <p>Hemos recibido tus requerimientos. Un experto te contactará en menos de 24 horas.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
