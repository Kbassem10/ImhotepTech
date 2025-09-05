import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Ready to build something amazing?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Whether you need a customer management system, an internal tool, or a web application,
          we can help turn your vision into reality.
        </p>
        <a 
          href="mailto:imhoteptech@outlook.com" 
          className="px-8 py-4 bg-secondary text-primary hover:bg-secondary/90 rounded-full font-bold text-lg 
                     shadow-lg hover:shadow-secondary/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default CTASection;
