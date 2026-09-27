import { CtaButton } from '../components/CtaButton'
import { FaqList } from '../components/FaqList'
import { ScreenShell } from '../components/ScreenShell'
import { CompareVisual } from '../components/Visual'
import { heroContent } from '../lib/content'

export function HeroPage() {
  return (
    <ScreenShell
      route="hero"
      headline={heroContent.headline}
      subtitle={heroContent.subtitle}
      visual={<CompareVisual />}
      actions={<CtaButton label={heroContent.cta} from="hero" />}
    >
      <FaqList />
    </ScreenShell>
  )
}
