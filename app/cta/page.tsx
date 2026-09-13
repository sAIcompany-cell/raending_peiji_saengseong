"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ScreenHeader } from "@/components/features/screen-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { SectionPanel } from "@/components/features/section-panel";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import { listCtas } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

const PATH = "/cta";

export default function CtaScreenPage() {
  usePageView(PATH);

  const [items, setItems] = useState<LandingPageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listCtas().then((result) => {
      if (!alive) return;
      if (result.ok) {
        setItems(result.data);
        setError(null);
      } else {
        setItems([]);
        setError(result.error || "CTA 정보를 불러오지 못했어요.");
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main data-cbv-src="app/cta/page.tsx:42">
      <ScreenHeader
        title="최종 CTA 섹션"
        description="지금 바로 가구 비교를 시작할 수 있는 마지막 안내 화면입니다."
      />
      <Container>
        <SectionPanel
          title="주요 콘텐츠"
          description="랜딩페이지에 배치된 CTA와 이동하는 화면입니다."
          items={items}
          loading={loading}
          error={error}
          status="CTA를 누르면 클릭 이벤트가 함께 기록됩니다."
          action={
            <CtaButton
              label="계속"
              href="/hero"
              fromPath={PATH}
              hint="가구 비교 시작 화면으로 이동합니다."
            />
          }
          emptyAction={
            <CtaButton label="처음부터 보기" href="/" fromPath={PATH} size="default" variant="outline" />
          }
        />

        <AnalyticsSummary />

        <ScreenNav prev={{ href: "/screen-3", label: "핵심 장점 섹션" }} />
      </Container>
    </main>
  );
}
