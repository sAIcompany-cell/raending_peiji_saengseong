"use client";

import { Container } from "@/components/ui/container";
import { ScreenHeader } from "@/components/features/screen-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { SectionPanel } from "@/components/features/section-panel";
import { TestimonialList } from "@/components/features/testimonial-list";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import type { LandingPageSection } from "@/types";

const PATH = "/screen-3";

const BENEFITS: LandingPageSection[] = [
  {
    id: "benefit-a",
    title: "발품을 줄입니다",
    content: "방문 전에 후보를 좁혀 매장을 도는 횟수를 줄입니다.",
    order: 1,
  },
  {
    id: "benefit-b",
    title: "비교 기준이 분명합니다",
    content: "가격과 조건을 같은 기준으로 나란히 확인합니다.",
    order: 2,
  },
  {
    id: "benefit-c",
    title: "결정이 빨라집니다",
    content: "필요한 정보만 남겨 두어 선택에 집중할 수 있습니다.",
    order: 3,
  },
];

export default function BenefitsScreenPage() {
  usePageView(PATH);

  return (
    <main>
      <ScreenHeader
        title="핵심 장점 섹션"
        description="가구한눈을 썼을 때 달라지는 점과 먼저 사용해 본 분들의 이야기입니다."
      />
      <Container>
        <SectionPanel
          title="주요 콘텐츠"
          description="비교를 시작하면 무엇이 좋아지는지 정리했습니다."
          items={BENEFITS}
          status="후기는 아래에서 바로 확인할 수 있습니다."
          action={<CtaButton label="계속" href="/cta" fromPath={PATH} />}
        />

        <TestimonialList />

        <ScreenNav
          prev={{ href: "/screen-2", label: "서비스 소개 섹션" }}
          next={{ href: "/cta", label: "최종 CTA 섹션" }}
        />
      </Container>
    </main>
  );
}
