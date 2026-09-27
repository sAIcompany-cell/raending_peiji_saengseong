import { ArrowRight } from 'lucide-react'
import { navigate, type ScreenId } from '../lib/router'
import { Button } from './ui/Button'

interface ContinueButtonProps {
  to: ScreenId
  label: string
}

/** 다음 섹션으로 넘어가는 기본 행동 버튼. */
export function ContinueButton({ to, label }: ContinueButtonProps) {
  return (
    <Button size="lg" onClick={() => navigate(to)} trailing={<ArrowRight size={18} aria-hidden="true" />}>
      {label}
    </Button>
  )
}
