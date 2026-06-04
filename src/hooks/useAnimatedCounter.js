import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target, duration = 2000, enabled = true) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, enabled]);

  return value;
}
