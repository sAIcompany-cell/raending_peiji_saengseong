import { ScreenShell } from "@/components/features/screen-shell";
import { HeroSection } from "@/components/features/hero-section";
import { FaqList } from "@/components/features/faq-list";
import { SectionCta } from "@/components/features/section-cta";
import { mockCtaList } from "@/lib/mock-data";

const ROUTE = "/hero" as const;
const START_CTA = mockCtaList.find((c) => c.id === "cta-start");

export default function HeroPage() {
  return (
    <ScreenShell route={ROUTE}>
      <div className="flex flex-col gap-12 py-12">
        <HeroSection
          headline="가구 가격, 매장 가기 전에 비교하세요"
          subtitle="원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요."
        >
          <SectionCta
            cta={START_CTA}
            pagePath={ROUTE}
            status="원하는 가구부터 골라 가격을 비교해 보세요."
          />
        </HeroSection>

        <FaqList />
      </div>
    </ScreenShell>
  );
}
