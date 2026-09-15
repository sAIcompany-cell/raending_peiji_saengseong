import type { ReactNode } from "react";
import { CheckCircle2, Info, ListChecks, AlertCircle } from "lucide-react";
import type { LandingPageSection } from "@/types";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";

export interface SectionPoint {
  title: string;
  description: string;
}

interface SectionPanelProps {
  /** title = 헤드라인, content = 부제 (섹션 자체를 함께 보여줄 때) */
  section?: LandingPageSection;
  /** 설명 항목(「제목 — 문장」 쌍) */
  points: SectionPoint[];
  /** 항목 위에 붙는 상태 배지 문구 */
  status?: string;
  loading?: boolean;
  error?: string | null;
  /** 항목 아래에 오는 행동 요소 */
  actions?: ReactNode;
  children?: ReactNode;
}

/** 헤드라인·부제 + 설명 항목 목록 + 상태 + 행동. 대부분의 화면 본문 골격. */
export function SectionPanel({
  section,
  points,
  status,
  loading = false,
  error = null,
  actions,
  children,
}: SectionPanelProps) {
  return (
    <section data-cbv-src="components/features/section-panel.tsx:40" className="flex flex-col gap-[var(--density-gap)] py-12 sm:py-16">
      {section ? (
        <FadeIn className="flex max-w-3xl flex-col gap-4">
          <h2 data-cbv-src="components/features/section-panel.tsx:43" className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {section.title}
          </h2>
          {section.content ? (
            <p data-cbv-src="components/features/section-panel.tsx:47" className="text-base leading-relaxed text-muted-foreground sm:text-xl">
              {section.content}
            </p>
          ) : null}
        </FadeIn>
      ) : null}

      {children}

      {error ? (
        <p data-cbv-src="components/features/section-panel.tsx:57"
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-border bg-muted p-4 text-sm text-foreground"
        >
          <AlertCircle aria-hidden="true" className="size-4 shrink-0 text-brand" />
          내용을 불러오지 못했어요. 잠시 후 다시 시도해 주세요. ({error})
        </p>
      ) : loading ? (
        <div data-cbv-src="components/features/section-panel.tsx:65" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-36 w-full" />
          ))}
        </div>
      ) : points.length === 0 ? (
        <EmptyState
          icon={<ListChecks className="size-8" />}
          title="아직 보여드릴 내용이 없어요"
          description="가구 가격과 조건을 비교하는 방법을 곧 안내해 드려요."
          action={actions}
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <CheckCircle2 aria-hidden="true" className="size-5 text-brand" />
                  <p data-cbv-src="components/features/section-panel.tsx:84" className="text-base font-semibold text-foreground">
                    {point.title}
                  </p>
                  <p data-cbv-src="components/features/section-panel.tsx:87" className="text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {status && !loading && !error ? (
        <Badge variant="accent" className="w-fit text-brand">
          <CheckCircle2 aria-hidden="true" className="mr-1 size-3" />
          {status}
        </Badge>
      ) : null}

      {actions && points.length > 0 ? (
        <div data-cbv-src="components/features/section-panel.tsx:105" className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>
      ) : null}
    </section>
  );
}

/** 한 줄짜리 강조 문장(예: 해결 요약). */
export function SectionNote({ children }: { children: ReactNode }) {
  return (
    <p data-cbv-src="components/features/section-panel.tsx:114" className="flex max-w-2xl items-start gap-2 rounded-lg border border-brand/30 bg-accent p-4 text-base leading-relaxed text-foreground">
      <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
      <span data-cbv-src="components/features/section-panel.tsx:116">{children}</span>
    </p>
  );
}
