import { AlertCircle, AlertTriangle, CheckCircle2, Globe, Link2, Search, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { SeoMetadata, SeoStatus } from "@/types";

const statusMeta: Record<SeoStatus, { label: string; icon: LucideIcon; className: string }> = {
  applied: { label: "적용됨", icon: CheckCircle2, className: "text-brand" },
  needs_review: { label: "확인 필요", icon: AlertTriangle, className: "text-foreground" },
  missing: { label: "누락", icon: AlertCircle, className: "text-destructive" },
};

interface SeoMetaListProps {
  items: SeoMetadata[];
  loading?: boolean;
  error?: string | null;
  className?: string;
}

/** 검색·공유 미리보기 — 각 화면이 검색 결과와 SNS 카드에서 어떻게 보이는지 보여준다. */
export function SeoMetaList({ items, loading, error, className }: SeoMetaListProps) {
  return (
    <div data-cbv-src="components/features/seo-meta-list.tsx:25" data-feat-id="feat_f69e65664" className={cn("flex flex-col gap-6", className)}>
      <div data-cbv-src="components/features/seo-meta-list.tsx:26" className="flex flex-col gap-1">
        <h2 data-cbv-src="components/features/seo-meta-list.tsx:27" className="font-heading text-xl font-semibold text-foreground">검색과 공유에서 이렇게 보입니다</h2>
        <p data-cbv-src="components/features/seo-meta-list.tsx:28" className="text-sm text-muted-foreground">화면마다 고유한 제목과 설명, 대표 주소가 붙어 있습니다.</p>
      </div>

      {loading ? (
        <div data-cbv-src="components/features/seo-meta-list.tsx:32" className="flex flex-col gap-[var(--density-gap)]" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/seo-meta-list.tsx:38" role="alert">
          <EmptyState icon={<AlertCircle className="size-8" aria-hidden="true" />} title="메타 정보를 불러오지 못했어요" description={error} />
        </div>
      ) : items.length === 0 ? (
        <EmptyState icon={<Search className="size-8" aria-hidden="true" />} title="등록된 메타 정보가 없어요" description="화면별 제목과 설명이 등록되면 여기에 보입니다." />
      ) : (
        <Stagger className="flex flex-col gap-[var(--density-gap)]">
          {items.map((item) => {
            const status = statusMeta[item.status];
            const StatusIcon = status.icon;
            return (
              <StaggerItem key={item.id}>
                <article data-cbv-src="components/features/seo-meta-list.tsx:50" className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6 transition-colors hover:border-brand/40">
                  <div data-cbv-src="components/features/seo-meta-list.tsx:51" className="flex flex-wrap items-center justify-between gap-2">
                    <span data-cbv-src="components/features/seo-meta-list.tsx:52" className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Link2 className="size-3.5" aria-hidden="true" />
                      <span data-cbv-src="components/features/seo-meta-list.tsx:54" className="font-mono">{item.canonicalUrl}</span>
                    </span>
                    <span data-cbv-src="components/features/seo-meta-list.tsx:56" className={cn("inline-flex items-center gap-1 text-xs font-medium", status.className)}>
                      <StatusIcon className="size-3.5" aria-hidden="true" />
                      {status.label}
                    </span>
                  </div>
                  <h3 data-cbv-src="components/features/seo-meta-list.tsx:61" className="font-heading text-lg font-semibold text-brand">{item.ogTitle ?? item.title}</h3>
                  <p data-cbv-src="components/features/seo-meta-list.tsx:62" className="text-sm leading-relaxed text-muted-foreground">{item.ogDescription ?? item.description}</p>
                  <div data-cbv-src="components/features/seo-meta-list.tsx:63" className="mt-1 flex flex-wrap items-center gap-1.5">
                    <Badge variant="outline">
                      <Globe className="mr-1 size-3" aria-hidden="true" />
                      {item.lang}
                    </Badge>
                    <Badge variant="outline">{item.robots}</Badge>
                    <Badge variant="secondary">{item.pagePath}</Badge>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </div>
  );
}
