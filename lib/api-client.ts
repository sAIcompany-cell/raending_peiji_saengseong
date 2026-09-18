import {
  SiteLogo,
  ResponsiveSetting,
  SeoMetadata,
  Testimonial,
  CtaButton,
  AnalyticsEvent
} from "@/types";
import {
  mockLogoList,
  mockResponsiveSettingList,
  mockSeoMetadataList,
  mockTestimonialList,
  mockCtaList,
  mockAnalyticsEventList
} from "./mock-data";

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
  return fetchData<T>(path, mock, { method, body: JSON.stringify(body) });
}

export async function listLogos(): Promise<ApiResult<SiteLogo[]>> {
  return fetchData("/api/fe253b445", () => mockLogoList);
}

export async function getLogo(id: string): Promise<ApiResult<SiteLogo | null>> {
  return fetchData(`/api/fe253b445/${id}`, () => mockLogoList.find(l => l.id === id) || null);
}

export async function listResponsiveSettings(): Promise<ApiResult<ResponsiveSetting[]>> {
  return fetchData("/api/pc", () => mockResponsiveSettingList);
}

export async function getResponsiveSetting(id: string): Promise<ApiResult<ResponsiveSetting | null>> {
  return fetchData(`/api/pc/${id}`, () => mockResponsiveSettingList.find(r => r.id === id) || null);
}

export async function listSeoMetadata(): Promise<ApiResult<SeoMetadata[]>> {
  return fetchData("/api/seo", () => mockSeoMetadataList);
}

export async function getSeoMetadata(id: string): Promise<ApiResult<SeoMetadata | null>> {
  return fetchData(`/api/seo/${id}`, () => mockSeoMetadataList.find(s => s.id === id) || null);
}

export async function listTestimonials(): Promise<ApiResult<Testimonial[]>> {
  return fetchData("/api/screen-ff2f57", () => mockTestimonialList);
}

export async function decideTestimonial(id: string, decision: any): Promise<ApiResult<Testimonial | null>> {
  return sendData(`/api/screen-ff2f57/${id}/decision`, decision, () => mockTestimonialList.find(t => t.id === id) || null);
}

export async function listCtas(): Promise<ApiResult<CtaButton[]>> {
  return fetchData("/api/cta", () => mockCtaList);
}

export async function getCta(id: string): Promise<ApiResult<CtaButton | null>> {
  return fetchData(`/api/cta/${id}`, () => mockCtaList.find(c => c.id === id) || null);
}

export async function getCtaSummary(): Promise<ApiResult<AnalyticsEvent[]>> {
  return fetchData("/api/cta/summary", () => mockAnalyticsEventList);
}
