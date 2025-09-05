import React, { useState, useEffect } from 'react';

const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate the skill level
      const animationTimer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);
      
      return () => clearTimeout(animationTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <i className={`${skill.icon} text-secondary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}></i>
          <span className="text-gray-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-secondary font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 animate-shimmer"></div>
        <div 
          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative z-10`}
          style={{ 
            width: isVisible ? `${animatedLevel}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
