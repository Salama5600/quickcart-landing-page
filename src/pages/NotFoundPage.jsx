import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist on FreshCart."
        path="/404"
      />
      <main className="page-main not-found-page">
        <div className="container not-found-content glass-panel">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1>Page not found</h1>
          <p>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
            have been moved or no longer exists.
          </p>
          <div className="not-found-actions">
            <Button to="/">Back to Home</Button>
            <Button to="/products" variant="ghost">
              Browse Products
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
