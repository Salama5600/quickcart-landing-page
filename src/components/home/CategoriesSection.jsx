import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export default function CategoriesSection() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-head reveal-up">
          <p className="eyebrow">Categories</p>
          <h2>Everything you need, all in one app.</h2>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.id}`}
              className={`category-card category-card-link reveal-up${i > 0 ? ` delay-${i % 3}` : ''}`}
            >
              <span className="category-icon" aria-hidden="true">
                {cat.icon}
              </span>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <span className="category-arrow">Shop now →</span>
            </Link>
          ))}
        </div>
        <div className="section-cta reveal-up">
          <Link to="/categories" className="btn btn-ghost">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
