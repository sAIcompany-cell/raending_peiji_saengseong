import { useState } from 'react'
import { Armchair, Scale, Sofa } from 'lucide-react'
import { CtaButton } from '../components/CtaButton'
import { ScreenShell } from '../components/ScreenShell'
import { Testimonials } from '../components/Testimonials'
import { IconFlow } from '../components/Visual'
import { finalCtaContent } from '../lib/content'

export function FinalCtaPage() {
  const [status, setStatus] = useState<string>()
  return (
    <ScreenShell
      screen="cta"
      headline={finalCtaContent.headline}
      subtitle={finalCtaContent.subtitle}
      visual={
        <IconFlow
          tone="brand"
          label="여러 가구를 비교해 내게 맞는 제품 고르기"
          icons={[<Sofa size={24} />, <Scale size={24} />, <Armchair size={24} />]}
        />
      }
      statusMessage={status}
      actions={<CtaButton label={finalCtaContent.cta} from="cta" onStatusChange={setStatus} />}
    >
      <Testimonials />
    </ScreenShell>
  )
}
