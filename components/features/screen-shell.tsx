import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { LandingPageSection } from "@/types";
import { PageViewTracker } from "@/components/features/analytics";
import { SiteHeader, type SiteNavItem } from "@/components/features/site-header";

export type ScreenRoute = "/hero" | "/screen" | "/screen-2" | "/screen-3" | "/cta";

/** 랜딩 흐름의 화면 순서 — 헤더 네비와 단계 표시가 같은 값을 쓴다. */
export const SCREEN_ORDER: { route: ScreenRoute; sectionType: string; label: string }[] = [
  { route: "/hero", sectionType: "hero", label: "시작" },
  { route: "/screen", sectionType: "problem", label: "불편" },
  { route: "/screen-2", sectionType: "service", label: "해결" },
  { route: "/screen-3", sectionType: "benefit", label: "장점" },
  { route: "/cta", sectionType: "cta", label: "시작하기" },
];

const NAV: SiteNavItem[] = SCREEN_ORDER.map((s) => ({ href: s.route, label: s.label }));

/** 화면 라우트에 대응하는 섹션 문구를 시드에서 찾는다. */
export function findSection(route: ScreenRoute): LandingPageSection | undefined {
  const entry = SCREEN_ORDER.find((s) => s.route === route);
  return mockLandingPageSectionList.find((s) => s.type === entry?.sectionType);
}

/** 현재 화면의 단계(1부터)와 전체 단계 수. */
export function getScreenStep(route: ScreenRoute): { current: number; total: number; next?: ScreenRoute } {
  const index = SCREEN_ORDER.findIndex((s) => s.route === route);
  return {
    current: index + 1,
    total: SCREEN_ORDER.length,
    next: SCREEN_ORDER[index + 1]?.route,
  };
}

/**
 * 화면 공통 셸 — 상단 헤더(로고+네비) · 방문 이벤트 기록 · 본문 Container.
 * 각 화면은 이 안에 자기 블록만 넣는다.
 */
export function ScreenShell({
  route,
  children,
  size = "default",
}: {
  route: ScreenRoute;
  children: ReactNode;
  size?: "narrow" | "default" | "wide";
}) {
  const step = getScreenStep(route);
  return (
    <div data-cbv-src="components/features/screen-shell.tsx:52" className="flex min-h-screen flex-col bg-background text-foreground">
      <PageViewTracker pagePath={route} />
      <SiteHeader nav={NAV} />
      <main data-cbv-src="components/features/screen-shell.tsx:55" className="flex-1">
        <Container size={size} className="flex flex-col pb-16">
          <p data-cbv-src="components/features/screen-shell.tsx:57" className="pt-6 text-xs font-medium tracking-wide text-muted-foreground">
            <span data-cbv-src="components/features/screen-shell.tsx:58" className="text-brand tabular-nums">{step.current}</span>
            <span data-cbv-src="components/features/screen-shell.tsx:59" aria-hidden="true"> / </span>
            <span data-cbv-src="components/features/screen-shell.tsx:60" className="tabular-nums">{step.total}</span>
          </p>
          {children}
        </Container>
      </main>
    </div>
  );
}
