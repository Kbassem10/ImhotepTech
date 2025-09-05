import React, { useState } from 'react';

const ProjectShowcase = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="mb-10 border-l-4 border-accent pl-6 relative group animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      )}

      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-secondary transition-colors duration-300 mb-2">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-secondary decoration-2 underline-offset-4">
          {project.title}
          <i className="fas fa-external-link-alt ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
        </a>
      </h4>
      
      <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
        <i className="fas fa-calendar-alt text-accent"></i>
        {project.date}
      </p>
      
      <div className="text-gray-300 mb-4 leading-relaxed">
        <p>{project.description}</p>
        
        {project.features && (
          <ul className="list-none mt-3 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <i className="fas fa-check-circle text-secondary mt-0.5 flex-shrink-0"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {project.quote && (
          <p className="italic text-secondary/80 mt-3 text-sm">"{project.quote}"</p>
        )}
      </div>
      
      {/* Tags */}
      <div className="space-y-2 mb-4">
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className={`text-xs px-2 py-1 rounded-full ${tag.color} border border-white/10 hover:border-secondary/30 hover:scale-105 transition-all duration-200`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
        
        {project.techTags && (
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tag, idx) => (
              <span 
                key={idx}
                className={`text-xs px-2 py-1 rounded-full ${tag.color} border border-white/10 hover:border-secondary/30 hover:scale-105 transition-all duration-200`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {project.buttons.map((button, idx) => (
          <a 
            key={idx}
            href={button.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <i className={`${button.icon} group-hover:rotate-12 transition-transform duration-300`}></i>
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
