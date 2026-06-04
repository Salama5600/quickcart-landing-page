import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/cart', label: 'Cart' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: '𝕏' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'f' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '◎' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark">FC</span>
            <span className="brand-text">FreshCart</span>
          </Link>
          <p>
            Fresh groceries delivered to your doorstep in minutes. Quality you
            can trust, every single order.
          </p>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <a href="mailto:support@freshcart.com">support@freshcart.com</a>
            </li>
            <li>
              <a href="tel:+18005551234">1-800-555-1234</a>
            </li>
            <li>123 Green Street, Fresh City, FC 10001</li>
            <li>Mon–Sun, 24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
        <p className="footer-tagline">Trusted by thousands of households nationwide.</p>
      </div>
    </footer>
  );
}
