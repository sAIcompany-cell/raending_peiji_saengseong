"use client";

import { useCallback, useEffect, useState } from "react";
import { listAnalyticsEvents, recordAnalyticsEvent } from "@/lib/api-client";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsEvent } from "@/types";

/**
 * 방문·CTA 클릭 이벤트 측정 (feat_fb0d21267).
 * 측정 실패가 화면 표시나 CTA 이동을 막지 않도록 모든 함수는 예외를 밖으로 내보내지 않는다.
 */
export type AnalyticsEventName = "page_view" | "cta_click";

export interface AnalyticsPageStat {
  pagePath: string;
  visits: number;
  ctaClicks: number;
}

export interface AnalyticsSummaryData {
  visits: number;
  ctaClicks: number;
  conversionRate: number;
  lastEventAt?: string;
  pages: AnalyticsPageStat[];
}

/** 세션 내 in-memory 이벤트 저장소. 시드는 목업 데이터에서 시작한다. */
let events: AnalyticsEvent[] = [...mockAnalyticsEventList];
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function getEvents(): AnalyticsEvent[] {
  return events;
}

export async function recordEvent(name: AnalyticsEventName, pagePath: string): Promise<void> {
  const draft: AnalyticsEvent = {
    id: `analytics-event-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    pagePath,
    occurredAt: new Date().toISOString(),
  };
  events = [...events, draft];
  notify();
  try {
    const result = await recordAnalyticsEvent(draft);
    if (result.ok && result.source === "api") {
      events = events.map((e) => (e.id === draft.id ? { ...draft, ...result.data } : e));
      notify();
    }
  } catch {
    // 측정 실패는 사용자 흐름을 막지 않는다.
  }
}

export function summarizeEvents(list: AnalyticsEvent[]): AnalyticsSummaryData {
  const byPage = new Map<string, AnalyticsPageStat>();
  let visits = 0;
  let ctaClicks = 0;
  let lastEventAt: string | undefined;
  for (const e of list) {
    const path = e.pagePath ?? "/";
    const stat = byPage.get(path) ?? { pagePath: path, visits: 0, ctaClicks: 0 };
    if (e.name === "page_view") {
      visits += 1;
      stat.visits += 1;
    } else if (e.name === "cta_click") {
      ctaClicks += 1;
      stat.ctaClicks += 1;
    }
    byPage.set(path, stat);
    const at = e.occurredAt ?? e.createdAt;
    if (at && (!lastEventAt || at > lastEventAt)) lastEventAt = at;
  }
  return {
    visits,
    ctaClicks,
    conversionRate: visits > 0 ? Math.round((ctaClicks / visits) * 1000) / 10 : 0,
    lastEventAt,
    pages: [...byPage.values()].sort((a, b) => a.pagePath.localeCompare(b.pagePath)),
  };
}

/** 이벤트 목록을 구독한다. 최초 1회 서버 목록과 병합을 시도한다(실패해도 로컬 값 유지). */
export function useAnalyticsEvents(): { events: AnalyticsEvent[]; loading: boolean; error: string | null } {
  const [snapshot, setSnapshot] = useState<AnalyticsEvent[]>(() => events);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onChange = () => setSnapshot(events);
    listeners.add(onChange);
    let alive = true;
    listAnalyticsEvents()
      .then((result) => {
        if (!alive) return;
        if (result.ok) {
          const known = new Set(events.map((e) => e.id));
          const merged = [...events, ...result.data.filter((e) => !known.has(e.id))];
          if (merged.length !== events.length) {
            events = merged;
            notify();
          }
          setError(null);
        } else {
          setError(result.error);
        }
      })
      .catch(() => alive && setError("측정 데이터를 불러오지 못했어요."))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
      listeners.delete(onChange);
    };
  }, []);

  return { events: snapshot, loading, error };
}

/** 페이지 진입 시 방문 이벤트 1건을 기록한다. */
export function usePageView(pagePath: string): void {
  useEffect(() => {
    void recordEvent("page_view", pagePath);
  }, [pagePath]);
}

/** CTA 클릭 핸들러 — 기록 후 이동은 호출자가 이어 간다. */
export function useTrackCtaClick(pagePath: string): () => void {
  return useCallback(() => {
    void recordEvent("cta_click", pagePath);
  }, [pagePath]);
}

/** 화면 조립 단계에서 페이지 최상위에 놓는 방문 추적기. 화면에는 아무것도 그리지 않는다. */
export function PageViewTracker({ pagePath }: { pagePath: string }) {
  usePageView(pagePath);
  return null;
}
