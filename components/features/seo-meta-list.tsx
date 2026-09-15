import { Search } from "lucide-react";
import type { LandingPageSection } from "@/types";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";

interface SeoMetaListProps {
  /** type = 경로, title = 제목 메타, content = 설명 메타 */
  items: LandingPageSection[];
  /** 현재 화면 경로 — 해당 항목만 보이게 하려면 넘긴다 */
  currentPath?: string;
}

/** 각 화면에 적용된 제목·설명 메타 태그를 검색 결과 형태로 보여준다. */
export function SeoMetaList({ items, currentPath }: SeoMetaListProps) {
  const sorted = [...items]
    .filter((item) => !currentPath || item.type === currentPath)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div data-cbv-src="components/features/seo-meta-list.tsx:21" data-feat-id="feat_f69e65664">
      {sorted.length === 0 ? (
        <EmptyState
          icon={<Search className="size-8" />}
          title="이 화면의 검색 정보가 아직 없어요"
          description="제목과 설명이 준비되면 검색 결과에 이렇게 보여요."
        />
      ) : (
        <Stagger className="flex flex-col divide-y divide-border rounded-lg border border-border bg-background">
          {sorted.map((item) => (
            <StaggerItem key={item.id ?? item.type}>
              <article data-cbv-src="components/features/seo-meta-list.tsx:32" className="flex flex-col gap-1.5 p-6">
                <Badge variant="outline" className="w-fit font-mono text-xs">
                  {item.type}
                </Badge>
                <h3 data-cbv-src="components/features/seo-meta-list.tsx:36" className="text-xl font-semibold tracking-tight text-brand">
                  {item.title}
                </h3>
                <p data-cbv-src="components/features/seo-meta-list.tsx:39" className="text-sm leading-relaxed text-muted-foreground">
                  {item.content}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </div>
  );
}
