import type { RouteId } from './router'

export const SITE_NAME = '가구비교'
export const SITE_DESCRIPTION =
  '가구 가격, 매장 가기 전에 비교하세요. 원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.'

const ROUTE_TITLES: Record<RouteId | 'not-found', string> = {
  hero: `${SITE_NAME} — 가구 가격, 매장 가기 전에 비교하세요`,
  screen: `가구 비교가 번거로운 이유 | ${SITE_NAME}`,
  'screen-2': `서비스 소개 — 비교부터 더 간단하게 | ${SITE_NAME}`,
  'screen-3': `핵심 장점 — 가구 비교, 더 간단하게 | ${SITE_NAME}`,
  cta: `내게 맞는 가구 찾기 시작하기 | ${SITE_NAME}`,
  start: `비교 시작하기 | ${SITE_NAME}`,
  'not-found': `페이지를 찾을 수 없어요 | ${SITE_NAME}`,
}

function ensureMeta(selector: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

/** 경로별 고유 제목 + 공통 설명 + 대표 URL(canonical) 을 문서에 반영한다. */
export function applySeo(route: RouteId | null) {
  const title = ROUTE_TITLES[route ?? 'not-found']
  document.title = title
  document.documentElement.lang = 'ko'

  ensureMeta('meta[name="description"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'description')
    return m
  }).setAttribute('content', SITE_DESCRIPTION)

  ensureMeta('meta[property="og:title"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:title')
    return m
  }).setAttribute('content', title)

  // 해시 경로는 모두 같은 문서이므로 대표 URL 은 해시를 뺀 주소 하나로 고정한다.
  ensureMeta('link[rel="canonical"]', () => {
    const l = document.createElement('link')
    l.setAttribute('rel', 'canonical')
    return l
  }).setAttribute('href', `${window.location.origin}${window.location.pathname}`)

  ensureMeta('meta[name="robots"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'robots')
    return m
  }).setAttribute('content', route ? 'index, follow' : 'noindex')
}

export interface SeoMetaItem {
  key: string
  label: string
  value: string
}

export function readSeoMeta(): SeoMetaItem[] {
  const q = (s: string, attr = 'content') => document.head.querySelector(s)?.getAttribute(attr) ?? ''
  return [
    { key: 'title', label: '페이지 제목', value: document.title },
    { key: 'description', label: '메타 설명', value: q('meta[name="description"]') },
    { key: 'canonical', label: '대표 URL', value: q('link[rel="canonical"]', 'href') },
    { key: 'lang', label: '페이지 언어', value: document.documentElement.lang },
    { key: 'robots', label: '검색 노출 설정', value: q('meta[name="robots"]') },
  ]
}
