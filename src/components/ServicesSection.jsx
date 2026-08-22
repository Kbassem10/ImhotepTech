import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Product Development',
    body: 'Web apps, SaaS platforms, and mobile MVPs engineered from architectural design to deployment.',
    highlight: 'Full-Stack'
  },
  {
    icon: 'fas fa-gears',
    title: 'Business Automation',
    body: 'Interactive dashboards, financial tracking, and custom background workflows that save manual work hours.',
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
    <section id="services" className="border-t border-slate-200/60 dark:border-glass-border py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow text-primary">
            <Icon name="fas fa-layer-group text-primary" /> Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
            End-to-End Software Engineering.
          </h2>
          <p className="mt-3 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
            We build dependable software tailored to modern business requirements with clean, maintainable architecture.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              onMouseMove={handleMouseMove}
              className="glass-panel rounded-xl p-6 border border-slate-200/60 dark:border-glass-border flex flex-col justify-between group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={s.icon} className="text-xl" />
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {s.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-on-surface tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-650 dark:text-on-surface-variant">
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
