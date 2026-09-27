import type { AnalyticsEvent, AnalyticsEventInput } from "@/types";
import { USE_MOCK } from "@/lib/data/mode";
import { mockAnalyticsEventList } from "@/lib/mock-data";
import { createServerSupabase } from "@/lib/supabase/server";

export const ANALYTICSEVENT_TABLE = "analytics_events";
export type AnalyticsEventRow = AnalyticsEvent;

const toEvent = (row: Record<string, unknown>): AnalyticsEvent => ({
  id: String(row.id),
  name: typeof row.name === "string" ? row.name : undefined,
  pagePath: typeof row.page_path === "string" ? row.page_path : undefined,
  occurredAt: typeof row.occurred_at === "string" ? row.occurred_at : undefined,
  createdAt: typeof row.created_at === "string" ? row.created_at : undefined,
});

export async function listAnalyticsEvent(): Promise<AnalyticsEvent[]> {
  if (USE_MOCK) return [...mockAnalyticsEventList];
  const { data, error } = await createServerSupabase().from(ANALYTICSEVENT_TABLE).select("*").order("occurred_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(toEvent);
}

export async function getAnalyticsEvent(id: string): Promise<AnalyticsEvent | null> {
  if (USE_MOCK) return mockAnalyticsEventList.find((item) => item.id === id) ?? null;
  const { data, error } = await createServerSupabase().from(ANALYTICSEVENT_TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data ? toEvent(data) : null;
}

export async function createAnalyticsEvent(input: AnalyticsEventInput): Promise<AnalyticsEvent> {
  if (USE_MOCK) {
    const item = {
      id: `analytics-event-${Date.now()}`,
      name: input.name,
      pagePath: input.pagePath,
      occurredAt: input.occurredAt ?? new Date().toISOString(),
      createdAt: new Date().toISOString(),
    } as typeof mockAnalyticsEventList[number];
    mockAnalyticsEventList.push(item);
    return item;
  }
  const { data, error } = await createServerSupabase().from(ANALYTICSEVENT_TABLE).insert({ name: input.name, page_path: input.pagePath, occurred_at: input.occurredAt }).select().single();
  if (error) throw error;
  return toEvent(data);
}

export async function updateAnalyticsEvent(id: string, input: AnalyticsEventInput): Promise<AnalyticsEvent | null> {
  if (USE_MOCK) {
    const item = mockAnalyticsEventList.find((event) => event.id === id);
    if (!item) return null;
    Object.assign(item, input);
    return item;
  }
  const { data, error } = await createServerSupabase().from(ANALYTICSEVENT_TABLE).update({ name: input.name, page_path: input.pagePath, occurred_at: input.occurredAt }).eq("id", id).select().maybeSingle();
  if (error) throw error;
  return data ? toEvent(data) : null;
}

export async function deleteAnalyticsEvent(id: string): Promise<boolean> {
  if (USE_MOCK) {
    const index = mockAnalyticsEventList.findIndex((item) => item.id === id);
    if (index < 0) return false;
    mockAnalyticsEventList.splice(index, 1);
    return true;
  }
  const { error } = await createServerSupabase().from(ANALYTICSEVENT_TABLE).delete().eq("id", id);
  if (error) throw error;
  return true;
}
