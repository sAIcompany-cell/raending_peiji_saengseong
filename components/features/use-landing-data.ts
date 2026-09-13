"use client";

import { useEffect, useState } from "react";
import {
  getCtaSummary,
  listResponsiveSections,
  listTestimonials,
} from "@/lib/api-client";
import type {
  AnalyticsEvent,
  ApiResponse,
  LandingPageSection,
  Testimonial,
} from "@/types";

import type { ApiResult } from "@/lib/api-client";

export interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

function useAsync<T>(
  loader: () => Promise<ApiResult<ApiResponse<T>>>,
  initial: T,
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: initial,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let alive = true;

    void (async () => {
      try {
        const result = await loader();
        if (!alive) return;
        if (result.ok && "data" in result.data) {
          setState({ data: result.data.data, loading: false, error: null });
        } else if (result.ok) {
          setState({
            data: initial,
            loading: false,
            error: "정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.",
          });
        } else {
          setState({ data: initial, loading: false, error: result.error });
        }
      } catch {
        if (!alive) return;
        setState({
          data: initial,
          loading: false,
          error: "정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.",
        });
      }
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

/** 랜딩 섹션 목록 */
export function useLandingSections(): AsyncState<LandingPageSection[]> {
  return useAsync<LandingPageSection[]>(listResponsiveSections, []);
}

/** 사용자 후기 목록 */
export function useTestimonials(): AsyncState<Testimonial[]> {
  return useAsync<Testimonial[]>(listTestimonials, []);
}

/** 방문·CTA 클릭 이벤트 집계 */
export function useAnalyticsEvents(): AsyncState<AnalyticsEvent[]> {
  return useAsync<AnalyticsEvent[]>(getCtaSummary, []);
}
