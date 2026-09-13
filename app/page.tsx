"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { HeroSection } from "@/components/features/hero-section";
import { CtaButton } from "@/components/features/cta-button";
import { usePageView } from "@/components/features/analytics";
import { listCtas } from "@/lib/api-client";
import type { LandingPageSection } from "@/types";

const PATH = "/";

const HIGHLIGHTS: LandingPageSection[] = [
  {
    id: "home-highlight-1",
    title: "한 화면에 한 가지 메시지",
    content: "필요한 내용만 순서대로 보여 주어 서비스를 빠르게 이해할 수 있습니다.",
    order: 1,
  },
  {
    id: "home-highlight-2",
    title: "모바일과 PC 모두 같은 흐름",
    content: "화면 폭이 달라져도 콘텐츠와 CTA가 잘리지 않고 같은 순서로 보입니다.",
    order: 2,
  },
  {
    id: "home-highlight-3",
    title: "클릭까지 이어지는 CTA",
    content: "어느 섹션에서든 바로 다음 단계로 이동할 수 있습니다.",
    order: 3,
  },
];

export default function HomePage() {
  usePageView(PATH);

  const [items, setItems] = useState<LandingPageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    listCtas().then((result) => {
      if (!alive) return;
      if (result.ok) {
        setItems(result.data);
        setError(null);
      } else {
        setItems([]);
        setError(result.error || "섹션 목록을 불러오지 못했어요.");
      }
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main>
      <Container>
        <HeroSection
          eyebrow="가구 비교"
          title="발품 없이 비교하는 가구 선택"
          description="여러 매장을 직접 돌지 않고 원하는 가구의 가격과 조건을 한곳에서 살펴보세요."
          highlights={HIGHLIGHTS}
          status="랜딩 섹션 5개가 순서대로 준비되어 있습니다."
          action={<CtaButton label="무료로 시작하기" href="/cta" fromPath={PATH} hint="가구 비교 시작 화면으로 이동합니다." />}
        />

        <FadeIn>
          <section className="border-t border-border py-12 sm:py-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                랜딩 섹션 둘러보기
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Hero부터 최종 CTA까지, 방문자가 지나는 순서 그대로 확인할 수 있습니다.
              </p>
            </div>

            <div className="mt-8">
              {loading ? (
                <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
                  {[0, 1, 2].map((key) => (
                    <Card key={key}>
                      <CardHeader className="gap-2">
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-4 w-4/5" />
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : error ? (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4 text-sm text-destructive"
                >
                  <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              ) : items.length === 0 ? (
                <EmptyState
                  icon={<Compass aria-hidden="true" className="h-6 w-6" />}
                  title="아직 등록된 섹션이 없어요"
                  description="Hero 섹션부터 직접 확인해 보세요."
                  action={<CtaButton label="Hero 섹션 보기" href="/hero" fromPath={PATH} size="default" variant="outline" />}
                />
              ) : (
                <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <StaggerItem key={item.id ?? `cta-${index}`} className="h-full">
                      <Link
                        href={item.content ?? "/hero"}
                        className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                      >
                        <Card className="h-full transition-colors hover:border-brand">
                          <CardHeader>
                            <CardTitle className="text-lg">{item.title ?? "섹션"}</CardTitle>
                            <CardDescription className="inline-flex items-center gap-1 text-brand">
                              화면 열기
                              <ArrowRight aria-hidden="true" className="h-4 w-4" />
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}
            </div>
          </section>
        </FadeIn>
      </Container>
    </main>
  );
}
