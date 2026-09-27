/**
 * 시드 데이터 — 기획서의 엔티티에서 **결정론적으로** 파생했다(업종 사전 없음).
 *
 * 규칙: 이 파일은 **혼자서** `npx tsc --noEmit`(strict) 를 통과해야 한다. Step 1 이 만들
 * `types/index.ts` 를 import 하면 Step 1 이전에 이미 깨진다. 그래서 자체 `Mock*` 인터페이스를
 * 선언하고, Step 2 프롬프트가 계약 타입과의 매핑을 맡는다.
 *
 * 값은 형태만 맞춘 자리표시다 — Step 2 에서 이 제품에서 실제로 나올 법한 구체적인 값으로
 * 갈아끼워라.
 */

/** LandingPageSection */
export interface MockLandingPageSection {
  id: string;
  type: string;
  title: string;
  content: string;
  order: number;
}

export const mockLandingPageSectionList: MockLandingPageSection[] = [
  { id: "mockLandingPageSection_001", type: "type 1", title: "title 1", content: "content 1", order: 480 },
  { id: "mockLandingPageSection_002", type: "type 2", title: "title 2", content: "content 2", order: 628 },
  { id: "mockLandingPageSection_003", type: "type 3", title: "title 3", content: "content 3", order: 776 },
  { id: "mockLandingPageSection_004", type: "type 4", title: "title 4", content: "content 4", order: 924 },
  { id: "mockLandingPageSection_005", type: "type 5", title: "title 5", content: "content 5", order: 1072 },
];

/** Testimonial */
export interface MockTestimonial {
  id: string;
  quote: string;
  author: string;
  result: string;
}

export const mockTestimonialList: MockTestimonial[] = [
  { id: "mockTestimonial_001", quote: "quote 1", author: "author 1", result: "result 1" },
  { id: "mockTestimonial_002", quote: "quote 2", author: "author 2", result: "result 2" },
  { id: "mockTestimonial_003", quote: "quote 3", author: "author 3", result: "result 3" },
  { id: "mockTestimonial_004", quote: "quote 4", author: "author 4", result: "result 4" },
  { id: "mockTestimonial_005", quote: "quote 5", author: "author 5", result: "result 5" },
];

/** AnalyticsEvent */
export interface MockAnalyticsEvent {
  id: string;
  name: string;
  pagePath: string;
  occurredAt: string;
}

export const mockAnalyticsEventList: MockAnalyticsEvent[] = [
  { id: "mockAnalyticsEvent_001", name: "name 1", pagePath: "pagePath 1", occurredAt: "2026-08-20T09:02:00+09:00" },
  { id: "mockAnalyticsEvent_002", name: "name 2", pagePath: "pagePath 2", occurredAt: "2026-08-21T09:09:00+09:00" },
  { id: "mockAnalyticsEvent_003", name: "name 3", pagePath: "pagePath 3", occurredAt: "2026-08-22T09:16:00+09:00" },
  { id: "mockAnalyticsEvent_004", name: "name 4", pagePath: "pagePath 4", occurredAt: "2026-08-23T09:23:00+09:00" },
  { id: "mockAnalyticsEvent_005", name: "name 5", pagePath: "pagePath 5", occurredAt: "2026-08-24T09:30:00+09:00" },
];
