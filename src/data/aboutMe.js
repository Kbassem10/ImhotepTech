const founderInfo = {
  name: "Karim Bassem Joseph",
  title: "Software Developer & Founder of Imhotep Tech",
  image: "/karim.jpg",
  bio: [
    "Software developer specializing in Python web frameworks and full-stack development. Computer Science student at Nile University with expertise in creating efficient, scalable applications for businesses of all sizes.",
    "Founder of Imhotep Tech, focused on delivering accessible technology solutions through custom software, APIs, and libraries that solve real business challenges."
  ],
  contact: {
    email: "k.bassem2397@nu.edu.eg",
    location: "Cairo, Egypt",
    university: "Nile University (NU)"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karimbassem",
      icon: "fab fa-linkedin",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/kbassem10",
      icon: "fab fa-github",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      name: "X",
      url: "https://x.com/kbassem10",
      icon: "fab fa-x-twitter",
      color: "bg-black hover:bg-gray-900"
    }
  ]
};

const techStackCategories = [
  {
    id: "backend",
    category: "Backend & APIs",
    icon: "fas fa-server",
    tag: "Core Engineering",
    description: "Architecting resilient APIs, ORM data layers, and high-performance server logic.",
    skills: [
      { name: "Python", icon: "fab fa-python", role: "Primary Language", highlight: "Core Stack" },
      { name: "Django", icon: "fas fa-leaf", role: "Web Framework & ORM", highlight: "Production Backend" },
      { name: "Flask", icon: "fas fa-flask", role: "Microservices & APIs", highlight: "REST Services" },
      { name: "RESTful APIs", icon: "fas fa-network-wired", role: "High-Throughput Endpoints", highlight: "Integration" },
    ]
  },
  {
    id: "frontend",
    category: "Frontend & Mobile",
    icon: "fas fa-laptop-code",
    tag: "User Experience",
    description: "Crafting fluid responsive web apps, cross-platform mobile apps, and offline-first PWAs.",
    skills: [
      { name: "React", icon: "fab fa-react", role: "Modern Component Architecture", highlight: "Interactive SPA" },
      { name: "React Native", icon: "fas fa-mobile-screen-button", role: "Cross-Platform Mobile Apps", highlight: "iOS & Android" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js-square", role: "Client Execution & Async Logic", highlight: "Core Web" },
      { name: "Tailwind CSS", icon: "fas fa-wind", role: "Modern Design Systems & Tokens", highlight: "Utility-First" },
      { name: "PWA", icon: "fas fa-mobile-screen", role: "Progressive Web Apps", highlight: "Offline-First" }
    ]
  },
  {
    id: "data",
    category: "Databases & Storage",
    icon: "fas fa-database",
    tag: "Data Modeling",
    description: "Structured relational models, query performance, and transactional safety.",
    skills: [
      { name: "PostgreSQL", icon: "fas fa-database", role: "Enterprise Relational Database", highlight: "Production DB" },
      { name: "SQLite3", icon: "fas fa-database", role: "Embedded & Fast Data Storage", highlight: "Reliable" },
      { name: "Data Modeling", icon: "fas fa-diagram-project", role: "Schema Design & Migrations", highlight: "Normalized" },
    ]
  },
  {
    id: "devops",
    category: "DevOps & Core CS",
    icon: "fas fa-gears",
    tag: "Infrastructure & Algorithms",
    description: "Reproducible container environments, version control, and sound computer science algorithms.",
    skills: [
      { name: "Docker", icon: "fab fa-docker", role: "Containerized Deployments", highlight: "Isolation" },
      { name: "Git & GitHub", icon: "fab fa-git-alt", role: "CI/CD & Source Control", highlight: "Workflow" },
      { name: "Algorithms & CS", icon: "fas fa-brain", role: "Minimax AI & Data Structures", highlight: "Academic CS" },
      { name: "C / C++", icon: "fas fa-code", role: "Systems Programming Foundations", highlight: "Performance" }
    ]
  }
];

// Flat list for any legacy lookups
const technicalSkills = techStackCategories.flatMap(c => c.skills);
const additionalTechnologies = techStackCategories.find(c => c.id === 'devops')?.skills || [];

const notableProjects = [
  {
    title: "Imhotep Financial Manager v7",
    url: "https://imhotep-finance.vercel.app/",
    date: "August 31, 2025",
    description: "Take control of your finances with Imhotep Financial Manager v7! Built with Django & React, it offers:",
    features: [
      "Smart category suggestions 🧠",
      "Advanced analytics & interactive dashboards 📊",
      "Automated scheduled transactions 🗓️",
      "CSV export & performance optimizations 🚀",
      "Fully responsive, secure, and modern UI"
    ],
    tags: [
      { name: "Django", color: "bg-green-900/50" },
      { name: "React", color: "bg-cyan-900/50" },
      { name: "Tailwind CSS", color: "bg-pink-900/50" },
      { name: "PostgreSQL", color: "bg-gray-800/50" },
      { name: "Docker", color: "bg-blue-400/50" }
    ],
    buttons: [
      { text: "Try It Live", url: "https://imhotep-finance.vercel.app/", icon: "fas fa-external-link-alt" },
      { text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.imhoteptech.imhotep_finance", icon: "fab fa-google-play" },
      { text: "View on GitHub", url: "https://github.com/Imhotep-Tech/imhotep_finance", icon: "fab fa-github" }
    ]
  },
  {
    title: "Pharaohfolio - Simple Hosting for Portfolios",
    url: "https://pharaohfolio.vercel.app/",
    date: "August 12, 2025",
    description: "The easiest way to host your AI-generated portfolio — no technical skills required. Generate your portfolio with ChatGPT, Claude, or any AI assistant, paste the code, and get your live link instantly!",
    quote: "Democratizing web hosting, one portfolio at a time!",
    tags: [
      { name: "🤖 AI Code Support", color: "bg-green-900/50" },
      { name: "📋 Paste & Deploy", color: "bg-blue-900/50" },
      { name: "🌐 Instant Hosting", color: "bg-cyan-900/50" },
      { name: "👁️ Live Preview", color: "bg-purple-900/50" },
      { name: "🔐 Secure Auth", color: "bg-yellow-900/50" },
      { name: "📱 Mobile-Optimized", color: "bg-pink-900/50" },
      { name: "🛡️ Safe Execution", color: "bg-gray-800/50" },
      { name: "📊 Analytics", color: "bg-indigo-900/50" }
    ],
    techTags: [
      { name: "Django", color: "bg-green-900/50" },
      { name: "React 19", color: "bg-blue-900/50" },
      { name: "PostgreSQL", color: "bg-cyan-900/50" },
      { name: "Docker", color: "bg-blue-400/50" },
      { name: "Tailwind CSS", color: "bg-pink-900/50" },
      { name: "Monaco Editor", color: "bg-gray-800/50" }
    ],
    buttons: [
      { text: "Try Pharaohfolio Live", url: "https://pharaohfolio.vercel.app/", icon: "fas fa-external-link-alt" },
      { text: "View on GitHub", url: "https://github.com/Imhotep-Tech/Pharaohfolio", icon: "fab fa-github" }
    ]
  },
  {
    title: "Tic Tac Toe AI Game",
    url: "https://xo-taupe-two.vercel.app/",
    date: "May 2025",
    description: "An unbeatable Tic Tac Toe game featuring advanced AI powered by the minimax algorithm. Challenge yourself against an AI that never loses! Built with Flask backend and interactive JavaScript frontend, offering smooth gameplay and intelligent decision-making that adapts to your every move.",
    tags: [
      { name: "Flask", color: "bg-blue-900/50" },
      { name: "JavaScript", color: "bg-yellow-900/50" },
      { name: "Minimax AI", color: "bg-purple-900/50" },
      { name: "Game Theory", color: "bg-green-900/50" },
      { name: "Interactive UI", color: "bg-red-900/50" }
    ],
    buttons: [
      { text: "Play Game", url: "https://xo-taupe-two.vercel.app/", icon: "fas fa-external-link-alt" },
      { text: "View Code", url: "https://github.com/Kbassem10/XO", icon: "fab fa-github" }
    ]
  },
  {
    title: "Imhotep Smart Clinic",
    url: "https://imhotepsmartclinic.pythonanywhere.com/",
    date: "April 24, 2025",
    description: "A comprehensive medical practice management system with digital records, prescription generation, and practice analytics. Features role-based access control for doctors and staff, multilingual support including Arabic for prescriptions, and works as a Progressive Web App that can be installed on mobile devices.",
    tags: [
      { name: "Django", color: "bg-green-900/50" },
      { name: "Patient Records", color: "bg-blue-900/50" },
      { name: "Prescriptions", color: "bg-purple-900/50" },
      { name: "TailwindCSS", color: "bg-red-900/50" },
      { name: "PWA", color: "bg-yellow-900/50" }
    ],
    buttons: [
      { text: "Visit Project", url: "https://imhotepsmartclinic.pythonanywhere.com/", icon: "fas fa-external-link-alt" }
    ]
  }
];

const education = [
  {
    title: "Computer Science",
    institution: "Nile University (NU)",
    period: "2023 - Present",
    icon: "fas fa-graduation-cap"
  },
  {
    title: "French Education",
    institution: "French School in Egypt",
    period: "Graduated with Distinction",
    icon: "fas fa-school"
  }
];

const vision = {
  title: "My Vision for Imhotep Tech",
  content: [
    "Imhotep Tech aims to democratize access to custom software solutions by making technology accessible to businesses of all sizes. By developing reusable libraries, APIs, and scalable applications, we provide enterprise-grade solutions at a fraction of the traditional cost.",
    "I'm committed to innovation and continuous learning, keeping pace with emerging technologies to deliver cutting-edge solutions that address real business challenges in the Egyptian market and beyond."
  ]
};

const navigationLinks = [
  {
    text: "Web Applications",
    url: "/",
    icon: "fas fa-globe"
  },
  {
    text: "Libraries & APIs",
    url: "/libraries",
    icon: "fas fa-code"
  },
  {
    text: "GitHub",
    url: "https://github.com/kbassem10",
    icon: "fab fa-github",
    external: true
  }
];

export {
  founderInfo,
  techStackCategories,
  technicalSkills,
  additionalTechnologies,
  notableProjects,
  education,
  vision,
  navigationLinks
};
