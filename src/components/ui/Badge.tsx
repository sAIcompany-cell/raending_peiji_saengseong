import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Badge.module.css'

interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'success' | 'warning'
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export function Badge({ tone = 'neutral', icon, children, className }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[tone], className)}>
      {icon}
      {children}
    </span>
  )
}
