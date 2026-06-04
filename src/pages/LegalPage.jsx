import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import NotFoundPage from './NotFoundPage';

const pages = {
  privacy: {
    title: 'Privacy Policy',
    description: 'FreshCart privacy policy — how we collect, use, and protect your data.',
    content: [
      'FreshCart respects your privacy. We collect only the information necessary to process orders, improve our service, and communicate with you about your account.',
      'We do not sell your personal data to third parties. Payment information is processed securely through encrypted payment providers.',
      'You may request access to or deletion of your personal data at any time by contacting support@freshcart.com.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    description: 'FreshCart terms of service — rules and guidelines for using our platform.',
    content: [
      'By using FreshCart, you agree to these terms. Our service provides grocery delivery subject to product availability and delivery area restrictions.',
      'Orders are subject to substitution policies outlined at checkout. Refunds for quality issues must be reported within 24 hours of delivery.',
      'We reserve the right to modify pricing, delivery fees, and service areas with reasonable notice to registered users.',
    ],
  },
};

export default function LegalPage() {
  const type = useLocation().pathname.replace('/', '');
  const page = pages[type];

  if (!page) return <NotFoundPage />;

  return (
    <>
      <SEO title={page.title} description={page.description} path={`/${type}`} />
      <main className="page-main">
        <section className="section">
          <div className="container legal-content glass-panel">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span aria-current="page">{page.title}</span>
            </nav>
            <h1>{page.title}</h1>
            {page.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
