
import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: '1,000+', label: 'Students Taught' },
    { number: '8+', label: 'Org Affiliations' },
    { number: '25+', label: 'Events Led' },
    { number: '19', label: 'AI Projects Shipped' },
    { number: '98%', label: 'Avg Model Accuracy' },
    { number: '2 yrs', label: 'AI Experience' }
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-4">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12">About</h2>
        
        {/* Bio Content */}
        <div className="space-y-6 mb-12 text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg">
            With roots in Saudi Arabia and a degree in Computer Science from IBA (top 5%), I focus on building scalable AI systems that bridge technical depth with real-world application.

          </p>
          
          <p className="text-base md:text-lg">
            Currently, I work as an AI Engineer building GPT powered tools, RAG pipelines, vector search systems, and cloud native ML workflows, with a focus on solving edge cases that demand both technical depth and system level thinking. 
          </p>
          
          <p className="text-base md:text-lg">
            I’ve taught as a Teaching Assistant and community educator at IBA, mentored youth through the National Talent Hunt Program, and led workshops at developer communities like Google GDGoC. I also co-founded Arcanum, an EdTech venture focused on bridging the gap between knowing and doing through industry driven bootcamps.
          </p>
          
          <p className="text-base md:text-lg">
            Outside of work, I’ve captained university sports teams and helped organize initiatives like TEDx and WWF youth drives, while continuing to explore and ship side projects in the AI and product space.
          </p>
        </div>

        {/* Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-black p-4 md:p-6 text-center hover:bg-gray-100 transition-all duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.25)] hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-black text-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-bold text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
