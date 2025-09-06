import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibraryCard from '../components/LibraryCard';
import { libraries, integrationSteps } from '../data/libraries';

const Libraries = () => {
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
    <div className="w-full font-sans">
      <Navbar currentPage="libraries" />
      
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
                Open Source Libraries & APIs
              </h1>
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce-gentle">
                <i className="fas fa-code text-accent opacity-60"></i>
              </div>
              <div className="absolute -bottom-1 -left-1 text-lg animate-float" style={{animationDelay: '1s'}}>
                <i className="fas fa-star text-secondary opacity-40"></i>
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 animate-fade-in-up animate-stagger-1">
              Free to use, built with ❤️ by Imhotep Tech
            </p>
            
            <a 
              href="https://github.com/Imhotep-Tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold text-lg 
                         shadow-lg hover:shadow-accent/50 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animate-stagger-2"
            >
              <i className="fab fa-github text-xl"></i>
              Explore on GitHub
            </a>
          </div>
        </div>
        
        {/* Enhanced wave separator with gradient */}
        <div className="relative h-32 w-full">
          <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="librariesWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#1a202c" stopOpacity="1"/>
                <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path fill="url(#librariesWaveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          
          {/* Floating elements in wave area */}
          <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-dark">
        <div className="container mx-auto px-4 py-16 max-w-full">
          {/* Libraries Grid */}
          <div className="mb-16">
            <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Libraries & APIs</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Powerful tools to accelerate your development process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {libraries.map((library, index) => (
                <div
                  key={index}
                  className="animate-zoom-in hover-lift"
                  style={{ 
                    animationDelay: `${(index + 4) * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <LibraryCard library={library} />
                </div>
              ))}
            </div>
          </div>

          {/* Integration Steps Section */}
          <div className={`animate-fade-in-up animate-stagger-6`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How to Integrate</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Get started with our libraries in just three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {integrationSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-500 hover-lift animate-zoom-in"
                  style={{ animationDelay: `${(index + 7) * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="relative mb-6">
                    <div className="bg-secondary/20 h-16 w-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-secondary font-bold text-2xl">{step.step}</span>
                    </div>
                    <div className="absolute top-0 right-0">
                      <i className={`${step.icon} text-2xl text-accent/60 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}></i>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:imhoteptech@outlook.com" 
                className="px-8 py-4 bg-secondary text-primary hover:bg-secondary/90 rounded-full font-bold text-lg 
                           shadow-lg hover:shadow-secondary/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Need Help? Contact Us
              </a>
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
    </div>
  );
};

export default Libraries;
