"use client";

import { useCallback, useEffect, useState } from "react";
import type { AnalyticsEvent } from "@/types";
import { mockAnalyticsEventList } from "@/lib/mock-data";

/**
 * 방문·CTA 클릭 이벤트 측정(feat_fb0d21267)의 in-memory 저장소.
 * 측정 실패가 화면 표시나 CTA 이동을 막지 않도록 모든 기록은 try/catch 로 감싼다.
 */

export type AnalyticsEventName = "page_view" | "cta_click";

let eventLog: AnalyticsEvent[] = [...mockAnalyticsEventList];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch {
      /* 구독자 오류는 무시한다 */
    }
  });
}

export function recordEvent(name: AnalyticsEventName, pagePath: string): void {
  try {
    eventLog = [
      ...eventLog,
      { name, pagePath, occurredAt: new Date().toISOString() },
    ];
    emit();
  } catch {
    /* 측정 실패는 조용히 무시한다 */
  }
}

export function getEvents(): AnalyticsEvent[] {
  return eventLog;
}

export function useAnalyticsEvents(): { events: AnalyticsEvent[]; loading: boolean } {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = () => setEvents(getEvents());
    sync();
    setLoading(false);
    listeners.add(sync);
    return () => {
      listeners.delete(sync);
    };
  }, []);

  return { events, loading };
}

/** 화면 진입 시 방문 이벤트 1건을 기록한다. */
export function usePageView(pagePath: string): void {
  useEffect(() => {
    recordEvent("page_view", pagePath);
  }, [pagePath]);
}

export function useTrackCtaClick(): (pagePath: string) => void {
  return useCallback((pagePath: string) => {
    recordEvent("cta_click", pagePath);
  }, []);
}

/** 화면에 얹어두면 방문 이벤트만 기록하는 무표시 컴포넌트. */
export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
