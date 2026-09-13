import React, { useEffect, useState } from 'react';
import useInView from './useInView';
import { prefersReducedMotion } from './useScroll';

interface CountUpProps {
  /** Full display string, e.g. "1,000+", "98%", "2 yrs". */
  value: string;
  className?: string;
  duration?: number;
}

const NUM = /[\d,.]+/;

const hasNumber = (v: string) => NUM.test(v);

/**
 * Rolls the numeric part of a stat up from zero when it enters view,
 * keeping any prefix/suffix (%, +, " yrs") exactly as written.
 */
const CountUp = ({ value, className = '', duration = 900 }: CountUpProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(() =>
    hasNumber(value) ? value.replace(NUM, '0') : value
  );

  // Deliberately keyed on primitives only: deriving the regex match in the
  // dependency array makes this effect restart on every frame it schedules.
  useEffect(() => {
    const match = value.match(NUM);
    if (!match) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      setDisplay(value.replace(NUM, '0'));
      return;
    }
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const raw = match[0];
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
    const target = parseFloat(raw.replace(/,/g, ''));
    const grouped = raw.includes(',');

    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    const fmt = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!grouped) return fixed;
      const [i, d] = fixed.split('.');
      const withCommas = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d ? `${withCommas}.${d}` : withCommas;
    };

    const start = performance.now();
    let frame = requestAnimationFrame(function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out so it lands
      if (t < 1) {
        setDisplay(value.replace(NUM, fmt(target * eased)));
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  if (!hasNumber(value)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
};

export default CountUp;
