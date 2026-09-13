import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";


export const mockLandingPageSectionList: LandingPageSection[] = [
  {
    id: "section-hero",
    type: "hero",
    title: "발품 없이 비교하는 가구 선택",
    content: "여러 매장을 직접 돌지 않고 원하는 가구의 가격과 조건을 한곳에서 살펴보세요.",
    order: 1,
  },
  {
    id: "section-problem",
    type: "problem",
    title: "가구 가격 비교가 어려우셨나요?",
    content: "매장마다 다른 가격과 정보 때문에 반복해서 방문해야 하는 부담을 짚어드립니다.",
    order: 2,
  },
  {
    id: "section-service",
    type: "service",
    title: "원하는 조건부터 차근차근 정리하세요",
    content: "찾는 가구와 예산, 필요한 조건을 입력하면 비교에 필요한 내용을 이해하기 쉽게 정리합니다.",
    order: 3,
  },
  {
    id: "section-benefits",
    type: "benefits",
    title: "쉽게 시작하고 빠르게 비교하세요",
    content: "복잡한 정보는 줄이고 구매를 결정할 때 필요한 조건과 가격 비교에 집중합니다.",
    order: 4,
  },
  {
    id: "section-cta",
    type: "cta",
    title: "내게 맞는 가구를 지금 찾아보세요",
    content: "가구 비교를 시작하고 방문 전에 필요한 정보를 정리해 보세요.",
    order: 5,
  },
];


export const mockLogoList: LandingPageSection[] = [
  {
    id: "logo-home",
    type: "logo",
    title: "가구한눈",
    content: "랜딩페이지 시작 위치로 이동하는 기본 로고",
    order: 1,
  },
  {
    id: "logo-hero",
    type: "logo",
    title: "가구한눈",
    content: "Hero 섹션 상단에 표시하는 로고",
    order: 2,
  },
  {
    id: "logo-problem",
    type: "logo",
    title: "가구한눈",
    content: "문제 제시 섹션 상단에 표시하는 로고",
    order: 3,
  },
  {
    id: "logo-service",
    type: "logo",
    title: "가구한눈",
    content: "서비스 소개 섹션 상단에 표시하는 로고",
    order: 4,
  },
  {
    id: "logo-cta",
    type: "logo",
    title: "가구한눈",
    content: "최종 CTA 섹션 상단에 표시하는 로고",
    order: 5,
  },
];


export const mockResponsiveSettingList: LandingPageSection[] = [
  {
    id: "responsive-mobile",
    type: "responsive",
    title: "모바일 기본 화면",
    content: "콘텐츠와 CTA를 한 열로 배치하고 읽는 순서를 유지합니다.",
    order: 1,
  },
  {
    id: "responsive-mobile-wide",
    type: "responsive",
    title: "넓은 모바일 화면",
    content: "텍스트와 버튼이 화면 밖으로 잘리지 않도록 여백과 너비를 조정합니다.",
    order: 2,
  },
  {
    id: "responsive-tablet",
    type: "responsive",
    title: "태블릿 화면",
    content: "후기와 장점 목록을 두 열까지 확장하되 핵심 콘텐츠 순서를 유지합니다.",
    order: 3,
  },
  {
    id: "responsive-desktop",
    type: "responsive",
    title: "PC 기본 화면",
    content: "본문 폭을 제한하고 충분한 여백을 두어 핵심 메시지에 집중합니다.",
    order: 4,
  },
  {
    id: "responsive-desktop-wide",
    type: "responsive",
    title: "넓은 PC 화면",
    content: "콘텐츠가 과도하게 늘어나지 않도록 중앙 정렬과 최대 본문 폭을 유지합니다.",
    order: 5,
  },
];


