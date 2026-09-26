"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteLogo, type SiteLogoData } from "./site-logo";

export interface SiteNavItem {
  href: string;
  label: string;
}

export function SiteHeader({
  items,
  logo,
}: {
  items: SiteNavItem[];
  logo?: SiteLogoData;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (active: boolean) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
      active
        ? "text-brand"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  return (
    <header data-cbv-src="components/features/site-header.tsx:39" className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div data-cbv-src="components/features/site-header.tsx:40" className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <SiteLogo logo={logo} />

        <nav data-cbv-src="components/features/site-header.tsx:43" aria-label="주요 화면" className="hidden md:block">
          <ul data-cbv-src="components/features/site-header.tsx:44" className="flex items-center gap-1">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li data-cbv-src="components/features/site-header.tsx:48" key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass(active)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <nav data-cbv-src="components/features/site-header.tsx:76" id="mobile-nav" aria-label="주요 화면" className="border-t border-border md:hidden">
          <ul data-cbv-src="components/features/site-header.tsx:77" className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li data-cbv-src="components/features/site-header.tsx:81" key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(linkClass(active), "block")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
