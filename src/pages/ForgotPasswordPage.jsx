import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Reset Password"
        description="Reset your FreshCart account password via email."
        path="/forgot-password"
      />
      <main className="page-main auth-page">
        <div className="container auth-container">
          <div className="auth-card glass-panel">
            <p className="eyebrow">Account recovery</p>
            <h1>Reset your password</h1>
            {sent ? (
              <div className="newsletter-success" role="status">
                <span className="success-icon" aria-hidden="true">✓</span>
                <p>
                  If an account exists for <strong>{email}</strong>, you will
                  receive reset instructions shortly.
                </p>
                <Link to="/login" className="btn btn-ghost">
                  Back to Login
                </Link>
              </div>
            ) : (
              <>
                <p className="auth-hint">
                  Enter your email and we&apos;ll send you a link to reset your
                  password.
                </p>
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                    />
                  </div>
                  <Button type="submit" size="lg" loading={loading} className="auth-submit">
                    Reset Password
                  </Button>
                </form>
                <p className="auth-switch">
                  <Link to="/login">← Back to Login</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
