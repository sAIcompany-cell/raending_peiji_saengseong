import { NextResponse } from "next/server";
import { parseBody, requireUser } from "@/lib/api/guard";
import { landingPageSectionInputSchema } from "@/lib/schema";
import { createLandingPageSection, listLandingPageSection } from "@/lib/data/landingpagesection";

export async function GET() {
  try {
    return NextResponse.json(await listLandingPageSection());
  } catch {
    return NextResponse.json({ error: "섹션을 불러오지 못했어요." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const guard = await requireUser();
  if (!guard.ok) return guard.response;
  const parsed = await parseBody(request, landingPageSectionInputSchema);
  if (!parsed.ok) return parsed.response;
  try {
    return NextResponse.json(await createLandingPageSection(parsed.data), { status: 201 });
  } catch {
    return NextResponse.json({ error: "섹션을 저장하지 못했어요." }, { status: 500 });
  }
}
