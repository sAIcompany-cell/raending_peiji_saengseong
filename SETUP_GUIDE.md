# 🚀 랜딩 페이지 생성 셋업 가이드

> 이 문서는 코딩 지식이 없어도 따라 할 수 있도록 작성됐습니다.
> 위에서부터 순서대로 진행하세요. 각 단계 끝의 **✅ 확인**이 통과되면 다음으로 넘어갑니다.
> 막히면 작업지시 화면의 **🆘 막혔어요** 버튼을 눌러 에러 내용을 붙여넣으세요.

---

## 준비물 (5분)

계정 3개가 필요합니다. 전부 무료로 시작할 수 있습니다.

| 계정 | 용도 | 가입 주소 |
|---|---|---|
| GitHub | 내 서비스의 코드가 저장되는 곳 | github.com |
| Supabase | 회원·데이터가 저장되는 곳 (데이터베이스) | supabase.com |
| Vercel | 내 서비스를 인터넷에 띄워주는 곳 | vercel.com |

💡 **팁**: 세 곳 모두 "Continue with GitHub"(GitHub으로 계속하기)를 누르면 GitHub 계정 하나로 전부 가입됩니다. 이 방법을 추천합니다.

**✅ 확인**: 세 사이트에 모두 로그인된 상태

---

## 1단계. GitHub 저장소 확인 (2분)

Cubivora가 이미 코드를 GitHub에 올려두었습니다. 확인만 하면 됩니다.

1. github.com 에 로그인
2. 오른쪽 위 프로필 사진 클릭 → **Your repositories** 클릭
3. **my-project** 저장소가 보이는지 확인. 클릭해서 들어가면 파일 목록이 보입니다

**✅ 확인**: 저장소 안에 `SETUP_GUIDE.md`(지금 이 문서)와 `docs/` 폴더 등이 보임

---

## 2단계. Supabase 프로젝트 만들기 (5분)

1. supabase.com 로그인 → 초록색 **New project** 버튼 클릭
2. 항목 입력:
   - **Name**: my-project (아무 이름이나 괜찮습니다)
   - **Database Password**: 🔑 **자동 생성된 비밀번호를 복사해서 메모장에 저장하세요.** 나중에 다시 볼 수 없습니다
   - **Region**: `Northeast Asia (Seoul)` 선택 (한국 사용자면 필수)
3. **Create new project** 클릭 → 1~2분 기다리면 준비 완료

### API 키 2개 복사하기

1. 왼쪽 메뉴 맨 아래 ⚙️ **Project Settings** 클릭
2. **API** 메뉴 클릭
3. 다음 두 개를 각각 복사해서 메모장에 저장:
   - **Project URL** — `https://xxxx.supabase.co` 형태
   - **anon public** 키 — `eyJ...`로 시작하는 긴 문자열

⚠️ **주의**: 같은 화면의 `service_role` 키는 절대 외부에 공유하거나 코드에 붙여넣지 마세요. 이 키가 유출되면 데이터베이스 전체가 노출됩니다.

**✅ 확인**: 메모장에 ① DB 비밀번호 ② Project URL ③ anon 키 3개가 저장됨

---

## 3단계. Vercel에 연결하고 인터넷에 띄우기 (5분)

1. vercel.com 로그인 → **Add New...** → **Project** 클릭
2. **Import Git Repository** 목록에서 **my-project** 찾아 **Import** 클릭
   - 목록에 안 보이면: **Adjust GitHub App Permissions** 클릭 → 저장소 접근 허용
3. 배포 설정 화면에서 **Environment Variables**(환경 변수) 섹션을 펼칩니다
4. 아래 표대로 하나씩 추가 (**Key** 칸에 왼쪽, **Value** 칸에 메모장에 저장한 값):

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 2단계의 Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 2단계의 anon 키 |




5. **Deploy** 클릭 → 2~3분 기다림 → 🎉 폭죽 화면이 뜨면 성공

**✅ 확인**: `https://my-project-xxxx.vercel.app` 주소를 클릭했을 때 내 서비스 화면이 보임

