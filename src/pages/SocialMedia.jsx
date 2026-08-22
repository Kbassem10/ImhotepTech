import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialCard from '../components/SocialCard';
import { socialPlatforms, socialContent } from '../data/socialMedia';

const SocialMedia = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="w-full">
      <Navbar currentPage="social-media" />

      {/* Page header */}
      <section className="relative border-b border-line/70 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-accent/[0.08] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="eyebrow">Connect</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tightest text-ink">
              {socialContent.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-muted leading-relaxed">
              {socialContent.hero.subtitle} Follow along for project updates,
              open source releases and occasional behind‑the‑scenes from the
              studio.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-b border-line/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="eyebrow">Channels</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink">
                {socialContent.sections.platforms.title}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              {socialContent.sections.platforms.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialPlatforms.map((platform, index) => (
              <SocialCard
                key={platform.name}
                platform={platform}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

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
  );
};

export default SocialMedia;
