import { NextResponse } from "next/server";
import { mockTestimonialList } from "@/lib/mock-data";

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const testimonial = mockTestimonialList.find((item) => item.id === id);

  if (!testimonial) {
    return NextResponse.json(
      { error: "판정할 사용자 후기를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return NextResponse.json(testimonial);
}
