import { libraries as libraryItems } from './libraries';

const baseProjects = [
    {
      title: "Dastet Al3ab — Offline Party Games Bundle",
      url: "https://dastet-al3ab.vercel.app/",
      date: "July 12, 2026",
      description: "Offline-first PWA party game platform for Sahel hangouts and road trips, featuring card games, trivia, forbidden words, and social challenges.",
      features: [
        "Offline-first PWA with service-worker caching for play without internet.",
        "Git-backed serverless design where games/decks are defined as raw JSON.",
        "DRY state architecture allowing custom game engines to be built in minutes.",
        "Sleek dark-mode aesthetic designed for high readability under low light.",
        "Full Arabic & English localization with dynamic RTL/LTR switching."
      ],
      image: "/dasta.png",
      imageAlt: "Dastet Al3ab App Logo",
      priority: "high",
      featured: true,
      tags: [
        { name: "Next.js", color: "bg-gray-800/50" },
        { name: "React", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PWA", color: "bg-indigo-900/50" },
        { name: "TypeScript", color: "bg-blue-900/50" },
        { name: "Offline-First", color: "bg-green-900/50" }
      ],
      buttons: [
        {
          text: "Play Live",
          url: "https://dastet-al3ab.vercel.app/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "View on GitHub",
          url: "https://github.com/Imhotep-Tech/dastet-al3ab",
          style: "bg-gray-800 hover:bg-gray-700",
          icon: "fab fa-github"
        }
      ]
    },
    {
      title: "Loyalty Program — Full-Stack Web Application",
      url: "https://loyalty.7-cylinders.com/",
      date: "Feb 23, 2026",
      description: "Full-stack loyalty platform for a multi-branch car services company in Egypt, built in two weeks with Django REST Framework and React 19.",
      features: [
        "QR-based point redemption with short-lived codes.",
        "Automated invoice import from an external system into PostgreSQL.",
        "Role-based access and bilingual (Arabic/English) PWA experience."
      ],
      image: null,
      imageAlt: "7CS Loyalty Program Web Application",
      priority: "high",
      featured: true,
      tags: [
        { name: "Django REST Framework", color: "bg-green-900/50" },
        { name: "React 19", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
        { name: "Docker", color: "bg-blue-400/50" },
        { name: "JWT Authentication", color: "bg-yellow-900/50" },
        { name: "PWA", color: "bg-indigo-900/50" },
        { name: "Playwright", color: "bg-purple-900/50" },
      ],
      buttons: [
        {
          text: "View Live",
          url: "https://loyalty.7-cylinders.com/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        }
      ]
    },
    {
      title: "Imhotep Financial Manager",
      url: "https://finance.imhotep-tech.com/",
      date: "June 14, 2026",
      description: (
        <>
          Take control of your finances with <strong>Imhotep Financial Manager v8.2</strong> — a powerful Django, React, and React Native application that offers:
        </>
      ),
      features: [
        "Native Android Mobile App (available on Google Play) & Native-like iOS Web UI",
        "Smarter Google Logins with automatic app redirection",
        "Advanced analytics, transaction filtering by Place, and interactive dashboards",
        "Move Money, Currency Conversion, and automated scheduled transactions",
        "Simplified self-hosting documentation and robust API"
      ],
      image: "/imhotep_finance.png",
      imageAlt: "Imhotep Financial Manager v8.2 App",
      priority: "high",
      featured: true,
      tags: [
        { name: "Django", color: "bg-green-900/50" },
        { name: "React", color: "bg-cyan-900/50" },
        { name: "React Native", color: "bg-cyan-900/50" },
        { name: "Tailwind CSS", color: "bg-pink-900/50" },
        { name: "PostgreSQL", color: "bg-gray-800/50" },
        { name: "Docker", color: "bg-blue-400/50" }
      ],
      buttons: [
        {
          text: "Try Web Live",
          url: "https://finance.imhotep-tech.com/",
          style: "bg-accent hover:bg-accent/80",
          icon: "fas fa-external-link-alt"
        },
        {
          text: "Get on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.imhoteptech.imhotep_finance",
          style: "bg-green-600 hover:bg-green-700",
          icon: "fab fa-google-play"
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
          <span className="font-semibold">The easiest way to host your AI-generated portfolio — no technical skills required.</span>{' '}
          Generate your portfolio with ChatGPT, Claude, or any AI assistant, paste the code, and get a live link instantly.
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
      description: "AI-powered recipe assistant that turns whatever ingredients you have into ready-to-cook meals, helping reduce food waste and keep cooking fun.",
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
      description: "React-based currency converter backed by the Imhotep Exchange Rates API, with daily updates and a simple, responsive UI for quick checks.",
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
      description: "Clinic management system for appointments, patient records, and prescriptions, with role-based access and basic analytics, built with Django and Tailwind.",
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
      description: "Task manager built with Django, available on web, mobile, and desktop (via TWA and Electron) to keep your to-dos in one place.",
      image: "/imhotep_tasks.png",
      imageAlt: "Imhotep Tasks App",
      priority: "medium",
      tags: [
        { name: "Django", color: "bg-green-900/50" },
        { name: "React Native", color: "bg-cyan-900/50" },
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
      description: "Learning tracker that lets you plan skills, track progress, and get basic AI-powered suggestions for what to learn next.",
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
      title: "The First Program",
      url: "https://kbassem.pythonanywhere.com/login",
      date: "OCT 19, 2023",
      description: "Early Flask app for a clinic, handling basic patient data and doctor operations.",
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

// Map libraries into project-like entries for unified display
const libraryProjects = (libraryItems || []).map((lib) => ({
  title: lib.title,
  url: (lib.buttons && lib.buttons[0] && lib.buttons[0].url) || undefined,
  date: lib.date || null,
  description: lib.description,
  image: null,
  imageAlt: lib.title,
  priority: 'low',
  featured: false,
  isLibrary: true,
  tags: [
    { name: 'Libraries / APIs', color: 'bg-indigo-900/50' },
    ...(lib.tags || [])
  ],
  buttons: lib.buttons || []
}));

const projects = [...baseProjects, ...libraryProjects];

export default projects;
