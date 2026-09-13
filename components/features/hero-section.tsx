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
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <Badge variant="accent">{eyebrow}</Badge>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        {highlights.length > 0 ? (
          <Stagger className="mt-10 grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <StaggerItem key={item.id ?? `highlight-${index}`}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border p-6">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{item.title ?? "항목"}</p>
                    {item.content ? (
                      <p className="mt-1 text-sm text-muted-foreground">{item.content}</p>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        {status ? (
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="font-medium text-brand">상태</span> · {status}
          </p>
        ) : null}

        {action ? <div className="mt-8 flex flex-wrap gap-3">{action}</div> : null}
      </section>
    </FadeIn>
  );
}
