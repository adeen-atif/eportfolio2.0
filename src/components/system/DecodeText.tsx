import React, { useEffect, useRef } from 'react';
import useInView from './useInView';
import { prefersReducedMotion } from './useScroll';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

interface DecodeTextProps {
  children: string;
  className?: string;
  /** Milliseconds each character spends scrambling before it settles. */
  scramble?: number;
  as?: 'p' | 'span' | 'div';
}

/**
 * Body copy that arrives as noise and resolves left to right the first time
 * it scrolls into view. Whitespace is never scrambled so the line breaks
 * never shift while it settles.
 */
const DecodeText = ({
  children,
  className = '',
  scramble = 420,
  as = 'p'
}: DecodeTextProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const outRef = useRef<HTMLSpanElement | null>(null);
  const raf = useRef(0);

  useEffect(() => {
    const node = outRef.current;
    if (!node || !inView) return;

    const text = children;

    if (prefersReducedMotion()) {
      node.textContent = text;
      return;
    }

    const start = performance.now();
    // total run: the sweep across the string plus the per-character tail
    const sweep = Math.max(320, Math.min(900, text.length * 9));
    const total = sweep + scramble;

    const step = (now: number) => {
      const elapsed = now - start;
      const head = (elapsed / sweep) * text.length;
      let out = '';

      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (ch === ' ' || ch === '\n') {
          out += ch;
          continue;
        }
        if (i < head - scramble / 18) {
          out += ch;
        } else if (i < head) {
          out += GLYPHS[(i + Math.floor(elapsed / 26)) % GLYPHS.length];
        } else {
          out += ' ';
        }
      }

      node.textContent = out;

      if (elapsed < total) {
        raf.current = requestAnimationFrame(step);
      } else {
        node.textContent = text;
      }
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, children, scramble]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      <span className="sr-only">{children}</span>
      <span ref={outRef} aria-hidden="true" />
    </Tag>
  );
};

export default DecodeText;
