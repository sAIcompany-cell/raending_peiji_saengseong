import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  block?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  iconLeft,
  iconRight,
  block = false,
  disabled,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], styles[size], block && styles.block, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <LoaderCircle className={styles.spinner} size={18} aria-hidden="true" /> : iconLeft}
      <span>{children}</span>
      {!loading && iconRight}
    </button>
  )
}
