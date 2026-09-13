"use client";

import { useCallback, useEffect, useRef } from "react";
import { sendData } from "@/lib/api-client";
import type { AnalyticsEvent, AnalyticsEventInput } from "@/types";

/**
 * 방문·CTA 클릭 이벤트 측정 (feat_fb0d21267)
 * - 측정 실패는 절대 화면 표시나 CTA 이동을 막지 않는다(항상 조용히 무시).
 */
export async function recordAnalyticsEvent(
  input: AnalyticsEventInput,
): Promise<void> {
  try {
    await sendData<AnalyticsEvent>("/api/cta/summary", input, () => ({
      name: input.name,
      pagePath: input.pagePath,
      occurredAt: input.occurredAt,
    }));
  } catch {
    // 측정 오류는 사용자 흐름을 방해하지 않는다.
  }
}

export function buildEvent(
  name: AnalyticsEventInput["name"],
  pagePath: string,
): AnalyticsEventInput {
  return { name, pagePath, occurredAt: new Date().toISOString() };
}

/** 화면 진입 시 방문 이벤트 1회 기록. */
export function usePageVisit(pagePath: string): void {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    void recordAnalyticsEvent(buildEvent("page_visit", pagePath));
  }, [pagePath]);
}

/** CTA 클릭 이벤트 기록 함수를 돌려준다. */
export function useCtaTracker(
  pagePath: string,
): () => Promise<void> {
  return useCallback(async () => {
    await recordAnalyticsEvent(buildEvent("cta_click", pagePath));
  }, [pagePath]);
}
