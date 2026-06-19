import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  return (
    <div className={`product-card animate-fade-up animate-delay-${delay}`}>
      <div className="product-header">
        <div 
          className="product-icon" 
          style={{ background: product.iconBg, borderColor: product.iconBorder }}
        >
          {product.icon}
        </div>
        <div className="product-category" style={{ color: product.themeColor }}>
          {product.category}
        </div>
      </div>
      
      <h3 className="product-title">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      
      {product.mockupConfig && (
        <div className="product-mockup" style={{ borderColor: `${product.themeColor}33` }}>
          <div className="mockup-header" style={{ borderBottomColor: `${product.themeColor}1a` }}>
            <div className="dashboard-dots">
              {product.mockupConfig.dotColors.map((color, i) => (
                <span key={i} style={{ background: color }}></span>
              ))}
            </div>
          </div>
          <div className="mockup-body">
            <div className="mockup-bar" style={{ background: `${product.themeColor}1a` }}>
              <div style={{ width: '60%', height: '100%', background: product.themeColor, borderRadius: '4px' }}></div>
            </div>
            
            {product.mockupConfig.rows.map((row, i) => (
              <div key={i} className="mockup-row" style={{ borderBottomColor: 'rgba(255,255,255,0.03)' }}>
                <div 
                  className="mockup-avatar" 
                  style={{ background: row.avatarColor }}
                ></div>
                <div className="mockup-line" style={{ background: 'rgba(255,255,255,0.05)' }}></div>
                {row.statusText && (
                  <div 
                    className="mockup-status" 
                    style={{ background: row.statusBg, color: row.statusColor }}
                  >
                    {row.statusText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="product-features">
        {product.features.map(feature => (
          <div key={feature.id} className="feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.themeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>{feature.name}</span>
          </div>
        ))}
      </div>
      
      <div className="product-actions">
        <Link href={`/productos/${product.slug}`} className="btn btn-primary" style={{ background: product.themeColor, boxShadow: `0 4px 20px ${product.themeColor}50` }}>
          Ver plataforma
        </Link>
        <button className="btn btn-secondary">Solicitar demo</button>
      </div>
    </div>
  );
}
