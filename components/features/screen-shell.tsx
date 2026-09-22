import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageViewTracker } from "@/components/features/analytics";
import { SiteHeader } from "@/components/features/site-header";
import { Container } from "@/components/ui/container";
import { usingMockData } from "@/lib/api-client";
import type { LandingPageSection, ScreenRoute, SiteLogo } from "@/types";

/** 랜딩 흐름의 화면 순서 — 이전/다음 이동의 단일 기준. */
export const SCREEN_ORDER: readonly ScreenRoute[] = ["/hero", "/screen", "/screen-2", "/screen-3", "/cta"];

export function findSection(
  sections: LandingPageSection[],
  route: ScreenRoute,
): LandingPageSection | undefined {
  return sections.find((section) => section.route === route);
}

interface ScreenShellProps {
  route: ScreenRoute;
  sections: LandingPageSection[];
  logo: SiteLogo;
  children: ReactNode;
  /** 하단 이전/다음 이동 표시 여부 */
  showFooterNav?: boolean;
}

/** 모든 화면의 공통 껍데기 — 상단 로고·네비, 방문 이벤트 기록, 하단 이전/다음 이동. */
export function ScreenShell({ route, sections, logo, children, showFooterNav = true }: ScreenShellProps) {
  const index = SCREEN_ORDER.indexOf(route);
  const prevRoute = index > 0 ? SCREEN_ORDER[index - 1] : null;
  const nextRoute = index >= 0 && index < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[index + 1] : null;
  const prev = prevRoute ? findSection(sections, prevRoute) : undefined;
  const next = nextRoute ? findSection(sections, nextRoute) : undefined;

  return (
    <div data-cbv-src="components/features/screen-shell.tsx:38" className="flex min-h-screen flex-col bg-background text-foreground">
      <PageViewTracker pagePath={route} />
      <SiteHeader logo={logo} sections={sections} />

      <main data-cbv-src="components/features/screen-shell.tsx:42" className="flex-1">
        <Container className="py-12 sm:py-16 lg:py-20">{children}</Container>
      </main>

      <footer data-cbv-src="components/features/screen-shell.tsx:46" className="border-t border-border">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          {showFooterNav ? (
            <div data-cbv-src="components/features/screen-shell.tsx:49" className="flex flex-wrap items-center gap-2 text-sm">
              {prev && prevRoute ? (
                <Link
                  href={prevRoute}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  이전 화면
                </Link>
              ) : null}
              {next && nextRoute ? (
                <Link
                  href={nextRoute}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-brand transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  다음 화면
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          ) : (
            <span data-cbv-src="components/features/screen-shell.tsx:70" />
          )}
          <p data-cbv-src="components/features/screen-shell.tsx:72" className="text-xs text-muted-foreground">
            © {logo.name}
            {usingMockData ? " · 샘플 데이터로 표시됩니다" : ""}
          </p>
        </Container>
      </footer>
    </div>
  );
}
