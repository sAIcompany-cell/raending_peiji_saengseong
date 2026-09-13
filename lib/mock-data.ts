import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";


export const mockLandingPageSectionList: LandingPageSection[] = [
  {
    id: "section-hero",
    type: "hero",
    title: "가구 가격 비교, 집에서 한눈에",
    content: "여러 매장을 직접 돌지 않고 원하는 가구의 조건과 가격을 간편하게 비교해 보세요.",
    order: 1,
  },
  {
    id: "section-problem",
    type: "problem",
    title: "매장마다 다른 가격을 확인하기 번거로우셨나요?",
    content: "반복되는 매장 방문과 흩어진 상품 정보 때문에 합리적인 선택이 어려운 문제를 줄입니다.",
    order: 2,
  },
  {
    id: "section-service",
    type: "service",
    title: "원하는 가구 조건만 알려주세요",
    content: "찾는 가구와 예산을 정리하면 비교에 필요한 정보를 이해하기 쉬운 흐름으로 안내합니다.",
    order: 3,
  },
  {
    id: "section-benefits",
    type: "benefits",
    title: "비교는 빠르게, 선택은 신중하게",
    content: "쉽게 시작하고 후보를 빠르게 정리해 실제 구매 결정에 활용할 수 있습니다.",
    order: 4,
  },
  {
    id: "section-testimonial",
    type: "testimonial",
    title: "가구를 찾는 시간이 한결 가벼워졌어요",
    content: "가격 비교와 매장 방문 부담을 줄인 사용자들의 경험을 확인해 보세요.",
    order: 5,
  },
  {
    id: "section-cta",
    type: "cta",
    title: "내게 맞는 가구 비교를 시작해 보세요",
    content: "복잡한 탐색 대신 필요한 조건부터 정리하고 다음 선택으로 이어가세요.",
    order: 6,
  },
];


export const mockTestimonialList: Testimonial[] = [
  {
    id: "testimonial-seoul-soyeon",
    quote: "소파를 보러 주말마다 매장을 다닐 생각이었는데, 먼저 비교할 후보를 정리하니 방문할 곳을 줄일 수 있었어요.",
    author: "서울에서 신혼 가구를 준비한 김소연 님",
    result: "비교할 소파 후보와 방문 매장을 미리 정리",
  },
  {
    id: "testimonial-suwon-minjun",
    quote: "같아 보이는 식탁도 판매처마다 조건이 달라 헷갈렸는데 필요한 정보를 한 흐름에서 확인할 수 있어 편했습니다.",
    author: "수원에서 식탁을 찾은 박민준 님",
    result: "식탁별 가격과 구매 조건을 한눈에 비교",
  },
  {
    id: "testimonial-incheon-jihye",
    quote: "아이 방 수납장을 찾을 때 예산에 맞지 않는 상품을 먼저 걸러낼 수 있어서 탐색 부담이 줄었어요.",
    author: "인천에서 자녀 방을 꾸민 이지혜 님",
    result: "예산에 맞는 수납장 후보를 중심으로 탐색",
  },
  {
    id: "testimonial-daejeon-hyeonwoo",
    quote: "퇴근 후 여러 매장 사이트를 오가며 가격을 적어 두지 않아도 되어 침대 선택 과정이 훨씬 단순해졌습니다.",
    author: "대전에서 침대를 교체한 최현우 님",
    result: "흩어진 침대 비교 정보를 간단하게 정리",
  },
  {
    id: "testimonial-busan-eunji",
    quote: "온라인으로 후보를 충분히 살펴본 뒤 꼭 확인할 제품만 매장에서 보니 시간과 이동 부담을 아낄 수 있었어요.",
    author: "부산에서 거실 가구를 고른 정은지 님",
    result: "매장 방문 전 확인할 거실 가구 후보를 선정",
  },
];


export const mockAnalyticsEventList: AnalyticsEvent[] = [
  {
    name: "page_visit",
    pagePath: "/hero",
    occurredAt: "2026-09-09T09:15:00+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/screen",
    occurredAt: "2026-09-09T09:16:12+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/screen-2",
    occurredAt: "2026-09-09T09:17:08+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/screen-3",
    occurredAt: "2026-09-09T09:18:41+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/cta",
    occurredAt: "2026-09-09T09:19:26+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/hero",
    occurredAt: "2026-09-09T09:20:03+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/hero",
    occurredAt: "2026-09-10T14:32:18+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-10T14:36:55+09:00",
  },
  {
    name: "page_visit",
    pagePath: "/screen-3",
    occurredAt: "2026-09-11T20:05:44+09:00",
  },
  {
    name: "cta_click",
    pagePath: "/cta",
    occurredAt: "2026-09-11T20:07:21+09:00",
  },
];
