import React, { useCallback, useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import TypeHeading from '@/components/system/TypeHeading';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';
import Reveal from '@/components/system/Reveal';

interface Entry {
  title: string;
  desc: string;
  year: string;
  logo: string;
  photo: string;
  /** Tile footprint in the gallery grid. */
  span: 'wide' | 'tall' | 'normal';
}

const leadership: Entry[] = [
  {
    title: 'NASA Space Apps Challenge Judge',
    desc: 'Mentored and judged teams on various Astronomy + AI use cases',
    year: '2023',
    logo: '/lovable-uploads/nasa-logo.png',
    photo: '/lovable-uploads/nasa-photo.png',
    span: 'wide'
  },
  {
    title: 'GOOGLE DSC LEAD',
    desc: 'Led 10+ tech events, mentorship circles, and bootcamps.',
    year: '2023',
    logo: '/lovable-uploads/2479db06-db0d-46ab-abd3-9e427161536e.png',
    photo: '/lovable-uploads/c7416d44-ad02-47e6-9511-ebdf1a70445b.png',
    span: 'normal'
  },
  {
    title: 'CO-FOUNDER ARCANUM',
    desc: 'Started a booming ed-tech company aiming to aid students and working professionals.',
    year: '2025',
    logo: '/lovable-uploads/Final Final Logo.png',
    photo: '/lovable-uploads/AA.png',
    span: 'normal'
  },
  {
    title: 'TEDX CLIFTON',
    desc: 'Curated and led speaker storytelling for TEDx talks.',
    year: '2023',
    logo: '/lovable-uploads/9de938c3-30fc-4c53-b837-1bcdc296cd68.png',
    photo:
      '/lovable-uploads/489757877_1072519284895790_2402514148411438511_n.jpg',
    span: 'normal'
  },
  {
    title: 'WWF PAKISTAN',
    desc: 'Designed youth-focused sustainability workshops.',
    year: '2022',
    logo: '/lovable-uploads/e4ecd225-bc4c-406c-926c-03deb13ed764.png',
    photo: '/lovable-uploads/f47bd6e2-3b8e-427f-a96f-97aefbdac72b.png',
    span: 'normal'
  },
  {
    title: 'WRO ROBOTICS JUDGE',
    desc: 'Mentored and judged national-level robotics talent.',
    year: '2023',
    logo: '/lovable-uploads/81bcdf6c-9127-4176-9c62-a8c6a6328f22.png',
    photo: '/lovable-uploads/1692709757999.jpeg',
    span: 'normal'
  },
  {
    title: 'BADMINTON TEAM CAPTAIN',
    desc: "Led IBA's badminton team to multiple victories and championships.",
    year: '2022-24',
    logo: '/lovable-uploads/images (4).png',
    photo: '/lovable-uploads/3ea90759-19d7-4ee3-9bc6-7cea80503e4e.png',
    span: 'wide'
  }
];

const SPAN_CLASS: Record<Entry['span'], string> = {
  wide: 'sm:col-span-2 aspect-[16/10]',
  tall: 'aspect-[3/4]',
  normal: 'aspect-[4/3]'
};

const LeadershipSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) =>
        i === null ? i : (i + d + leadership.length) % leadership.length
      ),
    []
  );

  // Escape closes, arrows move, and the page behind stops scrolling.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const active = open === null ? null : leadership[open];

  return (
    <section
      id="leadership"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="04" side="right" />

      <div className="relative mx-auto max-w-6xl">
        <TypeHeading text="Where I've Led" tag="h2" />
        <p className="mt-6 font-mono text-sm text-white/55">
          <span className="text-neon">&lt;p&gt;</span>
          Learned, and left a mark
          <span className="text-neon">&lt;/p&gt;</span>
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {leadership.map((item, i) => (
            <Reveal
              key={item.title}
              index={i % 3}
              stagger={80}
              className={SPAN_CLASS[item.span]}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${item.title}. Open image.`}
                className="group relative block w-full h-full overflow-hidden border border-steel/50 hover:border-neon focus:outline-none focus-visible:border-neon text-left"
              >
                <img
                  src={item.photo}
                  alt={`${item.title} in action`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-[1.04]"
                />

                {/* base wash so the caption always reads */}
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                {/* neon pass on hover */}
                <span className="absolute inset-0 bg-neon/0 group-hover:bg-neon/20 group-focus-visible:bg-neon/20 transition-colors duration-300" />

                <span className="absolute top-3 left-3 w-9 h-9 rounded-full border border-white/30 bg-ink/70 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.logo}
                    alt=""
                    loading="lazy"
                    className="w-5 h-5 object-contain"
                  />
                </span>

                <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-white/70 bg-ink/70 px-2 py-1">
                  {item.year}
                </span>

                <Maximize2
                  className="absolute bottom-3 right-3 w-4 h-4 text-white/0 group-hover:text-white/80 transition-colors duration-300"
                  strokeWidth={1.5}
                />

                <span className="absolute inset-x-0 bottom-0 p-4 pr-10">
                  <span className="display block text-sm sm:text-base leading-tight text-white">
                    {item.title}
                  </span>
                  <span className="block mt-1 font-mono text-[11px] leading-relaxed text-white/0 max-h-0 overflow-hidden group-hover:text-white/75 group-hover:max-h-24 group-focus-visible:text-white/75 group-focus-visible:max-h-24 transition-[max-height,color] duration-300">
                    {item.desc}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] tracking-widest text-neon">
                //{String((open ?? 0) + 1).padStart(2, '0')} /{' '}
                {String(leadership.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="fill-hover w-10 h-10 border border-steel flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="border border-steel/60 bg-surface">
              <img
                src={active.photo}
                alt={`${active.title} in action`}
                className="w-full max-h-[58vh] object-contain bg-ink"
              />

              <div className="p-5 sm:p-6 border-t border-steel/60">
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 shrink-0 rounded-full border border-steel flex items-center justify-center overflow-hidden bg-white/5">
                    <img
                      src={active.logo}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="display text-lg sm:text-2xl text-white">
                      {active.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] tracking-widest text-neon">
                      {active.year}
                    </p>
                    <p className="mt-3 font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
                      {active.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous"
                className="fill-hover w-11 h-11 border border-steel flex items-center justify-center text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[10px] tracking-widest text-white/40">
                esc to close
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next"
                className="fill-hover w-11 h-11 border border-steel flex items-center justify-center text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadershipSection;
