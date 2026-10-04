export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI & LLM' | 'Frontend';
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  architecture: {
    client: string;
    backend: string;
    database: string;
    integrations?: string;
    flow: string[];
  };
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  badgeUrl?: string;
  pdfPath?: string;
  skills: string[];
  category: 'Cloud' | 'Database' | 'Programming' | 'Web';
}

export interface DsaStat {
  platform: string;
  username: string;
  problemsSolved: number;
  ranking?: string;
  rating?: number;
  profileUrl: string;
  highlights: string[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  category: 'Java' | 'DSA' | 'Spring Boot' | 'SQL';
  description: string;
  code: string;
  complexity?: {
    time: string;
    space: string;
  };
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  url: string;
}
