/**
 * 화면 문구 계약 — 기획에서 확정된 문구를 그대로 담는다.
 * 여기 없는 문구를 화면에서 새로 만들어 채우지 않는다.
 */

export type PointIcon = 'tags' | 'footprints' | 'search' | 'scale' | 'check' | 'sofa' | 'clock'

export interface PointItem {
  id: string
  title: string
  description: string
  icon: PointIcon
}

export const heroContent = {
  headline: '가구 가격, 매장 가기 전에 비교하세요',
  subtitle: '원하는 가구를 합리적으로 비교하고 내게 맞는 제품을 찾아보세요.',
  cta: '무료로 시작하기',
} as const

export const problemContent = {
  headline: '가구 비교, 왜 이렇게 번거로울까요?',
  subtitle: '제품마다 가격을 확인하기 어렵고, 비교하려면 여러 매장을 직접 방문해야 합니다.',
  points: [
    {
      id: 'price',
      title: '한눈에 보기 어려운 가격',
      description:
        '마음에 드는 가구를 찾아도 제품별 가격을 비교하려면 여러 곳을 따로 확인해야 합니다.',
      icon: 'tags',
    },
    {
      id: 'visits',
      title: '계속 늘어나는 매장 방문',
      description:
        '내게 맞는 제품인지 알아보려 여러 매장을 오가는 데 많은 시간과 수고가 듭니다.',
      icon: 'footprints',
    },
  ] satisfies PointItem[],
  continueLabel: '계속',
}

export const serviceContent = {
  headline: '가구 선택, 비교부터 더 간단하게',
  subtitle: '원하는 조건에 맞춰 가격을 비교하고, 나에게 맞는 가구를 찾아보세요.',
  solution: '여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다.',
  points: [
    {
      id: 'find',
      title: '원하는 가구 찾기',
      description: '필요한 가구와 원하는 조건을 기준으로 살펴보세요.',
      icon: 'search',
    },
    {
      id: 'compare',
      title: '가격 비교하기',
      description: '여러 제품의 가격을 한눈에 비교해 보세요.',
      icon: 'scale',
    },
    {
      id: 'choose',
      title: '알맞은 제품 고르기',
      description: '조건과 가격을 함께 살펴보고 나에게 맞는 제품을 선택하세요.',
      icon: 'check',
    },
  ] satisfies PointItem[],
  continueLabel: '계속',
}

export const benefitContent = {
  headline: '가구 비교, 더 간단하게',
  subtitle: '가격부터 필요한 조건까지 살펴보고 나에게 맞는 가구를 찾아보세요.',
  points: [
    {
      id: 'easy-compare',
      title: '가격을 쉽게 비교하세요',
      description: '여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.',
      icon: 'scale',
    },
    {
      id: 'fit',
      title: '내게 맞는 제품을 찾으세요',
      description: '원하는 조건과 가격을 함께 비교해 필요한 가구를 골라보세요.',
      icon: 'sofa',
    },
    {
      id: 'fewer-visits',
      title: '매장 방문을 줄이세요',
      description: '방문 전에 충분히 비교하고 더 편리하게 구매를 결정하세요.',
      icon: 'clock',
    },
  ] satisfies PointItem[],
  continueLabel: '계속',
}

export const finalCtaContent = {
  headline: '내게 맞는 가구, 합리적인 비교에서 시작하세요',
  subtitle: '원하는 가구를 편리하게 비교하고 매장 방문의 번거로움을 줄여보세요.',
  cta: '기획안 만들기',
} as const

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const DEFAULT_FAQ: readonly FaqItem[] = [
  {
    id: 'what',
    question: '어떤 가구를 비교할 수 있나요?',
    answer: '필요한 가구와 원하는 조건을 기준으로 여러 제품의 가격을 한눈에 살펴볼 수 있습니다.',
  },
  {
    id: 'cost',
    question: '이용하는 데 비용이 드나요?',
    answer: '무료로 시작할 수 있습니다. 시작하기 버튼을 누르면 바로 비교를 시작할 수 있습니다.',
  },
  {
    id: 'visit',
    question: '매장에 직접 가지 않아도 되나요?',
    answer:
      '방문 전에 가격과 조건을 충분히 비교할 수 있어, 꼭 필요한 매장만 방문하도록 돕습니다.',
  },
]
