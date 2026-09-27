import type { HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'default' | 'muted' | 'brand'
  padded?: boolean
}

export function Card({ tone = 'default', padded = true, className, ...rest }: CardProps) {
  return <div className={clsx(styles.card, styles[tone], padded && styles.padded, className)} {...rest} />
}
