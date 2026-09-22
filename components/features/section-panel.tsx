import type { ReactNode } from "react";
import {
  AlertCircle,
  ArrowLeftRight,
  Coins,
  CircleCheck,
  MapPin,
  Route,
  Search,
  SlidersHorizontal,
  Sparkles,
  Tags,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import type { LandingPageSection, SectionPoint as SectionPointModel } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Tags,
  MapPin,
  Search,
  ArrowLeftRight,
  CircleCheck,
  BadgeWon: Coins,
  SlidersHorizontal,
  Route,
  Sparkles,
};

function resolveIcon(name?: string): LucideIcon {
  return (name && iconMap[name]) || Sparkles;
}

export function SectionPoint({ point, index }: { point: SectionPointModel; index: number }) {
  const Icon = resolveIcon(point.icon);
  return (
    <Card className="h-full transition-colors hover:border-brand/40">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div data-cbv-src="components/features/section-panel.tsx:43" className="flex items-center justify-between">
          <span data-cbv-src="components/features/section-panel.tsx:44" className="inline-flex size-10 items-center justify-center rounded-md bg-accent text-brand">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span data-cbv-src="components/features/section-panel.tsx:47" className="font-heading text-sm font-medium text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div data-cbv-src="components/features/section-panel.tsx:51" className="flex flex-col gap-1.5">
          <h3 data-cbv-src="components/features/section-panel.tsx:52" className="font-heading text-lg font-semibold text-foreground">{point.title}</h3>
          <p data-cbv-src="components/features/section-panel.tsx:53" className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {point.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/** 보조 문장(해결 문구 등) — 제목 아래 한 줄 강조. */
export function SectionNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p data-cbv-src="components/features/section-panel.tsx:65" className={className ?? "flex items-start gap-2 text-base text-foreground"}>
      <CircleCheck className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
      <span data-cbv-src="components/features/section-panel.tsx:67">{children}</span>
    </p>
  );
}

interface SectionPanelProps {
  section?: LandingPageSection | null;
  loading?: boolean;
  error?: string | null;
  /** 진행 단계 표시(1부터) */
  step?: number;
  totalSteps?: number;
  /** 행동 영역(주 버튼) */
  children?: ReactNode;
}

/** 문제·소개·장점 화면의 공통 패널 — 제목/부제, 항목 카드, 진행 상태, 행동. */
export function SectionPanel({ section, loading, error, step, totalSteps, children }: SectionPanelProps) {
  if (loading) {
    return (
      <div data-cbv-src="components/features/section-panel.tsx:87" className="flex flex-col gap-10" aria-busy="true" aria-label="불러오는 중">
        <div data-cbv-src="components/features/section-panel.tsx:88" className="flex flex-col gap-4">
          <Skeleton className="h-12 w-3/4 max-w-xl" />
          <Skeleton className="h-6 w-full max-w-lg" />
        </div>
        <div data-cbv-src="components/features/section-panel.tsx:92" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-44 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !section) {
    return (
      <div data-cbv-src="components/features/section-panel.tsx:103" role="alert">
        <EmptyState
          icon={<AlertCircle className="size-8" aria-hidden="true" />}
          title="내용을 불러오지 못했어요"
          description={error ?? "잠시 후 다시 시도해 주세요."}
        />
      </div>
    );
  }

  const progress = step && totalSteps ? Math.round((step / totalSteps) * 100) : null;

  return (
    <section data-cbv-src="components/features/section-panel.tsx:116" aria-labelledby={`${section.id}-title`} className="flex flex-col gap-10 sm:gap-12">
      <FadeIn className="flex flex-col gap-4">
        <h1 data-cbv-src="components/features/section-panel.tsx:118"
          id={`${section.id}-title`}
          className="max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {section.title}
        </h1>
        <p data-cbv-src="components/features/section-panel.tsx:124" className="max-w-2xl text-pretty text-lg text-muted-foreground">{section.subtitle}</p>
        {section.content ? <SectionNote>{section.content}</SectionNote> : null}
      </FadeIn>

      {section.points.length > 0 ? (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {section.points.map((point, index) => (
            <StaggerItem key={point.id}>
              <SectionPoint point={point} index={index} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : null}

      <FadeIn className="flex flex-col gap-6">
        {progress !== null ? (
          <div data-cbv-src="components/features/section-panel.tsx:140" className="flex flex-col gap-2" aria-label={`${step}단계 / 총 ${totalSteps}단계`}>
            <div data-cbv-src="components/features/section-panel.tsx:141" className="flex items-center justify-between text-sm">
              <span data-cbv-src="components/features/section-panel.tsx:142" className="font-medium text-foreground">
                {step} / {totalSteps} 단계
              </span>
              <Badge variant="accent" className="text-brand">
                {progress}%
              </Badge>
            </div>
            <div data-cbv-src="components/features/section-panel.tsx:149"
              className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div data-cbv-src="components/features/section-panel.tsx:156" className="h-full rounded-full bg-brand transition-[width] duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        ) : null}
        {children ? <div data-cbv-src="components/features/section-panel.tsx:160" className="flex flex-wrap items-center gap-3">{children}</div> : null}
      </FadeIn>
    </section>
  );
}
