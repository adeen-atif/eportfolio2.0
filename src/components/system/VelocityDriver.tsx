import React from 'react';
import { useScrollSubscribe, prefersReducedMotion } from './useScroll';

/**
 * Publishes live scroll figures onto the root element as custom properties
 * so CSS can react without any component re-rendering:
 *
 *   --vel    0..1   smoothed scroll speed
 *   --dir    -1|1   scroll direction
 *   --spin   deg    accumulated rotation, drives the orbital rings
 *   --prog   0..1   progress through the document
 */
const VelocityDriver = () => {
  const reduced = prefersReducedMotion();

  useScrollSubscribe((s) => {
    const root = document.documentElement;
    if (reduced) {
      root.style.setProperty('--vel', '0');
      root.style.setProperty('--spin', '0');
      root.style.setProperty('--prog', s.progress.toFixed(4));
      return;
    }
    root.style.setProperty('--vel', s.velocity.toFixed(3));
    root.style.setProperty('--dir', s.direction === 'down' ? '1' : '-1');
    root.style.setProperty('--spin', (s.y * 0.22).toFixed(2));
    root.style.setProperty('--prog', s.progress.toFixed(4));
  });

  return null;
};

export default VelocityDriver;
