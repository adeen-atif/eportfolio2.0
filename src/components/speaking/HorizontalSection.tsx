import { ReactNode } from "react";

interface HorizontalSectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const HorizontalSection = ({ title, subtitle, children }: HorizontalSectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground lg:text-right max-w-md">
          {subtitle}
        </p>
      </div>
      
      <div 
        className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default HorizontalSection;
