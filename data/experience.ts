// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work';
  // type?: 'work' | 'research' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  {
    id: "global-grand-gaming",
    title: "Full Stack Developer",
    company: "Global Grand Gaming",
    location: "Bangalore, India",
    startDate: "July 2025",
    endDate: "Present",
    description:
      "Designing and developing scalable RESTful APIs and backend systems for high-performance Android sports applications. Leading backend optimization, team collaboration, and deployment pipelines for improved reliability and user experience.",
    achievements: [
      "Developed and optimized RESTful APIs ensuring high performance and scalability for real-time sports data systems",
      "Reduced API response times by 35% using PostgreSQL indexing and Redis caching",
      "Led a team of 5 developers, managing sprints, code reviews, and deployments with CI/CD",
      "Collaborated with Android engineers to resolve integration challenges, improving system reliability by 25%",
      "Introduced testing and monitoring pipelines, reducing production incidents by 40%"
    ],
    type: "work"
  },
  {
    id: "artuniverse",
    title: "Python Full Stack Developer",
    company: "Artuniverse",
    location: "Tumkur, India",
    startDate: "August 2023",
    endDate: "July 2024",
    description:
      "Developed and maintained SaaS web applications using Django and React, ensuring cross-browser compatibility, performance, and SEO optimization. Collaborated with product and QA teams to deliver features in Agile environments.",
    achievements: [
      "Built and maintained full-stack SaaS platforms using Django REST Framework and ReactJS",
      "Implemented SEO and performance optimizations, increasing organic traffic by 30%",
      "Integrated modern frontend frameworks (React, TypeScript) with secure, efficient REST APIs",
      "Conducted workshops on clean code and REST design, improving developer productivity by 20%",
      "Awarded 'Top Contributor' for innovation and impactful SaaS development initiatives"
    ],
    type: "work"
  },
  {
    id: "freelancer",
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    startDate: "August 2024",
    endDate: "Present",
    description:
      "Worked as a freelance full stack developer delivering custom web solutions for clients across different domains. Built and deployed full-featured applications using diverse technologies while managing the entire development lifecycle independently.",
    achievements: [
      "Delivered 8+ successful projects across domains like e-commerce, portfolio websites, and SaaS platforms",
      "Worked with technologies including React, Node.js, Django, Next.js, and AWS for scalable deployment",
      "Developed end-to-end solutions with authentication, database integration, and optimized APIs",
      "Collaborated with international clients to design modern, responsive, and secure applications",
      "Strengthened project management, client communication, and full-lifecycle development skills"
    ],
    type: "work"
  }
];
