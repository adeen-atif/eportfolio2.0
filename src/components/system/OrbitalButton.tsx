import React from 'react';

interface OrbitalButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: 'w-36 h-36 text-[10px]',
  md: 'w-48 h-48 text-xs',
  lg: 'w-56 h-56 sm:w-64 sm:h-64 text-xs sm:text-sm'
};

/**
 * Large transparent circular control with a thin ring and orbiting
 * particles: one white dot on the rim plus two smaller grey satellites,
 * all on a linear infinite path.
 */
const OrbitalButton = ({
  label,
  onClick,
  href,
  size = 'lg',
  className = ''
}: OrbitalButtonProps) => {
  const handle = () => {
    if (href) window.open(href, '_blank', 'noopener');
    onClick?.();
  };

  return (
    <div
      className={`relative flex items-center justify-center ${SIZES[size]} ${className}`}
    >
      <div className="absolute inset-0 rounded-full border border-steel" />
      <div className="absolute inset-[14%] rounded-full border border-steel/40" />

      <div className="absolute inset-0 rounded-full orbit-fast">
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white" />
      </div>
      <div className="absolute inset-0 rounded-full orbit-slow">
        <div className="absolute top-1/4 -right-[4px] w-2 h-2 rounded-full bg-steel" />
      </div>
      <div className="absolute inset-0 rounded-full orbit-reverse">
        <div className="absolute bottom-1/4 -left-[4px] w-2.5 h-2.5 rounded-full bg-neon" />
      </div>

      <button
        type="button"
        onClick={handle}
        className="relative z-10 font-mono tracking-widest text-white hover:text-neon transition-colors duration-200 px-4 text-center"
      >
        &lt;{label}/&gt;
      </button>
    </div>
  );
};

export default OrbitalButton;
