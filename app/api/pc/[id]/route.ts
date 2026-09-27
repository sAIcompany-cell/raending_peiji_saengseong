import { NextResponse } from "next/server";
import { getResponsiveSetting } from "@/lib/data/responsive";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const setting = await getResponsiveSetting(id);
  if (!setting) return NextResponse.json({ error: "반응형 설정을 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(setting);
}
