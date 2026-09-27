import { useEffect, useState } from 'react'

/**
 * 방문·CTA 클릭 이벤트 측정 — 서버가 없으므로 localStorage 에 기록한다.
 * 측정 실패가 화면 표시나 이동을 막지 않도록 모든 함수는 예외를 밖으로 던지지 않는다.
 */

export type AnalyticsEventName = 'page_view' | 'cta_click'

export interface AnalyticsEvent {
  name: AnalyticsEventName
  pagePath: string
  occurredAt: string
  /** CTA 클릭일 때 버튼 문구 */
  label?: string
}

export interface LastCtaClick {
  label: string
  pagePath: string
  occurredAt: string
}

export interface AnalyticsPageStat {
  pagePath: string
  views: number
  ctaClicks: number
}

export interface AnalyticsSummaryData {
  totalViews: number
  totalCtaClicks: number
  pages: AnalyticsPageStat[]
}

const STORAGE_KEY = 'furniture-landing.analytics.v1'
const MAX_EVENTS = 500

let storageFailed = false
let cache: AnalyticsEvent[] | null = null
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((fn) => fn())
}

function isEvent(value: unknown): value is AnalyticsEvent {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    (v.name === 'page_view' || v.name === 'cta_click') &&
    typeof v.pagePath === 'string' &&
    typeof v.occurredAt === 'string'
  )
}

function readStorage(): AnalyticsEvent[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isEvent) : []
  } catch {
    storageFailed = true
    return []
  }
}

function writeStorage(events: AnalyticsEvent[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
    storageFailed = false
  } catch {
    storageFailed = true
  }
}

export function getEvents(): AnalyticsEvent[] {
  if (cache === null) cache = typeof window === 'undefined' ? [] : readStorage()
  return cache
}

export function recordEvent(name: AnalyticsEventName, pagePath: string, label?: string): void {
  try {
    const event: AnalyticsEvent = {
      name,
      pagePath,
      occurredAt: new Date().toISOString(),
      ...(label ? { label } : {}),
    }
    const next = [...getEvents(), event].slice(-MAX_EVENTS)
    cache = next
    writeStorage(next)
    notify()
  } catch {
    // 측정 오류는 조용히 무시한다 — 페이지 표시를 방해하지 않는다.
  }
}

export function recordPageView(pagePath: string): void {
  recordEvent('page_view', pagePath)
}

export function recordCtaClick(pagePath: string, label: string): void {
  recordEvent('cta_click', pagePath, label)
}

export function getLastCtaClick(): LastCtaClick | null {
  const events = getEvents()
  for (let i = events.length - 1; i >= 0; i -= 1) {
    const e = events[i]
    if (e.name === 'cta_click') {
      return { label: e.label ?? 'CTA', pagePath: e.pagePath, occurredAt: e.occurredAt }
    }
  }
  return null
}

export function clearEvents(): void {
  cache = []
  try {
    window.localStorage.removeItem(STORAGE_KEY)
    storageFailed = false
  } catch {
    storageFailed = true
  }
  notify()
}

export function summarizeEvents(events: readonly AnalyticsEvent[]): AnalyticsSummaryData {
  const byPage = new Map<string, AnalyticsPageStat>()
  let totalViews = 0
  let totalCtaClicks = 0
  for (const e of events) {
    const stat = byPage.get(e.pagePath) ?? { pagePath: e.pagePath, views: 0, ctaClicks: 0 }
    if (e.name === 'page_view') {
      stat.views += 1
      totalViews += 1
    } else {
      stat.ctaClicks += 1
      totalCtaClicks += 1
    }
    byPage.set(e.pagePath, stat)
  }
  return {
    totalViews,
    totalCtaClicks,
    pages: [...byPage.values()].sort((a, b) => b.views - a.views),
  }
}

export function isStorageFailed(): boolean {
  return storageFailed
}

/** 이벤트 목록을 구독한다. 기록이 추가되면 다시 렌더된다. */
export function useAnalyticsEvents(): AnalyticsEvent[] {
  const [events, setEvents] = useState<AnalyticsEvent[]>(() => getEvents())

  useEffect(() => {
    const update = () => setEvents(getEvents())
    listeners.add(update)
    update()
    return () => {
      listeners.delete(update)
    }
  }, [])

  return events
}
