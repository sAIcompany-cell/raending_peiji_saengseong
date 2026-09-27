import type { ReactNode } from 'react'
import clsx from 'clsx'
import type { PointItem } from '../lib/content'
import styles from './PointList.module.css'

interface PointListProps {
  items: PointItem[]
  icons: ReactNode[]
  /** 순서가 의미 있는 목록(단계)이면 번호를 붙인다 */
  numbered?: boolean
  label: string
}

export function PointList({ items, icons, numbered = false, label }: PointListProps) {
  const ListTag = numbered ? 'ol' : 'ul'
  return (
    <ListTag className={clsx(styles.list, items.length === 2 && styles.two)} aria-label={label}>
      {items.map((item, i) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.icon} aria-hidden="true">
            {icons[i]}
          </span>
          <div className={styles.body}>
            <h2 className={styles.title}>
              {numbered && <span className={styles.step}>{i + 1}</span>}
              {item.title}
            </h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ListTag>
  )
}
