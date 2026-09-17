"use client";

import * as React from "react";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsEvent } from "@/types";

/** 측정하는 이벤트 종류 — 방문(page_view)과 CTA 클릭(cta_click) 둘뿐이다. */
export type AnalyticsEventName = "page_view" | "cta_click";

type Listener = (events: AnalyticsEvent[]) => void;

let store: AnalyticsEvent[] = [...mockAnalyticsEventList];
const listeners = new Set<Listener>();
let seq = store.length;

/** 이벤트 1건 기록(인메모리). 서버·외부 SDK 없이 화면 안에서만 집계한다. */
export function recordEvent(name: AnalyticsEventName, pagePath: string): AnalyticsEvent {
  seq += 1;
  const event: AnalyticsEvent = {
    id: `evt_${seq}`,
    name,
    pagePath,
    occurredAt: new Date().toISOString(),
  };
  store = [...store, event];
  listeners.forEach((listen) => listen(store));
  return event;
}

/** 지금까지 쌓인 이벤트 목록(복사본). */
export function getEvents(): AnalyticsEvent[] {
  return store;
}

/** 이벤트 목록을 구독한다. 기록이 생기면 다시 렌더된다. */
export function useAnalyticsEvents(): AnalyticsEvent[] {
  const [events, setEvents] = React.useState<AnalyticsEvent[]>([]);

  React.useEffect(() => {
    setEvents(store);
    const listen: Listener = (next) => setEvents(next);
    listeners.add(listen);
    return () => {
      listeners.delete(listen);
    };
  }, []);

  return events;
}

/** 화면 진입 1회를 방문으로 기록한다. */
export function usePageView(pagePath: string): void {
  React.useEffect(() => {
    recordEvent("page_view", pagePath);
  }, [pagePath]);
}

/** CTA 클릭을 기록하는 함수를 돌려준다. */
export function useTrackCtaClick(pagePath: string): () => void {
  return React.useCallback(() => {
    recordEvent("cta_click", pagePath);
  }, [pagePath]);
}

/** 화면에 한 번 놓아 두면 방문이 기록되는 보이지 않는 조각. */
export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
