import React from 'react';
import { founderInfo, education, vision } from '../data/aboutMe';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const FounderSection = () => {
  return (
    <section id="founder" className="border-t border-slate-200/60 dark:border-glass-border py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl animate-fade-in-up">
          <span className="eyebrow text-primary">
            <Icon name="fas fa-user-shield text-primary" /> Studio Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-on-background mt-3">
            Founder &amp; Philosophy
          </h2>
          <p className="mt-4 text-slate-650 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Directing engineering at Imhotep Tech, combining academic computer science with pragmatic product delivery.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Founder Details & Bio (Span 7) */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-6 sm:p-8 border border-slate-200/60 dark:border-glass-border border-l-4 border-l-primary flex flex-col justify-between gap-6">
            
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary/40 p-1 relative shadow-xl flex-shrink-0 bg-surface-container">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={founderInfo.image}
                      alt={founderInfo.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-on-surface tracking-tight">
                    {founderInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary mt-1 uppercase tracking-wider">
                    {founderInfo.title}
                  </p>
                  
                  {/* Contact Metadata */}
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500 dark:text-on-surface-variant">
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-map-marker-alt text-primary" /> {founderInfo.contact.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-graduation-cap text-primary" /> {founderInfo.contact.university}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="fas fa-globe text-primary" />
                      <a href="https://kbassem.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                        kbassem.app
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-700 dark:text-on-surface-variant text-sm leading-relaxed border-t border-slate-200/50 dark:border-glass-border pt-5">
                {founderInfo.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-glass-border">
              {founderInfo.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-300 dark:border-glass-border bg-slate-100/50 dark:bg-surface-container/60 text-slate-800 dark:text-on-surface hover:bg-slate-200 dark:hover:bg-surface-container-high hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Icon name={social.icon} className="text-primary" />
                  {social.name}
                </a>
              ))}
              <a
                href="https://kbassem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Icon name="fas fa-globe" />
                Personal Portfolio
              </a>
            </div>

          </div>

          {/* Card 2: Vision & Education Background (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Vision Card */}
            <div className="glass-panel rounded-xl p-6 sm:p-8 border border-slate-200/60 dark:border-glass-border flex-1">
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                Mission &amp; Strategy
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-on-surface mt-1">
                {vision.title}
              </h4>
              <div className="mt-3 space-y-3 text-slate-650 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                {vision.content.map((vPara, i) => (
                  <p key={i}>{vPara}</p>
                ))}
              </div>
            </div>

            {/* Academic Background Card */}
            <div className="glass-panel rounded-xl p-6 sm:p-8 border border-slate-200/60 dark:border-glass-border">
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                Academic Background
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-on-surface mt-1 mb-4">
                Education &amp; Qualifications
              </h4>
              
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-slate-200/40 dark:border-glass-border pb-3 last:border-b-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={edu.icon} className="text-sm" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-on-surface">
                        {edu.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-on-surface-variant mt-0.5">
                        {edu.institution}
                      </p>
                      <span className="inline-block text-[10px] text-primary mt-1 border border-primary/20 bg-primary/10 px-2 py-0.5 rounded-md font-semibold">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
