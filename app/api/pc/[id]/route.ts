import { mockLandingPageSectionList } from "@/lib/mock-data";
import type { ApiResponse, LandingPageSection } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
): Promise<NextResponse<ApiResponse<LandingPageSection>>> {
  const segments = new URL(request.url).pathname.split("/").filter(Boolean);
  const id = decodeURIComponent(segments[segments.length - 1] ?? "");
  const section = mockLandingPageSectionList.find((item) => item.id === id);

  if (!section) {
    return NextResponse.json(
      { error: { code: "NOT_FOUND", message: "요청한 반응형 기준 정보를 찾을 수 없어요." } },
      { status: 404 },
    );
  }

  return NextResponse.json({ data: section });
}