❌ **빨간색 에러 화면이 뜬다면**: 화면의 에러 메시지를 전부 복사 → Cubivora 작업지시 화면의 🆘 막혔어요 버튼에 붙여넣기

---

## 4단계. 데이터베이스 테이블 만들기 (3분)

서비스가 데이터를 저장하려면 Supabase에 "표(테이블)"를 만들어야 합니다. 직접 만들 필요 없이, 준비된 명령을 붙여넣기만 하면 됩니다.

1. GitHub 저장소에서 `supabase/schema.sql` 파일 클릭 → 오른쪽 위 복사 아이콘(📋)으로 내용 전체 복사
2. Supabase 왼쪽 메뉴에서 **SQL Editor** 클릭 → **New query**
3. 복사한 내용 붙여넣기 → 오른쪽 아래 **Run** 클릭
4. "Success. No rows returned" 라고 나오면 성공

**✅ 확인**: 왼쪽 메뉴 **Table Editor**에 들어가면 테이블 목록이 보임

---

## 5단계. 나만의 도메인 연결하기 (선택, 10분)

`xxx.vercel.app` 주소로도 충분히 운영할 수 있습니다. `내서비스.com` 같은 주소를 원할 때만 진행하세요.

1. 도메인 구매: 가비아(gabia.com) 또는 Vercel에서 직접 구매 (연 1~3만 원 수준)
2. Vercel 프로젝트 → **Settings** → **Domains** → 구매한 도메인 입력 → **Add**
3. 화면에 나오는 안내대로 도메인 구매처에서 DNS 설정 (Vercel에서 구매했다면 이 과정 없음)
4. 최대 몇 시간 후 연결 완료 (보통 10분 이내)

**✅ 확인**: 내 도메인 주소로 접속했을 때 서비스가 보임

---

## 🎯 랜딩페이지 추가 설정

랜딩페이지의 목적은 "방문자를 신청자로 바꾸는 것"입니다. 아래 두 가지가 그 핵심 장치입니다.

### 공유했을 때 예쁘게 보이게 만들기 (OG 이미지, 5분)

카카오톡·인스타에 내 링크를 공유하면 나오는 **미리보기 카드**를 설정합니다. 이게 없으면 밋밋한 링크만 보여서 클릭률이 크게 떨어집니다.

1. 미리보기용 이미지 1장 준비 (권장 크기: 1200×630px — 미리캔버스나 캔바에서 "og image" 템플릿으로 5분이면 만듭니다)
2. 파일명을 `og-image.png`로 변경
3. GitHub 저장소 → `public` 폴더 클릭 → **Add file** → **Upload files** → 이미지 끌어다 놓기 → **Commit changes**
4. 1~2분 후 Vercel이 자동으로 다시 배포합니다

**✅ 확인**: 카카오톡 "나에게 보내기"로 내 주소를 보내면 이미지 카드가 보임
(안 바뀌면: 카카오는 미리보기를 저장해둡니다. developers.kakao.com/tool/debugger/sharing 에서 내 주소 입력 → **초기화** 클릭)

### 신청자 명단이 쌓이는지 확인하기 (3분)

방문자가 이메일이나 사전예약을 신청하면 Supabase에 자동으로 쌓입니다.

1. 내 랜딩페이지에서 직접 테스트 신청을 1건 해봅니다
2. Supabase → **Table Editor** → 신청 테이블(leads 또는 waitlist) 클릭
3. 방금 신청한 내용이 한 줄로 들어와 있는지 확인

**✅ 확인**: 테스트 신청 1건이 테이블에 보임

💡 **팁**: 신청자 명단은 Table Editor 오른쪽 위 **Export** 버튼으로 언제든 엑셀(CSV)로 내려받을 수 있습니다.

### 검색에 잘 걸리게 하기 (선택, 5분)

1. search.google.com/search-console 접속 → 내 도메인 등록
2. Vercel 도메인 설정을 이미 마쳤다면 소유권 확인이 거의 자동으로 진행됩니다
3. 등록 후 며칠 내로 구글 검색에 내 페이지가 잡히기 시작합니다

---
