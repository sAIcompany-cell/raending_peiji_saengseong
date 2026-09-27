import { MapPinOff, Scale, Sparkles } from "lucide-react";
import { ScreenShell } from "@/components/features/screen-shell";
import { SectionPanel, type SectionPointData } from "@/components/features/section-panel";
import { SectionCta } from "@/components/features/section-cta";
import { mockCtaList } from "@/lib/mock-data";

const ROUTE = "/screen-3" as const;
const NEXT_CTA = mockCtaList.find((c) => c.id === "cta-benefit");

const POINTS: SectionPointData[] = [
  {
    id: "compare",
    title: "가격을 쉽게 비교하세요",
    description: "여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.",
    icon: <Scale className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: "fit",
    title: "내게 맞는 제품을 찾으세요",
    description: "원하는 조건과 가격을 함께 비교해 필요한 가구를 골라보세요.",
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: "visits",
    title: "매장 방문을 줄이세요",
    description: "방문 전에 충분히 비교하고 더 편리하게 구매를 결정하세요.",
    icon: <MapPinOff className="h-5 w-5" aria-hidden="true" />,
  },
];

export default function BenefitPage() {
  return (
    <ScreenShell route={ROUTE}>
      <div data-cbv-src="app/screen-3/page.tsx:34" className="flex flex-col gap-12 py-12">
        <SectionPanel
          headline="가구 비교, 더 간단하게"
          subtitle="가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요."
          points={POINTS}
        />
        <SectionCta
          cta={NEXT_CTA}
          pagePath={ROUTE}
          status="마지막 단계입니다. 이제 비교를 시작해 보세요."
        />
      </div>
    </ScreenShell>
  );
}
