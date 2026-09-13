"use client";

import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import {
  useAnalyticsEvents,
  useLandingSections,
} from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";

export default function CtaPage() {
  usePageVisit("/cta");
  const sections = useLandingSections();
  const events = useAnalyticsEvents();
  const section = sections.data.find((item) => item.type === "cta");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="최종 CTA 섹션"
            description="한 번의 클릭으로 서비스 시작 화면으로 이동합니다."
          />
          <SectionBlock
            section={section}
            highlights={[
              "복잡한 탐색 대신 조건부터 정리",
              "모바일과 PC 모두에서 동일하게 동작",
              "클릭 후 서비스 시작 화면으로 이동",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="무료로 시작하기"
                href="/"
                pagePath="/cta"
                hint="서비스 시작 화면으로 이동합니다."
              />
            }
          />

          <AnalyticsSummary
            events={events.data}
            loading={events.loading}
            error={events.error}
          />
        </main>
      </Container>
    </div>
  );
}
