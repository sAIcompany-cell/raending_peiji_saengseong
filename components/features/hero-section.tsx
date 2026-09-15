import type { ReactNode } from "react";
import type { LandingPageSection } from "@/types";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  /** title = 헤드라인, content = 부제 */
  section: LandingPageSection;
  /** 헤드라인 위 짧은 배지 문구 */
  eyebrow?: string;
  /** CTA 등 행동 요소 */
  actions?: ReactNode;
  /** 헤드라인 아래에 올 부가 블록(목록 등) */
  children?: ReactNode;
}

/** 큰 제목 + 짧은 문장 + 하나의 행동. 화면의 시각적 초점. */
export function HeroSection({
  section,
  eyebrow,
  actions,
  children,
}: HeroSectionProps) {
  return (
    <section data-cbv-src="components/features/hero-section.tsx:25" className="py-12 sm:py-20">
      <FadeIn className="flex flex-col items-start gap-6">
        {eyebrow ? (
          <Badge variant="accent" className="text-brand">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 data-cbv-src="components/features/hero-section.tsx:32" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {section.title}
        </h1>
        {section.content ? (
          <p data-cbv-src="components/features/hero-section.tsx:36" className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            {section.content}
          </p>
        ) : null}
        {children}
        {actions ? (
          <div data-cbv-src="components/features/hero-section.tsx:42" className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>
        ) : null}
      </FadeIn>
    </section>
  );
}
