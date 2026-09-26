import { FileSearch, Globe, Link2, Type } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { mockSeoMetadataList } from "@/lib/mock-data";

export type SeoMetadata = (typeof mockSeoMetadataList)[number];

/** 검색·공유 미리보기 카드 — 적용된 제목·설명·대표 URL·언어를 보여준다. */
export function SeoMetaList({
  items,
  loading = false,
  className,
}: {
  items: SeoMetadata[];
  loading?: boolean;
  className?: string;
}) {
  return (
    <section data-cbv-src="components/features/seo-meta-list.tsx:22" data-feat-id="feat_f69e65664" className={cn("flex flex-col gap-6", className)}>
      {loading ? (
        <div data-cbv-src="components/features/seo-meta-list.tsx:24" className="flex flex-col gap-4" aria-busy="true">
          {[0, 1].map((key) => (
            <Skeleton key={key} className="h-36 w-full rounded-lg" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<FileSearch className="h-6 w-6" aria-hidden="true" />}
          title="적용된 검색 정보가 아직 없어요"
          description="잠시 후 다시 확인해 주세요."
        />
      ) : (
        <Stagger className="flex flex-col gap-4">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <article data-cbv-src="components/features/seo-meta-list.tsx:39" className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                <div data-cbv-src="components/features/seo-meta-list.tsx:40" className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="border-brand text-brand">
                    {item.status === "active" ? "적용됨" : "대기"}
                  </Badge>
                  <span data-cbv-src="components/features/seo-meta-list.tsx:44" className="min-w-0 truncate text-sm text-muted-foreground">{item.path}</span>
                </div>
                <div data-cbv-src="components/features/seo-meta-list.tsx:46" className="flex flex-col gap-1">
                  <p data-cbv-src="components/features/seo-meta-list.tsx:47" className="flex items-start gap-2 text-base font-medium break-keep text-foreground">
                    <Type className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span data-cbv-src="components/features/seo-meta-list.tsx:49" className="sr-only">제목: </span>
                    {item.title}
                  </p>
                  <p data-cbv-src="components/features/seo-meta-list.tsx:52" className="pl-6 text-sm leading-relaxed break-keep text-muted-foreground">
                    <span data-cbv-src="components/features/seo-meta-list.tsx:53" className="sr-only">설명: </span>
                    {item.description}
                  </p>
                </div>
                <dl data-cbv-src="components/features/seo-meta-list.tsx:57" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div data-cbv-src="components/features/seo-meta-list.tsx:58" className="flex items-center gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <dt data-cbv-src="components/features/seo-meta-list.tsx:60" className="text-muted-foreground">대표 URL</dt>
                    <dd data-cbv-src="components/features/seo-meta-list.tsx:61" className="font-medium text-foreground">{item.canonicalUrl}</dd>
                  </div>
                  <div data-cbv-src="components/features/seo-meta-list.tsx:63" className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <dt data-cbv-src="components/features/seo-meta-list.tsx:65" className="text-muted-foreground">언어</dt>
                    <dd data-cbv-src="components/features/seo-meta-list.tsx:66" className="font-medium text-foreground">{item.language === "ko" ? "한국어" : item.language}</dd>
                  </div>
                </dl>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
