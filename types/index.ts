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
  name?: string;
  pagePath?: string;
  occurredAt?: string;
}
