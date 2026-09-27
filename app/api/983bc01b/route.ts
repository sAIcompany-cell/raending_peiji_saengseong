import { NextResponse } from "next/server";
import { parseBody } from "@/lib/api/guard";
import { sectionAddRequestSchema } from "@/lib/schema";
import { createLandingPageSection } from "@/lib/data/landingpagesection";

export async function POST(request: Request) {
  const parsed = await parseBody(request, sectionAddRequestSchema);
  if (!parsed.ok) return parsed.response;
  try {
    const section = await createLandingPageSection({
      type: "testimonial",
      title: parsed.data.title ?? "고객 후기",
      content: parsed.data.pagePath ?? "/screen-3",
    });
    return NextResponse.json({ ok: true, section, message: "고객 후기 섹션을 추가했어요." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "고객 후기 섹션을 추가하지 못했어요." }, { status: 500 });
  }
}
