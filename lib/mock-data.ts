import { LandingPageSection, Testimonial, AnalyticsEvent, SiteLogo, ResponsiveSetting, SeoMetadata, CtaButton } from "@/types";

export const mockLandingPageSectionList: LandingPageSection[] = [
  { id: "sec_hero", type: "hero", title: "가구 가격, 매장 가기 전에 비교하세요", content: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.", order: 1 },
  { id: "sec_problem", type: "problem", title: "가구 비교, 왜 이렇게 번거로울까요?", content: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.", order: 2 },
  { id: "sec_solution", type: "solution", title: "가구 선택, 비교부터 더 간단하게", content: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.", order: 3 },
  { id: "sec_benefits", type: "benefits", title: "가구 비교, 더 간단하게", content: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.", order: 4 },
  { id: "sec_cta", type: "cta", title: "내게 맞는 가구, 합리적인 비교에서 시작하세요", content: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.", order: 5 },
];

export const mockTestimonialList: Testimonial[] = [
  { id: "test_1", quote: "여러 매장을 돌아다닐 필요 없이 한눈에 가격을 비교할 수 있어서 정말 편리했어요.", author: "김지민", result: "시간 절약 및 합리적 구매" },
  { id: "test_2", quote: "원하는 조건의 소파를 찾고 있었는데, 여기서 비교해보고 예산에 딱 맞는 제품을 샀습니다.", author: "이현우", result: "예산 맞춤 구매 성공" },
  { id: "test_3", quote: "가구 가격이 천차만별이라 고민이 많았는데, 비교 서비스 덕분에 바가지 쓰지 않고 샀네요.", author: "박서연", result: "비용 절감" },
  { id: "test_4", quote: "매장에 가기 전에 미리 가격대를 파악할 수 있어서 협상할 때 큰 도움이 되었습니다.", author: "최동훈", result: "구매 협상력 강화" },
  { id: "test_5", quote: "신혼 가구 준비하면서 스트레스가 많았는데, 이 서비스로 한 번에 정리할 수 있었어요.", author: "정수아", result: "스트레스 감소 및 빠른 결정" },
];

export const mockAnalyticsEventList: AnalyticsEvent[] = [
  { name: "page_view", pagePath: "/", occurredAt: new Date("2024-01-01T10:00:00Z") },
  { name: "cta_click", pagePath: "/", occurredAt: new Date("2024-01-01T10:05:00Z") },
  { name: "page_view", pagePath: "/hero", occurredAt: new Date("2024-01-01T11:00:00Z") },
  { name: "cta_click", pagePath: "/hero", occurredAt: new Date("2024-01-01T11:02:00Z") },
  { name: "page_view", pagePath: "/cta", occurredAt: new Date("2024-01-01T12:00:00Z") },
];

export const mockLogoList: SiteLogo[] = [
  { id: "logo_1", name: "기본 로고", url: "/logo.png" },
  { id: "logo_2", name: "화이트 로고", url: "/logo-white.png" },
  { id: "logo_3", name: "블랙 로고", url: "/logo-black.png" },
  { id: "logo_4", name: "심볼 로고", url: "/logo-symbol.png" },
  { id: "logo_5", name: "텍스트 로고", url: "/logo-text.png" },
];

export const mockResponsiveSettingList: ResponsiveSetting[] = [
  { id: "res_1", device: "mobile", breakpoint: 320, description: "모바일 세로" },
  { id: "res_2", device: "mobile", breakpoint: 480, description: "모바일 가로" },
  { id: "res_3", device: "tablet", breakpoint: 768, description: "태블릿 세로" },
  { id: "res_4", device: "tablet", breakpoint: 1024, description: "태블릿 가로" },
  { id: "res_5", device: "desktop", breakpoint: 1280, description: "데스크탑" },
];

export const mockSeoMetadataList: SeoMetadata[] = [
  { id: "seo_1", title: "가구 가격 비교", description: "가구 가격, 매장 가기 전에 비교하세요.", canonical: "https://example.com", ogTitle: "가구 가격 비교", ogDescription: "가구 가격, 매장 가기 전에 비교하세요.", ogImage: "https://example.com/og.png" },
  { id: "seo_2", title: "소파 가격 비교", description: "소파 가격, 매장 가기 전에 비교하세요.", canonical: "https://example.com/sofa", ogTitle: "소파 가격 비교", ogDescription: "소파 가격, 매장 가기 전에 비교하세요.", ogImage: "https://example.com/og-sofa.png" },
  { id: "seo_3", title: "침대 가격 비교", description: "침대 가격, 매장 가기 전에 비교하세요.", canonical: "https://example.com/bed", ogTitle: "침대 가격 비교", ogDescription: "침대 가격, 매장 가기 전에 비교하세요.", ogImage: "https://example.com/og-bed.png" },
  { id: "seo_4", title: "식탁 가격 비교", description: "식탁 가격, 매장 가기 전에 비교하세요.", canonical: "https://example.com/table", ogTitle: "식탁 가격 비교", ogDescription: "식탁 가격, 매장 가기 전에 비교하세요.", ogImage: "https://example.com/og-table.png" },
  { id: "seo_5", title: "의자 가격 비교", description: "의자 가격, 매장 가기 전에 비교하세요.", canonical: "https://example.com/chair", ogTitle: "의자 가격 비교", ogDescription: "의자 가격, 매장 가기 전에 비교하세요.", ogImage: "https://example.com/og-chair.png" },
];

export const mockCtaList: CtaButton[] = [
  { id: "cta_1", label: "무료로 시작하기", href: "/signup", variant: "primary", position: "hero" },
  { id: "cta_2", label: "계속", href: "/next", variant: "primary", position: "screen" },
  { id: "cta_3", label: "계속", href: "/next", variant: "primary", position: "screen-2" },
  { id: "cta_4", label: "계속", href: "/next", variant: "primary", position: "screen-3" },
  { id: "cta_5", label: "기획안 만들기", href: "/create", variant: "primary", position: "cta" },
];
