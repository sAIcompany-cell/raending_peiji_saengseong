import { NextResponse } from "next/server";
import { getCtaSummary } from "@/lib/data/cta";

export async function GET() {
  try {
    return NextResponse.json(await getCtaSummary());
  } catch {
    return NextResponse.json({ error: "CTA 요약을 불러오지 못했어요." }, { status: 500 });
  }
}
