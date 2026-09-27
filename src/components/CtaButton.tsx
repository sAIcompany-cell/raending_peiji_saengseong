import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CircleAlert } from 'lucide-react'
import { Button } from './ui/Button'
import { recordCtaClick } from '../lib/analytics'
import { isRouteId, navigate, routePath, type RouteId, type ScreenId } from '../lib/router'
import styles from './CtaButton.module.css'

interface CtaButtonProps {
  label: string
  from: ScreenId
  /** CTA 목적지 — 서비스 시작 페이지 */
  to?: RouteId
  onStatusChange?: (message: string | undefined) => void
}

export function CtaButton({ label, from, to = 'start', onStatusChange }: CtaButtonProps) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function handleClick() {
    setError(null)
    // 측정은 이동을 막지 않는다: 실패해도 결과를 무시하고 계속 진행한다.
    recordCtaClick(routePath(from), label)

    if (!isRouteId(to)) {
      setError('이동할 페이지를 찾지 못했어요. 잠시 후 다시 시도해 주세요.')
      onStatusChange?.(undefined)
      return
    }

    setPending(true)
    onStatusChange?.('비교 시작 페이지로 이동하고 있어요…')
    timer.current = window.setTimeout(() => {
      try {
        navigate(to)
      } catch {
        setPending(false)
        onStatusChange?.(undefined)
        setError('페이지를 여는 중 문제가 생겼어요. 버튼을 다시 눌러 주세요.')
      }
    }, 350)
  }

  return (
    <div data-feat-id="feat_fd60f2b56" className={styles.wrap}>
      <Button
        size="lg"
        loading={pending}
        iconRight={<ArrowRight size={18} aria-hidden="true" />}
        onClick={handleClick}
        className={styles.button}
      >
        {label}
      </Button>
      {error && (
        <p className={styles.error} role="alert">
          <CircleAlert size={16} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
