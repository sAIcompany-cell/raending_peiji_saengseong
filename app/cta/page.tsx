import { Quote } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { ScreenHeader } from "@/components/features/screen-header";
import { TestimonialList } from "@/components/features/testimonial-list";
import { CtaButton } from "@/components/features/cta-button";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export default function CtaPage() {
  const section = findSection(mockLandingPageSectionList, "section-final-cta");

  return (
    <ScreenShell currentPath="/cta">
      <ScreenHeader
        title={section.title ?? ""}
        description={section.content}
        aside={<Badge variant="accent">마지막 단계</Badge>}
      />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <FadeIn>
            <div className="flex items-center gap-2">
              <Quote aria-hidden="true" className="size-5 text-brand" />
              <h2 className="text-xl font-semibold text-foreground">
                먼저 비교해 본 분들의 이야기
              </h2>
            </div>
          </FadeIn>
          <TestimonialList limit={3} />
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <CtaButton href="/" label="기획안 만들기" pagePath="/cta" />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-12 sm:py-16">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">
              이 페이지가 얼마나 도움이 됐는지 한눈에
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              방문과 버튼 클릭이 이 세션 안에서 바로 기록돼요.
            </p>
          </FadeIn>
          <AnalyticsSummary />
        </Container>
      </section>
    </ScreenShell>
  );
}
