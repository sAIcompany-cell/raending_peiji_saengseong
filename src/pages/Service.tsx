import { CircleCheck, Scale, Search } from 'lucide-react'
import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { IconFlow } from '../components/Visual'
import { serviceContent } from '../lib/content'

export function ServicePage() {
  return (
    <ScreenShell
      screen="screen-2"
      headline={serviceContent.headline}
      subtitle={serviceContent.subtitle}
      visual={
        <IconFlow
          tone="brand"
          label="찾기, 비교하기, 고르기로 이어지는 흐름"
          icons={[<Search size={24} />, <Scale size={24} />, <CircleCheck size={24} />]}
          caption={serviceContent.solution}
        />
      }
      actions={<ContinueButton from="screen-2" />}
    >
      <PointList
        numbered
        label="이용 순서"
        items={serviceContent.points}
        icons={[<Search size={22} />, <Scale size={22} />, <CircleCheck size={22} />]}
      />
    </ScreenShell>
  )
}
