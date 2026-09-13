import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface NavItem {
  label: string;
  /** In-page anchor. */
  id?: string;
  /** Route. */
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
}

/**
 * Grey system bar pinned to the top of every page: a black logo tile on the
 * left, then the destinations. Sticky, so there is always a way out of
 * wherever you are.
 */
const SiteNav = ({ items = HOME_NAV, active }: SiteNavProps) => {
  const navigate = useNavigate();

  const go = (item: NavItem) => {
    if (item.to) {
      navigate(item.to);
      return;
    }
    const el = document.getElementById(item.id ?? '');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else navigate(`/#${item.id}`);
  };

  const itemClass = (current: boolean) =>
    `px-2 py-1 text-[13px] sm:text-sm font-semibold whitespace-nowrap border-2 ${
      current
        ? 'border-black bg-black text-white'
        : 'border-transparent hover:border-black'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-band border-b-2 border-black">
      <nav className="mx-auto max-w-6xl px-3 sm:px-5">
        <div className="flex items-center gap-2 sm:gap-4 py-2">
          <Link
            to="/"
            aria-label="Home"
            className="shrink-0 w-9 h-9 border-2 border-black bg-black text-white grid place-items-center font-display text-sm leading-none"
          >
            AA
          </Link>

          <ul className="flex flex-wrap items-center gap-x-0.5 gap-y-1 sm:gap-1">
            {items.map((item) => {
              const current = active === item.label;
              return (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className={itemClass(current)}
                      aria-current={current ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => go(item)}
                      className={itemClass(current)}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SiteNav;
