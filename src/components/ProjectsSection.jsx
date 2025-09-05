import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Enhanced Header */}
      <div
        className={`text-center space-y-6 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent animate-shimmer">
            Our Projects
          </h2>
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce-gentle">
            <i className="fas fa-rocket text-accent opacity-60"></i>
          </div>
          <div className="absolute -bottom-1 -left-1 text-lg animate-float" style={{ animationDelay: "1s" }}>
            <i className="fas fa-star text-secondary opacity-40"></i>
          </div>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
          A collection of innovative applications and tools crafted with modern
          technologies to solve real-world problems.
        </p>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-2 animate-fade-in-up animate-stagger-2`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-lift ${
                activeFilter === filter
                  ? "bg-secondary text-primary shadow-lg shadow-secondary/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
              {activeFilter === filter && (
                <i className="fas fa-check ml-2 animate-bounce-gentle"></i>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Counter */}
      <div className={`text-center animate-fade-in-up animate-stagger-4`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-full border border-gray-700/50">
          <i className="fas fa-project-diagram text-secondary animate-pulse"></i>
          <span className="text-gray-300">
            {filteredProjects.length} Project
            {filteredProjects.length !== 1 ? "s" : ""} Found
          </span>
        </div>
      </div>

      {/* Projects Grid - Fixed Layout */}
      <div className="grid grid-cols-1 gap-8 auto-rows-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.title}-${activeFilter}`}
            className="animate-zoom-in hover-lift w-full"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="text-6xl text-gray-600 mb-4 animate-float">
              <i className="fas fa-search"></i>
            </div>
            <div className="absolute -top-2 -right-2 text-2xl text-yellow-500 animate-bounce-gentle">
              <i className="fas fa-exclamation"></i>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            No projects found for "{activeFilter}"
          </h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your filter or view all projects.
          </p>
          <button
            onClick={() => setActiveFilter("all")}
            className="px-6 py-2 bg-secondary text-primary rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 hover-lift"
          >
            <i className="fas fa-refresh mr-2"></i>
            Show All Projects
          </button>
        </div>
      )}

      {/* Loading State for Initial Projects */}
      {projects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl text-gray-600 mb-4 animate-spin-slow">
            <i className="fas fa-cog"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            Loading Projects...
          </h3>
          <p className="text-gray-500">
            Please wait while we fetch our latest work.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
