<!-- node: scope:index | path: docs/ssot/index.md -->
# SSOT 지도 — 랜딩 페이지 생성

자동 생성 매니페스트. 하위 문서 노드가 하나라도 바뀌면 이 문서의 해시도 함께 바뀐다.

- 노드 21개 · 엣지 239개 (필수 215 / 조건부 24)

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
- `doc_implemented_by`: 11
- `feature_needs_auth_scope`: 6
- `feature_uses_mcp`: 6
- `feature_uses_oauth`: 1
- `feature_uses_payment`: 6
- `index_lists_node`: 75
- `module_imports`: 129
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

- 모듈 54개 · import 엣지 129개 · 공개 심볼 90개
- 코드 지문: `c7a7dda7f4c6780b` (전 모듈 시그니처 해시를 접은 값 — 모듈 하나만 바뀌어도 이 값이 바뀐다)

### 공용 허브 모듈 (fan-in 상위 14개)
| 모듈 | fan-in | 심볼 | 해시 |
| --- | --- | --- | --- |
| `lib/mock-data.ts` | 19 | 7 | `206fde35` |
| `lib/utils.ts` | 18 | 1 | `9c3f246e` |
| `types/index.ts` | 13 | 3 | `466eb310` |
| `components/ui/button.tsx` | 9 | 1 | `36f732fd` |
| `components/ui/container.tsx` | 9 | 1 | `61958cdb` |
| `components/motion.tsx` | 8 | 4 | `8ec44532` |
| `components/features/screen-shell.tsx` | 6 | 3 | `cb51f70a` |
| `components/ui/badge.tsx` | 6 | 1 | `1bc46e0e` |
| `components/ui/empty-state.tsx` | 5 | 1 | `f95cdfbb` |
| `components/features/cta-button.tsx` | 4 | 1 | `eef3a87d` |
| `components/features/screen-header.tsx` | 4 | 1 | `9bd79cc7` |
| `components/ui/card.tsx` | 4 | 0 | `df3461bd` |
| `components/ui/skeleton.tsx` | 4 | 0 | `a90aa2d0` |
| `lib/api-client.ts` | 4 | 15 | `19407dc6` |

# SSOT 기획 컨텍스트 (코드 생성 입력)

- 대상 노드: 76개 (추정 6663 토큰)
- 변경 노드(seed): feature:cta, feature:cta-2, feature:fe253b445, feature:pc, feature:screen-ff2f57, feature:seo, scope:index

