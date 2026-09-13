import React from 'react';

interface WindowProps {
  /** Mono label centred in the title bar, e.g. "2020-04-08-project.html". */
  filename?: string;
  children: React.ReactNode;
  className?: string;
  /** Body padding. Off for flush images. */
  padded?: boolean;
  /** Offset shadow weight. */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover. */
  interactive?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  as?: 'div' | 'article';
}

const SHADOW = {
  none: '',
  sm: 'hard',
  md: 'hard-lg',
  lg: 'hard-xl'
};

/**
 * The core surface of the site: a desktop window with a title bar carrying
 * two outlined dots and a mono filename. Everything that holds content sits
 * in one of these.
 */
const Window = ({
  filename,
  children,
  className = '',
  padded = true,
  shadow = 'md',
  interactive = false,
  style,
  onClick,
  as = 'div'
}: WindowProps) => {
  const Tag = as;

  return (
    <Tag
      className={`bg-white border-2 border-black ${SHADOW[shadow]} ${
        interactive ? 'lift' : ''
      } ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 border-b-2 border-black px-3 py-2 bg-band">
        <span className="flex gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
          <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
        </span>

        {filename && (
          <span className="chrome flex-1 text-center truncate px-2">
            {filename}
          </span>
        )}

        {/* keeps the filename optically centred against the dots */}
        <span className="w-[38px] shrink-0" aria-hidden="true" />
      </div>

      <div className={padded ? 'p-5 sm:p-6' : ''}>{children}</div>
    </Tag>
  );
};

export default Window;
