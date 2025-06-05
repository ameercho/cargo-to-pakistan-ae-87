
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  h1: string;
}

export interface NavigationLink {
  name: string;
  href: string;
  description?: string;
}

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  index?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  description: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  showCTA?: boolean;
  backgroundImage?: string;
  className?: string;
}
