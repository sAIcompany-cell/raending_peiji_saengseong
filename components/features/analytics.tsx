"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import type {
  AnalyticsEvent,
  AnalyticsEventInput,
  AnalyticsPageStat,
  AnalyticsSummary,
  CtaButton,
} from "@/types";

/**
 * 방문·CTA 클릭 이벤트의 in-memory 저장소.
 * 측정 실패가 화면 표시나 이동을 막지 않도록 모든 경로를 try/catch 로 감싼다.
 */
const initialEvents: AnalyticsEvent[] = [...mockAnalyticsEventList];
let events: AnalyticsEvent[] = initialEvents;
const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function makeId(): string {
  return `event-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function recordEvent(input: AnalyticsEventInput): AnalyticsEvent | null {
  try {
    const event: AnalyticsEvent = {
      id: makeId(),
      name: input.name,
      pagePath: input.pagePath,
      occurredAt: input.occurredAt ?? new Date().toISOString(),
      ctaId: input.ctaId ?? null,
      label: input.label ?? null,
    };
    events = [...events, event];
    emit();
    return event;
  } catch (error) {
    console.warn("[analytics] 이벤트를 기록하지 못했어요.", error);
    return null;
  }
}

export function getEvents(): AnalyticsEvent[] {
  return events;
}

function getInitialEvents(): AnalyticsEvent[] {
  return initialEvents;
}

export function summarizeEvents(list: AnalyticsEvent[]): AnalyticsSummary {
  const byPage = new Map<string, AnalyticsPageStat>();
  let totalViews = 0;
  let totalCtaClicks = 0;
  let lastEventAt: string | null = null;

  for (const event of list) {
    const stat = byPage.get(event.pagePath) ?? { pagePath: event.pagePath, views: 0, ctaClicks: 0 };
    if (event.name === "page_view") {
      stat.views += 1;
      totalViews += 1;
    } else {
      stat.ctaClicks += 1;
      totalCtaClicks += 1;
    }
    byPage.set(event.pagePath, stat);
    if (lastEventAt === null || event.occurredAt > lastEventAt) lastEventAt = event.occurredAt;
  }

  return {
    totalViews,
    totalCtaClicks,
    conversionRate: totalViews === 0 ? 0 : Number(((totalCtaClicks / totalViews) * 100).toFixed(1)),
    byPage: Array.from(byPage.values()),
    lastEventAt,
  };
}

export function useAnalyticsEvents(): AnalyticsEvent[] {
  return useSyncExternalStore(subscribe, getEvents, getInitialEvents);
}

/** 화면 진입 시 page_view 를 1회 기록한다. */
export function usePageView(pagePath: string): void {
  const recorded = useRef<string | null>(null);
  useEffect(() => {
    if (recorded.current === pagePath) return;
    recorded.current = pagePath;
    recordEvent({ name: "page_view", pagePath });
  }, [pagePath]);
}

/** CTA 클릭 시 cta_click 을 기록하는 핸들러를 돌려준다. */
export function useTrackCtaClick(): (cta: CtaButton, pagePath: string) => AnalyticsEvent | null {
  return useCallback(
    (cta: CtaButton, pagePath: string) =>
      recordEvent({ name: "cta_click", pagePath, ctaId: cta.id, label: cta.label }),
    [],
  );
}

export function PageViewTracker({ pagePath }: { pagePath?: string }) {
  const pathname = usePathname();
  usePageView(pagePath ?? pathname ?? "/");
  return null;
}
