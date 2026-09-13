import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

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
    <section
      id="about"
      className="halftone border-t-2 border-b-2 border-black"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading>About</SectionHeading>

        <Window filename="about-adeen.txt" shadow="lg">
          <div className="space-y-5 text-[15px] sm:text-base leading-relaxed">
            <p>
              With roots in Saudi Arabia and a degree in Computer Science from
              IBA (top 5%), I focus on building scalable AI systems that bridge
              technical depth with real-world application.
            </p>

            <p>
              Currently, I work as an AI Engineer building GPT powered tools, RAG
              pipelines, vector search systems, and cloud native ML workflows,
              with a focus on solving edge cases that demand both technical depth
              and system level thinking.
            </p>

            <p>
              I’ve taught as a Teaching Assistant and community educator at IBA,
              mentored youth through the National Talent Hunt Program, and led
              workshops at developer communities like Google GDGoC. I also
              co-founded Arcanum, an EdTech venture focused on bridging the gap
              between knowing and doing through industry driven bootcamps.
            </p>

            <p>
              Outside of work, I’ve captained university sports teams and helped
              organize initiatives like TEDx and WWF youth drives, while
              continuing to explore and ship side projects in the AI and product
              space.
            </p>
          </div>
        </Window>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 border-t-2 border-l-2 border-black hard-lg bg-white">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r-2 border-b-2 border-black p-5 sm:p-6 text-center hover:bg-black hover:text-white transition-colors duration-150"
            >
              <div className="display text-2xl sm:text-3xl">{stat.number}</div>
              <div className="mt-1 chrome">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
