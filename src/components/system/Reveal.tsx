import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger position within its group. */
  index?: number;
  /** Milliseconds between neighbouring rows. */
  stagger?: number;
  className?: string;
}

/**
 * Wipes a row in from the left as it enters the viewport, offset by its
 * position so a list assembles rather than appearing all at once.
 *
 * The observed element and the animated element are deliberately separate:
 * a clip-path on the target makes IntersectionObserver report it as not
 * intersecting, so the outer node stays unclipped and only the inner one
 * animates.
 */
const Reveal = ({
  children,
  index = 0,
  stagger = 70,
  className = ''
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`h-full ${className}`}>
      <div
        className={`reveal-row h-full ${shown ? 'is-in' : ''}`}
        style={{ transitionDelay: shown ? `${index * stagger}ms` : undefined }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;
