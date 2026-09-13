import React, { useRef } from 'react';
import TypeHeading from '@/components/system/TypeHeading';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';
import { useScrollSubscribe } from '@/components/system/useScroll';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 2,
      company: 'Ticketwala',
      role: 'Head of Product & AI',
      duration: 'Sep 2025 – Present',
      description: [
        'Leading product strategy and AI innovation for ticketing platform',
        'Driving AI-powered features to enhance user experience',
        'Overseeing end-to-end product development and AI integration'
      ],
      tech: ['Product Management', 'AI Strategy', 'Leadership'],
      logo: '/lovable-uploads/ticketwala-logo.png',
      current: true
    },
    {
      id: 4,
      company: 'Confinality',
      role: 'AI Engineer',
      duration: 'Oct 2024 – Jun 2025',
      description: [
        'Built honeypot and answering machine classifiers with 98% accuracy',
        'Designed GPT-powered analytics chatbots using LangChain + BigQuery',
        'Deployed scalable ML pipelines via Vertex AI on GCP'
      ],
      tech: ['LangChain', 'BigQuery', 'Vertex AI', 'GCP'],
      logo: '/lovable-uploads/1691082323255.jpeg'
    },
    {
      id: 5,
      company: 'Vidizmo (Softech Worldwide)',
      role: 'Associate Product Engineer',
      duration: 'Jun 2024 – Oct 2024',
      description: [
        'Led document redaction feature using PaddleOCR with 95% accuracy',
        'Automated multimedia redaction pipeline with Aspose + MTCNN'
      ],
      tech: ['PaddleOCR', 'Aspose', 'MTCNN', 'Python'],
      logo: '/lovable-uploads/vidizmo-logo-png_seeklogo-428353.png'
    },
    {
      id: 6,
      company: 'Systems Ltd',
      role: 'AI/ML Engineering Trainee',
      duration: 'Aug 2023 – Jun 2024',
      description: [
        'Built DashFit, an award-winning AR try-on app using MediaPipe + ARCore',
        'Applied OneEuro filter to boost pose tracking accuracy by 25%',
        'Enhanced dynamic fit accuracy for virtual clothing experiences'
      ],
      tech: ['MediaPipe', 'ARCore', 'Unity', 'OneEuro'],
      logo: '/lovable-uploads/systems_limited_logo.jpeg'
    },
    {
      id: 7,
      company: 'Pakistan State Oil (PSO)',
      role: 'Data Science Intern',
      duration: 'Jul 2023 – Aug 2023',
      description: [
        'Analyzed real-time fuel sensor data across 100+ petrol pumps',
        'Built safety gear detection system using OpenCV',
        'Implemented data visualization dashboards for monitoring'
      ],
      tech: ['OpenCV', 'Python', 'Data Analysis'],
      logo: '/lovable-uploads/pso-logo.png'
    }
  ];

  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const activeRef = useRef(-1);

  // The spine fills as the list scrolls past and the nearest entry lights up.
  useScrollSubscribe(() => {
    const line = window.innerHeight * 0.45;
    let best = -1;
    let bestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + 40 - line);
      if (rect.top < line + 200 && dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    if (best !== activeRef.current) {
      itemRefs.current.forEach((el, i) => {
        if (el) el.classList.toggle('is-active', i === best);
      });
      activeRef.current = best;
    }

    const first = itemRefs.current[0];
    const last = itemRefs.current[itemRefs.current.length - 1];
    if (fillRef.current && first && last) {
      const top = first.getBoundingClientRect().top;
      const bottom = last.getBoundingClientRect().bottom;
      const span = Math.max(1, bottom - top);
      const filled = Math.min(1, Math.max(0, (line - top) / span));
      fillRef.current.style.transform = `scaleY(${filled.toFixed(4)})`;
    }
  });

  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="03" side="left" />

      <div className="relative mx-auto max-w-5xl">
        <TypeHeading text="Experience" tag="h2" />

        <ol className="mt-14 relative">
          {/* spine, with a neon fill that tracks the reading line */}
          <span className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-steel/40">
            <span
              ref={fillRef}
              className="absolute inset-x-0 top-0 h-full bg-neon origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </span>

          {experiences.map((exp, i) => (
            <li
              key={exp.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="spine-entry relative pl-14 sm:pl-20 pb-12 last:pb-0"
            >
              <span className="spine-dot absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full border bg-ink flex items-center justify-center overflow-hidden">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  loading="lazy"
                />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="display text-lg sm:text-2xl text-white">
                  {exp.company}
                </h3>
                {exp.current && (
                  <span className="font-mono text-[10px] tracking-widest uppercase bg-neon text-black px-2 py-0.5">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-2 font-mono text-sm text-white/70">
                {exp.role}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-widest text-neon">
                {exp.duration}
              </p>

              <ul className="mt-4 space-y-1.5">
                {exp.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-mono text-xs sm:text-sm leading-relaxed text-white/60 flex gap-3"
                  >
                    <span className="text-neon shrink-0">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-steel/70 px-2.5 py-1 font-mono text-[10px] tracking-widest text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <a
            href="/Adeen_Atif_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link font-mono text-xs tracking-widest text-white"
          >
            &lt;View full resume/&gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
