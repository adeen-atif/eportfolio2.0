import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  /** Small underlined action shown to the right, e.g. "View all blog posts". */
  action?: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
  size?: 'md' | 'lg';
}

const SIZE = {
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl'
};

/**
 * Oversized display heading, optionally with a small underlined link sitting
 * beneath it the way the reference pairs "From the blog" with its link.
 */
const SectionHeading = ({
  children,
  action,
  className = '',
  as = 'h2',
  size = 'md'
}: SectionHeadingProps) => {
  const Tag = as;

  return (
    <div className={`mb-8 md:mb-10 ${className}`}>
      <Tag className={`display ${SIZE[size]} text-black`}>{children}</Tag>
      {action && <div className="mt-2 text-sm font-semibold">{action}</div>}
    </div>
  );
};

export default SectionHeading;
