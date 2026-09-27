import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageViewTracker } from "@/components/features/analytics";
import { SiteHeader } from "@/components/features/site-header";
import { HeroSection } from "@/components/features/hero-section";
import { SectionCta } from "@/components/features/section-cta";
import { TestimonialList } from "@/components/features/testimonial-list";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { SCREEN_ORDER } from "@/components/features/screen-shell";
import { mockCtaList } from "@/lib/mock-data";

const ROUTE = "/";
const NAV = SCREEN_ORDER.map((s) => ({ href: s.route, label: s.label }));
const START_CTA = mockCtaList.find((c) => c.id === "cta-start");

const SCREEN_COPY: Record<string, { title: string; body: string }> = {
  "/hero": {
    title: "가구 가격, 매장 가기 전에 비교하세요",
    body: "원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.",
  },
  "/screen": {
    title: "가구 비교, 왜 이렇게 번거로울까요?",
    body: "제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.",
  },
  "/screen-2": {
    title: "가구 선택, 비교부터 더 간단하게",
    body: "원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.",
  },
  "/screen-3": {
    title: "가구 비교, 더 간단하게",
    body: "가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.",
  },
  "/cta": {
    title: "내게 맞는 가구, 합리적인 비교에서 시작하세요",
    body: "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.",
  },
};

export default function HomePage() {
  return (
    <div data-cbv-src="app/page.tsx:45" className="flex min-h-screen flex-col bg-background text-foreground">
      <PageViewTracker pagePath={ROUTE} />
      <SiteHeader nav={NAV} />
      <main data-cbv-src="app/page.tsx:48" className="flex-1">
        <Container className="flex flex-col gap-16 py-12 pb-20">
          <HeroSection
            eyebrow="매장 방문 전 가구 가격 비교"
            headline="가구 가격, 매장 가기 전에 비교하세요"
            subtitle="원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요."
          >
            <SectionCta
              cta={START_CTA}
              pagePath={ROUTE}
              status="여러 매장을 오가지 않고도 가격과 조건을 한 번에 살펴볼 수 있어요."
            />
          </HeroSection>

          <FadeIn>
            <section data-cbv-src="app/page.tsx:63" aria-labelledby="flow-heading" className="flex flex-col gap-[var(--density-gap)]">
              <h2 data-cbv-src="app/page.tsx:64" id="flow-heading" className="text-xl font-semibold tracking-tight">
                비교는 이 순서로 이어져요
              </h2>
              <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
                {SCREEN_ORDER.map((screen, index) => {
                  const copy = SCREEN_COPY[screen.route];
                  return (
                    <StaggerItem key={screen.route}>
                      <Link
                        href={screen.route}
                        className="group flex h-full flex-col gap-3 rounded-[var(--radius)] border border-border bg-card p-6 transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <span data-cbv-src="app/page.tsx:76" className="text-xs font-medium tracking-wide text-brand tabular-nums">
                          {index + 1} · {screen.label}
                        </span>
                        <span data-cbv-src="app/page.tsx:79" className="text-base font-semibold leading-snug">{copy.title}</span>
                        <span data-cbv-src="app/page.tsx:80" className="text-sm text-muted-foreground">{copy.body}</span>
                        <span data-cbv-src="app/page.tsx:81" className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-brand">
                          보기
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </section>
          </FadeIn>

          <TestimonialList limit={3} />

          <div data-cbv-src="app/page.tsx:98" className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ResponsiveSupportList />
            <SeoMetaList />
          </div>

          <AnalyticsSummary />
        </Container>
      </main>
    </div>
  );
}
