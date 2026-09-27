import { NextResponse } from "next/server";
import { getMockSeoMetadata } from "@/lib/mock-data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const metadata = getMockSeoMetadata(params.id);
  if (!metadata) return NextResponse.json({ error: "SEO 메타 정보를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(metadata);
}
