import { NextResponse } from "next/server";
import { listLogo } from "@/lib/data/logo";

export async function GET() {
  return NextResponse.json(await listLogo());
}
