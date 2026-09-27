import { NextResponse } from "next/server";
import { mockSeoMetadataList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockSeoMetadataList);
}
