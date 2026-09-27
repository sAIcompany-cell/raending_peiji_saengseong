import type { InputHTMLAttributes, ReactNode, Ref, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Field.module.css'

interface BaseProps {
  id: string
  label: string
  hint?: string
  error?: string
  optional?: boolean
}

function FieldFrame({
  id,
  label,
  hint,
  error,
  optional,
  children,
}: BaseProps & { children: ReactNode }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>(선택)</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className={styles.hint}>
            {hint}
          </p>
        )
      )}
    </div>
  )
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

type InputProps = BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

export function Input({ id, label, hint, error, optional, className, ...rest }: InputProps) {
  return (
    <FieldFrame id={id} label={label} hint={hint} error={error} optional={optional}>
      <input
        id={id}
        className={clsx(styles.control, error && styles.invalid, className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        {...rest}
      />
    </FieldFrame>
  )
}

type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & { ref?: Ref<HTMLTextAreaElement> }

export function Textarea({ id, label, hint, error, optional, className, ...rest }: TextareaProps) {
  return (
    <FieldFrame id={id} label={label} hint={hint} error={error} optional={optional}>
      <textarea
        id={id}
        className={clsx(styles.control, styles.textarea, error && styles.invalid, className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        {...rest}
      />
    </FieldFrame>
  )
}
