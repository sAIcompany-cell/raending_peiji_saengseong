import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** 기본 여백을 끈다(내부에서 직접 여백을 줄 때) */
  flush?: boolean
  /** hover 시 살짝 떠오르는 카드 */
  interactive?: boolean
  /** 연한 표면색 카드 */
  soft?: boolean
}

export function Card({ flush, interactive, soft, className, children, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        !flush && styles.padded,
        interactive && styles.interactive,
        soft && styles.soft,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
