import { NextResponse } from "next/server";
import { getMockLogo } from "@/lib/mock-data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const logo = getMockLogo(params.id);
  if (!logo) return NextResponse.json({ error: "로고를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(logo);
}
