import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibraryCard from '../components/LibraryCard';
import { libraries, integrationSteps } from '../data/libraries';

const Libraries = () => {
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
      <Navbar currentPage="libraries" />

      {/* Page header */}
      <section className="relative border-b border-line/70 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-secondary/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="eyebrow">Open source</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tightest text-ink">
              Libraries &amp; APIs, free for everyone.
            </h1>
            <p className="mt-5 max-w-2xl text-muted leading-relaxed">
              Tools we have extracted from our own projects and released as
              open‑source packages. Production‑tested, well‑documented and
              maintained.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="https://github.com/Imhotep-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-white transition-colors"
              >
                <i className="fab fa-github" />
                Explore on GitHub
              </a>
              <a
                href="mailto:imhoteptech@outlook.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface transition-colors"
              >
                <i className="fas fa-envelope text-xs" />
                Need help?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Libraries grid */}
      <section className="border-b border-line/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="eyebrow">Packages</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink">
                Our published libraries
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Powerful tools to accelerate your development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraries.map((library, index) => (
              <LibraryCard key={index} library={library} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration steps */}
      <section className="border-b border-line/70 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-12 text-center">
            <span className="eyebrow">Get started</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink">
              How to integrate in three steps
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm text-muted">
              Clear docs, minimal setup. Drop a package into your project and
              you&apos;re ready to ship.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {integrationSteps.map((step) => (
              <li
                key={step.step}
                className="relative rounded-2xl border border-line bg-surface/60 p-6 hover-lift hover:border-secondary/40"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary font-semibold">
                    {step.step}
                  </span>
                  <i className={`${step.icon} text-subtle text-lg`} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <a
              href="mailto:imhoteptech@outlook.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-secondary/90 transition-colors"
            >
              <i className="fas fa-envelope text-xs" />
              Need help integrating? Contact us
            </a>
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

export default Libraries;
