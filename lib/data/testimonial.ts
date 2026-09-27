import type { Testimonial } from "@/types";
import type { TestimonialInput } from "@/lib/schema";
import { USE_MOCK } from "@/lib/data/mode";
import { mockTestimonialList } from "@/lib/mock-data";
import { createServerSupabase } from "@/lib/supabase/server";

export const TESTIMONIAL_TABLE = "testimonials";
export type TestimonialRow = Testimonial;

const toTestimonial = (row: Record<string, unknown>): Testimonial => ({
  id: String(row.id),
  quote: typeof row.quote === "string" ? row.quote : undefined,
  author: typeof row.author === "string" ? row.author : undefined,
  result: typeof row.result === "string" ? row.result : undefined,
  createdAt: typeof row.created_at === "string" ? row.created_at : undefined,
});

export async function listTestimonial(): Promise<Testimonial[]> {
  if (USE_MOCK) return [...mockTestimonialList];
  const { data, error } = await (await createServerSupabase()).from(TESTIMONIAL_TABLE).select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(toTestimonial);
}

export async function getTestimonial(id: string): Promise<Testimonial | null> {
  if (USE_MOCK) return mockTestimonialList.find((item) => item.id === id) ?? null;
  const { data, error } = await (await createServerSupabase()).from(TESTIMONIAL_TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data ? toTestimonial(data) : null;
}

export async function createTestimonial(input: TestimonialInput): Promise<Testimonial> {
  if (USE_MOCK) {
    const item = { id: `testimonial-${Date.now()}`, ...input, createdAt: new Date().toISOString() } as typeof mockTestimonialList[number];
    mockTestimonialList.push(item);
    return item;
  }
  const { data, error } = await (await createServerSupabase()).from(TESTIMONIAL_TABLE).insert(input).select().single();
  if (error) throw error;
  return toTestimonial(data);
}

export async function updateTestimonial(id: string, input: TestimonialInput): Promise<Testimonial | null> {
  if (USE_MOCK) {
    const item = mockTestimonialList.find((testimonial) => testimonial.id === id);
    if (!item) return null;
    Object.assign(item, input);
    return item;
  }
  const { data, error } = await (await createServerSupabase()).from(TESTIMONIAL_TABLE).update(input).eq("id", id).select().maybeSingle();
  if (error) throw error;
  return data ? toTestimonial(data) : null;
}

export async function deleteTestimonial(id: string): Promise<boolean> {
  if (USE_MOCK) {
    const index = mockTestimonialList.findIndex((item) => item.id === id);
    if (index < 0) return false;
    mockTestimonialList.splice(index, 1);
    return true;
  }
  const { error } = await (await createServerSupabase()).from(TESTIMONIAL_TABLE).delete().eq("id", id);
  if (error) throw error;
  return true;
}
