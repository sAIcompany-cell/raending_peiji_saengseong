/**
 * 시드 데이터 — 랜딩 페이지 생성 제품.
 * types/index.ts 의 계약 타입만 사용한다(재선언 금지).
 * 실 API 가 없어도 화면이 완성된 상태로 보이도록 구체적인 값으로 채운다.
 */
import type {
  AnalyticsEvent,
  AnalyticsSummary,
  BrandLogo,
  LandingPageSection,
  LandingSectionType,
  Testimonial,
} from "@/types";

/** 상단 로고 (feature: 상단 로고 표시) */
export const mockBrandLogo: BrandLogo = {
  name: "Landfold",
  href: "/",
  alt: "Landfold 로고 — 랜딩 페이지 생성 서비스 홈으로 이동",
};

/** SEO 메타 태그 / SNS 공유 카드 (feature: 기본 SEO 메타 태그 적용) */
export interface SeoMeta {
  id: string;
  /** 적용 대상 경로 */
  route: string;
  title: string;
  description: string;
  /** SNS 공유 카드 제목 */
  ogTitle: string;
  /** SNS 공유 카드 설명 */
  ogDescription: string;
  /** 공유 카드 유형 */
  ogType: "website" | "article";
  canonical: string;
  keywords: string[];
  updatedAt: string;
}

export const mockSeoMeta: SeoMeta[] = [
  {
    id: "seo-home",
    route: "/",
    title: "Landfold — 5분 만에 완성하는 전환형 랜딩 페이지",
    description:
      "문제 제시부터 최종 CTA까지, 검증된 섹션 구조로 랜딩 페이지를 만들고 방문·클릭 성과를 바로 확인하세요.",
    ogTitle: "랜딩 페이지, 이제 5분이면 충분합니다",
    ogDescription: "Landfold는 전환에 필요한 섹션만 남긴 랜딩 페이지 빌더입니다.",
    ogType: "website",
    canonical: "https://landfold.app/",
    keywords: ["랜딩 페이지", "전환율", "노코드", "CTA"],
    updatedAt: "2026-08-28T09:10:00.000Z",
  },
  {
    id: "seo-hero",
    route: "/hero",
    title: "Hero 섹션 — Landfold",
    description: "첫 화면에서 한 문장으로 가치를 전달하는 Hero 섹션 구성 가이드입니다.",
    ogTitle: "새로운 시작을 지금",
    ogDescription: "첫 3초에 승부를 보는 Hero 섹션 템플릿.",
    ogType: "website",
    canonical: "https://landfold.app/hero",
    keywords: ["히어로 섹션", "첫인상", "헤드라인"],
    updatedAt: "2026-08-29T02:40:00.000Z",
  },
  {
    id: "seo-screen",
    route: "/screen",
    title: "문제 제시 섹션 — Landfold",
    description: "방문자가 겪는 문제를 정확히 짚어 다음 섹션으로 끌고 가는 구조입니다.",
    ogTitle: "고객의 문제를 먼저 말하세요",
    ogDescription: "공감에서 시작하는 랜딩 페이지 문제 제시 섹션.",
    ogType: "article",
    canonical: "https://landfold.app/screen",
    keywords: ["문제 정의", "페인 포인트", "카피라이팅"],
    updatedAt: "2026-08-30T05:15:00.000Z",
  },
  {
    id: "seo-screen-2",
    route: "/screen-2",
    title: "서비스 소개 섹션 — Landfold",
    description: "무엇을 어떻게 해결하는지 세 단계로 설명하는 서비스 소개 섹션입니다.",
    ogTitle: "해결 방법을 세 단계로",
    ogDescription: "기능 나열 대신 흐름으로 설명하는 소개 섹션.",
    ogType: "article",
    canonical: "https://landfold.app/screen-2",
    keywords: ["서비스 소개", "온보딩", "사용 흐름"],
    updatedAt: "2026-09-01T01:05:00.000Z",
  },
  {
    id: "seo-cta",
    route: "/cta",
    title: "최종 CTA 섹션 — Landfold",
    description: "망설임을 없애는 마지막 한 번의 제안. 이동 경로와 클릭 성과를 함께 관리합니다.",
    ogTitle: "지금 시작하면 오늘 안에 배포됩니다",
    ogDescription: "최종 CTA 섹션과 클릭 측정까지 한 번에.",
    ogType: "website",
    canonical: "https://landfold.app/cta",
    keywords: ["CTA", "전환", "회원가입"],
    updatedAt: "2026-09-05T07:20:00.000Z",
  },
];

