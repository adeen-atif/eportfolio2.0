import React, { useState } from 'react';
import Window from '@/components/retro/Window';
import {
  MAP_WIDTH,
  MAP_HEIGHT,
  SPHERE_PATH,
  LAND_PATH,
  HIGHLIGHTED
} from '@/components/retro/worldPaths';

/** Projects tied to each highlighted country. */
const PROJECTS: Record<string, number> = {
  SA: 40,
  PK: 4,
  US: 3,
  DE: 2,
  GB: 1
};

/** Shorter than the Natural Earth names, which run long in a legend. */
const LABEL: Record<string, string> = {
  SA: 'Saudi Arabia',
  PK: 'Pakistan',
  US: 'United States',
  DE: 'Germany',
  GB: 'United Kingdom'
};

const ORDER = ['SA', 'PK', 'US', 'DE', 'GB'];

const projects = (n: number) => `${n} project${n === 1 ? '' : 's'}`;

const WorldMap = () => {
  const [active, setActive] = useState<string | null>(null);

  const byCode = Object.fromEntries(HIGHLIGHTED.map((c) => [c.code, c]));
  const total = ORDER.reduce((n, c) => n + PROJECTS[c], 0);
  const current = active ? byCode[active] : null;

  // Callout sits above the country, nudged back inside the frame at the edges.
  const calloutW = 190;
  const calloutH = 46;
  const cx = current ? Math.min(Math.max(current.c[0] - calloutW / 2, 4), MAP_WIDTH - calloutW - 4) : 0;
  const cy = current ? Math.max(current.c[1] - calloutH - 14, 4) : 0;

  return (
    <Window filename="reach.map" padded={false} shadow="lg">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px]">
        {/* Map */}
        <div className="halftone border-b-2 lg:border-b-0 lg:border-r-2 border-black p-3 sm:p-4">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="w-full h-auto"
            role="img"
            aria-label={`World map. ${projects(total)} across ${ORDER.length} countries.`}
          >
            <defs>
              {/* Unhighlighted land reads as halftone, matching the bands */}
              <pattern
                id="land-dots"
                width="7"
                height="7"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.6" cy="1.6" r="1.15" fill="#000" opacity="0.32" />
              </pattern>
            </defs>

            <path
              d={SPHERE_PATH}
              fill="#fff"
              stroke="#000"
              strokeWidth="2.5"
            />

            <path
              d={LAND_PATH}
              fill="url(#land-dots)"
              stroke="#000"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />

            {ORDER.map((code) => {
              const c = byCode[code];
              if (!c) return null;
              const on = active === code;
              return (
                <path
                  key={code}
                  d={c.d}
                  tabIndex={0}
                  role="button"
                  aria-label={`${LABEL[code]}: ${projects(PROJECTS[code])}`}
                  onMouseEnter={() => setActive(code)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(code)}
                  onBlur={() => setActive(null)}
                  fill={on ? '#fff' : '#000'}
                  stroke="#000"
                  strokeWidth={on ? 3 : 1.5}
                  strokeLinejoin="round"
                  className="cursor-pointer outline-none"
                />
              );
            })}

            {/* At this scale the UK is a handful of pixels, so a generous
                invisible disc does the hit-testing and a ring carries the
                selected state. */}
            {ORDER.map((code) => {
              const c = byCode[code];
              if (!c) return null;
              const on = active === code;
              return (
                <g key={`ring-${code}`}>
                  {on && (
                    <circle
                      cx={c.c[0]}
                      cy={c.c[1]}
                      r="17"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                      pointerEvents="none"
                    />
                  )}
                  <circle
                    cx={c.c[0]}
                    cy={c.c[1]}
                    r="15"
                    fill="transparent"
                    onMouseEnter={() => setActive(code)}
                    onMouseLeave={() => setActive(null)}
                    className="cursor-pointer"
                  />
                </g>
              );
            })}

            {/* Callout, drawn in the same window chrome language */}
            {current && (
              <g pointerEvents="none">
                <line
                  x1={current.c[0]}
                  y1={current.c[1]}
                  x2={current.c[0]}
                  y2={cy + calloutH}
                  stroke="#000"
                  strokeWidth="2"
                />
                <rect
                  x={cx + 5}
                  y={cy + 5}
                  width={calloutW}
                  height={calloutH}
                  fill="#000"
                />
                <rect
                  x={cx}
                  y={cy}
                  width={calloutW}
                  height={calloutH}
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2.5"
                />
                <text
                  x={cx + 12}
                  y={cy + 19}
                  fontFamily='"IBM Plex Mono", monospace'
                  fontSize="14"
                  fill="#000"
                >
                  {LABEL[active as string]}
                </text>
                <text
                  x={cx + 12}
                  y={cy + 37}
                  fontFamily='"IBM Plex Mono", monospace'
                  fontSize="14"
                  fontWeight="600"
                  fill="#000"
                >
                  {projects(PROJECTS[active as string])}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Legend: the touch and keyboard path to the same information */}
        <div className="bg-white">
          <div className="px-4 py-3 border-b-2 border-black flex items-baseline justify-between">
            <span className="chrome">WHERE</span>
            <span className="chrome">{projects(total)}</span>
          </div>

          <ul>
            {ORDER.map((code) => (
              <li key={code}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(code)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(code)}
                  onBlur={() => setActive(null)}
                  aria-label={`${LABEL[code]}: ${projects(PROJECTS[code])}`}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 border-b-2 border-black text-left transition-colors duration-150 ${
                    active === code ? 'bg-black text-white' : 'bg-white'
                  }`}
                >
                  <span className="text-sm font-semibold">{LABEL[code]}</span>
                  <span className="display text-lg">{PROJECTS[code]}</span>
                </button>
              </li>
            ))}
          </ul>

          <p className="px-4 py-3 chrome text-neutral-600">
            Hover the map, or a row, for counts
          </p>
        </div>
      </div>
    </Window>
  );
};

export default WorldMap;
