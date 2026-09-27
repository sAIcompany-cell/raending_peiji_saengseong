import { ListChecks, MapPin, Tag } from 'lucide-react'
import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { IconFlow } from '../components/Visual'
import { benefitContent } from '../lib/content'

export function BenefitsPage() {
  const icons = [<Tag size={22} />, <ListChecks size={22} />, <MapPin size={22} />]
  return (
    <ScreenShell
      screen="screen-3"
      headline={benefitContent.headline}
      subtitle={benefitContent.subtitle}
      visual={
        <IconFlow
          connected={false}
          label="가격 비교, 조건 확인, 매장 방문 줄이기"
          icons={[<Tag size={24} />, <ListChecks size={24} />, <MapPin size={24} />]}
        />
      }
      actions={<ContinueButton from="screen-3" />}
    >
      <PointList label="핵심 장점" items={benefitContent.points} icons={icons} />
    </ScreenShell>
  )
}
