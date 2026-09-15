"use client";

import { useCallback, useEffect, useState } from "react";
import type { AnalyticsEvent } from "@/types";
import { mockAnalyticsEventList } from "@/lib/mock-data";

export type AnalyticsEventName = NonNullable<AnalyticsEvent["name"]>;

type Listener = (events: AnalyticsEvent[]) => void;

// 세션 동안만 유지되는 in-memory 이벤트 저장소(시드 데이터로 시작).
let store: AnalyticsEvent[] = mockAnalyticsEventList.map((e) => ({ ...e }));
const listeners = new Set<Listener>();
let seq = 0;

function emit() {
  const snapshot = store.map((e) => ({ ...e }));
  listeners.forEach((fn) => fn(snapshot));
}

/** 이벤트를 기록한다. 실패해도 화면 표시·이동을 막지 않는다. */
export function recordEvent(
  name: AnalyticsEventName,
  pagePath: string,
): AnalyticsEvent | null {
  try {
    seq += 1;
    const event: AnalyticsEvent = {
      id: `event-${Date.now()}-${seq}`,
      name,
      pagePath,
      occurredAt: new Date().toISOString(),
    };
    store = [...store, event];
    emit();
    return event;
  } catch {
    return null;
  }
}

export function getEvents(): AnalyticsEvent[] {
  return store.map((e) => ({ ...e }));
}

/** 저장소를 구독해 최신 이벤트 목록을 돌려준다. */
export function useAnalyticsEvents(): AnalyticsEvent[] {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  useEffect(() => {
    setEvents(getEvents());
    listeners.add(setEvents);
    return () => {
      listeners.delete(setEvents);
    };
  }, []);
  return events;
}

/** 마운트 시 page_view 를 1회 기록한다. */
export function usePageView(pagePath: string) {
  useEffect(() => {
    recordEvent("page_view", pagePath);
  }, [pagePath]);
}

/** CTA 클릭을 기록하는 핸들러를 돌려준다. */
export function useTrackCtaClick(pagePath?: string) {
  return useCallback(() => {
    const path =
      pagePath ??
      (typeof window !== "undefined" ? window.location.pathname : "/");
    recordEvent("cta_click", path);
  }, [pagePath]);
}

/** 화면에 끼워 넣기만 하면 방문 이벤트를 기록하는 보이지 않는 컴포넌트. */
export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
