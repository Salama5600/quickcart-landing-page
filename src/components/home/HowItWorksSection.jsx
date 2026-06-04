const steps = [
  {
    index: '01',
    title: 'Pick your essentials',
    text: 'Browse thousands of products with intelligent filters and weekly curated suggestions.',
  },
  {
    index: '02',
    title: 'Choose delivery slot',
    text: 'Select a convenient window with real-time driver availability in your area.',
  },
  {
    index: '03',
    title: 'Track and receive',
    text: 'Get live updates from packing to doorstep arrival with instant order support.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section alt" id="how">
      <div className="container">
        <div className="section-head reveal-up">
          <p className="eyebrow">How It Works</p>
          <h2>Three steps to stress-free shopping.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <article
              key={step.index}
              className={`step-card reveal-up${i > 0 ? ` delay-${i}` : ''}`}
            >
              <span className="step-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
