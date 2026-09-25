# 랜딩 페이지 생성 — AI Team Package

Cursor / Claude Code 가 이 프로젝트를 열 때 **최우선으로 읽을 팀 정보**입니다.

## 0. Project Persona — Coding Philosophy

**Primary priority**: `balanced`

- 보안과 속도의 균형을 유지합니다.
- PRD와 Decision Log를 우선합니다.

> AI 팀은 코드·기획 제안 시 이 성향을 **1순위**로 고려합니다.

## 1. Long-term Memory (Decision Log)

전체 기록: `.cubivora/Memory.md`

# Project Memory — Decision Log

> AI 팀 장기 기억. 프로젝트별로 격리됩니다.

## [2026-08-24 09:21 UTC] Project Foundation — PRD 온보딩 확정

- **What**: `랜딩 페이지 생성` PRD 생성이 완료되어 초기 제품 이해를 확정했습니다.
- **Why**: 향후 AI 팀이 첫 작업부터 온보딩에서 합의한 제품 방향, 타깃, 차별점, 기능 범위를 우선하도록 합니다.
- **Constraint**: 아래 Foundation과 충돌하는 제안은 사용자 확인 없이 임의로 진행하지 않습니다.

### Foundation Snapshot

- **Product**: 방문자가 서비스를 빠르게 이해하고 CTA 버튼을 눌러 신청/문의까지 이어지게 하는 랜딩페이지
- **Target users**: 가구 구매 예정 소비자, 가구 가격 비교 고객, 매장 방문이 번거로운 사람
- **Killer differentiation**: 가구 가격을 비교해 고객의 니즈에 맞는 제품을 찾고 구매할 수 있도록 도와줍니다.
- **Audience nuance**: 가구 구매를 계획하고 있으며, 자신의 니즈에 맞는 제품을 합리적으로 비교하고 매장 방문을 줄이고 싶은 소비자입니다.
- **Core features**: 상단 로고 표시 (must): 페이지 상단에 로고를 표시한다.; 모바일/PC 반응형 지원 (must): 모바일과 PC 환경 모두에서 정상적으로 표시된다.; 기본 SEO 메타 태그 적용 (must): 기본 SEO 메타 태그를 페이지에 적용한다.; 사용자 후기 섹션 (must): 실제 사용자의 긍정적인 평가와 결과를 시각적으로 표시하여 신뢰도를 높인다.; CTA 버튼 클릭 (must): CTA 클릭 시 회원가입 또는 서비스 시작 페이지로 이동한다.
- **Key pages**: Hero 섹션 (/hero): 핵심 가치 제안과 무료로 시작하기 CTA 버튼 표시; 문제 제시 섹션 (/screen): 사용자가 겪는 문제를 제시하여 공감 유도; 서비스 소개 섹션 (/screen-2): 아이디어 입력부터 기획안 생성까지의 흐름 안내; 핵심 장점 섹션 (/screen-3): 쉽게 시작, 빠른 정리, 개발에 활용 등 핵심 장점 전달; 최종 CTA 섹션 (/cta): 기획안 만들기 버튼으로 전환 유도
- **Device target**: web_app
- **Design tone**: 깔끔하고 단순한 구조, 흰색 기반, 포인트 컬러 1개 사용, 큰 제목 + 짧은 문장 중심, 한 화면에서 하나의 메시지만 전달
- **Tech stack**: frontend=Next.js, TypeScript, Tailwind CSS, backend=없음, database=없음, deployment=정적 호스팅을 고려한 빌드 구성, 프로덕션 배포는 제외
- **Monetization**: model=ads, needs_ads
- **Do not**: 요구사항에 없는 기능·화면·API를 임의로 추가하지 않는다., 확인되지 않은 수치·날짜·전망을 사실처럼 쓰지 않는다., 프로덕션 배포·실서비스 도메인 연결은 명시적 요청 없이 구현하지 않는다., API 키·시크릿·PG 키는 코드에 하드코딩하지 않고 환경변수(.env)로만 참조한다.

## [2026-09-23 00:57 KST] Decision

- **What**: '고객 후기' 섹션 추가 (예시 데이터 3개 포함)  
  - **Why**: 실제 사용자 피드백을 통해 신뢰도를 높이고, 서비스의 구체적 강점을 시각적으로 전달하기 위함. 예시 데이터는 기존 사용자 피드백에서 추출된 핵심 메시지를 반영함.  
  - **Constraint**: 향후 후기 추가 시 동일한 형식(이

## [2026-09-25 17:33 KST] Decision

- **What**: 랜딩 페이지에 '자주 묻는 질문' 섹션을 추가하며, '배송은 얼마나 걸리나요', '반품이 가능한가요', '매장 방문 없이 구매할 수 있나요' 세 가지 질문을 포함하도록 요청했습니다.
- **Why*…

## 2. Harness Rules (`.cursor/rules/`)

- _(사용자 정의 harness 규칙 없음)_

## 3. Standard paths

| Resource | Path |
|----------|------|
| PRD | `docs/PRD.md` |
| Memory | `.cubivora/Memory.md` |
| Team package | `.cubivora/TEAM.md` |
| Overview rule | `.cursor/rules/00-overview.mdc` |

> 이 파일은 Cubivora Studio 가 프로젝트 진화(Apply) 시 자동 갱신합니다.
