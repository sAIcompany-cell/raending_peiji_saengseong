"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/features/site-logo";
import { cn } from "@/lib/utils";
import type { LandingPageSection } from "@/types";

export type NavItem = { href: string; label: string };

export const defaultNavItems: NavItem[] = [
  { href: "/hero", label: "Hero" },
  { href: "/screen", label: "문제" },
  { href: "/screen-2", label: "서비스" },
  { href: "/screen-3", label: "장점" },
  { href: "/cta", label: "시작하기" },
];

/**
 * 상단 셸 헤더 — 로고(항상 노출) + 화면 이동 내비게이션.
 * 좁은 화면에서는 메뉴 버튼으로 접히고, 넓은 화면에서는 한 줄로 펼쳐진다.
 */
export function SiteHeader({
  logo,
  items = defaultNavItems,
}: {
  logo?: LandingPageSection;
  items?: NavItem[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <SiteLogo logo={logo} />

        <nav aria-label="주요 화면" className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                  active
                    ? "bg-accent font-medium text-brand"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </Container>

      {open ? (
        <nav aria-label="주요 화면(모바일)" className="border-t border-border md:hidden">
          <Container className="flex flex-col py-2">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                    active
                      ? "bg-accent font-medium text-brand"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
