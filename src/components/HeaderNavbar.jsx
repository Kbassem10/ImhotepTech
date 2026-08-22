import React from 'react';

const Icon = ({ name, className = "" }) => (
  <i className={`${name} ${className}`} aria-hidden="true" />
);

const HeaderNavbar = ({
  theme,
  toggleTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick
}) => {
  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Work' },
    { id: 'stack', label: 'Stack' },
    { id: 'founder', label: 'Founder' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-glass-border bg-white/80 dark:bg-surface/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-200">
            <img
              src="/it.png"
              alt="Imhotep Tech"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-xl tracking-tight text-slate-900 dark:text-primary group-hover:text-shimmer-gold transition-colors">
              Imhotep Tech
            </span>
            <span className="text-[10px] text-slate-500 dark:text-on-surface-variant hidden sm:block -mt-0.5">
              Engineering for Eternity
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-sm font-medium text-slate-600 dark:text-on-surface hover:text-primary dark:hover:text-primary transition-colors duration-200 py-1 relative group/link"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/link:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-on-surface hover:bg-slate-100 dark:hover:bg-surface-container transition-all duration-200 active:scale-95"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Icon name="fas fa-sun text-primary text-base" />
            ) : (
              <Icon name="fas fa-moon text-slate-700 text-base" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary shadow-sm gold-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Build with Us</span>
            <Icon name="fas fa-arrow-right text-[10px]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            type="button"
            className="w-10 h-10 lg:hidden flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <Icon name="fas fa-times text-lg" />
            ) : (
              <Icon name="fas fa-bars text-lg" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/60 dark:border-glass-border bg-white/95 dark:bg-surface/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-base font-medium text-slate-700 dark:text-on-surface hover:text-primary dark:hover:text-primary py-2 border-b border-slate-100 dark:border-surface-container-high flex items-center justify-between"
              >
                <span>{item.label}</span>
                <Icon name="fas fa-chevron-right text-xs text-slate-400" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary shadow-md gold-glow transition-all"
            >
              <span>Build with Us</span>
              <Icon name="fas fa-arrow-right text-xs" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNavbar;
