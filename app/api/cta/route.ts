import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { ApiResponse, LandingPageSection } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<LandingPageSection[]>>> {
  const sections = mockLandingPageSectionList.filter(
    (section) => section.type === "cta",
  );

  return NextResponse.json({ data: sections });
}
