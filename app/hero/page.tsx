"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ScreenHeader } from "@/components/features/screen-header";
import { ScreenNav } from "@/components/features/screen-nav";
import { HeroSection } from "@/components/features/hero-section";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import { listLogos } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

const PATH = "/hero";

const HIGHLIGHTS: LandingPageSection[] = [
  {
    id: "hero-item-a",
    title: "원하는 가구를 고르고",
    content: "찾는 가구와 예산을 먼저 정리합니다.",
    order: 1,
  },
  {
    id: "hero-item-b",
    title: "가격과 조건을 비교하고",
    content: "매장마다 다른 가격과 배송 조건을 한곳에서 살펴봅니다.",
    order: 2,
  },
  {
    id: "hero-item-c",
    title: "방문 전에 결정하세요",
    content: "확인할 내용을 정리한 뒤에 매장을 찾습니다.",
    order: 3,
  },
];

export default function HeroPage() {
  usePageView(PATH);

  const [logo, setLogo] = useState<LandingPageSection | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    listLogos().then((result) => {
      if (!alive) return;
      if (result.ok) {
        setLogo(result.data[0]);
        setError(null);
      } else {
        setError(result.error || "로고 정보를 불러오지 못했어요.");
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  const status = loading
    ? "화면 정보를 불러오는 중입니다."
    : error
      ? error
      : `상단 로고 "${logo?.title ?? "가구한눈"}"가 모든 화면에 노출됩니다.`;

  return (
    <main>
      <ScreenHeader
        title="Hero 섹션"
        description="방문자가 처음 만나는 화면입니다. 한 문장으로 서비스를 설명하고 바로 시작할 수 있게 합니다."
      />
      <Container>
        <HeroSection
          eyebrow="시작"
          title="새로운 시작을 지금"
          description="가구를 고르기 전에 필요한 비교를 한 화면에서 끝내세요."
          highlights={HIGHLIGHTS}
          status={status}
          action={
            <CtaButton
              label="무료로 시작하기"
              href="/cta"
              fromPath={PATH}
              hint="가구 비교 시작 화면으로 이동합니다."
            />
          }
        />
        <ScreenNav
          prev={{ href: "/", label: "홈으로" }}
          next={{ href: "/screen", label: "문제 제시 섹션" }}
        />
      </Container>
    </main>
  );
}
