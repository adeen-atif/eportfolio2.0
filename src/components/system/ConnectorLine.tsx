import React, { useEffect, useRef } from 'react';
import { useScrollSubscribe } from './useScroll';

type Variant = 'straight' | 'kink-right' | 'kink-left' | 'branch';

interface ConnectorLineProps {
  variant?: Variant;
  height?: number;
  className?: string;
  startDot?: boolean;
}

const PATHS: Record<Variant, string> = {
  straight: 'M60 0 L60 200',
  'kink-right': 'M60 0 L60 70 L108 118 L108 200',
  'kink-left': 'M60 0 L60 70 L12 118 L12 200',
  branch: 'M60 0 L60 96 M60 96 L12 150 M60 96 L108 150'
};

/**
 * Neon connector that draws itself downward as the user scrolls past it,
 * stitching one section to the next. A travelling dot rides the drawn end
 * so the line reads as something being written, not just revealed.
 *
 * Runs off the shared scroll loop and writes SVG attributes directly, so it
 * never re-renders.
 */
const ConnectorLine = ({
  variant = 'straight',
  height = 200,
  className = '',
  startDot = true
}: ConnectorLineProps) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const headRef = useRef<SVGCircleElement | null>(null);
  const lengthRef = useRef(0);

  useEffect(() => {
    if (pathRef.current) {
      lengthRef.current = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = String(lengthRef.current);
      pathRef.current.style.strokeDashoffset = String(lengthRef.current);
    }
  }, [variant]);

  useScrollSubscribe(() => {
    const node = wrapRef.current;
    const path = pathRef.current;
    const len = lengthRef.current;
    if (!node || !path || !len) return;

    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const raw = (vh * 0.85 - rect.top) / (rect.height + vh * 0.2);
    const progress = Math.min(1, Math.max(0, raw));

    path.style.strokeDashoffset = String(len * (1 - progress));

    if (headRef.current) {
      if (progress > 0.01 && progress < 0.995) {
        const pt = path.getPointAtLength(len * progress);
        headRef.current.setAttribute('cx', String(pt.x));
        headRef.current.setAttribute('cy', String(pt.y));
        headRef.current.style.opacity = '1';
      } else {
        headRef.current.style.opacity = '0';
      }
    }
  });

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none flex justify-center ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        width="120"
        height={height}
        viewBox="0 0 120 200"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <path
          d={PATHS[variant]}
          stroke="#4A4D57"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          ref={pathRef}
          d={PATHS[variant]}
          stroke="#7D12FF"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          ref={headRef}
          r="3"
          fill="#7D12FF"
          style={{ opacity: 0 }}
        />
        {startDot && <circle cx="60" cy="0" r="3.5" fill="#7D12FF" />}
      </svg>
    </div>
  );
};

export default ConnectorLine;