## 의존성 (읽어야 하는 이유)
- `feature:cta` → `scope:module:components/features/cta-button.tsx` (mandatory/doc_implemented_by)
- `feature:cta-2` → `scope:module:components/features/analytics-summary.tsx` (mandatory/doc_implemented_by)
- `feature:fe253b445` → `scope:module:components/features/site-logo.tsx` (mandatory/doc_implemented_by)
- `feature:pc` → `scope:module:components/features/responsive-support-list.tsx` (mandatory/doc_implemented_by)
- `feature:screen-ff2f57` → `scope:module:components/features/testimonial-list.tsx` (mandatory/doc_implemented_by)
- `feature:seo` → `scope:module:components/features/seo-meta-list.tsx` (mandatory/doc_implemented_by)
- `scope:index` → `scope:i18n` (mandatory/index_lists_node)
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
- `scope:index` → `feature:seo` (mandatory/index_lists_node)
- `scope:index` → `feature:screen-ff2f57` (mandatory/index_lists_node)
- `scope:index` → `feature:cta` (mandatory/index_lists_node)
- `scope:index` → `feature:cta-2` (mandatory/index_lists_node)
- `scope:index` → `scope:page:hero` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen-2` (mandatory/index_lists_node)
- `scope:index` → `scope:page:screen-3` (mandatory/index_lists_node)
- `scope:index` → `scope:page:cta` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/fe253b445/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/pc/[id]/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/pc/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/cta/[id]/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/cta/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/cta/summary/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/fe253b445/[id]/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/screen-ff2f57/[id]/decision/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/screen-ff2f57/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/seo/[id]/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/api/seo/route.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/cta/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/error.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/hero/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/layout.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/loading.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/not-found.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/screen-2/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/screen-3/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:app/screen/page.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/analytics-summary.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/analytics.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/cta-button.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/hero-section.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/responsive-support-list.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/screen-header.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/screen-nav.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/screen-shell.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/section-panel.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/seo-meta-list.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/site-header.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/site-logo.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/features/testimonial-list.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/motion.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/badge.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/button.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/card.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/container.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/empty-state.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/input.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/label.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/skeleton.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/tabs.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:components/ui/textarea.tsx` (mandatory/index_lists_node)
- `scope:index` → `scope:module:lib/api-client.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:lib/mock-data.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:lib/schema.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:lib/utils.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:next.config.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:public/cubivora-insights.js` (mandatory/index_lists_node)
- `scope:index` → `scope:module:public/cubivora-picker.js` (mandatory/index_lists_node)
- `scope:index` → `scope:module:tailwind.config.ts` (mandatory/index_lists_node)
- `scope:index` → `scope:module:types/index.ts` (mandatory/index_lists_node)
- `scope:module:components/features/cta-button.tsx` → `scope:module:components/features/analytics.tsx` (mandatory/module_imports)
- `scope:module:components/features/cta-button.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:components/features/cta-button.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:components/features/analytics.tsx` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:components/ui/card.tsx` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:components/ui/empty-state.tsx` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:components/ui/skeleton.tsx` (mandatory/module_imports)
- `scope:module:components/features/analytics-summary.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/site-logo.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/features/site-logo.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/responsive-support-list.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/responsive-support-list.tsx` → `scope:module:components/ui/card.tsx` (mandatory/module_imports)
- `scope:module:components/features/responsive-support-list.tsx` → `scope:module:components/ui/empty-state.tsx` (mandatory/module_imports)
- `scope:module:components/features/responsive-support-list.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/ui/card.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/ui/empty-state.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:components/ui/skeleton.tsx` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:lib/api-client.ts` (mandatory/module_imports)
- `scope:module:components/features/testimonial-list.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/seo-meta-list.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/seo-meta-list.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:components/features/seo-meta-list.tsx` → `scope:module:components/ui/empty-state.tsx` (mandatory/module_imports)
- `scope:module:components/features/seo-meta-list.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:page:hero` → `scope:module:app/hero/page.tsx` (mandatory/doc_implemented_by)
- `scope:page:screen` → `scope:module:app/screen/page.tsx` (mandatory/doc_implemented_by)
- `scope:page:screen-2` → `scope:module:app/screen-2/page.tsx` (mandatory/doc_implemented_by)
- `scope:page:screen-3` → `scope:module:app/screen-3/page.tsx` (mandatory/doc_implemented_by)
- `scope:page:cta` → `scope:module:app/cta/page.tsx` (mandatory/doc_implemented_by)
- `scope:module:app/api/fe253b445/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/pc/[id]/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/pc/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/cta/[id]/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/cta/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/cta/summary/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/fe253b445/[id]/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/screen-ff2f57/[id]/decision/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/screen-ff2f57/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/seo/[id]/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/api/seo/route.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/features/analytics-summary.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/features/cta-button.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/features/screen-header.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/features/testimonial-list.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/cta/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/error.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/features/cta-button.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/features/hero-section.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/features/responsive-support-list.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:lib/api-client.ts` (mandatory/module_imports)
- `scope:module:app/hero/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/loading.tsx` → `scope:module:components/ui/skeleton.tsx` (mandatory/module_imports)
- `scope:module:app/not-found.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/not-found.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/cta-button.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/hero-section.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/responsive-support-list.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/seo-meta-list.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/features/testimonial-list.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:lib/api-client.ts` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/page.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:components/features/screen-header.tsx` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:components/features/section-panel.tsx` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/screen-2/page.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:components/features/screen-header.tsx` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:components/features/section-panel.tsx` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/screen-3/page.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:components/features/screen-header.tsx` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:components/features/screen-shell.tsx` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:components/features/section-panel.tsx` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:app/screen/page.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/features/analytics.tsx` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:components/features/analytics.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/hero-section.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/hero-section.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:components/features/hero-section.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/screen-header.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:components/features/analytics.tsx` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:components/features/screen-nav.tsx` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:components/features/site-header.tsx` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:lib/api-client.ts` (mandatory/module_imports)
- `scope:module:components/features/screen-shell.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:components/motion.tsx` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:components/ui/badge.tsx` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:components/ui/card.tsx` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:components/ui/empty-state.tsx` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:components/ui/skeleton.tsx` (mandatory/module_imports)
- `scope:module:components/features/section-panel.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/features/site-header.tsx` → `scope:module:components/features/site-logo.tsx` (mandatory/module_imports)
- `scope:module:components/features/site-header.tsx` → `scope:module:components/ui/button.tsx` (mandatory/module_imports)
- `scope:module:components/features/site-header.tsx` → `scope:module:components/ui/container.tsx` (mandatory/module_imports)
- `scope:module:components/features/site-header.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/features/site-header.tsx` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:components/ui/badge.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/button.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/card.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/container.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/empty-state.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/input.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/label.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/skeleton.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/tabs.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:components/ui/textarea.tsx` → `scope:module:lib/utils.ts` (mandatory/module_imports)
- `scope:module:lib/api-client.ts` → `scope:module:lib/mock-data.ts` (mandatory/module_imports)
- `scope:module:lib/api-client.ts` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:lib/mock-data.ts` → `scope:module:types/index.ts` (mandatory/module_imports)
- `scope:module:lib/schema.ts` → `scope:module:types/index.ts` (mandatory/module_imports)

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

