import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TypeHeading from '@/components/system/TypeHeading';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'TABRIC | AI-POWERED BI & DATA ANALYST',
      desc: 'Extracts tables from PDFs/CSVs, visualizes KPIs with Altair, and generates executive summaries using the Gemini API.',
      tech: ['Python', 'LangChain', 'Gemini API', 'Altair'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      link: 'https://tabricai.com'
    },
    {
      id: 2,
      title: 'DASHFIT | AR HYPER REALISTIC VIRTUAL TRY-ON',
      desc: 'Try clothes in AR — no sensors, just smart tech. Built with Unity and ARCore for seamless virtual fitting experiences.',
      tech: ['Unity', 'ARCore', 'Mediapipe'],
      image: 'https://images.pexels.com/photos/6069550/pexels-photo-6069550.jpeg',
      link: 'https://github.com/adeen-atif/AR_Virtual_TryOn_With_Sensorless_Depth_Perception'
    },
    {
      id: 3,
      title: 'MPI CLUSTER',
      desc: 'Simulated parallel computing in distributed environments. High-performance computing cluster implementation.',
      tech: ['Ubuntu', 'HPC', 'MPI'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      link: 'https://github.com/adeen-atif/MPI-Cluster'
    },
    {
      id: 5,
      title: 'FYPEDIA - FYP RAG CHATBOT',
      desc: 'AI-Powered Final Year Project Search Engine using semantic search. Converts 1000+ FYP records into vectorized index with sentence embeddings and FAISS for intelligent, context-aware project discovery.',
      tech: ['FastAPI', 'FAISS', 'Sentence Transformers', 'Google Generative AI'],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      link: 'https://fypedia.vercel.app/'
    },
    {
      id: 6,
      title: 'AUDIO FINGERPRINTER VIA PATTERN RECOGNITION',
      desc: 'Audio fingerprinting with real-time interface for voice recognition and identification systems.',
      tech: ['Dejavu', 'Flask', 'Waveform Analysis'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
      link: 'https://audiofingerprinter.vercel.app/'
    }
  ];

  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(0);
  const [visible, setVisible] = useState(true);

  // Text swaps instantly; the circular image mask cross-fades.
  useEffect(() => {
    if (index === shown) return;
    setVisible(false);
    const t = setTimeout(() => {
      setShown(index);
      setVisible(true);
    }, 220);
    return () => clearTimeout(t);
  }, [index, shown]);

  const total = projects.length;
  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);
  const project = projects[index];
  const imageProject = projects[shown];

  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="02" side="left" />

      <div className="relative mx-auto max-w-6xl">
        <TypeHeading text="My Portfolio" tag="h2" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-16 items-center">
          {/* Circular image mask */}
          <div className="relative mx-auto w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute -inset-5 rounded-full border border-steel/40" />
            <div className="absolute -inset-5 rounded-full orbit-scroll">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon" />
            </div>
            <div className="absolute -inset-10 rounded-full border border-steel/20 orbit-scroll-reverse">
              <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            <div className="absolute inset-0 rounded-full overflow-hidden border border-steel">
              <img
                src={imageProject.image}
                alt={`${imageProject.title} preview`}
                className={`w-full h-full object-cover grayscale transition-opacity duration-200 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.visibility = 'hidden';
                }}
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-neon bg-ink px-3">
              0{index + 1} / 0{total}
            </span>
          </div>

          {/* Copy */}
          <div>
            <span className="tag block mb-4">&lt;h3&gt;</span>
            <h3 className="display text-xl sm:text-3xl lg:text-4xl text-white leading-tight">
              {project.title}
            </h3>

            <p className="mt-6 font-mono text-sm sm:text-base leading-relaxed text-white/70">
              {project.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-steel px-3 py-1 font-mono text-[11px] tracking-widest text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-mono text-xs sm:text-sm tracking-widest text-white"
              >
                &lt;View project/&gt;
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous project"
                  className="fill-hover w-11 h-11 border border-steel flex items-center justify-center text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next project"
                  className="fill-hover w-11 h-11 border border-steel flex items-center justify-center text-white"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-px w-full bg-steel/50">
              <div
                className="h-px bg-neon transition-all duration-300"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
