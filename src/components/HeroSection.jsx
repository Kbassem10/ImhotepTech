import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const HeroSection = ({ computedStats, handleNavClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-28 px-4 sm:px-6">
      
      {/* Radial Gradient Ambient Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-primary/10 blur-[130px] hero-orb" />
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 rounded-full bg-primary-container/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-surface-container-highest/[0.15] blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-surface-container-low border border-slate-200 dark:border-glass-border shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-shimmer-gold animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-slate-700 dark:text-on-surface-variant uppercase">
              Engineering for Eternity &bull; Software Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-on-background leading-[1.12] animate-fade-in-up">
            Building Scalable Web Applications &amp;{' '}
            <span className="text-gradient-gold">Developer Tooling.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-650 dark:text-on-surface-variant max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-normal">
            Imhotep Tech turns complex business challenges into production-ready software—from custom SaaS platforms and medical clinic management to developer CLI tools and exchange rate APIs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary gold-glow transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Icon name="fas fa-cubes text-xs" />
              <span>Explore Selected Work</span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg border border-primary bg-transparent text-slate-900 dark:text-primary hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Icon name="fas fa-paper-plane text-xs text-primary" />
              <span>Get in Touch</span>
            </a>
          </div>

        </div>

        {/* Dynamic Studio Metrics Bento Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {computedStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-6 border border-slate-200/60 dark:border-glass-border flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="text-lg" />
                </span>
                <span className="text-[10px] text-slate-400 dark:text-on-surface-variant uppercase tracking-widest">
                  Verified
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-on-background tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-on-surface-variant mt-1 block">
                  {stat.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
