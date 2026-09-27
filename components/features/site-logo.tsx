"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sofa } from "lucide-react";
import { mockLogoList, type MockLogo } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export type SiteLogoData = MockLogo;

const DEFAULT_LOGO: SiteLogoData = mockLogoList[0];

/**
 * 상단 로고 (feat_fe253b445) — 항상 노출, 클릭 시 시작 화면으로 이동, 화면 폭에 따라 크기 조정.
 */
export function SiteLogo({
  logo = DEFAULT_LOGO,
  size = "md",
  className,
}: {
  logo?: SiteLogoData;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const text = size === "lg" ? "text-2xl sm:text-3xl" : size === "sm" ? "text-base" : "text-lg sm:text-xl";
  const icon = size === "lg" ? "size-9 sm:size-10" : size === "sm" ? "size-7" : "size-8 sm:size-9";
  return (
    <div data-cbv-src="components/features/site-logo.tsx:28" data-feat-id="feat_fe253b445" className={cn("inline-flex shrink-0", className)}>
      <Link
        href={logo.href || "/"}
        aria-label={`${logo.name} 시작 화면으로 이동`}
        className="inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "inline-flex items-center justify-center rounded-lg bg-brand text-brand-foreground",
            icon,
          )}
        >
          <Sofa className="size-[60%]" aria-hidden="true" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.08, ease: "easeOut" }}
          className={cn("font-heading font-semibold tracking-tight text-foreground", text)}
        >
          {logo.text}
        </motion.span>
      </Link>
    </div>
  );
}
