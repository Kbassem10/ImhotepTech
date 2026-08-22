import React, { useMemo } from 'react';
import projects from '../data/projects';
import { socialPlatforms, socialContent, engagementFeatures } from '../data/socialMedia';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const SocialCommunitySection = () => {
  // Dynamically compute stats from the projects array
  const socialStats = useMemo(() => {
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
        color: "text-primary"
      },
      {
        metric: "Web Applications",
        value: `${webAppsCount}`,
        icon: "fas fa-laptop-code",
        color: "text-primary"
      },
      {
        metric: "Developer Libraries",
        value: `${librariesCount}`,
        icon: "fas fa-terminal",
        color: "text-primary"
      },
      {
        metric: "Open-Source Repos",
        value: `${openSourceCount}`,
        icon: "fab fa-github",
        color: "text-primary"
      }
    ];
  }, []);

  return (
    <section id="community" className="border-t border-slate-200/60 dark:border-glass-border py-24 px-4 sm:px-6 relative bg-slate-100/30 dark:bg-surface-container-lowest/30">
      
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute top-1/2 left-10 w-96 h-96 rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl animate-fade-in-up">
          <span className="eyebrow text-primary">
            <Icon name="fas fa-users text-primary" /> Community &amp; Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
            {socialContent.hero.title}
          </h2>
          <p className="mt-4 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
            {socialContent.hero.subtitle} Follow Imhotep Tech across open-source channels, stay up to date on software releases, and engage with technical discussions.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialPlatforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl p-6 border border-slate-200/60 dark:border-glass-border flex flex-col justify-between group hover:-translate-y-1 hover:border-primary/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-surface border border-slate-300 dark:border-glass-border flex items-center justify-center text-slate-900 dark:text-primary group-hover:scale-110 transition-transform">
                    <Icon name={platform.icon} className="text-2xl" />
                  </div>
                  <Icon name="fas fa-arrow-up-right-from-square text-xs text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-on-surface tracking-tight">
                  {platform.name}
                </h3>
                <span className="text-xs font-semibold text-primary block mt-0.5">
                  {platform.username}
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-650 dark:text-on-surface-variant leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Community Engagement Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {engagementFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-6 border border-slate-200/50 dark:border-glass-border"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-surface border border-slate-300 dark:border-glass-border flex items-center justify-center mb-3 text-primary">
                <Icon name={feat.icon} className="text-base text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-on-surface text-sm">
                {feat.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-on-surface-variant leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Social Stats Bento Strip */}
        <div className="glass-panel rounded-xl p-6 sm:p-8 border border-slate-200/60 dark:border-glass-border">
          <div className="mb-6 border-b border-slate-200/50 dark:border-glass-border pb-3">
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
              Impact &amp; Metrics
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-on-background mt-1">
              Community Footprint
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name={stat.icon} className="text-sm text-primary" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-on-background tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-650 dark:text-on-surface-variant">
                  {stat.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialCommunitySection;
