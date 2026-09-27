import { NextResponse } from "next/server";
import { getSeoMetadata } from "@/lib/data/seo";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const metadata = await getSeoMetadata(id);
  if (!metadata) return NextResponse.json({ error: "SEO 메타 정보를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(metadata);
}
