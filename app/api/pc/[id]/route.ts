import { NextResponse } from "next/server";
import { mockResponsiveSettingList } from "@/lib/mock-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const setting = mockResponsiveSettingList.find((s) => s.id === id);
  if (!setting) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(setting);
}
