import Button from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="section cta" id="cta">
      <div className="container cta-box reveal-up">
        <h2>Ready to simplify your grocery routine?</h2>
        <p>
          Join thousands of households using FreshCart for faster, fresher,
          and smarter grocery delivery.
        </p>
        <Button to="/register" size="lg">
          Create Your Free Account
        </Button>
      </div>
    </section>
  );
}
