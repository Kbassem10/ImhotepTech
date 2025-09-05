import React, { useState } from 'react';

const LibraryCard = ({ library }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    title,
    description,
    icon,
    category,
    installCommand,
    tags,
    buttons
  } = library;

  const handleCardClick = (e) => {
    // Check if the clicked element or its parent is a button or link
    const isButton = e.target.closest('a, button');
    if (!isButton && buttons && buttons[0]) {
      window.open(buttons[0].url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-secondary/50 transform hover:-translate-y-2 transition-all duration-500 w-full cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="relative mr-4">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className={`${icon} text-3xl text-secondary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10`}></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                {title}
                <i className="fas fa-external-link-alt ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </h3>
              <span className="text-xs bg-gradient-to-r from-accent to-secondary text-white px-3 py-1 rounded-full font-semibold shadow-lg mt-2 inline-block">
                {category}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Tags and Buttons Section */}
        <div className="space-y-4 mt-auto">
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`text-xs px-2 md:px-3 py-1 md:py-2 rounded-full ${tag.color} border border-white/10 hover:border-secondary/30 hover:scale-105 transition-all duration-200 cursor-default`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
          
          {/* Install Command */}
          <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
            <code className="text-xs text-gray-300 break-all">{installCommand}</code>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
            {buttons.map((button, index) => (
              <a 
                key={index}
                href={button.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group/button relative px-4 md:px-6 py-2 md:py-3 ${button.style} text-white rounded-xl font-semibold text-sm 
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
                
                <i className={`${button.icon} group-hover/button:rotate-12 transition-transform duration-300`}></i>
                <span className="relative z-10">{button.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default LibraryCard;
