// 자동 생성 스모크 테스트 — 기능 「자주 묻는 질문 섹션 추가」 의 화면(/hero)이 목업 모드에서 렌더되는가.
import type { ComponentType, ReactElement } from "react";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn(), prefetch: vi.fn(), refresh: vi.fn() }),
  usePathname: () => "/hero",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
  redirect: vi.fn(),
  notFound: vi.fn(),
}));

import Page from "@/app/hero/page";

describe("기능 「자주 묻는 질문 섹션 추가」 — /hero", () => {
  it("화면이 렌더된다", async () => {
    const Comp = Page as unknown as ComponentType;
    const { container } = render(<Comp />);
    expect((container.textContent ?? "").trim().length).toBeGreaterThan(0);
  });
});
