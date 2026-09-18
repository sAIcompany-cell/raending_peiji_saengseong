import { NextResponse } from "next/server";
import { mockLogoList } from "@/lib/mock-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const logo = mockLogoList.find((l) => l.id === id);
  if (!logo) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(logo);
}
