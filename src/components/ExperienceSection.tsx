import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Ticketwala",
      role: "Head of Product & AI", 
      duration: "Jun 2025 – Present",
      description: [
        "Leading product strategy and AI innovation for ticketing platform",
        "Driving AI-powered features to enhance user experience",
        "Overseeing end-to-end product development and AI integration"
      ],
      tech: ["Product Management", "AI Strategy", "Leadership"],
      logo: "/lovable-uploads/ticketwala-logo.png",
      current: true
    },
    {
      id: 2,
      company: "Confinality",
      role: "AI Engineer", 
      duration: "Oct 2024 – Jun 2025",
      description: [
        "Built honeypot and answering machine classifiers with 98% accuracy",
        "Designed GPT-powered analytics chatbots using LangChain + BigQuery",
        "Deployed scalable ML pipelines via Vertex AI on GCP"
      ],
      tech: ["LangChain", "BigQuery", "Vertex AI", "GCP"],
      logo: "/lovable-uploads/1691082323255.jpeg"
    },
    {
      id: 3,
      company: "Vidizmo (Softech Worldwide)",
      role: "Associate Product Engineer",
      duration: "Jun 2024 – Oct 2024",
      description: [
        "Led document redaction feature using PaddleOCR with 95% accuracy",
        "Automated multimedia redaction pipeline with Aspose + MTCNN"
      ],
      tech: ["PaddleOCR", "Aspose", "MTCNN", "Python"],
      logo: "/lovable-uploads/vidizmo-logo-png_seeklogo-428353.png"
    },
    {
      id: 4,
      company: "Systems Ltd",
      role: "AI/ML Engineering Trainee",
      duration: "Aug 2023 – Jun 2024",
      description: [
        "Built DashFit, an award-winning AR try-on app using MediaPipe + ARCore",
        "Applied OneEuro filter to boost pose tracking accuracy by 25%",
        "Enhanced dynamic fit accuracy for virtual clothing experiences"
      ],
      tech: ["MediaPipe", "ARCore", "Unity", "OneEuro"],
      logo: "/lovable-uploads/systems_limited_logo.jpeg"
    },
    {
      id: 5,
      company: "Pakistan State Oil (PSO)",
      role: "Data Science Intern",
      duration: "Jul 2023 – Aug 2023",
      description: [
        "Analyzed real-time fuel sensor data across 100+ petrol pumps",
        "Built safety gear detection system using OpenCV",
        "Implemented data visualization dashboards for monitoring"
      ],
      tech: ["OpenCV", "Python", "Data Analysis"],
      logo: "/lovable-uploads/pso-logo.png"
    }
  ];

  const handleResumeClick = () => {
    window.open('/Adeen_Atif_Resume.pdf', '_blank');
  };

  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-black">Experience</h2>
          <button
            onClick={handleResumeClick}
            className="bg-black text-white px-3 py-2 text-xs md:text-sm font-bold hover:bg-gray-800 transition-all duration-200 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 flex items-center gap-1 self-start sm:self-auto"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">View Full Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>
        </div>
        
        <div className="relative">
          <div 
            className="flex gap-6 md:gap-8 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="flex-none w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[35%] bg-white border-2 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                style={{ scrollSnapAlign: 'center' }}
              >
                {/* Timeline Connector */}
                <div className="relative">
                  {index < experiences.length - 1 && (
                    <div className="absolute top-8 -right-6 md:-right-8 w-6 md:w-8 h-0.5 bg-gray-300 z-10 hidden sm:block"></div>
                  )}
                  
                  {/* Card Header with Logo */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-black p-4 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 border border-gray-200 shadow-sm flex items-center justify-center">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-black leading-tight">{exp.company}</h3>
                          {exp.current && (
                            <Badge className="bg-green-600 text-white text-xs mt-1 animate-pulse">
                              CURRENT
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-base md:text-lg font-bold text-gray-800">{exp.role}</h4>
                      <Badge className="bg-black text-white font-mono text-xs px-3 py-1">
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 md:p-6 border-t-2 border-black">
                    {/* Scrollable Description with Bullet Points */}
                    <div 
                      className="max-h-24 overflow-y-auto mb-4 scrollbar-hide"
                    >
                      <ul className="text-sm md:text-base leading-relaxed text-gray-700 space-y-1">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-black font-bold mr-2 mt-1 text-xs">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          className="bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 transition-colors font-mono text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {experiences.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
