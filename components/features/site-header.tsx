import Link from "next/link";
import type { LandingPageSection } from "@/types";
import { SiteLogo } from "@/components/features/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface NavItem {
  href: string;
  label: string;
}

export const defaultNavItems: NavItem[] = [
  { href: "/hero", label: "시작" },
  { href: "/screen", label: "불편" },
  { href: "/screen-2", label: "해결" },
  { href: "/screen-3", label: "장점" },
  { href: "/cta", label: "시작하기" },
];

interface SiteHeaderProps {
  logo?: LandingPageSection;
  items?: NavItem[];
  /** 현재 경로 — 활성 링크 강조용 */
  currentPath?: string;
}

/** 로고 + 화면 이동 링크. 좁은 화면에서는 링크가 줄바꿈된다. */
export function SiteHeader({
  logo,
  items = defaultNavItems,
  currentPath,
}: SiteHeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <SiteLogo logo={logo} />
        <nav aria-label="화면 이동" className="flex flex-wrap items-center gap-1">
          {items.map((item) => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "focus-visible:ring-brand",
                  active && "text-brand font-semibold underline underline-offset-4",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
