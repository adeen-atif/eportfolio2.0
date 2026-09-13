import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface QuickLinksSectionProps {
  scrollToSection: (id: string) => void;
}

const QuickLinksSection = ({ scrollToSection }: QuickLinksSectionProps) => {
  const items = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Leadership', id: 'leadership' },
    { name: 'Resources', id: 'resources' }
  ];

  return (
    <section id="quick-links" className="px-5 sm:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="tag mb-5">&lt;nav&gt; Quick links &lt;/nav&gt;</p>

        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-steel/60">
          {items.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="fill-hover group border-b border-r border-steel/60 px-4 py-5 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm tracking-widest text-white"
            >
              <span>{item.name}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
