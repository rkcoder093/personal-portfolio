// data/skills.ts
export type SkillCategory =
  | 'Languages'
  | 'Frameworks/Libraries'
  | 'Cyber Security'
  | 'Cloud/DevOps'
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    // { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    // { name: 'Dart', category: 'Languages', logoKey: 'dart' },
    // { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
    // { name: 'Solidity', category: 'Languages', logoKey: 'solidity' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
    // { name: 'Rust', category: 'Languages', logoKey: 'rust' },
    // { name: 'Go', category: 'Languages', logoKey: 'go' },
    // { name: 'Ruby', category: 'Languages', logoKey: 'ruby' },
    // { name: 'Swift', category: 'Languages', logoKey: 'swift' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    // { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
    { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
    { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
    // { name: 'Angular', category: 'Frameworks/Libraries', logoKey: 'angularjs' },
    { name: 'Svelte', category: 'Frameworks/Libraries', logoKey: 'svelte' },
    { name: 'Django', category: 'Frameworks/Libraries', logoKey: 'django' },
    { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },
    // { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
    { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'react' },
  ],
  'Cyber Security': [
    { name: 'Network Security', category: 'Cyber Security', logoKey: 'network' },
    { name: 'Penetration Testing', category: 'Cyber Security', logoKey: 'pentest' },
    { name: 'Vulnerability Assessment', category: 'Cyber Security', logoKey: 'vulnerability' },
    { name: 'OWASP Top 10', category: 'Cyber Security', logoKey: 'owasp' },
    { name: 'Ethical Hacking', category: 'Cyber Security', logoKey: 'hacking' },
    { name: 'Burp Suite', category: 'Cyber Security', logoKey: 'burpsuite' },
    { name: 'Wireshark', category: 'Cyber Security', logoKey: 'wireshark' },
    { name: 'Metasploit', category: 'Cyber Security', logoKey: 'metasploit' },
    { name: 'Kali Linux', category: 'Cyber Security', logoKey: 'kalilinux' },
    { name: 'Cryptography', category: 'Cyber Security', logoKey: 'encryption' },
    { name: 'Firewalls & IDS/IPS', category: 'Cyber Security', logoKey: 'firewall' },
    { name: 'Incident Response', category: 'Cyber Security', logoKey: 'incident' }
  ],
  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'GCP', category: 'Cloud/DevOps', logoKey: 'googlecloud' },
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    // { name: 'Kubernetes', category: 'Cloud/DevOps', logoKey: 'kubernetes' },
    // { name: 'Jenkins', category: 'Cloud/DevOps', logoKey: 'jenkins' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts', logoKey: 'github' },
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
    { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
    { name: 'Security', category: 'Concepts', logoKey: 'github' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};