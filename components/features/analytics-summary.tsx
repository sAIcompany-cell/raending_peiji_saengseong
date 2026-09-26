"use client";

import { useMemo } from "react";
import { BarChart3, Eye, MousePointerClick, Percent } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { AnalyticsEvent } from "@/types";
import { summarizeEvents, useAnalyticsEvents } from "./analytics";

const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function formatTime(value?: string) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "-" : timeFormatter.format(date);
}

/**
 * 방문·CTA 클릭 집계. events 를 넘기지 않으면 앱 안에서 기록된 이벤트를 실시간으로 쓴다.
 */
export function AnalyticsSummary({
  events,
  loading = false,
  recentLimit = 5,
  className,
}: {
  events?: AnalyticsEvent[];
  loading?: boolean;
  recentLimit?: number;
  className?: string;
}) {
  const live = useAnalyticsEvents();
  const source = events ?? live;
  const summary = useMemo(() => summarizeEvents(source), [source]);
  const recent = useMemo(
    () =>
      [...source]
        .sort((a, b) => (b.occurredAt ?? b.createdAt).localeCompare(a.occurredAt ?? a.createdAt))
        .slice(0, recentLimit),
    [source, recentLimit],
  );

  const tiles = [
    { label: "방문", value: summary.pageViews.toLocaleString("ko-KR"), icon: Eye },
    { label: "CTA 클릭", value: summary.ctaClicks.toLocaleString("ko-KR"), icon: MousePointerClick },
    { label: "클릭 비율", value: `${summary.conversionRate}%`, icon: Percent },
  ];

  return (
    <section data-cbv-src="components/features/analytics-summary.tsx:59" data-feat-id="feat_fb0d21267" className={cn("flex flex-col gap-6", className)}>
      {loading ? (
        <div data-cbv-src="components/features/analytics-summary.tsx:61" className="grid grid-cols-1 gap-4 sm:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((key) => (
            <Skeleton key={key} className="h-28 w-full rounded-lg" />
          ))}
        </div>
      ) : source.length === 0 ? (
        <EmptyState
          icon={<BarChart3 className="h-6 w-6" aria-hidden="true" />}
          title="아직 기록된 방문이 없어요"
          description="화면을 둘러보거나 버튼을 누르면 여기에 바로 집계돼요."
        />
      ) : (
        <>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {tiles.map((tile) => (
              <StaggerItem key={tile.label}>
                <Card>
                  <CardContent className="flex flex-col gap-2 p-6">
                    <span data-cbv-src="components/features/analytics-summary.tsx:79" className="flex items-center gap-2 text-sm text-muted-foreground">
                      <tile.icon className="h-4 w-4 text-brand" aria-hidden="true" />
                      {tile.label}
                    </span>
                    <span data-cbv-src="components/features/analytics-summary.tsx:83" className="font-heading text-3xl font-semibold tabular-nums text-brand">
                      {tile.value}
                    </span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <Card>
            <CardContent className="p-6">
              <h3 data-cbv-src="components/features/analytics-summary.tsx:94" className="mb-4 text-base font-medium text-foreground">최근 이벤트</h3>
              <ul data-cbv-src="components/features/analytics-summary.tsx:95" className="flex flex-col divide-y divide-border">
                {recent.map((event, index) => {
                  const isClick = event.name === "cta_click";
                  const Icon = isClick ? MousePointerClick : Eye;
                  return (
                    <li data-cbv-src="components/features/analytics-summary.tsx:100"
                      key={event.id ?? index}
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3 text-sm"
                    >
                      <Icon
                        className={cn("h-4 w-4 shrink-0", isClick ? "text-brand" : "text-muted-foreground")}
                        aria-hidden="true"
                      />
                      <span data-cbv-src="components/features/analytics-summary.tsx:108" className="font-medium text-foreground">
                        {isClick ? "CTA 클릭" : "방문"}
                      </span>
                      <span data-cbv-src="components/features/analytics-summary.tsx:111" className="min-w-0 truncate text-muted-foreground">
                        {event.pagePath ?? "/"}
                      </span>
                      <time data-cbv-src="components/features/analytics-summary.tsx:114"
                        dateTime={event.occurredAt ?? event.createdAt}
                        className="ml-auto tabular-nums text-muted-foreground"
                      >
                        {formatTime(event.occurredAt ?? event.createdAt)}
                      </time>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </section>
  );
}
