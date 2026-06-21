"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function DemoModalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isModalOpen = searchParams.get('modal') === 'demo';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('modal');
    const qs = newSearchParams.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(closeModal, 4000);
    }, 1500);
  };

  if (!mounted || !isModalOpen) return null;

  /* ─── Label style shared ─── */
  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#64748b',
  };

  return (
    /* ─── Overlay ─── */
    <div style={{
      position: 'fixed', inset: 0, zIndex: 5000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }}>
      {/* backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,16,0.88)', backdropFilter: 'blur(6px)' }}
        onClick={closeModal}
      />

      {/* ─── Card ─── */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        background: '#080d1a',
        border: '1px solid rgba(59,130,246,0.2)',
        borderRadius: '20px',
        boxShadow: '0 0 80px rgba(37,99,235,0.22)',
        padding: '32px',
        animation: 'fadeInUp 0.35s ease forwards',
      }}>

        {/* close btn */}
        <button
          onClick={closeModal}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute', top: '16px', right: '16px',
            width: '30px', height: '30px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            cursor: 'pointer', color: '#94a3b8', fontSize: '13px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
        >✕</button>

        {!isSuccess ? (
          <>
            {/* ── Header: icon + title ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.22)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>🚀</div>
              <div>
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                  Solicitar demo
                </h2>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>
                  Sin compromiso · Respuesta en 24 h
                </p>
              </div>
            </div>

            {/* ── Subtitle ── */}
            <p style={{ margin: '0 0 20px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
              Completa el formulario y te contactaremos para mostrarte la plataforma en acción.
            </p>

            {/* ── Form: gap uniforme 16px entre cada grupo ── */}
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Nombre / Empresa */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="demo-name" style={labelStyle}>Nombre *</label>
                  <input type="text" id="demo-name" className="form-control" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="demo-company" style={labelStyle}>Empresa</label>
                  <input type="text" id="demo-company" className="form-control" placeholder="Tu empresa" />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label htmlFor="demo-email" style={labelStyle}>Correo *</label>
                <input type="email" id="demo-email" className="form-control" placeholder="correo@empresa.com" required />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="demo-whatsapp" style={labelStyle}>WhatsApp *</label>
                <input type="tel" id="demo-whatsapp" className="form-control" placeholder="+51 000 000000" required />
              </div>

              {/* Producto */}
              <div>
                <label htmlFor="demo-product" style={labelStyle}>Producto de interés</label>
                <select id="demo-product" className="form-control" defaultValue="">
                  <option value="" disabled>Selecciona producto</option>
                  <option value="dental">Sistema Odontológico</option>
                  <option value="restaurante">Sistema Restaurante</option>
                  <option value="gimnasio">Sistema Gimnasio</option>
                  <option value="farmacia">Sistema Farmacéutico</option>
                  <option value="medida">Desarrollo a medida</option>
                </select>
              </div>

              {/* Botón — el gap del flex-col ya da la separación, sin mt extra */}
              <button
                type="submit"
                className="btn btn-primary w-full justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </form>
          </>
        ) : (
          /* ── Estado de éxito ── */
          <div style={{ padding: '32px 0', textAlign: 'center', animation: 'fadeInUp 0.35s ease forwards' }}>
            <div style={{
              width: '64px', height: '64px', margin: '0 auto 16px',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', color: '#4ade80',
            }}>✓</div>
            <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 800, color: '#fff' }}>
              ¡Solicitud enviada!
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8' }}>
              Te contactaremos muy pronto para agendar tu demo personalizada.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DemoModal() {
  return (
    <Suspense fallback={null}>
      <DemoModalContent />
    </Suspense>
  );
}
