import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LinkTileProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

/**
 * One cell of the quick-links strip: label left, corner arrow right, hard
 * rules shared with its neighbours so the row reads as a single control.
 */
const LinkTile = ({ label, onClick, href }: LinkTileProps) => {
  const handle = () => {
    if (href) window.open(href, '_blank', 'noopener');
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handle}
      className="group flex items-center justify-between gap-3 w-full px-4 py-3 border-r-2 border-b-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-150 text-left"
    >
      <span className="font-semibold text-sm">{label}</span>
      <ArrowUpRight
        className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </button>
  );
};

export default LinkTile;
