import type { ReactNode } from "react";
import { AlertCircle, Inbox } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/**
 * 와이어프레임 공통 섹션 블록: 큰 제목 → 항목 목록 → 상태 → 액션.
 * 로딩·빈 상태·오류를 이 블록이 스스로 처리한다.
 */
export function SectionPanel({
  title,
  description,
  items,
  status,
  loading = false,
  error,
  action,
  emptyAction,
}: {
  title: string;
  description?: string;
  items: LandingPageSection[];
  status?: string;
  loading?: boolean;
  error?: string | null;
  action?: ReactNode;
  emptyAction?: ReactNode;
}) {
  return (
    <FadeIn>
      <section data-cbv-src="components/features/section-panel.tsx:35" className="py-12 sm:py-16">
        <div data-cbv-src="components/features/section-panel.tsx:36" className="max-w-2xl">
          <h2 data-cbv-src="components/features/section-panel.tsx:37" className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description ? (
            <p data-cbv-src="components/features/section-panel.tsx:39" className="mt-3 text-base text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div data-cbv-src="components/features/section-panel.tsx:43" className="mt-8">
          {loading ? (
            <div data-cbv-src="components/features/section-panel.tsx:45" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((key) => (
                <Card key={key}>
                  <CardHeader className="gap-2">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div data-cbv-src="components/features/section-panel.tsx:57"
              role="alert"
              className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4 text-sm text-destructive"
            >
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span data-cbv-src="components/features/section-panel.tsx:62">{error}</span>
            </div>
          ) : items.length === 0 ? (
            <EmptyState
              icon={<Inbox aria-hidden="true" className="h-6 w-6" />}
              title="보여줄 항목이 아직 없어요"
              description="내용이 준비되면 이 자리에 표시됩니다."
              action={emptyAction}
            />
          ) : (
            <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <StaggerItem key={item.id ?? `${title}-${index}`} className="h-full">
                  <Card className="h-full transition-colors hover:border-brand">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {item.title ?? "제목 없음"}
                      </CardTitle>
                      {item.content ? (
                        <CardDescription>{item.content}</CardDescription>
                      ) : null}
                    </CardHeader>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>

        {status ? (
          <div data-cbv-src="components/features/section-panel.tsx:92" className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="accent">상태</Badge>
            <span data-cbv-src="components/features/section-panel.tsx:94">{status}</span>
          </div>
        ) : null}

        {action ? <div data-cbv-src="components/features/section-panel.tsx:98" className="mt-8 flex flex-wrap gap-3">{action}</div> : null}
      </section>
    </FadeIn>
  );
}

/** 카드 그리드 없이 본문만 쓰는 축약형(상세 패널). */
export function SectionNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{children}</CardContent>
    </Card>
  );
}
