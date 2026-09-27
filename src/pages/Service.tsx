import { Sparkles } from 'lucide-react'
import { ContinueButton } from '../components/ContinueButton'
import { PointList } from '../components/PointList'
import { ScreenShell } from '../components/ScreenShell'
import { IconFlow } from '../components/Visual'
import { serviceContent } from '../lib/content'
import styles from './Service.module.css'

export function ServicePage() {
  const flow = serviceContent.points.map((p) => ({ id: p.id, label: p.title, icon: p.icon }))

  return (
    <ScreenShell
      route="screen-2"
      eyebrow="서비스 소개"
      headline={serviceContent.headline}
      subtitle={serviceContent.subtitle}
      visual={<IconFlow steps={flow} />}
      actions={<ContinueButton to="screen-3" label={serviceContent.continueLabel} />}
      status="다음: 핵심 장점"
    >
      <p className={styles.solution}>
        <Sparkles size={18} className={styles.solutionIcon} aria-hidden="true" />
        {serviceContent.solution}
      </p>
      <PointList items={serviceContent.points} numbered ariaLabel="서비스 이용 단계" />
    </ScreenShell>
  )
}
