import Link from "next/link";
import { Sofa } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteLogo as SiteLogoData } from "@/types";

const fallbackLogo: SiteLogoData = {
  id: "logo_1",
  name: "가구비교",
  url: "/",
};

const sizeStyles = {
  sm: { box: "size-7", icon: "size-4", text: "text-sm" },
  default: { box: "size-8 sm:size-9", icon: "size-4 sm:size-5", text: "text-base sm:text-lg" },
  lg: { box: "size-10 sm:size-12", icon: "size-5 sm:size-6", text: "text-lg sm:text-2xl" },
} as const;

/**
 * 상단 로고 — 어떤 화면 폭에서도 잘리지 않고, 누르면 첫 화면으로 돌아간다.
 * 외부 이미지 대신 아이콘 + 제품명으로 구성해 깨진 이미지가 생기지 않는다.
 */
export function SiteLogo({
  logo = fallbackLogo,
  size = "default",
  className,
}: {
  logo?: SiteLogoData;
  size?: keyof typeof sizeStyles;
  className?: string;
}) {
  const style = sizeStyles[size];
  const href = logo.url.startsWith("/") && !logo.url.includes(".") ? logo.url : "/";

  return (
    <span data-cbv-src="components/features/site-logo.tsx:35" data-feat-id="feat_fe253b445" className="inline-flex shrink-0">
      <Link
        href={href}
        aria-label={`${logo.name} 첫 화면으로 이동`}
        className={cn(
          "group inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
          className,
        )}
      >
        <span data-cbv-src="components/features/site-logo.tsx:44"
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-brand text-brand-foreground transition-transform group-hover:-translate-y-0.5",
            style.box,
          )}
        >
          <Sofa className={style.icon} aria-hidden="true" />
        </span>
        <span data-cbv-src="components/features/site-logo.tsx:52" className={cn("font-semibold tracking-tight text-foreground", style.text)}>
          {logo.name}
        </span>
      </Link>
    </span>
  );
}
