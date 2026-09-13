import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';
import WorldMap from '@/components/retro/WorldMap';

const AboutSection = () => {

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

        <div className="mt-10">
          <h3 className="display text-xl sm:text-2xl">Where the work has landed</h3>
          <p className="chrome mt-1 mb-5">
            Hover a number to see the countries behind it
          </p>
          <WorldMap />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
