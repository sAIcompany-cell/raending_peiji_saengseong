import { NextResponse } from "next/server";
import { mockAnalyticsEventList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockAnalyticsEventList);
}
