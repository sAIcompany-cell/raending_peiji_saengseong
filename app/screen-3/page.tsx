"use client";

import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { TestimonialList } from "@/components/features/testimonial-list";
import {
  useLandingSections,
  useTestimonials,
} from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";

export default function BenefitsPage() {
  usePageVisit("/screen-3");
  const sections = useLandingSections();
  const testimonials = useTestimonials();
  const section = sections.data.find((item) => item.type === "benefits");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="핵심 장점 섹션"
            description="왜 이 방식이 더 나은지 세 가지로 정리했습니다."
          />
          <SectionBlock
            section={section}
            highlights={[
              "시작은 간단하게, 비교는 빠르게",
              "후보를 좁혀 방문할 매장을 줄입니다",
              "구매 결정에 바로 쓸 수 있는 정보",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="계속"
                href="/cta"
                pagePath="/screen-3"
                hint="마지막 화면에서 바로 시작할 수 있어요."
              />
            }
          />

          <TestimonialList
            items={testimonials.data}
            loading={testimonials.loading}
            error={testimonials.error}
            emptyAction={
              <CtaButton
                label="먼저 시작해 보기"
                href="/cta"
                pagePath="/screen-3"
                variant="outline"
                size="default"
              />
            }
          />
        </main>
      </Container>
    </div>
  );
}
