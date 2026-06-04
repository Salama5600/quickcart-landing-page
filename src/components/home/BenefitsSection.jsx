const benefits = [
  {
    title: 'Fast Delivery',
    text: 'Same-day fulfillment with optimized routes and live ETAs.',
  },
  {
    title: 'Quality Guaranteed',
    text: 'Freshness checks at packing and no-questions replacement policy.',
  },
  {
    title: 'Transparent Pricing',
    text: 'No surprise markups, with clear totals before checkout.',
  },
  {
    title: 'Smart Recommendations',
    text: 'Personalized product picks based on your routine purchases.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section alt" id="benefits">
      <div className="container">
        <div className="section-head reveal-up">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Built for convenience, reliability, and value.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className={`benefit reveal-up${i > 0 ? ` delay-${i % 3}` : ''}`}
            >
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
