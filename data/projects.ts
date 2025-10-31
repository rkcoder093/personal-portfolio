export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    "id": "3d-property-explorer",
    "title": "3D Property Explorer",
    "description": "A 3D property visualization tool for exploring multi-block residential buildings.",
    "longDescription": "Built a React and Three.js-based 3D property visualization tool allowing users to explore multi-block residential buildings interactively. Implemented raycasting for flat selection, dynamic CSS2DRenderer banners, and optimized asset pipelines. Developed a Django REST backend secured with JWT and API key validation for safe data access, improving system reliability and scalability.",
    "technologies": [
      "React",
      "Three.js",
      "Django",
      "REST API",
      "JWT",
      "CSS2DRenderer"
    ],
    "achievements": [
      "Implemented secure and scalable backend APIs with JWT and API key validation",
      "Improved system reliability and scalability through optimized asset pipelines",
      "Enabled real-time interactive 3D visualization with raycasting and dynamic labels"
    ],
    "image": "/images/projects/3d-property-explorer/preview.jpg",
    "github": "",
    "liveUrl": "",
    "featured": true
  },
  {
    "id": "ecommerce-website",
    "title": "E-Commerce Website",
    "description": "A modern, SEO-optimized e-commerce platform with secure order management and payments.",
    "longDescription": "Developed a high-performance, SEO-optimized e-commerce platform using Next.js and React for responsive front-end design. Integrated PHP-based backend APIs for order management, secure payments, and inventory tracking. Enhanced customer experience with optimized loading times and end-to-end encryption for data protection.",
    "technologies": [
      "Next.js",
      "React",
      "PHP",
      "MySQL",
      "SEO",
      "Payment Gateway"
    ],
    "achievements": [
      "Boosted page performance and SEO ranking for faster customer acquisition",
      "Implemented secure backend API for transactions and order management",
      "Enhanced UX with responsive design and optimized data encryption"
    ],
    "image": "/images/projects/ecommerce/ecommerce.jpg",
    "github": "",
    "liveUrl": "",
    "featured": true
  },
  {
    "id": "portfolio-website",
    "title": "Portfolio Website",
    "description": "A personal portfolio built with React to showcase projects and experience.",
    "longDescription": "Created a responsive portfolio website using React, featuring modular components, smooth navigation, and modern UI with CSS-in-JS. Showcased professional projects and experience through interactive design, boosting online visibility and personal branding.",
    "technologies": [
      "React",
      "CSS-in-JS",
      "HTML5",
      "JavaScript"
    ],
    "achievements": [
      "Improved personal branding and visibility with modern interactive UI",
      "Built modular components for easy scalability and maintenance",
      "Enhanced user experience with smooth animations and navigation"
    ],
    "image": "/images/projects/portfolio/portfolio.jpg",
    "github": "https://github.com/rkcoder093",
    "liveUrl": "https://devassist360.xyz/portfolio/",
    "featured": true
  },
  {
    "id": "online-ide",
    "title": "Online IDE",
    "description": "Web-based code editor supporting multiple languages.",
    "longDescription": "Developed an online IDE that allows users to write, compile, and execute code in the browser. Implemented syntax highlighting, real-time output display, and multi-language support using web workers for isolated execution. Designed a clean UI with responsive layouts for improved accessibility.",
    "technologies": [
      "PHP",
      "JavaScript",
      "Html5",
      "CSS",
    ],
    "achievements": [
      "Enabled browser-based code execution with multi-language support",
      "Improved code editing experience with syntax highlighting and auto-completion",
      "Built scalable backend for real-time code execution and output display"
    ],
    "image": "/images/projects/online-ide/online-ide.jpg",
    "github": "",
    "liveUrl": "",
    "featured": false
  },
  {
    "id": "social-media-application",
    "title": "Social Media Application",
    "description": "A social platform built while learning new full-stack concepts.",
    "longDescription": "Created a social media web app to practice new technologies and architectures. Implemented features like user authentication, post creation, likes, and comments using React and Node.js. Focused on modular design, reusable components, and RESTful API structure for scalability.",
    "technologies": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API"
    ],
    "achievements": [
      "Built core social features like posting, commenting, and liking content",
      "Implemented secure user authentication and session handling",
      "Designed reusable components and modular backend for scalability"
    ],
    "image": "/images/projects/social-media/social-media.jpg",
    "github": "",
    "liveUrl": "",
    "featured": false
  },
    {
    id: "algo-trading-bot",
    title: "Algorithmic Trading Bot",
    description: "An automated stock trading bot using Python and Streamlit for visualization.",
    longDescription:
      "Developed an intelligent algorithmic trading bot capable of executing stock trades based on real-time market indicators and historical data patterns. Utilized Python libraries such as NumPy, pandas, and matplotlib for data processing and visualization, while Streamlit was used to create an interactive dashboard for live monitoring and analysis. The system integrates performance metrics, risk management parameters, and trade history visualization to support better decision-making.",
    technologies: ["Python", "NumPy", "pandas", "matplotlib", "Streamlit", "APIs"],
    achievements: [
      "Built a data-driven trading engine capable of analyzing market signals and executing trades autonomously",
      "Integrated Streamlit dashboard for real-time visualization of trade metrics, performance, and predictions",
      "Applied statistical models using NumPy and pandas to identify profitable trends from historical data",
      "Enhanced decision-making efficiency by visualizing price patterns and portfolio performance with matplotlib",
      "Improved trading accuracy through backtesting and dynamic risk management techniques"
    ],
    image: "/images/projects/algo-trading/algo-trading.jpg",
    github: "",
    liveUrl: "",
    featured: false
  }
];