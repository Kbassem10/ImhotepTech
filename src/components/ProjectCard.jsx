import React, { useState } from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const ProjectCard = ({ project, libData, onCopyCommand, copiedItem, handleMouseMove }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const {
    title,
    url,
    date,
    description,
    image,
    imageAlt,
    tags = [],
    buttons = [],
    features,
    featured,
    isLibrary,
  } = project;

  const categoryLabel = libData?.category || (isLibrary ? "Developer Library & API" : "Web Application");
  const installCommand = libData?.installCommand;

  // Compute tag styling based on framework/tech for maximum visual distinction
  const getTagBadgeStyle = (tagName = "") => {
    const lower = tagName.toLowerCase();
    if (lower.includes('django')) return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50';
    if (lower.includes('react') || lower.includes('next.js')) return 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50';
    if (lower.includes('python') || lower.includes('flask')) return 'bg-sky-950/60 text-sky-300 border-sky-800/50';
    if (lower.includes('docker')) return 'bg-blue-950/60 text-blue-300 border-blue-800/50';
    if (lower.includes('pwa') || lower.includes('offline')) return 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50';
    if (lower.includes('ai') || lower.includes('gemini')) return 'bg-amber-950/60 text-amber-300 border-amber-800/50';
    if (lower.includes('postgres') || lower.includes('database')) return 'bg-purple-950/60 text-purple-300 border-purple-800/50';
    return 'bg-slate-800/60 text-slate-300 border-slate-700/60';
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      className="group glass-panel rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl"
    >
      {/* Dynamic Cursor Hover Glow Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(242, 202, 80, 0.08), transparent 45%)',
        }}
      />

      <div className="relative z-10">
        {/* Top Header Metadata Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3.5 border-b border-slate-200/60 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase font-mono">
              {categoryLabel}
            </span>
          </div>
          {date && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-on-surface-variant bg-slate-200/50 dark:bg-surface-container px-2 py-0.5 rounded-md border border-slate-300/40 dark:border-glass-border">
              {date}
            </span>
          )}
        </div>

        {/* Title & Featured Star Badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
              >
                <span>{title}</span>
                <Icon name="fas fa-arrow-up-right-from-square text-xs text-slate-400 group-hover/link:text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            ) : (
              <span>{title}</span>
            )}
          </h3>

          {featured && (
            <span className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-xs">
              <Icon name="fas fa-star text-[9px]" /> Featured
            </span>
          )}
        </div>

        {/* Visual Showcase: Image Mockup or Architectural Fallback */}
        {image && !imageError ? (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/70 dark:border-glass-border bg-slate-100/90 dark:bg-surface-container aspect-video flex items-center justify-center p-3.5 shadow-inner">
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-7 w-7 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/50 dark:border-glass-border bg-gradient-to-tr from-slate-100 via-slate-50 to-slate-200 dark:from-surface-container dark:via-surface-container-low dark:to-surface-container-high aspect-video flex items-center justify-center p-6 shadow-inner">
            <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-25" />
            <div className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-surface border border-slate-200/80 dark:border-glass-border flex items-center justify-center text-slate-500 dark:text-on-surface-variant mx-auto mb-2.5 shadow-md group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                <Icon name={libData?.icon || (isLibrary ? "fas fa-terminal" : "fas fa-cubes")} className="text-2xl text-primary" />
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-on-surface-variant block tracking-wide">
                {title}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 block">
                {isLibrary ? "Open-Source API & Package" : "Production Web Platform"}
              </span>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="mt-5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>

        {/* Features Checklist */}
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-slate-200/60 dark:border-white/10 pt-4 text-xs sm:text-sm text-slate-650 dark:text-slate-300">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="fas fa-check text-[9px]" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Interactive CLI Terminal Widget for Libraries */}
        {installCommand && (
          <div className="mt-5 bg-slate-950/90 dark:bg-surface-container-lowest border border-slate-800 dark:border-glass-border rounded-xl p-3 flex items-center justify-between shadow-inner font-mono text-xs text-primary">
            <span className="truncate select-all pr-2 text-[11px] font-mono">$ {installCommand}</span>
            <button
              onClick={() => onCopyCommand && onCopyCommand(installCommand, title)}
              type="button"
              className="flex-shrink-0 p-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg transition-all active:scale-95 flex items-center gap-1.5"
              title="Copy install command"
            >
              {copiedItem === title ? (
                <>
                  <Icon name="fas fa-check text-emerald-400 text-xs" />
                  <span className="text-[10px] text-emerald-400 font-sans font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Icon name="fas fa-copy text-xs" />
                  <span className="text-[10px] font-sans">Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10">
        {/* Full Tags List (No truncation or hiding) */}
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200/50 dark:border-white/10 pt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono border font-medium transition-colors ${getTagBadgeStyle(tag.name)}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-200/50 dark:border-white/10 flex flex-wrap gap-2.5">
            {buttons.map((btn, idx) => {
              let btnStyle = 'border border-slate-300 dark:border-glass-border text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-surface-container';

              if (idx === 0) {
                btnStyle = 'bg-primary hover:bg-primary-container text-on-primary font-bold gold-glow shadow-md';
              }

              const lowerText = btn.text.toLowerCase();
              if (lowerText.includes('play') || lowerText.includes('google play')) {
                btnStyle = 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md';
              } else if (lowerText.includes('github') || lowerText.includes('code')) {
                btnStyle = 'bg-slate-900 dark:bg-surface hover:bg-slate-800 dark:hover:bg-surface-container-high text-white border border-slate-700/60 dark:border-glass-border';
              } else if (lowerText.includes('pypi') || lowerText.includes('python')) {
                btnStyle = 'bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-md';
              }

              return (
                <a
                  key={idx}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${btnStyle}`}
                >
                  <Icon name={btn.icon} className="text-xs" />
                  <span>{btn.text}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
