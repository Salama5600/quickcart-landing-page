import { testimonials, reviews } from '../../data/testimonials';
import StarRating from '../ui/StarRating';

export default function TestimonialsSection() {
  return (
    <section className="section alt" id="testimonials">
      <div className="container">
        <div className="trust-banner glass-panel reveal-up">
          <span className="trust-icon" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Trusted by thousands</strong>
            <p>Join 15,000+ happy customers who shop with FreshCart every week.</p>
          </div>
        </div>

        <div className="section-head reveal-up">
          <p className="eyebrow">Social Proof</p>
          <h2>Loved by households everywhere.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className={`testimonial-card reveal-up${i > 0 ? ` delay-${i}` : ''}`}
            >
              <StarRating rating={t.rating} showValue={false} />
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <span className="avatar">{t.avatar}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-list reveal-up">
          <h3>Recent Reviews</h3>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <article key={r.id} className="review-card">
                <StarRating rating={r.rating} size="sm" showValue={false} />
                <p>{r.text}</p>
                <footer>
                  <strong>{r.author}</strong>
                  <span>on {r.product}</span>
                  <time>{r.date}</time>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
