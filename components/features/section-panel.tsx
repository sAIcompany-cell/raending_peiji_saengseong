import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion";
import type { LandingPageSection } from "@/types";

export type SectionPoint = {
  title: string;
  description: string;
};

/**
 * 한 화면에 한 가지 메시지 — 헤드라인 + 부제 + 항목 카드 목록.
 */
export function SectionPanel({
  section,
  title,
  description,
  points,
  loading = false,
  numbered = false,
  status,
  actions,
}: {
  section?: LandingPageSection;
  title?: string;
  description?: string;
  points: SectionPoint[];
  loading?: boolean;
  numbered?: boolean;
  status?: ReactNode;
  actions?: ReactNode;
}) {
  const headline = title ?? section?.title;
  const subline = description ?? section?.content;

  return (
    <section className="flex flex-col gap-8">
      <FadeIn className="flex flex-col gap-3">
        {headline ? (
          <h2 className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            {headline}
          </h2>
        ) : null}
        {subline ? (
          <p className="max-w-2xl text-base text-muted-foreground">{subline}</p>
        ) : null}
      </FadeIn>

      {loading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((key) => (
            <Card key={key}>
              <CardContent className="flex flex-col gap-3 p-6">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : points.length === 0 ? (
        <EmptyState
          icon={<Info className="size-6" aria-hidden="true" />}
          title="아직 보여드릴 비교 항목이 없습니다"
          description="비교하고 싶은 가구 조건을 먼저 정해 주세요."
          action={actions}
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <StaggerItem key={point.title} className="h-full">
              <Card className="h-full transition-colors hover:border-brand">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  {numbered ? (
                    <Badge variant="accent" className="w-fit">
                      {index + 1}단계
                    </Badge>
                  ) : null}
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {status ? <SectionNote>{status}</SectionNote> : null}
      {actions && points.length > 0 ? (
        <div className="flex flex-wrap gap-3">{actions}</div>
      ) : null}
    </section>
  );
}

/**
 * 섹션 하단의 짧은 상태 문구 — 색만으로 상태를 말하지 않도록 아이콘을 함께 둔다.
 */
export function SectionNote({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 text-sm text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
