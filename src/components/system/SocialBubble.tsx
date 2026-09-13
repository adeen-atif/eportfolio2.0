import React from 'react';

interface SocialBubbleProps {
  label: string;
  href: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const SIZES = {
  sm: 'w-24 h-24 text-[10px]',
  md: 'w-32 h-32 text-xs',
  lg: 'w-40 h-40 text-xs'
};

/**
 * Large circular social node. Instant neon fill on hover with the label
 * inverted to black, sized to sit in a loose constellation.
 */
const SocialBubble = ({
  label,
  href,
  size = 'md',
  className = '',
  icon
}: SocialBubbleProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`fill-hover flex flex-col items-center justify-center gap-2 rounded-full border border-steel text-white hover:border-neon font-mono tracking-widest uppercase ${SIZES[size]} ${className}`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default SocialBubble;
