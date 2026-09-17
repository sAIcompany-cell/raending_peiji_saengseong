import {
  LandingPageSection,
  Testimonial,
  AnalyticsEvent,
  Logo,
  ResponsiveSetting,
  SeoMetadata,
  Cta,
  CtaSummary
} from "@/types";

export const mockLandingPageSectionList: LandingPageSection[] = [
  { id: "sec_hero", type: "hero", title: "가구 가격, 매장 가기 전에 비교하세요", content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.", order: 1 },
  { id: "sec_problem", type: "problem", title: "가구 비교, 왜 이렇게 번거로울까요?", content: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.", order: 2 },
  { id: "sec_solution", type: "solution", title: "가구 선택, 비교부터 더 간단하게", content: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.", order: 3 },
  { id: "sec_benefits", type: "benefits", title: "가구 비교, 더 간단하게", content: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.", order: 4 },
  { id: "sec_cta", type: "cta", title: "내게 맞는 가구, 합리적인 비교에서 시작하세요", content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.", order: 5 },
];

export const mockTestimonialList: Testimonial[] = [
  { id: "test_1", quote: "여러 매장을 돌아다닐 필요 없이 한눈에 가격을 비교할 수 있어서 정말 편리했어요.", author: "김지수", result: "시간 절약 및 합리적 구매" },
  { id: "test_2", quote: "원하는 조건의 소파를 찾았는데, 여기서 최저가를 확인하고 바로 구매했습니다.", author: "이민호", result: "예산 20% 절감" },
  { id: "test_3", quote: "가구 가격이 천차만별이라 고민이 많았는데, 비교 서비스 덕분에 확신을 갖고 샀어요.", author: "박소연", result: "만족도 높은 구매" },
  { id: "test_4", quote: "매장 방문 전에 미리 가격대를 파악할 수 있어서 협상할 때 큰 도움이 되었습니다.", author: "최영진", result: "스마트한 쇼핑 경험" },
  { id: "test_5", quote: "신혼가구 준비하면서 스트레스가 많았는데, 이 서비스로 한 번에 해결했어요!", author: "정하나", result: "결혼 준비 시간 단축" },
];

export const mockAnalyticsEventList: AnalyticsEvent[] = [
  { id: "evt_1", name: "page_view", pagePath: "/", occurredAt: "2023-10-01T10:00:00Z" },
  { id: "evt_2", name: "cta_click", pagePath: "/", occurredAt: "2023-10-01T10:05:00Z" },
  { id: "evt_3", name: "page_view", pagePath: "/screen", occurredAt: "2023-10-01T10:10:00Z" },
  { id: "evt_4", name: "cta_click", pagePath: "/screen", occurredAt: "2023-10-01T10:15:00Z" },
  { id: "evt_5", name: "page_view", pagePath: "/cta", occurredAt: "2023-10-01T10:20:00Z" },
];

export const mockLogoList: Logo[] = [
  { id: "logo_1", url: "/logo.svg", altText: "가구비교 로고" },
  { id: "logo_2", url: "/logo-dark.svg", altText: "가구비교 다크 로고" },
  { id: "logo_3", url: "/logo-sm.svg", altText: "가구비교 스몰 로고" },
  { id: "logo_4", url: "/logo-icon.svg", altText: "가구비교 아이콘" },
  { id: "logo_5", url: "/logo-text.svg", altText: "가구비교 텍스트 로고" },
];

export const mockResponsiveSettingList: ResponsiveSetting[] = [
  { id: "rs_1", device: "mobile", breakpoint: 320 },
  { id: "rs_2", device: "mobile", breakpoint: 480 },
  { id: "rs_3", device: "tablet", breakpoint: 768 },
  { id: "rs_4", device: "desktop", breakpoint: 1024 },
  { id: "rs_5", device: "desktop", breakpoint: 1280 },
];

export const mockSeoMetadataList: SeoMetadata[] = [
  { id: "seo_1", title: "가구 가격 비교 - 매장 가기 전에 확인하세요", description: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.", canonicalUrl: "https://example.com", language: "ko" },
  { id: "seo_2", title: "스마트한 가구 쇼핑", description: "여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다.", canonicalUrl: "https://example.com/about", language: "ko" },
  { id: "seo_3", title: "가구 최저가 찾기", description: "여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.", canonicalUrl: "https://example.com/search", language: "ko" },
  { id: "seo_4", title: "사용자 후기 - 가구 비교", description: "실제 사용자들이 경험한 가구 가격 비교 서비스 후기를 확인하세요.", canonicalUrl: "https://example.com/reviews", language: "ko" },
  { id: "seo_5", title: "무료로 시작하기", description: "지금 바로 가구 가격 비교 서비스를 무료로 시작해보세요.", canonicalUrl: "https://example.com/start", language: "ko" },
];

export const mockCtaList: Cta[] = [
  { id: "cta_1", label: "무료로 시작하기", targetUrl: "/signup", actionType: "navigate" },
  { id: "cta_2", label: "계속", targetUrl: "/next", actionType: "navigate" },
  { id: "cta_3", label: "기획안 만들기", targetUrl: "/create", actionType: "navigate" },
  { id: "cta_4", label: "더 알아보기", targetUrl: "/about", actionType: "navigate" },
  { id: "cta_5", label: "문의하기", targetUrl: "/contact", actionType: "navigate" },
];

export const mockCtaSummary: CtaSummary = {
  totalClicks: 1250,
  conversionRate: 15.4
};
