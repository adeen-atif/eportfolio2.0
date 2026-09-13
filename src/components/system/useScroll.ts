import { useEffect, useRef, useState } from 'react';

export interface ScrollState {
  /** window.scrollY */
  y: number;
  /** 0..1 through the whole document */
  progress: number;
  /** Pixels moved since the last frame. Negative when scrolling up. */
  delta: number;
  /** Smoothed absolute speed, roughly 0..1 where 1 is a hard flick. */
  velocity: number;
  direction: 'up' | 'down';
}

type Listener = (s: ScrollState) => void;

const state: ScrollState = {
  y: 0,
  progress: 0,
  delta: 0,
  velocity: 0,
  direction: 'down'
};

const listeners = new Set<Listener>();
let running = false;
let lastY = 0;
let frame = 0;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function tick() {
  const y = window.scrollY || window.pageYOffset || 0;
  const delta = y - lastY;
  lastY = y;

  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - window.innerHeight);

  state.y = y;
  state.delta = delta;
  state.progress = Math.min(1, Math.max(0, y / max));
  if (delta !== 0) state.direction = delta > 0 ? 'down' : 'up';

  // ease toward the instantaneous speed so it decays instead of flickering
  const instant = Math.min(1, Math.abs(delta) / 55);
  state.velocity += (instant - state.velocity) * (instant > state.velocity ? 0.6 : 0.12);
  if (state.velocity < 0.001) state.velocity = 0;

  listeners.forEach((fn) => fn(state));

  // keep ticking while there is residual velocity so decay is visible
  if (listeners.size > 0) {
    frame = requestAnimationFrame(tick);
  } else {
    running = false;
  }
}

function start() {
  if (running) return;
  running = true;
  lastY = window.scrollY || 0;
  frame = requestAnimationFrame(tick);
}

/**
 * Subscribe to the single shared scroll loop. Every animated element reads
 * from this one rAF pass rather than registering its own scroll handler.
 */
export function useScrollSubscribe(fn: Listener) {
  const ref = useRef(fn);
  ref.current = fn;

  useEffect(() => {
    const wrapped: Listener = (s) => ref.current(s);
    listeners.add(wrapped);
    start();
    return () => {
      listeners.delete(wrapped);
      if (listeners.size === 0) {
        cancelAnimationFrame(frame);
        running = false;
      }
    };
  }, []);
}

/** Re-renders the component on scroll. Use sparingly: prefer direct DOM writes. */
export function useScrollState(sampler: (s: ScrollState) => number, round = 3) {
  const [value, setValue] = useState(0);
  const last = useRef(0);

  useScrollSubscribe((s) => {
    const next = Number(sampler(s).toFixed(round));
    if (next !== last.current) {
      last.current = next;
      setValue(next);
    }
  });

  return value;
}

export default useScrollSubscribe;
