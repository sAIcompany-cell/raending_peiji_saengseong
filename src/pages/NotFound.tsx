import { House, SearchX } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { navigate } from '../lib/router'
import styles from './Pages.module.css'

export function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h1 className="sr-only">페이지를 찾을 수 없어요</h1>
      <EmptyState
        icon={<SearchX size={22} />}
        title="찾으시는 페이지가 없어요"
        description="주소가 바뀌었거나 잘못 입력되었을 수 있어요. 처음 화면에서 다시 시작해 주세요."
        action={
          <Button iconLeft={<House size={18} aria-hidden="true" />} onClick={() => navigate('hero')}>
            처음 화면으로 가기
          </Button>
        }
      />
    </div>
  )
}
