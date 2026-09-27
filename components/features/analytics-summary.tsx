"use client";

import { Activity, CircleAlert, Eye, MousePointerClick } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { AnalyticsEvent } from "@/types";
import { summarizeEvents, useAnalyticsEvents } from "@/components/features/analytics";

function formatDate(iso?: string): string {
  if (!iso) return "기록 없음";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "기록 없음";
  return d.toLocaleString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

/**
 * 방문·CTA 클릭 집계 (feat_fb0d21267). events 를 주입하지 않으면 세션 저장소를 구독한다.
 */
export function AnalyticsSummary({
  events,
  heading = "이 랜딩페이지의 방문과 클릭",
  className,
}: {
  events?: AnalyticsEvent[];
  heading?: string;
  className?: string;
}) {
  const live = useAnalyticsEvents();
  const source = events ?? live.events;
  const loading = !events && live.loading && source.length === 0;
  const error = events ? null : live.error;
  const summary = summarizeEvents(source);

  const tiles = [
    { key: "visits", label: "방문", value: summary.visits, icon: Eye },
    { key: "clicks", label: "CTA 클릭", value: summary.ctaClicks, icon: MousePointerClick },
    { key: "rate", label: "클릭 전환율", value: `${summary.conversionRate}%`, icon: Activity },
  ];

  return (
    <section data-feat-id="feat_fb0d21267" className={cn("flex flex-col gap-[var(--density-gap)] py-12", className)}>
      <FadeIn>
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{heading}</h2>
          <p className="text-sm text-muted-foreground">마지막 기록 {formatDate(summary.lastEventAt)}</p>
        </div>
      </FadeIn>

      {error ? (
        <p role="alert" className="inline-flex items-center gap-2 text-sm text-destructive">
          <CircleAlert className="size-4" aria-hidden="true" />
          {error} 지금 보이는 값은 이 세션에서 기록된 이벤트만 반영합니다.
        </p>
      ) : null}

      {loading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3" aria-busy="true">
          {tiles.map((t) => (
            <Skeleton key={t.key} className="h-28 rounded-lg" />
          ))}
        </div>
      ) : source.length === 0 ? (
        <EmptyState
          icon={<Activity className="size-6" aria-hidden="true" />}
          title="아직 기록된 이벤트가 없어요"
          description="화면을 방문하거나 CTA 를 누르면 여기에 집계돼요."
        />
      ) : (
        <>
          <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3">
            {tiles.map((t) => (
              <StaggerItem key={t.key}>
                <Card>
                  <CardContent className="flex flex-col gap-2 p-6">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <t.icon className="size-4 text-brand" aria-hidden="true" />
                      {t.label}
                    </span>
                    <span className="font-heading text-3xl font-semibold tabular-nums text-brand">{t.value}</span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn delay={0.1}>
            <ul className="divide-y divide-border rounded-lg border border-border">
              {summary.pages.map((p) => (
                <li key={p.pagePath} className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-sm">
                  <span className="font-medium text-foreground">{p.pagePath}</span>
                  <span className="tabular-nums text-muted-foreground">
                    방문 {p.visits} · 클릭 {p.ctaClicks}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </>
      )}
    </section>
  );
}
