import type { ReactNode } from 'react'
import { getScreenStep, navLabelOf, type ScreenId } from '../lib/router'
import styles from './ScreenShell.module.css'

interface ScreenShellProps {
  screen: ScreenId
  headline: string
  subtitle: string
  /** 큰 시각 블록 (block-lg) */
  visual: ReactNode
  /** 항목 목록 */
  children?: ReactNode
  /** 진행 중 안내 등으로 단계 표시를 덮어쓸 문구 */
  statusMessage?: string
  actions: ReactNode
  /** 메인 섹션 뒤에 이어지는 보조 섹션 */
  after?: ReactNode
}

export function ScreenShell({
  screen,
  headline,
  subtitle,
  visual,
  children,
  statusMessage,
  actions,
  after,
}: ScreenShellProps) {
  const { index, total, next } = getScreenStep(screen)
  const headingId = `${screen}-heading`
  const progress = ((index + 1) / total) * 100

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 id={headingId} className={styles.headline}>
          {headline}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>

      <section className={styles.section} aria-labelledby={headingId}>
        <div className={styles.visual}>{visual}</div>
        {children && <div className={styles.list}>{children}</div>}

        <div className={styles.footer}>
          <div className={styles.status} role="status" aria-live="polite">
            <div className={styles.statusText}>
              {statusMessage ?? (
                <>
                  <strong>
                    {index + 1} / {total}
                  </strong>
                  <span>{next ? `다음: ${navLabelOf(next)}` : '마지막 단계예요'}</span>
                </>
              )}
            </div>
            <div
              className={styles.track}
              role="progressbar"
              aria-label="랜딩 진행 단계"
              aria-valuemin={1}
              aria-valuemax={total}
              aria-valuenow={index + 1}
            >
              <span className={styles.bar} style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
          </div>
          <div className={styles.actions}>{actions}</div>
        </div>
      </section>

      {after}
    </div>
  )
}
