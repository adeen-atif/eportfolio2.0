import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

/**
 * The page container is px-5 below sm and px-8 above, centred at max-w-6xl.
 * --pad carries that responsive padding (set by the classes on the row) and
 * the calc adds the centring offset, so the first card lines up with the
 * heading at every width.
 */
const GUTTER = 'calc(var(--pad) + max(0px, (100vw - 72rem) / 2))';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Tabric',
      desc: 'AI-powered BI and data analyst. Extracts tables from PDFs and CSVs, visualizes KPIs with Altair, and generates executive summaries using the Gemini API.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=500&fit=crop',
      link: 'https://tabricai.com'
    },
    {
      id: 2,
      title: 'DashFit',
      desc: 'AR hyper realistic virtual try-on. Try clothes in AR with no sensors, just smart tech. Built with Unity and ARCore for seamless virtual fitting experiences.',
      image: 'https://images.pexels.com/photos/6069550/pexels-photo-6069550.jpeg',
      link: 'https://github.com/adeen-atif/AR_Virtual_TryOn_With_Sensorless_Depth_Perception'
    },
    {
      id: 3,
      title: 'MPI Cluster',
      desc: 'Simulated parallel computing in distributed environments. A high-performance computing cluster implementation built on Ubuntu.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=500&fit=crop',
      link: 'https://github.com/adeen-atif/MPI-Cluster'
    },
    {
      id: 5,
      title: 'Fypedia',
      desc: 'AI-powered final year project search engine using semantic search. Converts 1000+ FYP records into a vectorized index with sentence embeddings and FAISS for intelligent, context-aware project discovery.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&h=500&fit=crop',
      link: 'https://fypedia.vercel.app/'
    },
    {
      id: 6,
      title: 'Audio Fingerprinter',
      desc: 'Audio fingerprinting via pattern recognition, with a real-time interface for voice recognition and identification systems.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&h=500&fit=crop',
      link: 'https://audiofingerprinter.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="halftone border-b-2 border-black">
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading>Projects</SectionHeading>
        </div>

        {/*
          The row runs past the right edge of the container so the next card
          is always half-visible, the way the reference does it. Scrolls
          horizontally with snap points.
        */}
        <div
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 [--pad:1.25rem] sm:[--pad:2rem]"
          style={{
            scrollSnapType: 'x mandatory',
            /* line the first card up with the heading, and snap to that
               same line rather than to the raw scroll-port edge */
            paddingLeft: GUTTER,
            paddingRight: GUTTER,
            scrollPaddingLeft: GUTTER
          }}
        >
          {projects.map((project, index) => (
            <Window
              key={project.id}
              as="article"
              filename={`2024-01-${String(index + 1).padStart(
                2,
                '0'
              )}-project.html`}
              padded={false}
              shadow="lg"
              className="shrink-0 w-[86vw] sm:w-[34rem] max-w-[34rem] flex flex-col"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="border-b-2 border-black bg-band-dark">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="mono-img w-full h-40 sm:h-44 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.visibility = 'hidden';
                  }}
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="display text-2xl sm:text-[28px]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-700 flex-1">
                  {project.desc}
                </p>

                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-retro text-sm"
                  >
                    View project
                  </a>
                </div>
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
