import { useEffect, useRef, useState, type FormEvent, type RefObject } from 'react'
import clsx from 'clsx'
import { CircleAlert, CircleCheck, MessageSquarePlus, Quote, RotateCcw, TrendingUp } from 'lucide-react'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { EmptyState, Skeleton } from './ui/EmptyState'
import { Input, Textarea } from './ui/Field'
import {
  SAMPLE_TESTIMONIALS,
  loadUserTestimonials,
  saveUserTestimonials,
  validateTestimonial,
  type Testimonial,
  type TestimonialErrors,
  type TestimonialInput,
} from '../lib/testimonials'
import styles from './Testimonials.module.css'

type Filter = 'all' | 'user'
type LoadState = 'loading' | 'ready' | 'error'

const EMPTY_INPUT: TestimonialInput = { quote: '', author: '', result: '' }

export function Testimonials() {
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [userItems, setUserItems] = useState<Testimonial[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [reloadKey, setReloadKey] = useState(0)
  const quoteRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        setUserItems(loadUserTestimonials())
        setLoadState('ready')
      } catch {
        setLoadState('error')
      }
    }, 250)
    return () => window.clearTimeout(t)
  }, [reloadKey])

  const visible = filter === 'user' ? userItems : [...userItems, ...SAMPLE_TESTIMONIALS]

  function retry() {
    setLoadState('loading')
    setReloadKey((k) => k + 1)
  }

  function handleAdded(next: Testimonial[]) {
    setUserItems(next)
    setFilter('all')
  }

  return (
    <div className={styles.wrap}>
      <section data-feat-id="feat_feat-ff2f57" className={styles.listSection} aria-labelledby="testimonials-title">
        <div className={styles.head}>
          <h2 id="testimonials-title" className={styles.heading}>
            먼저 비교해 본 분들의 이야기
          </h2>
          <div className={styles.filters} role="group" aria-label="후기 보기 방식">
            {(
              [
                ['all', '전체 후기'],
                ['user', '내가 쓴 후기'],
              ] as const
            ).map(([value, text]) => (
              <button
                key={value}
                type="button"
                className={clsx(styles.filter, filter === value && styles.filterActive)}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {text}
                {value === 'user' && loadState === 'ready' && ` ${userItems.length}`}
              </button>
            ))}
          </div>
        </div>

        {loadState === 'loading' && (
          <Card>
            <Skeleton lines={4} label="후기를 불러오는 중" />
          </Card>
        )}

        {loadState === 'error' && (
          <div className={styles.loadError} role="alert">
            <CircleAlert size={18} aria-hidden="true" />
            <p>저장된 후기를 불러오지 못했어요. 브라우저 저장 공간을 확인한 뒤 다시 시도해 주세요.</p>
            <Button variant="secondary" iconLeft={<RotateCcw size={16} aria-hidden="true" />} onClick={retry}>
              다시 불러오기
            </Button>
          </div>
        )}

        {loadState === 'ready' &&
          (visible.length === 0 ? (
            <EmptyState
              icon={<MessageSquarePlus size={22} />}
              title="아직 작성한 후기가 없어요"
              description="가구를 비교해 본 경험을 나눠 주시면 다른 분들의 선택에 도움이 돼요."
              action={<Button onClick={() => quoteRef.current?.focus()}>후기 작성하기</Button>}
            />
          ) : (
            <ul className={styles.grid}>
              {visible.map((t) => (
                <li key={t.id} className={styles.card}>
                  <Quote size={22} className={styles.quoteIcon} aria-hidden="true" />
                  <blockquote className={styles.quote}>
                    <p>{t.quote}</p>
                  </blockquote>
                  {t.result && (
                    <p className={styles.result}>
                      <TrendingUp size={16} aria-hidden="true" />
                      <span className="sr-only">달라진 점: </span>
                      {t.result}
                    </p>
                  )}
                  <div className={styles.meta}>
                    <span className={styles.author}>{t.author}</span>
                    {t.source === 'sample' ? (
                      <Badge>예시 후기</Badge>
                    ) : (
                      <Badge tone="brand">내가 쓴 후기</Badge>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ))}
      </section>

      <TestimonialForm
        quoteRef={quoteRef}
        disabled={loadState !== 'ready'}
        current={userItems}
        onAdded={handleAdded}
      />
    </div>
  )
}

interface FormProps {
  quoteRef: RefObject<HTMLTextAreaElement | null>
  disabled: boolean
  current: Testimonial[]
  onAdded: (next: Testimonial[]) => void
}

function TestimonialForm({ quoteRef, disabled, current, onAdded }: FormProps) {
  const [input, setInput] = useState<TestimonialInput>(EMPTY_INPUT)
  const [errors, setErrors] = useState<TestimonialErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  function update(field: keyof TestimonialInput, value: string) {
    setInput((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    setSaved(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaveError(null)
    const found = validateTestimonial(input)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSubmitting(true)
    const item: Testimonial = {
      id: `user-${Date.now()}`,
      quote: input.quote.trim(),
      author: input.author.trim(),
      result: input.result.trim(),
      source: 'user',
      createdAt: new Date().toISOString(),
    }
    const next = [item, ...current]
    try {
      saveUserTestimonials(next)
      onAdded(next)
      setInput(EMPTY_INPUT)
      setSaved(true)
    } catch {
      setSaveError('후기를 저장하지 못했어요. 브라우저 저장 공간을 확인한 뒤 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section data-feat-id="feat_feat-983bc01b" className={styles.formSection} aria-labelledby="testimonial-form-title">
      <Card tone="muted" className={styles.formCard}>
        <div className={styles.formHead}>
          <h2 id="testimonial-form-title" className={styles.formTitle}>
            내 후기 남기기
          </h2>
          <p className={styles.formDesc}>가구를 비교해 보며 달라진 점을 알려 주세요.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Textarea
            ref={quoteRef}
            id="testimonial-quote"
            label="후기 내용"
            placeholder="예: 매장에 가기 전에 가격을 비교해서 고민이 줄었어요."
            value={input.quote}
            onChange={(e) => update('quote', e.target.value)}
            error={errors.quote}
            hint="10자 이상 300자 이내로 적어 주세요."
            disabled={disabled}
            maxLength={300}
          />
          <div className={styles.row}>
            <Input
              id="testimonial-author"
              label="작성자"
              placeholder="예: 식탁을 찾던 고객"
              value={input.author}
              onChange={(e) => update('author', e.target.value)}
              error={errors.author}
              disabled={disabled}
              maxLength={30}
              autoComplete="nickname"
            />
            <Input
              id="testimonial-result"
              label="달라진 점"
              optional
              placeholder="예: 매장 방문을 한 번으로 줄였어요"
              value={input.result}
              onChange={(e) => update('result', e.target.value)}
              error={errors.result}
              disabled={disabled}
              maxLength={60}
            />
          </div>
          {saveError && (
            <p className={styles.saveError} role="alert">
              <CircleAlert size={16} aria-hidden="true" />
              {saveError}
            </p>
          )}
          <div className={styles.formFooter}>
            <p className={styles.saved} role="status" aria-live="polite">
              {saved && (
                <>
                  <CircleCheck size={16} aria-hidden="true" />
                  후기가 등록되었어요. 목록 맨 앞에서 확인할 수 있어요.
                </>
              )}
            </p>
            <Button type="submit" loading={submitting} disabled={disabled}>
              후기 등록하기
            </Button>
          </div>
        </form>
      </Card>
    </section>
  )
}
