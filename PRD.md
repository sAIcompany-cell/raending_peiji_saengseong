<!-- node: scope:index | path: docs/ssot/index.md -->
# SSOT 지도 — 랜딩 페이지 생성

자동 생성 매니페스트. 하위 문서 노드가 하나라도 바뀌면 이 문서의 해시도 함께 바뀐다.

- 노드 21개 · 엣지 150개 (필수 126 / 조건부 24)

## 노드 목록
| 노드 | 종류 | 제목 | 문서 | 해시 |
| --- | --- | --- | --- | --- |
| `feature:cta` | feature | CTA 버튼 클릭 | `docs/ssot/features/cta.md` | `b4d77a31` |
| `feature:cta-2` | feature | 방문 및 CTA 클릭 이벤트 측정 | `docs/ssot/features/cta.md` | `53f4745b` |
| `feature:fe253b445` | feature | 상단 로고 표시 | `docs/ssot/features/fe253b445.md` | `0f382068` |
| `feature:pc` | feature | 모바일/PC 반응형 지원 | `docs/ssot/features/pc.md` | `a35919e5` |
| `feature:screen-ff2f57` | feature | 사용자 후기 섹션 | `docs/ssot/features/screen-ff2f57.md` | `c2ca819a` |
| `feature:seo` | feature | 기본 SEO 메타 태그 적용 | `docs/ssot/features/seo.md` | `1e90c49e` |
| `scope:auth` | scope/auth | 인증·권한 | `docs/ssot/scope/auth.md` | `8a034c30` |
| `scope:constraint:do-not` | scope/constraint | 금지 규칙 (do not) | `docs/ssot/scope/do-not.md` | `ba05112a` |
| `scope:entity:analyticsevent` | scope/entity | 데이터 — AnalyticsEvent | `docs/ssot/scope/entity-analyticsevent.md` | `49a0aba8` |
| `scope:entity:landingpagesection` | scope/entity | 데이터 — LandingPageSection | `docs/ssot/scope/entity-landingpagesection.md` | `13301cf9` |
| `scope:entity:testimonial` | scope/entity | 데이터 — Testimonial | `docs/ssot/scope/entity-testimonial.md` | `955f10d6` |
| `scope:i18n` | scope/i18n | 다국어(i18n) | `docs/ssot/scope/i18n.md` | `4aaa7a6e` |
| `scope:integration:mcp` | scope/integration | 연동 — mcp | `docs/ssot/scope/integration-mcp.md` | `0be01467` |
| `scope:integration:oauth` | scope/integration | 연동 — oauth | `docs/ssot/scope/integration-oauth.md` | `9a175631` |
| `scope:integration:payment` | scope/integration | 연동 — payment | `docs/ssot/scope/integration-payment.md` | `e8d78a62` |
| `scope:page:cta` | scope/page | 화면 — 최종 CTA 섹션 | `docs/ssot/scope/page-cta.md` | `abd2d671` |
| `scope:page:hero` | scope/page | 화면 — Hero 섹션 | `docs/ssot/scope/page-hero.md` | `5f368a46` |
| `scope:page:screen` | scope/page | 화면 — 문제 제시 섹션 | `docs/ssot/scope/page-screen.md` | `8a83f3e2` |
| `scope:page:screen-2` | scope/page | 화면 — 서비스 소개 섹션 | `docs/ssot/scope/page-screen-2.md` | `bfefeef0` |
| `scope:page:screen-3` | scope/page | 화면 — 핵심 장점 섹션 | `docs/ssot/scope/page-screen-3.md` | `590ed693` |
| `scope:product` | scope/product | 제품 정의 — 랜딩 페이지 생성 | `docs/ssot/scope/product.md` | `80cbc1a1` |

## 의존성 요약
- `doc_implemented_by`: 6
- `feature_needs_auth_scope`: 6
- `feature_uses_mcp`: 6
- `feature_uses_oauth`: 1
- `feature_uses_payment`: 6
- `index_lists_node`: 50
- `module_imports`: 70
- `page_needs_i18n`: 5