<!-- node: scope:index | path: docs/ssot/index.md -->
# SSOT 지도 — 랜딩 페이지 생성

자동 생성 매니페스트. 하위 문서 노드가 하나라도 바뀌면 이 문서의 해시도 함께 바뀐다.

- 노드 21개 · 엣지 239개 (필수 215 / 조건부 24)

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
- `doc_implemented_by`: 11
- `feature_needs_auth_scope`: 6
- `feature_uses_mcp`: 6
- `feature_uses_oauth`: 1
- `feature_uses_payment`: 6
- `index_lists_node`: 75
- `module_imports`: 129
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

- 모듈 54개 · import 엣지 129개 · 공개 심볼 90개
- 코드 지문: `c7a7dda7f4c6780b` (전 모듈 시그니처 해시를 접은 값 — 모듈 하나만 바뀌어도 이 값이 바뀐다)

### 공용 허브 모듈 (fan-in 상위 14개)
| 모듈 | fan-in | 심볼 | 해시 |
| --- | --- | --- | --- |
| `lib/mock-data.ts` | 19 | 7 | `206fde35` |
| `lib/utils.ts` | 18 | 1 | `9c3f246e` |
| `types/index.ts` | 13 | 3 | `466eb310` |
| `components/ui/button.tsx` | 9 | 1 | `36f732fd` |
| `components/ui/container.tsx` | 9 | 1 | `61958cdb` |
| `components/motion.tsx` | 8 | 4 | `8ec44532` |
| `components/features/screen-shell.tsx` | 6 | 3 | `cb51f70a` |
| `components/ui/badge.tsx` | 6 | 1 | `1bc46e0e` |
| `components/ui/empty-state.tsx` | 5 | 1 | `f95cdfbb` |
| `components/features/cta-button.tsx` | 4 | 1 | `eef3a87d` |
| `components/features/screen-header.tsx` | 4 | 1 | `9bd79cc7` |
| `components/ui/card.tsx` | 4 | 0 | `df3461bd` |
| `components/ui/skeleton.tsx` | 4 | 0 | `a90aa2d0` |
| `lib/api-client.ts` | 4 | 15 | `19407dc6` |

<!-- node: scope:module:components/features/cta-button.tsx | path: components/features/cta-button.tsx -->
# 코드 모듈 — `components/features/cta-button.tsx`

## 함수
- `function CtaButton`

## 내부 의존
- `components/features/analytics.tsx`
- `components/ui/button.tsx`
- `lib/utils.ts`

<!-- node: scope:module:components/features/analytics-summary.tsx | path: components/features/analytics-summary.tsx -->
# 코드 모듈 — `components/features/analytics-summary.tsx`

## 함수
- `function AnalyticsSummary`

