import { NextResponse } from "next/server";
import { mockResponsiveSettingList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockResponsiveSettingList);
}
