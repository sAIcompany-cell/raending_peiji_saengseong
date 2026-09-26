import { FaqList } from "@/components/features/faq-list";
import { HeroSection } from "@/components/features/hero-section";
import { ScreenShell, getScreenStep } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";

export default function HeroPage() {
  const step = getScreenStep("/hero");
  return (
    <ScreenShell route="/hero">
      <HeroSection
        title="가구 가격, 매장 가기 전에 비교하세요"
        subtitle="원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요."
      />
      <FaqList />
      <SectionCta
        label="무료로 시작하기"
        href={step.next?.route ?? "/screen"}
        pagePath="/hero"
        step={{ current: step.current, total: step.total }}
      />
    </ScreenShell>
  );
}
