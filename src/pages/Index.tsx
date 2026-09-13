import React from 'react';
import HeroSection from '@/components/HeroSection';
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
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteNav />

      <HeroSection />
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
