/**
 * 듀얼 모드 데이터 어댑터 — 목업 <-> 실 API 스위치.
 *
 * `NEXT_PUBLIC_USE_MOCK_DATA` 로 전환한다:
 *   - 미설정(기본) 또는 "true" -> **목업**. 실 API 가 아직 없어도 화면이 완성돼 보인다.
 *   - "false"                  -> 실 API(fetch).
 *
 * 기본값이 목업인 이유: 생성 직후에는 백엔드가 비어 있다. 여기서 실 API 를 기본으로
 * 두면 첫 화면이 통째로 빈 상태·에러로 뜬다. 게다가 실 API 모드에서 fetch 가 실패해도
 * **예외를 던지지 않고 목업으로 되돌린다** — 화면이 죽는 것보다 낫다(콘솔 경고만 남긴다).
 */

const MOCK_FLAG = process.env.NEXT_PUBLIC_USE_MOCK_DATA;

/** 목업 모드인가. "false" 를 명시했을 때만 실 API 를 쓴다. */
export const usingMockData: boolean = MOCK_FLAG !== "false";

export type ApiResult<T> =
  | { ok: true; data: T; source: "mock" | "api" }
  | { ok: false; error: string };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 한 번의 데이터 조회. `mock` 은 목업 모드(또는 실 API 실패)에서 쓸 값을 만드는 함수다.
 * 호출부는 반환된 `ok` 만 보면 되고, 어느 쪽에서 왔는지는 `source` 로 알 수 있다.
 */
export async function fetchData<T>(
  path: string,
  mock: () => T,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  if (usingMockData) {
    await delay(120); // 로딩 상태(Skeleton)가 실제로 보이도록 아주 짧게 지연
    return { ok: true, data: mock(), source: "mock" };
  }
  try {
    const res = await fetch(path, {
      ...init,
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    });
    if (!res.ok) {
      return { ok: false, error: `요청에 실패했어요 (${res.status})` };
    }
    return { ok: true, data: (await res.json()) as T, source: "api" };
  } catch {
    // 네트워크·서버 부재 — 화면을 죽이지 않고 목업으로 되돌린다.
    console.warn(`[api-client] ${path} 호출에 실패해 목업 데이터로 대체했어요.`);
    return { ok: true, data: mock(), source: "mock" };
  }
}

/** 쓰기 요청. 목업 모드에서는 서버에 보내지 않고 성공으로 처리한다. */
export async function sendData<T>(
  path: string,
  body: unknown,
  mock: () => T,
  method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST",
): Promise<ApiResult<T>> {
  if (usingMockData) {
    await delay(160);
    return { ok: true, data: mock(), source: "mock" };
  }
  return fetchData<T>(path, mock, { method, body: JSON.stringify(body) });
}
