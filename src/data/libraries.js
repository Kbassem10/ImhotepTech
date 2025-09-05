const libraries = [
  {
    title: "Imhotep Files Flask",
    description: "This Python library simplifies file upload and deletion operations in web applications using Flask or similar frameworks. Perfect for developers looking to handle file operations efficiently.",
    icon: "fas fa-file-upload",
    category: "Python Library",
    installCommand: "pip install imhotep-files-flask",
    tags: [
      { name: "Python", color: "bg-blue-900/50" },
      { name: "Flask", color: "bg-red-900/50" },
      { name: "File Upload", color: "bg-green-900/50" },
      { name: "Web Framework", color: "bg-purple-900/50" }
    ],
    buttons: [
      {
        text: "View on GitHub",
        url: "https://github.com/Imhotep-Tech/imhotep_files_flask",
        style: "bg-gray-800 hover:bg-gray-700",
        icon: "fab fa-github"
      },
      {
        text: "PyPI Package",
        url: "https://pypi.org/project/imhotep-files-flask/",
        style: "bg-accent hover:bg-accent/80",
        icon: "fab fa-python"
      }
    ]
  },
  {
    title: "Imhotep Mail",
    description: "This is a simple Python library for sending emails. It provides an easy way to configure and send emails from any Python code. Streamline your email sending process with minimal configuration.",
    icon: "fas fa-envelope",
    category: "Python Library",
    installCommand: "pip install imhotep-mail",
    tags: [
      { name: "Python", color: "bg-blue-900/50" },
      { name: "Email", color: "bg-green-900/50" },
      { name: "SMTP", color: "bg-yellow-900/50" },
      { name: "Communication", color: "bg-purple-900/50" }
    ],
    buttons: [
      {
        text: "View on GitHub",
        url: "https://github.com/Imhotep-Tech/imhotep_mail",
        style: "bg-gray-800 hover:bg-gray-700",
        icon: "fab fa-github"
      },
      {
        text: "PyPI Package",
        url: "https://pypi.org/project/imhotep-mail/",
        style: "bg-accent hover:bg-accent/80",
        icon: "fab fa-python"
      }
    ]
  },
  {
    title: "Imhotep Exchange Rates API",
    description: "This API is simply a currency conversion API with unlimited requests, free to use, and updates every 24 hours. Perfect for applications requiring currency conversion functionality.",
    icon: "fas fa-money-bill-wave",
    category: "REST API",
    installCommand: "https://imhotepexchangeratesapi.pythonanywhere.com/api/v1/rates",
    tags: [
      { name: "REST API", color: "bg-green-900/50" },
      { name: "Currency", color: "bg-yellow-900/50" },
      { name: "Exchange Rates", color: "bg-blue-900/50" },
      { name: "Free", color: "bg-purple-900/50" }
    ],
    buttons: [
      {
        text: "View on GitHub",
        url: "https://github.com/Imhotep-Tech/imhotep_currency_rates_api",
        style: "bg-gray-800 hover:bg-gray-700",
        icon: "fab fa-github"
      },
      {
        text: "Visit API",
        url: "https://imhotepexchangeratesapi.pythonanywhere.com/",
        style: "bg-accent hover:bg-accent/80",
        icon: "fas fa-external-link-alt"
      }
    ]
  }
];

const integrationSteps = [
  {
    step: 1,
    title: "Install",
    description: "Use pip to install our Python packages or reference our API endpoints in your application.",
    icon: "fas fa-download"
  },
  {
    step: 2,
    title: "Configure",
    description: "Follow our simple documentation to configure the library or API for your specific use case.",
    icon: "fas fa-cog"
  },
  {
    step: 3,
    title: "Implement",
    description: "Start using the library functions or API endpoints in your code to enhance your application.",
    icon: "fas fa-code"
  }
];

export { libraries, integrationSteps };
