import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.16, ...options }
    );

    const targets = el.querySelectorAll('.reveal-up');
    if (targets.length) {
      targets.forEach((t) => observer.observe(t));
    } else {
      el.classList.add('reveal-up');
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}
