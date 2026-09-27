import { Clock, Footprints, Store, Tag } from 'lucide-react'
import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { IconFlow } from '../components/Visual'
import { problemContent } from '../lib/content'

export function ProblemPage() {
  return (
    <ScreenShell
      screen="screen"
      headline={problemContent.headline}
      subtitle={problemContent.subtitle}
      visual={
        <IconFlow
          label="가격을 확인하려고 여러 매장을 오가는 모습"
          icons={[<Store size={24} />, <Store size={24} />, <Store size={24} />, <Clock size={24} />]}
        />
      }
      actions={<ContinueButton from="screen" />}
    >
      <PointList
        label="가구를 비교할 때 겪는 문제"
        items={problemContent.points}
        icons={[<Tag size={22} />, <Footprints size={22} />]}
      />
    </ScreenShell>
  )
}
