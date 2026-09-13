import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface NavItem {
  label: string;
  /** In-page anchor id. Omit when `to` is set. */
  id?: string;
  /** Route path. Omit when `id` is set. */
  to?: string;
}

export const HOME_NAV: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Resources', id: 'resources' },
  { label: 'Blog', to: '/blog' }
];

interface SiteNavProps {
  items?: NavItem[];
  /** Label of the item to mark as current. */
  active?: string;
  /** Section id currently under the reading line; marks its nav item. */
  activeId?: string;
  /** Split point between the left and right corner stacks. */
  splitAt?: number;
  monogram?: string;
}

const num = (i: number) => String(i + 1).padStart(2, '0');

const SiteNav = ({
  items = HOME_NAV,
  active,
  activeId,
  splitAt = 3,
  monogram = '.\\A'
}: SiteNavProps) => {
  const navigate = useNavigate();

  const isCurrent = (item: NavItem) =>
    active === item.label || (activeId != null && item.id === activeId);

  const go = (item: NavItem) => {
    if (item.to) {
      navigate(item.to);
      return;
    }
    const el = document.getElementById(item.id ?? '');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${item.id}`);
    }
  };

  const render = (item: NavItem, index: number, align: 'left' | 'right') => {
    const content = (
      <>
        <span className="text-steel">//{num(index)}.</span>{' '}
        <span>
          &lt;{item.label}
          {'/'}&gt;
        </span>
      </>
    );

    const classes = `nav-link text-[11px] sm:text-xs tracking-wider text-white/70 hover:text-white cursor-pointer ${
      align === 'right' ? 'text-right' : 'text-left'
    }`;

    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className={classes}
          data-active={isCurrent(item) ? 'true' : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        type="button"
        onClick={() => go(item)}
        className={classes}
        data-active={isCurrent(item) ? 'true' : undefined}
      >
        {content}
      </button>
    );
  };

  const left = items.slice(0, splitAt);
  const right = items.slice(splitAt);

  return (
    <nav className="relative z-30 w-full px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
      {/* Desktop: anchored corner quadrants */}
      <div className="hidden md:flex items-start justify-between gap-6">
        <div className="flex flex-col gap-2 items-start">
          {left.map((item, i) => render(item, i, 'left'))}
        </div>

        <Link
          to="/"
          className="display text-2xl lg:text-3xl text-white tracking-widest shrink-0 pt-1"
          aria-label="Home"
        >
          {monogram}
        </Link>

        <div className="flex flex-col gap-2 items-end">
          {right.map((item, i) => render(item, i + splitAt, 'right'))}
        </div>
      </div>

      {/* Mobile: single wrapped row under the monogram */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="display text-xl text-white tracking-widest">
            {monogram}
          </Link>
          <span className="tag">&lt;/&gt;</span>
        </div>
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {items.map((item, i) => render(item, i, 'left'))}
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
