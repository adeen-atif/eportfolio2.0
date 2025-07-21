
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black font-mono">
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-black p-3 md:p-4">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 gap-y-2">
            {['About', 'Projects', 'Experience', 'Leadership', 'Tools'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
              >
                {item}
              </button>
            ))}
            <Link
              to="/blog"
              className="text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with macOS Window */}
      <HeroSection />

      {/* Quick Links */}
      <QuickLinksSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">© 2024 Adeen Atif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
