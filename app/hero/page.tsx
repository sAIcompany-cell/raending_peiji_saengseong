import { notFound } from "next/navigation";
import { HeroSection } from "@/components/features/hero-section";
import { findSection, ScreenShell } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { mockLandingPageSectionList, mockLogoList } from "@/lib/mock-data";

const sections = mockLandingPageSectionList;
const logo = mockLogoList[0];

export default function HeroPage() {
  const section = findSection(sections, "/hero");
  if (!section) notFound();

  return (
    <ScreenShell route="/hero" sections={sections} logo={logo}>
      <HeroSection section={section} eyebrow="가구 가격 비교">
        <SectionCta section={section} />
      </HeroSection>
    </ScreenShell>
  );
}
