import { NextResponse } from "next/server";
import { parseBody, requireUser } from "@/lib/api/guard";
import { analyticsEventInputSchema } from "@/lib/schema";
import { createAnalyticsEvent, listAnalyticsEvent } from "@/lib/data/analyticsevent";

export async function GET() {
  try {
    return NextResponse.json(await listAnalyticsEvent());
  } catch {
    return NextResponse.json({ error: "이벤트를 불러오지 못했어요." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const guard = await requireUser();
  if (!guard.ok) return guard.response;
  const parsed = await parseBody(request, analyticsEventInputSchema);
  if (!parsed.ok) return parsed.response;
  try {
    return NextResponse.json(await createAnalyticsEvent(parsed.data), { status: 201 });
  } catch {
    return NextResponse.json({ error: "이벤트를 저장하지 못했어요." }, { status: 500 });
  }
}
