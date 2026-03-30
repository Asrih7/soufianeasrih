export interface Skill {
  name: string;
  years: string;
  hot?: boolean;
  category: 'Frontend' | 'Mobile' | 'Backend' | 'DevOps' | 'Architecture';
}

export interface Experience {
  id: number;
  company: string;
  logo: string;
  date: string;
  badge: string;
  role: string;
  points: string[];
  tags: string[];
}

export interface NpmPackage {
  type: string;
  title: string;
  description: string;
  image: string;
  links: { label: string; url: string }[];
  tags: string[];
}

export interface Certification {
  image: string;
  name: string;
  org: string;
  description: string;
}

export interface Article {
  coverImage: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  url: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

export type SkillCategory = 'All' | 'Frontend' | 'Mobile' | 'Backend' | 'DevOps' | 'Architecture';
