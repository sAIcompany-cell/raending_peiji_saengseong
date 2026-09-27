import { NextResponse } from "next/server";
import { z } from "zod";

import { USE_MOCK } from "@/lib/data/mode";
import { getSessionUser, type SessionUser } from "@/lib/supabase/server";

/**
 * Route Handler 가드 — 입력 검증(400)과 세션 확인(401)을 **여기서만** 한다.
 *
 * 규약:
 *   - 쓰기 라우트(POST/PATCH/PUT/DELETE)는 `parseBody(req, schema)` 로 본문을 검증한다.
 *   - 쿼리 파라미터가 있는 읽기 라우트는 `parseQuery(req, schema)` 로 검증한다.
 *   - 보호 리소스는 `requireUser()` 로 세션을 확인한다. 목업 모드에서는 데모 사용자를 돌려준다.
 *   - 실패면 `response` 를 그대로 return 한다: `if (!parsed.ok) return parsed.response;`
 */

export type FieldError = { path: string; message: string };

export type Parsed<T> = { ok: true; data: T } | { ok: false; response: NextResponse };

/** zod `safeParse` 결과를 400 + 필드 오류 목록으로 바꾼다. */
export function parseWith<T>(raw: unknown, schema: z.ZodType<T>): Parsed<T> {
  const result = schema.safeParse(raw);
  if (result.success) {
    return { ok: true, data: result.data };
  }
  const errors: FieldError[] = result.error.issues.map((issue) => ({
    path: issue.path.map(String).join("."),
    message: issue.message,
  }));
  return {
    ok: false,
    response: NextResponse.json({ error: "invalid_payload", errors }, { status: 400 }),
  };
}

/** 요청 본문(JSON)을 검증한다. 본문이 JSON 이 아니면 400 이다. */
export async function parseBody<T>(req: Request, schema: z.ZodType<T>): Promise<Parsed<T>> {
  let raw: unknown = null;
  try {
    raw = await req.json();
  } catch {
    raw = null;
  }
  return parseWith(raw, schema);
}

/** 쿼리 파라미터를 검증한다(문자열 → 스키마의 coerce/transform 이 형을 맞춘다). */
export function parseQuery<T>(req: Request, schema: z.ZodType<T>): Parsed<T> {
  const params = Object.fromEntries(new URL(req.url).searchParams.entries());
  return parseWith(params, schema);
}

export type Guarded = { ok: true; user: SessionUser } | { ok: false; response: NextResponse };

/** 로그인 사용자를 요구한다. 목업 모드에서는 데모 사용자로 통과한다(프리뷰는 키 없이 떠야 한다). */
export async function requireUser(): Promise<Guarded> {
  if (USE_MOCK) {
    return { ok: true, user: { id: "mock-user", email: "demo@example.com" } };
  }
  const user = await getSessionUser();
  if (!user) {
    return {
      ok: false,
      response: NextResponse.json({ error: "unauthenticated" }, { status: 401 }),
    };
  }
  return { ok: true, user };
}
