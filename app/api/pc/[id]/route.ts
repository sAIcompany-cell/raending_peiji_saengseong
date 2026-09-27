import { NextResponse } from "next/server";
import { getMockResponsiveSetting } from "@/lib/mock-data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const setting = getMockResponsiveSetting(params.id);
  if (!setting) return NextResponse.json({ error: "반응형 설정을 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(setting);
}
