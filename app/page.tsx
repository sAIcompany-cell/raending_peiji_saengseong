import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { HeroSection } from "@/components/features/hero-section";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { ScreenShell, SCREEN_ORDER } from "@/components/features/screen-shell";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { Stagger, StaggerItem } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { listResponsiveSettings, listSeoMetadata } from "@/lib/api-client";
import { cn } from "@/lib/utils";

const SCREEN_HEADLINES: Record<string, string> = {
  "/hero": "가구 가격, 매장 가기 전에 비교하세요",
  "/screen": "가구 비교, 왜 이렇게 번거로울까요?",
  "/screen-2": "가구 선택, 비교부터 더 간단하게",
  "/screen-3": "가구 비교, 더 간단하게",
  "/cta": "내게 맞는 가구, 합리적인 비교에서 시작하세요",
};

export default async function HomePage() {
  const [responsive, seo] = await Promise.all([
    listResponsiveSettings().catch(() => null),
    listSeoMetadata().catch(() => null),
  ]);
  const responsiveItems = responsive && responsive.ok ? responsive.data : [];
  const seoItems = seo && seo.ok ? seo.data : [];

  return (
    <ScreenShell route="/">
      <HeroSection
        title="가구 가격, 매장 가기 전에 비교하세요"
        subtitle="원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요."
      >
        <Link
          href="/hero"
          className={cn(
            buttonVariants({ size: "lg" }),
            "gap-2 focus-visible:ring-2 focus-visible:ring-brand",
          )}
        >
          무료로 시작하기
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </HeroSection>

      <nav aria-label="랜딩 흐름" className="py-12">
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCREEN_ORDER.map((item, index) => (
            <StaggerItem key={item.route}>
              <Link
                href={item.route}
                className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-background p-6 transition-colors hover:border-brand hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className="text-sm font-medium text-brand">
                  {String(index + 1).padStart(2, "0")} · {item.label}
                </span>
                <span className="text-base font-semibold break-keep text-foreground">
                  {SCREEN_HEADLINES[item.route]}
                </span>
                <span className="mt-auto flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                  보러 가기
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </nav>

      <div className="flex flex-col gap-16 py-12">
        <ResponsiveSupportList items={responsiveItems} />
        <SeoMetaList items={seoItems} />
        <AnalyticsSummary />
      </div>
    </ScreenShell>
  );
}
