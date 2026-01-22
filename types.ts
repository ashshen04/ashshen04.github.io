export interface Hotspot {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  label: string;
  description: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
}