import Link from "next/link";
import { Sofa } from "lucide-react";
import { cn } from "@/lib/utils";
import type { mockLogoList } from "@/lib/mock-data";

export type SiteLogoData = (typeof mockLogoList)[number];

/**
 * 상단 로고 — 항상 노출되고, 누르면 첫 화면으로 돌아간다.
 * 텍스트+아이콘 조합이라 어떤 폭에서도 잘리거나 왜곡되지 않는다.
 */
export function SiteLogo({
  logo,
  href = "/",
  tone = "default",
  className,
}: {
  logo?: SiteLogoData;
  href?: string;
  tone?: "default" | "inverted";
  className?: string;
}) {
  const text = logo?.text ?? logo?.name ?? "가구비교";

  return (
    <div data-feat-id="feat_fe253b445" className={cn("shrink-0", className)}>
      <Link
        href={href}
        aria-label={`${text} 처음 화면으로 이동`}
        className="group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md transition-transform duration-300 group-hover:-rotate-6 sm:h-9 sm:w-9",
            tone === "inverted"
              ? "bg-background text-brand"
              : "bg-brand text-brand-foreground",
          )}
          aria-hidden="true"
        >
          <Sofa className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <span
          className={cn(
            "font-heading text-base font-semibold tracking-tight whitespace-nowrap sm:text-lg",
            tone === "inverted" ? "text-background" : "text-foreground",
          )}
        >
          {text}
        </span>
      </Link>
    </div>
  );
}
