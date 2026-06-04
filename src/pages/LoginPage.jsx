import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <>
      <SEO
        title="Login"
        description="Sign in to your FreshCart account to track orders and shop faster."
        path="/login"
      />
      <main className="page-main auth-page">
        <div className="container auth-container">
          <div className="auth-card glass-panel">
            <p className="eyebrow">Welcome back</p>
            <h1>Sign in to FreshCart</h1>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <div className="form-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="form-link">
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" size="lg" loading={loading} className="auth-submit">
                Login
              </Button>
            </form>

            <div className="auth-divider">
              <span>or continue with</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-btn">
                <span aria-hidden="true">G</span> Google
              </button>
              <button type="button" className="social-btn">
                <span aria-hidden="true">f</span> Facebook
              </button>
              <button type="button" className="social-btn">
                <span aria-hidden="true">🍎</span> Apple
              </button>
            </div>

            <p className="auth-switch">
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
