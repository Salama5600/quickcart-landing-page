import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <>
      <SEO
        title="Create Account"
        description="Join FreshCart for fast grocery delivery, exclusive deals, and personalized shopping."
        path="/register"
      />
      <main className="page-main auth-page">
        <div className="container auth-container">
          <div className="auth-card glass-panel">
            <p className="eyebrow">Get started</p>
            <h1>Create your account</h1>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                />
              </div>
              {error && <p className="form-error" role="alert">{error}</p>}
              <Button type="submit" size="lg" loading={loading} className="auth-submit">
                Register
              </Button>
            </form>
            <p className="auth-switch">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
