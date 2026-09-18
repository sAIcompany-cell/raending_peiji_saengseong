"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SiteLogo } from "@/components/features/site-logo";
import { cn } from "@/lib/utils";
import type { SiteLogo as SiteLogoData } from "@/types";

export type NavItem = {
  href: string;
  label: string;
};

export const defaultNavItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/hero", label: "가격 비교" },
  { href: "/screen-2", label: "이용 방법" },
  { href: "/screen-3", label: "달라지는 점" },
];

/**
 * 모든 화면 최상단에 붙는 헤더. 좁은 화면에서는 네비게이션이 줄바꿈된다.
 */
export function SiteHeader({
  logo,
  navItems = defaultNavItems,
  ctaLabel = "무료로 시작하기",
  ctaHref = "/cta",
}: {
  logo?: SiteLogoData;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <Container size="wide" className="flex flex-wrap items-center gap-3 py-3 sm:gap-4">
        <SiteLogo logo={logo} />

        <nav aria-label="주요 화면" className="order-3 w-full sm:order-2 sm:w-auto sm:flex-1">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-block rounded-sm py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                      active
                        ? "font-medium text-brand"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="order-2 ml-auto sm:order-3 sm:ml-0">
          <Link
            href={ctaHref}
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            {ctaLabel}
          </Link>
          <Link
            href={ctaHref}
            className="text-sm font-medium text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:hidden"
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </header>
  );
}
