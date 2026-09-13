import { mockAnalyticsEventList } from "@/lib/mock-data";
import type { AnalyticsEvent, ApiResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<AnalyticsEvent[]>>> {
  return NextResponse.json({ data: mockAnalyticsEventList });
}
