import { Search, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/**
 * 기본 SEO 메타 태그 적용(feat_f69e65664) — 화면별 title/description 을 목록으로 표시한다.
 */
export function SeoMetaList({
  items,
  title = "화면별 기본 메타 태그",
  description = "각 화면에 적용되는 제목과 설명을 확인할 수 있습니다.",
}: {
  items: LandingPageSection[];
  title?: string;
  description?: string;
}) {
  return (
    <section data-feat-id="feat_f69e65664" className="py-12 sm:py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      </div>

      <div className="mt-8">
        {items.length === 0 ? (
          <EmptyState
            icon={<Search aria-hidden="true" className="h-6 w-6" />}
            title="등록된 메타 태그가 없어요"
            description="화면별 제목과 설명이 준비되면 표시됩니다."
          />
        ) : (
          <Stagger className="divide-y divide-border rounded-lg border border-border">
            {items.map((item, index) => (
              <StaggerItem key={item.id ?? `seo-${index}`}>
                <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-start sm:gap-4">
                  <Badge variant="outline" className="w-fit gap-1 border-brand text-brand">
                    <Tag aria-hidden="true" className="h-3 w-3" />
                    {item.type ?? "meta"}
                  </Badge>
                  <div className="min-w-0">
                    <p className="break-words font-medium text-foreground">
                      {item.title ?? "제목 없음"}
                    </p>
                    {item.content ? (
                      <p className="mt-1 break-words text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
