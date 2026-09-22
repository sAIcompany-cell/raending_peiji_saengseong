"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTrackCtaClick } from "@/components/features/analytics";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CtaButton as CtaButtonModel } from "@/types";

interface CtaButtonProps {
  cta: CtaButtonModel;
  /** 이벤트에 기록할 현재 라우트(기본: CTA 가 놓인 섹션의 라우트를 모르므로 필수 권장) */
  pagePath: string;
  size?: ButtonProps["size"];
  /** 버튼 위 유인 배지 문구(선택) */
  badge?: string;
  /** 이동 후 다음 단계 설명을 버튼 아래에 표시 */
  showDestination?: boolean;
  className?: string;
}

export function CtaButton({
  cta,
  pagePath,
  size = "lg",
  badge,
  showDestination = true,
  className,
}: CtaButtonProps) {
  const track = useTrackCtaClick();
  const [clicked, setClicked] = useState(false);
  const inactive = cta.status !== "active";
  const variant = cta.variant === "secondary" ? "outline" : "default";

  return (
    <div data-cbv-src="components/features/cta-button.tsx:38" data-feat-id="feat_fd60f2b56" className={cn("flex flex-col items-start gap-3", className)}>
      {badge ? (
        <Badge className="border-transparent bg-brand text-brand-foreground">{badge}</Badge>
      ) : null}

      {inactive ? (
        <Button size={size} variant={variant} disabled aria-disabled="true">
          {cta.label}
        </Button>
      ) : (
        <Link
          href={cta.href}
          onClick={() => {
            setClicked(true);
            track(cta, pagePath);
          }}
          className={cn(
            buttonVariants({ variant, size }),
            "focus-visible:ring-brand min-w-[10rem] sm:min-w-[12rem]",
          )}
        >
          {cta.label}
          <ArrowRight aria-hidden="true" />
        </Link>
      )}

      {showDestination ? (
        <p data-cbv-src="components/features/cta-button.tsx:65" className="flex items-start gap-1.5 text-sm text-muted-foreground" aria-live="polite">
          {clicked ? (
            <>
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <span data-cbv-src="components/features/cta-button.tsx:69">다음 화면으로 이동합니다. {cta.destinationDescription}</span>
            </>
          ) : (
            <span data-cbv-src="components/features/cta-button.tsx:72">{cta.destinationDescription}</span>
          )}
        </p>
      ) : null}
    </div>
  );
}
