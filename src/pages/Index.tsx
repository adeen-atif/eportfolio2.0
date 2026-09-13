import React from 'react';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import ResourcesSection from '@/components/ResourcesSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import ContactSection from '@/components/ContactSection';
import SiteNav from '@/components/retro/SiteNav';
import SiteFooter from '@/components/retro/SiteFooter';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteNav />

      <HeroSection />
      <QuickLinksSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <ResourcesSection />
      <BlogPreviewSection />
      <ContactSection />

      <SiteFooter />
    </div>
  );
};

export default Index;
