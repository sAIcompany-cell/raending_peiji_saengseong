import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { listResponsiveSettings, listSeoMetadata } from "@/lib/api-client";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { HeroSection } from "@/components/features/hero-section";
import { CtaButton } from "@/components/features/cta-button";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { TestimonialList } from "@/components/features/testimonial-list";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  const hero = findSection(mockLandingPageSectionList, "section-hero");
  const [responsive, seo] = await Promise.all([
    listResponsiveSettings(),
    listSeoMetadata(),
  ]);

  return (
    <ScreenShell currentPath="/" hideNav>
      <section data-cbv-src="app/page.tsx:25" className="py-12 sm:py-20">
        <Container>
          <HeroSection
            section={hero}
            eyebrow="가구비교"
            actions={
              <div data-cbv-src="app/page.tsx:31" className="flex flex-wrap items-center gap-3">
                <CtaButton href="/hero" label="무료로 시작하기" pagePath="/" />
                <Link
                  href="/screen"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  어떤 불편을 해결하나요
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            }
          />
        </Container>
      </section>

      <section data-cbv-src="app/page.tsx:46" className="border-t border-border bg-muted/40 py-12 sm:py-16">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <FadeIn>
            <h2 data-cbv-src="app/page.tsx:49" className="text-xl font-semibold text-foreground">
              어떤 화면에서 열어도 같은 비교 경험
            </h2>
            <p data-cbv-src="app/page.tsx:52" className="mt-2 text-sm text-muted-foreground">
              모바일에서도, PC 에서도 가구 가격을 편하게 비교하세요.
            </p>
          </FadeIn>
          {responsive.ok ? (
            <ResponsiveSupportList items={responsive.data} />
          ) : (
            <p data-cbv-src="app/page.tsx:59" role="alert" className="text-sm text-muted-foreground">
              화면 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
            </p>
          )}
        </Container>
      </section>

      <section data-cbv-src="app/page.tsx:66" className="py-12 sm:py-16">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <FadeIn>
            <h2 data-cbv-src="app/page.tsx:69" className="text-xl font-semibold text-foreground">
              검색에서도 바로 찾을 수 있어요
            </h2>
          </FadeIn>
          {seo.ok ? (
            <SeoMetaList items={seo.data} currentPath="/" />
          ) : (
            <p data-cbv-src="app/page.tsx:76" role="alert" className="text-sm text-muted-foreground">
              검색 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
            </p>
          )}
        </Container>
      </section>

      <section data-cbv-src="app/page.tsx:83" className="border-t border-border py-12 sm:py-16">
        <Container className="flex flex-col gap-[var(--density-gap)]">
          <FadeIn>
            <div data-cbv-src="app/page.tsx:86" className="flex items-center gap-2">
              <Quote aria-hidden="true" className="size-5 text-brand" />
              <h2 data-cbv-src="app/page.tsx:88" className="text-xl font-semibold text-foreground">
                먼저 비교해 본 분들의 이야기
              </h2>
            </div>
          </FadeIn>
          <TestimonialList limit={3} />
          <div data-cbv-src="app/page.tsx:94" className="flex flex-wrap items-center gap-3 pt-2">
            <CtaButton href="/cta" label="무료로 시작하기" pagePath="/" size="default" />
            <Link
              href="/hero"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              처음부터 살펴보기
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </ScreenShell>
  );
}
