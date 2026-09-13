"use client";

import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { useLandingSections } from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";

export default function ProblemPage() {
  usePageVisit("/screen");
  const sections = useLandingSections();
  const section = sections.data.find((item) => item.type === "problem");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="문제 제시 섹션"
            description="지금 어떤 점이 불편한지 한 가지 문제만 짚습니다."
          />
          <SectionBlock
            section={section}
            highlights={[
              "매장마다 다른 가격을 일일이 확인해야 합니다",
              "상품 정보가 여러 곳에 흩어져 있습니다",
              "비교 기준이 없어 선택이 길어집니다",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="계속"
                href="/screen-2"
                pagePath="/screen"
                hint="다음 화면에서 해결 방법을 소개합니다."
              />
            }
          />
        </main>
      </Container>
    </div>
  );
}
