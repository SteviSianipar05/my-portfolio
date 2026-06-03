export interface Organization {
  name: string;
  role: string;
  date: string;
  desc: string;
}

export interface Certificate {
  title: string;
  platform: string;
  date: string;
  file: string;
}

export interface Project {
  title: string;
  desc: string;
  impact: string;
  images: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface SkillDetail {
  [key: string]: string[];
}
