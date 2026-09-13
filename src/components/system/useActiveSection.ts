import { useRef, useState } from 'react';
import { useScrollSubscribe } from './useScroll';

/**
 * Returns the id of the section currently occupying the reading line
 * (40% down the viewport). Driven by the shared scroll loop.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  const current = useRef(active);

  useScrollSubscribe(() => {
    const line = window.innerHeight * 0.4;
    let found = ids[0] ?? '';

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= line && rect.bottom > line) {
        found = id;
        break;
      }
      if (rect.top <= line) found = id;
    }

    if (found !== current.current) {
      current.current = found;
      setActive(found);
    }
  });

  return active;
}

export default useActiveSection;
