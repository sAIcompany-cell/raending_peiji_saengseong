"use client";

import { useEffect, useState } from "react";
import { BarChart3, MonitorSmartphone, Search } from "lucide-react";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { FadeIn } from "@/components/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCtaSummary, listResponsiveSettings, listSeoMetadata } from "@/lib/api-client";
import type { AnalyticsSummary as AnalyticsSummaryModel, ResponsiveSetting, SeoMetadata } from "@/types";

interface LoadState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const initial = <T,>(): LoadState<T> => ({ data: null, loading: true, error: null });

/** 진입 화면 하단 — 어느 기기에서든, 검색에서도, 방문 흐름까지 한 곳에서 확인한다. */
export function SiteInsights({ className }: { className?: string }) {
  const [responsive, setResponsive] = useState<LoadState<ResponsiveSetting[]>>(initial);
  const [seo, setSeo] = useState<LoadState<SeoMetadata[]>>(initial);
  const [summary, setSummary] = useState<LoadState<AnalyticsSummaryModel>>(initial);

  useEffect(() => {
    let cancelled = false;
    listResponsiveSettings().then((result) => {
      if (cancelled) return;
      setResponsive(
        result.ok
          ? { data: result.data.items, loading: false, error: null }
          : { data: null, loading: false, error: result.error },
      );
    });
    listSeoMetadata().then((result) => {
      if (cancelled) return;
      setSeo(
        result.ok
          ? { data: result.data.items, loading: false, error: null }
          : { data: null, loading: false, error: result.error },
      );
    });
    getCtaSummary().then((result) => {
      if (cancelled) return;
      setSummary(
        result.ok
          ? { data: result.data, loading: false, error: null }
          : { data: null, loading: false, error: result.error },
      );
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <FadeIn className={className}>
      <section aria-labelledby="insights-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 id="insights-title" className="font-heading text-xl font-semibold text-foreground">
            어디서 열어도, 검색에서도 같은 화면을 만나요
          </h2>
          <p className="text-sm text-muted-foreground">
            휴대폰과 PC 어디서든 비교를 시작할 수 있고, 방문과 버튼 클릭 흐름도 함께 확인합니다.
          </p>
        </div>
        <Tabs defaultValue="responsive">
          <TabsList className="flex-wrap">
            <TabsTrigger value="responsive">
              <span className="inline-flex items-center gap-1.5">
                <MonitorSmartphone className="size-4" aria-hidden="true" />
                기기 지원
              </span>
            </TabsTrigger>
            <TabsTrigger value="seo">
              <span className="inline-flex items-center gap-1.5">
                <Search className="size-4" aria-hidden="true" />
                검색 노출
              </span>
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="size-4" aria-hidden="true" />
                방문 흐름
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="responsive" className="pt-6">
            <ResponsiveSupportList
              items={responsive.data ?? []}
              loading={responsive.loading}
              error={responsive.error}
            />
          </TabsContent>
          <TabsContent value="seo" className="pt-6">
            <SeoMetaList items={seo.data ?? []} loading={seo.loading} error={seo.error} />
          </TabsContent>
          <TabsContent value="analytics" className="pt-6">
            <AnalyticsSummary summary={summary.data} loading={summary.loading} error={summary.error} />
          </TabsContent>
        </Tabs>
      </section>
    </FadeIn>
  );
}
