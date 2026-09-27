import { NextResponse } from "next/server";
import { listResponsiveSetting } from "@/lib/data/responsive";

export async function GET() {
  return NextResponse.json(await listResponsiveSetting());
}
