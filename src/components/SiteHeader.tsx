import clsx from 'clsx'
import { Menu, Sofa, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SCREEN_ORDER, navigate, routePath, type RouteId } from '../lib/router'
import { SITE_NAME } from '../lib/seo'
import { Button } from './ui/Button'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  route: RouteId
}

export function SiteHeader({ route }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  // 화면이 바뀌면 모바일 메뉴를 닫는다.
  useEffect(() => {
    setOpen(false)
  }, [route])

  return (
    <header className={styles.header} data-feat-id="feat_fe253b445">
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.logo}
          onClick={() => navigate('hero')}
          aria-label={`${SITE_NAME} 처음 화면으로 이동`}
        >
          <span className={styles.logoMark} aria-hidden="true">
            <Sofa size={18} strokeWidth={2.2} />
          </span>
          {SITE_NAME}
        </button>

        <nav className={styles.nav} aria-label="섹션 이동">
          <ul className={styles.navList}>
            {SCREEN_ORDER.map((screen) => (
              <li key={screen.id}>
                <a
                  href={routePath(screen.id)}
                  className={clsx(styles.navLink, route === screen.id && styles.navLinkActive)}
                  aria-current={route === screen.id ? 'page' : undefined}
                >
                  {screen.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <Button size="sm" variant={route === 'start' ? 'primary' : 'secondary'} onClick={() => navigate('start')}>
            시작하기
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="섹션 이동(모바일)">
          <ul className={styles.mobileList}>
            {SCREEN_ORDER.map((screen, i) => (
              <li key={screen.id}>
                <a
                  href={routePath(screen.id)}
                  className={clsx(styles.mobileLink, route === screen.id && styles.mobileLinkActive)}
                  aria-current={route === screen.id ? 'page' : undefined}
                >
                  {screen.label}
                  <span className={styles.step}>
                    {i + 1} / {SCREEN_ORDER.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
