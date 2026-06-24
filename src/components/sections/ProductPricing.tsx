import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

/* ─── Sub-componente: Contenedor de imagen / Placeholder ─────────────────── */

interface PreviewPanelProps {
  previewImage: string | null;
  icon: string;
  themeColor: string;
  name: string;
}

function PreviewPanel({ previewImage, icon, themeColor, name }: PreviewPanelProps) {
  return (
    <div
      className="relative w-full h-full min-h-[280px] lg:min-h-[420px] rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${themeColor}30`,
        boxShadow: `inset 0 1px 0 ${themeColor}20, 0 0 40px ${themeColor}12`,
        background: 'rgba(8, 13, 26, 0.9)',
      }}
    >
      {previewImage ? (
        <Image
          src={previewImage}
          alt={`Captura de pantalla del ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      ) : (
        /* Placeholder elegante — sin texto largo, solo ícono y línea sutil */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 select-none">
          {/* Círculo exterior con glow */}
          <div
            className="relative flex items-center justify-center w-24 h-24 rounded-full"
            style={{
              background: `${themeColor}10`,
              border: `1px solid ${themeColor}25`,
              boxShadow: `0 0 40px ${themeColor}20`,
            }}
          >
            <span className="text-5xl" role="img" aria-label={name}>
              {icon}
            </span>
          </div>
          <p className="text-[13px] text-slate-600 tracking-wide">
            Captura del sistema en producción
          </p>
        </div>
      )}

      {/* Brillo superior — efecto de pantalla */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${themeColor}50, transparent)` }}
      />
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */

interface Props {
  product: Product;
}

export default function ProductPricing({ product }: Props) {
  const { pricing, themeColor, iconBg, iconBorder, name, icon, slug } = product;
  if (!pricing) return null;

  const isSaaS = pricing.type === 'saas';
  const isMostPopular = pricing.isMostPopular ?? false;

  return (
    <section className="section-py" id="precios">
      <div className="container">

        {/* ── Encabezado centrado ── */}
        <div className="section-header animate-fade-up">
          <div
            className="badge"
            style={{ background: iconBg, borderColor: iconBorder, color: themeColor }}
          >
            <span className="dot" style={{ background: themeColor }} />
            Precio y acceso
          </div>
          <h2 className="section-title">
            ¿Cuánto cuesta {name}?
          </h2>
          <p className="section-subtitle">
            {isSaaS
              ? 'Acceso en la nube desde el primer día. Sin instalaciones, sin sorpresas.'
              : 'Pago único, sistema tuyo para siempre. Sin cuotas mensuales.'}
          </p>
        </div>

        {/* ── Layout de dos columnas ── */}
        <div className="mt-14 animate-fade-up animate-delay-1 max-w-5xl mx-auto">
          {/* Banner "Más popular" encima de todo cuando aplica */}
          {isMostPopular && (
            <div
              className="flex items-center justify-center gap-2 py-2.5 rounded-t-2xl text-[12px] font-bold tracking-widest uppercase"
              style={{
                background: 'linear-gradient(90deg, rgba(29,78,216,0.9), rgba(59,130,246,0.9), rgba(29,78,216,0.9))',
                color: '#fff',
              }}
            >
              <span>⭐</span>
              <span>Más popular</span>
            </div>
          )}

          <div
            className={`grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 ${isMostPopular ? 'rounded-b-2xl' : 'rounded-2xl'} overflow-hidden`}
            style={{
              border: `1px solid ${isMostPopular ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
              borderTop: isMostPopular ? 'none' : undefined,
              background: 'rgba(255,255,255,0.03)',
            }}
          >

            {/* ── Columna izquierda: Imagen / Placeholder ── */}
            <div
              className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <PreviewPanel
                previewImage={pricing.previewImage}
                icon={icon}
                themeColor={themeColor}
                name={name}
              />
            </div>

            {/* ── Columna derecha: Card de precio ── */}
            <div className="p-6 lg:p-8 flex flex-col">

              {/* 1. Badge de tipo */}
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold"
                  style={{
                    background: `${themeColor}18`,
                    border: `1px solid ${themeColor}35`,
                    color: themeColor,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: themeColor }}
                  />
                  {pricing.badgeLabel}
                </span>
              </div>

              {/* 2 + 4. Precio tachado con badge de descuento inline */}
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-slate-500 line-through text-base font-medium">
                  {pricing.regularPrice}
                  {pricing.priceUnit && (
                    <span className="text-sm"> {pricing.priceUnit}</span>
                  )}
                </span>
                <span
                  className="inline-flex px-2 py-0.5 rounded text-[11px] font-bold"
                  style={{
                    background: `${themeColor}18`,
                    color: themeColor,
                    border: `1px solid ${themeColor}30`,
                  }}
                >
                  {pricing.discountPercent}
                </span>
              </div>

              {/* 3. Precio actual — prominente */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold text-white tracking-tight leading-none">
                  {pricing.discountPrice}
                </span>
                {pricing.priceUnit && (
                  <span className="text-slate-400 text-base font-medium">
                    {pricing.priceUnit}
                  </span>
                )}
              </div>

              {/* 5. Divider */}
              <div
                className="mb-6 h-px w-full"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              />

              {/* 6. Lista de incluidos */}
              <ul className="space-y-3 mb-6 flex-1">
                {pricing.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {/* Check con color del tema, no verde genérico */}
                    <svg
                      className="w-[18px] h-[18px] mt-px flex-shrink-0"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="8.5" fill={`${themeColor}15`} stroke={`${themeColor}40`} />
                      <path
                        d="M5.5 9.5l2.5 2 4-5"
                        stroke={themeColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-slate-200 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 7. URL de la plataforma */}
              {pricing.platformUrl && (
                <a
                  href={`https://${pricing.platformUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium mb-5 w-fit group"
                  style={{ color: themeColor }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="group-hover:underline underline-offset-2 transition-all">
                    {pricing.platformUrl}
                  </span>
                </a>
              )}

              {/* 8. Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                {/* Primario: color sólido del acento del producto */}
                {pricing.platformUrl ? (
                  <a
                    id={`btn-ver-plataforma-${slug}`}
                    href={`https://${pricing.platformUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg flex-1 justify-center font-bold hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
                    style={{
                      background: themeColor,
                      color: '#fff',
                      boxShadow: `0 4px 20px ${themeColor}45`,
                      border: 'none',
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Ver plataforma
                  </a>
                ) : (
                  /* Sin plataforma (compra única): el primario es el demo */
                  <Link
                    id={`btn-solicitar-demo-pricing-${slug}`}
                    href="?modal=demo"
                    scroll={false}
                    className="btn btn-lg flex-1 justify-center font-bold hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
                    style={{
                      background: themeColor,
                      color: '#fff',
                      boxShadow: `0 4px 20px ${themeColor}45`,
                      border: 'none',
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Solicitar demo
                  </Link>
                )}

                {/* Secundario outline — solo visible cuando hay botón primario de plataforma */}
                {pricing.platformUrl && (
                  <Link
                    id={`btn-solicitar-demo-pricing-${slug}`}
                    href="?modal=demo"
                    scroll={false}
                    className="btn btn-secondary btn-lg flex-1 justify-center hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Solicitar demo
                  </Link>
                )}
              </div>

              {/* 9. Nota de precio de lanzamiento */}
              <p className="text-[12px] text-slate-500 leading-relaxed flex items-start gap-1.5">
                <svg
                  className="w-3.5 h-3.5 mt-px flex-shrink-0 text-slate-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {pricing.priceNote}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
