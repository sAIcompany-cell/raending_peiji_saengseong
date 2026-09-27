import { useState } from 'react'
import { CtaButton } from '../components/CtaButton'
import { FaqList } from '../components/FaqList'
import { ScreenShell } from '../components/ScreenShell'
import { CompareVisual } from '../components/Visual'
import { heroContent } from '../lib/content'
import styles from './Pages.module.css'

export function HeroPage() {
  const [status, setStatus] = useState<string>()
  return (
    <ScreenShell
      screen="hero"
      headline={heroContent.headline}
      subtitle={heroContent.subtitle}
      visual={<CompareVisual />}
      statusMessage={status}
      actions={<CtaButton label={heroContent.cta} from="hero" onStatusChange={setStatus} />}
      after={
        <div className={styles.after}>
          <FaqList />
        </div>
      }
    />
  )
}
