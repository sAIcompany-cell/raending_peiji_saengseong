import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { mockLogoList } from "@/lib/mock-data";
import type { LandingPageSection } from "@/types";
import { PageViewTracker } from "./analytics";
import { SiteHeader } from "./site-header";

export type ScreenRoute = "/hero" | "/screen" | "/screen-2" | "/screen-3" | "/cta";

/** 랜딩 흐름 순서 — 헤더 내비·다음 단계 이동·진행 표시가 모두 이 순서를 따른다. */
export const SCREEN_ORDER: { route: ScreenRoute; label: string; type: string }[] = [
  { route: "/hero", label: "시작", type: "hero" },
  { route: "/screen", label: "고민", type: "problem" },
  { route: "/screen-2", label: "서비스", type: "service" },
  { route: "/screen-3", label: "장점", type: "benefits" },
  { route: "/cta", label: "지금 비교", type: "cta" },
];

export function findSection(
  sections: LandingPageSection[],
  type: string,
): LandingPageSection | undefined {
  return sections.find((section) => section.type === type);
}

export function getScreenStep(route: ScreenRoute) {
  const index = SCREEN_ORDER.findIndex((item) => item.route === route);
  const next = index >= 0 ? SCREEN_ORDER[index + 1] : undefined;
  return { current: index + 1, total: SCREEN_ORDER.length, next };
}

export function ScreenShell({
  route,
  children,
  containerSize = "default",
}: {
  route: string;
  children: ReactNode;
  containerSize?: "narrow" | "default" | "wide";
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <PageViewTracker pagePath={route} />
      <SiteHeader
        logo={mockLogoList[0]}
        items={SCREEN_ORDER.map((item) => ({ href: item.route, label: item.label }))}
      />
      <main className="flex-1 py-12 sm:py-20">
        <Container size={containerSize}>{children}</Container>
      </main>
    </div>
  );
}
