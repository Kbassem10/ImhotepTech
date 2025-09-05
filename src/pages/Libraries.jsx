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
    </div>
  );
};

export default Libraries;
