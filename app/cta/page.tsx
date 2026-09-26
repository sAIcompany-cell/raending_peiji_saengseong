import { HeroSection } from "@/components/features/hero-section";
import { ScreenShell, getScreenStep } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";

export default function FinalCtaPage() {
  const step = getScreenStep("/cta");
  return (
    <ScreenShell route="/cta">
      <HeroSection
        title="내게 맞는 가구, 합리적인 비교에서 시작하세요"
        subtitle="원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요."
      />
      <SectionCta
        ctaId="cta-plan"
        label="기획안 만들기"
        pagePath="/cta"
        step={{ current: step.current, total: step.total }}
      />
    </ScreenShell>
  );
}
