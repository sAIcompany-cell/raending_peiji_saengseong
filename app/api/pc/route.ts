import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { ApiResponse, LandingPageSection } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<LandingPageSection[]>>> {
  return NextResponse.json({ data: mockLandingPageSectionList });
}