/** 랜딩 페이지 섹션 5종 (와이어프레임 화면과 1:1) */
export const mockSections: LandingPageSection[] = [
  {
    id: "section-hero",
    type: "hero",
    route: "/hero",
    title: "Hero 섹션",
    subtitle: "톤: 신뢰형 클린 · 한 화면에 하나의 메시지",
    headline: "새로운 시작을 지금",
    body: "기획서 한 줄만 있으면 충분합니다. 전환에 필요한 섹션 구조를 골라 바로 배포하세요.",
    items: [
      {
        id: "hero-item-a",
        label: "5분 배포",
        description: "템플릿 선택부터 공개 주소 발급까지 평균 4분 38초가 걸립니다.",
      },
      {
        id: "hero-item-b",
        label: "검증된 섹션 순서",
        description: "문제 제시 → 서비스 소개 → 장점 → 후기 → CTA 흐름이 기본값입니다.",
      },
      {
        id: "hero-item-c",
        label: "모바일 우선",
        description: "모든 섹션이 360px 화면에서 먼저 검수된 뒤 PC로 확장됩니다.",
      },
      {
        id: "hero-item-d",
        label: "성과 측정 내장",
        description: "방문과 CTA 클릭이 같은 기준으로 자동 집계됩니다.",
      },
      {
        id: "hero-item-e",
        label: "코드 없이 수정",
        description: "문구와 버튼 목적지를 화면에서 바로 바꿀 수 있습니다.",
      },
    ],
    statusLabel: "게시 중 · 마지막 배포 9월 5일",
    status: "published",
    order: 1,
    cta: {
      id: "cta-hero",
      label: "무료로 시작하기",
      href: "/screen",
      trackingId: "hero_primary",
      variant: "primary",
    },
  },
  {
    id: "section-problem",
    type: "problem",
    route: "/screen",
    title: "문제 제시 섹션",
    subtitle: "톤: 신뢰형 클린 · 방문자의 상황을 먼저 말한다",
    headline: "문제 상황",
    body: "좋은 제품인데 첫 화면에서 이탈합니다. 대부분은 메시지가 아니라 구조의 문제입니다.",
    items: [
      {
        id: "problem-item-a",
        label: "무엇을 파는지 모르겠다",
        description: "첫 화면에서 가치를 파악하지 못한 방문자의 68%가 10초 안에 떠납니다.",
      },
      {
        id: "problem-item-b",
        label: "버튼이 어디 있는지 모르겠다",
        description: "CTA가 세 개 이상이면 클릭률이 오히려 떨어집니다.",
      },
      {
        id: "problem-item-c",
        label: "모바일에서 글자가 겹친다",
        description: "PC 기준으로 만든 페이지는 좁은 화면에서 가로 스크롤이 생깁니다.",
      },
      {
        id: "problem-item-d",
        label: "성과를 알 수 없다",
        description: "방문 수는 있는데 어떤 CTA가 눌렸는지 기록이 남지 않습니다.",
      },
      {
        id: "problem-item-e",
        label: "수정에 개발자가 필요하다",
        description: "문구 한 줄 고치는 데 배포 일정을 기다려야 합니다.",
      },
    ],
    statusLabel: "게시 중 · 이탈 구간 분석 반영",
    status: "published",
    order: 2,
    cta: {
      id: "cta-problem",
      label: "계속",
      href: "/screen-2",
      trackingId: "problem_next",
      variant: "primary",
    },
  },
  {
    id: "section-service",
    type: "service",
    route: "/screen-2",
    title: "서비스 소개 섹션",
    subtitle: "톤: 신뢰형 클린 · 해결 방법을 순서대로",
    headline: "서비스 소개",
    body: "Landfold는 섹션 단위로 페이지를 조립하고, 각 섹션의 성과를 따로 봅니다.",
    items: [
      {
        id: "service-item-a",
        label: "1. 구조 선택",
        description: "제품 유형에 맞는 섹션 순서를 고르면 초안이 채워집니다.",
      },
      {
        id: "service-item-b",
        label: "2. 문구 교체",
        description: "헤드라인과 항목 설명만 바꾸면 초안이 제품 문서가 됩니다.",
      },
      {
        id: "service-item-c",
        label: "3. CTA 연결",
        description: "회원가입·서비스 시작 등 내부 경로만 목적지로 지정할 수 있습니다.",
      },
      {
        id: "service-item-d",
        label: "4. 공유 카드 설정",
        description: "SNS 공유 카드 제목·설명을 경로별로 관리합니다.",
      },
      {
        id: "service-item-e",
        label: "5. 성과 확인",
        description: "방문과 클릭이 쌓이면 전환율이 자동으로 계산됩니다.",
      },
    ],
    statusLabel: "게시 중 · 소개 흐름 5단계",
    status: "published",
    order: 3,
    cta: {
      id: "cta-service",
      label: "계속",
      href: "/screen-3",
      trackingId: "service_next",
      variant: "primary",
    },
  },
  {
    id: "section-benefit",
    type: "benefit",
    route: "/screen-3",
    title: "핵심 장점 섹션",
    subtitle: "톤: 신뢰형 클린 · 숫자로 말한다",
    headline: "주요 콘텐츠",
    body: "속도, 일관성, 측정. 랜딩 페이지에서 실제로 차이를 만드는 세 가지에 집중합니다.",
    items: [
      {
        id: "benefit-item-a",
        label: "배포 속도 12배",
        description: "평균 3일 걸리던 랜딩 페이지 공개가 5분으로 줄었습니다.",
      },
      {
        id: "benefit-item-b",
        label: "전환율 2.4배",
        description: "단일 메시지 구조로 바꾼 팀의 CTA 클릭률 중앙값입니다.",
      },
      {
        id: "benefit-item-c",
        label: "모든 화면 대응",
        description: "360px부터 1440px까지 동일한 콘텐츠 순서를 유지합니다.",
      },
      {
        id: "benefit-item-d",
        label: "깨지지 않는 링크",
        description: "CTA 목적지는 내부 경로만 허용해 오류 페이지로 이동하지 않습니다.",
      },
      {
        id: "benefit-item-e",
        label: "측정 실패 격리",
        description: "이벤트 기록이 실패해도 페이지 표시와 이동은 그대로 동작합니다.",
      },
    ],
    statusLabel: "게시 중 · 최근 30일 지표 기준",
    status: "published",
    order: 4,
    cta: {
      id: "cta-benefit",
      label: "계속",
      href: "/cta",
      trackingId: "benefit_next",
      variant: "primary",
    },
  },
  {
    id: "section-cta",
    type: "cta",
    route: "/cta",
    title: "최종 CTA 섹션",
    subtitle: "톤: 신뢰형 클린 · 마지막 한 번의 제안",
    headline: "주요 콘텐츠",
    body: "지금 시작하면 오늘 안에 첫 페이지를 공개할 수 있습니다. 카드 등록은 필요 없습니다.",
    items: [
      {
        id: "cta-item-a",
        label: "카드 등록 없음",
        description: "체험 기간 동안 결제 수단을 입력하지 않습니다.",
      },
      {
        id: "cta-item-b",
        label: "즉시 공개 주소",
        description: "생성과 동시에 공유 가능한 주소가 발급됩니다.",
      },
      {
        id: "cta-item-c",
        label: "언제든 되돌리기",
        description: "배포 이력에서 이전 버전으로 한 번에 복구할 수 있습니다.",
      },
      {
        id: "cta-item-d",
        label: "성과 리포트 주 1회",
        description: "방문·클릭·전환율 요약을 메일로 받아 봅니다.",
      },
      {
        id: "cta-item-e",
        label: "도움말 응답 4시간",
        description: "평일 기준 평균 4시간 안에 답변드립니다.",
      },
    ],
    statusLabel: "게시 중 · 전환 목표 지점",
    status: "published",
    order: 5,
    cta: {
      id: "cta-final",
      label: "계속",
      href: "/",
      trackingId: "final_primary",
      variant: "primary",
    },
  },
];

