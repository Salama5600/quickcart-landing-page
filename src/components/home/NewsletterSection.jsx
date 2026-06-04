import { useState } from 'react';
import Button from '../ui/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="section alt" id="newsletter">
      <div className="container">
        <div className="newsletter-box glass-panel reveal-up">
          <div className="newsletter-content">
            <p className="eyebrow">Stay Fresh</p>
            <h2>Get weekly deals &amp; recipes in your inbox.</h2>
            <p>
              Subscribe for exclusive offers, seasonal picks, and chef-curated
              meal ideas delivered every Friday.
            </p>
          </div>
          {submitted ? (
            <div className="newsletter-success" role="status">
              <span className="success-icon" aria-hidden="true">
                ✓
              </span>
              <p>
                <strong>You&apos;re subscribed!</strong> Check your inbox for a
                welcome offer.
              </p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Subscribe Free</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
