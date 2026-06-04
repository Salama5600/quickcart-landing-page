import { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article key={item.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div className="accordion-panel" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
