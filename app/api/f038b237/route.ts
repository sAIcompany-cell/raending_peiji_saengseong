import { NextResponse } from "next/server";
import { parseBody } from "@/lib/api/guard";
import { sectionAddRequestSchema } from "@/lib/schema";
import { createLandingPageSection } from "@/lib/data/landingpagesection";

export async function POST(request: Request) {
  const parsed = await parseBody(request, sectionAddRequestSchema);
  if (!parsed.ok) return parsed.response;
  try {
    const section = await createLandingPageSection({
      type: "faq",
      title: parsed.data.title ?? "자주 묻는 질문",
      content: parsed.data.pagePath ?? "/hero",
    });
    return NextResponse.json({ ok: true, section, message: "자주 묻는 질문 섹션을 추가했어요." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "자주 묻는 질문 섹션을 추가하지 못했어요." }, { status: 500 });
  }
}
