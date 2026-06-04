import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal-up">
          <p className="eyebrow">Grocery delivery reimagined</p>
          <h1>Fresh groceries delivered to your doorstep in minutes.</h1>
          <p className="hero-text">
            Save time with curated essentials, same-day delivery slots, and
            quality you can trust. From local produce to pantry staples, we
            make daily shopping effortless.
          </p>
          <div className="hero-actions">
            <Button to="/products">Start Shopping</Button>
            <a href="#how" className="btn btn-ghost">
              See How It Works
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-up delay-1" aria-hidden="true">
          <div className="hero-card glass-card">
            <p className="card-title">Today&apos;s Basket</p>
            <ul>
              <li>
                <span>Organic Avocados</span>
                <strong>$8.40</strong>
              </li>
              <li>
                <span>Free-range Eggs</span>
                <strong>$4.20</strong>
              </li>
              <li>
                <span>Whole Grain Bread</span>
                <strong>$3.10</strong>
              </li>
              <li>
                <span>Greek Yogurt</span>
                <strong>$5.80</strong>
              </li>
            </ul>
            <div className="card-total">
              <span>Total</span>
              <strong>$21.50</strong>
            </div>
            <Link to="/cart" className="hero-card-cta">
              View cart →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
