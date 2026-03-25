export interface NavItem {
  name: string;
  url: string;
}

export interface FooterConfig {
  text: string;
  url: string;
  blank?: boolean;
}

export interface OpenGraphConfig {
  image: string;
  type?: string;
  locale?: string;
  siteName?: string;
}

export interface TwitterConfig {
  card?: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
  image?: string;
}

export interface ResearcherConfig {
  title: string;
  description: string;
  author: string;
  site?: string;
  favicon?: string;
  nav: NavItem[];
  footer?: FooterConfig;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  socialProfiles?: string[];
}
