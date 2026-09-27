import { CtaButton } from '../components/CtaButton'
import { ScreenShell } from '../components/ScreenShell'
import { Testimonials } from '../components/Testimonials'
import { CompareVisual } from '../components/Visual'
import { finalCtaContent } from '../lib/content'

export function FinalCtaPage() {
  return (
    <ScreenShell
      route="cta"
      eyebrow="시작하기"
      headline={finalCtaContent.headline}
      subtitle={finalCtaContent.subtitle}
      visual={<CompareVisual />}
      actions={<CtaButton label={finalCtaContent.cta} from="cta" />}
    >
      <Testimonials />
    </ScreenShell>
  )
}
