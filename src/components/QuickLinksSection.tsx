import React from 'react';
import LinkTile from '@/components/retro/LinkTile';

interface QuickLinksSectionProps {
  scrollToSection: (id: string) => void;
}

const QuickLinksSection = ({ scrollToSection }: QuickLinksSectionProps) => {
  const items = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Leadership', id: 'leadership' },
    { name: 'Contact', id: 'find-me' }
  ];

  return (
    <section id="quick-links" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        <h2 className="display text-xl sm:text-2xl mb-4">Quick links</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 border-t-2 border-l-2 border-black hard">
          {items.map((item) => (
            <LinkTile
              key={item.name}
              label={item.name}
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
