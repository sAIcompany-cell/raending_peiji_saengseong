import { CheckCircle2 } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { listResponsiveSettings } from "@/lib/api-client";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { HeroSection } from "@/components/features/hero-section";
import { CtaButton } from "@/components/features/cta-button";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export default async function HeroPage() {
  const hero = findSection(mockLandingPageSectionList, "section-hero");
  const responsive = await listResponsiveSettings();

  return (
    <ScreenShell currentPath="/hero">
      <section data-cbv-src="app/hero/page.tsx:17" className="py-12 sm:py-20">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <HeroSection
            section={hero}
            eyebrow="가구비교"
            actions={
              <CtaButton href="/screen" label="무료로 시작하기" pagePath="/hero" />
            }
          >
            <div data-cbv-src="app/hero/page.tsx:26" className="flex flex-col gap-[var(--density-gap)]">
              {responsive.ok ? (
                <ResponsiveSupportList items={responsive.data} />
              ) : (
                <p data-cbv-src="app/hero/page.tsx:30" role="alert" className="text-sm text-muted-foreground">
                  화면 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
                </p>
              )}
              <div data-cbv-src="app/hero/page.tsx:34" className="flex items-center gap-2">
                <Badge variant="accent" className="gap-1">
                  <CheckCircle2 aria-hidden="true" className="size-3.5 text-brand" />
                  가입 없이 바로 비교할 수 있어요
                </Badge>
              </div>
            </div>
          </HeroSection>
        </Container>
      </section>
    </ScreenShell>
  );
}
