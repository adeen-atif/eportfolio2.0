import React, { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import OrbitalButton from '@/components/system/OrbitalButton';
import { TagMarker } from '@/components/system/SyntaxTag';

const HeroSection = () => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ['AI Engineer', 'Ed Tech Founder', 'Badmintonist', 'Cyclist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const windowStates = [
    {
      filename: 'Adeen.png',
      image: '/lovable-uploads/56516795-45b4-42d5-bd70-cd85a5054fd6.png',
      url: 'https://www.adeenatif.com'
    },
    {
      filename: 'AIEngineer.png',
      image: '/lovable-uploads/9cab72cb-c1cb-46c8-a2c8-922335e42fdd.png',
      url: 'https://www.adeenatif.com'
    },
    {
      filename: 'StartupFounder.png',
      image: '/lovable-uploads/185e2400-c697-410a-99ad-5e76b5c71965.png',
      url: 'https://thearcanumacademy.com'
    },
    {
      filename: 'GoogleDSCLead.png',
      image: '/lovable-uploads/a647577a-89cd-4b0b-b540-deb8be57fefb.png',
      url: 'https://www.instagram.com/p/CyDnbIaoMA2/'
    },
    {
      filename: 'BadmintonCaptain.png',
      image: '/lovable-uploads/fe57845d-d390-4dff-b90f-63e7caeeb6d8.png',
      url: 'https://www.facebook.com/IBASPACE/posts/pfbid032GspW4kAARWhxZJ4cvwaXc95Qu9Zy659fDWJgK4YdQoXRASYeD1snEZ8zEtkGB2al'
    },
    {
      filename: 'MarathonRunner.png',
      image: '/lovable-uploads/14dcadd0-e1ec-4ae0-98ea-3a0eb600efcb.png',
      url: 'https://www.linkedin.com/posts/adeen-atif_ran-a-5k-at-the-exact-same-time-as-250000-activity-7351913658362294273--FjW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKh8mQBpH955rMTC_IlmL1WPoUihyDrQ08'
    },
    {
      filename: 'CatLover.png',
      image: '/lovable-uploads/b32baa7e-3c31-4134-8765-90101b850a75.png',
      url: 'https://www.adeenatif.com'
    },
    {
      filename: 'Cyclist.png',
      image: '/lovable-uploads/Cyclist.png',
      url: 'https://www.adeenatif.com'
    }
  ];

  const cycle = () =>
    setCurrentWindow((prev) => (prev + 1) % windowStates.length);

  const openCurrent = () =>
    window.open(windowStates[currentWindow].url, '_blank', 'noopener');

  const scrollToNextSection = () =>
    document.getElementById('quick-links')?.scrollIntoView({ behavior: 'smooth' });

  const current = windowStates[currentWindow];

  return (
    <section id="home" className="relative px-5 sm:px-8 lg:px-12 pt-10 pb-20">
      <div className="absolute inset-0 grid-backdrop opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 lg:gap-10 items-center min-h-[68vh]">
        {/* Left: typography on a neon spine */}
        <div className="relative pl-6 sm:pl-8 border-l border-neon">
          <span className="absolute -left-[4.5px] top-[46%] w-2 h-2 rounded-full bg-neon" />

          <div className="mb-6 font-mono text-sm text-white/70">
            <span className="text-neon">&lt;p&gt;</span>This is
            <span className="text-neon">&lt;/p&gt;</span>
          </div>

          <div className="relative mb-8">
            <TagMarker tag="h1" className="block mb-2" />
            <h1 className="velocity-head display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
              Hello.
              <br />
              I&apos;m Adeen.
            </h1>
            <TagMarker tag="h1" closing className="block mt-2" />
          </div>

          <div className="h-8 mb-10 font-mono text-base sm:text-lg">
            <span className="text-neon">&lt;p&gt;</span>
            <span key={currentRoleIndex} className="text-white">
              {roles[currentRoleIndex]}
            </span>
            <span className="text-neon">&lt;/p&gt;</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={scrollToNextSection}
              className="nav-link font-mono text-xs sm:text-sm tracking-widest text-white"
            >
              &lt;Tap into My World/&gt;
            </button>

            <OrbitalButton
              label="Download CV"
              size="md"
              href="/Adeen_Atif_Resume.pdf"
            />
          </div>
        </div>

        {/* Right: circular portrait mask inside an orbital track */}
        <div className="relative flex flex-col items-center justify-center mx-auto">
          <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full border border-steel" />
            <div className="absolute -inset-6 rounded-full border border-steel/30" />

            <div className="absolute -inset-6 rounded-full orbit-scroll">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon" />
            </div>
            <div className="absolute inset-0 rounded-full orbit-scroll-reverse">
              <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-white" />
            </div>

            <button
              type="button"
              onClick={cycle}
              aria-label={`${current.filename}. Click to show the next facet.`}
              className="absolute inset-[8%] rounded-full overflow-hidden border border-steel/70 hover:border-neon focus:outline-none focus-visible:border-neon"
            >
              <img
                src={current.image}
                alt={current.filename}
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-widest">
            <span className="text-neon">//</span>
            <span className="text-white/70">{current.filename}</span>
            <button
              type="button"
              onClick={openCurrent}
              className="nav-link text-white/70 hover:text-white"
              aria-label={`Open the link behind ${current.filename}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-3 flex gap-1.5">
            {windowStates.map((w, i) => (
              <button
                key={w.filename}
                type="button"
                aria-label={w.filename}
                onClick={() => setCurrentWindow(i)}
                className={`h-[3px] w-5 ${
                  i === currentWindow ? 'bg-neon' : 'bg-steel'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 flex justify-center">
        <button
          type="button"
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-steel hover:text-neon"
          aria-label="Scroll to the next section"
        >
          <span className="tag">&lt;/&gt;</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
