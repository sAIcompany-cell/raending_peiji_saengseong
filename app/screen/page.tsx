import { notFound } from "next/navigation";
import { findSection, SCREEN_ORDER, ScreenShell } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionPanel } from "@/components/features/section-panel";
import { mockLandingPageSectionList, mockLogoList } from "@/lib/mock-data";

const sections = mockLandingPageSectionList;
const logo = mockLogoList[0];

export default function ProblemPage() {
  const section = findSection(sections, "/screen");
  if (!section) notFound();

  return (
    <ScreenShell route="/screen" sections={sections} logo={logo}>
      <SectionPanel section={section} step={SCREEN_ORDER.indexOf("/screen") + 1} totalSteps={SCREEN_ORDER.length}>
        <SectionCta section={section} />
      </SectionPanel>
    </ScreenShell>
  );
}
