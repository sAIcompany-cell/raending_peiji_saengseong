import clsx from 'clsx'
import {
  ArrowDown,
  ArrowRight,
  Armchair,
  BadgeCheck,
  Check,
  Clock,
  Footprints,
  Lamp,
  Scale,
  Search,
  Sofa,
  Tags,
  type LucideProps,
} from 'lucide-react'
import type { ComponentType } from 'react'
import type { PointIcon } from '../lib/content'
import styles from './Visual.module.css'

const ICONS: Record<PointIcon, ComponentType<LucideProps>> = {
  tags: Tags,
  footprints: Footprints,
  search: Search,
  scale: Scale,
  check: Check,
  sofa: Sofa,
  clock: Clock,
}

export function PointIconGlyph({ icon, size = 20 }: { icon: PointIcon; size?: number }) {
  const Icon = ICONS[icon]
  return <Icon size={size} aria-hidden="true" />
}

/**
 * 장식용 비교 카드 — 실제 가격·수치는 넣지 않는다(확인되지 않은 수치 금지).
 * 여러 제품을 한 화면에서 비교하고 하나를 고르는 모습만 보여준다.
 */
export function CompareVisual() {
  const rows = [
    { id: 'a', label: '제품 1', Icon: Sofa, width: '82%', pick: false },
    { id: 'b', label: '제품 2', Icon: Armchair, width: '58%', pick: true },
    { id: 'c', label: '제품 3', Icon: Lamp, width: '70%', pick: false },
  ]

  return (
    <div className={styles.compare} role="img" aria-label="여러 가구 제품의 가격을 한 화면에서 비교하고 하나를 고르는 모습">
      <div className={styles.compareHead}>
        <span>원하는 조건으로 비교</span>
        <span>가격</span>
      </div>
      {rows.map(({ id, label, Icon, width, pick }) => (
        <div key={id} className={clsx(styles.row, pick && styles.rowPick)}>
          <span className={styles.thumb}>
            <Icon size={18} aria-hidden="true" />
          </span>
          <div className={styles.rowBody}>
            <span className={styles.rowLabel}>{label}</span>
            <div className={styles.track}>
              <div className={clsx(styles.fill, pick && styles.fillPick)} style={{ width }} />
            </div>
          </div>
          {pick ? (
            <span className={styles.pick}>
              <BadgeCheck size={14} aria-hidden="true" />
              내게 맞는 선택
            </span>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}

export interface FlowStep {
  id: string
  label: string
  icon: PointIcon
}

/** 단계 흐름을 아이콘으로 보여준다(모바일: 세로, 넓은 화면: 가로). */
export function IconFlow({ steps }: { steps: readonly FlowStep[] }) {
  return (
    <ol className={styles.flow} aria-label="이용 흐름">
      {steps.map((step, i) => (
        <li key={step.id} className={styles.flowLi}>
          <div className={styles.flowItem}>
            <span className={styles.flowIcon}>
              <PointIconGlyph icon={step.icon} size={22} />
            </span>
            <span className={styles.flowLabel}>{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span className={styles.flowArrow} aria-hidden="true">
              <ArrowDown size={18} className={styles.arrowDown} />
              <ArrowRight size={18} className={styles.arrowRight} />
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
