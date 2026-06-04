import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) setNavOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="FreshCart Home">
          <span className="brand-mark">FC</span>
          <span className="brand-text">FreshCart</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${navOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {isHome ? (
            <>
              <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>
                About
              </a>
              <a href="#how" className="nav-link" onClick={() => setNavOpen(false)}>
                How It Works
              </a>
              <a href="#categories" className="nav-link" onClick={() => setNavOpen(false)}>
                Categories
              </a>
              <a href="#testimonials" className="nav-link" onClick={() => setNavOpen(false)}>
                Reviews
              </a>
            </>
          ) : (
            navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))
          )}
          <Link to="/cart" className="nav-cart" aria-label={`Cart, ${cartCount} items`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6h15l-1.5 9H8L6 6zm0 0L5 3H2M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Button to="/login" size="sm" variant="ghost">
            Login
          </Button>
          <Button to="/register" size="sm">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
