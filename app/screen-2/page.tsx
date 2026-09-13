"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ScreenHeader } from "@/components/features/screen-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { SectionPanel } from "@/components/features/section-panel";
import { SeoMetaList } from "@/components/features/seo-meta-list";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import { listSeoMetadata } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

const PATH = "/screen-2";

const SERVICE_ITEMS: LandingPageSection[] = [
  {
    id: "service-a",
    title: "조건 입력",
    content: "찾는 가구와 예산, 필요한 조건을 한 번만 입력합니다.",
    order: 1,
  },
  {
    id: "service-b",
    title: "정보 정리",
    content: "가격과 배송, 설치 조건을 비교하기 좋은 형태로 정리합니다.",
    order: 2,
  },
  {
    id: "service-c",
    title: "비교 결과 확인",
    content: "방문 전에 확인할 내용을 한 화면에서 살펴봅니다.",
    order: 3,
  },
];

export default function ServiceScreenPage() {
  usePageView(PATH);

  const [items, setItems] = useState<LandingPageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listSeoMetadata().then((result) => {
      if (!alive) return;
      if (result.ok) {
        setItems(result.data);
        setError(null);
      } else {
        setItems([]);
        setError(result.error || "메타 태그 정보를 불러오지 못했어요.");
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main data-cbv-src="app/screen-2/page.tsx:63">
      <ScreenHeader
        title="서비스 소개 섹션"
        description="가구한눈이 무엇을 해 주는지 세 단계로 설명합니다."
      />
      <Container>
        <SectionPanel
          title="서비스 소개"
          description="입력부터 비교까지, 필요한 단계만 남겼습니다."
          items={SERVICE_ITEMS}
          status="각 화면에는 기본 SEO 메타 태그가 적용됩니다."
          action={<CtaButton label="계속" href="/screen-3" fromPath={PATH} />}
        />

        {loading || error ? (
          <SectionPanel
            title="화면별 기본 메타 태그"
            description="각 화면에 적용되는 제목과 설명을 확인할 수 있습니다."
            items={[]}
            loading={loading}
            error={error}
          />
        ) : (
          <SeoMetaList items={items} />
        )}

        <ScreenNav
          prev={{ href: "/screen", label: "문제 제시 섹션" }}
          next={{ href: "/screen-3", label: "핵심 장점 섹션" }}
        />
      </Container>
    </main>
  );
}
