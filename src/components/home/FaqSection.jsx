import { faqItems } from '../../data/faq';
import Accordion from '../ui/Accordion';

export default function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal-up">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions about delivery.</h2>
        </div>
        <div className="reveal-up delay-1">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
