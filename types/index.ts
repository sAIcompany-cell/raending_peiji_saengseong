export type Locale = "ko";

export type LandingPageSectionType =
  | "hero"
  | "problem"
  | "service"
  | "benefits"
  | "testimonial"
  | "cta";

export interface LandingPageSection {
  id?: string;
  type?: LandingPageSectionType;
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

export type AnalyticsEventName = "page_visit" | "cta_click";

export interface AnalyticsEvent {
  name?: AnalyticsEventName;
  pagePath?: string;
  occurredAt?: string;
}

export interface AnalyticsEventInput {
  name: AnalyticsEventName;
  pagePath: string;
  occurredAt: string;
}

export type LandingPageRoute =
  | "/hero"
  | "/screen"
  | "/screen-2"
  | "/screen-3"
  | "/cta";

export type ApiErrorCode =
  | "INVALID_PAYLOAD"
  | "NOT_FOUND"
  | "CONFLICTING_STATE"
  | "RULE_VIOLATION";

export interface ApiError {
  code: ApiErrorCode;
  message: string;
}

export interface ApiSuccessResponse<T> {
  data: T;
}

export interface ApiErrorResponse {
  error: ApiError;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
