import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { recordPageView } from './lib/analytics'
import { routePath, useRoute, type RouteId } from './lib/router'
import { applySeo, SITE_NAME } from './lib/seo'
import { BenefitsPage } from './pages/Benefits'
import { FinalCtaPage } from './pages/FinalCta'
import { HeroPage } from './pages/Hero'
import { NotFoundPage } from './pages/NotFound'
import { ProblemPage } from './pages/Problem'
import { ServicePage } from './pages/Service'
import { StartPage } from './pages/Start'
import styles from './App.module.css'

function renderRoute(route: RouteId | null) {
  switch (route) {
    case 'hero':
      return <HeroPage />
    case 'screen':
      return <ProblemPage />
    case 'screen-2':
      return <ServicePage />
    case 'screen-3':
      return <BenefitsPage />
    case 'cta':
      return <FinalCtaPage />
    case 'start':
      return <StartPage />
    default:
      return <NotFoundPage />
  }
}

export default function App() {
  const route = useRoute()

  useEffect(() => {
    applySeo(route)
    if (route) recordPageView(routePath(route))
    window.scrollTo({ top: 0 })
  }, [route])

  return (
    <div className={styles.app}>
      <a href="#main" className={styles.skip}>
        본문으로 건너뛰기
      </a>
      <SiteHeader current={route} />
      <main id="main" className={styles.main} tabIndex={-1}>
        {/* key 로 화면 전환 시 진입 모션과 상태를 새로 시작한다 */}
        <div key={route ?? 'not-found'}>{renderRoute(route)}</div>
      </main>
      <footer className={styles.footer}>
        <p>© {SITE_NAME}. 매장 가기 전에, 가구 가격을 먼저 비교하세요.</p>
      </footer>
    </div>
  )
}
