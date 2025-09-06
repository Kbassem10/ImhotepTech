import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extract unique technologies for filtering
  const allTechnologies = [
    ...new Set(
      projects.flatMap((project) =>
        project.tags.map((tag) =>
          tag.name.replace(/[🤖📋🌐👁️🔐📱🛡️📊]/g, "").trim()
        )
      )
    ),
  ];

  const filters = ["all", ...allTechnologies.slice(0, 6)]; // Limit to 6 most common

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.name.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Enhanced Header with more visual elements */}
      <div
        className={`text-center space-y-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationFillMode: 'both' }}
      >
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold relative">
            <span className="text-white">
              Our Projects
            </span>
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-white to-secondary blur-2xl opacity-20 animate-pulse-slow"></div>
          </h2>
          
          {/* Enhanced decorative elements */}
          <div className="absolute -top-4 -right-4 text-3xl animate-bounce-gentle">
            <i className="fas fa-rocket text-accent opacity-70"></i>
          </div>
          <div className="absolute -bottom-2 -left-2 text-2xl animate-float" style={{ animationDelay: "1s" }}>
            <i className="fas fa-star text-secondary opacity-50"></i>
          </div>
          <div className="absolute top-1/2 -left-6 text-xl animate-float" style={{ animationDelay: "2s" }}>
            <i className="fas fa-code text-accent/60"></i>
          </div>
          <div className="absolute top-1/4 -right-6 text-lg animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>
            <i className="fas fa-lightbulb text-secondary/60"></i>
          </div>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up animate-stagger-1 leading-relaxed">
          A collection of <span className="text-secondary font-semibold">innovative applications</span> and 
          <span className="text-accent font-semibold"> cutting-edge tools</span> crafted with modern
          technologies to solve real-world problems and drive digital transformation.
        </p>

        {/* Enhanced Filter Buttons with better animations */}
        <div
          className={`flex flex-wrap justify-center gap-3 animate-fade-in-up animate-stagger-2`}
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={() => setHoveredFilter(filter)}
              onMouseLeave={() => setHoveredFilter(null)}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-secondary to-secondary/80 text-primary shadow-lg shadow-secondary/30 animate-glow"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50 hover:border-secondary/30"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                {filter === "all" ? (
                  <>
                    <i className="fas fa-th-large"></i>
                    All Projects
                  </>
                ) : (
                  <>
                    <i className={`fas fa-${filter.toLowerCase().includes('django') ? 'python' : 
                      filter.toLowerCase().includes('react') ? 'react' :
                      filter.toLowerCase().includes('flask') ? 'flask' :
                      filter.toLowerCase().includes('ai') ? 'brain' :
                      filter.toLowerCase().includes('pwa') ? 'mobile-alt' :
                      'code'}`}></i>
                    {filter}
                  </>
                )}
                {activeFilter === filter && (
                  <i className="fas fa-check animate-bounce-gentle"></i>
                )}
              </span>
              
              {/* Hover effect particles */}
              {hoveredFilter === filter && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Projects Counter with stats */}
      <div className={`text-center animate-fade-in-up animate-stagger-3`}>
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-full border border-gray-600/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <i className="fas fa-project-diagram text-secondary animate-pulse"></i>
            <span className="text-gray-300 font-medium">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""} Found
            </span>
          </div>
          
          {activeFilter !== "all" && (
            <>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-filter text-accent"></i>
                <span className="text-gray-400 text-sm">Filtered by: {activeFilter}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Enhanced Projects Grid with staggered animations */}
      <div className="grid grid-cols-1 gap-8 auto-rows-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${activeFilter}`}
            className="animate-zoom-in hover-lift w-full"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "both",
            }}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Enhanced Empty State with more visual appeal */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="text-8xl text-gray-600 mb-4 animate-float">
              <i className="fas fa-search"></i>
            </div>
            <div className="absolute -top-4 -right-4 text-3xl text-yellow-500 animate-bounce-gentle">
              <i className="fas fa-exclamation"></i>
            </div>
            <div className="absolute -bottom-2 -left-2 text-2xl text-accent animate-float" style={{ animationDelay: '1s' }}>
              <i className="fas fa-question"></i>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            No projects found for <span className="text-secondary">"{activeFilter}"</span>
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Don't worry! Try adjusting your filter or explore all our amazing projects.
          </p>
          
          <button
            onClick={() => setActiveFilter("all")}
            className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full font-bold hover:from-secondary/90 hover:to-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-refresh group-hover:rotate-180 transition-transform duration-500"></i>
              Show All Projects
            </span>
          </button>
        </div>
      )}

      {/* Enhanced Loading State */}
      {projects.length === 0 && (
        <div className="text-center py-20">
          <div className="relative inline-block mb-8">
            <div className="text-8xl text-gray-600 mb-4 animate-spin-slow">
              <i className="fas fa-cog"></i>
            </div>
            <div className="absolute inset-0 text-6xl text-secondary/30 animate-pulse">
              <i className="fas fa-cog"></i>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">
            Loading Amazing Projects...
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Please wait while we fetch our latest innovative work and cutting-edge solutions.
          </p>
          
          {/* Loading progress bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
