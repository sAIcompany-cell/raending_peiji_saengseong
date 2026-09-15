"use client";

import { useMemo } from "react";
import { Eye, MousePointerClick, Activity } from "lucide-react";
import type { AnalyticsEvent } from "@/types";
import { useAnalyticsEvents } from "@/components/features/analytics";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalyticsSummaryProps {
  /** 서버·API 에서 받은 이벤트. 없으면 세션 저장소를 구독한다. */
  events?: AnalyticsEvent[];
  loading?: boolean;
  error?: string | null;
}

/** 방문·CTA 클릭 이벤트를 같은 기준으로 집계해 보여주는 지표 타일. */
export function AnalyticsSummary({
  events,
  loading = false,
  error = null,
}: AnalyticsSummaryProps) {
  const live = useAnalyticsEvents();
  const source = events ?? live;

  const stats = useMemo(() => {
    const views = source.filter((e) => e.name === "page_view").length;
    const clicks = source.filter((e) => e.name === "cta_click").length;
    const rate = views > 0 ? Math.round((clicks / views) * 100) : 0;
    return { views, clicks, rate };
  }, [source]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="h-28 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="flex items-center gap-2 rounded-lg border border-border bg-muted p-4 text-sm text-foreground"
      >
        <Activity aria-hidden="true" className="size-4 shrink-0 text-brand" />
        측정 데이터를 불러오지 못했어요. 화면 이용에는 문제가 없어요. ({error})
      </p>
    );
  }

  if (source.length === 0) {
    return (
      <EmptyState
        icon={<Activity className="size-8" />}
        title="아직 기록된 방문이 없어요"
        description="화면을 열거나 CTA 를 누르면 여기에 집계돼요."
      />
    );
  }

  const tiles = [
    { icon: Eye, label: "방문", value: stats.views, unit: "회" },
    { icon: MousePointerClick, label: "CTA 클릭", value: stats.clicks, unit: "회" },
    { icon: Activity, label: "클릭 전환", value: stats.rate, unit: "%" },
  ];

  return (
    <div data-feat-id="feat_fb0d21267">
      <FadeIn>
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-3">
          {tiles.map(({ icon: Icon, label, value, unit }) => (
            <StaggerItem key={label}>
              <Card>
                <CardContent className="flex flex-col gap-2 p-6">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon aria-hidden="true" className="size-4 text-brand" />
                    {label}
                  </span>
                  <span className="text-3xl font-semibold tracking-tight text-brand">
                    {value.toLocaleString("ko-KR")}
                    <span className="ml-1 text-base font-normal text-muted-foreground">
                      {unit}
                    </span>
                  </span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </div>
  );
}
