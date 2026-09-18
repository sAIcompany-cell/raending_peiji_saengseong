import { Link2, Search, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import type { SeoMetadata } from "@/types";

/**
 * 검색과 공유에서 어떤 문구로 보이는지 확인하는 목록.
 */
export function SeoMetaList({
  items,
  title = "검색해서 들어와도 같은 이야기를 보게 됩니다",
  description = "검색 결과와 공유 카드에 이 문구가 그대로 나타납니다.",
}: {
  items: SeoMetadata[];
  title?: string;
  description?: string;
}) {
  return (
    <section data-cbv-src="components/features/seo-meta-list.tsx:20" data-feat-id="feat_f69e65664" className="flex flex-col gap-6">
      <div data-cbv-src="components/features/seo-meta-list.tsx:21" className="flex flex-col gap-2">
        <h2 data-cbv-src="components/features/seo-meta-list.tsx:22" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p data-cbv-src="components/features/seo-meta-list.tsx:25" className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={<Search className="size-6" aria-hidden="true" />}
          title="등록된 검색 노출 문구가 없습니다"
          description="비교 대상 가구를 정하면 검색 문구가 함께 만들어집니다."
        />
      ) : (
        <Stagger className="flex flex-col gap-[var(--density-gap)]">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <article data-cbv-src="components/features/seo-meta-list.tsx:38" className="flex flex-col gap-2 rounded-lg border border-border p-6">
                <div data-cbv-src="components/features/seo-meta-list.tsx:39" className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="border-brand text-brand">
                    <Share2 className="mr-1 size-3" aria-hidden="true" />
                    공유 카드
                  </Badge>
                  <h3 data-cbv-src="components/features/seo-meta-list.tsx:44" className="text-base font-medium text-foreground">
                    {item.ogTitle ?? item.title}
                  </h3>
                </div>
                <p data-cbv-src="components/features/seo-meta-list.tsx:48" className="text-sm leading-relaxed text-muted-foreground">
                  {item.ogDescription ?? item.description}
                </p>
                <p data-cbv-src="components/features/seo-meta-list.tsx:51" className="flex items-center gap-2 break-all text-xs text-muted-foreground">
                  <Link2 className="size-3.5 shrink-0" aria-hidden="true" />
                  {item.canonical}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
