import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";
import {
  mockAnalyticsEventList,
  mockCtaList,
  mockLogoList,
  mockResponsiveSettingList,
  mockSeoMetadataList,
  mockTestimonialList,
} from "@/lib/mock-data";


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

export async function listLogos(): Promise<ApiResult<LandingPageSection[]>> {
  return fetchData("/api/fe253b445", () => mockLogoList);
}

export async function getLogo(
  id: string,
): Promise<ApiResult<LandingPageSection | null>> {
  return fetchData(`/api/fe253b445/${encodeURIComponent(id)}`, () =>
    mockLogoList.find((item) => item.id === id) ?? null,
  );
}

export async function listResponsiveSettings(): Promise<
  ApiResult<LandingPageSection[]>
> {
  return fetchData("/api/pc", () => mockResponsiveSettingList);
}

export async function getResponsiveSetting(
  id: string,
): Promise<ApiResult<LandingPageSection | null>> {
  return fetchData(`/api/pc/${encodeURIComponent(id)}`, () =>
    mockResponsiveSettingList.find((item) => item.id === id) ?? null,
  );
}

export async function listSeoMetadata(): Promise<
  ApiResult<LandingPageSection[]>
> {
  return fetchData("/api/seo", () => mockSeoMetadataList);
}

export async function getSeoMetadata(
  id: string,
): Promise<ApiResult<LandingPageSection | null>> {
  return fetchData(`/api/seo/${encodeURIComponent(id)}`, () =>
    mockSeoMetadataList.find((item) => item.id === id) ?? null,
  );
}

export async function listTestimonials(): Promise<ApiResult<Testimonial[]>> {
  return fetchData("/api/screen-ff2f57", () => mockTestimonialList);
}

export async function decideTestimonial(
  id: string,
): Promise<ApiResult<Testimonial | null>> {
  return sendData(
    `/api/screen-ff2f57/${encodeURIComponent(id)}/decision`,
    {},
    () => mockTestimonialList.find((item) => item.id === id) ?? null,
  );
}

export async function listCtas(): Promise<ApiResult<LandingPageSection[]>> {
  return fetchData("/api/cta", () => mockCtaList);
}

export async function getCta(
  id: string,
): Promise<ApiResult<LandingPageSection | null>> {
  return fetchData(`/api/cta/${encodeURIComponent(id)}`, () =>
    mockCtaList.find((item) => item.id === id) ?? null,
  );
}

export async function getCtaSummary(): Promise<ApiResult<AnalyticsEvent[]>> {
  return fetchData("/api/cta/summary", () => mockAnalyticsEventList);
}
