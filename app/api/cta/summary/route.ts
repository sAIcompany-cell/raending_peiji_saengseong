import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsPageStat, AnalyticsSummary } from "@/types";

export async function GET(): Promise<Response> {
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

  const summary: AnalyticsSummary = {
    totalViews,
    totalCtaClicks,
    conversionRate: totalViews === 0 ? 0 : Number(((totalCtaClicks / totalViews) * 100).toFixed(1)),
    byPage: Array.from(pageStats.values()),
    lastEventAt,
  };

  return Response.json(summary);
}
