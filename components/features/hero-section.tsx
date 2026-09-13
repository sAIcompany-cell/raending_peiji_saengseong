import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageSection } from "@/types";

/**
 * Hero 블록 — 한 화면에 하나의 메시지. 큰 제목 + 짧은 문장 + 핵심 항목 + CTA.
 */
export function HeroSection({
  eyebrow = "가구 비교",
  title,
  description,
  highlights = [],
  status,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: LandingPageSection[];
  status?: string;
  action?: ReactNode;
}) {
  return (
    <FadeIn>
      <section data-cbv-src="components/features/hero-section.tsx:27" className="py-14 sm:py-20">
        <div data-cbv-src="components/features/hero-section.tsx:28" className="max-w-3xl">
          <Badge variant="accent">{eyebrow}</Badge>
          <h1 data-cbv-src="components/features/hero-section.tsx:30" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p data-cbv-src="components/features/hero-section.tsx:34" className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        {highlights.length > 0 ? (
          <Stagger className="mt-10 grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <StaggerItem key={item.id ?? `highlight-${index}`}>
                <div data-cbv-src="components/features/hero-section.tsx:44" className="flex h-full items-start gap-3 rounded-lg border border-border p-6">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div data-cbv-src="components/features/hero-section.tsx:46" className="min-w-0">
                    <p data-cbv-src="components/features/hero-section.tsx:47" className="font-medium text-foreground">{item.title ?? "항목"}</p>
                    {item.content ? (
                      <p data-cbv-src="components/features/hero-section.tsx:49" className="mt-1 text-sm text-muted-foreground">{item.content}</p>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        {status ? (
          <p data-cbv-src="components/features/hero-section.tsx:59" className="mt-8 text-sm text-muted-foreground">
            <span data-cbv-src="components/features/hero-section.tsx:60" className="font-medium text-brand">상태</span> · {status}
          </p>
        ) : null}

        {action ? <div data-cbv-src="components/features/hero-section.tsx:64" className="mt-8 flex flex-wrap gap-3">{action}</div> : null}
      </section>
    </FadeIn>
  );
}
