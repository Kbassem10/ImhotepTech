import React, { useState } from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const ProjectCard = ({ project, libData, onCopyCommand, copiedItem, handleMouseMove }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const categoryLabel = libData?.category || (isLibrary ? "Developer Library" : "Web Application");
  const installCommand = libData?.installCommand;

  return (
    <article
      onMouseMove={handleMouseMove}
      className="group glass-panel rounded-xl border border-slate-200/60 dark:border-glass-border p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-200/50 dark:border-glass-border pb-3.5">
          <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
            {categoryLabel}
          </span>
          {date && (
            <span className="text-[11px] text-slate-500 dark:text-on-surface-variant">
              {date}
            </span>
          )}
        </div>

        {/* Title & Featured Badge */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-on-surface tracking-tight leading-snug">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
              >
                <span>{title}</span>
                <Icon name="fas fa-arrow-up-right-from-square text-xs text-slate-400 group-hover/link:text-primary transition-colors" />
              </a>
            ) : (
              <span>{title}</span>
            )}
          </h3>

          {featured && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 rounded bg-primary/10 text-primary border border-primary/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              <Icon name="fas fa-star text-[9px]" /> Featured
            </span>
          )}
        </div>

        {/* Image Mockup or Gradient Preview */}
        {image ? (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/60 dark:border-glass-border bg-slate-100 dark:bg-surface-container aspect-video flex items-center justify-center p-3">
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 relative rounded-xl overflow-hidden border border-slate-200/40 dark:border-glass-border bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-surface-container dark:to-surface-container-high aspect-video flex items-center justify-center p-6">
            <div aria-hidden className="absolute inset-0 bg-dotgrid opacity-30" />
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-surface border border-slate-200 dark:border-glass-border flex items-center justify-center text-slate-500 dark:text-on-surface-variant mx-auto mb-2 shadow-sm">
                <Icon name={libData?.icon || (isLibrary ? "fas fa-cubes" : "fas fa-laptop-code")} className="text-xl text-primary" />
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-on-surface-variant">{title}</span>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mt-5 text-slate-700 dark:text-on-surface-variant text-sm leading-relaxed">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-slate-200/50 dark:border-glass-border pt-4 custom-checkmark-list text-xs sm:text-sm text-slate-600 dark:text-on-surface-variant">
            {features.map((feature, i) => (
              <li key={i} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Terminal Widget for Install Commands */}
        {installCommand && (
          <div className="mt-5 text-xs bg-surface-container-lowest border border-glass-border rounded-xl p-3 flex items-center justify-between text-primary shadow-inner">
            <span className="truncate select-all pr-2 text-[11px]">$ {installCommand}</span>
            <button
              onClick={() => onCopyCommand && onCopyCommand(installCommand, title)}
              type="button"
              className="flex-shrink-0 p-1.5 bg-surface hover:bg-surface-container border border-glass-border rounded-lg text-on-surface-variant hover:text-white transition-all active:scale-95"
              title="Copy install command"
            >
              {copiedItem === title ? (
                <Icon name="fas fa-check text-primary" />
              ) : (
                <Icon name="fas fa-copy" />
              )}
            </button>
          </div>
        )}
      </div>

      <div>
        {/* All Tags (No truncation) */}
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200/40 dark:border-glass-border pt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded text-[11px] border border-slate-200 dark:border-glass-border bg-slate-100 dark:bg-surface-container text-slate-700 dark:text-on-surface-variant transition-colors"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-200/40 dark:border-glass-border flex flex-wrap gap-3">
            {buttons.map((btn, idx) => {
              let btnStyle = 'border border-slate-300 dark:border-glass-border text-slate-800 dark:text-on-surface hover:bg-slate-100 dark:hover:bg-surface-container';
              
              if (idx === 0) {
                btnStyle = 'bg-primary hover:bg-primary-container text-on-primary font-bold gold-glow shadow-md';
              }
              
              const lowerText = btn.text.toLowerCase();
              if (lowerText.includes('play') || lowerText.includes('google play')) {
                btnStyle = 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md';
              } else if (lowerText.includes('github') || lowerText.includes('code')) {
                btnStyle = 'bg-slate-900 dark:bg-surface hover:bg-slate-800 dark:hover:bg-surface-container-high text-white border border-glass-border';
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
