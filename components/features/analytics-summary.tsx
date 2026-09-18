"use client";

import { BarChart3, Eye, MousePointerClick } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { useAnalyticsEvents } from "@/components/features/analytics";
import type { AnalyticsEvent } from "@/types";

function formatTime(date: Date): string {
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch {
    return "시각 정보 없음";
  }
}

/**
 * 방문과 CTA 클릭이 각각 몇 번 기록됐는지 보여준다.
 * props 로 이벤트를 받으면 그대로 쓰고, 없으면 측정 저장소를 읽는다.
 */
export function AnalyticsSummary({
  events,
  title = "얼마나 많은 분이 비교를 시작했을까요",
}: {
  events?: AnalyticsEvent[];
  title?: string;
}) {
  const store = useAnalyticsEvents();
  const list = events ?? store.events;
  const loading = events ? false : store.loading;

  const pageViews = list.filter((event) => event.name === "page_view").length;
  const ctaClicks = list.filter((event) => event.name === "cta_click").length;
  const latest = list.length > 0 ? list[list.length - 1] : undefined;

  const tiles = [
    {
      key: "page_view",
      label: "화면을 열어본 횟수",
      value: pageViews,
      icon: Eye,
    },
    {
      key: "cta_click",
      label: "비교를 시작한 횟수",
      value: ctaClicks,
      icon: MousePointerClick,
    },
  ];

  return (
    <section data-feat-id="feat_fb0d21267" className="flex flex-col gap-6">
      <FadeIn>
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      </FadeIn>

      {loading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2">
          {[0, 1].map((key) => (
            <Card key={key}>
              <CardContent className="flex flex-col gap-3 p-6">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : list.length === 0 ? (
        <EmptyState
          icon={<BarChart3 className="size-6" aria-hidden="true" />}
          title="아직 기록된 방문이 없습니다"
          description="화면을 열거나 비교를 시작하면 이곳에 횟수가 쌓입니다."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <StaggerItem key={tile.key} className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon className="size-4 text-brand" aria-hidden="true" />
                      {tile.label}
                    </p>
                    <p className="text-3xl font-semibold tracking-tight text-brand">
                      {tile.value.toLocaleString("ko-KR")}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}

      {!loading && latest ? (
        <p className="text-sm text-muted-foreground">
          마지막 기록: {latest.pagePath} ·{" "}
          {latest.name === "cta_click" ? "비교 시작" : "화면 열람"} ·{" "}
          {formatTime(latest.occurredAt)}
        </p>
      ) : null}
    </section>
  );
}