## 내부 의존
- `components/features/analytics.tsx`
- `components/motion.tsx`
- `components/ui/card.tsx`
- `components/ui/empty-state.tsx`
- `components/ui/skeleton.tsx`
- `types/index.ts`

<!-- node: scope:module:components/features/site-logo.tsx | path: components/features/site-logo.tsx -->
# 코드 모듈 — `components/features/site-logo.tsx`

## 함수
- `function SiteLogo`

## 내부 의존
- `lib/utils.ts`
- `types/index.ts`

<!-- node: scope:module:components/features/responsive-support-list.tsx | path: components/features/responsive-support-list.tsx -->
# 코드 모듈 — `components/features/responsive-support-list.tsx`

## 함수
- `function ResponsiveSupportList`

## 내부 의존
- `components/motion.tsx`
- `components/ui/card.tsx`
- `components/ui/empty-state.tsx`
- `types/index.ts`

<!-- node: scope:module:components/features/testimonial-list.tsx | path: components/features/testimonial-list.tsx -->
# 코드 모듈 — `components/features/testimonial-list.tsx`

## 함수
- `function TestimonialList`

## 내부 의존
- `components/motion.tsx`
- `components/ui/badge.tsx`
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/empty-state.tsx`
- `components/ui/skeleton.tsx`
- `lib/api-client.ts`
- `types/index.ts`

<!-- node: scope:module:components/features/seo-meta-list.tsx | path: components/features/seo-meta-list.tsx -->
# 코드 모듈 — `components/features/seo-meta-list.tsx`

## 함수
- `function SeoMetaList`

## 내부 의존
- `components/motion.tsx`
- `components/ui/badge.tsx`
- `components/ui/empty-state.tsx`
- `types/index.ts`

<!-- node: scope:i18n | path: docs/ssot/scope/i18n.md -->
# 작동 범위 — 다국어(i18n)

- 지원 언어: ko
- 기본 언어: ko
- 2개 이상이면 문구 하드코딩 금지, 번역 리소스 분리 필수.

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

<!-- node: scope:module:app/api/fe253b445/route.ts | path: app/api/fe253b445/route.ts -->
# 코드 모듈 — `app/api/fe253b445/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/pc/[id]/route.ts | path: app/api/pc/[id]/route.ts -->
# 코드 모듈 — `app/api/pc/[id]/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/pc/route.ts | path: app/api/pc/route.ts -->
# 코드 모듈 — `app/api/pc/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/cta/[id]/route.ts | path: app/api/cta/[id]/route.ts -->
# 코드 모듈 — `app/api/cta/[id]/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/cta/route.ts | path: app/api/cta/route.ts -->
# 코드 모듈 — `app/api/cta/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/cta/summary/route.ts | path: app/api/cta/summary/route.ts -->
# 코드 모듈 — `app/api/cta/summary/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/fe253b445/[id]/route.ts | path: app/api/fe253b445/[id]/route.ts -->
# 코드 모듈 — `app/api/fe253b445/[id]/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/screen-ff2f57/[id]/decision/route.ts | path: app/api/screen-ff2f57/[id]/decision/route.ts -->
# 코드 모듈 — `app/api/screen-ff2f57/[id]/decision/route.ts`

## 함수
- `function POST`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/screen-ff2f57/route.ts | path: app/api/screen-ff2f57/route.ts -->
# 코드 모듈 — `app/api/screen-ff2f57/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/seo/[id]/route.ts | path: app/api/seo/[id]/route.ts -->
# 코드 모듈 — `app/api/seo/[id]/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/api/seo/route.ts | path: app/api/seo/route.ts -->
# 코드 모듈 — `app/api/seo/route.ts`

## 함수
- `function GET`

## 내부 의존
- `lib/mock-data.ts`

<!-- node: scope:module:app/cta/page.tsx | path: app/cta/page.tsx -->
# 코드 모듈 — `app/cta/page.tsx`

## 함수
- `function CtaPage`

## 내부 의존
- `components/features/analytics-summary.tsx`
- `components/features/cta-button.tsx`
- `components/features/screen-header.tsx`
- `components/features/screen-shell.tsx`
- `components/features/testimonial-list.tsx`
- `components/motion.tsx`
- `components/ui/badge.tsx`
- `components/ui/container.tsx`
- `lib/mock-data.ts`

