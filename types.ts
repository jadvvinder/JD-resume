
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface CompetencyGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  experience: ExperienceItem[];
  competencies: CompetencyGroup[];
  tools: string[];
  certifications: string[];
  education: {
    school: string;
    degree: string;
    period: string;
  };
}
