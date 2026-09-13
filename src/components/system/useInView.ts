import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element crosses into the viewport.
 * Used by the typewriter headings and the scroll-drawn connector lines.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.35
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default useInView;
