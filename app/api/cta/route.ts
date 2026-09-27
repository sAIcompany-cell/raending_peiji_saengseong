import { NextResponse } from "next/server";
import { listCta } from "@/lib/data/cta";

export async function GET() {
  try {
    return NextResponse.json(await listCta());
  } catch {
    return NextResponse.json({ error: "CTA 목록을 불러오지 못했어요." }, { status: 500 });
  }
}
