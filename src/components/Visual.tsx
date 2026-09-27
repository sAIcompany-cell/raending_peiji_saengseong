import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Armchair, BedDouble, CircleCheck, Sofa } from 'lucide-react'
import styles from './Visual.module.css'

/** Hero 용 — 제품별 비교를 추상화한 막대 카드. 수치 없이 비교 흐름만 보여준다. */
export function CompareVisual() {
  const rows = [
    { icon: <Sofa size={20} />, width: 72 },
    { icon: <Armchair size={20} />, width: 54, picked: true },
    { icon: <BedDouble size={20} />, width: 88 },
  ]
  return (
    <figure className={clsx(styles.frame, styles.compare)} aria-label="여러 가구를 나란히 비교하는 화면 예시">
      <div className={styles.window} aria-hidden="true">
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
        </div>
        <ul className={styles.rows}>
          {rows.map((r, i) => (
            <li key={i} className={clsx(styles.row, r.picked && styles.picked)}>
              <span className={styles.rowIcon}>{r.icon}</span>
              <span className={styles.rowTrack}>
                <span className={styles.rowBar} style={{ width: `${r.width}%` }} />
              </span>
              <span className={styles.rowMark}>{r.picked && <CircleCheck size={18} />}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  )
}

interface IconFlowProps {
  label: string
  icons: ReactNode[]
  connected?: boolean
  caption?: ReactNode
  tone?: 'brand' | 'muted'
}

/** 아이콘 여러 개를 이어 붙인 시각 블록. */
export function IconFlow({ label, icons, connected = true, caption, tone = 'muted' }: IconFlowProps) {
  return (
    <figure className={clsx(styles.frame, styles.flow, tone === 'brand' && styles.flowBrand)}>
      <div className={clsx(styles.icons, connected && styles.connected)} role="img" aria-label={label}>
        {icons.map((icon, i) => (
          <span key={i} className={styles.iconBubble} aria-hidden="true">
            {icon}
          </span>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
