import { Store, Tags } from "lucide-react";
import { ScreenShell, getScreenStep } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionPanel } from "@/components/features/section-panel";

export default function ProblemPage() {
  const step = getScreenStep("/screen");
  return (
    <ScreenShell route="/screen">
      <SectionPanel
        title="가구 비교, 왜 이렇게 번거로울까요?"
        subtitle="제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다."
        points={[
          {
            title: "한눈에 보기 어려운 가격",
            body: "마음에 드는 가구를 찾아도 제품별 가격을 비교하려면 여러 곳을 따로 확인해야 합니다.",
            icon: Tags,
          },
          {
            title: "계속 늘어나는 매장 방문",
            body: "내게 맞는 제품인지 알아보려 여러 매장을 오가는 데 많은 시간과 수고가 듭니다.",
            icon: Store,
          },
        ]}
      />
      <SectionCta
        label="계속"
        href={step.next?.route ?? "/screen-2"}
        pagePath="/screen"
        step={{ current: step.current, total: step.total }}
        className="mt-12"
      />
    </ScreenShell>
  );
}
