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
  name?: "page_view" | "cta_click";
  pagePath?: string;
  occurredAt?: string;
}
