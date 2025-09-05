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
      name: "Twitter/X",
      url: "https://x.com/kbassem10",
      icon: "fab fa-twitter",
      color: "bg-black hover:bg-gray-900"
    }
  ]
};

const technicalSkills = [
  { name: "Flask", level: 95, color: "from-green-500 to-green-400", icon: "fas fa-flask" },
  { name: "Python", level: 85, color: "from-blue-500 to-blue-400", icon: "fab fa-python" },
  { name: "HTML/CSS", level: 75, color: "from-yellow-500 to-yellow-400", icon: "fab fa-html5" },
  { name: "Django", level: 75, color: "from-gray-500 to-gray-400", icon: "fas fa-leaf" },
  { name: "React", level: 70, color: "from-cyan-500 to-blue-400", icon: "fab fa-react" }
];

const additionalTechnologies = [
  { name: "SQLite3", icon: "fas fa-database" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "C/C++", icon: "fas fa-code" },
  { name: "Data Structures", icon: "fas fa-sitemap" },
  { name: "Algorithms", icon: "fas fa-project-diagram" },
  { name: "Git/GitHub", icon: "fab fa-git-alt" }
];

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
  technicalSkills,
  additionalTechnologies,
  notableProjects,
  education,
  vision,
  navigationLinks
};
