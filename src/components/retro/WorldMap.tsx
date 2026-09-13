import React, { useState } from 'react';
import Window from '@/components/retro/Window';
import {
  MAP_WIDTH,
  MAP_HEIGHT,
  SPHERE_PATH,
  LAND_PATH,
  HIGHLIGHTED
} from '@/components/retro/worldPaths';

const LABEL: Record<string, string> = {
  SA: 'Saudi Arabia',
  PK: 'Pakistan',
  US: 'United States',
  DE: 'Germany',
  GB: 'United Kingdom'
};

const ORDER = ['SA', 'PK', 'US', 'DE', 'GB'];

/** Affiliated organisations per country, shown when you hover the map. */
const AFFILIATIONS: Record<string, number> = {
  SA: 40,
  PK: 4,
  US: 3,
  DE: 2,
  GB: 1
};

/** Germany and the UK sit ~30 units apart, so their tags need pushing
 *  off the centroid. The connector line keeps them readable. */
const TAG_OFFSET: Record<string, [number, number]> = {
  GB: [-36, -14],
  DE: [32, 4]
};

interface Stat {
  number: string;
  label: string;
  /** Countries this stat lights up. Omit for stats that aren't geographic. */
  places?: string[];
  /** Per-country figures, drawn on the map. Only where a real split exists. */
  counts?: Record<string, number>;
  /** Of `places`, the ones carrying most of it. */
  lead?: string[];
}

const STATS: Stat[] = [
  {
    number: '19',
    label: 'AI Projects Shipped',
    counts: { SA: 10, PK: 4, DE: 2 }
  },
  { number: '98%', label: 'Avg Model Accuracy' },
  { number: '4 yrs', label: 'AI & Product Experience' },
  {
    number: '1,000+',
    label: 'Students Taught',
    places: ORDER,
    lead: ['SA', 'PK', 'GB']
  },
  { number: '50+', label: 'Org Affiliations', counts: AFFILIATIONS },
  {
    number: '25+',
    label: 'Events Led',
    counts: { PK: 20, US: 5 }
  }
];

const placesOf = (s: Stat) =>
  s.places ?? (s.counts ? Object.keys(s.counts) : []);

const affiliations = (n: number) =>
  `${n} affiliation${n === 1 ? '' : 's'}`;

type Hover =
  | { kind: 'country'; code: string }
  | { kind: 'stat'; index: number }
  | null;

