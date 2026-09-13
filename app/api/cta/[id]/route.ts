import { NextResponse } from "next/server";
import { mockCtaList } from "@/lib/mock-data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const cta = mockCtaList.find((item) => item.id === id);

  if (!cta) {
    return NextResponse.json(
      { error: "요청한 CTA 정보를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return NextResponse.json(cta);
}
