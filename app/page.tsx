"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CtaButton } from "@/components/features/cta-button";
import { HeroSection } from "@/components/features/hero-section";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { ScreenShell, SCREEN_ORDER, findSection } from "@/components/features/screen-shell";
import { listCtas, listResponsiveSettings, listSeoMetadata } from "@/lib/api-client";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { CtaButton as CtaButtonData, ResponsiveSetting, SeoMetadata } from "@/types";

export default function HomePage() {
  const [settings, setSettings] = React.useState<ResponsiveSetting[]>([]);
  const [seoItems, setSeoItems] = React.useState<SeoMetadata[]>([]);
  const [heroCta, setHeroCta] = React.useState<CtaButtonData | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let alive = true;

    async function load() {
      const [settingsResult, seoResult, ctaResult] = await Promise.all([
        listResponsiveSettings(),
        listSeoMetadata(),
        listCtas(),
      ]);
      if (!alive) return;

      if (!settingsResult.ok || !seoResult.ok || !ctaResult.ok) {
        setError("화면에 필요한 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
        setLoading(false);
        return;
      }

      setSettings(settingsResult.data);
      setSeoItems(seoResult.data);
      setHeroCta(ctaResult.data.find((cta) => cta.position === "hero"));
      setError(null);
      setLoading(false);
    }

    void load();
    return () => {
      alive = false;
    };
  }, []);

  const hero = findSection(mockLandingPageSectionList, "hero");
  const journey = SCREEN_ORDER.map((screen) => ({
    ...screen,
    section: findSection(mockLandingPageSectionList, screen.sectionType),
  }));

  return (
    <ScreenShell pagePath="/" showNav={false}>
      <HeroSection
        section={hero}
        actions={
          <CtaButton
            cta={heroCta}
            label="무료로 시작하기"
            pagePath="/"
            fallbackHref="/hero"
            note="매장에 가기 전에 가격부터 비교해 보세요."
          />
        }
      />

      {error ? (
        <div data-cbv-src="app/page.tsx:79"
          role="alert"
          className="flex items-start gap-3 rounded-[var(--radius)] border border-border bg-muted p-6"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <p data-cbv-src="app/page.tsx:84" className="text-sm text-foreground">{error}</p>
        </div>
      ) : null}

      <FadeIn className="flex flex-col gap-6">
        <div data-cbv-src="app/page.tsx:89" className="flex flex-col gap-2">
          <Badge className="w-fit">비교 순서</Badge>
          <h2 data-cbv-src="app/page.tsx:91" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            어떻게 비교하는지 차례대로 보여드릴게요
          </h2>
        </div>
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((screen) => (
            <StaggerItem key={screen.href}>
              <Card className="h-full transition-colors hover:border-brand">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <p data-cbv-src="app/page.tsx:100" className="text-base font-semibold text-foreground">
                    {screen.section?.title ?? screen.label}
                  </p>
                  <p data-cbv-src="app/page.tsx:103" className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {screen.section?.content ?? ""}
                  </p>
                  <Link
                    href={screen.href}
                    className={buttonVariants({ variant: "outline", size: "sm", className: "w-fit" })}
                  >
                    {screen.label}
                    <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      {loading ? (
        <div data-cbv-src="app/page.tsx:121" className="flex flex-col gap-4">
          <Skeleton className="h-7 w-2/3" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ) : (
        <>
          <ResponsiveSupportList settings={settings} />
          <SeoMetaList items={seoItems} />
        </>
      )}
    </ScreenShell>
  );
}
