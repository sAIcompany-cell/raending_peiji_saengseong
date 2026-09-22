import {
  mockAnalyticsEventList,
  mockCtaList,
  mockLogoList,
  mockResponsiveSettingList,
  mockSeoMetadataList,
  mockTestimonialList,
} from "@/lib/mock-data";
import type {
  AnalyticsPageStat,
  AnalyticsSummary,
  ApiListResponse,
  CtaButton,
  ResponsiveSetting,
  SeoMetadata,
  SiteLogo,
  Testimonial,
  TestimonialDecisionInput,
} from "@/types";

const MOCK_FLAG = process.env.NEXT_PUBLIC_USE_MOCK_DATA;

export const usingMockData: boolean = MOCK_FLAG !== "false";

export type ApiResult<T> =
  | { ok: true; data: T; source: "mock" | "api" }
  | { ok: false; error: string };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "데이터를 불러오지 못했어요.";
}

export async function fetchData<T>(
  path: string,
  mock: () => T,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  if (usingMockData) {
    await delay(120);
    try {
      return { ok: true, data: mock(), source: "mock" };
    } catch (error) {
      return { ok: false, error: getErrorMessage(error) };
    }
  }

  try {
    const res = await fetch(path, {
      ...init,
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    });

    if (!res.ok) {
      const payload = (await res.json().catch(() => null)) as { message?: string } | null;
      return {
        ok: false,
        error: payload?.message ?? `요청에 실패했어요 (${res.status})`,
      };
    }

    return { ok: true, data: (await res.json()) as T, source: "api" };
  } catch {
    console.warn(`[api-client] ${path} 호출에 실패해 목업 데이터로 대체했어요.`);
    try {
      return { ok: true, data: mock(), source: "mock" };
    } catch (error) {
      return { ok: false, error: getErrorMessage(error) };
    }
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
    try {
      return { ok: true, data: mock(), source: "mock" };
    } catch (error) {
      return { ok: false, error: getErrorMessage(error) };
    }
  }

  return fetchData<T>(path, mock, { method, body: JSON.stringify(body) });
}

function asListResponse<T>(items: T[]): ApiListResponse<T> {
  return { items: [...items], total: items.length };
}

function requireItem<T extends { id: string }>(items: T[], id: string, label: string): T {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`${label} 정보를 찾을 수 없어요.`);
  }
  return item;
}

function createAnalyticsSummary(): AnalyticsSummary {
  const pageStats = new Map<string, AnalyticsPageStat>();

  for (const event of mockAnalyticsEventList) {
    const current = pageStats.get(event.pagePath) ?? {
      pagePath: event.pagePath,
      views: 0,
      ctaClicks: 0,
    };

    if (event.name === "page_view") {
      current.views += 1;
    } else {
      current.ctaClicks += 1;
    }

    pageStats.set(event.pagePath, current);
  }

  const totalViews = mockAnalyticsEventList.filter((event) => event.name === "page_view").length;
  const totalCtaClicks = mockAnalyticsEventList.filter((event) => event.name === "cta_click").length;
  const lastEventAt = mockAnalyticsEventList.reduce<string | null>((latest, event) => {
    if (latest === null || event.occurredAt > latest) {
      return event.occurredAt;
    }
    return latest;
  }, null);

  return {
    totalViews,
    totalCtaClicks,
    conversionRate: totalViews === 0 ? 0 : Number(((totalCtaClicks / totalViews) * 100).toFixed(1)),
    byPage: Array.from(pageStats.values()),
    lastEventAt,
  };
}

export async function listLogos(): Promise<ApiResult<ApiListResponse<SiteLogo>>> {
  return fetchData("/api/fe253b445", () => asListResponse(mockLogoList));
}

export async function getLogo(id: string): Promise<ApiResult<SiteLogo>> {
  return fetchData(`/api/fe253b445/${encodeURIComponent(id)}`, () =>
    requireItem(mockLogoList, id, "로고"),
  );
}

export async function listResponsiveSettings(): Promise<
  ApiResult<ApiListResponse<ResponsiveSetting>>
> {
  return fetchData("/api/pc", () => asListResponse(mockResponsiveSettingList));
}

export async function getResponsiveSetting(id: string): Promise<ApiResult<ResponsiveSetting>> {
  return fetchData(`/api/pc/${encodeURIComponent(id)}`, () =>
    requireItem(mockResponsiveSettingList, id, "반응형 설정"),
  );
}

export async function listSeoMetadata(): Promise<ApiResult<ApiListResponse<SeoMetadata>>> {
  return fetchData("/api/seo", () => asListResponse(mockSeoMetadataList));
}

export async function getSeoMetadata(id: string): Promise<ApiResult<SeoMetadata>> {
  return fetchData(`/api/seo/${encodeURIComponent(id)}`, () =>
    requireItem(mockSeoMetadataList, id, "SEO 메타"),
  );
}

export async function listTestimonials(): Promise<ApiResult<ApiListResponse<Testimonial>>> {
  return fetchData("/api/screen-ff2f57", () => asListResponse(mockTestimonialList));
}

export async function decideTestimonial(
  id: string,
  input: TestimonialDecisionInput,
): Promise<ApiResult<Testimonial>> {
  return sendData(`/api/screen-ff2f57/${encodeURIComponent(id)}/decision`, input, () => {
    const testimonial = requireItem(mockTestimonialList, id, "후기");
    if (testimonial.status !== "pending") {
      throw new Error("이미 판정이 완료된 후기예요.");
    }

    testimonial.status = input.decision === "approve" ? "approved" : "rejected";
    testimonial.decidedAt = new Date().toISOString();
    return testimonial;
  });
}

export async function listCtas(): Promise<ApiResult<ApiListResponse<CtaButton>>> {
  return fetchData("/api/cta", () => asListResponse(mockCtaList));
}

export async function getCta(id: string): Promise<ApiResult<CtaButton>> {
  return fetchData(`/api/cta/${encodeURIComponent(id)}`, () =>
    requireItem(mockCtaList, id, "CTA"),
  );
}

export async function getCtaSummary(): Promise<ApiResult<AnalyticsSummary>> {
  return fetchData("/api/cta/summary", createAnalyticsSummary);
}
