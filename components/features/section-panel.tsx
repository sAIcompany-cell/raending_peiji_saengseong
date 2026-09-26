import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { CircleCheck, Inbox } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface SectionPointData {
  title: string;
  body: string;
  icon?: LucideIcon;
}

export function SectionPoint({
  index,
  title,
  body,
  icon: Icon,
}: SectionPointData & { index: number }) {
  return (
    <Card className="h-full transition-colors hover:border-brand/40">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-brand"
            aria-hidden="true"
          >
            {Icon ? (
              <Icon className="h-5 w-5" />
            ) : (
              <span className="font-heading text-sm font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold tracking-tight break-keep text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed break-keep text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

export function SectionNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-muted p-6">
      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
      <p className="text-base leading-relaxed break-keep text-foreground">{children}</p>
    </div>
  );
}

/**
 * 제목 · 부제 · 핵심 항목 목록 · 보조 문장 · 행동 영역 순으로 쌓는 화면 본문 블록.
 */
export function SectionPanel({
  title,
  subtitle,
  eyebrow,
  points,
  note,
  loading = false,
  emptyAction,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  points: SectionPointData[];
  note?: ReactNode;
  loading?: boolean;
  emptyAction?: ReactNode;
  children?: ReactNode;
}) {
  const cols =
    points.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : points.length === 2 ? "sm:grid-cols-2" : "";

  return (
    <section className="flex flex-col gap-10">
      <FadeIn className="flex flex-col items-start gap-4">
        {eyebrow ? (
          <Badge variant="outline" className="border-brand text-brand">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight break-keep text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-base leading-relaxed break-keep text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </FadeIn>

      {loading ? (
        <div className={cn("grid grid-cols-1 gap-[var(--density-gap,1.25rem)]", cols || "sm:grid-cols-2")}>
          {[0, 1, 2].map((key) => (
            <Skeleton key={key} className="h-44 w-full rounded-lg" />
          ))}
        </div>
      ) : points.length === 0 ? (
        <EmptyState
          icon={<Inbox className="h-6 w-6" aria-hidden="true" />}
          title="아직 보여드릴 내용이 없어요"
          description="다음 단계로 넘어가 가구 비교를 이어가 보세요."
          action={emptyAction}
        />
      ) : (
        <Stagger className={cn("grid grid-cols-1 gap-[var(--density-gap,1.25rem)]", cols)}>
          {points.map((point, index) => (
            <StaggerItem key={point.title} className="h-full">
              <SectionPoint index={index} {...point} />
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {note ? (
        <FadeIn delay={0.1}>
          <SectionNote>{note}</SectionNote>
        </FadeIn>
      ) : null}

      {children}
    </section>
  );
}
