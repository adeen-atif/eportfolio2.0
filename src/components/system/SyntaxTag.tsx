import React from 'react';

interface SyntaxTagProps {
  /** Tag name without brackets, e.g. "p" renders <p> ... </p> */
  tag?: string;
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

/**
 * Decorative syntax wrapper. Renders  <p>content</p>  with the brackets
 * in the accent colour and the content in normal copy colour.
 */
export const SyntaxTag = ({
  tag = 'p',
  children,
  className = '',
  textClassName = ''
}: SyntaxTagProps) => (
  <span className={`font-mono ${className}`}>
    <span className="text-neon">&lt;{tag}&gt;</span>
    <span className={textClassName}>{children}</span>
    <span className="text-neon">&lt;/{tag}&gt;</span>
  </span>
);

/** Standalone opening/closing markers stacked above and below a block. */
export const TagMarker = ({
  tag,
  closing = false,
  className = ''
}: {
  tag: string;
  closing?: boolean;
  className?: string;
}) => (
  <span className={`tag select-none ${className}`}>
    &lt;{closing ? '/' : ''}
    {tag}&gt;
  </span>
);

export default SyntaxTag;
