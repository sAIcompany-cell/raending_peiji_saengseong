export type IsoDateTime = string;

export interface LandingPageSection {
  id?: string;
  type?: string;
  title?: string;
  content?: string;
  order?: number;
  createdAt?: IsoDateTime;
}

export interface Testimonial {
  id?: string;
  quote?: string;
  author?: string;
  result?: string;
  createdAt?: IsoDateTime;
}

export interface AnalyticsEvent {
  id?: string;
  name?: string;
  pagePath?: string;
  occurredAt?: IsoDateTime;
  createdAt?: IsoDateTime;
}
