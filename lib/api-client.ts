
import {
  getMockAnalyticsEvent,
  getMockCta,
  getMockLandingPageSection,
  getMockLogo,
  getMockResponsiveSetting,
  getMockSeoMetadata,
  getMockTestimonial,
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
    if (!res.ok) return { ok: false, error: `요청에 실패했어요 (${res.status})` };
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
  return fetchData<T>(path, mock, { method, body: JSON.stringify(body) });
}

export function listLandingPageSections(): Promise<ApiResult<LandingPageSection[]>> {
  return fetchData("/api/landingpagesections", () => mockLandingPageSectionList);
}

export function listTestimonials(): Promise<ApiResult<Testimonial[]>> {
  return fetchData("/api/testimonials", () => mockTestimonialList);
}

export function decideTestimonial(id: string): Promise<ApiResult<Testimonial | null>> {
  return sendData(`/api/screen-ff2f57/${id}/decision`, {}, () => getMockTestimonial(id) ?? null);
}

export function listAnalyticsEvents(): Promise<ApiResult<AnalyticsEvent[]>> {
  return fetchData("/api/analyticsevents", () => mockAnalyticsEventList);
}

export function recordAnalyticsEvent(
  event: Partial<AnalyticsEvent>,
): Promise<ApiResult<AnalyticsEvent>> {
  return sendData("/api/analyticsevents", event, () => ({
    id: `analytics-event-${Date.now()}`,
    name: event.name ?? "page_view",
    pagePath: event.pagePath ?? "/",
    occurredAt: event.occurredAt ?? new Date().toISOString(),
    createdAt: new Date().toISOString(),
  }));
}

export function listLogos() {
  return fetchData("/api/fe253b445", () => mockLogoList);
}

export function getLogo(id: string) {
  return fetchData(`/api/fe253b445/${id}`, () => getMockLogo(id) ?? null);
}

export function listResponsiveSettings() {
  return fetchData("/api/pc", () => mockResponsiveSettingList);
}

export function getResponsiveSetting(id: string) {
  return fetchData(`/api/pc/${id}`, () => getMockResponsiveSetting(id) ?? null);
}

export function listSeoMetadata() {
  return fetchData("/api/seo", () => mockSeoMetadataList);
}

export function getSeoMetadata(id: string) {
  return fetchData(`/api/seo/${id}`, () => getMockSeoMetadata(id) ?? null);
}

export function listCtas() {
  return fetchData("/api/cta", () => mockCtaList);
}

export function getCta(id: string) {
  return fetchData(`/api/cta/${id}`, () => getMockCta(id) ?? null);
}

export function updateCta(id: string, body: unknown) {
  return sendData(`/api/cta/${id}`, body, () => getMockCta(id) ?? null, "PATCH");
}

export function getCtaSummary() {
  return fetchData("/api/cta/summary", () => mockCtaSummary);
}
