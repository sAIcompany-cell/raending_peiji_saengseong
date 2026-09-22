import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SiteLogo as SiteLogoModel } from "@/types";

interface SiteLogoProps {
  logo: SiteLogoModel;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { box: "size-7 text-xs", text: "text-base" },
  md: { box: "size-8 text-sm sm:size-9", text: "text-lg sm:text-xl" },
  lg: { box: "size-10 text-base sm:size-12 sm:text-lg", text: "text-2xl sm:text-3xl" },
} as const;

/** 상단 로고 — 어떤 폭에서도 잘리지 않도록 shrink-0 + whitespace-nowrap 로 고정한다. */
export function SiteLogo({ logo, size = "md", className }: SiteLogoProps) {
  const s = sizeMap[size];
  const showIcon = logo.variant !== "wordmark";
  const showName = logo.variant !== "icon";

  return (
    <div data-cbv-src="components/features/site-logo.tsx:24" data-feat-id="feat_fe253b445" className={cn("inline-flex shrink-0", className)}>
      <Link
        href={logo.href}
        aria-label={logo.alt}
        className="group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        {showIcon ? (
          <span data-cbv-src="components/features/site-logo.tsx:31"
            aria-hidden="true"
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-md bg-brand font-heading font-bold tracking-tight text-brand-foreground transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105",
              s.box,
            )}
          >
            {logo.shortName}
          </span>
        ) : null}
        {showName ? (
          <span data-cbv-src="components/features/site-logo.tsx:42"
            className={cn(
              "whitespace-nowrap font-heading font-bold tracking-tight text-foreground transition-colors group-hover:text-brand",
              s.text,
            )}
          >
            {logo.name}
          </span>
        ) : null}
      </Link>
    </div>
  );
}
