const projects = [
    {
      title: "Imhotep Financial Manager",
      url: "https://imhotep-finance.vercel.app/",
      date: "Aug 31, 2025",
      description: (
        <>
          Take control of your finances with <strong>Imhotep Financial Manager v7</strong>! Built with Django & React, it offers:
        </>
      ),
      features: [
        "Smart category suggestions 🧠",
        "Advanced analytics & interactive dashboards 📊",
        "Automated scheduled transactions 🗓️",
        "CSV export & performance optimizations 🚀",
        "Fully responsive, secure, and modern UI"
      ],
      image: "/imhotep_finance.png",
      imageAlt: "Imhotep Financial Manager v7 App",
      priority: "high",
      featured: true,
      tags: [
        { name: "Django", color: "bg-green-900/50" },
        { name: "React", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
        { name: "Docker", color: "bg-blue-400/50" }
      ],
      buttons: [
        {
          text: "Try Live",
          url: "https://imhotep-finance.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/imhotep_finance",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Pharaohfolio - Simple Hosting for Portfolios",
      url: "https://pharaohfolio.vercel.app/",
      date: "August 12, 2025",
      description: (
        <>
          <span className="font-semibold">The easiest way to host your AI-generated portfolio — no technical skills required.</span><br />
          Generate your portfolio with ChatGPT, Claude, or any AI assistant, paste the code, and get your live link instantly!
        </>
      ),
      image: "/PharaohfolioLogo.png",
      imageAlt: "Pharaohfolio - Simple hosting for single-page portfolios",
      priority: "high",
      featured: true,
      tags: [
        { name: "AI Code Support", color: "bg-green-900/50" },
        { name: "Safe Execution", color: "bg-gray-800/50" },
        { name: "Django", color: "bg-green-900/50" },
        { name: "React", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
        { name: "Docker", color: "bg-blue-400/50" }
      ],
      buttons: [
        {
          text: "Try Pharaohfolio Live",
          url: "https://pharaohfolio.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/Pharaohfolio",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "ImhotepChef - AI-Powered Culinary Companion",
      url: "https://imhotep-chef.vercel.app/",
      date: "August 7, 2025",
      description: "Transform your everyday ingredients into extraordinary meals with the power of artificial intelligence. ImhotepChef generates personalized recipes based on whatever ingredients you have available, helping you reduce food waste and discover new culinary adventures.",
      image: "/imhotepchef.png",
      imageAlt: "ImhotepChef - AI-Powered Culinary Companion",
      priority: "medium",
      featured: true,
      tags: [
        { name: "AI Recipe Generation", color: "bg-orange-900/50" },
        { name: "Google Gemini AI", color: "bg-red-900/50" },
        { name: "Django", color: "bg-green-900/50" },
        { name: "React", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
        { name: "Docker", color: "bg-blue-400/50" }
      ],
      buttons: [
        {
          text: "Try ImhotepChef Live",
          url: "https://imhotep-chef.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/ImhotepChef",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Imhotep Currency Converter",
      url: "https://imhotepcc.vercel.app/",
      date: "July 4, 2025",
      description: "A powerful React-based currency conversion tool with real-time exchange rates powered by the Imhotep Exchange Rates API. Features daily rate updates and a modern, responsive interface perfect for travelers and business owners who need accurate, up-to-date currency information.",
      image: "/icc.png",
      imageAlt: "Imhotep Currency Converter",
      priority: "medium",
      tags: [
        { name: "React", color: "bg-cyan-900/50" },
        { name: "Custom API", color: "bg-green-900/50" },
        { name: "Daily Updates", color: "bg-blue-900/50" },
        { name: "Real-time Rates", color: "bg-purple-900/50" }
      ],
      buttons: [
        {
          text: "Visit Now",
          url: "https://imhotepcc.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/ImhotepCurrency",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Imhotep Smart Clinic",
      url: "https://imhotepsmartclinic.pythonanywhere.com/",
      date: "April 24, 2025",
      description: "A comprehensive medical practice management system with digital records, appointment scheduling, and prescription generation. Features role-based access control, detailed patient records, and practice analytics. Built with Django and TailwindCSS, it includes multilingual support.",
      image: "https://imhotepsmartclinic.pythonanywhere.com/static/imhotep_clinic.png",
      imageAlt: "Imhotep Smart Clinic App",
      priority: "medium",
      tags: [
        { name: "Patient Records", color: "bg-green-900/50" },
        { name: "Prescriptions", color: "bg-blue-900/50" },
        { name: "Analytics", color: "bg-purple-900/50" },
        { name: "PWA", color: "bg-yellow-900/50" },
        { name: "Django", color: "bg-green-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
      ],
      buttons: [
        {
          text: "Visit Now",
          url: "https://imhotepsmartclinic.pythonanywhere.com/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/imhotep_smart_clinic",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Imhotep Tasks",
      url: "https://imhoteptasks.pythonanywhere.com/",
      date: "March 17, 2025",
      description: "Todo List App designed to help users stay organized and productive. Built with Django, the app offers a seamless experience across web, mobile and desktop platforms (via TWA and Electron)",
      image: "/imhotep_tasks.png",
      imageAlt: "Imhotep Tasks App",
      priority: "medium",
      tags: [
        { name: "Django", color: "bg-green-900/50" },
        { name: "Cross-platform", color: "bg-blue-900/50" },
        { name: "PWA", color: "bg-purple-900/50" },
        { name: "Electron", color: "bg-cyan-900/50" }
      ],
      buttons: [
        {
          text: "Visit Now",
          url: "https://imhotep-tasks.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/imhotep_tasks",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Imhotep Skills",
      url: "https://imhotepskills.pythonanywhere.com/",
      date: "February 12, 2025",
      description: "Unlock your full potential with Imhotep Skills! Manage your learning journey with personalized skill suggestions, track your progress, and create your own skill plans. Stay ahead in your career with AI-powered insights.",
      image: "/imhotep_skills.jpeg",
      imageAlt: "Imhotep Skills App",
      priority: "medium",
      tags: [
        { name: "Learning", color: "bg-green-900/50" },
        { name: "AI Insights", color: "bg-orange-900/50" },
        { name: "Progress Tracking", color: "bg-blue-900/50" },
        { name: "Skill Plans", color: "bg-purple-900/50" },
        { name: "Flask", color: "bg-gray-800/50" },
      ],
      buttons: [
        {
          text: "Visit Now",
          url: "https://imhotepskills.pythonanywhere.com/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        }
      ]
    },
    {
      title: "Imhotep Clinic",
      url: "https://www.fiverr.com/kbassem/a-webapp-for-a-small-clinic",
      date: "DEC 31, 2023",
      description: "Are you overwhelmed with clinic paperwork? Imhotep Clinic, built with Flask, is a custom web app to help clinics manage patient records, appointments, and doctor information efficiently. Features include patient management, doctor pricing control, and secure data handling with role-based access.",
      image: "/imhotepclinic.png",
      imageAlt: "Imhotep Clinic Web App",
      priority: "medium",
      tags: [
        { name: "Flask", color: "bg-red-900/50" },
        { name: "Patient Management", color: "bg-green-900/50" },
        { name: "Appointments", color: "bg-blue-900/50" },
        { name: "Role-based Access", color: "bg-purple-900/50" }
      ],
      buttons: [
        {
          text: "Learn More",
          url: "https://www.fiverr.com/kbassem/a-webapp-for-a-small-clinic",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-info-circle"
        }
      ]
    },
    {
      title: "The First Program",
      url: "https://kbassem.pythonanywhere.com/login",
      date: "OCT 19, 2023",
      description: "This was a Flask application for a clinic, managing patient data and doctor operations with ease.",
      image: null, // No image for this project
      imageAlt: "The First Program",
      priority: "low",
      tags: [
        { name: "Flask", color: "bg-red-900/50" },
        { name: "Clinic Management", color: "bg-green-900/50" },
        { name: "Patient Data", color: "bg-blue-900/50" }
      ],
      buttons: [
        {
          text: "View Project",
          url: "https://kbassem.pythonanywhere.com/login",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        }
      ]
    }
  ];

export default projects;