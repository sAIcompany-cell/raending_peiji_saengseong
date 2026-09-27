import { useSyncExternalStore } from 'react'

/** AnalyticsEvent 엔티티 (name · pagePath · occurredAt) — 브라우저 localStorage 로 모의한다. */
export type AnalyticsEventName = 'page_view' | 'cta_click'

export interface AnalyticsEvent {
  id: string
  name: AnalyticsEventName
  pagePath: string
  occurredAt: string
  label?: string
}

export interface AnalyticsPageStat {
  pagePath: string
  visits: number
  ctaClicks: number
}

export interface AnalyticsSummaryData {
  visits: number
  ctaClicks: number
  clickRate: number | null
  pages: AnalyticsPageStat[]
}

export interface LastCtaClick {
  label: string
  from: string
  occurredAt: string
}

const EVENTS_KEY = 'gagu-compare.analytics.v1'
const LAST_CTA_KEY = 'gagu-compare.last-cta.v1'
const UPDATE_EVENT = 'gagu-compare:analytics'
const MAX_EVENTS = 500

let cachedRaw: string | null | undefined
let cachedEvents: AnalyticsEvent[] = []
let storageFailed = false

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(EVENTS_KEY)
  } catch {
    storageFailed = true
    return null
  }
}

export function getEvents(): AnalyticsEvent[] {
  const raw = readRaw()
  if (raw === cachedRaw) return cachedEvents
  cachedRaw = raw
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : []
    cachedEvents = Array.isArray(parsed) ? (parsed as AnalyticsEvent[]) : []
  } catch {
    cachedEvents = []
  }
  return cachedEvents
}

function newId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

/**
 * 이벤트를 기록한다. 실패해도 예외를 던지지 않는다 —
 * 측정 오류가 화면 표시나 CTA 이동을 막으면 안 된다.
 */
export function recordEvent(name: AnalyticsEventName, pagePath: string, label?: string): boolean {
  try {
    const events = [...getEvents(), { id: newId(), name, pagePath, occurredAt: new Date().toISOString(), label }]
    window.localStorage.setItem(EVENTS_KEY, JSON.stringify(events.slice(-MAX_EVENTS)))
    storageFailed = false
    window.dispatchEvent(new Event(UPDATE_EVENT))
    return true
  } catch {
    storageFailed = true
    window.dispatchEvent(new Event(UPDATE_EVENT))
    return false
  }
}

let lastPageView = { path: '', at: 0 }

/** 방문 이벤트. 개발 모드의 이중 effect 로 같은 방문이 두 번 쌓이지 않게 짧게 묶는다. */
export function recordPageView(pagePath: string) {
  const now = Date.now()
  if (lastPageView.path === pagePath && now - lastPageView.at < 1000) return
  lastPageView = { path: pagePath, at: now }
  recordEvent('page_view', pagePath)
}

export function recordCtaClick(pagePath: string, label: string) {
  const ok = recordEvent('cta_click', pagePath, label)
  try {
    const last: LastCtaClick = { label, from: pagePath, occurredAt: new Date().toISOString() }
    window.sessionStorage.setItem(LAST_CTA_KEY, JSON.stringify(last))
  } catch {
    // 저장 실패는 이동을 막지 않는다
  }
  return ok
}

export function getLastCtaClick(): LastCtaClick | null {
  try {
    const raw = window.sessionStorage.getItem(LAST_CTA_KEY)
    return raw ? (JSON.parse(raw) as LastCtaClick) : null
  } catch {
    return null
  }
}

export function clearEvents(): boolean {
  try {
    window.localStorage.removeItem(EVENTS_KEY)
    window.dispatchEvent(new Event(UPDATE_EVENT))
    return true
  } catch {
    return false
  }
}

export function summarizeEvents(events: AnalyticsEvent[]): AnalyticsSummaryData {
  const map = new Map<string, AnalyticsPageStat>()
  let visits = 0
  let ctaClicks = 0
  for (const e of events) {
    const stat = map.get(e.pagePath) ?? { pagePath: e.pagePath, visits: 0, ctaClicks: 0 }
    if (e.name === 'page_view') {
      stat.visits += 1
      visits += 1
    } else if (e.name === 'cta_click') {
      stat.ctaClicks += 1
      ctaClicks += 1
    }
    map.set(e.pagePath, stat)
  }
  return {
    visits,
    ctaClicks,
    clickRate: visits > 0 ? ctaClicks / visits : null,
    pages: [...map.values()].sort((a, b) => b.visits + b.ctaClicks - (a.visits + a.ctaClicks)),
  }
}

export function isStorageFailed() {
  return storageFailed
}

function subscribe(callback: () => void) {
  window.addEventListener(UPDATE_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(UPDATE_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

export function useAnalyticsEvents() {
  return useSyncExternalStore(subscribe, getEvents, getEvents)
}
