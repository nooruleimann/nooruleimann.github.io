/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { WorkstationModal } from './components/WorkstationModal';
import { PortfolioProject } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [workstationModalOpen, setWorkstationModalOpen] = useState<boolean>(false);
  const [targetContactService, setTargetContactService] = useState<string>('');

  // Scroll to section handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // When a service card mission is requested
  const handleSelectService = (serviceTitle: string) => {
    setTargetContactService(serviceTitle);
    handleNavigate('contact');
  };

  // When a user requests a similar project from inside the ProjectModal
  const handleRequestSimilarProject = (projectTitle: string) => {
    setTargetContactService(`Similar to: ${projectTitle}`);
    handleNavigate('contact');
  };

  // IntersectionObserver to update active navbar state during scrolling
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'process', 'contact'];
    const handleScrollObserver = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#06040a] text-[#e2d9f3] relative font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Background Interactive Ambient Canvas */}
      <CyberBackground />

      {/* Main Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreWork={() => handleNavigate('portfolio')}
          onConnect={() => handleNavigate('contact')}
          onOpenWorkstationModal={() => setWorkstationModalOpen(true)}
        />

        <AboutSection />

        <SkillsSection />

        <ServicesSection onSelectService={handleSelectService} />

        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        <ProcessSection />

        <ContactSection initialService={targetContactService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fullscreen Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* Workstation Rig Inspection Modal */}
      <WorkstationModal
        isOpen={workstationModalOpen}
        onClose={() => setWorkstationModalOpen(false)}
      />
    </div>
  );
}
