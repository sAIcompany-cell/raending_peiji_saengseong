"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLogo } from "@/components/features/site-logo";
import { cn } from "@/lib/utils";
import type { LandingPageRoute } from "@/types";

const NAV: { href: LandingPageRoute; label: string }[] = [
  { href: "/hero", label: "소개" },
  { href: "/screen", label: "문제" },
  { href: "/screen-2", label: "서비스" },
  { href: "/screen-3", label: "장점" },
  { href: "/cta", label: "시작하기" },
];

/**
 * 상단 셸 — 로고(항상 노출) + 섹션 이동 내비.
 * 좁은 화면에서는 내비가 줄바꿈되어 가로 스크롤이 생기지 않는다.
 */
export function SiteHeader({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-border bg-background/90 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <SiteLogo />
        <nav aria-label="주요 섹션" className="-mx-1">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                      active
                        ? "bg-accent font-medium text-brand"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
