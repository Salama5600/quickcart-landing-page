import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

export default function FeaturedProductsSection() {
  const featured = products.filter((p) => p.badge).slice(0, 4);

  return (
    <section className="section alt" id="featured">
      <div className="container">
        <div className="section-head reveal-up">
          <p className="eyebrow">Top Picks</p>
          <h2>Customer favorites this week.</h2>
        </div>
        <div className="products-grid">
          {featured.map((product, i) => (
            <div key={product.id} className={`reveal-up${i > 0 ? ` delay-${i % 3}` : ''}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="section-cta reveal-up">
          <Link to="/products" className="btn">
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
