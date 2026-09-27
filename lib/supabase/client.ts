import { createBrowserClient } from "@supabase/ssr";

/**
 * 브라우저용 Supabase 클라이언트 — 로그인/로그아웃 UI 가 쓴다.
 * 데이터 읽기·쓰기는 브라우저에서 직접 하지 말고 API 라우트(lib/data 게이트웨이)를 거친다.
 */
export function createBrowserSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  );
}
