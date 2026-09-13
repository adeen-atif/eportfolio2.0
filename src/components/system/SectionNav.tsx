import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollSubscribe } from './useScroll';

export interface NavSection {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: NavSection[];
  activeId: string;
  /** Extra destinations that are separate routes, e.g. the blog. */
  routes?: { label: string; to: string }[];
}

const two = (n: number) => String(n).padStart(2, '0');

/**
 * The persistent way around the site.
 *
 * On wide screens it is the progress rail itself: ticks you can click, with
 * labels that stay out of the way until you approach the rail. On narrow
 * screens it becomes a slim bar that expands into the same list. Both only
 * appear once the hero has been passed, so the landing view stays clean.
 */
const SectionNav = ({ sections, activeId, routes = [] }: SectionNavProps) => {
  const navigate = useNavigate();
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const pctRef = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  useScrollSubscribe((s) => {
    if (fillRef.current) {
      fillRef.current.style.transform = `scaleY(${s.progress})`;
    }
    if (pctRef.current) {
      pctRef.current.textContent = two(Math.round(s.progress * 100));
    }
    const visible = s.y > 260;
    setShown((prev) => (prev === visible ? prev : visible));
  });

  // Collapse the mobile sheet once you start moving again.
  useEffect(() => {
    if (!openSheet) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSheet(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openSheet]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpenSheet(false);
  };

  const activeIndex = Math.max(
    0,
    sections.findIndex((x) => x.id === activeId)
  );
  const activeLabel = sections[activeIndex]?.label ?? '';

  return (
    <>
      {/* ---------- wide screens: the rail is the nav ---------- */}
      <nav
        aria-label="Sections"
        className={`hidden lg:block fixed left-5 top-1/2 -translate-y-1/2 z-40 group ${
          shown ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transition: 'opacity 200ms linear' }}
      >
        <div className="flex items-stretch gap-3">
          {/* progress spine */}
          <div className="relative w-px bg-steel/50 my-6" aria-hidden="true">
            <span
              ref={fillRef}
              className="absolute inset-x-0 top-0 h-full bg-neon origin-top block"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <ul className="flex flex-col gap-1 py-2">
            {sections.map((sec, i) => {
              const current = sec.id === activeId;
              return (
                <li key={sec.id} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`w-[7px] h-[7px] rounded-full shrink-0 ${
                      current ? 'bg-neon' : 'bg-steel'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => jump(sec.id)}
                    data-active={current ? 'true' : undefined}
                    className={`nav-link bg-ink/85 font-mono text-[10px] tracking-widest ${
                      current
                        ? 'text-white opacity-100'
                        : 'text-white/70 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                    }`}
                  >
                    <span className="text-steel">//{two(i + 1)}.</span>&nbsp;
                    <span>
                      &lt;{sec.label}/&gt;
                    </span>
                  </button>
                </li>
              );
            })}

            {routes.map((r) => (
              <li key={r.to} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="w-[7px] h-[7px] rounded-full shrink-0 bg-steel"
                />
                <button
                  type="button"
                  onClick={() => navigate(r.to)}
                  className="nav-link bg-ink/85 font-mono text-[10px] tracking-widest text-white/70 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <span className="text-steel">
                    //{two(sections.length + 1)}.
                  </span>
                  &nbsp;<span>&lt;{r.label}/&gt;</span>
                </button>
              </li>
            ))}

            <li className="mt-2 ml-[15px] w-max bg-ink/85 px-1 font-mono text-[10px] tracking-widest text-white/45">
              <span ref={pctRef}>00</span>%
            </li>
          </ul>
        </div>
      </nav>

      {/* ---------- narrow screens: slim bar that expands ---------- */}
      {openSheet && (
        <button
          type="button"
          aria-label="Close sections"
          onClick={() => setOpenSheet(false)}
          className="lg:hidden fixed inset-0 z-30 bg-ink/60"
        />
      )}

      <div
        className={`lg:hidden fixed top-0 inset-x-0 z-40 ${
          shown ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ transition: 'transform 220ms cubic-bezier(0.2,0.7,0.3,1)' }}
      >
        <div className="bg-ink border-b border-steel/60">
          <button
            type="button"
            onClick={() => setOpenSheet((v) => !v)}
            aria-expanded={openSheet}
            aria-label="Sections"
            className="w-full flex items-center justify-between gap-3 px-5 h-12"
          >
            <span className="display text-sm text-white tracking-widest">
              {'.\\A'}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-white/75 truncate">
              <span className="text-neon">//{two(activeIndex + 1)}.</span>{' '}
              &lt;{activeLabel}/&gt;
            </span>
            <span className="font-mono text-[10px] text-neon shrink-0">
              {openSheet ? '[-]' : '[+]'}
            </span>
          </button>

          {openSheet && (
            <ul className="px-3 pb-3 grid grid-cols-2 gap-1 border-t border-steel/40 pt-3">
              {sections.map((sec, i) => (
                <li key={sec.id}>
                  <button
                    type="button"
                    onClick={() => jump(sec.id)}
                    data-active={sec.id === activeId ? 'true' : undefined}
                    className="nav-link w-full justify-start font-mono text-[10px] tracking-widest text-white/75"
                  >
                    <span className="text-steel">//{two(i + 1)}.</span>&nbsp;
                    &lt;{sec.label}/&gt;
                  </button>
                </li>
              ))}
              {routes.map((r) => (
                <li key={r.to}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenSheet(false);
                      navigate(r.to);
                    }}
                    className="nav-link w-full justify-start font-mono text-[10px] tracking-widest text-white/75"
                  >
                    <span className="text-steel">
                      //{two(sections.length + 1)}.
                    </span>
                    &nbsp;&lt;{r.label}/&gt;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionNav;
