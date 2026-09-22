/**
 * 도메인 타입 — 랜딩 페이지 생성 (가구 가격 비교 랜딩)
 *
 * 이 파일의 선언은 이후 단계(목업 데이터·API 라우트·화면)의 계약이다.
 * 뒤 단계는 이 파일을 import 만 하고 수정하지 않는다.
 */

/* ------------------------------------------------------------------ */
/* 공통                                                                 */
/* ------------------------------------------------------------------ */

/** ISO 8601 문자열(예: "2025-01-01T09:00:00.000Z") */
export type IsoDateTime = string;

/** 화면 라우트 — outline 에서 승인된 5개 화면 + 진입점 */
export type ScreenRoute = "/" | "/hero" | "/screen" | "/screen-2" | "/screen-3" | "/cta";

/* ------------------------------------------------------------------ */
/* LandingPageSection                                                  */
/* ------------------------------------------------------------------ */

/** 섹션 종류 — 랜딩 흐름 순서와 1:1 대응 */
export type SectionType = "hero" | "problem" | "solution" | "benefits" | "cta";

/** 섹션 게시 상태 */
export type SectionStatus = "draft" | "published";

/** 섹션 본문의 항목(설명 목록 한 줄) */
export interface SectionPoint {
  id: string;
  /** 항목 제목(예: "가격 비교하기") */
  title: string;
  /** 항목 설명(예: "여러 제품의 가격을 한눈에 비교해 보세요.") */
  description: string;
  /** lucide-react 아이콘 이름 힌트(선택) */
  icon?: string;
}

export interface LandingPageSection {
  id: string;
  type: SectionType;
  /** 섹션 화면 이름(예: "Hero 섹션") */
  name: string;
  /** 헤드라인 */
  title: string;
  /** 부제 */
  subtitle: string;
  /** 보조 문장(해결 문구 등, 없으면 빈 문자열) */
  content: string;
  /** 설명 항목 목록 */
  points: SectionPoint[];
  /** 노출 순서(0부터) */
  order: number;
  /** 이 섹션이 렌더되는 라우트 */
  route: ScreenRoute;
  /** 다음 화면 라우트(마지막 섹션은 null) */
  nextRoute: ScreenRoute | null;
  /** 섹션 주 버튼 레이블(예: "무료로 시작하기", "계속") */
  ctaLabel: string;
  /** 섹션 주 버튼과 연결된 CTA id(없으면 null) */
  ctaId: string | null;
  status: SectionStatus;
  updatedAt: IsoDateTime;
}

/* ------------------------------------------------------------------ */
/* Testimonial                                                         */
/* ------------------------------------------------------------------ */

/** 후기 검수 상태 — /api/screen-ff2f57/[id]/decision 으로 변경 */
export type TestimonialStatus = "pending" | "approved" | "rejected";

/** 후기 검수 결정 입력 */
export type TestimonialDecision = "approve" | "reject";

/** 별점 1~5 */
export type TestimonialRating = 1 | 2 | 3 | 4 | 5;

export interface Testimonial {
  id: string;
  /** 후기 본문 */
  quote: string;
  /** 작성자 표시명 */
  author: string;
  /** 작성자 설명(예: "신혼 가구 구매") */
  authorContext: string;
  /** 구체적 결과(예: "매장 방문 3회 → 1회") */
  result: string;
  rating: TestimonialRating;
  status: TestimonialStatus;
  createdAt: IsoDateTime;
  decidedAt: IsoDateTime | null;
}

/** 후기 등록 입력(POST /api/983bc01b) */
export interface TestimonialInput {
  quote: string;
  author: string;
  authorContext: string;
  result: string;
  rating: TestimonialRating;
}

/** 후기 검수 입력(POST /api/screen-ff2f57/[id]/decision) */
export interface TestimonialDecisionInput {
  decision: TestimonialDecision;
  /** 반려 사유 등(선택) */
  note?: string;
}

/* ------------------------------------------------------------------ */
/* AnalyticsEvent                                                      */
/* ------------------------------------------------------------------ */

/** 이벤트 종류 — 방문과 CTA 클릭은 반드시 구분된다 */
export type AnalyticsEventName = "page_view" | "cta_click";

export interface AnalyticsEvent {
  id: string;
  name: AnalyticsEventName;
  /** 이벤트가 발생한 라우트 */
  pagePath: string;
  occurredAt: IsoDateTime;
  /** cta_click 인 경우 클릭된 CTA id */
  ctaId: string | null;
  /** cta_click 인 경우 버튼 레이블 */
  label: string | null;
}

