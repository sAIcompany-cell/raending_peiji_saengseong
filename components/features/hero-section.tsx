import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/**
 * 첫 화면의 큰 메시지 한 개 — 헤드라인, 짧은 부제, 그리고 다음 행동.
 */
export function HeroSection({
  section,
  title,
  description,
  badgeLabel = "매장 방문 전 가격 비교",
  actions,
  aside,
}: {
  section?: LandingPageSection;
  title?: string;
  description?: string;
  badgeLabel?: string;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  const headline = title ?? section?.title ?? "가구 가격, 매장 가기 전에 비교하세요";
  const subline =
    description ??
    section?.content ??
    "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.";

  return (
    <section data-cbv-src="components/features/hero-section.tsx:31" className="py-12 sm:py-20">
      <FadeIn className="flex flex-col gap-6">
        {badgeLabel ? (
          <Badge variant="accent" className="w-fit">
            {badgeLabel}
          </Badge>
        ) : null}
        <h1 data-cbv-src="components/features/hero-section.tsx:38" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {headline}
        </h1>
        <p data-cbv-src="components/features/hero-section.tsx:41" className="max-w-2xl text-base text-muted-foreground sm:text-lg">{subline}</p>
        {actions ? <div data-cbv-src="components/features/hero-section.tsx:42" className="flex flex-wrap items-center gap-3 pt-2">{actions}</div> : null}
        {aside ? <div data-cbv-src="components/features/hero-section.tsx:43" className="pt-4">{aside}</div> : null}
      </FadeIn>
    </section>
  );
}
