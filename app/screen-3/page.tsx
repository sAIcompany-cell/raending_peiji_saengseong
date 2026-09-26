import { Scale, Sofa, Store } from "lucide-react";
import { ScreenShell, getScreenStep } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionPanel } from "@/components/features/section-panel";
import { TestimonialList } from "@/components/features/testimonial-list";

export default function BenefitsPage() {
  const step = getScreenStep("/screen-3");
  return (
    <ScreenShell route="/screen-3">
      <SectionPanel
        title="가구 비교, 더 간단하게"
        subtitle="가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요."
        points={[
          {
            title: "가격을 쉽게 비교하세요",
            body: "여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.",
            icon: Scale,
          },
          {
            title: "내게 맞는 제품을 찾으세요",
            body: "원하는 조건과 가격을 함께 비교해 필요한 가구를 골라보세요.",
            icon: Sofa,
          },
          {
            title: "매장 방문을 줄이세요",
            body: "방문 전에 충분히 비교하고 더 편리하게 구매를 결정하세요.",
            icon: Store,
          },
        ]}
      />
      <div data-feat-id="feat_feat-983bc01b" className="py-12">
        <TestimonialList />
      </div>
      <SectionCta
        label="계속"
        href={step.next?.route ?? "/cta"}
        pagePath="/screen-3"
        step={{ current: step.current, total: step.total }}
      />
    </ScreenShell>
  );
}
