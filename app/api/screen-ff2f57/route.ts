import { mockTestimonialList } from "@/lib/mock-data";
import type { ApiResponse, Testimonial } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<Testimonial[]>>> {
  return NextResponse.json({ data: mockTestimonialList });
}
