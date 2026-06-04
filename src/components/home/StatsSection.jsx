import { useEffect, useRef, useState } from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const stats = [
  { target: 50000, suffix: '+', label: 'Orders Delivered', display: '50K+' },
  { target: 15000, suffix: '+', label: 'Happy Customers', display: '15K+' },
  { target: 500, suffix: '+', label: 'Products Available', display: '500+' },
  { target: 24, suffix: '/7', label: 'Customer Support', display: '24/7', isSupport: true },
];

function StatItem({ stat, inView }) {
  const count = useAnimatedCounter(stat.target, 2000, inView);

  const formatValue = () => {
    if (stat.isSupport) return '24/7';
    if (stat.target >= 1000) return `${Math.floor(count / 1000)}K${stat.suffix}`;
    return `${count}${stat.suffix}`;
  };

  return (
    <article>
      <strong>{inView ? formatValue() : stat.display}</strong>
      <span>{stat.label}</span>
    </article>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="stats">
      <div className="container stats-wrap reveal-up" ref={ref}>
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}
