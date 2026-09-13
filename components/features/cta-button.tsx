"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCtaTracker } from "@/components/features/use-analytics";

export interface CtaButtonProps {
  /** 버튼 문구 */
  label: string;
  /** 이동 대상 — 서비스 시작(회원가입) 페이지 또는 다음 섹션 */
  href: string;
  /** 클릭 이벤트를 기록할 현재 화면 경로 */
  pagePath: string;
  /** 이동 목적 안내 문구(다음 단계 이해용) */
  hint?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "lg";
}

/**
 * CTA 버튼 클릭 (feat_fd60f2b56)
 * - 클릭 시 CTA 클릭 이벤트를 기록한 뒤 지정된 대상 페이지로 이동한다.
 * - 측정 실패가 이동을 막지 않는다.
 */
export function CtaButton({
  label,
  href,
  pagePath,
  hint,
  variant = "default",
  size = "lg",
}: CtaButtonProps) {
  const router = useRouter();
  const trackCtaClick = useCtaTracker(pagePath);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    if (pending) return;
    setPending(true);
    setError(null);
    try {
      await trackCtaClick();
      router.push(href);
    } catch {
      setError("페이지 이동에 실패했어요. 잠시 후 다시 시도해 주세요.");
      setPending(false);
    }
  }

  return (
    <div data-feat-id="feat_fd60f2b56" className="flex flex-col gap-2">
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={handleClick}
        disabled={pending}
        aria-busy={pending}
        className="w-full sm:w-auto"
      >
        {pending ? (
          <Loader2 className="animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight aria-hidden="true" />
        )}
        <span>{pending ? "이동 중…" : label}</span>
      </Button>

      {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}

      {error ? (
        <p role="alert" className="flex items-center gap-1.5 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}
