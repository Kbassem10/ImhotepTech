import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    title,
    url,
    date,
    description,
    image,
    imageAlt,
    tags,
    buttons,
    features
  } = project;

  const handleCardClick = (e) => {
    // Check if the clicked element or its parent is a button or link
    const isButton = e.target.closest('a, button');
    if (!isButton && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-secondary/50 transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Enhanced animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Enhanced floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* Main Content Container */}
      <div className={`${image ? "flex flex-col md:flex-row" : "p-8"} w-full relative z-10`}>
        {/* Enhanced Project Image with better hover effects */}
        {image && (
          <div className="w-full md:w-1/3 p-6 md:p-8 flex items-center justify-center relative flex-shrink-0">
            <div className="relative group/image">
              {/* Multi-layer glowing ring effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-spin-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              
              {/* Image container with enhanced effects */}
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={image} 
                  className={`relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border-2 border-transparent group-hover:border-secondary/40 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  alt={imageAlt} 
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Enhanced overlay with multiple effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-external-link-alt text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500 mb-2"></i>
                    <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      View Project
                    </p>
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced Project Details with better animations */}
        <div className={`${image ? "w-full md:w-2/3 p-6 md:p-8" : "relative z-10"} flex flex-col justify-between min-h-0`}>
          {/* Header Section with enhanced styling */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-500 flex-1">
                <span className="hover:underline decoration-secondary decoration-2 underline-offset-4 break-words relative">
                  {title}
                  <i className="fas fa-external-link-alt ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1"></i>
                  {/* Text glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </span>
              </h3>
              <div className="flex-shrink-0">
                <span className="text-xs bg-gradient-to-r from-accent via-secondary to-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap animate-pulse-slow">
                  {date}
                </span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              {typeof description === 'string' ? (
                <p className="group-hover:text-gray-200 transition-colors duration-300">{description}</p>
              ) : (
                <div className="group-hover:text-gray-200 transition-colors duration-300">{description}</div>
              )}
              
              {features && (
                <ul className="list-none mt-4 space-y-3">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      <i className="fas fa-check-circle text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Enhanced Tags and Buttons Section */}
          <div className="space-y-6">
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`text-xs px-3 py-2 rounded-full ${tag.color} border border-white/10 hover:border-secondary/40 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default group-hover:shadow-glow`}
                    style={{
                      animationDelay: `${tagIndex * 50}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            
            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
              {buttons.map((button, buttonIndex) => (
                <a 
                  key={buttonIndex}
                  href={button.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group/button relative px-6 py-3 ${button.style} text-white rounded-xl font-semibold text-sm 
                             shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 flex items-center gap-2 overflow-hidden`}
                  style={{
                    animationDelay: `${buttonIndex * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Enhanced button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <i className={`${button.icon} group-hover/button:rotate-12 transition-transform duration-500 relative z-10`}></i>
                  <span className="relative z-10">{button.text}</span>
                  
                  {/* Button border glow */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover/button:border-secondary/30 transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced corner decorations */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tr-3xl"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default ProjectCard;