const WorldMap = () => {
  const [hover, setHover] = useState<Hover>(null);

  const byCode = Object.fromEntries(HIGHLIGHTED.map((c) => [c.code, c]));

  const stat = hover?.kind === 'stat' ? STATS[hover.index] : null;
  const country = hover?.kind === 'country' ? hover.code : null;

  // Nothing hovered means everything is lit: five solid marks at rest, no
  // explanation demanded of you before you touch anything.
  const lit = new Set(country ? [country] : stat ? placesOf(stat) : ORDER);
  const ringed = new Set(
    country ? [country] : stat?.lead ?? (stat ? placesOf(stat) : [])
  );

  // One callout, only for the map's own hover. A stat hover labels each
  // country in place instead, since there can be three of them at once.
  const c = country ? byCode[country] : null;
  const calloutW = 190;
  const calloutH = 46;
  const cx = c
    ? Math.min(Math.max(c.c[0] - calloutW / 2, 4), MAP_WIDTH - calloutW - 4)
    : 0;
  const cy = c ? Math.max(c.c[1] - calloutH - 14, 4) : 0;

  return (
    <Window filename="reach.map" padded={false} shadow="lg">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">
        <div className="halftone border-b-2 lg:border-b-0 lg:border-r-2 border-black p-3 sm:p-4">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="w-full h-auto"
            role="img"
            aria-label={`World map marking ${ORDER.length} countries: ${ORDER.map(
              (k) => `${LABEL[k]}, ${affiliations(AFFILIATIONS[k])}`
            ).join('; ')}.`}
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

            <path d={SPHERE_PATH} fill="#fff" stroke="#000" strokeWidth="2.5" />

            <path
              d={LAND_PATH}
              fill="url(#land-dots)"
              stroke="#000"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />

            {/* Marked countries. Unlit ones empty out rather than tint, which
                is the only way to fall back in two colours. */}
            {ORDER.map((code) => {
              const geo = byCode[code];
              if (!geo) return null;
              const on = lit.has(code);
              return (
                <path
                  key={code}
                  d={geo.d}
                  tabIndex={0}
                  role="button"
                  aria-label={`${LABEL[code]}: ${affiliations(AFFILIATIONS[code])}`}
                  onMouseEnter={() => setHover({ kind: 'country', code })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({ kind: 'country', code })}
                  onBlur={() => setHover(null)}
                  fill={on ? '#000' : '#fff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="cursor-pointer outline-none transition-[fill] duration-150"
                />
              );
            })}

            {/* At this scale the UK is a handful of pixels, so a generous
                invisible disc does the hit-testing and a ring carries the
                selected state. */}
            {ORDER.map((code) => {
              const geo = byCode[code];
              if (!geo) return null;
              const on = hover !== null && ringed.has(code);
              return (
                <g key={`ring-${code}`}>
                  {on && (
                    <circle
                      cx={geo.c[0]}
                      cy={geo.c[1]}
                      r="17"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                      pointerEvents="none"
                    />
                  )}
                  <circle
                    cx={geo.c[0]}
                    cy={geo.c[1]}
                    r="15"
                    fill="transparent"
                    onMouseEnter={() => setHover({ kind: 'country', code })}
                    onMouseLeave={() => setHover(null)}
                    className="cursor-pointer"
                  />
                </g>
              );
            })}

            {/* Per-country figures for the stat being hovered */}
            {stat?.counts &&
              Object.entries(stat.counts).map(([code, n]) => {
                const geo = byCode[code];
                if (!geo) return null;
                const w = 52;
                const h = 30;
                const [dx, dy] = TAG_OFFSET[code] ?? [0, 0];
                const x = Math.min(
                  Math.max(geo.c[0] + dx - w / 2, 4),
                  MAP_WIDTH - w - 4
                );
                const y = Math.max(geo.c[1] + dy - 22 - h, 4);
                return (
                  <g key={`tag-${code}`} pointerEvents="none">
                    <line
                      x1={geo.c[0]}
                      y1={geo.c[1]}
                      x2={x + w / 2}
                      y2={y + h}
                      stroke="#000"
                      strokeWidth="2"
                    />
                    <rect x={x + 4} y={y + 4} width={w} height={h} fill="#000" />
                    <rect
                      x={x}
                      y={y}
                      width={w}
                      height={h}
                      fill="#fff"
                      stroke="#000"
                      strokeWidth="2.5"
                    />
                    <text
                      x={x + w / 2}
                      y={y + 21}
                      textAnchor="middle"
                      fontFamily='"IBM Plex Mono", monospace'
                      fontSize="16"
                      fontWeight="600"
                      fill="#000"
                    >
                      {n}
                    </text>
                  </g>
                );
              })}

            {/* Callout, drawn in the same window chrome language */}
            {c && (
              <g pointerEvents="none">
                <line
                  x1={c.c[0]}
                  y1={c.c[1]}
                  x2={c.c[0]}
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
                  {LABEL[country as string]}
                </text>
                <text
                  x={cx + 12}
                  y={cy + 37}
                  fontFamily='"IBM Plex Mono", monospace'
                  fontSize="14"
                  fontWeight="600"
                  fill="#000"
                >
                  {affiliations(AFFILIATIONS[country as string])}
                </text>
              </g>
            )}
          </svg>

          <p className="chrome mt-3 flex flex-wrap items-baseline justify-between gap-x-3">
            <span>50 affiliations · 5 countries</span>
            <span className="text-neutral-600">
              {stat ? stat.label : 'Hover a country, or a stat'}
            </span>
          </p>
        </div>

        {/* The numbers, doubling as the map's legend */}
        <div className="grid grid-cols-2 bg-white">
          {STATS.map((s, i) => {
            const on = hover?.kind === 'stat' && hover.index === i;
            const geographic = placesOf(s).length > 0;
            return (
              <div
                key={s.label}
                onMouseEnter={() => setHover({ kind: 'stat', index: i })}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover({ kind: 'stat', index: i })}
                onBlur={() => setHover(null)}
                tabIndex={geographic ? 0 : undefined}
                aria-label={
                  geographic
                    ? `${s.number} ${s.label}, across ${placesOf(s)
                        .map((k) => LABEL[k])
                        .join(', ')}`
                    : undefined
                }
                className={`border-b-2 border-l-2 border-black p-5 text-center outline-none transition-colors duration-150 ${
                  on ? 'bg-black text-white' : 'bg-white'
                } ${geographic ? 'cursor-pointer' : ''}`}
              >
                <div className="display text-2xl sm:text-3xl">{s.number}</div>
                <div className="mt-1 chrome">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Window>
  );
};

export default WorldMap;
