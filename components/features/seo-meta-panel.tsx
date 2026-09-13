import { Globe, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/**
 * 기본 SEO 메타 태그 (feat_f69e65664)
 * 현재 화면에 적용된 title/description/canonical 을 확인할 수 있게 표시한다.
 */
export function SeoMetaPanel({
  section,
  pagePath,
  loading = false,
}: {
  section?: LandingPageSection;
  pagePath: string;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <Card>
        <CardContent className="space-y-3 p-6">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </Card>
    );
  }

  const title = section?.title ?? "가구 가격 비교 랜딩";
  const description =
    section?.content ?? "원하는 가구의 조건과 가격을 한 화면에서 비교해 보세요.";

  return (
    <FadeIn>
      <div data-feat-id="feat_f69e65664">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-brand" aria-hidden="true" />
              <h2 className="font-display text-base font-semibold">
                적용된 SEO 메타 태그
              </h2>
              <Badge variant="accent">한국어 페이지</Badge>
            </div>

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">title</dt>
                <dd className="mt-0.5 break-words text-foreground">{title}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">description</dt>
                <dd className="mt-0.5 break-words text-foreground">
                  {description}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">canonical</dt>
                <dd className="mt-0.5 flex items-center gap-1.5 break-all text-foreground">
                  <Globe className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>{pagePath}</span>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}
