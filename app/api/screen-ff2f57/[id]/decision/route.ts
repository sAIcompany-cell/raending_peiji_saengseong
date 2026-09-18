import { NextResponse } from "next/server";
import { mockTestimonialList } from "@/lib/mock-data";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const testimonial = mockTestimonialList.find((t) => t.id === id);
  if (!testimonial) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(testimonial);
}
