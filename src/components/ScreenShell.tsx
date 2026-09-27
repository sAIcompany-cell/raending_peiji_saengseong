import clsx from 'clsx'
import type { ReactNode } from 'react'
import { SCREEN_ORDER, getScreenStep, navigate, type ScreenId } from '../lib/router'
import { Badge } from './ui/Badge'
import styles from './ScreenShell.module.css'

interface ScreenShellProps {
  route: ScreenId
  /** 헤드라인 위 작은 라벨(섹션 이름) */
  eyebrow?: string
  headline: string
  subtitle: string
  /** 헤드라인 옆에 놓이는 시각 요소 */
  visual?: ReactNode
  /** 본문(목록·카드 등) */
  children?: ReactNode
  /** 하단 행동 버튼 */
  actions: ReactNode
  /** 행동 영역 오른쪽의 짧은 상태 문구 */
  status?: string
}

export function ScreenShell({
  route,
  eyebrow,
  headline,
  subtitle,
  visual,
  children,
  actions,
  status,
}: ScreenShellProps) {
  const step = getScreenStep(route)
  const index = step?.index ?? 0
  const total = step?.total ?? SCREEN_ORDER.length
  const percent = Math.round(((index + 1) / total) * 100)

  return (
    <main className={styles.shell} id="main">
      <div className={styles.progress} aria-label="랜딩 섹션 진행">
        <span className={styles.progressText} role="status">
          {index + 1} / {total} 섹션
        </span>
        <div className={styles.bar} aria-hidden="true">
          <div className={styles.barFill} style={{ width: `${percent}%` }} />
        </div>
        <div className={styles.dots}>
          {SCREEN_ORDER.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={clsx(styles.dot, i < index && styles.dotDone, i === index && styles.dotActive)}
              aria-label={`${s.label} 섹션으로 이동`}
              aria-current={i === index ? 'step' : undefined}
              onClick={() => navigate(s.id)}
            />
          ))}
        </div>
      </div>

      <section className={styles.hero} aria-labelledby="screen-headline">
        <div className={styles.copy}>
          {eyebrow && (
            <Badge tone="brand" className={styles.eyebrow}>
              {eyebrow}
            </Badge>
          )}
          <h1 id="screen-headline">{headline}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {visual && <div className={styles.visual}>{visual}</div>}
      </section>

      {children && <div className={styles.body}>{children}</div>}

      <div className={styles.actions}>
        {actions}
        {status && <span className={styles.status}>{status}</span>}
      </div>
    </main>
  )
}
