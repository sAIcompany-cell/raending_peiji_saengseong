import { Compass, Home } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { navigate } from '../lib/router'
import styles from './Start.module.css'

export function NotFoundPage() {
  return (
    <main className={styles.main} id="main">
      <EmptyState
        icon={<Compass size={22} />}
        title="찾을 수 없는 페이지입니다"
        description="주소가 바뀌었거나 잘못 입력되었을 수 있습니다. 랜딩 처음 화면으로 돌아가 다시 시작해 보세요."
        action={
          <Button onClick={() => navigate('hero')} leading={<Home size={16} aria-hidden="true" />}>
            처음 화면으로
          </Button>
        }
      />
    </main>
  )
}
