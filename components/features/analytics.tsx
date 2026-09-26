"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { recordAnalyticsEvent } from "@/lib/api-client";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsEvent } from "@/types";

export type AnalyticsEventName = "page_view" | "cta_click";

export interface AnalyticsPageStat {
  path: string;
  views: number;
  clicks: number;
}

export interface AnalyticsSummaryData {
  pageViews: number;
  ctaClicks: number;
  conversionRate: number;
  pages: AnalyticsPageStat[];
}

/* in-memory 이벤트 저장소 — 시드 데이터로 시작한다. */
let events: AnalyticsEvent[] = [...mockAnalyticsEventList];
const listeners = new Set<() => void>();
const seedSnapshot = events;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getEvents(): AnalyticsEvent[] {
  return events;
}

/**
 * 이벤트를 기록한다. 서버 전송이 실패해도 화면 표시·CTA 이동을 막지 않는다.
 */
export function recordEvent(name: AnalyticsEventName, pagePath: string): AnalyticsEvent {
  const now = new Date().toISOString();
  const event: AnalyticsEvent = {
    id: `event-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    pagePath,
    occurredAt: now,
    createdAt: now,
  };
  events = [...events, event];
  emit();

  void recordAnalyticsEvent({ name, pagePath, occurredAt: now })
    .then((result) => {
      if (!result.ok) console.warn("[analytics] 이벤트 전송에 실패했어요:", result.error);
    })
    .catch(() => {
      console.warn("[analytics] 이벤트 전송 중 네트워크 오류가 발생했어요.");
    });

  return event;
}

export function summarizeEvents(list: AnalyticsEvent[]): AnalyticsSummaryData {
  const byPath = new Map<string, AnalyticsPageStat>();
  let pageViews = 0;
  let ctaClicks = 0;

  for (const event of list) {
    const path = event.pagePath ?? "/";
    const stat = byPath.get(path) ?? { path, views: 0, clicks: 0 };
    if (event.name === "page_view") {
      pageViews += 1;
      stat.views += 1;
    } else if (event.name === "cta_click") {
      ctaClicks += 1;
      stat.clicks += 1;
    }
    byPath.set(path, stat);
  }

  return {
    pageViews,
    ctaClicks,
    conversionRate: pageViews > 0 ? Math.round((ctaClicks / pageViews) * 100) : 0,
    pages: Array.from(byPath.values()).sort((a, b) => a.path.localeCompare(b.path)),
  };
}

export function useAnalyticsEvents(): AnalyticsEvent[] {
  return useSyncExternalStore(subscribe, getEvents, () => seedSnapshot);
}

export function usePageView(pagePath: string) {
  const recorded = useRef<string | null>(null);
  useEffect(() => {
    if (recorded.current === pagePath) return;
    recorded.current = pagePath;
    recordEvent("page_view", pagePath);
  }, [pagePath]);
}

export function useTrackCtaClick(pagePath: string) {
  return useCallback(() => recordEvent("cta_click", pagePath), [pagePath]);
}

/** 서버 컴포넌트 화면에서도 방문 이벤트를 남길 수 있게 하는 빈 트래커. */
export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
