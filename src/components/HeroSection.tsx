import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Window from '@/components/retro/Window';

const HeroSection = () => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ['AI Engineer', 'Ed Tech Founder', 'Badmintonist', 'Cyclist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
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

  const current = windowStates[currentWindow];

  const cycle = () =>
    setCurrentWindow((prev) => (prev + 1) % windowStates.length);

  const scrollToNextSection = () =>
    document.getElementById('quick-links')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.getElementById('find-me')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="bg-white border-b-2 border-black">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <h1 className="display text-5xl sm:text-6xl lg:text-7xl">
              Hello.
              <br />
              I&apos;m Adeen.
            </h1>

            <p className="mt-6 text-base sm:text-lg max-w-md">
              I&apos;m an{' '}
              <span
                key={currentRoleIndex}
                className="font-bold underline decoration-2 underline-offset-4"
              >
                {roles[currentRoleIndex]}
              </span>{' '}
              building AI systems that hold up outside the demo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-retro"
              >
                Tap into my world
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="btn-retro"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Portrait window: click cycles the facets, the title bar names it */}
          <div className="justify-self-center lg:justify-self-end w-full max-w-md">
            <Window filename={current.filename} padded={false} shadow="lg">
              <button
                type="button"
                onClick={cycle}
                aria-label={`${current.filename}. Click to show the next one.`}
                className="block w-full"
              >
                <img
                  src={current.image}
                  alt={current.filename}
                  className="mono-img w-full h-64 sm:h-80 object-cover"
                />
              </button>

              <div className="flex items-center justify-between gap-3 border-t-2 border-black px-3 py-2">
                <span className="chrome shrink-0">
                  {currentWindow + 1}/{windowStates.length}
                </span>

                <span className="flex gap-1">
                  {windowStates.map((w, i) => (
                    <button
                      key={w.filename}
                      type="button"
                      aria-label={w.filename}
                      onClick={() => setCurrentWindow(i)}
                      className={`w-4 h-2 border-2 border-black ${
                        i === currentWindow ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  ))}
                </span>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome inline-flex items-center gap-1 link-ul px-1 shrink-0"
                >
                  open
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Window>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={scrollToNextSection}
            aria-label="Scroll to the next section"
            className="w-10 h-10 border-2 border-black bg-white hard grid place-items-center hover:bg-black hover:text-white transition-colors"
          >
            <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
