/** Testimonial 엔티티 (quote · author · result) — localStorage 로 모의한다. */
export interface Testimonial {
  id: string
  quote: string
  author: string
  result: string
  source: 'sample' | 'user'
  createdAt: string
}

const KEY = 'gagu-compare.testimonials.v1'

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'sample-1',
    quote: '매장에 가기 전에 소파 가격을 먼저 비교해 보니, 어느 매장을 가야 할지 바로 정할 수 있었어요.',
    author: '소파 구매를 준비하던 고객',
    result: '방문할 매장을 미리 정했어요',
    source: 'sample',
    createdAt: '',
  },
  {
    id: 'sample-2',
    quote: '여러 곳을 따로 찾아보던 수고가 줄었어요. 원하는 조건으로 모아 보니 선택이 훨씬 쉬웠습니다.',
    author: '신혼 가구를 알아보던 고객',
    result: '가격 확인에 드는 수고를 줄였어요',
    source: 'sample',
    createdAt: '',
  },
  {
    id: 'sample-3',
    quote: '매장을 여러 번 오가지 않고도 예산에 맞는 책상을 고를 수 있었어요.',
    author: '재택근무용 책상을 찾던 고객',
    result: '매장 방문 부담을 덜었어요',
    source: 'sample',
    createdAt: '',
  },
]

export function loadUserTestimonials(): Testimonial[] {
  const raw = window.localStorage.getItem(KEY)
  if (!raw) return []
  const parsed: unknown = JSON.parse(raw)
  return Array.isArray(parsed) ? (parsed as Testimonial[]) : []
}

export function saveUserTestimonials(list: Testimonial[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list))
}

export interface TestimonialInput {
  quote: string
  author: string
  result: string
}

export type TestimonialErrors = Partial<Record<keyof TestimonialInput, string>>

export function validateTestimonial(input: TestimonialInput): TestimonialErrors {
  const errors: TestimonialErrors = {}
  const quote = input.quote.trim()
  if (!quote) errors.quote = '후기 내용을 입력해 주세요.'
  else if (quote.length < 10) errors.quote = '후기 내용을 10자 이상 적어 주세요.'
  else if (quote.length > 300) errors.quote = '후기 내용은 300자 이내로 적어 주세요.'
  const author = input.author.trim()
  if (!author) errors.author = '작성자 이름을 입력해 주세요.'
  else if (author.length > 30) errors.author = '작성자 이름은 30자 이내로 적어 주세요.'
  if (input.result.trim().length > 60) errors.result = '달라진 점은 60자 이내로 적어 주세요.'
  return errors
}