export const mockSeoMetadataList: LandingPageSection[] = [
  {
    id: "seo-home",
    type: "seo",
    title: "가구한눈 | 가구 가격과 조건을 간편하게 비교하세요",
    content: "매장 방문 부담을 줄이고 원하는 가구의 가격과 조건을 한곳에서 비교해 보세요.",
    order: 1,
  },
  {
    id: "seo-hero",
    type: "seo",
    title: "가구 비교 시작하기 | 가구한눈",
    content: "찾는 가구와 구매 조건을 정리하고 필요한 비교를 시작하세요.",
    order: 2,
  },
  {
    id: "seo-problem",
    type: "seo",
    title: "복잡한 가구 가격 비교를 간단하게 | 가구한눈",
    content: "매장마다 다른 가격과 조건을 확인하는 번거로움을 줄여드립니다.",
    order: 3,
  },
  {
    id: "seo-service",
    type: "seo",
    title: "가구 조건 정리와 가격 비교 안내 | 가구한눈",
    content: "원하는 가구와 예산을 바탕으로 비교에 필요한 정보를 이해하기 쉽게 정리하세요.",
    order: 4,
  },
  {
    id: "seo-cta",
    type: "seo",
    title: "내게 맞는 가구 찾기 | 가구한눈",
    content: "방문 전에 가구 가격과 구매 조건을 비교하고 다음 선택을 준비하세요.",
    order: 5,
  },
];


export const mockTestimonialList: Testimonial[] = [
  {
    id: "testimonial-living-room",
    quote: "소파를 보러 여러 매장을 다시 방문하지 않아도 비교할 항목을 먼저 정리할 수 있었어요.",
    author: "거실 가구를 준비한 이용자",
    result: "매장 방문 전에 소파 가격과 배송 조건을 비교했습니다.",
  },
  {
    id: "testimonial-newlywed",
    quote: "신혼 가구마다 조건이 달라 막막했는데 필요한 정보가 한눈에 들어왔어요.",
    author: "신혼 가구를 알아본 이용자",
    result: "예산에 맞춰 침대와 식탁의 구매 조건을 정리했습니다.",
  },
  {
    id: "testimonial-desk",
    quote: "책상 크기와 소재를 먼저 비교하니 매장에서 확인할 내용이 분명해졌어요.",
    author: "서재 가구를 찾은 이용자",
    result: "후보 제품의 크기와 소재 차이를 방문 전에 확인했습니다.",
  },
  {
    id: "testimonial-parents",
    quote: "부모님과 함께 매장을 여러 번 돌기 어려웠는데 후보를 미리 좁힐 수 있어 편했어요.",
    author: "부모님 가구를 준비한 이용자",
    result: "필요한 수납 조건에 맞는 장롱 후보를 정리했습니다.",
  },
  {
    id: "testimonial-moving",
    quote: "이사 준비 중에 흩어진 가구 정보를 다시 찾지 않고 비교할 수 있었어요.",
    author: "이사를 준비한 이용자",
    result: "공간별 가구의 가격과 설치 조건을 함께 살펴봤습니다.",
  },
];


export const mockCtaList: LandingPageSection[] = [
  {
    id: "cta-start",
    type: "cta",
    title: "무료로 비교 시작하기",
    content: "/hero",
    order: 1,
  },
  {
    id: "cta-understand",
    type: "cta",
    title: "비교가 필요한 이유 알아보기",
    content: "/screen",
    order: 2,
  },
  {
    id: "cta-service",
    type: "cta",
    title: "비교 방법 확인하기",
    content: "/screen-2",
    order: 3,
  },
  {
    id: "cta-benefits",
    type: "cta",
    title: "핵심 장점 살펴보기",
    content: "/screen-3",
    order: 4,
  },
  {
    id: "cta-final",
    type: "cta",
    title: "가구 비교 시작하기",
    content: "/cta",
    order: 5,
  },
];


export const mockAnalyticsEventList: AnalyticsEvent[] = [
  {
    name: "page_view",
    pagePath: "/",
    occurredAt: "2026-09-10T09:15:00+09:00",
  },
  {
    name: "page_view",
    pagePath: "/hero",
    occurredAt: "2026-09-10T09:16:12+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/hero",
    occurredAt: "2026-09-10T09:17:04+09:00",
  },
  {
    name: "page_view",
    pagePath: "/screen",
    occurredAt: "2026-09-11T13:22:18+09:00",
  },
  {
    name: "page_view",
    pagePath: "/screen-2",
    occurredAt: "2026-09-11T13:23:41+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/screen-2",
    occurredAt: "2026-09-11T13:24:09+09:00",
  },
  {
    name: "page_view",
    pagePath: "/screen-3",
    occurredAt: "2026-09-12T18:05:27+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/screen-3",
    occurredAt: "2026-09-12T18:06:11+09:00",
  },
  {
    name: "page_view",
    pagePath: "/cta",
    occurredAt: "2026-09-13T10:31:45+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-13T10:32:20+09:00",
  },
];
