import { ArrowLeftRight, CircleCheck, Search } from "lucide-react";
import { ScreenShell, getScreenStep } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionNote, SectionPanel } from "@/components/features/section-panel";

export default function ServicePage() {
  const step = getScreenStep("/screen-2");
  return (
    <ScreenShell route="/screen-2">
      <SectionPanel
        title="가구 선택, 비교부터 더 간단하게"
        subtitle="원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요."
        note={
          <SectionNote>
            여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다.
          </SectionNote>
        }
        points={[
          {
            title: "원하는 가구 찾기",
            body: "필요한 가구와 원하는 조건을 기준으로 살펴보세요.",
            icon: Search,
          },
          {
            title: "가격 비교하기",
            body: "여러 제품의 가격을 한눈에 비교해 보세요.",
            icon: ArrowLeftRight,
          },
          {
            title: "알맞은 제품 고르기",
            body: "조건과 가격을 함께 살펴보고 나에게 맞는 제품을 선택하세요.",
            icon: CircleCheck,
          },
        ]}
      />
      <SectionCta
        label="계속"
        href={step.next?.route ?? "/screen-3"}
        pagePath="/screen-2"
        step={{ current: step.current, total: step.total }}
        className="mt-12"
      />
    </ScreenShell>
  );
}
