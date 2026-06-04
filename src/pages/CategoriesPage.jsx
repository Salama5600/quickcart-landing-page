import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import SEO from '../components/seo/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CategoriesPage() {
  const mainRef = useScrollReveal();

  return (
    <>
      <SEO
        title="Shop by Category"
        description="Browse FreshCart categories: fresh produce, dairy, bakery, pantry staples, beverages, and household care."
        path="/categories"
      />
      <main className="page-main" ref={mainRef}>
        <section className="page-hero section-sm">
          <div className="container">
            <p className="eyebrow reveal-up">Categories</p>
            <h1 className="reveal-up">Shop by department.</h1>
            <p className="page-lead reveal-up delay-1">
              Everything you need, organized for quick browsing.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container categories-page-grid">
            {categories.map((cat, i) => {
              const count = getProductsByCategory(cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to={`/categories/${cat.id}`}
                  className={`category-page-card reveal-up${i > 0 ? ` delay-${i % 3}` : ''}`}
                >
                  <img src={cat.image} alt="" loading="lazy" />
                  <div className="category-page-card-body">
                    <span className="category-icon">{cat.icon}</span>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                    <span className="category-count">{count} products</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
