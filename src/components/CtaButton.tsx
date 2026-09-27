import { ArrowRight, ShieldCheck } from 'lucide-react'
import { recordCtaClick } from '../lib/analytics'
import { navigate, routePath, type RouteId } from '../lib/router'
import { Button } from './ui/Button'
import styles from './CtaButton.module.css'

interface CtaButtonProps {
  label: string
  /** 클릭이 일어난 화면(이벤트 기록용) */
  from: RouteId
  /** 이동 목적지 — 기본은 서비스 시작 페이지 */
  to?: RouteId
  /** 버튼 옆 보조 문구(선택) */
  note?: string
}

/**
 * 랜딩 CTA — 클릭 이벤트를 기록한 뒤 시작 페이지로 이동한다.
 * 기록에 실패해도 이동은 반드시 수행된다.
 */
export function CtaButton({ label, from, to = 'start', note }: CtaButtonProps) {
  const handleClick = () => {
    recordCtaClick(routePath(from), label)
    navigate(to)
  }

  return (
    <div className={styles.wrap} data-feat-id="feat_fd60f2b56">
      <Button size="lg" onClick={handleClick} trailing={<ArrowRight size={18} aria-hidden="true" />}>
        {label}
      </Button>
      {note && (
        <span className={styles.note}>
          <ShieldCheck size={16} className={styles.noteIcon} aria-hidden="true" />
          {note}
        </span>
      )}
    </div>
  )
}
