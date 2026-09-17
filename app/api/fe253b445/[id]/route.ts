import { NextResponse } from "next/server";
import { mockLogoList } from "@/lib/mock-data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const logo = mockLogoList.find(l => l.id === id) || mockLogoList[0];
  return NextResponse.json(logo);
}
