import { useState } from 'react';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with FreshCart support. We're here 24/7 to help with orders and delivery."
        path="/contact"
      />
      <main className="page-main">
        <section className="page-hero section-sm">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>We&apos;re here to help.</h1>
            <p className="page-lead">
              Reach our support team anytime — we typically respond within 2 hours.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-layout">
            <div className="contact-info glass-panel">
              <h2>Get in touch</h2>
              <ul>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href="tel:+18005551234">1-800-555-1234</a>
                </li>
                <li>
                  <strong>Address</strong>
                  <span>123 Green Street, Fresh City, FC 10001</span>
                </li>
                <li>
                  <strong>Hours</strong>
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>

            <div className="contact-form-wrap glass-panel">
              {sent ? (
                <div className="newsletter-success" role="status">
                  <span className="success-icon" aria-hidden="true">✓</span>
                  <p>
                    <strong>Message sent!</strong> We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="auth-form">
                  <h2>Send a message</h2>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>
                  <Button type="submit" loading={loading}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
