
import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";

export type MockLandingPageSection = LandingPageSection & {
  id: string;
  type: string;
  title: string;
  content: string;
  order: number;
};

export type MockTestimonial = Testimonial & {
  id: string;
  quote: string;
  author: string;
  result: string;
};

export type MockAnalyticsEvent = AnalyticsEvent & {
  id: string;
  name: string;
  pagePath: string;
  occurredAt: string;
};

export interface MockLogo {
  id: string;
  name: string;
  text: string;
  href: string;
  description: string;
}

export interface MockResponsiveSetting {
  id: string;
  name: string;
  breakpoint: string;
  description: string;
  status: string;
}

export interface MockSeoMetadata {
  id: string;
  title: string;
  description: string;
  canonical: string;
  locale: string;
}

export interface MockCta {
  id: string;
  label: string;
  destination: string;
  description: string;
}

export interface MockCtaSummary {
  visits: number;
  ctaClicks: number;
  conversionRate: number;
  lastEventAt: string;
}

export const mockLandingPageSectionList: MockLandingPageSection[] = [
  {
    id: "landing-section-hero",
    type: "hero",
    title: "가구 가격, 매장 가기 전에 비교하세요",
    content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.",
    order: 1,
  },
  {
    id: "landing-section-problem",
    type: "problem",
    title: "가구 비교, 왜 이렇게 번거로울까요?",
    content: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.",
    order: 2,
  },
  {
    id: "landing-section-service",
    type: "service",
    title: "가구 선택, 비교부터 더 간단하게",
    content: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.",
    order: 3,
  },
  {
    id: "landing-section-benefit",
    type: "benefit",
    title: "가구 비교, 더 간단하게",
    content: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.",
    order: 4,
  },
  {
    id: "landing-section-cta",
    type: "cta",
    title: "내게 맞는 가구, 합리적인 비교에서 시작하세요",
    content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.",
    order: 5,
  },
];

export const mockTestimonialList: MockTestimonial[] = [
  {
    id: "testimonial-001",
    quote: "소파를 고르기 전에 여러 제품의 가격과 조건을 한눈에 비교할 수 있어 매장 방문 횟수를 줄였어요.",
    author: "김서윤 · 신혼집 준비 중",
    result: "비교할 제품을 빠르게 좁혔어요",
  },
  {
    id: "testimonial-002",
    quote: "원하는 크기와 예산에 맞는 식탁을 먼저 살펴보고 방문해서, 매장에서 고민하는 시간이 짧아졌습니다.",
    author: "박민준 · 이사 준비 중",
    result: "예산에 맞는 제품을 찾았어요",
  },
  {
    id: "testimonial-003",
    quote: "매장마다 따로 가격을 확인하지 않아도 돼서 책상 비교가 훨씬 편해졌어요.",
    author: "이하은 · 홈오피스 사용자",
    result: "방문 전 선택지를 정리했어요",
  },
  {
    id: "testimonial-004",
    quote: "비슷해 보이는 침대의 가격과 조건을 같이 보니 내가 무엇을 중요하게 보는지 알게 됐어요.",
    author: "정도현 · 침실 가구 구매자",
    result: "필요한 조건을 기준으로 골랐어요",
  },
  {
    id: "testimonial-005",
    quote: "여러 매장을 돌아다니기 전에 후보를 정리할 수 있어서 가족과 결정하기가 수월했습니다.",
    author: "최유진 · 거실 가구 구매자",
    result: "가족과 비교 기준을 맞췄어요",
  },
];

export const mockAnalyticsEventList: MockAnalyticsEvent[] = [
  {
    id: "analytics-event-001",
    name: "page_view",
    pagePath: "/hero",
    occurredAt: "2026-09-20T09:02:00+09:00",
  },
  {
    id: "analytics-event-002",
    name: "page_view",
    pagePath: "/screen-2",
    occurredAt: "2026-09-21T10:18:00+09:00",
  },
  {
    id: "analytics-event-003",
    name: "cta_click",
    pagePath: "/hero",
    occurredAt: "2026-09-22T11:34:00+09:00",
  },
  {
    id: "analytics-event-004",
    name: "page_view",
    pagePath: "/screen-3",
    occurredAt: "2026-09-23T14:11:00+09:00",
  },
  {
    id: "analytics-event-005",
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-24T16:45:00+09:00",
  },
];

export const mockLogoList: MockLogo[] = [
  {
    id: "logo-main",
    name: "가구비교",
    text: "가구비교",
    href: "/",
    description: "가구 가격 비교 서비스",
  },
];

