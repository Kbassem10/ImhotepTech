import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Product Development',
    body: 'Web apps, SaaS platforms, and mobile MVPs engineered from architectural design to cloud deployment.',
    highlight: 'Full-Stack'
  },
  {
    icon: 'fas fa-gears',
    title: 'Business Automation',
    body: 'Interactive dashboards, financial tracking, and custom background workflows that eliminate manual operational hours.',
    highlight: 'Workflows'
  },
  {
    icon: 'fas fa-plug',
    title: 'APIs & Integration',
    body: 'High-throughput currency converters, RESTful services, and robust third-party system integrations.',
    highlight: 'Scalable'
  },
  {
    icon: 'fas fa-arrows-rotate',
    title: 'Maintenance & Support',
    body: 'Containerized deployment via Docker, performance optimization, and active security maintenance.',
    highlight: '24/7 Stability'
  },
];

const ServicesSection = ({ handleMouseMove }) => {
  return (
    <section id="services" className="border-t border-slate-200/60 dark:border-glass-border py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 w-96 h-96 rounded-full bg-primary/[0.03] blur-[130px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow text-primary">
            <Icon name="fas fa-layer-group text-primary" /> Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
            End-to-End Software Engineering.
          </h2>
          <p className="mt-4 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
            We build dependable software tailored to modern business requirements with clean, maintainable architecture and strict engineering standards.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              onMouseMove={handleMouseMove}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200/70 dark:border-glass-border flex flex-col justify-between group hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-xs">
                    <Icon name={s.icon} className="text-xl" />
                  </div>
                  <span className="text-[10px] font-bold font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {s.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-650 dark:text-on-surface-variant">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
