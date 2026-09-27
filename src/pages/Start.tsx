import { useState } from 'react'
import { ArrowLeft, CircleCheck, MousePointerClick } from 'lucide-react'
import { AnalyticsSummary, ResponsiveSupportList, SeoMetaList } from '../components/SiteInfo'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { getLastCtaClick } from '../lib/analytics'
import { navLabelOf, navigate } from '../lib/router'
import styles from './Pages.module.css'

function formatTime(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '방금 전'
  return d.toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

/** CTA 목적지 — 서비스 시작 페이지. */
export function StartPage() {
  const [last] = useState(() => getLastCtaClick())

  return (
    <div className={styles.startPage}>
      <header className={styles.startHeader}>
        <span className={styles.startIcon} aria-hidden="true">
          <CircleCheck size={28} />
        </span>
        <h1 className={styles.startTitle}>비교를 시작할 준비가 되었어요</h1>
        <p className={styles.startSubtitle}>
          원하는 가구와 조건을 정해 두면, 매장에 가기 전에 가격을 한눈에 비교할 수 있어요.
        </p>
      </header>

      <section aria-labelledby="last-cta-title" className={styles.lastCta}>
        <h2 id="last-cta-title" className="sr-only">
          방금 선택한 버튼
        </h2>
        {last ? (
          <Card tone="brand" className={styles.lastCard}>
            <span className={styles.lastIcon} aria-hidden="true">
              <MousePointerClick size={20} />
            </span>
            <dl className={styles.lastList}>
              <div>
                <dt>선택한 버튼</dt>
                <dd>{last.label}</dd>
              </div>
              <div>
                <dt>선택한 화면</dt>
                <dd>{navLabelOf(last.from.replace(/^\//, ''))}</dd>
              </div>
              <div>
                <dt>선택 시각</dt>
                <dd>{formatTime(last.occurredAt)}</dd>
              </div>
            </dl>
          </Card>
        ) : (
          <EmptyState
            icon={<MousePointerClick size={22} />}
            title="아직 선택한 버튼이 없어요"
            description="소개 화면에서 ‘무료로 시작하기’를 누르면 여기에서 이어서 볼 수 있어요."
            action={<Button onClick={() => navigate('hero')}>소개 화면으로 가기</Button>}
          />
        )}
        <div className={styles.startActions}>
          <Button
            variant="secondary"
            iconLeft={<ArrowLeft size={18} aria-hidden="true" />}
            onClick={() => navigate('hero')}
          >
            처음 화면으로 돌아가기
          </Button>
        </div>
      </section>

      <div className={styles.infoGrid}>
        <AnalyticsSummary />
        <ResponsiveSupportList />
        <SeoMetaList />
      </div>
    </div>
  )
}
