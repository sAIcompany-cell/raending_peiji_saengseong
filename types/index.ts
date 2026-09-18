export interface LandingPageSection {
  id: string;
  type: string;
  title: string;
  content: string;
  order: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  result: string;
}

export interface AnalyticsEvent {
  name: string;
  pagePath: string;
  occurredAt: Date;
}

export interface SiteLogo {
  id: string;
  name: string;
  url: string;
}

export interface ResponsiveSetting {
  id: string;
  device: 'mobile' | 'tablet' | 'desktop';
  breakpoint: number;
  description: string;
}

export interface SeoMetadata {
  id: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface CtaButton {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  position: string;
}

export type AnalyticsEventName = 'page_view' | 'cta_click';
