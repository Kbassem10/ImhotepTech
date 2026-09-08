import React, { useState, useEffect, useMemo, useCallback } from 'react';
import projects from './data/projects';
import useScrollReveal from './hooks/useScrollReveal';

// Sub-components
import HeaderNavbar from './components/HeaderNavbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import FounderSection from './components/FounderSection';
import SocialCommunitySection from './components/SocialCommunitySection';
import FooterContact from './components/FooterContact';

// Custom icons helper
const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    return 'dark'; // Default to dark mode
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const containerRef = useScrollReveal();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("contact@imhotep-tech.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }, []);

  const handleCopyCommand = useCallback((command, name) => {
    navigator.clipboard.writeText(command);
    setCopiedItem(name);
    setTimeout(() => setCopiedItem(null), 2000);
  }, []);

  // Compute stats dynamically from the actual projects and libraries dataset
  const computedStats = useMemo(() => {
    const totalProjects = projects.length;
    const webAppsCount = projects.filter(p => !p.isLibrary).length;
    const librariesCount = projects.filter(p => p.isLibrary).length;
    const openSourceCount = projects.filter(p =>
      p.buttons && p.buttons.some(b => b.url && b.url.includes('github'))
    ).length;

    return [
      {
        metric: "Projects & Libraries",
        value: `${totalProjects}`,
        icon: "fas fa-cubes",
      },
      {
        metric: "Web Applications",
        value: `${webAppsCount}`,
        icon: "fas fa-laptop-code",
      },
      {
        metric: "Developer Libraries",
        value: `${librariesCount}`,
        icon: "fas fa-terminal",
      },
      {
        metric: "Open-Source Repos",
        value: `${openSourceCount}`,
        icon: "fab fa-github",
      }
    ];
  }, []);

  /* Track mouse position for card hover glow effect */
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-background dark:text-on-background antialiased transition-colors duration-300 selection:bg-primary selection:text-on-primary">
      
      {/* Sticky Header Navigation */}
      <HeaderNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          computedStats={computedStats}
          handleNavClick={handleNavClick}
        />

        {/* Core Services Section */}
        <ServicesSection
          handleMouseMove={handleMouseMove}
        />

        {/* Selected Work & Libraries Section */}
        <ProjectsSection
          handleMouseMove={handleMouseMove}
          handleCopyCommand={handleCopyCommand}
          copiedItem={copiedItem}
        />

        {/* Technology Ecosystem & Stack */}
        <StackSection />

        {/* Leadership & Founder Section */}
        <FounderSection />

        {/* Social & Community Section */}
        <SocialCommunitySection />
      </main>

      {/* Footer & Contact Section */}
      <FooterContact
        copiedEmail={copiedEmail}
        handleCopyEmail={handleCopyEmail}
      />

      {/* Scroll to top floating button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-on-primary shadow-lg gold-glow hover:bg-primary-container active:scale-95 transition-all duration-200"
        >
          <Icon name="fas fa-arrow-up text-sm font-bold" />
        </button>
      )}

    </div>
  );
}

export default App;
