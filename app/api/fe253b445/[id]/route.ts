import { NextResponse } from "next/server";
import { getLogo } from "@/lib/data/logo";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const logo = await getLogo(id);
  if (!logo) return NextResponse.json({ error: "로고를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(logo);
}
