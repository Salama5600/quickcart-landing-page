import { useEffect, useState } from 'react';
import { products } from '../data/products';
import { filterAndSortProducts } from '../utils/productFilters';
import SEO from '../components/seo/SEO';
import ProductCard from '../components/ui/ProductCard';
import ProductFilters from '../components/ui/ProductFilters';
import { ProductGridSkeleton } from '../components/ui/Skeleton';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('featured');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const mainRef = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const filtered = filterAndSortProducts(products, { sort, minPrice, maxPrice });

  return (
    <>
      <SEO
        title="Shop All Products"
        description="Browse FreshCart's full catalog of fresh groceries, pantry staples, beverages, and household essentials."
        path="/products"
      />
      <main className="page-main" ref={mainRef}>
        <section className="page-hero section-sm">
          <div className="container">
            <p className="eyebrow reveal-up">Products</p>
            <h1 className="reveal-up">Shop our full catalog.</h1>
            <p className="page-lead reveal-up delay-1">
              {filtered.length} products available with same-day delivery.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ProductFilters
              sort={sort}
              onSortChange={setSort}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
            />
            {loading ? (
              <ProductGridSkeleton count={8} />
            ) : filtered.length === 0 ? (
              <p className="empty-state reveal-up">No products match your filters.</p>
            ) : (
              <div className="products-grid">
                {filtered.map((product, i) => (
                  <div
                    key={product.id}
                    className={`reveal-up${i % 3 > 0 ? ` delay-${i % 3}` : ''}`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
