
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    { 
      id: 1,
      title: "TABLESAGE", 
      desc: "AI-Powered Dashboard & KPI Insight Generator. Extracts tables from PDFs/CSVs, visualizes KPIs with Altair, and generates executive summaries using the Gemini API.", 
      tech: ["Python", "LangChain", "Gemini API", "Altair"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      link: "https://github.com/adeen-atif/tablesage"
    },
    { 
      id: 2,
      title: "DASHFIT AR TRY-ON", 
      desc: "Try clothes in AR — no sensors, just smart tech. Built with Unity and ARCore for seamless virtual fitting experiences.", 
      tech: ["Unity", "ARCore", "Mediapipe"],
      image: "https://images.pexels.com/photos/6069550/pexels-photo-6069550.jpeg",
      link: "https://github.com/adeen-atif/AR_Virtual_TryOn_With_Sensorless_Depth_Perception"
    },
    { 
      id: 3,
      title: "MPI CLUSTER", 
      desc: "Simulated parallel computing in distributed environments. High-performance computing cluster implementation.", 
      tech: ["Ubuntu", "HPC", "MPI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
      link: "https://github.com/adeen-atif/MPI-Cluster"
    },
    { 
      id: 4,
      title: "RAG CHATBOT", 
      desc: "Knowledge-grounded Q&A bot using RAG architecture for intelligent document retrieval and conversation.", 
      tech: ["LangChain", "Pinecone", "Streamlit"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      link: "https://github.com/adeen-atif/ragchatbot"
    },
    { 
      id: 5,
      title: "FYPEDIA", 
      desc: "AI-Powered Final Year Project Search Engine using semantic search. Converts 1000+ FYP records into vectorized index with sentence embeddings and FAISS for intelligent, context-aware project discovery.", 
      tech: ["FastAPI", "FAISS", "Sentence Transformers", "Google Generative AI"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      link: "https://github.com/adeen-atif/fypedia"
    },
    { 
      id: 6,
      title: "VOICE ID SYSTEM", 
      desc: "Audio fingerprinting with real-time interface for voice recognition and identification systems.", 
      tech: ["Dejavu", "Flask", "Waveform Analysis"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      link: "https://github.com/adeen-atif/audiofingerprinter"
    }
  ];

  const handleViewProject = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 bg-neutral-100">      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12">Projects</h2>
        
        {/* Horizontal Scrolling Container - Mobile Optimized */}
        <div className="relative">
          <div 
            className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-[90%] md:w-[75%] max-w-lg md:max-w-2xl bg-white border-2 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'center' }}
              >
                {/* Browser Header */}
                <div className="bg-gray-200 border-b-2 border-black p-2 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-xs font-mono">
                    2024-01-{(index + 1).toString().padStart(2, '0')}-project.html
                  </div>
                </div>
                
                {/* Project Image - Grayscale */}
                <div className="h-48 md:h-64 relative overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop";
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 border-t-2 border-black">
                  <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mb-4 line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-black text-white font-mono text-xs px-2 py-1 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleViewProject(project.link)}
                    className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold text-sm px-4 py-2 shadow-[2px_2px_0px_rgba(0,0,0,0.25)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    View project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
