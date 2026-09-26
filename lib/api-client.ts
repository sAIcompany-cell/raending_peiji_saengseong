

import {
  mockAnalyticsEventList,
  mockCtaList,
  mockCtaSummary,
  mockLandingPageSectionList,
  mockLogoList,
  mockResponsiveSettingList,
  mockSeoMetadataList,
  mockTestimonialList,
} from "@/lib/mock-data";
import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";

const MOCK_FLAG = process.env.NEXT_PUBLIC_USE_MOCK_DATA;


export const usingMockData: boolean = MOCK_FLAG !== "false";

export type ApiResult<T> =
  | { ok: true; data: T; source: "mock" | "api" }
  | { ok: false; error: string };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchData<T>(
  path: string,
  mock: () => T,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  if (usingMockData) {
    await delay(120);
    return { ok: true, data: mock(), source: "mock" };
  }

  try {
    const res = await fetch(path, {
      ...init,
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    });

    if (!res.ok) {
      return { ok: false, error: `요청에 실패했어요 (${res.status})` };
    }

    return { ok: true, data: (await res.json()) as T, source: "api" };
  } catch {
    console.warn(`[api-client] ${path} 호출에 실패해 목업 데이터로 대체했어요.`);
    return { ok: true, data: mock(), source: "mock" };
  }
}

export async function sendData<T>(
  path: string,
  body: unknown,
  mock: () => T,
  method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST",
): Promise<ApiResult<T>> {
  if (usingMockData) {
    await delay(160);
    return { ok: true, data: mock(), source: "mock" };
  }

  return fetchData<T>(path, mock, {
    method,
    body: JSON.stringify(body),
  });
}

export async function listLandingPageSections(): Promise<ApiResult<LandingPageSection[]>> {
  return fetchData<LandingPageSection[]>(
    "/api/landingpagesections",
    () => mockLandingPageSectionList,
  );
}

export async function listTestimonials(): Promise<ApiResult<Testimonial[]>> {
  return fetchData<Testimonial[]>(
    "/api/testimonials",
    () => mockTestimonialList,
  );
}

export async function decideTestimonial(
  id: string,
  decision: unknown = {},
): Promise<ApiResult<Testimonial>> {
  const fallback = () => mockTestimonialList.find((item) => item.id === id) ?? mockTestimonialList[0];
  return sendData<Testimonial>(
    `/api/screen-ff2f57/${encodeURIComponent(id)}/decision`,
    decision,
    fallback,
    "POST",
  );
}

export async function listAnalyticsEvents(): Promise<ApiResult<AnalyticsEvent[]>> {
  return fetchData<AnalyticsEvent[]>(
    "/api/analyticsevents",
    () => mockAnalyticsEventList,
  );
}

export async function recordAnalyticsEvent(
  event: Partial<AnalyticsEvent>,
): Promise<ApiResult<AnalyticsEvent>> {
  return sendData<AnalyticsEvent>(
    "/api/analyticsevents",
    event,
    () => ({
      id: `event-${Date.now()}`,
      name: event.name,
      pagePath: event.pagePath,
      occurredAt: event.occurredAt ?? new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }),
    "POST",
  );
}

export async function listLogos(): Promise<ApiResult<typeof mockLogoList>> {
  return fetchData<typeof mockLogoList>("/api/fe253b445", () => mockLogoList);
}

export async function getLogo(id: string): Promise<ApiResult<(typeof mockLogoList)[number]>> {
  return fetchData<(typeof mockLogoList)[number]>(
    `/api/fe253b445/${encodeURIComponent(id)}`,
    () => mockLogoList.find((item) => item.id === id) ?? mockLogoList[0],
  );
}

export async function listResponsiveSettings(): Promise<ApiResult<typeof mockResponsiveSettingList>> {
  return fetchData<typeof mockResponsiveSettingList>("/api/pc", () => mockResponsiveSettingList);
}

export async function getResponsiveSetting(
  id: string,
): Promise<ApiResult<(typeof mockResponsiveSettingList)[number]>> {
  return fetchData<(typeof mockResponsiveSettingList)[number]>(
    `/api/pc/${encodeURIComponent(id)}`,
    () => mockResponsiveSettingList.find((item) => item.id === id) ?? mockResponsiveSettingList[0],
  );
}

export async function listSeoMetadata(): Promise<ApiResult<typeof mockSeoMetadataList>> {
  return fetchData<typeof mockSeoMetadataList>("/api/seo", () => mockSeoMetadataList);
}

export async function getSeoMetadata(
  id: string,
): Promise<ApiResult<(typeof mockSeoMetadataList)[number]>> {
  return fetchData<(typeof mockSeoMetadataList)[number]>(
    `/api/seo/${encodeURIComponent(id)}`,
    () => mockSeoMetadataList.find((item) => item.id === id) ?? mockSeoMetadataList[0],
  );
}

export async function listCtas(): Promise<ApiResult<typeof mockCtaList>> {
  return fetchData<typeof mockCtaList>("/api/cta", () => mockCtaList);
}

export async function getCta(id: string): Promise<ApiResult<(typeof mockCtaList)[number]>> {
  return fetchData<(typeof mockCtaList)[number]>(
    `/api/cta/${encodeURIComponent(id)}`,
    () => mockCtaList.find((item) => item.id === id) ?? mockCtaList[0],
  );
}

export async function updateCta(
  id: string,
  body: unknown,
): Promise<ApiResult<(typeof mockCtaList)[number]>> {
  return sendData<(typeof mockCtaList)[number]>(
    `/api/cta/${encodeURIComponent(id)}`,
    body,
    () => mockCtaList.find((item) => item.id === id) ?? mockCtaList[0],
    "PATCH",
  );
}

export async function getCtaSummary(): Promise<ApiResult<typeof mockCtaSummary>> {
  return fetchData<typeof mockCtaSummary>("/api/cta/summary", () => mockCtaSummary);
}
