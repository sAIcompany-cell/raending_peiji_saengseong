"use client";

import { AlertCircle, BarChart3, Eye, MousePointerClick, Percent } from "lucide-react";
import { summarizeEvents, useAnalyticsEvents } from "@/components/features/analytics";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { AnalyticsSummary as AnalyticsSummaryModel } from "@/types";

interface AnalyticsSummaryProps {
  /** 서버 집계. 주면 그대로 쓰고, 없으면 이 세션의 이벤트 저장소로 계산한다. */
  summary?: AnalyticsSummaryModel | null;
  loading?: boolean;
  error?: string | null;
  className?: string;
}

const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function formatTime(iso: string | null): string {
  if (!iso) return "기록 없음";
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? "기록 없음" : timeFormatter.format(date);
}

export function AnalyticsSummary({ summary, loading, error, className }: AnalyticsSummaryProps) {
  const events = useAnalyticsEvents();
  const data = summary ?? summarizeEvents(events);

  const tiles = [
    { label: "방문", value: data.totalViews.toLocaleString("ko-KR"), icon: Eye },
    { label: "CTA 클릭", value: data.totalCtaClicks.toLocaleString("ko-KR"), icon: MousePointerClick },
    { label: "전환율", value: `${data.conversionRate}%`, icon: Percent },
  ];

  return (
    <div data-feat-id="feat_fb0d21267" className={cn("flex flex-col gap-6", className)}>
      <FadeIn className="flex flex-col gap-1">
        <h2 className="font-heading text-xl font-semibold text-foreground">방문과 클릭이 이렇게 쌓이고 있어요</h2>
        <p className="text-sm text-muted-foreground">
          마지막 기록 {formatTime(data.lastEventAt)}
        </p>
      </FadeIn>

      {loading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-28 w-full" />
          ))}
        </div>
      ) : error ? (
        <div role="alert">
          <EmptyState
            icon={<AlertCircle className="size-8" aria-hidden="true" />}
            title="측정 데이터를 불러오지 못했어요"
            description={error}
          />
        </div>
      ) : data.totalViews === 0 && data.totalCtaClicks === 0 ? (
        <EmptyState
          icon={<BarChart3 className="size-8" aria-hidden="true" />}
          title="아직 기록된 방문이 없어요"
          description="화면을 이동하거나 버튼을 누르면 여기에 바로 집계됩니다."
        />
      ) : (
        <>
          <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3">
            {tiles.map((tile) => (
              <StaggerItem key={tile.label}>
                <Card>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <tile.icon className="size-4 text-brand" aria-hidden="true" />
                      {tile.label}
                    </span>
                    <span className="font-heading text-3xl font-bold tabular-nums text-brand">{tile.value}</span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-border">
                  {data.byPage.map((row) => (
                    <li key={row.pagePath} className="flex flex-wrap items-center justify-between gap-2 px-6 py-3 text-sm">
                      <span className="font-mono text-foreground">{row.pagePath}</span>
                      <span className="flex items-center gap-4 tabular-nums text-muted-foreground">
                        <span>방문 {row.views}</span>
                        <span>클릭 {row.ctaClicks}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </>
      )}
    </div>
  );
}