/** 이벤트 기록 입력(POST /analyticsevents) */
export interface AnalyticsEventInput {
  name: AnalyticsEventName;
  pagePath: string;
  occurredAt?: IsoDateTime;
  ctaId?: string | null;
  label?: string | null;
}

/** 라우트별 집계 한 줄 */
export interface AnalyticsPageStat {
  pagePath: string;
  views: number;
  ctaClicks: number;
}

/** 방문/클릭 집계(GET /api/cta/summary) */
export interface AnalyticsSummary {
  totalViews: number;
  totalCtaClicks: number;
  /** 0~100 (소수 1자리), 방문 0건이면 0 */
  conversionRate: number;
  byPage: AnalyticsPageStat[];
  /** 가장 최근 이벤트 시각(없으면 null) */
  lastEventAt: IsoDateTime | null;
}

/* ------------------------------------------------------------------ */
/* SiteLogo                                                            */
/* ------------------------------------------------------------------ */

export type LogoVariant = "wordmark" | "icon" | "combined";

export type LogoStatus = "active" | "inactive";

export interface SiteLogo {
  id: string;
  /** 서비스명(로고 텍스트) */
  name: string;
  /** 줄임 표기(아이콘 안 글자, 1~2자) */
  shortName: string;
  /** 스크린리더용 대체 텍스트 */
  alt: string;
  /** 클릭 시 이동 경로(대표 페이지) */
  href: ScreenRoute;
  variant: LogoVariant;
  status: LogoStatus;
}

/* ------------------------------------------------------------------ */
/* ResponsiveSetting                                                    */
/* ------------------------------------------------------------------ */

export type DeviceType = "mobile" | "tablet" | "desktop";

export type SupportLevel = "supported" | "partial" | "unsupported";

export interface ResponsiveSetting {
  id: string;
  device: DeviceType;
  /** 표시명(예: "모바일") */
  label: string;
  /** 최소 폭(px) */
  minWidth: number;
  /** 최대 폭(px), 상한 없으면 null */
  maxWidth: number | null;
  /** 이 구간에서 보장하는 레이아웃 설명 */
  description: string;
  /** 검증된 브라우저 목록 */
  browsers: string[];
  /** 그리드 열 수 */
  columns: number;
  support: SupportLevel;
}

/* ------------------------------------------------------------------ */
/* SeoMetadata                                                         */
/* ------------------------------------------------------------------ */

export type SeoStatus = "applied" | "missing" | "needs_review";

export type RobotsDirective = "index,follow" | "noindex,nofollow" | "index,nofollow";

export interface SeoMetadata {
  id: string;
  /** 적용 대상 라우트 */
  pagePath: ScreenRoute;
  /** <title> */
  title: string;
  /** <meta name="description"> */
  description: string;
  /** <link rel="canonical"> — 상대 경로 허용 */
  canonicalUrl: string;
  /** <html lang> */
  lang: string;
  robots: RobotsDirective;
  /** og:title(없으면 title 사용) */
  ogTitle: string | null;
  /** og:description(없으면 description 사용) */
  ogDescription: string | null;
  status: SeoStatus;
}

/* ------------------------------------------------------------------ */
/* CtaButton                                                           */
/* ------------------------------------------------------------------ */

/** CTA 목적지 종류 */
export type CtaDestinationKind = "signup" | "start" | "next_section";

export type CtaStatus = "active" | "inactive";

export type CtaVariant = "primary" | "secondary";

export interface CtaButton {
  id: string;
  /** 버튼 레이블(예: "무료로 시작하기", "기획안 만들기") */
  label: string;
  /** 이동 경로 — 오류/빈 페이지가 아닌 실제 라우트 */
  href: ScreenRoute;
  destinationKind: CtaDestinationKind;
  /** 이동 후 사용자가 이해할 다음 단계 설명 */
  destinationDescription: string;
  /** 이 CTA 가 놓인 섹션 id */
  sectionId: string;
  variant: CtaVariant;
  status: CtaStatus;
  /** 누적 클릭 수(목업 집계) */
  clickCount: number;
}

/** CTA 클릭 기록 입력 */
export interface CtaClickInput {
  ctaId: string;
  pagePath: string;
  occurredAt?: IsoDateTime;
}

/* ------------------------------------------------------------------ */
/* API 응답 공통                                                        */
/* ------------------------------------------------------------------ */

export interface ApiError {
  code: "invalid_payload" | "not_found" | "conflicting_state" | "rule_violation" | "internal";
  message: string;
}

export interface ApiListResponse<T> {
  items: T[];
  total: number;
}
