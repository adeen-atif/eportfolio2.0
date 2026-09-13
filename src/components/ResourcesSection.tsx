import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TypeHeading from '@/components/system/TypeHeading';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';

const ResourcesSection = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: 'Real-Time AI Toolkit',
      description:
        'Practical patterns for FinTech founders to ship faster decisions with smaller bills',
      tags: ['AI', 'FinTech', 'Performance'],
      link: '/rt-ai'
    }
  ];

  return (
    <section
      id="resources"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="05" side="right" />

      <div className="relative mx-auto max-w-5xl">
        <TypeHeading text="Resources" tag="h2" />

        <p className="mt-6 font-mono text-sm text-white/55 max-w-xl">
          <span className="text-neon">&lt;p&gt;</span>
          Tools, guides, and practical materials I&apos;ve created for the
          community
          <span className="text-neon">&lt;/p&gt;</span>
        </p>

        <div className="mt-12 border-t border-steel/60">
          {resources.map((resource) => (
            <button
              key={resource.title}
              type="button"
              onClick={() => navigate(resource.link)}
              className="group fill-hover w-full text-left border-b border-steel/60 px-4 sm:px-6 py-7"
            >
              <div className="flex items-center gap-6">
                <span className="flex-1 min-w-0">
                  <span className="display block text-lg sm:text-2xl leading-tight">
                    {resource.title}
                  </span>
                  <span className="block mt-2 font-mono text-xs sm:text-sm text-white/60 group-hover:text-black/70">
                    {resource.description}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-steel group-hover:border-black/40 px-2.5 py-0.5 font-mono text-[10px] tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <ArrowRight className="w-7 h-7 shrink-0" strokeWidth={1.25} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
