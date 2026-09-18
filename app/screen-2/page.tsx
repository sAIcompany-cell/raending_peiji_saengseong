"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { SectionPanel } from "@/components/features/section-panel";
import { mockLandingPageSectionList } from "@/lib/mock-data";

const POINTS = [
  {
    title: "원하는 가구 찾기",
    description: "필요한 가구와 원하는 조건을 기준으로 살펴보세요.",
  },
  {
    title: "가격 비교하기",
    description: "여러 제품의 가격을 한눈에 비교해 보세요.",
  },
  {
    title: "알맞은 제품 고르기",
    description: "조건과 가격을 함께 살펴보고 나에게 맞는 제품을 선택하세요.",
  },
];

export default function SolutionPage() {
  const section = findSection(mockLandingPageSectionList, "solution");

  return (
    <ScreenShell pagePath="/screen-2">
      <SectionPanel
        section={section}
        title="가구 선택, 비교부터 더 간단하게"
        description="원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요."
        points={POINTS}
        numbered
        status="여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다."
        actions={
          <Link href="/screen-3" className={buttonVariants({ size: "lg" })}>
            계속
            <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
          </Link>
        }
      />
    </ScreenShell>
  );
}
