export interface LandingPageSection {
  id?: string;
  type?: string;
  title?: string;
  content?: string;
  order?: number;
}

export interface Testimonial {
  id?: string;
  quote?: string;
  author?: string;
  result?: string;
}

export interface AnalyticsEvent {
  id?: string;
  name?: string;
  pagePath?: string;
  occurredAt?: string;
}

export interface Logo {
  id: string;
  url: string;
  altText: string;
}

export interface ResponsiveSetting {
  id: string;
  device: "mobile" | "desktop" | "tablet";
  breakpoint: number;
}

export interface SeoMetadata {
  id: string;
  title: string;
  description: string;
  canonicalUrl?: string;
  language?: string;
}

export interface Cta {
  id: string;
  label: string;
  targetUrl: string;
  actionType: "navigate" | "submit";
}

export interface CtaSummary {
  totalClicks: number;
  conversionRate: number;
}
