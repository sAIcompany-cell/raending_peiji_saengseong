import { NextResponse } from "next/server";
import { mockTestimonialList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockTestimonialList);
}
