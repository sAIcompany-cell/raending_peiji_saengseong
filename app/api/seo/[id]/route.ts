import { NextResponse } from "next/server";
import { mockSeoMetadataList } from "@/lib/mock-data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seo = mockSeoMetadataList.find(s => s.id === id) || mockSeoMetadataList[0];
  return NextResponse.json(seo);
}
