"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { getCta } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import { CtaButton, type CtaButtonData } from "@/components/features/cta-button";

/**
 * 화면 하단 행동 영역 — 상태 문구 + 주 CTA. cta 를 props 로 받거나 ctaId 로 스스로 불러온다.
 */
export function SectionCta({
  cta,
  ctaId,
  pagePath,
  status,
  badge,
  className,
}: {
  cta?: CtaButtonData;
  ctaId?: string;
  pagePath: string;
  /** 버튼 위에 놓이는 짧은 상태·안내 문장 */
  status?: string;
  badge?: string;
  className?: string;
}) {
  const [resolved, setResolved] = useState<CtaButtonData | undefined>(cta);
  const [loading, setLoading] = useState(!cta && Boolean(ctaId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cta || !ctaId) return;
    let alive = true;
    setLoading(true);
    getCta(ctaId)
      .then((result) => {
        if (!alive) return;
        if (result.ok && result.data) {
          setResolved(result.data);
          setError(null);
        } else {
          setError(result.ok ? "버튼 정보를 찾을 수 없어요." : result.error);
        }
      })
      .catch(() => alive && setError("버튼 정보를 불러오지 못했어요."))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [cta, ctaId]);

  return (
    <div className={cn("flex flex-col items-start gap-[var(--density-gap)]", className)}>
      {status ? (
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-brand" aria-hidden="true" />
          {status}
        </p>
      ) : null}
      {loading ? (
        <Skeleton className="h-11 w-full max-w-[12rem] rounded-lg" />
      ) : error ? (
        <p role="alert" className="inline-flex items-center gap-2 text-sm text-destructive">
          <CircleAlert className="size-4" aria-hidden="true" />
          {error}
        </p>
      ) : (
        <CtaButton cta={resolved} pagePath={pagePath} badge={badge} />
      )}
    </div>
  );
}
