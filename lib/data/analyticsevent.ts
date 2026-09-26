import type { AnalyticsEventInput } from "@/lib/schema";
import { USE_MOCK } from "@/lib/data/mode";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import { createServerSupabase } from "@/lib/supabase/server";

/**
 * AnalyticsEvent 데이터 게이트웨이 — **API 라우트가 데이터를 만지는 유일한 창구.**
 *
 * USE_MOCK(lib/data/mode.ts) 이면 lib/mock-data.ts 의 시드를 메모리에서 다루고,
 * 아니면 Supabase 테이블 `analyticsevent`(supabase/schema.sql)을 읽고 쓴다. RLS 는 서버 세션의
 * 사용자로 적용되므로 여기서 user_id 를 따로 거르지 않는다.
 *
 * 계약 타입이 확정되면(types/index.ts) `AnalyticsEventRow` 를 그 타입으로 바꾸고 mock 상수 이름을 맞춘다.
 */

export const ANALYTICSEVENT_TABLE = "analyticsevent";

export type AnalyticsEventRow = (typeof mockAnalyticsEventList)[number];

// 목업 모드의 메모리 저장소 — 프로세스가 살아 있는 동안 쓰기가 반영돼 화면이 살아 움직인다.
const memory: AnalyticsEventRow[] = [...mockAnalyticsEventList];

function nextId(): string {
  return `analyticsevent_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export async function listAnalyticsEvent(): Promise<AnalyticsEventRow[]> {
  if (USE_MOCK) return [...memory];
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from(ANALYTICSEVENT_TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as AnalyticsEventRow[];
}

export async function getAnalyticsEvent(id: string): Promise<AnalyticsEventRow | null> {
  if (USE_MOCK) return memory.find((row) => row.id === id) ?? null;
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from(ANALYTICSEVENT_TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as AnalyticsEventRow | null) ?? null;
}

export async function createAnalyticsEvent(input: AnalyticsEventInput, userId?: string): Promise<AnalyticsEventRow> {
  if (USE_MOCK) {
    const row = { ...input, id: nextId() } as AnalyticsEventRow;
    memory.unshift(row);
    return row;
  }
  const supabase = await createServerSupabase();
  const payload = userId ? { ...input, user_id: userId } : input;
  const { data, error } = await supabase.from(ANALYTICSEVENT_TABLE).insert(payload).select("*").single();
  if (error) throw new Error(error.message);
  return data as AnalyticsEventRow;
}

export async function updateAnalyticsEvent(
  id: string,
  patch: Partial<AnalyticsEventInput>,
): Promise<AnalyticsEventRow | null> {
  if (USE_MOCK) {
    const idx = memory.findIndex((row) => row.id === id);
    if (idx < 0) return null;
    memory[idx] = { ...memory[idx], ...patch };
    return memory[idx];
  }
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from(ANALYTICSEVENT_TABLE)
    .update(patch)
    .eq("id", id)
    .select("*")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as AnalyticsEventRow | null) ?? null;
}

export async function deleteAnalyticsEvent(id: string): Promise<boolean> {
  if (USE_MOCK) {
    const idx = memory.findIndex((row) => row.id === id);
    if (idx < 0) return false;
    memory.splice(idx, 1);
    return true;
  }
  const supabase = await createServerSupabase();
  const { error, count } = await supabase
    .from(ANALYTICSEVENT_TABLE)
    .delete({ count: "exact" })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return (count ?? 0) > 0;
}
