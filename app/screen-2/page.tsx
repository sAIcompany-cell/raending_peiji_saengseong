import { notFound } from "next/navigation";
import { findSection, SCREEN_ORDER, ScreenShell } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionPanel } from "@/components/features/section-panel";
import { mockLandingPageSectionList, mockLogoList } from "@/lib/mock-data";

const sections = mockLandingPageSectionList;
const logo = mockLogoList[0];

export default function SolutionPage() {
  const section = findSection(sections, "/screen-2");
  if (!section) notFound();

  return (
    <ScreenShell route="/screen-2" sections={sections} logo={logo}>
      <SectionPanel
        section={section}
        step={SCREEN_ORDER.indexOf("/screen-2") + 1}
        totalSteps={SCREEN_ORDER.length}
      >
        <SectionCta section={section} />
      </SectionPanel>
    </ScreenShell>
  );
}
