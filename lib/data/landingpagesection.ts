import type { LandingPageSection } from "@/types";
import type { LandingPageSectionInput } from "@/lib/schema";
import { USE_MOCK } from "@/lib/data/mode";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { createServerSupabase } from "@/lib/supabase/server";

export const LANDINGPAGESECTION_TABLE = "landing_page_sections";
export type LandingPageSectionRow = LandingPageSection;

const toSection = (row: Record<string, unknown>): LandingPageSection => ({
  id: String(row.id),
  type: typeof row.type === "string" ? row.type : undefined,
  title: typeof row.title === "string" ? row.title : undefined,
  content: typeof row.content === "string" ? row.content : undefined,
  order: typeof row.order === "number" ? row.order : undefined,
  createdAt: typeof row.created_at === "string" ? row.created_at : undefined,
});

export async function listLandingPageSection(): Promise<LandingPageSection[]> {
  if (USE_MOCK) return [...mockLandingPageSectionList];
  const { data, error } = await (await createServerSupabase())
    .from(LANDINGPAGESECTION_TABLE)
    .select("*")
    .order("order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toSection);
}

export async function getLandingPageSection(id: string): Promise<LandingPageSection | null> {
  if (USE_MOCK) return mockLandingPageSectionList.find((item) => item.id === id) ?? null;
  const { data, error } = await (await createServerSupabase())
    .from(LANDINGPAGESECTION_TABLE)
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? toSection(data) : null;
}

export async function createLandingPageSection(input: LandingPageSectionInput): Promise<LandingPageSection> {
  if (USE_MOCK) {
    const item: LandingPageSection = {
      id: `landing-section-${Date.now()}`,
      ...input,
      createdAt: new Date().toISOString(),
    };
    mockLandingPageSectionList.push(item as typeof mockLandingPageSectionList[number]);
    return item;
  }
  const { data, error } = await (await createServerSupabase())
    .from(LANDINGPAGESECTION_TABLE)
    .insert({ type: input.type, title: input.title, content: input.content, order: input.order })
    .select()
    .single();
  if (error) throw error;
  return toSection(data);
}

export async function updateLandingPageSection(id: string, input: LandingPageSectionInput): Promise<LandingPageSection | null> {
  if (USE_MOCK) {
    const item = mockLandingPageSectionList.find((section) => section.id === id);
    if (!item) return null;
    Object.assign(item, input);
    return item;
  }
  const { data, error } = await (await createServerSupabase())
    .from(LANDINGPAGESECTION_TABLE)
    .update(input)
    .eq("id", id)
    .select()
    .maybeSingle();
  if (error) throw error;
  return data ? toSection(data) : null;
}

export async function deleteLandingPageSection(id: string): Promise<boolean> {
  if (USE_MOCK) {
    const index = mockLandingPageSectionList.findIndex((item) => item.id === id);
    if (index < 0) return false;
    mockLandingPageSectionList.splice(index, 1);
    return true;
  }
  const { error } = await (await createServerSupabase()).from(LANDINGPAGESECTION_TABLE).delete().eq("id", id);
  if (error) throw error;
  return true;
}
