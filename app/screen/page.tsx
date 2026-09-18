"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { SectionPanel } from "@/components/features/section-panel";
import { mockLandingPageSectionList } from "@/lib/mock-data";

const POINTS = [
  {
    title: "한눈에 보기 어려운 가격",
    description:
      "마음에 드는 가구를 찾아도 제품별 가격을 비교하려면 여러 곳을 따로 확인해야 합니다.",
  },
  {
    title: "계속 늘어나는 매장 방문",
    description:
      "내게 맞는 제품인지 알아보려 여러 매장을 오가는 데 많은 시간과 수고가 듭니다.",
  },
];

export default function ProblemPage() {
  const section = findSection(mockLandingPageSectionList, "problem");

  return (
    <ScreenShell pagePath="/screen">
      <SectionPanel
        section={section}
        title="가구 비교, 왜 이렇게 번거로울까요?"
        description="제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다."
        points={POINTS}
        status="이 불편을 어떻게 줄이는지 다음 화면에서 이어서 보여드려요."
        actions={
          <Link href="/screen-2" className={buttonVariants({ size: "lg" })}>
            계속
            <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
          </Link>
        }
      />
    </ScreenShell>
  );
}
