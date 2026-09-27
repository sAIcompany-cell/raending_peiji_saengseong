import { NextResponse } from "next/server";
import { listTestimonial } from "@/lib/data/testimonial";

export async function GET() {
  try {
    return NextResponse.json(await listTestimonial());
  } catch {
    return NextResponse.json({ error: "후기 정보를 불러오지 못했어요." }, { status: 500 });
  }
}
