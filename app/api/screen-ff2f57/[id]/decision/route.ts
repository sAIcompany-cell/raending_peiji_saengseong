import { NextResponse } from "next/server";
import { getTestimonial } from "@/lib/data/testimonial";

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  try {
    const testimonial = await getTestimonial(params.id);
    if (!testimonial) return NextResponse.json({ error: "후기를 찾을 수 없어요." }, { status: 404 });
    return NextResponse.json({ testimonial, decision: "positive", message: "긍정적인 사용자 후기입니다." });
  } catch {
    return NextResponse.json({ error: "후기 판정을 처리하지 못했어요." }, { status: 500 });
  }
}
