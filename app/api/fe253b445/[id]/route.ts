import { NextResponse } from "next/server";
import { mockLogoList } from "@/lib/mock-data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const logo = mockLogoList.find((item) => item.id === id);

  if (!logo) {
    return NextResponse.json(
      { error: "요청한 상단 로고를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return NextResponse.json(logo);
}
