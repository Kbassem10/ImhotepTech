import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 w-full overflow-hidden">
        {/* Main floating orbs */}
        <div 
          className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '2s'
          }}
        ></div>
        
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
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with enhanced effects */}
          <div className={`relative mb-8 ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 relative">
              <span className="text-white">
                Imhotep Tech
              </span>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-secondary to-white blur-3xl opacity-20 animate-pulse-slow"></div>
            </h1>
            
            {/* Decorative elements around title */}
            <div className="absolute -top-4 -left-4 text-3xl text-secondary/60 animate-bounce-gentle">
              <i className="fas fa-code"></i>
            </div>
            <div className="absolute -top-2 -right-2 text-2xl text-accent/60 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <i className="fas fa-rocket"></i>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-secondary/40 animate-float">
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Subtitle with staggered animation */}
          <div className={`relative mb-12 ${isLoaded ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic font-light leading-relaxed">
              <span className="inline-block animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                Win in your mind
              </span>
              <span className="mx-4 text-secondary animate-pulse">•</span>
              <span className="inline-block animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                and you will win in reality
              </span>
            </p>
            
            {/* Animated underline */}
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced CTA button */}
          <div className={`${isLoaded ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <a 
              href="mailto:imhoteptech@outlook.com" 
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white hover:text-white rounded-full font-bold text-lg 
                          shadow-2xl hover:shadow-glow-lg transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <i className="fas fa-envelope mr-3 group-hover:rotate-12 transition-transform duration-300"></i>
              <span className="relative z-10">Contact Us Today</span>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300 animate-pulse"></div>
            </a>
            
            {/* Additional info */}
            <p className="mt-6 text-gray-400 text-sm animate-fade-in-up animate-stagger-3">
              <i className="fas fa-clock mr-2"></i>
              Available for new projects
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced wave separator with gradient */}
      <div className="relative h-32 w-full">
        <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#1a202c" stopOpacity="1"/>
              <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        
        {/* Floating elements in wave area */}
        <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
