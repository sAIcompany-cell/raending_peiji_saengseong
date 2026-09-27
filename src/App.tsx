import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { recordPageView } from './lib/analytics'
import { routePath, useRoute, type RouteId } from './lib/router'
import { SITE_NAME, applySeo } from './lib/seo'
import { BenefitsPage } from './pages/Benefits'
import { FinalCtaPage } from './pages/FinalCta'
import { HeroPage } from './pages/Hero'
import { NotFoundPage } from './pages/NotFound'
import { ProblemPage } from './pages/Problem'
import { ServicePage } from './pages/Service'
import { StartPage } from './pages/Start'
import styles from './App.module.css'

function renderPage(route: RouteId) {
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
    case 'not-found':
      return <NotFoundPage />
  }
}

function App() {
  const route = useRoute()

  // 화면이 바뀔 때마다 SEO 메타를 적용하고 방문 이벤트를 기록한다.
  useEffect(() => {
    applySeo(route)
    recordPageView(routePath(route))
  }, [route])

  return (
    <div className={styles.app}>
      <a href="#main" className={styles.skip}>
        본문으로 건너뛰기
      </a>
      <SiteHeader route={route} />
      {renderPage(route)}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerBrand}>{SITE_NAME}</span>
          <span>매장 가기 전에 가격과 조건을 비교하세요.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
