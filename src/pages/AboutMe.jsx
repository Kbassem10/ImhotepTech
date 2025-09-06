import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkillBar from '../components/SkillBar';
import ProjectShowcase from '../components/ProjectShowcase';
import {
  founderInfo,
  technicalSkills,
  additionalTechnologies,
  notableProjects,
  education,
  vision,
  navigationLinks
} from '../data/aboutMe';

const AboutMe = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-sans">
      <Navbar currentPage="about-me" />
      
      {/* Enhanced Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 w-full overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Additional floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 w-full">
          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Profile Image */}
            <div className="md:w-1/3 animate-fade-in-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-full blur-lg opacity-30 transform -translate-y-2 translate-x-2 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-md opacity-20 animate-spin-slow"></div>
                <img 
                  src={founderInfo.image} 
                  className="w-64 h-64 object-cover rounded-full border-4 border-secondary shadow-xl relative group-hover:scale-105 group-hover:rotate-2 transition-all duration-500" 
                  alt={`${founderInfo.name}, founder of Imhotep Tech`}
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full border-2 border-secondary animate-ping opacity-20"></div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="md:w-2/3 text-center md:text-left animate-fade-in-right animate-stagger-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                {founderInfo.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-300">
                {founderInfo.title}
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {founderInfo.socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group/social px-4 py-2 ${social.color} text-white rounded-lg font-medium text-sm 
                               shadow-md transition-all duration-300 flex items-center gap-2 hover-lift`}
                  >
                    <i className={`${social.icon} group-hover/social:rotate-12 transition-transform duration-300`}></i>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced wave separator with gradient */}
        <div className="relative h-32 w-full">
          <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#1a202c" stopOpacity="1"/>
                <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path fill="url(#aboutWaveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          
          {/* Floating elements in wave area */}
          <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-dark">
        <div className="container mx-auto px-4 py-16 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* About & Contact Section */}
            <div className="lg:col-span-4 space-y-6">
              {/* About Card */}
              <div className={`group bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-700 relative overflow-hidden hover-lift hover-glow ${isVisible ? 'animate-fade-in-left animate-stagger-3' : 'opacity-0'}`}>
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-3 relative z-10">
                  <i className="fas fa-user animate-bounce-gentle"></i>
                  About Me
                </h2>
                
                <div className="space-y-4 relative z-10">
                  {founderInfo.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Contact Info */}
              <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-700 hover-lift ${isVisible ? 'animate-fade-in-left animate-stagger-4' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-3">
                  <i className="fas fa-address-card animate-pulse"></i>
                  Contact Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group/contact">
                    <i className="fas fa-envelope text-accent group-hover/contact:scale-110 transition-transform duration-300"></i>
                    <a href={`mailto:${founderInfo.contact.email}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {founderInfo.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 group/contact">
                    <i className="fas fa-map-marker-alt text-accent group-hover/contact:scale-110 transition-transform duration-300"></i>
                    <span className="text-gray-300">{founderInfo.contact.location}</span>
                  </li>
                  <li className="flex items-center gap-3 group/contact">
                    <i className="fas fa-graduation-cap text-accent group-hover/contact:scale-110 transition-transform duration-300"></i>
                    <span className="text-gray-300">{founderInfo.contact.university}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills & Experience Section */}
            <div className="lg:col-span-8 space-y-12">
              <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-stagger-5' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Skills & Experience</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Technical expertise and professional background
                </p>
              </div>
              
              {/* Technical Skills */}
              <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-500 hover-lift ${isVisible ? 'animate-fade-in-up animate-stagger-6' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <i className="fas fa-code text-secondary animate-pulse"></i>
                  Technical Expertise
                </h3>
                
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
                
                {/* Additional Technologies */}
                <h4 className="text-lg font-semibold mt-8 mb-4 text-white flex items-center gap-3">
                  <i className="fas fa-tools text-accent"></i>
                  Additional Technologies
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {additionalTechnologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="group/tech px-3 py-2 bg-primary/50 rounded-lg text-sm flex items-center gap-2 hover:bg-primary/70 transition-all duration-300 hover-lift"
                    >
                      <i className={`${tech.icon} text-accent group-hover/tech:scale-110 group-hover/tech:rotate-12 transition-all duration-300`}></i>
                      <span className="group-hover/tech:text-secondary transition-colors duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Notable Projects */}
              <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-500 hover-lift ${isVisible ? 'animate-fade-in-up animate-stagger-7' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <i className="fas fa-project-diagram text-secondary animate-bounce-gentle"></i>
                  Notable Projects
                </h3>

                {notableProjects.map((project, index) => (
                  <ProjectShowcase key={index} project={project} index={index} />
                ))}

                {/* Navigation Buttons */}
                <div className="mt-8 border-t border-gray-700 pt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-3">
                    <i className="fas fa-compass text-accent"></i>
                    Explore More
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {navigationLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="group/nav px-5 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium 
                                   shadow-md transition-all duration-300 flex items-center gap-2 hover-lift"
                      >
                        <i className={`${link.icon} text-secondary group-hover/nav:rotate-12 group-hover/nav:scale-110 transition-all duration-300`}></i>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-500 hover-lift ${isVisible ? 'animate-fade-in-up animate-stagger-8' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <i className="fas fa-lightbulb text-secondary animate-pulse"></i>
                  {vision.title}
                </h3>
                <div className="space-y-4">
                  {vision.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gradient-to-r from-primary to-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-white animate-fade-in-up">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-700 hover:border-secondary/50 transition-all duration-500 hover-lift animate-zoom-in"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <i className={`${edu.icon} text-4xl text-secondary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                  {edu.title}
                </h3>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full shadow-2xl hover:shadow-glow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-bounce-gentle overflow-hidden"
          aria-label="Scroll to top"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          {/* Button content */}
          <i className="fas fa-arrow-up text-lg relative z-10 group-hover:scale-110 transition-transform duration-300"></i>
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300 animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </div>
        </button>
      )}
    </div>
  );
};

export default AboutMe;