/** 사용자 후기 (feature: 사용자 후기 섹션) */
export const mockTestimonials: Testimonial[] = [
  {
    id: "tm-1",
    quote:
      "기획 문서를 붙여넣고 문구만 다듬었더니 그날 오후에 페이지가 열렸습니다. 개발 일정에 줄 서지 않아도 된다는 게 가장 큽니다.",
    author: "김수현",
    role: "브릿지랩 · 그로스 매니저",
    result: "배포 3일 → 4시간",
    rating: 5,
    createdAt: "2026-08-12T04:20:00.000Z",
  },
  {
    id: "tm-2",
    quote:
      "CTA를 하나로 줄이라는 기본 구조가 처음엔 불안했는데, 2주 만에 클릭률이 두 배가 됐습니다.",
    author: "정민호",
    role: "오르빗커머스 · 마케팅 리드",
    result: "전환율 2.4배",
    rating: 5,
    createdAt: "2026-08-19T08:45:00.000Z",
  },
  {
    id: "tm-3",
    quote:
      "모바일에서 글자가 겹치는 문제로 매번 QA를 돌렸는데, 이제 좁은 화면부터 맞춰져 나와서 검수 시간이 사라졌습니다.",
    author: "이아름",
    role: "핀노트 · 프로덕트 디자이너",
    result: "QA 시간 70% 감소",
    rating: 4,
    createdAt: "2026-08-25T11:30:00.000Z",
  },
  {
    id: "tm-4",
    quote:
      "방문과 클릭이 같은 기준으로 쌓이니까 어떤 섹션에서 이탈하는지 회의에서 바로 이야기할 수 있게 됐습니다.",
    author: "박지훈",
    role: "세움에듀 · 대표",
    result: "주간 리포트 자동화",
    rating: 5,
    createdAt: "2026-09-01T02:05:00.000Z",
  },
  {
    id: "tm-5",
    quote:
      "공유 카드 문구를 경로마다 따로 잡을 수 있어서, 채널별로 다른 메시지를 던지기 편했습니다.",
    author: "한여울",
    role: "무드테이블 · 콘텐츠 매니저",
    result: "SNS 유입 1.8배",
    rating: 4,
    createdAt: "2026-09-04T06:50:00.000Z",
  },
  {
    id: "tm-6",
    quote:
      "링크가 빈 페이지로 가는 사고가 한 번 있었는데, 내부 경로만 허용하도록 막혀 있어서 그 뒤로는 재발하지 않았습니다.",
    author: "최도윤",
    role: "라인케어 · 운영 매니저",
    result: "링크 오류 0건",
    rating: 5,
    createdAt: "2026-09-08T09:15:00.000Z",
  },
];

