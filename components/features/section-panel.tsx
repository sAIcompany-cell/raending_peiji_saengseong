"use client";

import type { ReactNode } from "react";
import { Info, ListChecks } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface SectionPointData {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

/** 항목 하나 — 제목 + 짧은 설명. */
export function SectionPoint({ point, index }: { point: SectionPointData; index?: number }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-3 p-6">
        <div data-cbv-src="components/features/section-panel.tsx:24" className="flex items-center gap-3">
          <span data-cbv-src="components/features/section-panel.tsx:25" className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-brand">
            {point.icon ?? <ListChecks className="size-4" aria-hidden="true" />}
          </span>
          {typeof index === "number" ? (
            <Badge variant="secondary" className="tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </Badge>
          ) : null}
        </div>
        <h3 data-cbv-src="components/features/section-panel.tsx:34" className="font-heading text-lg font-semibold text-foreground">{point.title}</h3>
        <p data-cbv-src="components/features/section-panel.tsx:35" className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
      </CardContent>
    </Card>
  );
}

/** 목록 아래 한 줄 보조 문장(해결 문장 등). */
export function SectionNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p data-cbv-src="components/features/section-panel.tsx:44"
      className={cn(
        "inline-flex items-start gap-2 rounded-lg border border-border bg-muted/60 px-4 py-3 text-sm leading-relaxed text-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
      <span data-cbv-src="components/features/section-panel.tsx:51">{children}</span>
    </p>
  );
}

/**
 * 섹션 패널 — 헤드라인·부제 아래 항목 카드 목록. 로딩·빈 상태를 스스로 다룬다.
 */
export function SectionPanel({
  headline,
  subtitle,
  points,
  note,
  loading = false,
  numbered = false,
  emptyAction,
  className,
}: {
  headline: string;
  subtitle?: string;
  points: SectionPointData[];
  note?: string;
  loading?: boolean;
  numbered?: boolean;
  emptyAction?: ReactNode;
  className?: string;
}) {
  const cols = points.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section data-cbv-src="components/features/section-panel.tsx:80" className={cn("flex flex-col gap-[var(--density-gap)] py-12 sm:py-16", className)}>
      <div data-cbv-src="components/features/section-panel.tsx:81" className="flex flex-col gap-3">
        <h1 data-cbv-src="components/features/section-panel.tsx:82" className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {headline}
        </h1>
        {subtitle ? <p data-cbv-src="components/features/section-panel.tsx:85" className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p> : null}
      </div>

      {loading ? (
        <div data-cbv-src="components/features/section-panel.tsx:89" className={cn("grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2", cols)} aria-busy="true">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-lg" />
          ))}
        </div>
      ) : points.length === 0 ? (
        <EmptyState
          icon={<ListChecks className="size-6" aria-hidden="true" />}
          title="아직 보여 줄 항목이 없어요"
          description="다음 화면으로 이동해 서비스 흐름을 이어서 확인하세요."
          action={emptyAction}
        />
      ) : (
        <Stagger className={cn("grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2", cols)}>
          {points.map((point, i) => (
            <StaggerItem key={point.id}>
              <SectionPoint point={point} index={numbered ? i : undefined} />
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {note ? <SectionNote>{note}</SectionNote> : null}
    </section>
  );
}
