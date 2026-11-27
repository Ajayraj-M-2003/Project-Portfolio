export interface ProfileData {
  name: string;
  roleTitle: string;
  headlineTag: string;
  location: string;
  experienceYears: string;
  currentOrganization: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  resumeFileName: string;
  heroIntro: string;
  targetRoles: string[];
  aboutSummary: string[];
  coreFocusAreas: {
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceWorkstream {
  name: string;
  highlights: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  workstreams?: ExperienceWorkstream[];
  highlights?: string[];
  technologies?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  context: string;
  period: string;
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  techStack: string[];
  outcomes: string[];
  externalLink?: {
    label: string;
    url: string;
  };
  disclaimer?: string;
}

export interface ResearchMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ResearchPublication {
  title: string;
  authors: string[];
  highlightedAuthor: string;
  journal: string;
  publisher: string;
  publishedDate: string;
  doi: string;
  doiUrl: string;
  abstractSummary: string;
  backtestNotice: string;
  metrics: ResearchMetric[];
  methodologyHighlights: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  highlights: string[];
}