<!-- node: scope:module:app/error.tsx | path: app/error.tsx -->
# 코드 모듈 — `app/error.tsx`

## 함수
- `function Error`

## 내부 의존
- `components/ui/button.tsx`

<!-- node: scope:module:app/hero/page.tsx | path: app/hero/page.tsx -->
# 코드 모듈 — `app/hero/page.tsx`

## 함수
- `function HeroPage`

## 내부 의존
- `components/features/cta-button.tsx`
- `components/features/hero-section.tsx`
- `components/features/responsive-support-list.tsx`
- `components/features/screen-shell.tsx`
- `components/ui/badge.tsx`
- `components/ui/container.tsx`
- `lib/api-client.ts`
- `lib/mock-data.ts`

<!-- node: scope:module:app/layout.tsx | path: app/layout.tsx -->
# 코드 모듈 — `app/layout.tsx`

## 함수
- `function RootLayout`

## 공개 상수 · 심볼
- `metadata`

## 내부 의존
- (없음)

<!-- node: scope:module:app/loading.tsx | path: app/loading.tsx -->
# 코드 모듈 — `app/loading.tsx`

## 함수
- `function Loading`

## 내부 의존
- `components/ui/skeleton.tsx`

<!-- node: scope:module:app/not-found.tsx | path: app/not-found.tsx -->
# 코드 모듈 — `app/not-found.tsx`

## 함수
- `function NotFound`

## 내부 의존
- `components/ui/button.tsx`
- `lib/utils.ts`

<!-- node: scope:module:app/page.tsx | path: app/page.tsx -->
# 코드 모듈 — `app/page.tsx`

## 함수
- `function HomePage`

## 내부 의존
- `components/features/cta-button.tsx`
- `components/features/hero-section.tsx`
- `components/features/responsive-support-list.tsx`
- `components/features/screen-shell.tsx`
- `components/features/seo-meta-list.tsx`
- `components/features/testimonial-list.tsx`
- `components/motion.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `lib/api-client.ts`
- `lib/mock-data.ts`
- `lib/utils.ts`

<!-- node: scope:module:app/screen-2/page.tsx | path: app/screen-2/page.tsx -->
# 코드 모듈 — `app/screen-2/page.tsx`

## 함수
- `function ServicePage`

## 내부 의존
- `components/features/screen-header.tsx`
- `components/features/screen-shell.tsx`
- `components/features/section-panel.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `lib/mock-data.ts`
- `lib/utils.ts`

<!-- node: scope:module:app/screen-3/page.tsx | path: app/screen-3/page.tsx -->
# 코드 모듈 — `app/screen-3/page.tsx`

## 함수
- `function BenefitsPage`

## 내부 의존
- `components/features/screen-header.tsx`
- `components/features/screen-shell.tsx`
- `components/features/section-panel.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `lib/mock-data.ts`
- `lib/utils.ts`

<!-- node: scope:module:app/screen/page.tsx | path: app/screen/page.tsx -->
# 코드 모듈 — `app/screen/page.tsx`

## 함수
- `function ProblemPage`

## 내부 의존
- `components/features/screen-header.tsx`
- `components/features/screen-shell.tsx`
- `components/features/section-panel.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `lib/mock-data.ts`
- `lib/utils.ts`

<!-- node: scope:module:components/features/analytics.tsx | path: components/features/analytics.tsx -->
# 코드 모듈 — `components/features/analytics.tsx`

## 함수
- `function recordEvent`
- `function getEvents`
- `function useAnalyticsEvents`
- `function usePageView`
- `function useTrackCtaClick`
- `function PageViewTracker`

## 공개 상수 · 심볼
- `AnalyticsEventName`

## 내부 의존
- `lib/mock-data.ts`
- `types/index.ts`

<!-- node: scope:module:components/features/hero-section.tsx | path: components/features/hero-section.tsx -->
# 코드 모듈 — `components/features/hero-section.tsx`

## 함수
- `function HeroSection`

