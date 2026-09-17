"use client";

import * as React from "react";
import Link from "next/link";
import { Sofa } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Logo } from "@/types";

const sizeMap = {
  sm: { box: "h-8 w-8", icon: "h-4 w-4", text: "text-base" },
  md: { box: "h-9 w-9 sm:h-10 sm:w-10", icon: "h-5 w-5", text: "text-lg sm:text-xl" },
  lg: { box: "h-12 w-12", icon: "h-6 w-6", text: "text-2xl" },
} as const;

/**
 * 상단 로고 — 어느 화면에서든 홈으로 돌아가는 고정 지점.
 * 외부 이미지는 쓰지 않고 아이콘 + 토큰 배경으로 그린다.
 */
export function SiteLogo({
  logo,
  size = "md",
  href = "/",
  className,
}: {
  logo?: Logo;
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}) {
  const s = sizeMap[size];
  const label = logo?.altText ?? "가구비교 홈으로 이동";

  return (
    <Link
      href={href}
      aria-label={label}
      data-feat-id="feat_fe253b445"
      className={cn(
        "group inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-brand text-brand-foreground transition-transform duration-200 group-hover:-translate-y-0.5",
          s.box,
        )}
      >
        <Sofa className={s.icon} aria-hidden="true" />
      </span>
      <span className={cn("font-semibold tracking-tight text-foreground", s.text)}>
        가구비교
      </span>
    </Link>
  );
}
