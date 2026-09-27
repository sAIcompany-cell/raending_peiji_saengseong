import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

export type BadgeTone = 'brand' | 'neutral' | 'success' | 'warning' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
}

export function Badge({ tone = 'neutral', className, children, ...rest }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[tone], className)} {...rest}>
      {children}
    </span>
  )
}
