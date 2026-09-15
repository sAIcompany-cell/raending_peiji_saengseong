import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";

export const mockLandingPageSectionList: LandingPageSection[] = [
  {
    id: "section-hero",
    type: "hero",
    title: "가구 가격, 매장 가기 전에 비교하세요",
    content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.",
    order: 1,
  },
  {
    id: "section-problem",
    type: "problem",
    title: "가구 비교, 왜 이렇게 번거로울까요?",
    content: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.",
    order: 2,
  },
  {
    id: "section-service",
    type: "service",
    title: "가구 선택, 비교부터 더 간단하게",
    content: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.",
    order: 3,
  },
  {
    id: "section-benefits",
    type: "benefits",
    title: "가구 비교, 더 간단하게",
    content: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.",
    order: 4,
  },
  {
    id: "section-final-cta",
    type: "cta",
    title: "내게 맞는 가구, 합리적인 비교에서 시작하세요",
    content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.",
    order: 5,
  },
];

export const mockLogoList: LandingPageSection[] = [
  {
    id: "logo-home",
    type: "logo",
    title: "가구비교",
    content: "/",
    order: 1,
  },
  {
    id: "logo-hero",
    type: "logo",
    title: "가구비교",
    content: "/hero",
    order: 2,
  },
  {
    id: "logo-problem",
    type: "logo",
    title: "가구비교",
    content: "/screen",
    order: 3,
  },
  {
    id: "logo-benefits",
    type: "logo",
    title: "가구비교",
    content: "/screen-3",
    order: 4,
  },
  {
    id: "logo-cta",
    type: "logo",
    title: "가구비교",
    content: "/cta",
    order: 5,
  },
];

export const mockResponsiveSettingList: LandingPageSection[] = [
  {
    id: "responsive-mobile-small",
    type: "mobile",
    title: "작은 모바일 화면",
    content: "좁은 화면에서도 가구 비교 내용과 CTA를 세로 흐름으로 표시합니다.",
    order: 1,
  },
  {
    id: "responsive-mobile",
    type: "mobile",
    title: "모바일 화면",
    content: "텍스트와 버튼이 겹치지 않도록 한 열 구조로 표시합니다.",
    order: 2,
  },
  {
    id: "responsive-tablet",
    type: "tablet",
    title: "태블릿 화면",
    content: "후기와 장점 목록을 화면 너비에 맞춰 두 열까지 확장합니다.",
    order: 3,
  },
  {
    id: "responsive-desktop",
    type: "desktop",
    title: "PC 화면",
    content: "핵심 콘텐츠를 읽기 편한 폭으로 제한하고 여유 있는 간격을 유지합니다.",
    order: 4,
  },
  {
    id: "responsive-wide",
    type: "desktop",
    title: "넓은 PC 화면",
    content: "콘텐츠가 과도하게 늘어나지 않도록 중앙 정렬된 레이아웃을 유지합니다.",
    order: 5,
  },
];

export const mockSeoMetadataList: LandingPageSection[] = [
  {
    id: "seo-home",
    type: "/",
    title: "가구비교 | 원하는 가구의 가격을 간편하게 비교하세요",
    content: "원하는 조건과 가격을 한눈에 살펴보고 내게 맞는 가구를 찾아보세요.",
    order: 1,
  },
  {
    id: "seo-hero",
    type: "/hero",
    title: "가구 가격 비교 | 매장 방문 전에 비교하세요",
    content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.",
    order: 2,
  },
  {
    id: "seo-problem",
    type: "/screen",
    title: "번거로운 가구 비교와 매장 방문 줄이기",
    content: "여러 곳에서 가격을 확인하고 매장을 방문해야 했던 가구 구매의 불편을 살펴보세요.",
    order: 3,
  },
  {
    id: "seo-benefits",
    type: "/screen-3",
    title: "가구 비교의 핵심 장점 | 가격과 조건을 한눈에",
    content: "가격과 필요한 조건을 함께 비교하고 매장 방문 전에 알맞은 가구를 골라보세요.",
    order: 4,
  },
  {
    id: "seo-cta",
    type: "/cta",
    title: "내게 맞는 가구 비교 시작하기",
    content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.",
    order: 5,
  },
];

export const mockTestimonialList: Testimonial[] = [
  {
    id: "testimonial-soyeon",
    quote: "소파를 보러 매장마다 다니기 전에 가격대를 비교할 수 있어서 선택 범위를 빠르게 줄였어요.",
    author: "신혼집 소파를 찾던 김소연 님",
    result: "방문할 매장을 두 곳으로 줄였어요.",
  },
  {
    id: "testimonial-minjun",
    quote: "식탁 크기와 가격을 함께 살펴보니 예산에 맞지 않는 제품을 미리 제외할 수 있었어요.",
    author: "4인용 식탁을 찾던 이민준 님",
    result: "예산에 맞는 후보를 세 개로 정리했어요.",
  },
  {
    id: "testimonial-jihye",
    quote: "수납장 가격을 한눈에 비교한 뒤 매장에 가니 현장에서 결정하기가 훨씬 수월했어요.",
    author: "거실 수납장을 찾던 박지혜 님",
    result: "첫 매장 방문에서 구매를 결정했어요.",
  },
  {
    id: "testimonial-hyunwoo",
    quote: "책상마다 가격을 따로 문의하지 않고 필요한 조건과 함께 비교할 수 있어 편리했어요.",
    author: "재택근무용 책상을 찾던 정현우 님",
    result: "필요한 조건에 맞는 제품을 바로 골랐어요.",
  },
  {
    id: "testimonial-eunji",
    quote: "침대 프레임을 고르기 전에 여러 제품을 비교해 불필요한 매장 방문을 피할 수 있었어요.",
    author: "침실 가구를 바꾸던 최은지 님",
    result: "매장 방문 전에 최종 후보를 정했어요.",
  },
];

export const mockCtaList: LandingPageSection[] = [
  {
    id: "cta-hero-start",
    type: "primary",
    title: "무료로 시작하기",
    content: "/screen",
    order: 1,
  },
  {
    id: "cta-problem-next",
    type: "primary",
    title: "계속",
    content: "/screen-2",
    order: 2,
  },
  {
    id: "cta-service-next",
    type: "primary",
    title: "계속",
    content: "/screen-3",
    order: 3,
  },
  {
    id: "cta-benefits-next",
    type: "primary",
    title: "계속",
    content: "/cta",
    order: 4,
  },
  {
    id: "cta-final-plan",
    type: "primary",
    title: "기획안 만들기",
    content: "/hero",
    order: 5,
  },
];

export const mockAnalyticsEventList: AnalyticsEvent[] = [
  {
    id: "event-home-view",
    name: "page_view",
    pagePath: "/",
    occurredAt: "2026-09-14T09:15:00+09:00",
  },
  {
    id: "event-hero-view",
    name: "page_view",
    pagePath: "/hero",
    occurredAt: "2026-09-14T09:15:08+09:00",
  },
  {
    id: "event-hero-cta",
    name: "cta_click",
    pagePath: "/hero",
    occurredAt: "2026-09-14T09:15:24+09:00",
  },
  {
    id: "event-benefits-view",
    name: "page_view",
    pagePath: "/screen-3",
    occurredAt: "2026-09-14T09:16:12+09:00",
  },
  {
    id: "event-final-cta",
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-14T09:17:03+09:00",
  },
];
