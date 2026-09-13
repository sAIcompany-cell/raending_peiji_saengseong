import { NextResponse } from "next/server";
import { mockCtaList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockCtaList);
}
