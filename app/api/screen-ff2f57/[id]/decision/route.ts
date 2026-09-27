import { NextResponse } from "next/server";
import { parseBody } from "@/lib/api/guard";
import { testimonialDecisionInputSchema } from "@/lib/schema";
import { getTestimonial } from "@/lib/data/testimonial";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const parsed = await parseBody(request, testimonialDecisionInputSchema);
  if (!parsed.ok) return parsed.response;
  try {
    const { id } = await params;
    const testimonial = await getTestimonial(id);
    if (!testimonial) return NextResponse.json({ error: "후기를 찾을 수 없어요." }, { status: 404 });
    return NextResponse.json({ testimonial, decision: "positive", message: "긍정적인 사용자 후기입니다." });
  } catch {
    return NextResponse.json({ error: "후기 판정을 처리하지 못했어요." }, { status: 500 });
  }
}
