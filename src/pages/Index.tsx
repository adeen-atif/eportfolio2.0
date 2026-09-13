import React from 'react';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import ResourcesSection from '@/components/ResourcesSection';
import ContactSection from '@/components/ContactSection';
import SiteNav from '@/components/system/SiteNav';
import SiteFooter from '@/components/system/SiteFooter';
import GlitchIntro from '@/components/system/GlitchIntro';
import ConnectorLine from '@/components/system/ConnectorLine';
import VelocityDriver from '@/components/system/VelocityDriver';
import ProgressBar from '@/components/system/ProgressBar';
import SectionNav from '@/components/system/SectionNav';
import useActiveSection from '@/components/system/useActiveSection';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' }
];

const ROUTES = [{ label: 'Blog', to: '/blog' }];

const Index = () => {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ink text-white font-mono overflow-x-hidden">
      <GlitchIntro />
      <VelocityDriver />
      <ProgressBar />
      <SectionNav sections={SECTIONS} activeId={activeId} routes={ROUTES} />

      <SiteNav activeId={activeId} />

      <HeroSection />
      <QuickLinksSection scrollToSection={scrollToSection} />

      <ConnectorLine variant="kink-right" height={120} />
      <AboutSection />

      <ConnectorLine variant="kink-left" height={120} />
      <ProjectsSection />

      <ConnectorLine variant="straight" height={110} />
      <ExperienceSection />

      <ConnectorLine variant="kink-right" height={120} />
      <LeadershipSection />

      <ConnectorLine variant="kink-left" height={110} />
      <ResourcesSection />

      <ConnectorLine variant="branch" height={140} />
      <ContactSection />

      <SiteFooter />
    </div>
  );
};

export default Index;
