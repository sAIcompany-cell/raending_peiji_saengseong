import { ScreenShell } from "@/components/features/screen-shell";
import { HeroSection } from "@/components/features/hero-section";
import { SectionCta } from "@/components/features/section-cta";
import { TestimonialList } from "@/components/features/testimonial-list";
import { mockCtaList } from "@/lib/mock-data";

const ROUTE = "/cta" as const;
const PLAN_CTA = mockCtaList.find((c) => c.id === "cta-plan");

export default function CtaPage() {
  return (
    <ScreenShell route={ROUTE}>
      <div data-cbv-src="app/cta/page.tsx:13" className="flex flex-col gap-12 py-12">
        <HeroSection
          headline="내게 맞는 가구, 합리적인 비교에서 시작하세요"
          subtitle="원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요."
          align="center"
        >
          <SectionCta
            cta={PLAN_CTA}
            pagePath={ROUTE}
            status="비교할 가구와 조건을 정리해 기획안으로 만들어 보세요."
            className="items-center"
          />
        </HeroSection>

        <section data-cbv-src="app/cta/page.tsx:27" data-feat-id="feat_feat-983bc01b" className="flex flex-col">
          <TestimonialList limit={3} />
        </section>
      </div>
    </ScreenShell>
  );
}
