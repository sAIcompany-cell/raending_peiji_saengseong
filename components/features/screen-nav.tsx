"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LandingPageSection } from "@/types";

interface ScreenNavProps {
  sections: LandingPageSection[];
  className?: string;
}

const shortLabel: Record<LandingPageSection["type"], string> = {
  hero: "시작",
  problem: "불편",
  solution: "해결",
  benefits: "장점",
  cta: "시작하기",
};

/** 화면 흐름 네비 — 좁은 폭에서는 줄바꿈되고, 현재 화면은 brand 색으로 강조한다. */
export function ScreenNav({ sections, className }: ScreenNavProps) {
  const pathname = usePathname();
  const ordered = [...sections].sort((a, b) => a.order - b.order);

  return (
    <nav aria-label="화면 이동" className={cn("flex flex-wrap items-center gap-1", className)}>
      {ordered.map((section, index) => {
        const active = pathname === section.route;
        return (
          <Link
            key={section.id}
            href={section.route}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
              active
                ? "bg-accent font-medium text-brand"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex size-5 items-center justify-center rounded-full text-xs",
                active ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {index + 1}
            </span>
            <span className="hidden sm:inline">{shortLabel[section.type]}</span>
          </Link>
        );
      })}
    </nav>
  );
}
