export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  desc: string[];
}

export interface ExpertiseItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  desc: string;
}

export interface CivicItem {
  id: string;
  category: string;
  title: string;
  company: string;
  date: string;
  shortDesc: string;
  desc: string;
}

export interface ProfileData {
  greeting: string;
  leadText: string;
  bodyText: string[];
}

export interface CVItem {
  id: string;
  label: string;
  filename: string;
  category: string;
}

export type SectionId = 'home' | 'profile' | 'leadership' | 'expertise' | 'research' | 'mun' | 'rotaract' | 'civic' | 'academic' | 'cv';
