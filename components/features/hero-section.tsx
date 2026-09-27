"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * 큰 제목 + 짧은 문장 하나 — 화면당 메시지 1개를 전달하는 상단 블록.
 * headline/subtitle 은 콘텐츠 초안 문구를 그대로 받는다.
 */
export function HeroSection({
  eyebrow,
  headline,
  subtitle,
  align = "left",
  children,
  className,
}: {
  eyebrow?: string;
  headline: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}) {
  const center = align === "center";
  return (
    <section data-cbv-src="components/features/hero-section.tsx:29"
      className={cn(
        "flex flex-col gap-[var(--density-gap)] py-12 sm:py-16",
        center && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <FadeIn>
          <Badge variant="outline" className="border-brand text-brand">
            {eyebrow}
          </Badge>
        </FadeIn>
      ) : null}
      <FadeIn delay={0.05}>
        <h1 data-cbv-src="components/features/hero-section.tsx:44" className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
      </FadeIn>
      {subtitle ? (
        <FadeIn delay={0.12}>
          <p data-cbv-src="components/features/hero-section.tsx:50" className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">{subtitle}</p>
        </FadeIn>
      ) : null}
      {children ? <FadeIn delay={0.18}>{children}</FadeIn> : null}
    </section>
  );
}
