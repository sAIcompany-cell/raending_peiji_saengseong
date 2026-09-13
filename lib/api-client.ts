import {
  mockAnalyticsEventList,
  mockLandingPageSectionList,
  mockTestimonialList,
} from "@/lib/mock-data";
import type {
  AnalyticsEvent,
  ApiResponse,
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

  return fetchData<T>(path, mock, { method, body: JSON.stringify(body) });
}

function success<T>(data: T): ApiResponse<T> {
  return { data };
}

function findSection(id: string): LandingPageSection | undefined {
  return mockLandingPageSectionList.find((section) => section.id === id);
}

export async function listLogoSections(): Promise<
  ApiResult<ApiResponse<LandingPageSection[]>>
> {
  return fetchData("/api/fe253b445", () => success(mockLandingPageSectionList));
}

export async function getLogoSection(
  id: string,
): Promise<ApiResult<ApiResponse<LandingPageSection>>> {
  return fetchData(`/api/fe253b445/${encodeURIComponent(id)}`, () =>
    success(findSection(id) ?? mockLandingPageSectionList[0]),
  );
}

export async function listResponsiveSections(): Promise<
  ApiResult<ApiResponse<LandingPageSection[]>>
> {
  return fetchData("/api/pc", () => success(mockLandingPageSectionList));
}

export async function getResponsiveSection(
  id: string,
): Promise<ApiResult<ApiResponse<LandingPageSection>>> {
  return fetchData(`/api/pc/${encodeURIComponent(id)}`, () =>
    success(findSection(id) ?? mockLandingPageSectionList[0]),
  );
}

export async function listSeoSections(): Promise<
  ApiResult<ApiResponse<LandingPageSection[]>>
> {
  return fetchData("/api/seo", () => success(mockLandingPageSectionList));
}

export async function getSeoSection(
  id: string,
): Promise<ApiResult<ApiResponse<LandingPageSection>>> {
  return fetchData(`/api/seo/${encodeURIComponent(id)}`, () =>
    success(findSection(id) ?? mockLandingPageSectionList[0]),
  );
}

export async function listTestimonials(): Promise<
  ApiResult<ApiResponse<Testimonial[]>>
> {
  return fetchData("/api/screen-ff2f57", () => success(mockTestimonialList));
}

export async function decideTestimonial(
  id: string,
): Promise<ApiResult<ApiResponse<Testimonial>>> {
  const fallback =
    mockTestimonialList.find((testimonial) => testimonial.id === id) ??
    mockTestimonialList[0];

  return fetchData(
    `/api/screen-ff2f57/${encodeURIComponent(id)}/decision`,
    () => success(fallback),
    { method: "POST" },
  );
}

export async function listCtaSections(): Promise<
  ApiResult<ApiResponse<LandingPageSection[]>>
> {
  return fetchData("/api/cta", () =>
    success(
      mockLandingPageSectionList.filter((section) => section.type === "cta"),
    ),
  );
}

export async function getCtaSection(
  id: string,
): Promise<ApiResult<ApiResponse<LandingPageSection>>> {
  const fallback =
    findSection(id) ??
    mockLandingPageSectionList.find((section) => section.type === "cta") ??
    mockLandingPageSectionList[0];

  return fetchData(`/api/cta/${encodeURIComponent(id)}`, () => success(fallback));
}

export async function getCtaSummary(): Promise<
  ApiResult<ApiResponse<AnalyticsEvent[]>>
> {
  return fetchData("/api/cta/summary", () => success(mockAnalyticsEventList));
}
