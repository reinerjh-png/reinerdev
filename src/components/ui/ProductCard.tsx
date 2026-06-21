import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  return (
    <div className={`product-card animate-fade-up animate-delay-${delay}`}>
      <div className="product-mockup">
        <div className="product-mockup-inner">
          <div className="mockup-header-bar">
            {product.mockupConfig?.dotColors.map((color, i) => (
              <div key={i} className="mockup-dot" style={{ background: color }}></div>
            ))}
            <div className="mockup-title-bar"></div>
          </div>
          <div className="mockup-rows">
            {product.mockupConfig?.rows.map((row) => (
              <div key={row.id} className="mockup-row">
                <div className="mockup-avatar" style={{ background: row.avatarColor }}></div>
                <div className="mockup-lines">
                  <div className="mockup-line"></div>
                  <div className="mockup-line mockup-line-short"></div>
                </div>
                {row.statusText && (
                  <div className="mockup-badge-sm" style={{ background: row.statusBg, color: row.statusColor }}>
                    {row.statusText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-body">
        <div 
          className="product-icon-badge" 
          style={{ background: product.iconBg, border: `1px solid ${product.iconBorder}` }}
        >
          {product.icon}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-features">
          {product.features.map(feature => (
            <span key={feature.id} className="feature-tag">{feature.name}</span>
          ))}
        </div>
        <div className="product-actions">
          <Link
            href={`/productos/${product.slug}`}
            className="btn btn-primary btn-sm"
          >
            Ver plataforma
          </Link>
          <Link href="?modal=demo" scroll={false} className="btn btn-outline btn-sm">Solicitar demo</Link>
        </div>
      </div>
    </div>
  );
}
