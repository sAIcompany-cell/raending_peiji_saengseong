import clsx from 'clsx'
import { CheckCircle2, CircleAlert, MessageSquareQuote, PenLine, Quote, TriangleAlert } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import {
  SAMPLE_TESTIMONIALS,
  loadUserTestimonials,
  saveUserTestimonials,
  validateTestimonial,
  type Testimonial,
  type TestimonialErrors,
  type TestimonialInput,
} from '../lib/testimonials'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { EmptyState, Skeleton } from './ui/EmptyState'
import { Input, Textarea } from './ui/Field'
import styles from './Testimonials.module.css'

const EMPTY_INPUT: TestimonialInput = { quote: '', author: '', result: '' }

type LoadState = 'loading' | 'ready'

export function Testimonials() {
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [loadFailed, setLoadFailed] = useState(false)
  const [userItems, setUserItems] = useState<Testimonial[]>([])

  const [input, setInput] = useState<TestimonialInput>(EMPTY_INPUT)
  const [errors, setErrors] = useState<TestimonialErrors>({})
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const { items, failed } = loadUserTestimonials()
    setUserItems(items)
    setLoadFailed(failed)
    setLoadState('ready')
  }, [])

  const all: Testimonial[] = [...userItems, ...SAMPLE_TESTIMONIALS]

  const update = (key: keyof TestimonialInput) => (e: { target: { value: string } }) => {
    setInput((prev) => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    setSaved(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaveError(null)
    setSaved(false)

    const nextErrors = validateTestimonial(input)
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors)
      return
    }

    setSaving(true)
    const item: Testimonial = {
      id: `user-${Date.now()}`,
      quote: input.quote.trim(),
      author: input.author.trim(),
      result: input.result.trim(),
      source: 'user',
    }
    const next = [item, ...userItems]
    const ok = saveUserTestimonials(next)
    setSaving(false)

    if (!ok) {
      setSaveError('후기를 저장하지 못했습니다. 브라우저 저장 공간을 확인한 뒤 다시 시도해 주세요.')
      return
    }
    setUserItems(next)
    setInput(EMPTY_INPUT)
    setErrors({})
    setSaved(true)
  }

  return (
    <div className={styles.root}>
      <section className={styles.section} aria-labelledby="testimonials-heading" data-feat-id="feat_feat-ff2f57">
        <div>
          <h2 id="testimonials-heading" className={styles.heading}>
            <MessageSquareQuote size={22} className={styles.headingIcon} aria-hidden="true" />
            이용자 후기
          </h2>
          <p className={styles.lead}>
            매장 가기 전에 가격을 비교하고 방문 부담을 줄인 경험을 모았습니다. 예시 표시가 있는 후기는
            기획 단계의 참고 문구입니다.
          </p>
        </div>

        {loadState === 'loading' ? (
          <div className={styles.grid}>
            {[0, 1, 2].map((i) => (
              <Card key={i}>
                <Skeleton lines={4} label="후기를 불러오는 중" />
              </Card>
            ))}
          </div>
        ) : all.length === 0 ? (
          <EmptyState
            icon={<MessageSquareQuote size={22} />}
            title="아직 등록된 후기가 없습니다"
            description="첫 후기를 남겨 다른 방문자에게 도움을 주세요."
            action={
              <Button variant="secondary" onClick={() => document.getElementById('testimonial-quote')?.focus()}>
                후기 남기기
              </Button>
            }
          />
        ) : (
          <ul className={styles.grid} aria-label="후기 목록">
            {all.map((t) => (
              <li key={t.id}>
                <Card interactive className={styles.card}>
                  <div className={styles.cardTop}>
                    <Quote size={20} className={styles.quoteIcon} aria-hidden="true" />
                    <Badge tone={t.source === 'user' ? 'brand' : 'neutral'}>
                      {t.source === 'user' ? '방문자 후기' : '예시'}
                    </Badge>
                  </div>
                  <blockquote className={styles.quote}>
                    <p>{t.quote}</p>
                  </blockquote>
                  <p className={styles.result}>
                    <CheckCircle2 size={16} className={styles.resultIcon} aria-hidden="true" />
                    {t.result}
                  </p>
                  <p className={styles.author}>— {t.author}</p>
                </Card>
              </li>
            ))}
          </ul>
        )}

        {loadFailed && (
          <p className={clsx(styles.alert, styles.alertWarning)} role="alert">
            <TriangleAlert size={16} aria-hidden="true" />
            저장된 방문자 후기를 불러오지 못했습니다. 예시 후기만 표시합니다.
          </p>
        )}
      </section>

      <section className={styles.section} aria-labelledby="testimonial-form-heading" data-feat-id="feat_feat-983bc01b">
        <div>
          <h2 id="testimonial-form-heading" className={styles.heading}>
            <PenLine size={22} className={styles.headingIcon} aria-hidden="true" />
            후기 남기기
          </h2>
          <p className={styles.lead}>가격 비교나 매장 방문에서 달라진 점을 짧게 알려 주세요. 이 브라우저에만 저장됩니다.</p>
        </div>

        <Card>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Textarea
              id="testimonial-quote"
              label="후기 내용"
              required
              placeholder="예: 매장마다 다른 가격을 한 화면에서 비교하고 나니 어디를 가야 할지 분명해졌어요."
              value={input.quote}
              onChange={update('quote')}
              error={errors.quote}
              hint="10자 이상, 200자 이내"
              maxLength={200}
              disabled={saving}
            />
            <div className={styles.formRow}>
              <Input
                id="testimonial-author"
                label="작성자"
                required
                placeholder="예: 소파를 찾던 방문자"
                value={input.author}
                onChange={update('author')}
                error={errors.author}
                maxLength={30}
                disabled={saving}
              />
              <Input
                id="testimonial-result"
                label="달라진 결과"
                required
                placeholder="예: 방문할 매장을 미리 정했습니다"
                value={input.result}
                onChange={update('result')}
                error={errors.result}
                maxLength={80}
                disabled={saving}
              />
            </div>

            {saveError && (
              <p className={clsx(styles.alert, styles.alertDanger)} role="alert">
                <CircleAlert size={16} aria-hidden="true" />
                {saveError}
              </p>
            )}
            {saved && (
              <p className={clsx(styles.alert, styles.alertSuccess)} role="status">
                <CheckCircle2 size={16} aria-hidden="true" />
                후기가 등록되었습니다. 위 목록에서 확인할 수 있습니다.
              </p>
            )}

            <div className={styles.formActions}>
              <Button type="submit" loading={saving}>
                후기 등록
              </Button>
              <Button
                type="button"
                variant="ghost"
                disabled={saving}
                onClick={() => {
                  setInput(EMPTY_INPUT)
                  setErrors({})
                  setSaveError(null)
                  setSaved(false)
                }}
              >
                지우기
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  )
}
