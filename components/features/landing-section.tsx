import type { ReactNode } from "react";
import { AlertCircle, Check, CircleDot, Inbox } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/** 화면 상단 제목 영역 — 화면당 시각적 초점 1개. */
export function PageHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="max-w-2xl">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

/** 섹션 상태 표시 — 색만으로 상태를 표현하지 않고 아이콘·문구를 함께 쓴다. */
export function SectionStatus({
  label,
  tone = "ready",
}: {
  label: string;
  tone?: "ready" | "pending";
}) {
  return (
    <Badge
      variant={tone === "ready" ? "accent" : "outline"}
      className="gap-1.5 py-1"
    >
      {tone === "ready" ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span>상태 · {label}</span>
    </Badge>
  );
}

export interface SectionBlockProps {
  section?: LandingPageSection;
  highlights?: string[];
  statusLabel?: string;
  action?: ReactNode;
  loading?: boolean;
  error?: string | null;
}

/**
 * 랜딩 섹션 블록 — 제목/본문 + 항목 목록 + 상태 + 액션.
 * 로딩·에러·빈 상태를 스스로 다룬다.
 */
export function SectionBlock({
  section,
  highlights = [],
  statusLabel = "표시됨",
  action,
  loading = false,
  error = null,
}: SectionBlockProps) {
  if (loading) {
    return (
      <Card>
        <CardContent className="space-y-4 p-6">
          <Skeleton className="h-7 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-3 pt-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <p
            role="alert"
            className="flex items-start gap-2 text-sm text-destructive"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
          {action ? <div className="mt-6">{action}</div> : null}
        </CardContent>
      </Card>
    );
  }

  if (!section) {
    return (
      <EmptyState
        icon={<Inbox className="h-6 w-6" aria-hidden="true" />}
        title="표시할 섹션 내용이 없어요"
        description="섹션 정보를 불러오면 이곳에 제목과 안내 문구가 표시됩니다."
        action={action}
      />
    );
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {section.title ?? "제목 없는 섹션"}
        </h2>
        {section.content ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {section.content}
          </p>
        ) : null}

        {highlights.length > 0 ? (
          <Stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {highlights.map((item) => (
              <StaggerItem key={item}>
                <div className="h-full rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:border-brand/40">
                  <Check
                    className="h-4 w-4 text-brand"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionStatus label={statusLabel} />
          {action ? <div className="flex flex-wrap gap-2">{action}</div> : null}
        </div>
      </CardContent>
    </Card>
  );
}
