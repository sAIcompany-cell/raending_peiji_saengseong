import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { getScreenStep, navigate, type ScreenId } from '../lib/router'

/** 다음 랜딩 섹션으로 이동하는 기본 버튼. */
export function ContinueButton({ from }: { from: ScreenId }) {
  const { next } = getScreenStep(from)
  return (
    <Button
      size="lg"
      disabled={!next}
      iconRight={<ArrowRight size={18} aria-hidden="true" />}
      onClick={() => next && navigate(next)}
    >
      계속
    </Button>
  )
}
