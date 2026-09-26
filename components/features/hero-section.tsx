import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";

/** 첫 화면의 큰 제목 + 짧은 한 문장. 한 화면에 한 메시지만 둔다. */
export function HeroSection({
  title,
  subtitle,
  eyebrow,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section data-cbv-src="components/features/hero-section.tsx:18" className="flex flex-col items-start gap-6 py-8 sm:py-16">
      {eyebrow ? (
        <FadeIn>
          <Badge variant="outline" className="border-brand text-brand">
            {eyebrow}
          </Badge>
        </FadeIn>
      ) : null}
      <FadeIn delay={0.05}>
        <h1 data-cbv-src="components/features/hero-section.tsx:27" className="max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight break-keep text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </FadeIn>
      {subtitle ? (
        <FadeIn delay={0.12}>
          <p data-cbv-src="components/features/hero-section.tsx:33" className="max-w-xl text-base leading-relaxed break-keep text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </FadeIn>
      ) : null}
      {children ? (
        <FadeIn delay={0.2} className="w-full">
          {children}
        </FadeIn>
      ) : null}
    </section>
  );
}
