export interface Testimonial {
  id: string
  quote: string
  author: string
  result: string
  /** 기획 예시인지, 방문자가 직접 남긴 후기인지 */
  source: 'sample' | 'user'
}

export type TestimonialInput = Pick<Testimonial, 'quote' | 'author' | 'result'>
export type TestimonialErrors = Partial<Record<keyof TestimonialInput, string>>

/**
 * 예시 후기 — 실사용 데이터가 아니므로 확인되지 않은 수치를 넣지 않고,
 * 화면에서는 "예시" 표시와 함께 보여준다.
 */
export const SAMPLE_TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'sample-1',
    quote:
      '소파를 알아보면서 매장마다 가격이 달라 헷갈렸는데, 한 화면에서 비교하고 나니 어디를 가야 할지 분명해졌어요.',
    author: '신혼 가구 준비 중인 방문자',
    result: '가고 싶은 매장을 미리 정해 방문 횟수를 줄였습니다',
    source: 'sample',
  },
  {
    id: 'sample-2',
    quote:
      '원하는 크기와 예산을 정해 두고 조건에 맞는 책상만 골라 봤어요. 여러 매장을 돌아다니지 않아도 되어 편했습니다.',
    author: '재택근무용 책상을 찾던 방문자',
    result: '조건에 맞는 제품을 방문 전에 결정했습니다',
    source: 'sample',
  },
  {
    id: 'sample-3',
    quote:
      '비슷한 디자인의 식탁이 가격 차이가 꽤 났는데, 비교해 보고 나서야 합리적인 선택이 어떤 건지 알게 됐어요.',
    author: '식탁 교체를 고민하던 방문자',
    result: '비교 후 예산 안에서 만족스러운 제품을 골랐습니다',
    source: 'sample',
  },
]

const STORAGE_KEY = 'furniture-landing.testimonials.v1'

function isTestimonial(value: unknown): value is Testimonial {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    typeof v.id === 'string' &&
    typeof v.quote === 'string' &&
    typeof v.author === 'string' &&
    typeof v.result === 'string'
  )
}

/** 방문자가 남긴 후기를 불러온다. 저장소 오류면 빈 배열과 함께 실패를 알린다. */
export function loadUserTestimonials(): { items: Testimonial[]; failed: boolean } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { items: [], failed: false }
    const parsed: unknown = JSON.parse(raw)
    const items = Array.isArray(parsed)
      ? parsed.filter(isTestimonial).map((t) => ({ ...t, source: 'user' as const }))
      : []
    return { items, failed: false }
  } catch {
    return { items: [], failed: true }
  }
}

/** 저장 성공 여부를 돌려준다. */
export function saveUserTestimonials(items: readonly Testimonial[]): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    return true
  } catch {
    return false
  }
}

const LIMITS = { quote: 200, author: 30, result: 80 } as const

export function validateTestimonial(input: TestimonialInput): TestimonialErrors {
  const errors: TestimonialErrors = {}
  const quote = input.quote.trim()
  const author = input.author.trim()
  const result = input.result.trim()

  if (!quote) errors.quote = '후기 내용을 입력해 주세요.'
  else if (quote.length < 10) errors.quote = '후기는 10자 이상 적어 주세요.'
  else if (quote.length > LIMITS.quote) errors.quote = `후기는 ${LIMITS.quote}자 이내로 적어 주세요.`

  if (!author) errors.author = '작성자를 입력해 주세요.'
  else if (author.length > LIMITS.author) errors.author = `작성자는 ${LIMITS.author}자 이내로 적어 주세요.`

  if (!result) errors.result = '어떤 결과가 있었는지 한 줄로 알려 주세요.'
  else if (result.length > LIMITS.result) errors.result = `결과는 ${LIMITS.result}자 이내로 적어 주세요.`

  return errors
}
