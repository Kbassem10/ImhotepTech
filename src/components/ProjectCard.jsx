import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      className="group relative bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-secondary/50 transform hover:-translate-y-2 transition-all duration-500 w-full cursor-pointer"
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

      {/* Main Content Container */}
      <div className={`${image ? "flex flex-col md:flex-row" : "p-8"} w-full`}>
        {/* Project Image with enhanced hover effects */}
        {image && (
          <div className="w-full md:w-1/3 p-6 md:p-8 flex items-center justify-center relative flex-shrink-0">
            <div className="relative group/image">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin-slow"></div>
              
              <img 
                src={image} 
                className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 border-2 border-transparent group-hover:border-secondary/30" 
                alt={imageAlt} 
                loading="lazy"
              />
              
              {/* Overlay with view icon */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-external-link-alt text-white text-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></i>
              </div>
            </div>
          </div>
        )}
        
        {/* Project Details with enhanced animations */}
        <div className={`${image ? "w-full md:w-2/3 p-6 md:p-8" : "relative z-10"} flex flex-col justify-between min-h-0`}>
          {/* Header Section */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-300 flex-1">
                <span className="hover:underline decoration-secondary decoration-2 underline-offset-4 break-words">
                  {title}
                  <i className="fas fa-external-link-alt ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </span>
              </h3>
              <div className="flex-shrink-0">
                <span className="text-xs bg-gradient-to-r from-accent to-secondary text-white px-3 py-1.5 rounded-full font-semibold shadow-lg whitespace-nowrap">
                  {date}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <div className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                <div>{description}</div>
              )}
              
              {features && (
                <ul className="list-none mt-4 space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <i className="fas fa-check-circle text-secondary mt-0.5 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Tags and Buttons Section */}
          <div className="space-y-4">
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
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProjectCard;
