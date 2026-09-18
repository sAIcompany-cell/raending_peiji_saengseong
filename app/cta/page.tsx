"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { AnalyticsSummary } from "@/components/features/analytics-summary";
import { CtaButton } from "@/components/features/cta-button";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { TestimonialList } from "@/components/features/testimonial-list";
import { listCtas } from "@/lib/api-client";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { CtaButton as CtaButtonData } from "@/types";

export default function CtaPage() {
  const [cta, setCta] = React.useState<CtaButtonData | undefined>(undefined);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let alive = true;
    void listCtas().then((result) => {
      if (!alive) return;
      if (!result.ok) {
        setError("버튼 정보를 불러오지 못했어요. 아래 버튼으로 계속 진행할 수 있어요.");
        return;
      }
      setCta(result.data.find((item) => item.position === "cta"));
      setError(null);
    });
    return () => {
      alive = false;
    };
  }, []);

  const section = findSection(mockLandingPageSectionList, "cta");

  return (
    <ScreenShell pagePath="/cta">
      <FadeIn className="flex flex-col gap-4">
        <h2 data-cbv-src="app/cta/page.tsx:39" className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
          {section?.title ?? "내게 맞는 가구, 합리적인 비교에서 시작하세요"}
        </h2>
        <p data-cbv-src="app/cta/page.tsx:42" className="max-w-2xl text-base text-muted-foreground">
          {section?.content ?? "원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요."}
        </p>
        {error ? (
          <div data-cbv-src="app/cta/page.tsx:46"
            role="alert"
            className="flex items-start gap-3 rounded-[var(--radius)] border border-border bg-muted p-6"
          >
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <p data-cbv-src="app/cta/page.tsx:51" className="text-sm text-foreground">{error}</p>
          </div>
        ) : null}
        <CtaButton
          cta={cta}
          label="기획안 만들기"
          pagePath="/cta"
          fallbackHref="/hero"
          note="비교한 내용을 정리해 다음 단계로 이어갈 수 있어요."
        />
      </FadeIn>

      <TestimonialList />
      <AnalyticsSummary />
    </ScreenShell>
  );
}