/** 방문·CTA 클릭 이벤트 (feature: 방문 및 CTA 클릭 이벤트 측정) */
export const mockAnalyticsEvents: AnalyticsEvent[] = [
  {
    id: "ev-1",
    name: "page_view",
    pagePath: "/hero",
    ctaId: null,
    device: "mobile",
    occurredAt: "2026-09-12T23:41:00.000Z",
  },
  {
    id: "ev-2",
    name: "cta_click",
    pagePath: "/hero",
    ctaId: "hero_primary",
    device: "mobile",
    occurredAt: "2026-09-12T23:41:38.000Z",
  },
  {
    id: "ev-3",
    name: "page_view",
    pagePath: "/screen",
    ctaId: null,
    device: "mobile",
    occurredAt: "2026-09-12T23:41:40.000Z",
  },
  {
    id: "ev-4",
    name: "page_view",
    pagePath: "/screen-2",
    ctaId: null,
    device: "desktop",
    occurredAt: "2026-09-13T01:02:11.000Z",
  },
  {
    id: "ev-5",
    name: "cta_click",
    pagePath: "/screen-2",
    ctaId: "service_next",
    device: "desktop",
    occurredAt: "2026-09-13T01:03:02.000Z",
  },
  {
    id: "ev-6",
    name: "page_view",
    pagePath: "/screen-3",
    ctaId: null,
    device: "desktop",
    occurredAt: "2026-09-13T01:03:05.000Z",
  },
  {
    id: "ev-7",
    name: "page_view",
    pagePath: "/cta",
    ctaId: null,
    device: "desktop",
    occurredAt: "2026-09-13T01:05:47.000Z",
  },
  {
    id: "ev-8",
    name: "cta_click",
    pagePath: "/cta",
    ctaId: "final_primary",
    device: "desktop",
    occurredAt: "2026-09-13T01:06:20.000Z",
  },
];

/** 섹션 조회 헬퍼 — 라우트/종류로 찾는다 */
export function findSectionByRoute(route: string): LandingPageSection | null {
  return mockSections.find((section) => section.route === route) ?? null;
}

export function findSectionByType(type: LandingSectionType): LandingPageSection | null {
  return mockSections.find((section) => section.type === type) ?? null;
}

export function findSeoByRoute(route: string): SeoMeta | null {
  return mockSeoMeta.find((meta) => meta.route === route) ?? null;
}

/** 이벤트 목록에서 요약 지표를 계산한다 (방문/클릭을 구분해 동일 기준으로 집계) */
export function summarizeEvents(events: AnalyticsEvent[]): AnalyticsSummary {
  const pageViews = events.filter((event) => event.name === "page_view").length;
  const ctaClicks = events.filter((event) => event.name === "cta_click").length;
  const lastEventAt = events.reduce<string | null>((latest, event) => {
    if (latest === null || event.occurredAt > latest) return event.occurredAt;
    return latest;
  }, null);
  return {
    pageViews,
    ctaClicks,
    conversionRate: pageViews === 0 ? 0 : Math.round((ctaClicks / pageViews) * 1000) / 1000,
    lastEventAt,
  };
}

export const mockAnalyticsSummary: AnalyticsSummary = summarizeEvents(mockAnalyticsEvents);
