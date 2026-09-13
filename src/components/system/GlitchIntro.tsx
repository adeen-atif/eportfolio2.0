import React, { useEffect, useState } from 'react';

/**
 * High-contrast horizontal glitch that plays once on first paint:
 * RGB-split wordmark plus displaced blocks, then it clears itself.
 */
const GlitchIntro = ({ label = 'ADEEN ATIF' }: { label?: string }) => {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const t = setTimeout(() => setGone(true), prefersReduced ? 0 : 950);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      className="glitch-curtain fixed inset-0 z-[100] bg-ink flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* displaced blocks */}
      <div className="glitch-layer absolute inset-0">
        <div className="absolute left-0 top-[22%] h-10 w-full bg-neon/30" />
        <div className="absolute left-0 top-[48%] h-4 w-2/3 bg-white/20" />
        <div className="absolute right-0 top-[64%] h-8 w-1/2 bg-neon/20" />
        <div className="absolute left-0 top-[78%] h-2 w-full bg-white/10" />
      </div>

      {/* sweeping scan bar */}
      <div className="glitch-bar absolute left-0 top-0 h-[3px] w-full bg-neon" />

      <div className="glitch-text display text-4xl sm:text-6xl md:text-7xl text-white">
        {label}
      </div>
    </div>
  );
};

export default GlitchIntro;
