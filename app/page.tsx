"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/features/site-header";
import { PageHeading, SectionBlock } from "@/components/features/landing-section";
import { CtaButton } from "@/components/features/cta-button";
import { ResponsiveSupport } from "@/components/features/responsive-support";
import { SeoMetaPanel } from "@/components/features/seo-meta-panel";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import {
  useAnalyticsEvents,
  useLandingSections,
} from "@/components/features/use-landing-data";
import { usePageVisit } from "@/components/features/use-analytics";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageRoute } from "@/types";

const SCREENS: { href: LandingPageRoute; label: string; hint: string }[] = [
  { href: "/hero", label: "Hero 섹션", hint: "서비스를 한 문장으로 소개합니다." },
  { href: "/screen", label: "문제 제시 섹션", hint: "지금 겪고 있는 불편을 짚습니다." },
  { href: "/screen-2", label: "서비스 소개 섹션", hint: "무엇을 해주는지 설명합니다." },
  { href: "/screen-3", label: "핵심 장점 섹션", hint: "장점과 사용자 후기를 봅니다." },
  { href: "/cta", label: "최종 CTA 섹션", hint: "신청·문의로 이어집니다." },
];

export default function HomePage() {
  usePageVisit("/");
  const sections = useLandingSections();
  const events = useAnalyticsEvents();

  const hero = sections.data.find((section) => section.type === "hero");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Container>
        <main className="flex flex-col gap-10 py-12 sm:py-16">
          <PageHeading
            title="랜딩 페이지 생성"
            description="방문자가 서비스를 빠르게 이해하고 CTA까지 이어지도록 구성한 랜딩페이지입니다."
          />

          <SectionBlock
            section={hero}
            highlights={[
              "핵심 메시지 한 줄로 서비스 이해",
              "모바일과 PC에서 동일한 흐름 유지",
              "한 번의 클릭으로 다음 단계 이동",
            ]}
            statusLabel="공개됨"
            loading={sections.loading}
            error={sections.error}
            action={
              <CtaButton
                label="랜딩페이지 둘러보기"
                href="/hero"
                pagePath="/"
                hint="Hero 섹션부터 순서대로 확인할 수 있어요."
              />
            }
          />

          <section aria-labelledby="screen-list-heading" className="flex flex-col gap-4">
            <h2
              id="screen-list-heading"
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              섹션 바로가기
            </h2>
            <Stagger className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
              {SCREENS.map((screen) => (
                <StaggerItem key={screen.href}>
                  <Link
                    href={screen.href}
                    className="group block rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <Card className="h-full transition-colors group-hover:border-brand">
                      <CardContent className="flex h-full flex-col gap-2 p-6">
                        <span className="flex items-center gap-2 text-base font-medium text-foreground">
                          {screen.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                        <span className="text-sm text-muted-foreground">{screen.hint}</span>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <ResponsiveSupport />

          <SeoMetaPanel section={hero} pagePath="/" loading={sections.loading} />

          <AnalyticsSummary
            events={events.data}
            loading={events.loading}
            error={events.error}
          />
        </main>
      </Container>
    </div>
  );
}
