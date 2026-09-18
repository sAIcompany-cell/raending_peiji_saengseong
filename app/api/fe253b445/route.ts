import { NextResponse } from "next/server";
import { mockLogoList } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockLogoList);
}
