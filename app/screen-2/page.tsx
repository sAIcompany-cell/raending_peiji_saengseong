"use client";

import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { useLandingSections } from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";

export default function ServicePage() {
  usePageVisit("/screen-2");
  const sections = useLandingSections();
  const section = sections.data.find((item) => item.type === "service");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="서비스 소개 섹션"
            description="무엇을 대신 해주는지 한 화면에서 설명합니다."
          />
          <SectionBlock
            section={section}
            highlights={[
              "찾는 가구와 예산을 알려주면 됩니다",
              "비교에 필요한 정보를 한 흐름으로 정리합니다",
              "정리된 후보로 다음 선택을 이어갑니다",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="계속"
                href="/screen-3"
                pagePath="/screen-2"
                hint="다음 화면에서 핵심 장점과 후기를 확인합니다."
              />
            }
          />
        </main>
      </Container>
    </div>
  );
}
