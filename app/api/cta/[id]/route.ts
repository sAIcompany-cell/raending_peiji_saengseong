import { NextResponse } from "next/server";
import { mockCtaList } from "@/lib/mock-data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cta = mockCtaList.find(c => c.id === id) || mockCtaList[0];
  return NextResponse.json(cta);
}
