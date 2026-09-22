import { notFound } from "next/navigation";
import { findSection, SCREEN_ORDER, ScreenShell } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SectionPanel } from "@/components/features/section-panel";
import { TestimonialList } from "@/components/features/testimonial-list";
import { mockLandingPageSectionList, mockLogoList } from "@/lib/mock-data";

const sections = mockLandingPageSectionList;
const logo = mockLogoList[0];

export default function FinalCtaPage() {
  const section = findSection(sections, "/cta");
  if (!section) notFound();

  return (
    <ScreenShell route="/cta" sections={sections} logo={logo}>
      <div className="flex flex-col gap-16 sm:gap-20">
        <TestimonialList />
        <SectionPanel
          section={section}
          step={SCREEN_ORDER.indexOf("/cta") + 1}
          totalSteps={SCREEN_ORDER.length}
        >
          <SectionCta section={section} />
        </SectionPanel>
      </div>
    </ScreenShell>
  );
}
