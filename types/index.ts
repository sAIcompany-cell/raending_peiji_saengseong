export type ISODateTime = string;

export interface LandingPageSection {
  id?: string;
  type?: string;
  title?: string;
  content?: string;
  order?: number;
  createdAt: ISODateTime;
}

export interface Testimonial {
  id?: string;
  quote?: string;
  author?: string;
  result?: string;
  createdAt: ISODateTime;
}

export interface AnalyticsEvent {
  id?: string;
  name?: string;
  pagePath?: string;
  occurredAt?: ISODateTime;
  createdAt: ISODateTime;
}
