import type { ReactNode } from 'react'
import styles from './EmptyState.module.css'

export interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  /** 다음 행동 버튼 */
  action?: ReactNode
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className={styles.empty} role="status">
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}

export interface SkeletonProps {
  lines?: number
  label?: string
}

export function Skeleton({ lines = 3, label = '불러오는 중' }: SkeletonProps) {
  const widths = ['100%', '82%', '64%', '90%', '48%']
  return (
    <div className={styles.skeleton} role="status" aria-live="polite" aria-label={label}>
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} className={styles.line} style={{ width: widths[i % widths.length] }} />
      ))}
    </div>
  )
}
