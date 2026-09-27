// 자동 생성 스모크 테스트 — 정적 GET 라우트가 목업 모드에서 200 을 돌려주는가.
import { describe, expect, it } from "vitest";

import * as route0 from "@/app/api/analyticsevents/route";
import * as route1 from "@/app/api/cta/route";
import * as route2 from "@/app/api/cta/summary/route";
import * as route3 from "@/app/api/fe253b445/route";
import * as route4 from "@/app/api/landingpagesections/route";
import * as route5 from "@/app/api/pc/route";
import * as route6 from "@/app/api/screen-ff2f57/route";
import * as route7 from "@/app/api/seo/route";
import * as route8 from "@/app/api/testimonials/route";

type Handler = (req: Request) => Promise<Response> | Response;

describe("GET /api/analyticsevents", () => {
  it("200 을 돌려준다", async () => {
    const handler = route0.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/analyticsevents"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/cta", () => {
  it("200 을 돌려준다", async () => {
    const handler = route1.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/cta"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/cta/summary", () => {
  it("200 을 돌려준다", async () => {
    const handler = route2.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/cta/summary"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/fe253b445", () => {
  it("200 을 돌려준다", async () => {
    const handler = route3.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/fe253b445"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/landingpagesections", () => {
  it("200 을 돌려준다", async () => {
    const handler = route4.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/landingpagesections"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/pc", () => {
  it("200 을 돌려준다", async () => {
    const handler = route5.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/pc"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/screen-ff2f57", () => {
  it("200 을 돌려준다", async () => {
    const handler = route6.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/screen-ff2f57"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/seo", () => {
  it("200 을 돌려준다", async () => {
    const handler = route7.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/seo"));
    expect(res.status).toBe(200);
  });
});

describe("GET /api/testimonials", () => {
  it("200 을 돌려준다", async () => {
    const handler = route8.GET as unknown as Handler;
    const res = await handler(new Request("http://localhost/api/testimonials"));
    expect(res.status).toBe(200);
  });
});
