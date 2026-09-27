import type { CtaUpdateInput } from "@/lib/schema";
import { getMockCta, mockCtaList, mockCtaSummary, type MockCta, type MockCtaSummary } from "@/lib/mock-data";
import { listAnalyticsEvent } from "@/lib/data/analyticsevent";

/** CTA 정의는 정적 설정이다(DB 테이블 없음). 요약 지표만 analytics_events 에서 집계한다. */
export type Cta = MockCta;
export type CtaSummary = MockCtaSummary;

export async function listCta(): Promise<Cta[]> {
  return [...mockCtaList];
}

export async function getCta(id: string): Promise<Cta | null> {
  return getMockCta(id) ?? null;
}

export async function updateCta(id: string, input: CtaUpdateInput): Promise<Cta | null> {
  const cta = getMockCta(id);
  if (!cta) return null;
  Object.assign(cta, input);
  return cta;
}

export async function getCtaSummary(): Promise<CtaSummary> {
  try {
    const events = await listAnalyticsEvent();
    if (events.length === 0) return mockCtaSummary;
    const visits = events.filter((e) => e.name === "page_view").length;
    const ctaClicks = events.filter((e) => e.name === "cta_click").length;
    const last = events
      .map((e) => e.occurredAt ?? e.createdAt ?? "")
      .filter(Boolean)
      .sort()
      .at(-1);
    return {
      visits,
      ctaClicks,
      conversionRate: visits > 0 ? Math.round((ctaClicks / visits) * 1000) / 10 : 0,
      lastEventAt: last ?? mockCtaSummary.lastEventAt,
    };
  } catch {
    return mockCtaSummary;
  }
}
