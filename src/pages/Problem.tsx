import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { problemContent } from '../lib/content'

export function ProblemPage() {
  return (
    <ScreenShell
      route="screen"
      eyebrow="문제"
      headline={problemContent.headline}
      subtitle={problemContent.subtitle}
      actions={<ContinueButton to="screen-2" label={problemContent.continueLabel} />}
      status="다음: 서비스 소개"
    >
      <PointList items={problemContent.points} tone="warning" numbered ariaLabel="가구 비교에서 겪는 불편" />
    </ScreenShell>
  )
}
