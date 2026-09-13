"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrackCtaClick } from "@/components/features/analytics";
import { cn } from "@/lib/utils";

/**
 * CTA 버튼 클릭(feat_fd60f2b56) — 지정된 시작 페이지로 이동하고,
 * 이동 직전에 CTA 클릭 이벤트를 기록한다(측정 실패가 이동을 막지 않는다).
 */
export function CtaButton({
  label = "무료로 시작하기",
  href = "/cta",
  fromPath = "/",
  hint,
  className,
  size = "lg",
  variant = "default",
}: {
  label?: string;
  href?: string;
  fromPath?: string;
  hint?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
}) {
  const router = useRouter();
  const trackCtaClick = useTrackCtaClick();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    setError(null);
    trackCtaClick(fromPath);
    setPending(true);
    try {
      router.push(href);
    } catch {
      setPending(false);
      setError("페이지로 이동하지 못했어요. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div data-cbv-src="components/features/cta-button.tsx:49" data-feat-id="feat_fd60f2b56" className={cn("w-full sm:w-auto", className)}>
      <Button
        type="button"
        size={size}
        variant={variant}
        onClick={handleClick}
        disabled={pending}
        className="w-full sm:w-auto"
      >
        {pending ? (
          <Loader2 aria-hidden="true" className="animate-spin" />
        ) : (
          <ArrowRight aria-hidden="true" />
        )}
        {pending ? "이동 중…" : label}
      </Button>

      {hint ? <p data-cbv-src="components/features/cta-button.tsx:66" className="mt-2 text-sm text-muted-foreground">{hint}</p> : null}

      {error ? (
        <p data-cbv-src="components/features/cta-button.tsx:69" role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
