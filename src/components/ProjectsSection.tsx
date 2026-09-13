import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Tabric',
      subtitle: 'AI-powered BI & data analyst',
      desc: 'Extracts tables from PDFs/CSVs, visualizes KPIs with Altair, and generates executive summaries using the Gemini API.',
      tech: ['Python', 'LangChain', 'Gemini API', 'Altair'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      link: 'https://tabricai.com'
    },
    {
      id: 2,
      title: 'DashFit',
      subtitle: 'AR hyper realistic virtual try-on',
      desc: 'Try clothes in AR with no sensors, just smart tech. Built with Unity and ARCore for seamless virtual fitting experiences.',
      tech: ['Unity', 'ARCore', 'Mediapipe'],
      image: 'https://images.pexels.com/photos/6069550/pexels-photo-6069550.jpeg',
      link: 'https://github.com/adeen-atif/AR_Virtual_TryOn_With_Sensorless_Depth_Perception'
    },
    {
      id: 3,
      title: 'MPI Cluster',
      subtitle: 'Distributed parallel computing',
      desc: 'Simulated parallel computing in distributed environments. High-performance computing cluster implementation.',
      tech: ['Ubuntu', 'HPC', 'MPI'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      link: 'https://github.com/adeen-atif/MPI-Cluster'
    },
    {
      id: 5,
      title: 'Fypedia',
      subtitle: 'FYP RAG chatbot',
      desc: 'AI-powered final year project search engine using semantic search. Converts 1000+ FYP records into a vectorized index with sentence embeddings and FAISS for context-aware project discovery.',
      tech: ['FastAPI', 'FAISS', 'Sentence Transformers', 'Google Generative AI'],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      link: 'https://fypedia.vercel.app/'
    },
    {
      id: 6,
      title: 'Audio Fingerprinter',
      subtitle: 'Pattern recognition',
      desc: 'Audio fingerprinting with a real-time interface for voice recognition and identification systems.',
      tech: ['Dejavu', 'Flask', 'Waveform Analysis'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      link: 'https://audiofingerprinter.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="bg-white border-b-2 border-black">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
          {projects.map((project, index) => (
            <Window
              key={project.id}
              as="article"
              filename={`2024-01-${String(index + 1).padStart(2, '0')}-project.html`}
              padded={false}
              shadow="md"
              interactive
              className="flex flex-col"
            >
              <div className="border-b-2 border-black bg-band-dark">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="mono-img w-full h-44 sm:h-52 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.visibility = 'hidden';
                  }}
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="display text-2xl">{project.title}</h3>
                <p className="chrome mt-1">{project.subtitle}</p>

                <p className="mt-3 text-sm leading-relaxed text-neutral-700 flex-1">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="chrome border-2 border-black px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
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