## 조건부 참조 조건
- `feature:cta-2` → `scope:auth` : `auth.required == true`
- `feature:cta-2` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:cta-2` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `feature:cta` → `scope:auth` : `auth.required == true`
- `feature:cta` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:cta` → `scope:integration:oauth` : `integrations.oauth.enabled == true`
- `feature:cta` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `feature:fe253b445` → `scope:auth` : `auth.required == true`
- `feature:fe253b445` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:fe253b445` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `feature:pc` → `scope:auth` : `auth.required == true`
- `feature:pc` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:pc` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `feature:screen-ff2f57` → `scope:auth` : `auth.required == true`
- `feature:screen-ff2f57` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:screen-ff2f57` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `feature:seo` → `scope:auth` : `auth.required == true`
- `feature:seo` → `scope:integration:mcp` : `integrations.mcp.enabled == true`
- `feature:seo` → `scope:integration:payment` : `integrations.payment.enabled == true`
- `scope:page:cta` → `scope:i18n` : `len(locales) >= 2`
- `scope:page:hero` → `scope:i18n` : `len(locales) >= 2`
- `scope:page:screen-2` → `scope:i18n` : `len(locales) >= 2`
- `scope:page:screen-3` → `scope:i18n` : `len(locales) >= 2`
- `scope:page:screen` → `scope:i18n` : `len(locales) >= 2`

## 코드 레이어

- 모듈 29개 · import 엣지 70개 · 공개 심볼 72개
- 코드 지문: `619cb65b3da281b1` (전 모듈 시그니처 해시를 접은 값 — 모듈 하나만 바뀌어도 이 값이 바뀐다)

### 공용 허브 모듈 (fan-in 상위 8개)
| 모듈 | fan-in | 심볼 | 해시 |
| --- | --- | --- | --- |
| `src/lib/router.ts` | 9 | 11 | `1bcf16b1` |
| `src/lib/content.ts` | 7 | 8 | `d4fc17c5` |
| `src/components/ui/Button.tsx` | 6 | 1 | `21ac9233` |
| `src/components/ScreenShell.tsx` | 5 | 1 | `40f332fc` |
| `src/components/Visual.tsx` | 5 | 2 | `73576f5b` |
| `src/components/SiteInfo.tsx` | 4 | 3 | `57c337b0` |
| `src/components/ui/EmptyState.tsx` | 4 | 2 | `c1244461` |
| `src/lib/analytics.ts` | 4 | 14 | `87653306` |

# SSOT 기획 컨텍스트 (코드 생성 입력)

- 대상 노드: 50개 (추정 3695 토큰)
- 변경 노드(seed): feature:cta, feature:cta-2, feature:fe253b445, feature:pc, feature:screen-ff2f57, feature:seo, scope:index

## 의존성 (읽어야 하는 이유)
- `feature:cta` → `scope:module:src/components/CtaButton.tsx` (mandatory/doc_implemented_by)
- `feature:cta-2` → `scope:module:src/components/SiteInfo.tsx` (mandatory/doc_implemented_by)
- `feature:fe253b445` → `scope:module:src/components/SiteHeader.tsx` (mandatory/doc_implemented_by)
- `feature:pc` → `scope:module:src/components/SiteInfo.tsx` (mandatory/doc_implemented_by)
- `feature:screen-ff2f57` → `scope:module:src/components/Testimonials.tsx` (mandatory/doc_implemented_by)
- `feature:seo` → `scope:module:src/components/SiteInfo.tsx` (mandatory/doc_implemented_by)
- `scope:index` → `scope:module:src/components/ui/Badge.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ui/Button.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ui/Card.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ui/EmptyState.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ui/Field.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/lib/analytics.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/lib/content.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/lib/router.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/lib/seo.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/lib/testimonials.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/main.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/Benefits.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/FinalCta.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/Hero.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/NotFound.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/Problem.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/Service.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/pages/Start.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:vite.config.ts` (mandatory/index_lists_node)
- `scope:index` → `feature:screen-ff2f57` (mandatory/index_lists_node)
- `scope:index` → `feature:cta` (mandatory/index_lists_node)
- `scope:index` → `feature:cta-2` (mandatory/index_lists_node)
- `scope:index` → `scope:page:hero` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen` (mandatory/index_lists_node)
- `scope:index` → `scope:product` (mandatory/index_lists_node)
- `scope:index` → `scope:constraint:do-not` (mandatory/index_lists_node)
- `scope:index` → `scope:auth` (mandatory/index_lists_node)
- `scope:index` → `scope:integration:payment` (mandatory/index_lists_node)
- `scope:index` → `scope:integration:oauth` (mandatory/index_lists_node)
- `scope:index` → `scope:integration:mcp` (mandatory/index_lists_node)
- `scope:index` → `scope:entity:landingpagesection` (mandatory/index_lists_node)
- `scope:index` → `scope:entity:testimonial` (mandatory/index_lists_node)
- `scope:index` → `scope:entity:analyticsevent` (mandatory/index_lists_node)
- `scope:index` → `feature:fe253b445` (mandatory/index_lists_node)
- `scope:index` → `feature:pc` (mandatory/index_lists_node)
- `scope:index` → `scope:i18n` (mandatory/index_lists_node)
- `scope:index` → `feature:seo` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen-2` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen-3` (mandatory/index_lists_node)
- `scope:index` → `scope:page:cta` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/App.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ContinueButton.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/CtaButton.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/FaqList.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/PointList.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/ScreenShell.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/SiteHeader.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/SiteInfo.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/Testimonials.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:src/components/Visual.tsx` (mandatory/index_lists_node)
- `scope:module:src/components/CtaButton.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/components/CtaButton.tsx` → `scope:module:src/lib/analytics.ts` (mandatory/module_imports)
- `scope:module:src/components/CtaButton.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/components/ui/Badge.tsx` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/components/ui/Card.tsx` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/components/ui/EmptyState.tsx` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/lib/analytics.ts` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/components/SiteInfo.tsx` → `scope:module:src/lib/seo.ts` (mandatory/module_imports)
- `scope:module:src/components/SiteHeader.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/components/SiteHeader.tsx` → `scope:module:src/lib/seo.ts` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/components/ui/Badge.tsx` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/components/ui/Card.tsx` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/components/ui/EmptyState.tsx` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/components/ui/Field.tsx` (mandatory/module_imports)
- `scope:module:src/components/Testimonials.tsx` → `scope:module:src/lib/testimonials.ts` (mandatory/module_imports)
- `scope:module:src/lib/seo.ts` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/main.tsx` → `scope:module:src/App.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Benefits.tsx` → `scope:module:src/components/ContinueButton.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Benefits.tsx` → `scope:module:src/components/PointList.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Benefits.tsx` → `scope:module:src/components/ScreenShell.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Benefits.tsx` → `scope:module:src/components/Visual.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Benefits.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/pages/FinalCta.tsx` → `scope:module:src/components/CtaButton.tsx` (mandatory/module_imports)
- `scope:module:src/pages/FinalCta.tsx` → `scope:module:src/components/ScreenShell.tsx` (mandatory/module_imports)
- `scope:module:src/pages/FinalCta.tsx` → `scope:module:src/components/Testimonials.tsx` (mandatory/module_imports)
- `scope:module:src/pages/FinalCta.tsx` → `scope:module:src/components/Visual.tsx` (mandatory/module_imports)
- `scope:module:src/pages/FinalCta.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/pages/Hero.tsx` → `scope:module:src/components/CtaButton.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Hero.tsx` → `scope:module:src/components/FaqList.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Hero.tsx` → `scope:module:src/components/ScreenShell.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Hero.tsx` → `scope:module:src/components/Visual.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Hero.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/pages/NotFound.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/pages/NotFound.tsx` → `scope:module:src/components/ui/EmptyState.tsx` (mandatory/module_imports)
- `scope:module:src/pages/NotFound.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/pages/Problem.tsx` → `scope:module:src/components/ContinueButton.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Problem.tsx` → `scope:module:src/components/PointList.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Problem.tsx` → `scope:module:src/components/ScreenShell.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Problem.tsx` → `scope:module:src/components/Visual.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Problem.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/pages/Service.tsx` → `scope:module:src/components/ContinueButton.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Service.tsx` → `scope:module:src/components/PointList.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Service.tsx` → `scope:module:src/components/ScreenShell.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Service.tsx` → `scope:module:src/components/Visual.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Service.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/components/SiteInfo.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/components/ui/Card.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/components/ui/EmptyState.tsx` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/lib/analytics.ts` (mandatory/module_imports)
- `scope:module:src/pages/Start.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/components/SiteHeader.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/lib/analytics.ts` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/lib/seo.ts` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/Benefits.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/FinalCta.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/Hero.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/NotFound.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/Problem.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/Service.tsx` (mandatory/module_imports)
- `scope:module:src/App.tsx` → `scope:module:src/pages/Start.tsx` (mandatory/module_imports)
- `scope:module:src/components/ContinueButton.tsx` → `scope:module:src/components/ui/Button.tsx` (mandatory/module_imports)
- `scope:module:src/components/ContinueButton.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)
- `scope:module:src/components/FaqList.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/components/PointList.tsx` → `scope:module:src/lib/content.ts` (mandatory/module_imports)
- `scope:module:src/components/ScreenShell.tsx` → `scope:module:src/lib/router.ts` (mandatory/module_imports)

