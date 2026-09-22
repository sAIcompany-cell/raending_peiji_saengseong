import { ScreenNav } from "@/components/features/screen-nav";
import { SiteLogo } from "@/components/features/site-logo";
import { Container } from "@/components/ui/container";
import type { LandingPageSection, SiteLogo as SiteLogoModel } from "@/types";

interface SiteHeaderProps {
  logo: SiteLogoModel;
  sections: LandingPageSection[];
}

export function SiteHeader({ logo, sections }: SiteHeaderProps) {
  return (
    <header data-cbv-src="components/features/site-header.tsx:13" className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
        <SiteLogo logo={logo} />
        <ScreenNav sections={sections} />
      </Container>
    </header>
  );
}
