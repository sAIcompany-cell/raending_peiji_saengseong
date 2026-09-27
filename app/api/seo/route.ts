import { NextResponse } from "next/server";
import { listSeoMetadata } from "@/lib/data/seo";

export async function GET() {
  return NextResponse.json(await listSeoMetadata());
}
