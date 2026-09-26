/**
 * 데이터 모드 판정 — **한 곳**. 게이트웨이(lib/data/*)와 라우트 가드(lib/api/guard.ts)가 이것만 본다.
 *
 *   - Supabase 키가 없다                      -> 목업 (생성 직후·프리뷰·데모: 지금까지와 같은 동작)
 *   - 키가 있고 NEXT_PUBLIC_USE_MOCK_DATA=true -> 목업 (키를 넣어 두고도 잠시 목업으로 돌릴 때)
 *   - 키가 있다                               -> 실데이터 (Supabase)
 *
 * 실데이터로 전환하는 방법은 SETUP_GUIDE.md 의 "실데이터로 전환하기" 절을 따른다.
 */

const MOCK_FLAG = process.env.NEXT_PUBLIC_USE_MOCK_DATA;

/** Supabase 접속 정보가 둘 다 있는가. */
export const HAS_SUPABASE_ENV: boolean = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

/** 목업 모드인가. 키가 없으면 무조건 목업이다 — 환경변수 없이도 앱은 떠야 한다. */
export const USE_MOCK: boolean = MOCK_FLAG === "true" || !HAS_SUPABASE_ENV;
