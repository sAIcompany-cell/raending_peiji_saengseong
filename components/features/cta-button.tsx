"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockCtaList, type MockCta } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useTrackCtaClick } from "@/components/features/analytics";

export type CtaButtonData = MockCta;

const DEFAULT_CTA: CtaButtonData = mockCtaList[0];

/**
 * CTA 버튼 (feat_fd60f2b56) — 클릭 이벤트를 기록한 뒤 지정된 목적지로 이동한다.
 * 목적지가 비어 있으면 버튼을 비활성화해 빈 페이지·오류 페이지로 가는 일을 막는다.
 */
export function CtaButton({
  cta = DEFAULT_CTA,
  pagePath,
  badge,
  size = "lg",
  variant = "default",
  className,
  onNavigate,
}: {
  cta?: CtaButtonData;
  /** 이벤트에 기록할 현재 화면 경로 */
  pagePath: string;
  /** 버튼 위에 얹는 유인 배지 문구(선택) */
  badge?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  onNavigate?: (destination: string) => void;
}) {
  const router = useRouter();
  const track = useTrackCtaClick(pagePath);
  const [pending, setPending] = useState(false);
  const destination = cta.destination?.trim() ?? "";
  const disabled = destination.length === 0;

  const handleClick = () => {
    if (disabled || pending) return;
    setPending(true);
    track();
    onNavigate?.(destination);
    router.push(destination);
  };

  return (
    <div data-feat-id="feat_fd60f2b56" className={cn("inline-flex flex-col items-start gap-2", className)}>
      {badge ? (
        <Badge variant="outline" className="border-brand text-brand">
          {badge}
        </Badge>
      ) : null}
      <Button
        type="button"
        size={size}
        variant={variant}
        onClick={handleClick}
        disabled={disabled || pending}
        aria-disabled={disabled || pending}
        className="w-full sm:w-auto"
      >
        {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : null}
        {cta.label}
        {!pending ? <ArrowRight aria-hidden="true" /> : null}
      </Button>
      {disabled ? (
        <p role="alert" className="text-sm text-muted-foreground">
          이동할 화면이 아직 정해지지 않았어요.
        </p>
      ) : null}
    </div>
  );
}
