import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

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

  return (
    <section id="experience" className="halftone border-b-2 border-black">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">Experience</SectionHeading>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Window
              key={exp.id}
              as="article"
              filename={`${exp.company
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '')}.log`}
              shadow="md"
              interactive
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 border-2 border-black bg-white grid place-items-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="mono-img w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="display text-xl sm:text-2xl">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="chrome border-2 border-black bg-black text-white px-2 py-0.5">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="mt-1 font-semibold text-sm sm:text-base">
                    {exp.role}
                  </p>
                  <p className="chrome mt-1">{exp.duration}</p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-neutral-700"
                      >
                        <span aria-hidden="true" className="font-bold">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="chrome border-2 border-black px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
