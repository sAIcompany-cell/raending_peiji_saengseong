"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useTrackCtaClick } from "@/components/features/analytics";
import { cn } from "@/lib/utils";
import type { CtaButton as CtaButtonData } from "@/types";

/** 실제로 존재하는 화면만 목적지로 허용한다(빈 페이지·오류 페이지 이동 방지). */
const KNOWN_ROUTES = ["/", "/hero", "/screen", "/screen-2", "/screen-3", "/cta"];

function resolveHref(href: string, fallbackHref: string): string {
  return KNOWN_ROUTES.includes(href) ? href : fallbackHref;
}

/**
 * 랜딩페이지의 행동 유도 버튼 — 누르면 클릭을 기록하고 다음 화면으로 이동한다.
 * 측정이 실패해도 이동은 그대로 진행된다.
 */
export function CtaButton({
  cta,
  label,
  href,
  pagePath,
  fallbackHref = "/cta",
  size = "lg",
  variant,
  note,
  className,
}: {
  cta?: CtaButtonData;
  label?: string;
  href?: string;
  pagePath: string;
  fallbackHref?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary" | "ghost";
  note?: string;
  className?: string;
}) {
  const trackCtaClick = useTrackCtaClick();
  const text = label ?? cta?.label ?? "무료로 시작하기";
  const target = resolveHref(href ?? cta?.href ?? fallbackHref, fallbackHref);
  const buttonVariant = variant ?? (cta?.variant === "secondary" ? "secondary" : "default");

  return (
    <span data-feat-id="feat_fd60f2b56" className="inline-flex flex-wrap items-center gap-3">
      <Link
        href={target}
        onClick={() => trackCtaClick(pagePath)}
        className={cn(buttonVariants({ variant: buttonVariant, size }), className)}
      >
        {text}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
      {note ? <span className="text-sm text-muted-foreground">{note}</span> : null}
    </span>
  );
}