## 참조하지 않는 조건부 문서 (조건 미충족)
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:oauth` — `integrations.oauth.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:auth` — `auth.required == true` 미충족
- `scope:integration:payment` — `integrations.payment.enabled == true` 미충족
- `scope:integration:mcp` — `integrations.mcp.enabled == true` 미충족
- `scope:i18n` — `len(locales) >= 2` 미충족
- `scope:i18n` — `len(locales) >= 2` 미충족
- `scope:i18n` — `len(locales) >= 2` 미충족
- `scope:i18n` — `len(locales) >= 2` 미충족
- `scope:i18n` — `len(locales) >= 2` 미충족

## 문서 노드

<!-- node: feature:cta | path: docs/ssot/features/cta.md -->
# 기능 — CTA 버튼 클릭

- id: `fd60f2b56`
- 우선순위: must
- english_key: `cta`

## 요약
CTA 클릭 시 회원가입 또는 서비스 시작 페이지로 이동한다.

## 동작·반응
(미정)

## 요구사항
- 랜딩페이지에서 CTA를 선택하면 지정된 회원가입 또는 서비스 시작 페이지로 이동해야 한다.
- CTA 선택 시 잘못된 목적지, 오류 페이지 또는 빈 페이지로 이동하지 않아야 한다.
- 모바일과 PC에서 CTA를 선택할 수 있고 이동 동작이 정상적으로 수행되어야 한다.
- CTA 이동 과정에서 사용자가 다음 단계의 목적을 이해할 수 있도록 대상 페이지가 일관된 서비스 맥락을 유지해야 한다.
- CTA 버튼 클릭 내용을 표시한다

## 체크리스트
- [ ] 랜딩페이지에서 CTA를 선택하면 지정된 회원가입 또는 서비스 시작 페이지로 이동해야 한다.
- [ ] CTA 선택 시 잘못된 목적지, 오류 페이지 또는 빈 페이지로 이동하지 않아야 한다.
- [ ] 모바일과 PC에서 CTA를 선택할 수 있고 이동 동작이 정상적으로 수행되어야 한다.
- [ ] CTA 이동 과정에서 사용자가 다음 단계의 목적을 이해할 수 있도록 대상 페이지가 일관된 서비스 맥락을 유지해야 한다.
- [ ] CTA 버튼 클릭 내용을 표시한다

<!-- node: feature:cta-2 | path: docs/ssot/features/cta.md -->
# 기능 — 방문 및 CTA 클릭 이벤트 측정

- id: `fb0d21267`
- 우선순위: must
- english_key: `cta`

## 요약
방문 및 CTA 클릭 이벤트를 측정한다.

## 동작·반응
(미정)

## 요구사항
- 랜딩페이지 방문이 발생할 때 방문 이벤트가 기록되어야 한다.
- CTA가 선택될 때 CTA 클릭 이벤트가 기록되어야 한다.
- 방문 이벤트와 CTA 클릭 이벤트가 서로 구분되고 동일한 기준으로 집계되어야 한다.
- 이벤트 측정 오류가 페이지 표시나 CTA 이동을 방해하지 않아야 한다.

## 체크리스트
- [ ] 랜딩페이지 방문이 발생할 때 방문 이벤트가 기록되어야 한다.
- [ ] CTA가 선택될 때 CTA 클릭 이벤트가 기록되어야 한다.
- [ ] 방문 이벤트와 CTA 클릭 이벤트가 서로 구분되고 동일한 기준으로 집계되어야 한다.
- [ ] 이벤트 측정 오류가 페이지 표시나 CTA 이동을 방해하지 않아야 한다.

<!-- node: feature:fe253b445 | path: docs/ssot/features/fe253b445.md -->
# 기능 — 상단 로고 표시

- id: `fe253b445`
- 우선순위: must
- english_key: `fe253b445`

## 요약
페이지 상단에 로고를 표시한다.

## 동작·반응
(미정)

## 요구사항
- 페이지 상단에서 로고가 항상 노출되어야 한다.
- 로고가 다양한 화면 크기와 브라우저 환경에서 잘리지 않거나 왜곡되지 않아야 한다.
- 로고 클릭 시 랜딩페이지의 시작 위치 또는 서비스 대표 페이지로 정상 이동해야 한다.

## 체크리스트
- [ ] 페이지 상단에서 로고가 항상 노출되어야 한다.
- [ ] 로고가 다양한 화면 크기와 브라우저 환경에서 잘리지 않거나 왜곡되지 않아야 한다.
- [ ] 로고 클릭 시 랜딩페이지의 시작 위치 또는 서비스 대표 페이지로 정상 이동해야 한다.

<!-- node: feature:pc | path: docs/ssot/features/pc.md -->
# 기능 — 모바일/PC 반응형 지원

- id: `fd435a7f2`
- 우선순위: must
- english_key: `pc`

## 요약
모바일과 PC 환경 모두에서 정상적으로 표시된다.

## 동작·반응
(미정)

## 요구사항
- 랜딩페이지의 콘텐츠와 CTA가 모바일 및 PC 화면에서 읽고 사용할 수 있는 상태로 표시되어야 한다.
- 화면 너비가 변경되어도 텍스트, 이미지, 버튼이 겹치거나 화면 밖으로 잘리지 않아야 한다.
- 모바일과 PC에서 페이지의 핵심 콘텐츠 및 CTA 노출 순서가 서비스 이해 흐름에 맞게 유지되어야 한다.
- 지원 대상 주요 브라우저에서 페이지가 정상적으로 로드되고 상호작용이 동작해야 한다.
- 모바일/PC 반응형 지원 내용을 표시한다

## 체크리스트
- [ ] 랜딩페이지의 콘텐츠와 CTA가 모바일 및 PC 화면에서 읽고 사용할 수 있는 상태로 표시되어야 한다.
- [ ] 화면 너비가 변경되어도 텍스트, 이미지, 버튼이 겹치거나 화면 밖으로 잘리지 않아야 한다.
- [ ] 모바일과 PC에서 페이지의 핵심 콘텐츠 및 CTA 노출 순서가 서비스 이해 흐름에 맞게 유지되어야 한다.
- [ ] 지원 대상 주요 브라우저에서 페이지가 정상적으로 로드되고 상호작용이 동작해야 한다.
- [ ] 모바일/PC 반응형 지원 내용을 표시한다

<!-- node: feature:screen-ff2f57 | path: docs/ssot/features/screen-ff2f57.md -->
# 기능 — 사용자 후기 섹션

- id: `feat-ff2f57`
- 우선순위: must
- english_key: `screen-ff2f57`

## 요약
실제 사용자의 긍정적인 평가와 결과를 시각적으로 표시하여 신뢰도를 높인다.

## 동작·반응
(미정)

## 요구사항
- 사용자 후기 섹션에 실제 사용자 경험을 나타내는 평가와 구체적인 결과가 표시되어야 한다.
- 후기 내용이 가구 가격 비교 또는 매장 방문 부담을 줄인 경험과 연결되어야 한다.
- 후기 섹션의 텍스트와 시각 자료가 모바일 및 PC에서 식별 가능하게 표시되어야 한다.
- 후기 콘텐츠가 페이지 로드 시 오류 없이 표시되고, 누락되거나 깨진 이미지가 없어야 한다.

## 체크리스트
- [ ] 사용자 후기 섹션에 실제 사용자 경험을 나타내는 평가와 구체적인 결과가 표시되어야 한다.
- [ ] 후기 내용이 가구 가격 비교 또는 매장 방문 부담을 줄인 경험과 연결되어야 한다.
- [ ] 후기 섹션의 텍스트와 시각 자료가 모바일 및 PC에서 식별 가능하게 표시되어야 한다.
- [ ] 후기 콘텐츠가 페이지 로드 시 오류 없이 표시되고, 누락되거나 깨진 이미지가 없어야 한다.

<!-- node: feature:seo | path: docs/ssot/features/seo.md -->
# 기능 — 기본 SEO 메타 태그 적용

- id: `f69e65664`
- 우선순위: must
- english_key: `seo`

## 요약
기본 SEO 메타 태그를 페이지에 적용한다.

## 동작·반응
(미정)

## 요구사항
- 페이지에 서비스 내용을 설명하는 고유한 제목 메타 태그가 설정되어야 한다.
- 페이지에 서비스와 주요 제공 가치를 요약하는 메타 설명이 설정되어야 한다.
- 검색 엔진이 랜딩페이지의 대표 URL을 일관되게 인식할 수 있어야 한다.
- 페이지의 언어와 기본 검색 노출 관련 설정이 실제 랜딩페이지 콘텐츠와 일치해야 한다.

## 체크리스트
- [ ] 페이지에 서비스 내용을 설명하는 고유한 제목 메타 태그가 설정되어야 한다.
- [ ] 페이지에 서비스와 주요 제공 가치를 요약하는 메타 설명이 설정되어야 한다.
- [ ] 검색 엔진이 랜딩페이지의 대표 URL을 일관되게 인식할 수 있어야 한다.
- [ ] 페이지의 언어와 기본 검색 노출 관련 설정이 실제 랜딩페이지 콘텐츠와 일치해야 한다.

<!-- node: scope:module:src/components/CtaButton.tsx | path: src/components/CtaButton.tsx -->
# 코드 모듈 — `src/components/CtaButton.tsx`

## 함수
- `function CtaButton`

## 내부 의존
- `src/components/ui/Button.tsx`
- `src/lib/analytics.ts`
- `src/lib/router.ts`

<!-- node: scope:module:src/components/SiteInfo.tsx | path: src/components/SiteInfo.tsx -->
# 코드 모듈 — `src/components/SiteInfo.tsx`

## 함수
- `function AnalyticsSummary`
- `function ResponsiveSupportList`
- `function SeoMetaList`

## 내부 의존
- `src/components/ui/Badge.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/lib/analytics.ts`
- `src/lib/router.ts`
- `src/lib/seo.ts`

<!-- node: scope:module:src/components/SiteHeader.tsx | path: src/components/SiteHeader.tsx -->
# 코드 모듈 — `src/components/SiteHeader.tsx`

## 함수
- `function SiteHeader`

## 내부 의존
- `src/lib/router.ts`
- `src/lib/seo.ts`

<!-- node: scope:module:src/components/Testimonials.tsx | path: src/components/Testimonials.tsx -->
# 코드 모듈 — `src/components/Testimonials.tsx`

## 함수
- `function Testimonials`

## 내부 의존
- `src/components/ui/Badge.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/components/ui/Field.tsx`
- `src/lib/testimonials.ts`

<!-- node: scope:module:src/components/ui/Badge.tsx | path: src/components/ui/Badge.tsx -->
# 코드 모듈 — `src/components/ui/Badge.tsx`

## 함수
- `function Badge`

## 내부 의존
- (없음)

<!-- node: scope:module:src/components/ui/Button.tsx | path: src/components/ui/Button.tsx -->
# 코드 모듈 — `src/components/ui/Button.tsx`

## 함수
- `function Button`

## 내부 의존
- (없음)

<!-- node: scope:module:src/components/ui/Card.tsx | path: src/components/ui/Card.tsx -->
# 코드 모듈 — `src/components/ui/Card.tsx`

## 함수
- `function Card`

## 내부 의존
- (없음)

<!-- node: scope:module:src/components/ui/EmptyState.tsx | path: src/components/ui/EmptyState.tsx -->
# 코드 모듈 — `src/components/ui/EmptyState.tsx`

## 함수
- `function EmptyState`
- `function Skeleton`

## 내부 의존
- (없음)

<!-- node: scope:module:src/components/ui/Field.tsx | path: src/components/ui/Field.tsx -->
# 코드 모듈 — `src/components/ui/Field.tsx`

## 함수
- `function Input`
- `function Textarea`

## 내부 의존
- (없음)

<!-- node: scope:module:src/lib/analytics.ts | path: src/lib/analytics.ts -->
# 코드 모듈 — `src/lib/analytics.ts`

## 함수
- `function getEvents`
- `function recordEvent`
- `function recordPageView`
- `function recordCtaClick`
- `function getLastCtaClick`
- `function clearEvents`
- `function summarizeEvents`
- `function isStorageFailed`
- `function useAnalyticsEvents`

## 공개 상수 · 심볼
- `AnalyticsEventName`
- `AnalyticsEvent`
- `AnalyticsPageStat`
- `AnalyticsSummaryData`
- `LastCtaClick`

## 내부 의존
- (없음)

<!-- node: scope:module:src/lib/content.ts | path: src/lib/content.ts -->
# 코드 모듈 — `src/lib/content.ts`

## 공개 상수 · 심볼
- `PointItem`
- `heroContent`
- `problemContent`
- `serviceContent`
- `benefitContent`
- `finalCtaContent`
- `FaqItem`
- `DEFAULT_FAQ`

## 내부 의존
- (없음)

<!-- node: scope:module:src/lib/router.ts | path: src/lib/router.ts -->
# 코드 모듈 — `src/lib/router.ts`

## 함수
- `function isRouteId`
- `function parseHash`
- `function routePath`
- `function navigate`
- `function getScreenStep`
- `function navLabelOf`
- `function useRoute`

## 공개 상수 · 심볼
- `ScreenId`
- `RouteId`
- `ScreenMeta`
- `SCREEN_ORDER`

## 내부 의존
- (없음)

<!-- node: scope:module:src/lib/seo.ts | path: src/lib/seo.ts -->
# 코드 모듈 — `src/lib/seo.ts`

## 함수
- `function applySeo`
- `function readSeoMeta`

## 공개 상수 · 심볼
- `SITE_NAME`
- `SITE_DESCRIPTION`
- `SeoMetaItem`

## 내부 의존
- `src/lib/router.ts`

<!-- node: scope:module:src/lib/testimonials.ts | path: src/lib/testimonials.ts -->
# 코드 모듈 — `src/lib/testimonials.ts`

## 함수
- `function loadUserTestimonials`
- `function saveUserTestimonials`
- `function validateTestimonial`

## 공개 상수 · 심볼
- `Testimonial`
- `SAMPLE_TESTIMONIALS`
- `TestimonialInput`
- `TestimonialErrors`

## 내부 의존
- (없음)

<!-- node: scope:module:src/main.tsx | path: src/main.tsx -->
# 코드 모듈 — `src/main.tsx`

## 내부 의존
- `src/App.tsx`

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:src/pages/Benefits.tsx | path: src/pages/Benefits.tsx -->
# 코드 모듈 — `src/pages/Benefits.tsx`

## 함수
- `function BenefitsPage`

## 내부 의존
- `src/components/ContinueButton.tsx`
- `src/components/PointList.tsx`
- `src/components/ScreenShell.tsx`
- `src/components/Visual.tsx`
- `src/lib/content.ts`

<!-- node: scope:module:src/pages/FinalCta.tsx | path: src/pages/FinalCta.tsx -->
# 코드 모듈 — `src/pages/FinalCta.tsx`

## 함수
- `function FinalCtaPage`

## 내부 의존
- `src/components/CtaButton.tsx`
- `src/components/ScreenShell.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Visual.tsx`
- `src/lib/content.ts`

<!-- node: scope:module:src/pages/Hero.tsx | path: src/pages/Hero.tsx -->
# 코드 모듈 — `src/pages/Hero.tsx`

## 함수
- `function HeroPage`

## 내부 의존
- `src/components/CtaButton.tsx`
- `src/components/FaqList.tsx`
- `src/components/ScreenShell.tsx`
- `src/components/Visual.tsx`
- `src/lib/content.ts`

<!-- node: scope:module:src/pages/NotFound.tsx | path: src/pages/NotFound.tsx -->
# 코드 모듈 — `src/pages/NotFound.tsx`

## 함수
- `function NotFoundPage`

## 내부 의존
- `src/components/ui/Button.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/lib/router.ts`

<!-- node: scope:module:src/pages/Problem.tsx | path: src/pages/Problem.tsx -->
# 코드 모듈 — `src/pages/Problem.tsx`

## 함수
- `function ProblemPage`

## 내부 의존
- `src/components/ContinueButton.tsx`
- `src/components/PointList.tsx`
- `src/components/ScreenShell.tsx`
- `src/components/Visual.tsx`
- `src/lib/content.ts`

<!-- node: scope:module:src/pages/Service.tsx | path: src/pages/Service.tsx -->
# 코드 모듈 — `src/pages/Service.tsx`

## 함수
- `function ServicePage`

## 내부 의존
- `src/components/ContinueButton.tsx`
- `src/components/PointList.tsx`
- `src/components/ScreenShell.tsx`
- `src/components/Visual.tsx`
- `src/lib/content.ts`

<!-- node: scope:module:src/pages/Start.tsx | path: src/pages/Start.tsx -->
# 코드 모듈 — `src/pages/Start.tsx`

## 함수
- `function StartPage`

## 내부 의존
- `src/components/SiteInfo.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/lib/analytics.ts`
- `src/lib/router.ts`

<!-- node: scope:module:vite.config.ts | path: vite.config.ts -->
# 코드 모듈 — `vite.config.ts`

## 내부 의존
- (없음)

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:page:hero | path: docs/ssot/scope/page-hero.md -->
# 화면 — Hero 섹션

- route: `/hero`
- 소속 기능: `(공통)`

## 목적
핵심 가치 제안과 무료로 시작하기 CTA 버튼 표시

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:page:screen | path: docs/ssot/scope/page-screen.md -->
# 화면 — 문제 제시 섹션

- route: `/screen`
- 소속 기능: `(공통)`

## 목적
사용자가 겪는 문제를 제시하여 공감 유도

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:product | path: docs/ssot/scope/product.md -->
# 제품 정의 — 랜딩 페이지 생성

## 한 줄 정의
방문자가 서비스를 빠르게 이해하고 CTA 버튼을 눌러 신청/문의까지 이어지게 하는 랜딩페이지

## 대상 사용자
- 가구 구매 예정 소비자
- 가구 가격 비교 고객
- 매장 방문이 번거로운 사람

## 범위 밖 (out of scope)
- (미정)

## 실행 환경
- device_target: web_app
- 디자인 톤: 신뢰형 클린

## 기술 스택
- frontend: Next.js, TypeScript, Tailwind CSS
- backend: 없음
- database: 없음
- deployment: 정적 호스팅을 고려한 빌드 구성, 프로덕션 배포는 제외

<!-- node: scope:constraint:do-not | path: docs/ssot/scope/do-not.md -->
# 작동 범위 — 금지 규칙 (do not)

- 요구사항에 없는 기능·화면·API를 임의로 추가하지 않는다.
- 확인되지 않은 수치·날짜·전망을 사실처럼 쓰지 않는다.
- 프로덕션 배포·실서비스 도메인 연결은 명시적 요청 없이 구현하지 않는다.
- API 키·시크릿·PG 키는 코드에 하드코딩하지 않고 환경변수(.env)로만 참조한다.

## 범위 밖
- (미정)

<!-- node: scope:auth | path: docs/ssot/scope/auth.md -->
# 작동 범위 — 인증·권한

- 로그인 필요: False
- 인증 수단: none
- 역할: user

<!-- node: scope:integration:payment | path: docs/ssot/scope/integration-payment.md -->
# 작동 범위 — 결제 연동

- 활성화: False
- provider: undecided
- 모드: (미정)
- 웹훅 필요: False
- 샌드박스 우선: False
- 환경변수: (미정)

## 흐름
(미정)

<!-- node: scope:integration:oauth | path: docs/ssot/scope/integration-oauth.md -->
# 작동 범위 — 소셜 로그인(OAuth)

- 활성화: False
- providers: (미정)
- 콜백 패턴: ``
- 환경변수: (미정)

## 흐름
(미정)

<!-- node: scope:integration:mcp | path: docs/ssot/scope/integration-mcp.md -->
# 작동 범위 — MCP 연동

- 활성화: False
- servers: (미정)

## 비고
(없음)

<!-- node: scope:entity:landingpagesection | path: docs/ssot/scope/entity-landingpagesection.md -->
# 데이터 — LandingPageSection

(설명 미작성)

| 필드 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| id | string | 선택 |  |
| type | string | 선택 |  |
| title | string | 선택 |  |
| content | string | 선택 |  |
| order | number | 선택 |  |

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:entity:testimonial | path: docs/ssot/scope/entity-testimonial.md -->
# 데이터 — Testimonial

(설명 미작성)

| 필드 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| id | string | 선택 |  |
| quote | string | 선택 |  |
| author | string | 선택 |  |
| result | string | 선택 |  |

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:entity:analyticsevent | path: docs/ssot/scope/entity-analyticsevent.md -->
# 데이터 — AnalyticsEvent

(설명 미작성)

| 필드 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| name | string | 선택 |  |
| pagePath | string | 선택 |  |
| occurredAt | datetime | 선택 |  |

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:i18n | path: docs/ssot/scope/i18n.md -->
# 작동 범위 — 다국어(i18n)

- 지원 언어: ko
- 기본 언어: ko
- 2개 이상이면 문구 하드코딩 금지, 번역 리소스 분리 필수.

<!-- node: scope:page:screen-2 | path: docs/ssot/scope/page-screen-2.md -->
# 화면 — 서비스 소개 섹션

- route: `/screen-2`
- 소속 기능: `(공통)`

## 목적
아이디어 입력부터 기획안 생성까지의 흐름 안내

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:page:screen-3 | path: docs/ssot/scope/page-screen-3.md -->
# 화면 — 핵심 장점 섹션

- route: `/screen-3`
- 소속 기능: `(공통)`

## 목적
쉽게 시작, 빠른 정리, 개발에 활용 등 핵심 장점 전달

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:page:cta | path: docs/ssot/scope/page-cta.md -->
# 화면 — 최종 CTA 섹션

- route: `/cta`
- 소속 기능: `(공통)`

## 목적
기획안 만들기 버튼으로 전환 유도

## 연계 문서

**이 문서를 참조하는 상류**
- (없음)

**이 문서가 참조하는 하류**
- (없음)

<!-- node: scope:module:src/App.tsx | path: src/App.tsx -->
# 코드 모듈 — `src/App.tsx`

## 함수
- `function App`

## 내부 의존
- `src/components/SiteHeader.tsx`
- `src/lib/analytics.ts`
- `src/lib/router.ts`
- `src/lib/seo.ts`
- `src/pages/Benefits.tsx`
- `src/pages/FinalCta.tsx`
- `src/pages/Hero.tsx`
- `src/pages/NotFound.tsx`
- `src/pages/Problem.tsx`
- `src/pages/Service.tsx`
- `src/pages/Start.tsx`

<!-- node: scope:module:src/components/ContinueButton.tsx | path: src/components/ContinueButton.tsx -->
# 코드 모듈 — `src/components/ContinueButton.tsx`

## 함수
- `function ContinueButton`

## 내부 의존
- `src/components/ui/Button.tsx`
- `src/lib/router.ts`

<!-- node: scope:module:src/components/FaqList.tsx | path: src/components/FaqList.tsx -->
# 코드 모듈 — `src/components/FaqList.tsx`

## 함수
- `function FaqList`

## 내부 의존
- `src/lib/content.ts`

<!-- node: scope:module:src/components/PointList.tsx | path: src/components/PointList.tsx -->
# 코드 모듈 — `src/components/PointList.tsx`

## 함수
- `function PointList`

## 내부 의존
- `src/lib/content.ts`

<!-- node: scope:module:src/components/ScreenShell.tsx | path: src/components/ScreenShell.tsx -->
# 코드 모듈 — `src/components/ScreenShell.tsx`

## 함수
- `function ScreenShell`

## 내부 의존
- `src/lib/router.ts`

<!-- node: scope:module:src/components/Visual.tsx | path: src/components/Visual.tsx -->
# 코드 모듈 — `src/components/Visual.tsx`

## 함수
- `function CompareVisual`
- `function IconFlow`

## 내부 의존
- (없음)


---

# 구현 계약 (기획서에서 결정론적으로 유도됨 · LLM 미사용)

아래는 위 기획 문서와 **같은 프로필**에서 기계적으로 유도한 값이다. 기획 본문과
충돌하면 기획 본문이 우선한다. 아래에 TBD 주석이 보이면 그 자리는 근거가 없어
비워 둔 것이니 채워 넣지 말고 그대로 두거나 사용자에게 물어라.

## Database schema (derived from entities[])

```sql
CREATE TABLE landing_page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT,
  title TEXT,
  content TEXT,
  order NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_landing_page_sections_created_at ON landing_page_sections (created_at);
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote TEXT,
  author TEXT,
  result TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_testimonials_created_at ON testimonials (created_at);
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  page_path TEXT,
  occurred_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_analytics_events_occurred_at ON analytics_events (occurred_at);
