"use client";

import { useCallback, useEffect, useState } from "react";
import { CircleAlert, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCta } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import { CtaButton, type CtaButtonData } from "./cta-button";

function StepStatus({ current, total }: { current: number; total: number }) {
  if (current < 1) return null;
  return (
    <div data-cbv-src="components/features/section-cta.tsx:14" className="flex items-center gap-3" aria-label={`전체 ${total}단계 중 ${current}단계`}>
      <div data-cbv-src="components/features/section-cta.tsx:15" className="flex gap-1.5" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span data-cbv-src="components/features/section-cta.tsx:17"
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i < current ? "w-6 bg-brand" : "w-3 bg-accent",
            )}
          />
        ))}
      </div>
      <span data-cbv-src="components/features/section-cta.tsx:26" className="text-sm text-muted-foreground">
        {current} / {total}
      </span>
    </div>
  );
}

/**
 * 화면 하단 행동 영역 — 진행 상태 + 주요 버튼.
 * ctaId 를 주면 CTA 설정을 불러와 쓰고, href 를 주면 그 경로로 바로 이동한다.
 */
export function SectionCta({
  ctaId,
  label,
  href,
  pagePath,
  badge,
  step,
  className,
}: {
  ctaId?: string;
  label?: string;
  href?: string;
  pagePath: string;
  badge?: string;
  step?: { current: number; total: number };
  className?: string;
}) {
  const [cta, setCta] = useState<CtaButtonData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(Boolean(ctaId));
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!ctaId) return;
    setLoading(true);
    setError(null);
    try {
      const result = await getCta(ctaId);
      if (result.ok) setCta(result.data);
      else setError("버튼 정보를 불러오지 못했어요.");
    } catch {
      setError("네트워크 연결을 확인하고 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }, [ctaId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div data-cbv-src="components/features/section-cta.tsx:78"
      className={cn(
        "flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-start sm:justify-between",
        className,
      )}
    >
      {step ? <StepStatus current={step.current} total={step.total} /> : <span data-cbv-src="components/features/section-cta.tsx:84" />}

      {loading ? (
        <div data-cbv-src="components/features/section-cta.tsx:87" className="flex w-full flex-col gap-3 sm:w-auto">
          <Skeleton className="h-11 w-full rounded-lg sm:w-44" />
          <Skeleton className="h-4 w-32" />
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/section-cta.tsx:92" className="flex flex-col items-start gap-3">
          <p data-cbv-src="components/features/section-cta.tsx:93" role="alert" className="flex items-center gap-2 text-sm text-destructive">
            <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            {error}
          </p>
          <Button variant="outline" size="sm" onClick={() => void load()} className="gap-2">
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            다시 시도
          </Button>
        </div>
      ) : (
        <CtaButton cta={cta} label={label} href={href} pagePath={pagePath} badge={badge} />
      )}
    </div>
  );
}
