import { SCREEN_ORDER, navLabelOf, type RouteId } from './router'

export const SITE_NAME = '가구 가격 비교'
export const SITE_DESCRIPTION =
  '원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요. 매장 가기 전에 가격과 조건을 한눈에 비교합니다.'

export interface SeoMetaItem {
  key: string
  label: string
  value: string
}

function pageTitleOf(route: RouteId): string {
  const screen = SCREEN_ORDER.find((s) => s.id === route)
  if (screen) return screen.title
  if (route === 'start') return '비교 시작하기'
  return '페이지를 찾을 수 없습니다'
}

function setMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setNamedMeta(name: string, content: string) {
  setMeta(
    `meta[name="${name}"]`,
    () => {
      const el = document.createElement('meta')
      el.setAttribute('name', name)
      return el
    },
    content,
  )
}

function setPropertyMeta(property: string, content: string) {
  setMeta(
    `meta[property="${property}"]`,
    () => {
      const el = document.createElement('meta')
      el.setAttribute('property', property)
      return el
    },
    content,
  )
}

/** 대표 URL — 해시 라우팅이므로 해시를 제외한 주소를 항상 같은 값으로 유지한다. */
function canonicalUrl(): string {
  const { origin, pathname } = window.location
  return `${origin}${pathname}`
}

export function applySeo(route: RouteId): void {
  if (typeof document === 'undefined') return
  try {
    const title = `${pageTitleOf(route)} | ${SITE_NAME}`
    document.title = title
    document.documentElement.lang = 'ko'
    setNamedMeta('description', SITE_DESCRIPTION)
    setNamedMeta('robots', route === 'not-found' ? 'noindex, follow' : 'index, follow')
    setPropertyMeta('og:type', 'website')
    setPropertyMeta('og:site_name', SITE_NAME)
    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', SITE_DESCRIPTION)
    setPropertyMeta('og:locale', 'ko_KR')
    setPropertyMeta('og:url', canonicalUrl())

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalUrl())
  } catch {
    // 메타 적용 실패는 화면 표시를 막지 않는다.
  }
}

/** 현재 문서에 적용된 SEO 값을 읽어 목록으로 돌려준다(확인용 표시). */
export function readSeoMeta(): SeoMetaItem[] {
  if (typeof document === 'undefined') return []
  const named = (name: string) =>
    document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content ?? ''
  const prop = (property: string) =>
    document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.content ?? ''
  const canonical =
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? ''

  return [
    { key: 'title', label: '제목(title)', value: document.title },
    { key: 'description', label: '설명(description)', value: named('description') },
    { key: 'canonical', label: '대표 URL(canonical)', value: canonical },
    { key: 'lang', label: '언어(lang)', value: document.documentElement.lang },
    { key: 'robots', label: '검색 노출(robots)', value: named('robots') },
    { key: 'og:title', label: 'og:title', value: prop('og:title') },
  ]
}

export { navLabelOf }
