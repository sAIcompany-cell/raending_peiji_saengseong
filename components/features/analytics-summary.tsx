"use client";

import { useMemo } from "react";
import { AlertCircle, Eye, MousePointerClick } from "lucide-react";
import { Stat } from "@/components/ui/stat";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { FadeIn } from "@/components/motion";
import type { AnalyticsEvent } from "@/types";

/**
 * 방문 및 CTA 클릭 이벤트 측정 결과 (feat_fb0d21267)
 * 방문 이벤트와 CTA 클릭 이벤트를 구분해 같은 기준으로 집계한다.
 */
export function AnalyticsSummary({
  events,
  loading = false,
  error = null,
}: {
  events: AnalyticsEvent[];
  loading?: boolean;
  error?: string | null;
}) {
  const { visits, clicks, rate } = useMemo(() => {
    const visitCount = events.filter((e) => e.name === "page_visit").length;
    const clickCount = events.filter((e) => e.name === "cta_click").length;
    return {
      visits: visitCount,
      clicks: clickCount,
      rate: visitCount === 0 ? 0 : Math.round((clickCount / visitCount) * 100),
    };
  }, [events]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {[0, 1, 2].map((key) => (
          <Skeleton key={key} className="h-32 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="flex items-start gap-2 rounded-lg border border-border p-6 text-sm text-destructive"
      >
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{error}</span>
      </p>
    );
  }

  if (events.length === 0) {
    return (
      <EmptyState
        icon={<Eye className="h-6 w-6" aria-hidden="true" />}
        title="아직 측정된 이벤트가 없어요"
        description="랜딩 화면을 방문하거나 CTA를 선택하면 이곳에 집계가 표시됩니다."
      />
    );
  }

  return (
    <FadeIn>
      <div
        data-feat-id="feat_fb0d21267"
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        <Stat
          label="방문 이벤트"
          value={`${visits}회`}
          hint="랜딩 화면 진입 시 기록"
          icon={<Eye className="h-4 w-4" aria-hidden="true" />}
        />
        <Stat
          label="CTA 클릭 이벤트"
          value={`${clicks}회`}
          hint="CTA 선택 시 기록"
          icon={<MousePointerClick className="h-4 w-4" aria-hidden="true" />}
        />
        <Stat
          label="클릭 전환율"
          value={`${rate}%`}
          hint="CTA 클릭 ÷ 방문"
        />
      </div>
    </FadeIn>
  );
}
