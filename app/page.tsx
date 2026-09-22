import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/features/hero-section";
import { findSection, SCREEN_ORDER, ScreenShell } from "@/components/features/screen-shell";
import { SectionCta } from "@/components/features/section-cta";
import { SiteInsights } from "@/components/features/site-insights";
import { Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { mockLandingPageSectionList, mockLogoList } from "@/lib/mock-data";

const sections = mockLandingPageSectionList;
const logo = mockLogoList[0];

export default function HomePage() {
  const hero = findSection(sections, "/hero") ?? sections[0];
  const flow = SCREEN_ORDER.map((route) => findSection(sections, route)).filter(
    (section): section is NonNullable<typeof section> => Boolean(section),
  );

  return (
    <ScreenShell route="/" sections={sections} logo={logo} showFooterNav={false}>
      <div data-cbv-src="app/page.tsx:22" className="flex flex-col gap-16 sm:gap-20">
        <HeroSection section={hero} eyebrow="가구 가격 비교">
          <SectionCta section={hero} pagePath="/" />
        </HeroSection>

        <section data-cbv-src="app/page.tsx:27" aria-labelledby="flow-title" className="flex flex-col gap-6">
          <div data-cbv-src="app/page.tsx:28" className="flex flex-col gap-2">
            <h2 data-cbv-src="app/page.tsx:29" id="flow-title" className="font-heading text-xl font-semibold text-foreground">
              이 순서로 살펴보세요
            </h2>
            <p data-cbv-src="app/page.tsx:32" className="text-sm text-muted-foreground">
              번거로웠던 이유부터 비교하는 방법, 그리고 시작까지 한 화면에 하나씩 이어집니다.
            </p>
          </div>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flow.map((section, index) => (
              <StaggerItem key={section.id}>
                <Link
                  href={section.route}
                  className="group block h-full rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <Card className="h-full transition-colors group-hover:border-brand">
                    <CardContent className="flex h-full flex-col gap-3 p-6">
                      <span data-cbv-src="app/page.tsx:45" className="font-heading text-sm font-semibold text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 data-cbv-src="app/page.tsx:48" className="text-balance text-base font-semibold text-foreground">
                        {section.title}
                      </h3>
                      <p data-cbv-src="app/page.tsx:51" className="line-clamp-2 text-sm text-muted-foreground">{section.subtitle}</p>
                      <span data-cbv-src="app/page.tsx:52" className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand">
                        {section.ctaLabel}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <SiteInsights />
      </div>
    </ScreenShell>
  );
}
