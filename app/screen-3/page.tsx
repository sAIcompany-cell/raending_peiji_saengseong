"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { SectionPanel } from "@/components/features/section-panel";
import { mockLandingPageSectionList } from "@/lib/mock-data";

const POINTS = [
  {
    title: "가격을 쉽게 비교하세요",
    description: "여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.",
  },
  {
    title: "내게 맞는 제품을 찾으세요",
    description: "원하는 조건과 가격을 함께 비교해 필요한 가구를 골라보세요.",
  },
  {
    title: "매장 방문을 줄이세요",
    description: "방문 전에 충분히 비교하고 더 편리하게 구매를 결정하세요.",
  },
];

export default function BenefitsPage() {
  const section = findSection(mockLandingPageSectionList, "benefits");

  return (
    <ScreenShell pagePath="/screen-3">
      <SectionPanel
        section={section}
        title="가구 비교, 더 간단하게"
        description="가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요."
        points={POINTS}
        status="마지막으로 비교한 내용을 기획안으로 정리할 수 있어요."
        actions={
          <Link href="/cta" className={buttonVariants({ size: "lg" })}>
            계속
            <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
          </Link>
        }
      />
    </ScreenShell>
  );
}
