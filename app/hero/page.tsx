"use client";

import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { useLandingSections } from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";

export default function HeroPage() {
  usePageVisit("/hero");
  const sections = useLandingSections();
  const section = sections.data.find((item) => item.type === "hero");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="Hero 섹션"
            description="새로운 시작을 지금 — 서비스를 한 문장으로 전달하는 첫 화면입니다."
          />
          <SectionBlock
            section={section}
            highlights={[
              "여러 매장을 돌지 않고 한 화면에서 비교",
              "필요한 조건만 정리하면 후보가 좁혀집니다",
              "모바일과 PC 어디서나 같은 흐름",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="무료로 시작하기"
                href="/cta"
                pagePath="/hero"
                hint="최종 CTA 섹션에서 바로 시작할 수 있어요."
              />
            }
          />
        </main>
      </Container>
    </div>
  );
}
