import React, { useCallback, useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

interface Entry {
  title: string;
  desc: string;
  year: string;
  logo: string;
  photo: string;
}

const slug = (e: Entry) =>
  `${e.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .split('-')
    .slice(0, 2)
    .join('-')}-${e.year}.jpg`;

const leadership: Entry[] = [
  {
    title: 'NASA Space Apps Challenge Judge',
    desc: 'Mentored and judged teams on various Astronomy + AI use cases',
    year: '2023',
    logo: '/lovable-uploads/nasa-logo.png',
    photo: '/lovable-uploads/nasa-photo.png'
  },
  {
    title: 'Google DSC Lead',
    desc: 'Led 10+ tech events, mentorship circles, and bootcamps.',
    year: '2023',
    logo: '/lovable-uploads/2479db06-db0d-46ab-abd3-9e427161536e.png',
    photo: '/lovable-uploads/c7416d44-ad02-47e6-9511-ebdf1a70445b.png'
  },
  {
    title: 'Co-Founder Arcanum',
    desc: 'Started a booming ed-tech company aiming to aid students and working professionals.',
    year: '2025',
    logo: '/lovable-uploads/Final Final Logo.png',
    photo: '/lovable-uploads/AA.png'
  },
  {
    title: 'TEDx Clifton',
    desc: 'Curated and led speaker storytelling for TEDx talks.',
    year: '2023',
    logo: '/lovable-uploads/9de938c3-30fc-4c53-b837-1bcdc296cd68.png',
    photo:
      '/lovable-uploads/489757877_1072519284895790_2402514148411438511_n.jpg'
  },
  {
    title: 'WWF Pakistan',
    desc: 'Designed youth-focused sustainability workshops.',
    year: '2022',
    logo: '/lovable-uploads/e4ecd225-bc4c-406c-926c-03deb13ed764.png',
    photo: '/lovable-uploads/f47bd6e2-3b8e-427f-a96f-97aefbdac72b.png'
  },
  {
    title: 'WRO Robotics Judge',
    desc: 'Mentored and judged national-level robotics talent.',
    year: '2023',
    logo: '/lovable-uploads/81bcdf6c-9127-4176-9c62-a8c6a6328f22.png',
    photo: '/lovable-uploads/1692709757999.jpeg'
  },
  {
    title: 'Badminton Team Captain',
    desc: "Led IBA's badminton team to multiple victories and championships.",
    year: '2022-24',
    logo: '/lovable-uploads/images (4).png',
    photo: '/lovable-uploads/3ea90759-19d7-4ee3-9bc6-7cea80503e4e.png'
  }
];

/**
 * Where each window sits on the scatter canvas. `drift` is how far it
 * travels as the section crosses the viewport, so the pile rearranges
 * itself while you scroll rather than moving as one block.
 */
const LAYOUT = [
  { left: '0%', top: 0, rot: -3, z: 10, drift: -34 },
  { left: '23%', top: 64, rot: 2, z: 20, drift: 22 },
  { left: '47%', top: 8, rot: -1.5, z: 15, drift: -48 },
  { left: '69%', top: 86, rot: 3, z: 25, drift: 30 },
  { left: '7%', top: 246, rot: 2.5, z: 30, drift: -18 },
  { left: '33%', top: 300, rot: -2, z: 35, drift: 44 },
  { left: '60%', top: 268, rot: 1.5, z: 40, drift: -26 }
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LeadershipSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [open, setOpen] = useState<number | null>(null);
  const openRef = useRef<number | null>(null);
  openRef.current = open;

  // One scroll loop drives every card. Transforms are written straight to
  // the DOM so opening a card is the only thing that re-renders.
  const paint = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = prefersReducedMotion();
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    // -1 entering from below, 0 centred, 1 leaving at the top
    const p = reduced
      ? 0
      : Math.max(
          -1,
          Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / (vh * 0.9))
        );

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const cfg = LAYOUT[i];
      const isOpen = openRef.current === i;
      const y = isOpen ? 0 : cfg.drift * p;
      const rot = isOpen ? 0 : cfg.rot;
      const scale = isOpen ? 1.04 : 1;
      el.style.transform = `translate3d(0, ${y.toFixed(
        1
      )}px, 0) rotate(${rot}deg) scale(${scale})`;
      // stays under the sticky nav (z-50)
      el.style.zIndex = String(isOpen ? 45 : cfg.z);
    });
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [paint]);

  // Re-paint when a card opens or closes.
  useEffect(() => {
    paint();
  }, [open, paint]);

  const card = (item: Entry, i: number, scattered: boolean) => {
    const isOpen = open === i;

    return (
      <Window
        key={item.title}
        as="article"
        filename={slug(item)}
        padded={false}
        shadow={isOpen ? 'lg' : 'md'}
        className={scattered ? 'w-full' : 'w-full'}
      >
        <div className="border-b-2 border-black bg-band-dark">
          <img
            src={item.photo}
            alt={`${item.title} in action`}
            loading="lazy"
            className="mono-img w-full h-36 sm:h-40 object-cover"
          />
        </div>

        <div className="p-4 flex gap-3">
          <span className="shrink-0 w-9 h-9 border-2 border-black bg-white grid place-items-center overflow-hidden">
            <img
              src={item.logo}
              alt=""
              loading="lazy"
              className="mono-img w-5 h-5 object-contain"
            />
          </span>

          <div className="min-w-0">
            <h3 className="display text-base leading-tight">{item.title}</h3>

            <p
              className={`text-sm leading-relaxed text-neutral-700 overflow-hidden ${
                scattered
                  ? `transition-all duration-200 ${
                      isOpen ? 'mt-2 max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`
                  : 'mt-2'
              }`}
            >
              {item.desc}
            </p>
          </div>
        </div>
      </Window>
    );
  };

  return (
    <section
      id="leadership"
      className="bg-white border-b-2 border-black overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">
          Where I&apos;ve led,
          <br className="hidden sm:block" /> learned, and left a mark
        </SectionHeading>

        {/* Scatter canvas: desktop only, where there is room to overlap */}
        <div
          ref={sectionRef}
          className="hidden lg:block relative h-[620px]"
          onMouseLeave={() => setOpen(null)}
        >
          {leadership.map((item, i) => {
            const cfg = LAYOUT[i];
            return (
              <div
                key={item.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{
                  left: cfg.left,
                  top: cfg.top,
                  zIndex: cfg.z,
                  transform: `rotate(${cfg.rot}deg)`,
                  transformOrigin: 'center center',
                  willChange: 'transform'
                }}
                className="absolute w-[300px] xl:w-[330px] transition-[box-shadow] duration-200"
                onMouseEnter={() => setOpen(i)}
                onFocusCapture={() => setOpen(i)}
                onBlurCapture={() => setOpen(null)}
              >
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-label={`${item.title}, ${item.year}`}
                  onClick={() => setOpen((v) => (v === i ? null : i))}
                  className="block w-full text-left focus:outline-none"
                >
                  {card(item, i, true)}
                </button>
              </div>
            );
          })}
        </div>

        {/* Narrow screens: a plain column, everything already open */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadership.map((item, i) => (
            <div key={item.title}>{card(item, i, false)}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
