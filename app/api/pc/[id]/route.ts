import { NextResponse } from "next/server";
import { mockResponsiveSettingList } from "@/lib/mock-data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const setting = mockResponsiveSettingList.find((item) => item.id === id);

  if (!setting) {
    return NextResponse.json(
      { error: "요청한 반응형 표시 기준을 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return NextResponse.json(setting);
}
