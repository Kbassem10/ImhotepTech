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
        
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark">
          {/* Animated background elements */}
          <div className="absolute inset-0 w-full overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
            <div className={`text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
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
          
          {/* Wave separator */}
          <div className="relative h-24 w-full">
            <svg className="absolute bottom-0 w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#1a202c" fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
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

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-secondary text-primary rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 hover-lift animate-bounce-gentle"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
    </>
  );
};

export default SocialMedia;
