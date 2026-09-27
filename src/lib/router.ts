import { useSyncExternalStore } from 'react'

export type ScreenId = 'hero' | 'screen' | 'screen-2' | 'screen-3' | 'cta'
export type RouteId = ScreenId | 'start'

export interface ScreenMeta {
  id: ScreenId
  navLabel: string
}

/** 랜딩 흐름 순서 — 헤더 탭과 단계 표시가 이 순서를 따른다. */
export const SCREEN_ORDER: ScreenMeta[] = [
  { id: 'hero', navLabel: '소개' },
  { id: 'screen', navLabel: '문제' },
  { id: 'screen-2', navLabel: '서비스' },
  { id: 'screen-3', navLabel: '장점' },
  { id: 'cta', navLabel: '시작하기' },
]

const ROUTE_IDS: RouteId[] = [...SCREEN_ORDER.map((s) => s.id), 'start']

export function isRouteId(value: string): value is RouteId {
  return (ROUTE_IDS as string[]).includes(value)
}

/** '#/screen-2' → 'screen-2'. 비어 있으면 첫 화면, 모르는 값은 null. */
export function parseHash(hash: string): RouteId | null {
  const id = hash.replace(/^#\/?/, '').split(/[?#]/)[0]
  if (id === '') return 'hero'
  return isRouteId(id) ? id : null
}

export function routePath(id: RouteId) {
  return `/${id}`
}

export function navigate(id: RouteId) {
  window.location.hash = `/${id}`
}

export function getScreenStep(id: ScreenId) {
  const index = SCREEN_ORDER.findIndex((s) => s.id === id)
  return { index, total: SCREEN_ORDER.length, next: SCREEN_ORDER[index + 1]?.id }
}

export function navLabelOf(id: string) {
  if (id === 'start') return '시작 페이지'
  return SCREEN_ORDER.find((s) => s.id === id)?.navLabel ?? id
}

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getSnapshot() {
  return window.location.hash
}

/** 현재 경로. 알 수 없는 경로면 null (404 화면). */
export function useRoute(): RouteId | null {
  const hash = useSyncExternalStore(subscribe, getSnapshot, () => '')
  return parseHash(hash)
}
