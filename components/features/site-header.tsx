"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiteLogo } from "@/components/features/site-logo";

export interface SiteNavItem {
  href: string;
  label: string;
}

/** 상단 헤더 — 로고 + 섹션 이동. 좁은 화면에서는 네비가 아래로 줄바꿈되고 가로 스크롤로 넘친다. */
export function SiteHeader({ nav, className }: { nav: SiteNavItem[]; className?: string }) {
  const pathname = usePathname();
  return (
    <header data-cbv-src="components/features/site-header.tsx:17" className={cn("border-b border-border bg-background/95 backdrop-blur", className)}>
      <div data-cbv-src="components/features/site-header.tsx:18" className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <SiteLogo />
        <nav data-cbv-src="components/features/site-header.tsx:20" aria-label="섹션 이동" className="-mx-1 overflow-x-auto">
          <ul data-cbv-src="components/features/site-header.tsx:21" className="flex items-center gap-1 px-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li data-cbv-src="components/features/site-header.tsx:25" key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                      active
                        ? "bg-muted text-brand"
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
