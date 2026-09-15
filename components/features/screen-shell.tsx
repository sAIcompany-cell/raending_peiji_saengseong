import type { ReactNode } from "react";
import type { LandingPageSection } from "@/types";
import { listLogos } from "@/lib/api-client";
import { PageViewTracker } from "@/components/features/analytics";
import { SiteHeader } from "@/components/features/site-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { Container } from "@/components/ui/container";

/** 화면 순서 — 유저플로우 Level 0 의 다음 단계 이동을 그대로 잇는다. */
export const SCREEN_ORDER: { href: string; label: string }[] = [
  { href: "/hero", label: "시작" },
  { href: "/screen", label: "불편" },
  { href: "/screen-2", label: "해결" },
  { href: "/screen-3", label: "장점" },
  { href: "/cta", label: "시작하기" },
];

export function findSection(
  items: LandingPageSection[],
  id: string,
): LandingPageSection {
  return items.find((s) => s.id === id) ?? { id };
}

interface ScreenShellProps {
  currentPath: string;
  children: ReactNode;
  /** 이전·다음 이동을 숨길 때 */
  hideNav?: boolean;
}

/** 모든 화면의 공통 뼈대: 상단 로고·네비, 방문 이벤트 기록, 이전·다음 이동. */
export async function ScreenShell({
  currentPath,
  children,
  hideNav = false,
}: ScreenShellProps) {
  const logos = await listLogos();
  const logo = logos.ok ? logos.data[0] : undefined;

  const index = SCREEN_ORDER.findIndex((s) => s.href === currentPath);
  const prev = index > 0 ? SCREEN_ORDER[index - 1] : undefined;
  const next =
    index >= 0 && index < SCREEN_ORDER.length - 1
      ? SCREEN_ORDER[index + 1]
      : undefined;

  return (
    <div data-cbv-src="components/features/screen-shell.tsx:49" className="flex min-h-screen flex-col">
      <PageViewTracker pagePath={currentPath} />
      <SiteHeader logo={logo} currentPath={currentPath} />
      <main data-cbv-src="components/features/screen-shell.tsx:52" className="flex-1">{children}</main>
      {!hideNav && index >= 0 ? (
        <Container>
          <ScreenNav
            prev={prev}
            next={next}
            step={{ current: index + 1, total: SCREEN_ORDER.length }}
          />
        </Container>
      ) : null}
    </div>
  );
}
