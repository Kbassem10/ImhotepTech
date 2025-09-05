import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: "mailto:imhoteptech@outlook.com",
      icon: "fa fa-envelope fa-lg",
      label: "Email"
    },
    {
      href: "https://www.instagram.com/imhotep_tech?igsh=YXV0Y24xZnNveDQ5",
      icon: "fab fa-instagram fa-lg",
      label: "Instagram",
      external: true
    },
    {
      href: "https://x.com/Imhoteptech1?t=E5JmfSp5WpyZaWkDzILpKw&s=09",
      icon: "fab fa-twitter fa-lg",
      label: "Twitter",
      external: true
    },
    {
      href: "https://github.com/Imhotep-Tech",
      icon: "fab fa-github fa-lg",
      label: "GitHub",
      external: true
    }
  ];

  return (
    <footer className="w-full bg-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="bg-secondary text-primary p-1 rounded mr-2">IT</span>
              <span className="text-xl font-bold text-white">Imhotep Tech</span>
            </div>
            <p className="text-gray-400 mb-4">
              &copy; 2023-2025 Imhotep Tech. All rights reserved.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect with us</h3>
            <div className="flex md:justify-end gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
