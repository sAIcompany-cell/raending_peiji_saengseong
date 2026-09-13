/**
 * 도메인 타입 계약 (Step 1)
 * 랜딩 페이지 생성 제품의 SSOT 엔티티: LandingPageSection · Testimonial · AnalyticsEvent
 * 이후 단계는 이 선언을 변경하지 않고 import 해서 사용한다.
 */

/** 랜딩 페이지 섹션 종류 (와이어프레임의 5개 화면과 1:1 대응) */
export type LandingSectionType =
  | "hero"
  | "problem"
  | "service"
  | "benefit"
  | "testimonial"
  | "cta";

/** 섹션 게시 상태 */
export type SectionStatus = "draft" | "published" | "archived";

/** 섹션 안의 불릿 항목 (와이어프레임의 list-item) */
export interface SectionItem {
  id: string;
  /** 항목 제목 (예: "항목 A") */
  label: string;
  /** 항목 설명 한 줄 */
  description: string;
}

/** CTA 버튼 정의 — 클릭 시 이동할 목적지를 반드시 갖는다 */
export interface CtaAction {
  id: string;
  /** 버튼에 표시할 문구 (예: "무료로 시작하기") */
  label: string;
  /** 앱 내부 경로. 빈 문자열·외부 오류 페이지 금지 */
  href: string;
  /** 분석 이벤트에 기록할 CTA 식별자 */
  trackingId: string;
  variant: "primary" | "secondary";
}

/** LandingPageSection */
export interface LandingPageSection {
  id: string;
  type: LandingSectionType;
  /** 라우트 경로 (예: "/hero") */
  route: string;
  /** 화면 상단 제목 */
  title: string;
  /** 제목 아래 짧은 설명 */
  subtitle: string;
  /** 본문 큰 블록 문구 (block-lg) */
  headline: string;
  /** 본문 보조 문구 */
  body: string;
  items: SectionItem[];
  /** 상태 표시줄에 노출할 문구 */
  statusLabel: string;
  status: SectionStatus;
  /** 노출 순서 (오름차순) */
  order: number;
  cta: CtaAction;
}

/** Testimonial — 사용자 후기 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** 작성자 소속·직함 */
  role: string;
  /** 후기에서 강조할 성과 문구 (예: "전환율 2.4배") */
  result: string;
  /** 1~5 별점 */
  rating: number;
  createdAt: string;
}

/** 측정 대상 이벤트 이름 */
export type AnalyticsEventName = "page_view" | "cta_click";

/** 접속 디바이스 구분 (모바일/PC 반응형 확인용) */
export type DeviceKind = "mobile" | "desktop";

/** AnalyticsEvent — 방문 및 CTA 클릭 측정 기록 */
export interface AnalyticsEvent {
  id: string;
  name: AnalyticsEventName;
  /** 이벤트가 발생한 경로 */
  pagePath: string;
  /** cta_click 일 때의 CTA 식별자 */
  ctaId: string | null;
  device: DeviceKind;
  /** ISO 8601 문자열 */
  occurredAt: string;
}

/** 이벤트 기록 요청 입력 */
export interface AnalyticsEventInput {
  name: AnalyticsEventName;
  pagePath: string;
  ctaId?: string | null;
  device?: DeviceKind;
}

/** 이벤트 이름별 집계 (동일 기준 집계) */
export interface AnalyticsSummary {
  pageViews: number;
  ctaClicks: number;
  /** 0~1 사이 전환율 */
  conversionRate: number;
  /** 마지막 이벤트 시각 (없으면 null) */
  lastEventAt: string | null;
}

/** 상단 로고 — 클릭 시 대표 페이지로 이동 */
export interface BrandLogo {
  name: string;
  /** 로고 클릭 시 이동 경로 */
  href: string;
  /** 접근성용 대체 텍스트 */
  alt: string;
}

/** 비동기 화면 상태 */
export type LoadState = "idle" | "loading" | "success" | "error";

/** API 응답 공통 래퍼 */
export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

/** 이벤트 기록 API 응답 */
export interface TrackResponse {
  event: AnalyticsEvent;
  summary: AnalyticsSummary;
}
