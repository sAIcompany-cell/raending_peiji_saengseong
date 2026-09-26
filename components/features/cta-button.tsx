"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CircleAlert, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { mockCtaList } from "@/lib/mock-data";
import { useTrackCtaClick } from "./analytics";

export type CtaButtonData = (typeof mockCtaList)[number];

function isValidDestination(destination: string | undefined): destination is string {
  if (!destination) return false;
  return destination.startsWith("/") || /^https?:\/\//.test(destination);
}

/**
 * CTA 버튼 — 클릭을 기록하고 지정된 목적지로 이동한다.
 * 목적지가 비었거나 잘못됐으면 이동하지 않고 화면에 안내한다.
 */
export function CtaButton({
  cta,
  label,
  href,
  pagePath,
  badge,
  size = "lg",
  className,
}: {
  cta?: CtaButtonData;
  label?: string;
  href?: string;
  pagePath: string;
  badge?: string;
  size?: "default" | "lg";
  className?: string;
}) {
  const router = useRouter();
  const trackClick = useTrackCtaClick(pagePath);
  const [state, setState] = useState<"idle" | "navigating" | "error">("idle");

  const text = label ?? cta?.label ?? "무료로 시작하기";
  const destination = href ?? cta?.destination;
  const inactive = cta ? cta.status !== "active" : false;

  const handleClick = () => {
    if (!isValidDestination(destination)) {
      setState("error");
      return;
    }
    try {
      trackClick();
    } catch {
      // 측정 실패는 이동을 막지 않는다.
    }
    setState("navigating");
    if (destination.startsWith("/")) {
      router.push(destination);
    } else if (typeof window !== "undefined") {
      window.location.assign(destination);
    }
  };

  return (
    <div data-feat-id="feat_fd60f2b56" className={cn("flex flex-col items-start gap-3", className)}>
      {badge ? (
        <Badge variant="outline" className="border-brand text-brand">
          {badge}
        </Badge>
      ) : null}

      <Button
        size={size}
        onClick={handleClick}
        disabled={inactive || state === "navigating"}
        className="w-full gap-2 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
      >
        {state === "navigating" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : null}
        <span>{text}</span>
        {state !== "navigating" ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
      </Button>

      <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {state === "navigating" ? `'${text}'을(를) 눌렀어요. 다음 화면으로 이동하고 있어요.` : null}
        {inactive && state === "idle" ? "지금은 이 버튼을 사용할 수 없어요." : null}
      </p>

      {state === "error" ? (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          이동할 페이지를 찾지 못했어요. 잠시 후 다시 시도해 주세요.
        </p>
      ) : null}
    </div>
  );
}
