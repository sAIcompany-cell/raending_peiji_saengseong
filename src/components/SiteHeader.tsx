import clsx from 'clsx'
import { Sofa } from 'lucide-react'
import { SCREEN_ORDER, type RouteId } from '../lib/router'
import { SITE_NAME } from '../lib/seo'
import styles from './SiteHeader.module.css'

function SiteLogo() {
  return (
    <div data-feat-id="feat_fe253b445" className={styles.logoWrap}>
      <a href="#/hero" className={styles.logo} aria-label={`${SITE_NAME} 처음 화면으로`}>
        <span className={styles.logoMark} aria-hidden="true">
          <Sofa size={20} strokeWidth={2.2} />
        </span>
        <span className={styles.logoText}>{SITE_NAME}</span>
      </a>
    </div>
  )
}

export function SiteHeader({ current }: { current: RouteId | null }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <SiteLogo />
        <nav aria-label="랜딩 섹션" className={styles.nav}>
          <ol className={styles.tabs}>
            {SCREEN_ORDER.map((s, i) => {
              const active = s.id === current
              return (
                <li key={s.id}>
                  <a
                    href={`#/${s.id}`}
                    className={clsx(styles.tab, active && styles.active)}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className={styles.tabIndex} aria-hidden="true">
                      {i + 1}
                    </span>
                    {s.navLabel}
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </header>
  )
}
