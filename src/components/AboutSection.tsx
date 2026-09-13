import React from 'react';
import TypeHeading from '@/components/system/TypeHeading';
import DecodeText from '@/components/system/DecodeText';
import CountUp from '@/components/system/CountUp';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';
import Reveal from '@/components/system/Reveal';

const AboutSection = () => {
  const stats = [
    { number: '1,000+', label: 'Students Taught' },
    { number: '8+', label: 'Org Affiliations' },
    { number: '25+', label: 'Events Led' },
    { number: '19', label: 'AI Projects Shipped' },
    { number: '98%', label: 'Avg Model Accuracy' },
    { number: '2 yrs', label: 'AI Experience' }
  ];

  const paragraphs = [
    'With roots in Saudi Arabia and a degree in Computer Science from IBA (top 5%), I focus on building scalable AI systems that bridge technical depth with real-world application.',
    'Currently, I work as an AI Engineer building GPT powered tools, RAG pipelines, vector search systems, and cloud native ML workflows, with a focus on solving edge cases that demand both technical depth and system level thinking.',
    'I’ve taught as a Teaching Assistant and community educator at IBA, mentored youth through the National Talent Hunt Program, and led workshops at developer communities like Google GDGoC. I also co-founded Arcanum, an EdTech venture focused on bridging the gap between knowing and doing through industry driven bootcamps.',
    'Outside of work, I’ve captained university sports teams and helped organize initiatives like TEDx and WWF youth drives, while continuing to explore and ship side projects in the AI and product space.'
  ];

  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="01" side="right" />

      <div className="relative mx-auto max-w-5xl">
        <TypeHeading text="About" tag="h2" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12">
          <div className="hidden lg:block w-px bg-gradient-to-b from-neon via-steel/40 to-transparent" />

          <div className="space-y-6">
            {paragraphs.map((text, i) => (
              <DecodeText
                key={i}
                className="font-mono text-sm sm:text-base leading-relaxed text-white/75"
              >
                {text}
              </DecodeText>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 border-t border-l border-steel/60">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} stagger={60}>
              <div className="fill-hover group border-b border-r border-steel/60 p-6 md:p-8 h-full">
                <CountUp
                  value={stat.number}
                  className="display block text-3xl md:text-4xl text-white group-hover:text-black"
                />
                <div className="mt-2 font-mono text-[11px] sm:text-xs tracking-widest uppercase text-white/55 group-hover:text-black/70">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
