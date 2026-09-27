import clsx from 'clsx'
import { CircleAlert } from 'lucide-react'
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import styles from './Field.module.css'

interface FieldChromeProps {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
}

type A11yAttrs = {
  id: string
  'aria-describedby'?: string
  'aria-invalid'?: true
  'aria-required'?: true
}

function FieldChrome({
  id,
  label,
  hint,
  error,
  required,
  children,
}: FieldChromeProps & { children: (a11y: A11yAttrs) => ReactNode }) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children({
        id,
        'aria-describedby': describedBy,
        'aria-invalid': error ? true : undefined,
        'aria-required': required ? true : undefined,
      })}
      {hint && !error && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          <CircleAlert size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>,
    FieldChromeProps {}

export function Input({ id, label, hint, error, required, className, ...rest }: InputProps) {
  return (
    <FieldChrome id={id} label={label} hint={hint} error={error} required={required}>
      {(a11y) => (
        <input
          className={clsx(styles.control, error && styles.invalid, className)}
          {...a11y}
          {...rest}
        />
      )}
    </FieldChrome>
  )
}

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>,
    FieldChromeProps {}

export function Textarea({ id, label, hint, error, required, className, ...rest }: TextareaProps) {
  return (
    <FieldChrome id={id} label={label} hint={hint} error={error} required={required}>
      {(a11y) => (
        <textarea
          className={clsx(styles.control, styles.textarea, error && styles.invalid, className)}
          {...a11y}
          {...rest}
        />
      )}
    </FieldChrome>
  )
}
