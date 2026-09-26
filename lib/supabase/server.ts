import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { HAS_SUPABASE_ENV } from "@/lib/data/mode";

/** 라우트·서버 컴포넌트가 보는 로그인 사용자의 최소 형태. */
export type SessionUser = { id: string; email: string | null };

/**
 * 서버(Route Handler · Server Component)용 Supabase 클라이언트.
 * 쿠키의 세션을 그대로 쓰므로 RLS 정책(`auth.uid()`)이 이 사용자 기준으로 적용된다.
 * 키가 없으면 던진다 — 게이트웨이는 USE_MOCK 을 먼저 보고 여기 오지 않는다.
 */
export async function createServerSupabase() {
  if (!HAS_SUPABASE_ENV) {
    throw new Error("Supabase 환경변수가 없습니다 — .env.example 을 참고해 설정하세요.");
  }
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Server Component 에서는 쿠키 쓰기가 막힌다 — 세션 갱신은 미들웨어/라우트가 한다.
          }
        },
      },
    },
  );
}

/** 현재 요청의 로그인 사용자. 없으면 null (예외를 던지지 않는다). */
export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const supabase = await createServerSupabase();
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;
    return { id: data.user.id, email: data.user.email ?? null };
  } catch {
    return null;
  }
}
