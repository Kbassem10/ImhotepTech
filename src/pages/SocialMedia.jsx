import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialCard from '../components/SocialCard';
import {
  socialPlatforms,
  socialStats,
  socialContent,
  engagementFeatures
} from '../data/socialMedia';

const SocialMedia = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <>
      <div className="w-full font-sans">
        <Navbar currentPage="social-media" />
        
        {/* Enhanced Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark overflow-hidden">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 w-full overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Additional floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
            <div className={`text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {socialContent.hero.title}
                </h1>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce-gentle">
                  <i className="fas fa-share-alt text-accent opacity-60"></i>
                </div>
                <div className="absolute -bottom-1 -left-1 text-lg animate-float" style={{animationDelay: '1s'}}>
                  <i className="fas fa-heart text-secondary opacity-40"></i>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-10 text-gray-200 animate-fade-in-up animate-stagger-1">
                {socialContent.hero.subtitle}
              </p>
              
              {/* Social Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up animate-stagger-2">
                {socialStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-primary/30 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-secondary/30 transition-all duration-300 hover-lift"
                  >
                    <i className={`${stat.icon} text-2xl ${stat.color} mb-2`}></i>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced wave separator with gradient */}
          <div className="relative h-32 w-full">
            <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="socialWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#1a202c" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
                </linearGradient>
              </defs>
              <path fill="url(#socialWaveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            
            {/* Floating elements in wave area */}
            <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full bg-dark">
          <div className="container mx-auto px-4 py-16 max-w-full">
            {/* Social Platforms Section */}
            <div className="mb-16">
              <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  {socialContent.sections.platforms.title}
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  {socialContent.sections.platforms.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialPlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="animate-zoom-in hover-lift"
                    style={{ 
                      animationDelay: `${(index + 4) * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <SocialCard platform={platform} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Features Section */}
            <div className={`mb-16 animate-fade-in-up animate-stagger-6`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  {socialContent.sections.engagement.title}
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  {socialContent.sections.engagement.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {engagementFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-500 hover-lift animate-zoom-in"
                    style={{ animationDelay: `${(index + 8) * 100}ms`, animationFillMode: 'both' }}
                  >
                    <div className="relative mb-6">
                      <div className="bg-secondary/20 h-16 w-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${feature.icon} text-2xl ${feature.color}`}></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className={`text-center animate-fade-in-up animate-stagger-9`}>
              <div className="bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-500 hover-lift max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center justify-center gap-3">
                  <i className="fas fa-rocket animate-bounce-gentle"></i>
                  Stay Connected
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Don't miss out on our latest updates, project releases, and tech insights. 
                  Follow us on your favorite platform and be part of our growing community!
                </p>
                
                {/* Quick Follow Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  {socialPlatforms.slice(0, 3).map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`group/quick px-4 py-2 ${platform.color} text-white rounded-lg font-medium text-sm 
                                shadow-md transition-all duration-300 flex items-center gap-2 hover-lift`}
                    >
                      <i className={`${platform.icon} group-hover/quick:rotate-12 transition-transform duration-300`}></i>
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />

        {/* Enhanced Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="group fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full shadow-2xl hover:shadow-glow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-bounce-gentle overflow-hidden"
            aria-label="Scroll to top"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button content */}
            <i className="fas fa-arrow-up text-lg relative z-10 group-hover:scale-110 transition-transform duration-300"></i>
            
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300 animate-pulse"></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to top
            </div>
          </button>
        )}
    </>
  );
};

export default SocialMedia;
