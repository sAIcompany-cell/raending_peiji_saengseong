import { CheckCircle2, Scale, Search } from "lucide-react";
import { ScreenShell } from "@/components/features/screen-shell";
import { SectionPanel, type SectionPointData } from "@/components/features/section-panel";
import { SectionCta } from "@/components/features/section-cta";
import type { CtaButtonData } from "@/components/features/cta-button";

const ROUTE = "/screen-2" as const;

const NEXT_CTA: CtaButtonData = {
  id: "cta-service",
  label: "계속",
  destination: "/screen-3",
  description: "서비스 소개 이후 핵심 장점으로 이동하는 CTA",
};

const POINTS: SectionPointData[] = [
  {
    id: "find",
    title: "원하는 가구 찾기",
    description: "필요한 가구와 원하는 조건을 기준으로 살펴보세요.",
    icon: <Search className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: "compare",
    title: "가격 비교하기",
    description: "여러 제품의 가격을 한눈에 비교해 보세요.",
    icon: <Scale className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: "choose",
    title: "알맞은 제품 고르기",
    description: "조건과 가격을 함께 살펴보고 나에게 맞는 제품을 선택하세요.",
    icon: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
  },
];

export default function ServicePage() {
  return (
    <ScreenShell route={ROUTE}>
      <div className="flex flex-col gap-12 py-12">
        <SectionPanel
          headline="가구 선택, 비교부터 더 간단하게"
          subtitle="원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요."
          points={POINTS}
          numbered
          note="여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다."
        />
        <SectionCta
          cta={NEXT_CTA}
          pagePath={ROUTE}
          status="비교가 어떤 점에서 편해지는지 이어서 보세요."
        />
      </div>
    </ScreenShell>
  );
}
