import { products } from '@/data/products';
import ProductCard from '../ui/ProductCard';

export default function ProductsSection() {
  return (
    <section className="section-py" id="productos">
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>Nuestros SaaS</div>
          <h2 className="section-title">Productos <span className="text-gradient">propios</span> listos para usar</h2>
          <p className="section-subtitle">No reinventes la rueda. Contamos con plataformas especializadas por industria, probadas y listas para implementar en tu negocio.</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              delay={index + 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
