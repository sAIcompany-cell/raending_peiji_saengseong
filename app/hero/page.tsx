"use client";

import * as React from "react";
import { CtaButton } from "@/components/features/cta-button";
import { HeroSection } from "@/components/features/hero-section";
import { ScreenShell, SCREEN_ORDER, findSection } from "@/components/features/screen-shell";
import { SectionPanel } from "@/components/features/section-panel";
import { listCtas } from "@/lib/api-client";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { CtaButton as CtaButtonData } from "@/types";

const POINT_TYPES = ["problem", "solution", "benefits"];

export default function HeroPage() {
  const [cta, setCta] = React.useState<CtaButtonData | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let alive = true;
    void listCtas().then((result) => {
      if (!alive) return;
      if (!result.ok) {
        setError("버튼 정보를 불러오지 못했어요. 아래 버튼으로 계속 진행할 수 있어요.");
      } else {
        setCta(result.data.find((item) => item.position === "hero"));
        setError(null);
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  const hero = findSection(mockLandingPageSectionList, "hero");
  const points = POINT_TYPES.map((type) => findSection(mockLandingPageSectionList, type))
    .filter((section): section is NonNullable<typeof section> => Boolean(section))
    .map((section) => ({ title: section.title, description: section.content }));

  return (
    <ScreenShell pagePath="/hero">
      <HeroSection
        section={hero}
        actions={
          <CtaButton
            cta={cta}
            label="무료로 시작하기"
            pagePath="/hero"
            fallbackHref={SCREEN_ORDER[1].href}
          />
        }
      />
      <SectionPanel
        title="먼저 이런 점부터 함께 살펴봐요"
        description="가격을 비교하기 어려운 이유부터, 비교하는 방법과 달라지는 점까지 이어서 보여드려요."
        points={points}
        loading={loading}
        status={
          error ? (
            <span data-cbv-src="app/hero/page.tsx:61" role="alert">{error}</span>
          ) : (
            "버튼을 누르면 비교 흐름을 순서대로 보여드려요."
          )
        }
      />
    </ScreenShell>
  );
}
