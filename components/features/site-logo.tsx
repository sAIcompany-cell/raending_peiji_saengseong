import Link from "next/link";
import { Armchair } from "lucide-react";
import type { LandingPageSection } from "@/types";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  /** 로고 항목(title = 서비스명, content = 이동 경로) */
  logo?: LandingPageSection;
  className?: string;
}

/** 상단에 항상 노출되는 로고. 클릭하면 대표 페이지로 이동한다. */
export function SiteLogo({ logo, className }: SiteLogoProps) {
  const name = logo?.title ?? "가구비교";
  const href = logo?.content ?? "/";
  return (
    <div data-feat-id="feat_fe253b445" className="flex shrink-0 items-center">
      <Link
        href={href}
        aria-label={`${name} 홈으로 이동`}
        className={cn(
          "inline-flex items-center gap-2 rounded-md text-lg font-semibold tracking-tight text-foreground",
          "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
          className,
        )}
      >
        <span className="flex size-8 items-center justify-center rounded-md bg-brand text-brand-foreground">
          <Armchair aria-hidden="true" className="size-4" />
        </span>
        <span className="whitespace-nowrap">{name}</span>
      </Link>
    </div>
  );
}
