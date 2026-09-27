import clsx from 'clsx'
import type { PointItem } from '../lib/content'
import { PointIconGlyph } from './Visual'
import styles from './PointList.module.css'

interface PointListProps {
  items: readonly PointItem[]
  /** 문제 제시 등 부정적 맥락일 때 경고 톤 아이콘 */
  tone?: 'brand' | 'warning'
  /** 항목 앞에 01·02 순번을 표시 */
  numbered?: boolean
  ariaLabel: string
}

export function PointList({ items, tone = 'brand', numbered = false, ariaLabel }: PointListProps) {
  return (
    <ul className={styles.list} aria-label={ariaLabel}>
      {items.map((item, i) => (
        <li key={item.id} className={styles.item}>
          <span className={clsx(styles.icon, tone === 'warning' && styles.iconMuted)}>
            <PointIconGlyph icon={item.icon} size={22} />
          </span>
          <div className={styles.text}>
            {numbered && <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
