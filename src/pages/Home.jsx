import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Product development',
    body: 'Web apps, SaaS, MVPs — idea to launch.',
  },
  {
    icon: 'fas fa-gears',
    title: 'Business automation',
    body: 'Dashboards and workflows that save hours.',
  },
  {
    icon: 'fas fa-plug',
    title: 'APIs & integrations',
    body: 'Connect systems. Move data. Stay fast.',
  },
  {
    icon: 'fas fa-arrows-rotate',
    title: 'Maintenance & support',
    body: 'Keep things stable, secure, and running.',
  },
];

const ServicesStrip = () => {
  const revealRef = useScrollReveal();

  /* Track mouse position for the glow effect */
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section ref={revealRef} className="relative border-b border-line/70 bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div data-reveal="up" className="mb-8">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink">
            End-to-end engineering.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              data-reveal="up"
              data-reveal-delay={i + 1}
              onMouseMove={handleMouseMove}
              className="group rounded-xl border border-line bg-surface/60 p-5 hover-lift hover-glow hover:border-secondary/40"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <i className={s.icon} />
              </div>
              <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <SEOHelmet
        title="Imhotep Tech - Custom Software Development & Web Applications | Egypt"
        description="Independent software studio based in Egypt. We design and build dependable web apps, business automation and APIs end-to-end."
        keywords="custom software development, web application development, Egypt software company, Django, React, Python, business automation, Imhotep Tech"
        canonical="https://imhotep-tech.com/"
      />

      <div className="relative w-full">
        <Navbar currentPage="home" />
        <main>
          <Hero />
          <ServicesStrip />
          <AboutSection />
          <ProjectsSection />
          <CTASection />
        </main>
        <Footer />

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary shadow-soft hover:bg-secondary/90 transition-colors"
          >
            <i className="fas fa-arrow-up" />
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
