"use client";

import * as React from "react";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsEvent, AnalyticsEventName } from "@/types";

export type { AnalyticsEventName };

/**
 * 방문·CTA 클릭 이벤트 측정 — 외부 SDK 없이 메모리에만 쌓는다.
 * 측정이 실패해도 화면 표시나 CTA 이동을 막지 않는다(전부 try/catch).
 */
let eventStore: AnalyticsEvent[] = [...mockAnalyticsEventList];
const listeners = new Set<() => void>();

export function recordEvent(name: AnalyticsEventName, pagePath: string): void {
  try {
    eventStore = [...eventStore, { name, pagePath, occurredAt: new Date() }];
    listeners.forEach((listener) => listener());
  } catch {
    // 측정 실패는 조용히 무시한다 — 페이지 표시와 이동이 우선이다.
  }
}

export function getEvents(): AnalyticsEvent[] {
  return eventStore;
}

export function useAnalyticsEvents(): {
  events: AnalyticsEvent[];
  loading: boolean;
} {
  const [events, setEvents] = React.useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const sync = () => setEvents(getEvents());
    listeners.add(sync);
    sync();
    setLoading(false);
    return () => {
      listeners.delete(sync);
    };
  }, []);

  return { events, loading };
}

export function usePageView(pagePath: string): void {
  React.useEffect(() => {
    recordEvent("page_view", pagePath);
  }, [pagePath]);
}

export function useTrackCtaClick(): (pagePath: string) => void {
  return React.useCallback((pagePath: string) => {
    recordEvent("cta_click", pagePath);
  }, []);
}

export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
