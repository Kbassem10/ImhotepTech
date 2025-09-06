import React, { useState } from 'react';

const SocialCard = ({ platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e) => {
    // Check if the clicked element or its parent is a button or link
    const isButton = e.target.closest('a, button');
    if (!isButton && platform.url) {
      window.open(platform.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-secondary/50 transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 cursor-pointer h-full"
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Enhanced animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center p-8 h-full relative z-10">
        {/* Icon */}
        <div className={`w-24 h-24 ${platform.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-6 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <i className={`${platform.icon} text-5xl text-white relative z-10`}></i>
        </div>

        {/* Content */}
        <div className="text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
              {platform.name}
            </h3>
            <p className="text-gray-400 text-center mb-4 leading-relaxed">
              {platform.description}
            </p>

            {/* Features */}
            {platform.features && (
              <div className="mb-6">
                <ul className="text-sm text-gray-300 space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <i className="fas fa-check-circle text-secondary text-xs"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Username/Button */}
          <div className="mt-auto" onClick={(e) => e.stopPropagation()}>
            <a 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group/button relative px-6 py-3 ${platform.color} text-white rounded-full font-semibold 
                         shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden`}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
              
              <i className="fas fa-external-link-alt group-hover/button:rotate-12 transition-transform duration-300"></i>
              <span className="relative z-10">{platform.username}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default SocialCard;
