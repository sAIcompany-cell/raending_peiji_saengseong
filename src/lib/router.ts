import { useEffect, useState } from 'react'

export type ScreenId = 'hero' | 'screen' | 'screen-2' | 'screen-3' | 'cta'
export type RouteId = ScreenId | 'start' | 'not-found'

export interface ScreenMeta {
  id: ScreenId
  /** 내비게이션에 표시하는 짧은 이름 */
  label: string
  /** 문서 제목(SEO)용 이름 */
  title: string
}

export const SCREEN_ORDER: readonly ScreenMeta[] = [
  { id: 'hero', label: '소개', title: '가구 가격, 매장 가기 전에 비교하세요' },
  { id: 'screen', label: '문제', title: '가구 비교, 왜 이렇게 번거로울까요?' },
  { id: 'screen-2', label: '서비스', title: '가구 선택, 비교부터 더 간단하게' },
  { id: 'screen-3', label: '장점', title: '가구 비교, 더 간단하게' },
  { id: 'cta', label: '시작', title: '내게 맞는 가구, 합리적인 비교에서 시작하세요' },
]

const EXTRA_ROUTES: readonly RouteId[] = ['start', 'not-found']

export function isRouteId(value: string): value is RouteId {
  return SCREEN_ORDER.some((s) => s.id === value) || EXTRA_ROUTES.includes(value as RouteId)
}

/** `#/hero`, `#hero`, `/hero`, `` 등을 RouteId 로 정규화한다. 모르는 값은 not-found. */
export function parseHash(hash: string): RouteId {
  const raw = hash.replace(/^#/, '').replace(/^\/+/, '').split(/[?#]/)[0] ?? ''
  if (raw === '') return 'hero'
  if (raw === 'not-found') return 'not-found'
  return isRouteId(raw) ? raw : 'not-found'
}

export function routePath(id: RouteId): string {
  return `#/${id}`
}

export function navigate(id: RouteId): void {
  if (typeof window === 'undefined') return
  const next = routePath(id)
  if (window.location.hash === next) {
    // 같은 화면이면 상단으로만 이동
    window.scrollTo({ top: 0 })
    return
  }
  window.location.hash = next
}

export interface ScreenStep {
  index: number
  total: number
  prev: ScreenId | null
  next: ScreenId | null
}

export function getScreenStep(id: RouteId): ScreenStep | null {
  const index = SCREEN_ORDER.findIndex((s) => s.id === id)
  if (index < 0) return null
  return {
    index,
    total: SCREEN_ORDER.length,
    prev: index > 0 ? SCREEN_ORDER[index - 1].id : null,
    next: index < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[index + 1].id : null,
  }
}

export function navLabelOf(id: RouteId): string {
  const screen = SCREEN_ORDER.find((s) => s.id === id)
  if (screen) return screen.label
  if (id === 'start') return '시작하기'
  return '찾을 수 없는 페이지'
}

export function useRoute(): RouteId {
  const [route, setRoute] = useState<RouteId>(() =>
    typeof window === 'undefined' ? 'hero' : parseHash(window.location.hash),
  )

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
