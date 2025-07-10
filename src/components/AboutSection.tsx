
import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: '2,000+', label: 'Students Taught' },
    { number: '8+', label: 'Org Affiliations' },
    { number: '25+', label: 'Events Led' },
    { number: '19', label: 'AI Projects Shipped' },
    { number: '98%', label: 'Model Accuracy' },
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
            Born and raised in Saudi Arabia, I graduated in the top 5% from IBA with a Bachelor's in Computer Science. But it’s never just been about the degree, I’ve always gravitated toward work that’s fast-moving, impact-driven, and people-focused.

          </p>
          
          <p className="text-base md:text-lg">
          Currently, I work as an AI Engineer building GPT-powered tools, deploying scalable ML pipelines, and solving tricky edge cases that demand both technical depth and creative thinking. 
          </p>
          
          <p className="text-base md:text-lg">
            Over the last few years, I’ve taught thousands of students as a Teaching Assistant, mentored underserved youth through the National Talent Hunt Program, and led multiple AI and tech workshops.
          </p>
          
          <p className="text-base md:text-lg">
            Outside of work, I stay in motion, whether that’s captaining tertiary badminton team, organizing events like TEDx and WWF drives, running marathons, or building side projects with friends. I like variety, I like velocity, and I like doing work that feels alive.
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
