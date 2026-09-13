"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ScreenHeader } from "@/components/features/screen-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { SectionPanel } from "@/components/features/section-panel";
import { ResponsiveSupportList } from "@/components/features/responsive-support-list";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import { listResponsiveSettings } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

const PATH = "/screen";

const PROBLEMS: LandingPageSection[] = [
  {
    id: "problem-a",
    title: "매장마다 가격이 다릅니다",
    content: "같은 가구인데도 매장마다 조건이 달라 비교가 어렵습니다.",
    order: 1,
  },
  {
    id: "problem-b",
    title: "정보를 다시 찾게 됩니다",
    content: "메모해 둔 내용이 흩어져 방문할 때마다 처음부터 확인합니다.",
    order: 2,
  },
  {
    id: "problem-c",
    title: "방문 부담이 큽니다",
    content: "후보를 좁히지 못한 채 여러 매장을 반복해서 돌게 됩니다.",
    order: 3,
  },
];

export default function ProblemScreenPage() {
  usePageView(PATH);

  const [items, setItems] = useState<LandingPageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listResponsiveSettings().then((result) => {
      if (!alive) return;
      if (result.ok) {
        setItems(result.data);
        setError(null);
      } else {
        setItems([]);
        setError(result.error || "반응형 설정을 불러오지 못했어요.");
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main data-cbv-src="app/screen/page.tsx:63">
      <ScreenHeader
        title="문제 제시 섹션"
        description="가구를 고를 때 반복되는 불편을 짚어 서비스가 필요한 이유를 설명합니다."
      />
      <Container>
        <SectionPanel
          title="문제 상황"
          description="지금 가구 비교가 왜 번거로운지 세 가지로 정리했습니다."
          items={PROBLEMS}
          status="모바일과 PC에서 같은 순서로 노출됩니다."
          action={<CtaButton label="계속" href="/screen-2" fromPath={PATH} />}
        />

        {loading || error ? (
          <SectionPanel
            title="모바일과 PC에서 같은 흐름으로"
            description="화면 폭이 달라져도 콘텐츠와 CTA의 노출 순서를 유지합니다."
            items={[]}
            loading={loading}
            error={error}
          />
        ) : (
          <ResponsiveSupportList items={items} />
        )}

        <ScreenNav
          prev={{ href: "/hero", label: "Hero 섹션" }}
          next={{ href: "/screen-2", label: "서비스 소개 섹션" }}
        />
      </Container>
    </main>
  );
}
