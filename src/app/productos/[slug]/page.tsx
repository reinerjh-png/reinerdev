import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) return { title: 'Producto no encontrado' };
  
  return {
    title: `${product.name} — ReinerDev`,
    description: product.description,
  };
}

// Para Next.js 15+ App Router, generar rutas estáticas para los productos
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Parse color properties
  const rgbaRegex = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/;
  
  return (
    <>
      <section className="product-page-hero relative overflow-hidden flex items-center min-h-[80vh] pt-[130px] pb-[80px]" id="inicio">
        <div className="hero-grid absolute inset-0"></div>
        <div 
          className="hero-orb hero-orb-1" 
          style={{ background: `radial-gradient(circle, ${product.themeColor}33 0%, transparent 70%)` }}
        ></div>
        <div className="hero-orb hero-orb-2"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
            <div>
              <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
                <Link href="/" className="hover:text-[var(--color-blue-bright)] transition-colors">ReinerDev</Link>
                <span>›</span>
                <Link href="/#productos" className="hover:text-[var(--color-blue-bright)] transition-colors">Productos</Link>
                <span>›</span>
                <span className="text-slate-300">{product.name}</span>
              </div>
              
              <div 
                className="badge mb-5" 
                style={{ background: product.iconBg, borderColor: product.iconBorder, color: product.themeColor }}
              >
                <span className="dot" style={{ background: product.themeColor }}></span>
                {product.category}
              </div>
              
              <h1 className="hero-title mb-5">
                {product.name}
              </h1>
              
              <p className="hero-subtitle">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <button 
                  className="btn btn-primary btn-lg" 
                  style={{ background: product.themeColor, boxShadow: `0 4px 20px ${product.themeColor}50` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Solicitar demo gratuita
                </button>
                <Link href="/#cotizacion" className="btn btn-secondary btn-lg">Solicitar acceso</Link>
              </div>
            </div>

            {/* Mockup */}
            {product.mockupConfig && (
              <div className="animate-fade-up animate-delay-1">
                <div 
                  className="rounded-2xl overflow-hidden border"
                  style={{ background: 'rgba(8,13,26,0.9)', borderColor: `${product.themeColor}33`, boxShadow: `0 0 60px ${product.themeColor}26, 0 24px 48px rgba(0,0,0,0.5)` }}
                >
                  <div className="flex items-center gap-2 p-3 border-b" style={{ background: 'rgba(255,255,255,0.03)', borderColor: `${product.themeColor}1a` }}>
                    <div className="flex gap-1.5">
                      {product.mockupConfig.dotColors.map((color, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: color }}></div>
                      ))}
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/10 rounded px-2.5 py-1 text-[11px] text-slate-500">
                      {product.icon} {product.mockupConfig.url}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex gap-3 mb-3.5">
                      <div className="flex-1 p-3 rounded-lg border" style={{ background: `${product.themeColor}1a`, borderColor: `${product.themeColor}33` }}>
                        <div className="text-[10px] text-slate-500 mb-1 font-semibold uppercase tracking-wider">Métrica 1</div>
                        <div className="text-xl font-extrabold text-white">842</div>
                      </div>
                      <div className="flex-1 p-3 rounded-lg border" style={{ background: `rgba(34,197,94,0.08)`, borderColor: `rgba(34,197,94,0.15)` }}>
                        <div className="text-[10px] text-slate-500 mb-1 font-semibold uppercase tracking-wider">Métrica 2</div>
                        <div className="text-xl font-extrabold text-white">98%</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <div className="px-3.5 py-2 border-b border-white/5 text-[11px] font-semibold text-slate-400">Registros recientes</div>
                      
                      {product.mockupConfig.rows.map((row, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2.5 border-b border-white/5 last:border-none">
                          <div className="w-7 h-7 rounded bg-white/10 flex-shrink-0" style={{ background: row.avatarColor }}></div>
                          <div className="flex-1 bg-white/5 h-2 rounded-full"></div>
                          {row.statusText && (
                            <div className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ background: row.statusBg, color: row.statusColor }}>
                              {row.statusText}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="section-py">
        <div className="container">
          <div className="section-header animate-fade-up">
            <div className="badge" style={{ background: product.iconBg, borderColor: product.iconBorder, color: product.themeColor }}>
              <span className="dot" style={{ background: product.themeColor }}></span>Funcionalidades
            </div>
            <h2 className="section-title">Todo lo que necesitas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {product.features.map((feature, i) => (
              <div key={feature.id} className="card animate-fade-up" style={{ animationDelay: `${(i+1)*0.1}s` }}>
                <div className="text-3xl mb-3" style={{ color: product.themeColor }}>{product.icon}</div>
                <h4 className="font-display font-bold text-lg mb-2">{feature.name}</h4>
                <p className="text-sm text-slate-400">Gestión profesional automatizada para potenciar este aspecto de tu negocio.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      <div className="container pb-[120px]">
        <div className="cta-banner animate-fade-up" style={{ background: `linear-gradient(135deg, ${product.themeColor}1a 0%, rgba(6,182,212,0.06) 100%)`, borderColor: `${product.themeColor}33` }}>
          <div className="cta-banner-content">
            <h2>Comienza a usar {product.name}</h2>
            <p>Demo sin compromiso. Te mostramos el sistema adaptado a tu negocio.</p>
            <div className="cta-banner-actions">
              <button 
                className="btn btn-lg text-white" 
                style={{ background: product.themeColor, boxShadow: `0 4px 20px ${product.themeColor}66` }}
              >
                Solicitar demo gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
