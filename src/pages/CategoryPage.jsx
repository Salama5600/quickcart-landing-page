import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { filterAndSortProducts } from '../utils/productFilters';
import SEO from '../components/seo/SEO';
import ProductCard from '../components/ui/ProductCard';
import ProductFilters from '../components/ui/ProductFilters';
import { ProductGridSkeleton } from '../components/ui/Skeleton';
import NotFoundPage from './NotFoundPage';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('featured');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [categoryId]);

  if (!category) return <NotFoundPage />;

  const categoryProducts = getProductsByCategory(categoryId);
  const filtered = filterAndSortProducts(categoryProducts, {
    sort,
    minPrice,
    maxPrice,
  });

  return (
    <>
      <SEO
        title={category.name}
        description={category.description}
        path={`/categories/${categoryId}`}
      />
      <main className="page-main">
        <section
          className="category-hero"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="container category-hero-content">
            <nav className="breadcrumb breadcrumb-light">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/categories">Categories</Link>
              <span>/</span>
              <span aria-current="page">{category.name}</span>
            </nav>
            <span className="category-icon-lg">{category.icon}</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
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
              <ProductGridSkeleton count={6} />
            ) : filtered.length === 0 ? (
              <p className="empty-state">No products in this category match your filters.</p>
            ) : (
              <div className="products-grid">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
