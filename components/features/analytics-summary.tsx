"use client";

import { useMemo } from "react";
import { MousePointerClick, Eye, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { FadeIn } from "@/components/motion";
import { useAnalyticsEvents } from "@/components/features/analytics";
import type { AnalyticsEvent } from "@/types";

/**
 * 방문 및 CTA 클릭 이벤트 측정(feat_fb0d21267) 요약 타일.
 * 방문 이벤트와 CTA 클릭 이벤트를 구분해 같은 기준으로 집계한다.
 */
export function AnalyticsSummary({
  events,
  title = "방문 · CTA 클릭 측정",
}: {
  events?: AnalyticsEvent[];
  title?: string;
}) {
  const live = useAnalyticsEvents();
  const controlled = events !== undefined;
  const list = controlled ? (events ?? []) : live.events;
  const loading = controlled ? false : live.loading;

  const { pageViews, ctaClicks, lastAt } = useMemo(() => {
    const views = list.filter((item) => item.name === "page_view").length;
    const clicks = list.filter((item) => item.name === "cta_click").length;
    const latest = list
      .map((item) => item.occurredAt)
      .filter((value): value is string => Boolean(value))
      .sort()
      .at(-1);
    return { pageViews: views, ctaClicks: clicks, lastAt: latest };
  }, [list]);

  const tiles = [
    { key: "view", label: "방문 이벤트", value: pageViews, icon: Eye },
    { key: "click", label: "CTA 클릭 이벤트", value: ctaClicks, icon: MousePointerClick },
  ];

  return (
    <FadeIn>
      <section data-cbv-src="components/features/analytics-summary.tsx:46" data-feat-id="feat_fb0d21267" className="py-12">
        <h2 data-cbv-src="components/features/analytics-summary.tsx:47" className="text-xl font-semibold tracking-tight">{title}</h2>
        <p data-cbv-src="components/features/analytics-summary.tsx:48" className="mt-2 max-w-xl text-sm text-muted-foreground">
          측정 중 오류가 나도 페이지 표시와 CTA 이동은 그대로 동작합니다.
        </p>

        <div data-cbv-src="components/features/analytics-summary.tsx:52" className="mt-6">
          {loading ? (
            <div data-cbv-src="components/features/analytics-summary.tsx:54" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2">
              {[0, 1].map((key) => (
                <Card key={key}>
                  <CardHeader className="gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-16" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : list.length === 0 ? (
            <EmptyState
              icon={<Activity aria-hidden="true" className="h-6 w-6" />}
              title="기록된 이벤트가 없어요"
              description="화면을 방문하거나 CTA를 선택하면 이벤트가 쌓입니다."
            />
          ) : (
            <div data-cbv-src="components/features/analytics-summary.tsx:71" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <Card key={tile.key}>
                    <CardHeader className="flex-row items-center justify-between gap-3 space-y-0">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {tile.label}
                      </CardTitle>
                      <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
                    </CardHeader>
                    <CardContent>
                      <p data-cbv-src="components/features/analytics-summary.tsx:83" className="text-3xl font-semibold tabular-nums text-brand">
                        {tile.value.toLocaleString("ko-KR")}
                      </p>
                      <p data-cbv-src="components/features/analytics-summary.tsx:86" className="mt-1 text-sm text-muted-foreground">누적 기록 건수</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {lastAt ? (
          <p data-cbv-src="components/features/analytics-summary.tsx:96" className="mt-4 text-sm text-muted-foreground">
            마지막 기록: {new Date(lastAt).toLocaleString("ko-KR")}
          </p>
        ) : null}
      </section>
    </FadeIn>
  );
}
