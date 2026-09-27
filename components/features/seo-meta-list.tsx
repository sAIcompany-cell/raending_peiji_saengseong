"use client";

import { Globe, Link2, Search } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { mockSeoMetadataList, type MockSeoMetadata } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export type SeoMetadata = MockSeoMetadata;

/** 기본 SEO 메타 태그 (feat_f69e65664) — 각 화면의 제목·설명·대표 URL 을 검색 결과 형태로 보여 준다. */
export function SeoMetaList({
  items = mockSeoMetadataList,
  heading = "검색 결과에서 이렇게 보여요",
  loading = false,
  className,
}: {
  items?: SeoMetadata[];
  heading?: string;
  loading?: boolean;
  className?: string;
}) {
  return (
    <section data-feat-id="feat_f69e65664" className={cn("flex flex-col gap-[var(--density-gap)] py-12", className)}>
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-muted text-brand">
          <Search className="size-4" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{heading}</h2>
      </div>

      {loading ? (
        <div className="flex flex-col gap-[var(--density-gap)]" aria-busy="true">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<Search className="size-6" aria-hidden="true" />}
          title="설정된 검색 메타 정보가 없어요"
          description="각 화면의 제목과 설명이 정해지면 여기에서 미리 볼 수 있어요."
        />
      ) : (
        <Stagger className="flex flex-col gap-[var(--density-gap)]">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="flex flex-col gap-2 rounded-lg border border-border p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Link2 className="size-3.5" aria-hidden="true" />
                  <span className="break-all">{item.canonical}</span>
                  <Badge variant="secondary" className="inline-flex items-center gap-1">
                    <Globe className="size-3" aria-hidden="true" />
                    {item.locale}
                  </Badge>
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
