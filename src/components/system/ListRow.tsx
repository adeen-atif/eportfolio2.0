import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ListRowProps {
  title: string;
  /** Revealed under the title on hover. */
  meta?: string;
  /** Right-hand column, e.g. a role or publication. */
  aside?: string;
  description?: string;
  onClick?: () => void;
  href?: string;
  /** Small square image or logo shown at the left edge. */
  logo?: string;
}

/**
 * Full-width press-style row: bottom rule, right-pointing arrow, and an
 * instant neon fill on hover that inverts the text to black and reveals
 * the hidden meta line.
 */
const ListRow = ({
  title,
  meta,
  aside,
  description,
  onClick,
  href,
  logo
}: ListRowProps) => {
  const handle = () => {
    if (href) window.open(href, '_blank', 'noopener');
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handle}
      className="group w-full text-left border-b border-steel/60 px-4 sm:px-6 py-6 sm:py-8 fill-hover focus:outline-none focus-visible:bg-neon focus-visible:text-black"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {logo && (
          <span className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center rounded-full border border-steel group-hover:border-black overflow-hidden bg-white/5">
            <img
              src={logo}
              alt=""
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </span>
        )}

        <span className="flex-1 min-w-0">
          <span className="display block text-lg sm:text-2xl md:text-3xl leading-tight break-words">
            {title}
          </span>

          {description && (
            <span className="block mt-2 font-mono text-xs sm:text-sm text-white/60 group-hover:text-black/70 leading-relaxed">
              {description}
            </span>
          )}

          {meta && (
            <span className="block mt-2 font-mono text-[11px] tracking-widest opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-8 text-black/70">
              {meta}
            </span>
          )}
        </span>

        {aside && (
          <span className="hidden md:block font-mono text-xs tracking-widest text-white/50 group-hover:text-black/70 shrink-0">
            {aside}
          </span>
        )}

        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" strokeWidth={1.25} />
      </div>
    </button>
  );
};

export default ListRow;