## 내부 의존
- `components/motion.tsx`
- `components/ui/badge.tsx`
- `types/index.ts`

<!-- node: scope:module:components/features/screen-header.tsx | path: components/features/screen-header.tsx -->
# 코드 모듈 — `components/features/screen-header.tsx`

## 함수
- `function ScreenHeader`

## 내부 의존
- `components/ui/container.tsx`

<!-- node: scope:module:components/features/screen-nav.tsx | path: components/features/screen-nav.tsx -->
# 코드 모듈 — `components/features/screen-nav.tsx`

## 함수
- `function ScreenNav`

## 내부 의존
- (없음)

<!-- node: scope:module:components/features/screen-shell.tsx | path: components/features/screen-shell.tsx -->
# 코드 모듈 — `components/features/screen-shell.tsx`

## 함수
- `function findSection`
- `function ScreenShell`

## 공개 상수 · 심볼
- `SCREEN_ORDER`

## 내부 의존
- `components/features/analytics.tsx`
- `components/features/screen-nav.tsx`
- `components/features/site-header.tsx`
- `components/ui/container.tsx`
- `lib/api-client.ts`
- `types/index.ts`

<!-- node: scope:module:components/features/section-panel.tsx | path: components/features/section-panel.tsx -->
# 코드 모듈 — `components/features/section-panel.tsx`

## 함수
- `function SectionPanel`
- `function SectionNote`

## 공개 상수 · 심볼
- `SectionPoint`

## 내부 의존
- `components/motion.tsx`
- `components/ui/badge.tsx`
- `components/ui/card.tsx`
- `components/ui/empty-state.tsx`
- `components/ui/skeleton.tsx`
- `types/index.ts`

<!-- node: scope:module:components/features/site-header.tsx | path: components/features/site-header.tsx -->
# 코드 모듈 — `components/features/site-header.tsx`

## 함수
- `function SiteHeader`

## 공개 상수 · 심볼
- `NavItem`
- `defaultNavItems`

