import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { benefitContent } from '../lib/content'

export function BenefitsPage() {
  return (
    <ScreenShell
      route="screen-3"
      eyebrow="핵심 장점"
      headline={benefitContent.headline}
      subtitle={benefitContent.subtitle}
      actions={<ContinueButton to="cta" label={benefitContent.continueLabel} />}
      status="다음: 시작하기"
    >
      <PointList items={benefitContent.points} ariaLabel="핵심 장점" />
    </ScreenShell>
  )
}
