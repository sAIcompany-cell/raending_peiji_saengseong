import { NextResponse } from "next/server";
import { mockSeoMetadataList } from "@/lib/mock-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const seo = mockSeoMetadataList.find((s) => s.id === id);
  if (!seo) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(seo);
}
