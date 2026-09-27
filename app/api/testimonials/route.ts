import { NextResponse } from "next/server";
import { parseBody, requireUser } from "@/lib/api/guard";
import { testimonialInputSchema } from "@/lib/schema";
import { createTestimonial, listTestimonial } from "@/lib/data/testimonial";

export async function GET() {
  try {
    return NextResponse.json(await listTestimonial());
  } catch {
    return NextResponse.json({ error: "후기를 불러오지 못했어요." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const guard = await requireUser();
  if (!guard.ok) return guard.response;
  const parsed = await parseBody(request, testimonialInputSchema);
  if (!parsed.ok) return parsed.response;
  try {
    return NextResponse.json(await createTestimonial(parsed.data), { status: 201 });
  } catch {
    return NextResponse.json({ error: "후기를 저장하지 못했어요." }, { status: 500 });
  }
}
