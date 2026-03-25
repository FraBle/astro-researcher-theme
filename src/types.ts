export interface NavItem {
  name: string;
  url: string;
}

export interface FooterConfig {
  text: string;
  url: string;
  blank?: boolean;
}

export interface ConsentItem {
  title: string;
  description: string;
  isFunctional: boolean;
  script: string;
}

export interface ConsentConfig {
  items: ConsentItem[];
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
  googleAnalyticsId?: string;
  nav: NavItem[];
  footer?: FooterConfig;
  consent?: ConsentConfig;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
}
