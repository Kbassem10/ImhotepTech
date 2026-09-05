import React, { useState } from 'react';
import { techStackCategories } from '../data/aboutMe';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const StackSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedCategories = activeCategory === 'all'
    ? techStackCategories
    : techStackCategories.filter(c => c.id === activeCategory);

  return (
    <section id="stack" className="border-t border-slate-200/60 dark:border-glass-border py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[250px] rounded-full bg-primary/[0.04] blur-[110px]" />
      <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-primary-container/[0.03] blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 animate-fade-in-up">
          <div className="max-w-3xl">
            <span className="eyebrow text-primary">
              <Icon name="fas fa-microchip text-primary" /> Technology Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
              Core Technical Stack &amp; Tooling
            </h2>
            <p className="mt-4 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Architecting resilient software with battle-tested frameworks, modern relational databases, and clean algorithmic patterns.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-200/80 dark:bg-surface-container border border-slate-300/60 dark:border-glass-border self-start md:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
              }`}
            >
              All Stack
            </button>
            {techStackCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Pillar Categorized Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayedCategories.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/70 dark:border-glass-border flex flex-col justify-between hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between gap-4 mb-4 border-b border-slate-200/50 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-xs">
                      <Icon name={pillar.icon} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl">
                        {pillar.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-on-surface-variant block mt-0.5">
                        {pillar.skills.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-650 dark:text-on-surface-variant leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Skill Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillar.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl border border-slate-200/70 dark:border-glass-border bg-slate-100/60 dark:bg-surface-container/60 hover:bg-white dark:hover:bg-surface-container-high hover:border-primary/40 hover:shadow-sm transition-all duration-200 flex items-center gap-3 group/skill"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-surface border border-slate-200 dark:border-glass-border text-primary flex items-center justify-center flex-shrink-0 text-base group-hover/skill:scale-110 transition-transform shadow-xs">
                        <Icon name={skill.icon || "fas fa-code"} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-on-surface truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-on-surface-variant block truncate mt-0.5">
                          {skill.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-on-surface-variant font-mono">
                <span>Production Standard</span>
                <span className="text-primary font-semibold flex items-center gap-1.5">
                  <Icon name="fas fa-circle-check text-xs" /> Verified Stack
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Architectural Guarantee Strip */}
        <div className="mt-12 glass-panel rounded-2xl p-5 sm:p-6 border border-slate-200/70 dark:border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-md">
          <div className="flex items-center gap-2.5 text-slate-700 dark:text-on-surface">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-bold">Architecture:</span>
            <span className="text-slate-500 dark:text-on-surface-variant">Clean Service Layer &amp; SOLID Principles</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700 dark:text-on-surface">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-bold">Deployment:</span>
            <span className="text-slate-500 dark:text-on-surface-variant">Containerized Docker &amp; Cloud Ready</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700 dark:text-on-surface">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-bold">Resilience:</span>
            <span className="text-slate-500 dark:text-on-surface-variant">Defensive Access &amp; Type Safety</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StackSection;
