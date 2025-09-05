import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const techStack = [
    { name: 'Python', color: 'bg-blue-900/50', icon: 'fab fa-python', level: 85, delay: '0.1s' },
    { name: 'Django', color: 'bg-green-900/50', icon: 'fas fa-leaf', level: 90, delay: '0.2s' },
    { name: 'Flask', color: 'bg-red-900/50', icon: 'fas fa-flask', level: 95, delay: '0.3s' },
    { name: 'JavaScript', color: 'bg-yellow-900/50', icon: 'fab fa-js-square', level: 75, delay: '0.4s' },
    { name: 'React', color: 'bg-cyan-900/50', icon: 'fab fa-react', level: 80, delay: '0.5s' },
    { name: 'Tailwind', color: 'bg-pink-900/50', icon: 'fas fa-paint-brush', level: 90, delay: '0.6s' }
  ];

  return (
    <div className="lg:col-span-4 space-y-6">
      {/* About Card with enhanced animations */}
      <div className={`group bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-700 relative overflow-hidden hover-lift hover-glow ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
        {/* Multiple animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-secondary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-8 left-8 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-3 relative z-10">
          <i className="fas fa-info-circle group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-bounce-gentle"></i>
          <span className="group-hover:text-white transition-colors duration-300">About Imhotep Tech</span>
        </h2>
        
        <div className="flex justify-center mb-6 relative z-10">
          <div className="relative group/image">
            {/* Multiple glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-md opacity-30 group-hover:animate-spin-slow transition-all duration-500"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-accent via-secondary to-accent rounded-full blur-sm opacity-20 group-hover:animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
            
            <img 
              src="/it.png" 
              className="relative w-40 h-40 rounded-full border-4 border-secondary object-cover shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 animate-pulse-glow" 
              alt="Imhotep Tech - Custom Software Development" 
              loading="lazy"
            />
            
            {/* Multiple pulse effects */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary animate-ping opacity-20"></div>
            <div className="absolute inset-2 rounded-full border border-accent animate-ping opacity-15" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-gray-100 transition-colors duration-300">
          Imhotep Tech is a pioneering software development firm based in Egypt. 
          We specialize in crafting innovative software solutions tailored to meet 
          the diverse needs of our clients.
        </p>
      </div>
      
      {/* Tech Stack with enhanced interactivity */}
      <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-700 relative overflow-hidden hover-lift ${isVisible ? 'animate-fade-in-right animate-stagger-2' : 'opacity-0'}`}>
        {/* Enhanced background animations */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        
        <h3 className="text-xl font-bold mb-6 text-secondary flex items-center gap-3 relative z-10">
          <i className="fas fa-code animate-pulse text-2xl"></i>
          <span className="hover:text-white transition-colors duration-300">Our Tech Stack</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className={`group/tech relative p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 hover:border-secondary/50 transition-all duration-500 cursor-pointer hover-lift animate-zoom-in`}
              style={{animationDelay: tech.delay}}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Tech item content */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  <i className={`${tech.icon} text-2xl text-secondary group-hover/tech:scale-125 group-hover/tech:rotate-12 transition-all duration-500 relative z-10`}></i>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-white group-hover/tech:text-secondary transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
                <div className="text-xs text-secondary font-bold animate-bounce-gentle">
                  {tech.level}%
                </div>
              </div>
              
              {/* Enhanced skill progress bar - Always visible */}
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 animate-shimmer"></div>
                <div 
                  className="bg-gradient-to-r from-secondary via-accent to-secondary h-2 rounded-full transition-all duration-1000 ease-out relative z-10"
                  style={{ 
                    width: `${tech.level}%`
                  }}
                ></div>
              </div>
              
              {/* Enhanced shine effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/tech:translate-x-full transition-transform duration-700 rounded-xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
