import { Footprints, SearchX } from "lucide-react";
import { ScreenShell } from "@/components/features/screen-shell";
import { SectionPanel, type SectionPointData } from "@/components/features/section-panel";
import { SectionCta } from "@/components/features/section-cta";
import { mockCtaList } from "@/lib/mock-data";

const ROUTE = "/screen" as const;
const NEXT_CTA = mockCtaList.find((c) => c.id === "cta-problem");

const POINTS: SectionPointData[] = [
  {
    id: "price",
    title: "한눈에 보기 어려운 가격",
    description:
      "마음에 드는 가구를 찾아도 제품별 가격을 비교하려면 여러 곳을 따로 확인해야 합니다.",
    icon: <SearchX className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: "visits",
    title: "계속 늘어나는 매장 방문",
    description:
      "내게 맞는 제품인지 알아보려 여러 매장을 오가는 데 많은 시간과 수고가 듭니다.",
    icon: <Footprints className="h-5 w-5" aria-hidden="true" />,
  },
];

export default function ProblemPage() {
  return (
    <ScreenShell route={ROUTE}>
      <div data-cbv-src="app/screen/page.tsx:30" className="flex flex-col gap-12 py-12">
        <SectionPanel
          headline="가구 비교, 왜 이렇게 번거로울까요?"
          subtitle="제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다."
          points={POINTS}
        />
        <SectionCta
          cta={NEXT_CTA}
          pagePath={ROUTE}
          status="이 번거로움을 어떻게 줄일 수 있는지 이어서 보세요."
        />
      </div>
    </ScreenShell>
  );
}
