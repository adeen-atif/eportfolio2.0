import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

const ResourcesSection = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: 'Real-Time AI Toolkit',
      description:
        'Practical patterns for FinTech founders to ship faster decisions with smaller bills',
      tags: ['AI', 'FinTech', 'Performance'],
      link: '/rt-ai',
      filename: 'realtime-ai-toolkit.pdf'
    }
  ];

  return (
    <section id="resources" className="halftone border-b-2 border-black">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">Resources</SectionHeading>

        <p className="-mt-4 mb-8 text-base max-w-xl text-neutral-700">
          Tools, guides, and practical materials I&apos;ve created for the
          community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Window
              key={resource.title}
              as="article"
              filename={resource.filename}
              shadow="md"
              interactive
            >
              <h3 className="display text-2xl">{resource.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {resource.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chrome border-2 border-black px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate(resource.link)}
                className="btn-retro mt-5 text-sm"
              >
                View resource
              </button>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
