"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/features/cta-button";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCta } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import type { CtaButton as CtaButtonModel, LandingPageSection } from "@/types";

interface SectionCtaProps {
  section: LandingPageSection;
  /** 이벤트에 기록할 현재 라우트(기본: 섹션 라우트) */
  pagePath?: string;
  badge?: string;
  showDestination?: boolean;
  className?: string;
}

/** 섹션에 연결된 CTA 를 불러와 버튼으로 렌더한다. 실패해도 다음 화면으로 갈 길은 남긴다. */
export function SectionCta({ section, pagePath, badge, showDestination = true, className }: SectionCtaProps) {
  const [cta, setCta] = useState<CtaButtonModel | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(section.ctaId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!section.ctaId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    getCta(section.ctaId).then((result) => {
      if (cancelled) return;
      if (result.ok) {
        setCta(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [section.ctaId]);

  if (loading) {
    return (
      <div data-cbv-src="components/features/section-cta.tsx:52" className={cn("flex flex-col gap-3", className)} aria-busy="true" aria-live="polite">
        <Skeleton className="h-12 w-44" />
        {showDestination ? <Skeleton className="h-4 w-64" /> : null}
      </div>
    );
  }

  if (cta) {
    return (
      <CtaButton
        cta={cta}
        pagePath={pagePath ?? section.route}
        badge={badge}
        showDestination={showDestination}
        className={className}
      />
    );
  }

  const fallbackHref = section.nextRoute ?? "/";
  return (
    <div data-cbv-src="components/features/section-cta.tsx:73" className={cn("flex flex-col items-start gap-3", className)}>
      {error ? (
        <p data-cbv-src="components/features/section-cta.tsx:75" role="alert" className="inline-flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          버튼 정보를 불러오지 못했어요. 아래 링크로 계속 이동할 수 있어요.
        </p>
      ) : null}
      <Link href={fallbackHref} className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
        {section.ctaLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