export const mockResponsiveSettingList: MockResponsiveSetting[] = [
  {
    id: "responsive-mobile",
    name: "모바일 레이아웃",
    breakpoint: "0px 이상",
    description: "읽기 쉬운 세로 흐름과 화면 너비에 맞는 CTA를 제공합니다.",
    status: "지원",
  },
  {
    id: "responsive-tablet",
    name: "태블릿 레이아웃",
    breakpoint: "640px 이상",
    description: "콘텐츠 간격과 카드 배치를 넓은 화면에 맞춰 조정합니다.",
    status: "지원",
  },
  {
    id: "responsive-desktop",
    name: "PC 레이아웃",
    breakpoint: "1024px 이상",
    description: "본문 폭을 제한해 핵심 메시지와 CTA에 집중할 수 있습니다.",
    status: "지원",
  },
  {
    id: "responsive-browser",
    name: "주요 브라우저",
    breakpoint: "최신 브라우저",
    description: "모바일과 PC의 주요 브라우저에서 동일한 흐름을 유지합니다.",
    status: "지원",
  },
  {
    id: "responsive-cta",
    name: "반응형 CTA",
    breakpoint: "전체 화면",
    description: "화면 크기가 바뀌어도 CTA를 읽고 누를 수 있습니다.",
    status: "지원",
  },
];

export const mockSeoMetadataList: MockSeoMetadata[] = [
  {
    id: "seo-home",
    title: "가구비교 | 매장 가기 전 가구 가격 비교",
    description: "원하는 가구의 가격과 조건을 편리하게 비교하고 내게 맞는 제품을 찾아보세요.",
    canonical: "/",
    locale: "ko_KR",
  },
  {
    id: "seo-hero",
    title: "가구 가격, 매장 가기 전에 비교하세요 | 가구비교",
    description: "여러 가구의 가격을 비교하고 매장 방문의 번거로움을 줄여보세요.",
    canonical: "/hero",
    locale: "ko_KR",
  },
  {
    id: "seo-screen",
    title: "가구 비교가 번거로운 이유 | 가구비교",
    description: "제품별 가격 확인과 여러 매장 방문의 불편을 살펴봅니다.",
    canonical: "/screen",
    locale: "ko_KR",
  },
  {
    id: "seo-service",
    title: "가구 선택, 비교부터 더 간단하게 | 가구비교",
    description: "원하는 조건에 맞춰 가구 가격을 한눈에 비교해보세요.",
    canonical: "/screen-2",
    locale: "ko_KR",
  },
  {
    id: "seo-cta",
    title: "내게 맞는 가구 비교 시작하기 | 가구비교",
    description: "합리적인 가구 비교로 구매 준비를 시작해보세요.",
    canonical: "/cta",
    locale: "ko_KR",
  },
];

export const mockCtaList: MockCta[] = [
  {
    id: "cta-start",
    label: "무료로 시작하기",
    destination: "/cta",
    description: "가구 비교를 시작하는 CTA",
  },
  {
    id: "cta-plan",
    label: "기획안 만들기",
    destination: "/cta",
    description: "비교 기준을 정리하는 CTA",
  },
  {
    id: "cta-hero",
    label: "계속",
    destination: "/screen-2",
    description: "다음 섹션으로 이동하는 CTA",
  },
  {
    id: "cta-problem",
    label: "계속",
    destination: "/screen-2",
    description: "문제 제시 이후 서비스 소개로 이동하는 CTA",
  },
  {
    id: "cta-benefit",
    label: "계속",
    destination: "/cta",
    description: "핵심 장점 이후 최종 CTA로 이동하는 CTA",
  },
];

export const mockCtaSummary: MockCtaSummary = {
  visits: 128,
  ctaClicks: 37,
  conversionRate: 28.9,
  lastEventAt: "2026-09-24T16:45:00+09:00",
};

export const getMockLandingPageSection = (id: string) =>
  mockLandingPageSectionList.find((item) => item.id === id);

export const getMockTestimonial = (id: string) =>
  mockTestimonialList.find((item) => item.id === id);

export const getMockAnalyticsEvent = (id: string) =>
  mockAnalyticsEventList.find((item) => item.id === id);

export const getMockLogo = (id: string) => mockLogoList.find((item) => item.id === id);

export const getMockResponsiveSetting = (id: string) =>
  mockResponsiveSettingList.find((item) => item.id === id);

export const getMockSeoMetadata = (id: string) =>
  mockSeoMetadataList.find((item) => item.id === id);

export const getMockCta = (id: string) => mockCtaList.find((item) => item.id === id);