## 내부 의존
- `components/features/site-logo.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `lib/utils.ts`
- `types/index.ts`

<!-- node: scope:module:components/motion.tsx | path: components/motion.tsx -->
# 코드 모듈 — `components/motion.tsx`

## 함수
- `function FadeIn`
- `function Stagger`
- `function StaggerItem`

## 공개 상수 · 심볼
- `fadeInVariants`

## 내부 의존
- (없음)

<!-- node: scope:module:components/ui/badge.tsx | path: components/ui/badge.tsx -->
# 코드 모듈 — `components/ui/badge.tsx`

## 공개 상수 · 심볼
- `BadgeProps`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/button.tsx | path: components/ui/button.tsx -->
# 코드 모듈 — `components/ui/button.tsx`

## 공개 상수 · 심볼
- `ButtonProps`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/card.tsx | path: components/ui/card.tsx -->
# 코드 모듈 — `components/ui/card.tsx`

## 내부 의존
- `lib/utils.ts`

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:components/ui/container.tsx | path: components/ui/container.tsx -->
# 코드 모듈 — `components/ui/container.tsx`

## 함수
- `function Container`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/empty-state.tsx | path: components/ui/empty-state.tsx -->
# 코드 모듈 — `components/ui/empty-state.tsx`

## 함수
- `function EmptyState`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/input.tsx | path: components/ui/input.tsx -->
# 코드 모듈 — `components/ui/input.tsx`

## 공개 상수 · 심볼
- `InputProps`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/label.tsx | path: components/ui/label.tsx -->
# 코드 모듈 — `components/ui/label.tsx`

## 내부 의존
- `lib/utils.ts`

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:components/ui/skeleton.tsx | path: components/ui/skeleton.tsx -->
# 코드 모듈 — `components/ui/skeleton.tsx`

## 내부 의존
- `lib/utils.ts`

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:components/ui/tabs.tsx | path: components/ui/tabs.tsx -->
# 코드 모듈 — `components/ui/tabs.tsx`

## 함수
- `function Tabs`
- `function TabsList`
- `function TabsTrigger`
- `function TabsContent`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:components/ui/textarea.tsx | path: components/ui/textarea.tsx -->
# 코드 모듈 — `components/ui/textarea.tsx`

## 공개 상수 · 심볼
- `TextareaProps`

## 내부 의존
- `lib/utils.ts`

<!-- node: scope:module:lib/api-client.ts | path: lib/api-client.ts -->
# 코드 모듈 — `lib/api-client.ts`

## 함수
- `function fetchData`
- `function sendData`
- `function listLogos`
- `function getLogo`
- `function listResponsiveSettings`
- `function getResponsiveSetting`
- `function listSeoMetadata`
- `function getSeoMetadata`
- `function listTestimonials`
- `function decideTestimonial`
- `function listCtas`
- `function getCta`
- `function getCtaSummary`

## 공개 상수 · 심볼
- `usingMockData`
- `ApiResult`

## 내부 의존
- `lib/mock-data.ts`
- `types/index.ts`

<!-- node: scope:module:lib/mock-data.ts | path: lib/mock-data.ts -->
# 코드 모듈 — `lib/mock-data.ts`

## 공개 상수 · 심볼
- `mockLandingPageSectionList`
- `mockLogoList`
- `mockResponsiveSettingList`
- `mockSeoMetadataList`
- `mockTestimonialList`
- `mockCtaList`
- `mockAnalyticsEventList`

## 내부 의존
- `types/index.ts`

<!-- node: scope:module:lib/schema.ts | path: lib/schema.ts -->
# 코드 모듈 — `lib/schema.ts`

## 함수
- `function parseLandingPageSection`
- `function parseTestimonial`
- `function parseAnalyticsEvent`

## 내부 의존
- `types/index.ts`

<!-- node: scope:module:lib/utils.ts | path: lib/utils.ts -->
# 코드 모듈 — `lib/utils.ts`

## 함수
- `function cn`

## 내부 의존
- (없음)

<!-- node: scope:module:next.config.ts | path: next.config.ts -->
# 코드 모듈 — `next.config.ts`

## 내부 의존
- (없음)

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:public/cubivora-insights.js | path: public/cubivora-insights.js -->
# 코드 모듈 — `public/cubivora-insights.js`

## 내부 의존
- (없음)

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:public/cubivora-picker.js | path: public/cubivora-picker.js -->
# 코드 모듈 — `public/cubivora-picker.js`

## 내부 의존
- (없음)

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:tailwind.config.ts | path: tailwind.config.ts -->
# 코드 모듈 — `tailwind.config.ts`

## 내부 의존
- (없음)

> 공개 시그니처 없음 (설정·스크립트성 모듈)

<!-- node: scope:module:types/index.ts | path: types/index.ts -->
# 코드 모듈 — `types/index.ts`

## 공개 상수 · 심볼
- `LandingPageSection`
- `Testimonial`
- `AnalyticsEvent`

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
| `GET` | `/api/fe253b445` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/fe253b445/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/pc` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/pc/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/seo` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/seo/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/screen-ff2f57` | _(no body)_ | `guest` | 400 invalid payload, 409 conflicting state, 422 rule violation |
| `POST` | `/api/screen-ff2f57/{id}/decision` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 409 conflicting state, 422 rule violation |
| `GET` | `/api/cta` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |
| `GET` | `/api/cta/{id}` | _(no body)_ | `guest` | 400 invalid payload, 404 not found, 422 rule violation |
| `GET` | `/api/cta/summary` | _(no body)_ | `guest` | 400 invalid payload, 422 rule violation |

## Role / permission matrix (derived)

| Resource | Feature | `user` |
|----------|---------|------|
| `/api/fe253b445` | 상단 로고 표시 | read (own + public) |
| `/api/pc` | 모바일/PC 반응형 지원 | read (own + public) |
| `/api/seo` | 기본 SEO 메타 태그 적용 | read (own + public) |
| `/api/screen-ff2f57` | 사용자 후기 섹션 | read (own submission) |
| `/api/cta` | CTA 버튼 클릭 | read (own + public) |
| `/api/cta` | 방문 및 CTA 클릭 이벤트 측정 | read (own aggregate) |

<!-- TBD: no operator role found in auth.roles — every row below is end-user only. If an admin console is planned, the operator role must be declared first. -->
