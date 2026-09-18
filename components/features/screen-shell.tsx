"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PageViewTracker } from "@/components/features/analytics";
import { ScreenNav } from "@/components/features/screen-nav";
import { SiteHeader } from "@/components/features/site-header";
import { usingMockData } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

export const SCREEN_ORDER: { href: string; label: string; sectionType: string }[] = [
  { href: "/hero", label: "가격 비교 시작하기", sectionType: "hero" },
  { href: "/screen", label: "비교가 번거로운 이유", sectionType: "problem" },
  { href: "/screen-2", label: "비교하는 방법", sectionType: "solution" },
  { href: "/screen-3", label: "달라지는 점", sectionType: "benefits" },
  { href: "/cta", label: "기획안 만들기", sectionType: "cta" },
];

export function findSection(
  sections: LandingPageSection[],
  type: string,
): LandingPageSection | undefined {
  return sections.find((section) => section.type === type);
}

/**
 * 화면 공통 골격 — 헤더 + 본문 + 다음 화면으로 넘어가는 이동 수단.
 * 방문 이벤트는 여기서 한 번만 기록한다.
 */
export function ScreenShell({
  pagePath,
  header,
  children,
  showNav = true,
}: {
  pagePath: string;
  header?: ReactNode;
  children: ReactNode;
  showNav?: boolean;
}) {
  const index = SCREEN_ORDER.findIndex((screen) => screen.href === pagePath);
  const prev = index > 0 ? SCREEN_ORDER[index - 1] : undefined;
  const next =
    index >= 0 && index < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[index + 1] : undefined;

  return (
    <div data-cbv-src="components/features/screen-shell.tsx:47" className="flex min-h-screen flex-col bg-background">
      <PageViewTracker pagePath={pagePath} />
      <SiteHeader />
      {header}
      <main data-cbv-src="components/features/screen-shell.tsx:51" className="flex-1">
        <Container className="flex flex-col gap-[var(--density-gap)] py-12 sm:py-16">
          {children}
          {showNav ? <ScreenNav prev={prev} next={next} /> : null}
        </Container>
      </main>
      <footer data-cbv-src="components/features/screen-shell.tsx:57" className="border-t border-border py-8">
        <Container>
          <p data-cbv-src="components/features/screen-shell.tsx:59" className="text-xs text-muted-foreground">
            {usingMockData
              ? "지금 보이는 후기와 비교 항목은 샘플 데이터입니다."
              : "연결된 데이터를 불러와 보여주고 있습니다."}
          </p>
        </Container>
      </footer>
    </div>
  );
}
