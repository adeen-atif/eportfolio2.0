
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface QuickLinksSectionProps {
  scrollToSection: (id: string) => void;
}

const QuickLinksSection = ({ scrollToSection }: QuickLinksSectionProps) => {
  return (
    <section id="quick-links" className="py-12 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto relative z-10">
        <h2 className="text-xl md:text-2xl font-black mb-6">Quick links</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.3)] bg-white">
          {[
            { name: 'About', id: 'about' },
            { name: 'Projects', id: 'projects' },
            { name: 'Experience', id: 'experience' },
            { name: 'Leadership', id: 'leadership' },
            { name: 'Tools', id: 'tools' }
          ].map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`
                bg-gray-100 hover:bg-gray-200 p-3 md:p-4 text-left font-bold transition-all duration-200 h-14 md:h-16
                ${index % 2 !== 1 && index !== 4 ? 'border-r-2 border-black' : ''}
                ${index < 3 ? 'border-b-2 border-black md:border-b-0' : ''}
                ${index !== 4 && index >= 3 ? '' : index < 3 ? 'md:border-r-2 md:border-black' : ''}
                flex items-center justify-between group
                shadow-[inset_1px_1px_0px_rgba(255,255,255,0.8),inset_-1px_-1px_0px_rgba(0,0,0,0.2)]
                hover:shadow-[inset_2px_2px_0px_rgba(255,255,255,0.9),inset_-2px_-2px_0px_rgba(0,0,0,0.3)]
                hover:-translate-y-0.5
                border-2 border-transparent hover:border-black
              `}
            >
              <span className="text-xs md:text-sm">{item.name}</span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
