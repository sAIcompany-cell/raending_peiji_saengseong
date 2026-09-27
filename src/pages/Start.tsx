import { ArrowLeft, MousePointerClick, RotateCcw } from 'lucide-react'
import { AnalyticsSummary, ResponsiveSupportList, SeoMetaList } from '../components/SiteInfo'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { getLastCtaClick, useAnalyticsEvents } from '../lib/analytics'
import { navLabelOf, navigate, parseHash } from '../lib/router'
import styles from './Start.module.css'

function formatTime(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

/**
 * 서비스 시작 페이지 — CTA 의 목적지.
 * 어떤 CTA 를 눌러 들어왔는지 보여주고, 측정·반응형·SEO 상태를 확인할 수 있다.
 */
export function StartPage() {
  // 이벤트가 바뀌면 마지막 CTA 클릭도 다시 계산되도록 구독한다.
  useAnalyticsEvents()
  const lastClick = getLastCtaClick()

  return (
    <main className={styles.main} id="main">
      <header className={styles.head}>
        <Badge tone="brand" className={styles.eyebrow}>
          시작하기
        </Badge>
        <h1>비교를 시작할 준비가 되었습니다</h1>
        <p className={styles.subtitle}>
          원하는 가구와 조건을 정하고 가격을 한눈에 비교해 보세요. 매장은 비교를 마친 뒤 필요한 곳만
          방문하면 됩니다.
        </p>
      </header>

      {lastClick ? (
        <Card className={styles.clickCard} role="status">
          <span className={styles.clickIcon} aria-hidden="true">
            <MousePointerClick size={22} />
          </span>
          <div className={styles.clickBody}>
            <h2>
              <span className={styles.clickLabel}>‘{lastClick.label}’</span> 버튼을 눌러 이동했습니다
            </h2>
            <p className={styles.clickMeta}>
              {navLabelOf(parseHash(lastClick.pagePath))} 섹션 · {formatTime(lastClick.occurredAt)}
            </p>
          </div>
        </Card>
      ) : (
        <EmptyState
          icon={<MousePointerClick size={22} />}
          title="CTA를 거치지 않고 바로 들어오셨네요"
          description="랜딩 소개부터 보시면 서비스 흐름을 이해하는 데 도움이 됩니다."
          action={
            <Button variant="secondary" onClick={() => navigate('hero')} leading={<RotateCcw size={16} aria-hidden="true" />}>
              처음부터 보기
            </Button>
          }
        />
      )}

      <hr className={styles.divider} />
      <AnalyticsSummary />
      <hr className={styles.divider} />
      <ResponsiveSupportList />
      <hr className={styles.divider} />
      <SeoMetaList route="start" />

      <div className={styles.actions}>
        <Button variant="ghost" onClick={() => navigate('hero')} leading={<ArrowLeft size={16} aria-hidden="true" />}>
          랜딩 처음으로
        </Button>
      </div>
    </main>
  )
}
