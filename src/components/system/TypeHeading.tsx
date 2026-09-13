import React, { useEffect, useState } from 'react';
import useInView from './useInView';

interface TypeHeadingProps {
  text: string;
  /** Milliseconds between characters. */
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  /** Small accent tag rendered above the heading, e.g. "h2". */
  tag?: string;
  id?: string;
}

/**
 * Section header that types itself out one character at a time the first
 * time it scrolls into view.
 */
const TypeHeading = ({
  text,
  speed = 38,
  className = '',
  as = 'h2',
  tag = 'h2',
  id
}: TypeHeadingProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [count, setCount] = useState(0);

  const prefersReduced =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setCount(text.length);
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [inView, text, speed, prefersReduced]);

  const Tag = as;
  const done = count >= text.length;

  return (
    <div ref={ref} className="relative" id={id}>
      <span className="tag block mb-3 select-none">&lt;{tag}&gt;</span>
      <Tag
        className={`velocity-head display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white ${className}`}
      >
        <span aria-hidden="true">{text.slice(0, count)}</span>
        <span className="sr-only">{text}</span>
        {!done && (
          <span className="caret text-neon" aria-hidden="true">
            _
          </span>
        )}
      </Tag>
      <span className="tag block mt-3 select-none">&lt;/{tag}&gt;</span>
    </div>
  );
};

export default TypeHeading;
