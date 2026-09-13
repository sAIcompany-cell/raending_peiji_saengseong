import { mockTestimonialList } from "@/lib/mock-data";
import type { ApiResponse, Testimonial } from "@/types";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse<Testimonial>>> {
  const segments = new URL(request.url).pathname.split("/").filter(Boolean);
  const id = decodeURIComponent(segments[segments.length - 2] ?? "");
  const testimonial = mockTestimonialList.find((item) => item.id === id);

  if (!testimonial) {
    return NextResponse.json(
      { error: { code: "NOT_FOUND", message: "판정할 사용자 후기를 찾을 수 없어요." } },
      { status: 404 },
    );
  }

  return NextResponse.json({ data: testimonial });
}
