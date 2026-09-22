import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import type { LandingPageSection } from "@/types";

interface HeroSectionProps {
  section: LandingPageSection;
  /** 제목 위 작은 배지 문구(선택) */
  eyebrow?: string;
  /** 주 버튼 등 행동 영역 */
  children?: ReactNode;
}

/** 첫 화면 — 큰 제목 + 짧은 부제 + 행동 하나. 한 화면에 한 메시지만 둔다. */
export function HeroSection({ section, eyebrow, children }: HeroSectionProps) {
  return (
    <section data-cbv-src="components/features/hero-section.tsx:17" aria-labelledby="hero-title" className="flex flex-col items-start gap-8 sm:gap-10">
      <FadeIn className="flex flex-col items-start gap-5">
        {eyebrow ? (
          <Badge variant="accent" className="text-brand">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 data-cbv-src="components/features/hero-section.tsx:24"
          id="hero-title"
          className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {section.title}
        </h1>
        <p data-cbv-src="components/features/hero-section.tsx:30" className="max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
          {section.subtitle}
        </p>
        {section.content ? (
          <p data-cbv-src="components/features/hero-section.tsx:34" className="max-w-xl text-base text-foreground">{section.content}</p>
        ) : null}
      </FadeIn>
      {children ? <FadeIn delay={0.15}>{children}</FadeIn> : null}
    </section>
  );
}
