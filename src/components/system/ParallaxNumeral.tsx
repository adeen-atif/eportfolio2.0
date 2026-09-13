import React, { useRef } from 'react';
import { useScrollSubscribe, prefersReducedMotion } from './useScroll';

interface ParallaxNumeralProps {
  /** Two-digit section index, e.g. "03". */
  index: string;
  side?: 'left' | 'right';
  /** Pixels of counter-scroll drift across the element's travel. */
  range?: number;
}

/**
 * Oversized ghost numeral behind a section that drifts against the scroll,
 * giving the page depth without competing with the copy.
 */
const ParallaxNumeral = ({
  index,
  side = 'right',
  range = 160
}: ParallaxNumeralProps) => {
  const wrap = useRef<HTMLSpanElement | null>(null);
  const reduced = prefersReducedMotion();

  useScrollSubscribe(() => {
    const node = wrap.current;
    if (!node || reduced) return;
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    // -1 when entering from the bottom, +1 when leaving at the top
    const t = (vh / 2 - (rect.top + rect.height / 2)) / vh;
    node.style.transform = `translate3d(0, ${(t * range).toFixed(1)}px, 0)`;
  });

  return (
    <span
      ref={wrap}
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 hidden md:block display text-[11rem] lg:text-[16rem] leading-none text-white/[0.035] select-none ${
        side === 'right' ? 'right-0 lg:right-6' : 'left-0 lg:left-6'
      }`}
    >
      {index}
    </span>
  );
};

export default ParallaxNumeral;
