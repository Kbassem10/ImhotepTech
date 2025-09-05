import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
            Imhotep Tech
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 italic">
            Win in your mind and you will win in reality
          </p>
          <a 
            href="mailto:imhoteptech@outlook.com" 
            className="px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-bold text-lg 
                          shadow-lg hover:shadow-accent/50 transform hover:-translate-y-1 transition-all duration-300">
            Contact Us Today
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
  );
};

export default Hero;
