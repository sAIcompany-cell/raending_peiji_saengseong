import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true, message: "자주 묻는 질문 섹션 추가 요청을 받았어요." }, { status: 201 });
}
