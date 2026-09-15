"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useTrackCtaClick } from "@/components/features/analytics";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  /** 이동할 경로. 비어 있으면 첫 화면으로 보낸다. */
  href?: string;
  /** 버튼 문구. 콘텐츠 계약의 CTA 문구를 그대로 넘긴다. */
  label?: string;
  /** 이벤트에 기록할 현재 화면 경로 */
  pagePath?: string;
  size?: "default" | "lg" | "sm";
  className?: string;
}

/** 다음 단계로 이동하는 주 CTA. 클릭 시 cta_click 이벤트를 남긴다. */
export function CtaButton({
  href = "/hero",
  label = "무료로 시작하기",
  pagePath,
  size = "lg",
  className,
}: CtaButtonProps) {
  const track = useTrackCtaClick(pagePath);
  return (
    <span data-cbv-src="components/features/cta-button.tsx:30" data-feat-id="feat_fd60f2b56" className="inline-flex">
      <Link
        href={href}
        onClick={track}
        className={cn(
          buttonVariants({ size }),
          "focus-visible:ring-brand",
          className,
        )}
      >
        {label}
        <ArrowRight aria-hidden="true" />
      </Link>
    </span>
  );
}
