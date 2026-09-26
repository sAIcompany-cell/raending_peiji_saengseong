

import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";

const createdAt = "2026-09-01T09:00:00.000Z";

export type MockLandingPageSection = LandingPageSection;
export type MockTestimonial = Testimonial;
export type MockAnalyticsEvent = AnalyticsEvent;

export const mockLandingPageSectionList: MockLandingPageSection[] = [
  {
    id: "section-hero",
    type: "hero",
    title: "가구 가격, 매장 가기 전에 비교하세요",
    content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.",
    order: 1,
    createdAt,
  },
  {
    id: "section-problem",
    type: "problem",
    title: "가구 비교, 왜 이렇게 번거로울까요?",
    content: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.",
    order: 2,
    createdAt,
  },
  {
    id: "section-service",
    type: "service",
    title: "가구 선택, 비교부터 더 간단하게",
    content: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.",
    order: 3,
    createdAt,
  },
  {
    id: "section-benefits",
    type: "benefits",
    title: "가구 비교, 더 간단하게",
    content: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.",
    order: 4,
    createdAt,
  },
  {
    id: "section-cta",
    type: "cta",
    title: "내게 맞는 가구, 합리적인 비교에서 시작하세요",
    content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.",
    order: 5,
    createdAt,
  },
];

export const mockTestimonialList: MockTestimonial[] = [
  {
    id: "testimonial-001",
    quote: "소파를 사기 전에 여러 제품의 가격과 조건을 한눈에 비교할 수 있어 매장을 돌아다니는 시간이 줄었어요.",
    author: "김서연",
    result: "소파 비교 시간을 줄이고 원하는 조건의 제품을 찾았어요.",
    createdAt,
  },
  {
    id: "testimonial-002",
    quote: "예산에 맞는 식탁을 먼저 추려볼 수 있어서 매장에서는 실제 제품을 확인하는 데 집중할 수 있었습니다.",
    author: "박준호",
    result: "방문 전 후보를 정리해 구매 결정을 편하게 했어요.",
    createdAt,
  },
  {
    id: "testimonial-003",
    quote: "침대 크기와 가격을 함께 비교하니 우리 집에 맞지 않는 제품을 빠르게 제외할 수 있었어요.",
    author: "이하은",
    result: "공간 조건과 가격을 함께 살펴봤어요.",
    createdAt,
  },
  {
    id: "testimonial-004",
    quote: "여러 매장의 가격을 따로 메모하지 않아도 돼서 가구를 고르는 과정이 훨씬 단순해졌습니다.",
    author: "최민석",
    result: "가격 비교에 드는 번거로움을 줄였어요.",
    createdAt,
  },
  {
    id: "testimonial-005",
    quote: "원하는 색상과 예산을 기준으로 비교하니 가족과 함께 후보를 고르기 쉬웠어요.",
    author: "정유진",
    result: "가족과 필요한 가구를 빠르게 결정했어요.",
    createdAt,
  },
];

export const mockAnalyticsEventList: MockAnalyticsEvent[] = [
  {
    id: "event-001",
    name: "page_view",
    pagePath: "/",
    occurredAt: "2026-09-24T09:12:00.000Z",
    createdAt: "2026-09-24T09:12:00.000Z",
  },
  {
    id: "event-002",
    name: "page_view",
    pagePath: "/hero",
    occurredAt: "2026-09-24T09:14:00.000Z",
    createdAt: "2026-09-24T09:14:00.000Z",
  },
  {
    id: "event-003",
    name: "cta_click",
    pagePath: "/hero",
    occurredAt: "2026-09-24T09:16:00.000Z",
    createdAt: "2026-09-24T09:16:00.000Z",
  },
  {
    id: "event-004",
    name: "page_view",
    pagePath: "/screen-2",
    occurredAt: "2026-09-24T09:21:00.000Z",
    createdAt: "2026-09-24T09:21:00.000Z",
  },
  {
    id: "event-005",
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-24T09:28:00.000Z",
    createdAt: "2026-09-24T09:28:00.000Z",
  },
];

export const mockLogoList = [
  {
    id: "logo-main",
    name: "가구비교",
    text: "가구비교",
    variant: "default",
    status: "active",
  },
];

export const mockResponsiveSettingList = [
  {
    id: "responsive-mobile",
    device: "mobile",
    label: "모바일",
    description: "작은 화면에서도 콘텐츠와 CTA를 읽고 사용할 수 있어요.",
    breakpoint: "640px",
    status: "supported",
  },
  {
    id: "responsive-tablet",
    device: "tablet",
    label: "태블릿",
    description: "중간 화면에서 목록과 안내 콘텐츠가 자연스럽게 배치돼요.",
    breakpoint: "768px",
    status: "supported",
  },
  {
    id: "responsive-desktop",
    device: "desktop",
    label: "PC",
    description: "넓은 화면에서 비교 흐름과 CTA를 편하게 확인할 수 있어요.",
    breakpoint: "1024px",
    status: "supported",
  },
];

export const mockSeoMetadataList = [
  {
    id: "seo-home",
    path: "/",
    title: "가구 가격, 매장 가기 전에 비교하세요 | 가구비교",
    description: "원하는 가구의 가격과 조건을 편리하게 비교하고 내게 맞는 제품을 찾아보세요.",
    canonicalUrl: "/",
    language: "ko",
    status: "active",
  },
];

export const mockCtaList = [
  {
    id: "cta-start",
    label: "무료로 시작하기",
    destination: "/screen-2",
    destinationKind: "internal",
    status: "active",
    variant: "primary",
  },
  {
    id: "cta-plan",
    label: "기획안 만들기",
    destination: "/screen-2",
    destinationKind: "internal",
    status: "active",
    variant: "primary",
  },
];

export const mockCtaSummary = {
  pageViews: mockAnalyticsEventList.filter((event) => event.name === "page_view").length,
  ctaClicks: mockAnalyticsEventList.filter((event) => event.name === "cta_click").length,
  events: mockAnalyticsEventList,
};
