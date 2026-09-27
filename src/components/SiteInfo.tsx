import { useEffect, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import {
  ChartColumn,
  CircleAlert,
  Eye,
  FileText,
  Monitor,
  MousePointerClick,
  RotateCcw,
  Smartphone,
  Tablet,
} from 'lucide-react'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { EmptyState, Skeleton } from './ui/EmptyState'
import { clearEvents, isStorageFailed, summarizeEvents, useAnalyticsEvents } from '../lib/analytics'
import { navLabelOf, navigate } from '../lib/router'
import { readSeoMeta, type SeoMetaItem } from '../lib/seo'
import styles from './SiteInfo.module.css'

/* ─── 방문 및 CTA 클릭 이벤트 측정 ─────────────────────────── */

export function AnalyticsSummary() {
  const events = useAnalyticsEvents()
  const [ready, setReady] = useState(false)
  const [clearError, setClearError] = useState(false)
  const summary = summarizeEvents(events)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 200)
    return () => window.clearTimeout(t)
  }, [])

  function handleClear() {
    setClearError(!clearEvents())
  }

  const stats = [
    { key: 'visits', label: '방문', value: summary.visits.toLocaleString('ko-KR'), icon: <Eye size={18} /> },
    {
      key: 'clicks',
      label: 'CTA 클릭',
      value: summary.ctaClicks.toLocaleString('ko-KR'),
      icon: <MousePointerClick size={18} />,
    },
    {
      key: 'rate',
      label: '방문 대비 클릭',
      value: summary.clickRate === null ? '—' : `${Math.round(summary.clickRate * 100)}%`,
      icon: <ChartColumn size={18} />,
    },
  ]

  return (
    <section data-feat-id="feat_fb0d21267" className={styles.block} aria-labelledby="analytics-title">
      <div className={styles.blockHead}>
        <div>
          <h2 id="analytics-title" className={styles.blockTitle}>
            방문·클릭 기록
          </h2>
          <p className={styles.blockDesc}>이 브라우저에서 기록된 방문과 CTA 클릭을 같은 기준으로 모았어요.</p>
        </div>
        {ready && events.length > 0 && (
          <Button variant="ghost" iconLeft={<RotateCcw size={16} aria-hidden="true" />} onClick={handleClear}>
            기록 비우기
          </Button>
        )}
      </div>

      {(isStorageFailed() || clearError) && (
        <p className={styles.warning} role="alert">
          <CircleAlert size={16} aria-hidden="true" />
          브라우저 저장 공간을 사용할 수 없어 일부 기록이 남지 않았을 수 있어요. 페이지 이용에는 영향이 없어요.
        </p>
      )}

      {!ready ? (
        <Card>
          <Skeleton lines={3} label="기록을 불러오는 중" />
        </Card>
      ) : events.length === 0 ? (
        <EmptyState
          icon={<ChartColumn size={22} />}
          title="아직 기록이 없어요"
          description="랜딩 화면을 둘러보면 방문과 버튼 클릭이 여기에 쌓여요."
          action={<Button onClick={() => navigate('hero')}>소개 화면 보기</Button>}
        />
      ) : (
        <>
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.key} className={styles.stat}>
                <span className={styles.statLabel}>
                  <span aria-hidden="true">{s.icon}</span>
                  {s.label}
                </span>
                <strong className={styles.statValue}>{s.value}</strong>
              </li>
            ))}
          </ul>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className="sr-only">화면별 방문과 CTA 클릭 수</caption>
              <thead>
                <tr>
                  <th scope="col">화면</th>
                  <th scope="col">방문</th>
                  <th scope="col">CTA 클릭</th>
                </tr>
              </thead>
              <tbody>
                {summary.pages.map((p) => (
                  <tr key={p.pagePath}>
                    <th scope="row">{navLabelOf(p.pagePath.replace(/^\//, ''))}</th>
                    <td>{p.visits}</td>
                    <td>{p.ctaClicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  )
}

/* ─── 모바일/PC 반응형 지원 ─────────────────────────────────── */

type Device = 'mobile' | 'tablet' | 'desktop'

function detectDevice(): Device {
  if (window.matchMedia('(min-width: 1024px)').matches) return 'desktop'
  if (window.matchMedia('(min-width: 768px)').matches) return 'tablet'
  return 'mobile'
}

const DEVICES: { id: Device; label: string; range: string; note: string; icon: ReactNode }[] = [
  {
    id: 'mobile',
    label: '모바일',
    range: '767px 이하',
    note: '한 열로 쌓고, 버튼은 손가락으로 누르기 쉽게 화면 너비에 맞춰요.',
    icon: <Smartphone size={20} />,
  },
  {
    id: 'tablet',
    label: '태블릿',
    range: '768–1023px',
    note: '항목을 두세 열로 나누고 상단 메뉴를 한 줄로 보여줘요.',
    icon: <Tablet size={20} />,
  },
  {
    id: 'desktop',
    label: 'PC',
    range: '1024px 이상',
    note: '본문 폭을 제한해 읽기 편한 길이를 유지하고 여백을 넓혀요.',
    icon: <Monitor size={20} />,
  },
]

export function ResponsiveSupportList() {
  const [device, setDevice] = useState<Device>(() => detectDevice())

  useEffect(() => {
    const onResize = () => setDevice(detectDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section data-feat-id="feat_fd435a7f2" className={styles.block} aria-labelledby="responsive-title">
      <div className={styles.blockHead}>
        <div>
          <h2 id="responsive-title" className={styles.blockTitle}>
            어떤 화면에서도 같은 흐름으로
          </h2>
          <p className={styles.blockDesc}>휴대폰과 PC 모두에서 내용과 버튼이 같은 순서로 보여요.</p>
        </div>
      </div>
      <ul className={styles.devices}>
        {DEVICES.map((d) => {
          const current = d.id === device
          return (
            <li key={d.id} className={clsx(styles.device, current && styles.deviceCurrent)}>
              <div className={styles.deviceTop}>
                <span className={styles.deviceIcon} aria-hidden="true">
                  {d.icon}
                </span>
                <div className={styles.deviceName}>
                  <strong>{d.label}</strong>
                  <span>{d.range}</span>
                </div>
                {current && <Badge tone="brand">지금 보는 화면</Badge>}
              </div>
              <p className={styles.deviceNote}>{d.note}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

/* ─── 기본 SEO 메타 태그 ────────────────────────────────────── */

export function SeoMetaList() {
  const [items, setItems] = useState<SeoMetaItem[] | null>(null)

  useEffect(() => {
    // 문서 메타가 반영된 다음 프레임에 읽는다
    const id = window.requestAnimationFrame(() => setItems(readSeoMeta()))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <section data-feat-id="feat_f69e65664" className={styles.block} aria-labelledby="seo-title">
      <div className={styles.blockHead}>
        <div>
          <h2 id="seo-title" className={styles.blockTitle}>
            검색 노출 정보
          </h2>
          <p className={styles.blockDesc}>검색 결과에 보여질 이 페이지의 기본 정보예요.</p>
        </div>
      </div>
      {items === null ? (
        <Card>
          <Skeleton lines={4} label="검색 노출 정보를 불러오는 중" />
        </Card>
      ) : (
        <dl className={styles.meta}>
          {items.map((item) => (
            <div key={item.key} className={styles.metaRow}>
              <dt>
                <FileText size={14} aria-hidden="true" />
                {item.label}
              </dt>
              <dd>{item.value || <span className={styles.missing}>설정되지 않음</span>}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  )
}
