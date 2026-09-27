import { BarChart3, Globe, Monitor, Smartphone, Trash2, TriangleAlert, Wand2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clearEvents, isStorageFailed, summarizeEvents, useAnalyticsEvents } from '../lib/analytics'
import { navLabelOf, parseHash, type RouteId } from '../lib/router'
import { readSeoMeta, type SeoMetaItem } from '../lib/seo'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { EmptyState } from './ui/EmptyState'
import styles from './SiteInfo.module.css'

/* ------------------------------------------------------------------ */
/* 방문 및 CTA 클릭 이벤트 측정 요약                                     */
/* ------------------------------------------------------------------ */

export function AnalyticsSummary() {
  const events = useAnalyticsEvents()
  const summary = summarizeEvents(events)
  const storageFailed = isStorageFailed()

  return (
    <section className={styles.section} aria-labelledby="analytics-heading" data-feat-id="feat_fb0d21267">
      <div>
        <h2 id="analytics-heading" className={styles.heading}>
          <BarChart3 size={22} className={styles.headingIcon} aria-hidden="true" />
          방문·CTA 클릭 측정
        </h2>
        <p className={styles.lead}>
          방문 이벤트와 CTA 클릭 이벤트를 구분해 같은 기준으로 집계합니다. 이 브라우저에 기록된 값입니다.
        </p>
      </div>

      {storageFailed && (
        <p className={styles.alert} role="alert">
          <TriangleAlert size={16} aria-hidden="true" />
          브라우저 저장 공간을 사용할 수 없어 이벤트가 이 세션에만 유지됩니다. 화면 표시와 이동에는 영향이 없습니다.
        </p>
      )}

      {events.length === 0 ? (
        <EmptyState
          icon={<BarChart3 size={22} />}
          title="아직 기록된 이벤트가 없습니다"
          description="섹션을 이동하거나 CTA 버튼을 누르면 여기에 집계됩니다."
        />
      ) : (
        <>
          <div className={styles.stats}>
            <Card soft className={styles.stat}>
              <span className={styles.statLabel}>방문(page_view)</span>
              <span className={styles.statValue}>{summary.totalViews}</span>
            </Card>
            <Card soft className={styles.stat}>
              <span className={styles.statLabel}>CTA 클릭(cta_click)</span>
              <span className={styles.statValue}>{summary.totalCtaClicks}</span>
            </Card>
          </div>

          <Card flush>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <caption className="sr-only">화면별 방문·CTA 클릭 집계</caption>
                <thead>
                  <tr>
                    <th scope="col">화면</th>
                    <th scope="col" className={styles.num}>
                      방문
                    </th>
                    <th scope="col" className={styles.num}>
                      CTA 클릭
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {summary.pages.map((p) => (
                    <tr key={p.pagePath}>
                      <td>
                        {navLabelOf(parseHash(p.pagePath))}
                        <span className={styles.path}>{p.pagePath}</span>
                      </td>
                      <td className={styles.num}>{p.views}</td>
                      <td className={styles.num}>{p.ctaClicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className={styles.rowActions}>
            <span className={styles.lead}>총 {events.length}건 기록</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => clearEvents()}
              leading={<Trash2 size={16} aria-hidden="true" />}
            >
              기록 지우기
            </Button>
          </div>
        </>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 모바일/PC 반응형 지원                                                */
/* ------------------------------------------------------------------ */

type Viewport = 'mobile' | 'tablet' | 'desktop'

function useViewport(): Viewport {
  const compute = (): Viewport => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 640) return 'mobile'
    if (w < 1024) return 'tablet'
    return 'desktop'
  }
  const [viewport, setViewport] = useState<Viewport>(compute)

  useEffect(() => {
    const onResize = () => setViewport(compute())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return viewport
}

const VIEWPORT_LABEL: Record<Viewport, string> = {
  mobile: '모바일 폭',
  tablet: '태블릿 폭',
  desktop: 'PC 폭',
}

export function ResponsiveSupportList() {
  const viewport = useViewport()

  const items = [
    {
      id: 'mobile',
      Icon: Smartphone,
      title: '모바일에서 읽고 누르기 쉽게',
      description: '한 열로 쌓이는 레이아웃과 넉넉한 버튼 크기로 좁은 화면에서도 콘텐츠와 CTA가 잘리지 않습니다.',
    },
    {
      id: 'desktop',
      Icon: Monitor,
      title: 'PC에서 한눈에',
      description: '넓은 화면에서는 헤드라인과 시각 요소가 나란히 놓이고, 항목이 여러 열로 펼쳐집니다.',
    },
    {
      id: 'order',
      Icon: Wand2,
      title: '흐름은 그대로',
      description: '화면 폭이 바뀌어도 소개 → 문제 → 서비스 → 장점 → 시작 순서와 CTA 위치가 유지됩니다.',
    },
  ]

  return (
    <section className={styles.section} aria-labelledby="responsive-heading" data-feat-id="feat_fd435a7f2">
      <div>
        <h2 id="responsive-heading" className={styles.heading}>
          <Smartphone size={22} className={styles.headingIcon} aria-hidden="true" />
          모바일/PC 반응형 지원
          <Badge tone="brand" role="status">
            현재 {VIEWPORT_LABEL[viewport]}
          </Badge>
        </h2>
        <p className={styles.lead}>창 크기를 바꿔 보세요. 텍스트·버튼이 겹치거나 화면 밖으로 밀리지 않습니다.</p>
      </div>
      <ul className={styles.supportList}>
        {items.map(({ id, Icon, title, description }) => (
          <li key={id}>
            <Card className={styles.supportItem}>
              <span className={styles.supportIcon}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <div className={styles.supportText}>
                <h3>{title}</h3>
                <p className={styles.supportDesc}>{description}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 기본 SEO 메타 태그                                                   */
/* ------------------------------------------------------------------ */

export function SeoMetaList({ route }: { route: RouteId }) {
  const [items, setItems] = useState<SeoMetaItem[]>([])

  useEffect(() => {
    // App 이 메타를 적용한 뒤 읽도록 한 틱 미룬다.
    const id = window.setTimeout(() => setItems(readSeoMeta()), 0)
    return () => window.clearTimeout(id)
  }, [route])

  return (
    <section className={styles.section} aria-labelledby="seo-heading" data-feat-id="feat_f69e65664">
      <div>
        <h2 id="seo-heading" className={styles.heading}>
          <Globe size={22} className={styles.headingIcon} aria-hidden="true" />
          기본 SEO 메타 태그
        </h2>
        <p className={styles.lead}>현재 문서에 적용된 제목·설명·대표 URL·언어 값입니다.</p>
      </div>
      <Card>
        <dl className={styles.metaList}>
          {items.map((item) => (
            <div key={item.key} className={styles.metaRow}>
              <dt className={styles.metaLabel}>{item.label}</dt>
              <dd className={styles.metaValue}>
                {item.value ? item.value : <Badge tone="warning">미설정</Badge>}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  )
}
