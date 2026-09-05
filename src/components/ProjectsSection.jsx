import React, { useState, useMemo } from 'react';
import projects from '../data/projects';
import { libraries, integrationSteps } from '../data/libraries';
import ProjectCard from './ProjectCard';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const ProjectsSection = ({ handleMouseMove, handleCopyCommand, copiedItem }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'apps' | 'libraries' | 'featured'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  // Newest projects first
  const sortedProjects = useMemo(() => {
    const parseDate = (d) => (d ? new Date(d).getTime() : 0);
    return [...projects].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  // Compute prominent technologies for quick tag filtering
  const popularTags = useMemo(() => [
    'Django',
    'React',
    'Python',
    'Tailwind CSS',
    'Docker',
    'PWA',
    'AI',
    'PostgreSQL'
  ], []);

  // Multi-tier filtering: Category + Active Tag + Search Query
  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((p) => {
      // Category filter
      if (filter === 'apps' && p.isLibrary) return false;
      if (filter === 'libraries' && !p.isLibrary) return false;
      if (filter === 'featured' && !p.featured) return false;

      // Tag filter
      if (activeTag !== 'all') {
        const hasTag = p.tags && p.tags.some(t =>
          t.name.toLowerCase().includes(activeTag.toLowerCase())
        );
        if (!hasTag) return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = typeof p.description === 'string'
          ? p.description.toLowerCase().includes(q)
          : false;
        const inTags = p.tags && p.tags.some(t => t.name.toLowerCase().includes(q));
        const inFeatures = p.features && p.features.some(f => f.toLowerCase().includes(q));
        if (!inTitle && !inDesc && !inTags && !inFeatures) return false;
      }

      return true;
    });
  }, [filter, activeTag, searchQuery, sortedProjects]);

  const handleResetFilters = () => {
    setFilter('all');
    setActiveTag('all');
    setSearchQuery('');
  };

  const appsCount = projects.filter(p => !p.isLibrary).length;
  const libsCount = projects.filter(p => p.isLibrary).length;
  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <section id="projects" className="border-t border-slate-200/60 dark:border-glass-border py-24 px-4 sm:px-6 bg-slate-100/40 dark:bg-surface-container-lowest/50 relative">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-container/[0.04] blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 animate-fade-in-up">
          <div className="max-w-3xl">
            <span className="eyebrow text-primary">
              <Icon name="fas fa-cubes text-primary" /> Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
              Selected Work &amp; Libraries
            </h2>
            <p className="mt-4 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Explore the complete directory of production web applications, open-source packages, and custom REST APIs built by Imhotep Tech. Every project is fully accessible with source code, live demos, and documentation.
            </p>
          </div>

          {/* Active Count Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200/70 dark:bg-surface-container border border-slate-300/50 dark:border-glass-border text-xs font-mono self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-600 dark:text-on-surface-variant">Showing</span>
            <span className="font-bold text-slate-900 dark:text-primary">{filteredProjects.length}</span>
            <span className="text-slate-600 dark:text-on-surface-variant">of {projects.length} Total Projects</span>
          </div>
        </div>

        {/* Filter Controls Panel: Category Tabs + Search Bar */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/70 dark:border-glass-border mb-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Main Category Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-surface-container-low border border-slate-300/60 dark:border-glass-border overflow-x-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
                }`}
              >
                All Work ({projects.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('apps')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === 'apps'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
                }`}
              >
                Web Apps ({appsCount})
              </button>
              <button
                type="button"
                onClick={() => setFilter('libraries')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === 'libraries'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
                }`}
              >
                Libraries &amp; APIs ({libsCount})
              </button>
              <button
                type="button"
                onClick={() => setFilter('featured')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === 'featured'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface'
                }`}
              >
                Featured ({featuredCount})
              </button>
            </div>

            {/* Instant Real-Time Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Icon name="fas fa-search text-xs" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tag, or stack (e.g. Django, PWA, AI)..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs bg-white dark:bg-surface-container border border-slate-300/80 dark:border-glass-border text-slate-900 dark:text-on-surface placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
                  title="Clear search"
                >
                  <Icon name="fas fa-times-circle" />
                </button>
              )}
            </div>

          </div>

          {/* Technology Quick-Filter Pills Strip */}
          <div className="flex items-center gap-1.5 pt-3 border-t border-slate-200/50 dark:border-white/10 overflow-x-auto">
            <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-on-surface-variant whitespace-nowrap pr-2">
              Filter by Tech:
            </span>
            <button
              type="button"
              onClick={() => setActiveTag('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all whitespace-nowrap ${
                activeTag === 'all'
                  ? 'bg-primary/20 text-primary border border-primary/40 font-bold'
                  : 'bg-slate-200/60 dark:bg-surface-container text-slate-600 dark:text-slate-400 border border-slate-300/40 dark:border-glass-border hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Tech
            </button>
            {popularTags.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setActiveTag(activeTag === tech ? 'all' : tech)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all whitespace-nowrap ${
                  activeTag === tech
                    ? 'bg-primary text-on-primary border border-primary font-bold shadow-xs'
                    : 'bg-slate-200/60 dark:bg-surface-container text-slate-600 dark:text-slate-400 border border-slate-300/40 dark:border-glass-border hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}

            {(searchQuery || activeTag !== 'all' || filter !== 'all') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-auto text-[11px] text-primary hover:underline font-semibold whitespace-nowrap flex items-center gap-1 pl-3"
              >
                <Icon name="fas fa-rotate-left text-[10px]" /> Reset
              </button>
            )}
          </div>

        </div>

        {/* Portfolio Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => {
              const libData = project.isLibrary
                ? libraries.find(l => l.title.toLowerCase() === project.title.toLowerCase())
                : null;

              return (
                <ProjectCard
                  key={`${project.title}-${idx}`}
                  project={project}
                  libData={libData}
                  onCopyCommand={handleCopyCommand}
                  copiedItem={copiedItem}
                  handleMouseMove={handleMouseMove}
                />
              );
            })}
          </div>
        ) : (
          /* Empty Search Feedback with instant reset */
          <div className="glass-panel rounded-2xl p-12 text-center border border-slate-200/60 dark:border-glass-border">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-4 text-2xl">
              <Icon name="fas fa-search" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No matching projects found
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              No results matched your active filters or search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-bold text-xs gold-glow transition-all"
            >
              Show All {projects.length} Projects
            </button>
          </div>
        )}

        {/* Integration Steps Bento Box for Libraries & APIs */}
        {integrationSteps && integrationSteps.length > 0 && (
          <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-glass-border shadow-xl">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-primary uppercase font-mono">
                  Integration Roadmap
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-on-background mt-1">
                  How to Adopt Imhotep Libraries &amp; APIs
                </h3>
              </div>
              <Icon name="fas fa-terminal text-2xl text-primary/40 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationSteps.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="rounded-xl border border-slate-200/50 dark:border-glass-border bg-slate-100/50 dark:bg-surface-container/60 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm font-mono border border-primary/20">
                        0{stepItem.step}
                      </span>
                      <Icon name={stepItem.icon} className="text-slate-400 dark:text-on-surface-variant text-sm" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-on-surface text-base">
                      {stepItem.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-on-surface-variant leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
