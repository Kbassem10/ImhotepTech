import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position to show/hide scroll-to-top button
  useEffect(() => {
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
    <>
      <SEOHelmet 
        title="Imhotep Tech - Custom Software Development & Web Applications | Egypt"
        description="Leading software development company in Egypt. Custom web applications, Python/Django development, React solutions. 15+ successful projects delivered. Contact us for your business automation needs."
        keywords="custom software development, web application development, Egypt software company, Django development, React development, Python developer Egypt, business automation, clinic software, financial management app, Imhotep Tech"
        canonical="https://imhoteptech.vercel.app/"
      />
      <div className="w-full font-sans">
        <Navbar currentPage="home" />
        <Hero />
        
        {/* Main Content */}
        <div className="w-full bg-dark">
          <div className="container mx-auto px-4 py-16 max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <AboutSection />
              <ProjectsSection />
            </div>
          </div>
        </div>
        
        <CTASection />
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-secondary text-primary rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 hover-lift animate-bounce-gentle"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
