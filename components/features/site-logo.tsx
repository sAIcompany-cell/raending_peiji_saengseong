import Link from "next/link";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LandingPageSection } from "@/types";

/**
 * 상단 로고(feat_fe253b445) — 항상 노출되고, 누르면 랜딩페이지 시작 위치로 이동한다.
 * 고정 px 폭 없이 아이콘 + 워드마크로 구성해 어떤 화면 폭에서도 잘리지 않는다.
 */
export function SiteLogo({
  logo,
  className,
}: {
  logo?: LandingPageSection;
  className?: string;
}) {
  const name = logo?.title?.trim() || "가구한눈";

  return (
    <div data-feat-id="feat_fe253b445" className={cn("min-w-0", className)}>
      <Link
        href="/"
        aria-label={`${name} 홈으로 이동`}
        className="inline-flex min-w-0 items-center gap-2 rounded-md py-1 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand text-brand-foreground">
          <Layers aria-hidden="true" className="h-4 w-4" />
        </span>
        <span className="truncate font-display text-base font-semibold tracking-tight">
          {name}
        </span>
      </Link>
    </div>
  );
}