CREATE INDEX idx_analytics_events_created_at ON analytics_events (created_at);
```

## REST API contract (derived)

| Method | Path | Request body | Auth | Errors |
|--------|------|--------------|------|--------|
| `POST` | `/landingpagesections` | _(no body)_ | `guest` | 400 |
| `GET` | `/landingpagesections` | _(no body)_ | `guest` | 401 |
| `POST` | `/testimonials` | _(no body)_ | `guest` | 400 |
| `GET` | `/testimonials` | _(no body)_ | `guest` | 401 |
| `POST` | `/analyticsevents` | _(no body)_ | `guest` | 400 |
| `GET` | `/analyticsevents` | _(no body)_ | `guest` | 401 |
| `GET` | `/api/fe253b445` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/fe253b445/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/pc` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/pc/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/seo` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/seo/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/screen-ff2f57` | _(no body)_ | `guest` | 400 invalid payload, 409 conflicting state, 422 rule violation |
| `POST` | `/api/screen-ff2f57/{id}/decision` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 409 conflicting state, 422 rule violation |
| `PATCH` | `/api/cta/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/cta/summary` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `POST` | `/api/983bc01b` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `POST` | `/api/f038b237` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |

## Role / permission matrix (derived)

| Resource | Feature | `user` |
|----------|---------|------|
| `/api/fe253b445` | 상단 로고 표시 | read (own + public) |
| `/api/pc` | 모바일/PC 반응형 지원 | read (own + public) |
| `/api/seo` | 기본 SEO 메타 태그 적용 | read (own + public) |
| `/api/screen-ff2f57` | 사용자 후기 섹션 | read (own submission) |
| `/api/cta` | CTA 버튼 클릭 | update (own) |
| `/api/cta` | 방문 및 CTA 클릭 이벤트 측정 | read (own aggregate) |
| `/api/983bc01b` | 고객 후기 섹션 추가 | create, read (own) |
| `/api/f038b237` | 자주 묻는 질문 섹션 추가 | create, read (own) |

<!-- TBD: no operator role found in auth.roles — every row below is end-user only. If an admin console is planned, the operator role must be declared first. -->
