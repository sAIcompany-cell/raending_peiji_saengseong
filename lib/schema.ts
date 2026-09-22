/**
 * 폼·API 입력 검증 스키마 — 외부 패키지 없이 순수 TypeScript.
 * 각 parse* 함수는 성공 시 정제된 값을, 실패 시 null 을 반환한다.
 * 오류 메시지가 필요하면 validate* 계열을 쓴다.
 */

import type {
  AnalyticsEvent,
  AnalyticsEventInput,
  AnalyticsEventName,
  CtaButton,
  CtaClickInput,
  CtaDestinationKind,
  CtaStatus,
  CtaVariant,
  LandingPageSection,
  ScreenRoute,
  SectionPoint,
  SectionStatus,
  SectionType,
  Testimonial,
  TestimonialDecision,
  TestimonialDecisionInput,
  TestimonialInput,
  TestimonialRating,
  TestimonialStatus,
} from "@/types";

/* ------------------------------------------------------------------ */
/* 원시 헬퍼                                                            */
/* ------------------------------------------------------------------ */

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function readString(value: unknown, opts?: { min?: number; max?: number; trim?: boolean }): string | null {
  if (typeof value !== "string") return null;
  const v = opts?.trim === false ? value : value.trim();
  if (opts?.min !== undefined && v.length < opts.min) return null;
  if (opts?.max !== undefined && v.length > opts.max) return null;
  return v;
}

export function readOptionalString(value: unknown, opts?: { max?: number }): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  return readString(value, { min: 0, max: opts?.max });
}

export function readNumber(value: unknown, opts?: { min?: number; max?: number; integer?: boolean }): number | null {
  const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  if (typeof n !== "number" || Number.isNaN(n) || !Number.isFinite(n)) return null;
  if (opts?.integer && !Number.isInteger(n)) return null;
  if (opts?.min !== undefined && n < opts.min) return null;
  if (opts?.max !== undefined && n > opts.max) return null;
  return n;
}

export function readEnum<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : null;
}

/** ISO 8601 로 파싱 가능한 문자열이면 정규화된 ISO 문자열을 반환 */
export function readIsoDateTime(value: unknown): string | null {
  if (typeof value !== "string" || value.trim() === "") return null;
  const t = Date.parse(value);
  if (Number.isNaN(t)) return null;
  return new Date(t).toISOString();
}

export function readStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out: string[] = [];
  for (const item of value) {
    const s = readString(item, { min: 1 });
    if (s === null) return null;
    out.push(s);
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* 허용값 상수                                                           */
/* ------------------------------------------------------------------ */

export const SCREEN_ROUTES: readonly ScreenRoute[] = ["/", "/hero", "/screen", "/screen-2", "/screen-3", "/cta"];
export const SECTION_TYPES: readonly SectionType[] = ["hero", "problem", "solution", "benefits", "cta"];
export const SECTION_STATUSES: readonly SectionStatus[] = ["draft", "published"];
export const TESTIMONIAL_STATUSES: readonly TestimonialStatus[] = ["pending", "approved", "rejected"];
export const TESTIMONIAL_DECISIONS: readonly TestimonialDecision[] = ["approve", "reject"];
export const ANALYTICS_EVENT_NAMES: readonly AnalyticsEventName[] = ["page_view", "cta_click"];
export const CTA_DESTINATION_KINDS: readonly CtaDestinationKind[] = ["signup", "start", "next_section"];
export const CTA_STATUSES: readonly CtaStatus[] = ["active", "inactive"];
export const CTA_VARIANTS: readonly CtaVariant[] = ["primary", "secondary"];

export function isScreenRoute(value: unknown): value is ScreenRoute {
  return readEnum(value, SCREEN_ROUTES) !== null;
}

export function readRating(value: unknown): TestimonialRating | null {
  const n = readNumber(value, { min: 1, max: 5, integer: true });
  if (n === null) return null;
  return n as TestimonialRating;
}

/* ------------------------------------------------------------------ */
/* 검증 결과 타입                                                        */
/* ------------------------------------------------------------------ */

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; errors: Record<string, string> };

/* ------------------------------------------------------------------ */
/* LandingPageSection                                                  */
/* ------------------------------------------------------------------ */

export function parseSectionPoint(raw: unknown): SectionPoint | null {
  if (!isRecord(raw)) return null;
  const id = readString(raw.id, { min: 1 });
  const title = readString(raw.title, { min: 1, max: 80 });
  const description = readString(raw.description, { min: 0, max: 300 });
  if (id === null || title === null || description === null) return null;
  const icon = readOptionalString(raw.icon, { max: 60 });
  if (icon === null) return null;
  return icon === undefined ? { id, title, description } : { id, title, description, icon };
}

export function parseLandingPageSection(raw: unknown): LandingPageSection | null {
  if (!isRecord(raw)) return null;
  const id = readString(raw.id, { min: 1 });
  const type = readEnum(raw.type, SECTION_TYPES);
  const name = readString(raw.name, { min: 1, max: 60 });
  const title = readString(raw.title, { min: 1, max: 120 });
  const subtitle = readString(raw.subtitle, { min: 0, max: 240 });
  const content = readString(raw.content ?? "", { min: 0, max: 600 });
  const order = readNumber(raw.order, { min: 0, integer: true });
  const route = readEnum(raw.route, SCREEN_ROUTES);
  const ctaLabel = readString(raw.ctaLabel, { min: 1, max: 40 });
  const status = readEnum(raw.status, SECTION_STATUSES);
  const updatedAt = readIsoDateTime(raw.updatedAt);

  if (
    id === null ||
    type === null ||
    name === null ||
    title === null ||
    subtitle === null ||
    content === null ||
    order === null ||
    route === null ||
    ctaLabel === null ||
    status === null ||
    updatedAt === null
  ) {
    return null;
  }

  let nextRoute: ScreenRoute | null = null;
  if (raw.nextRoute !== null && raw.nextRoute !== undefined) {
    const nr = readEnum(raw.nextRoute, SCREEN_ROUTES);
    if (nr === null) return null;
    nextRoute = nr;
  }

  let ctaId: string | null = null;
  if (raw.ctaId !== null && raw.ctaId !== undefined) {
    const c = readString(raw.ctaId, { min: 1 });
    if (c === null) return null;
    ctaId = c;
  }

  const pointsRaw = raw.points ?? [];
  if (!Array.isArray(pointsRaw)) return null;
  const points: SectionPoint[] = [];
  for (const p of pointsRaw) {
    const parsed = parseSectionPoint(p);
    if (parsed === null) return null;
    points.push(parsed);
  }

  return { id, type, name, title, subtitle, content, points, order, route, nextRoute, ctaLabel, ctaId, status, updatedAt };
}

/* ------------------------------------------------------------------ */
/* Testimonial                                                         */
/* ------------------------------------------------------------------ */

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (!isRecord(raw)) return null;
  const id = readString(raw.id, { min: 1 });
  const quote = readString(raw.quote, { min: 1, max: 500 });
  const author = readString(raw.author, { min: 1, max: 40 });
  const authorContext = readString(raw.authorContext ?? "", { min: 0, max: 80 });
  const result = readString(raw.result, { min: 1, max: 120 });
  const rating = readRating(raw.rating);
  const status = readEnum(raw.status, TESTIMONIAL_STATUSES);
  const createdAt = readIsoDateTime(raw.createdAt);

  if (
    id === null ||
    quote === null ||
    author === null ||
    authorContext === null ||
    result === null ||
    rating === null ||
    status === null ||
    createdAt === null
  ) {
    return null;
  }

  let decidedAt: string | null = null;
  if (raw.decidedAt !== null && raw.decidedAt !== undefined) {
    const d = readIsoDateTime(raw.decidedAt);
    if (d === null) return null;
    decidedAt = d;
  }

  return { id, quote, author, authorContext, result, rating, status, createdAt, decidedAt };
}

/** 후기 등록 폼 입력 검증 — 필드별 한국어 오류 메시지 반환 */
export function validateTestimonialInput(raw: unknown): ValidationResult<TestimonialInput> {
  const errors: Record<string, string> = {};
  if (!isRecord(raw)) {
    return { ok: false, errors: { _form: "입력 형식이 올바르지 않습니다." } };
  }

  const quote = readString(raw.quote, { min: 10, max: 500 });
  if (quote === null) errors.quote = "후기는 10자 이상 500자 이하로 입력해 주세요.";

  const author = readString(raw.author, { min: 1, max: 40 });
  if (author === null) errors.author = "작성자 이름을 입력해 주세요.";

  const authorContext = readString(raw.authorContext ?? "", { min: 0, max: 80 });
  if (authorContext === null) errors.authorContext = "작성자 설명은 80자 이하로 입력해 주세요.";

  const result = readString(raw.result, { min: 1, max: 120 });
  if (result === null) errors.result = "구체적인 결과를 한 줄로 적어 주세요.";

  const rating = readRating(raw.rating);
  if (rating === null) errors.rating = "별점은 1~5 사이로 선택해 주세요.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    value: {
      quote: quote as string,
      author: author as string,
      authorContext: authorContext as string,
      result: result as string,
      rating: rating as TestimonialRating,
    },
  };
}

export function parseTestimonialInput(raw: unknown): TestimonialInput | null {
  const r = validateTestimonialInput(raw);
  return r.ok ? r.value : null;
}

export function parseTestimonialDecisionInput(raw: unknown): TestimonialDecisionInput | null {
  if (!isRecord(raw)) return null;
  const decision = readEnum(raw.decision, TESTIMONIAL_DECISIONS);
  if (decision === null) return null;
  const note = readOptionalString(raw.note, { max: 200 });
  if (note === null) return { decision };
  return note === undefined ? { decision } : { decision, note };
}

/* ------------------------------------------------------------------ */
/* AnalyticsEvent                                                      */
/* ------------------------------------------------------------------ */

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (!isRecord(raw)) return null;
  const id = readString(raw.id, { min: 1 });
  const name = readEnum(raw.name, ANALYTICS_EVENT_NAMES);
  const pagePath = readString(raw.pagePath, { min: 1, max: 200 });
  const occurredAt = readIsoDateTime(raw.occurredAt);
  if (id === null || name === null || pagePath === null || occurredAt === null) return null;
  if (!pagePath.startsWith("/")) return null;

  let ctaId: string | null = null;
  if (raw.ctaId !== null && raw.ctaId !== undefined) {
    const c = readString(raw.ctaId, { min: 1 });
    if (c === null) return null;
    ctaId = c;
  }

  let label: string | null = null;
  if (raw.label !== null && raw.label !== undefined) {
    const l = readString(raw.label, { min: 1, max: 80 });
    if (l === null) return null;
    label = l;
  }

  // 규칙: cta_click 은 ctaId 가 반드시 있어야 한다(방문 이벤트와 구분 기준)
  if (name === "cta_click" && ctaId === null) return null;

  return { id, name, pagePath, occurredAt, ctaId, label };
}

export function parseAnalyticsEventInput(raw: unknown): AnalyticsEventInput | null {
  if (!isRecord(raw)) return null;
  const name = readEnum(raw.name, ANALYTICS_EVENT_NAMES);
  const pagePath = readString(raw.pagePath, { min: 1, max: 200 });
  if (name === null || pagePath === null || !pagePath.startsWith("/")) return null;

  const input: AnalyticsEventInput = { name, pagePath };

  if (raw.occurredAt !== undefined) {
    const o = readIsoDateTime(raw.occurredAt);
    if (o === null) return null;
    input.occurredAt = o;
  }
  if (raw.ctaId !== undefined) {
    if (raw.ctaId === null) input.ctaId = null;
    else {
      const c = readString(raw.ctaId, { min: 1 });
      if (c === null) return null;
      input.ctaId = c;
    }
  }
  if (raw.label !== undefined) {
    if (raw.label === null) input.label = null;
    else {
      const l = readString(raw.label, { min: 1, max: 80 });
      if (l === null) return null;
      input.label = l;
    }
  }
  if (name === "cta_click" && !input.ctaId) return null;
  return input;
}

/* ------------------------------------------------------------------ */
/* CtaButton                                                           */
/* ------------------------------------------------------------------ */

export function parseCtaButton(raw: unknown): CtaButton | null {
  if (!isRecord(raw)) return null;
  const id = readString(raw.id, { min: 1 });
  const label = readString(raw.label, { min: 1, max: 40 });
  const href = readEnum(raw.href, SCREEN_ROUTES);
  const destinationKind = readEnum(raw.destinationKind, CTA_DESTINATION_KINDS);
  const destinationDescription = readString(raw.destinationDescription ?? "", { min: 0, max: 200 });
  const sectionId = readString(raw.sectionId, { min: 1 });
  const variant = readEnum(raw.variant ?? "primary", CTA_VARIANTS);
  const status = readEnum(raw.status ?? "active", CTA_STATUSES);
  const clickCount = readNumber(raw.clickCount ?? 0, { min: 0, integer: true });

  if (
    id === null ||
    label === null ||
    href === null ||
    destinationKind === null ||
    destinationDescription === null ||
    sectionId === null ||
    variant === null ||
    status === null ||
    clickCount === null
  ) {
    return null;
  }

  return { id, label, href, destinationKind, destinationDescription, sectionId, variant, status, clickCount };
}

export function parseCtaClickInput(raw: unknown): CtaClickInput | null {
  if (!isRecord(raw)) return null;
  const ctaId = readString(raw.ctaId, { min: 1 });
  const pagePath = readString(raw.pagePath, { min: 1, max: 200 });
  if (ctaId === null || pagePath === null || !pagePath.startsWith("/")) return null;
  const input: CtaClickInput = { ctaId, pagePath };
  if (raw.occurredAt !== undefined) {
    const o = readIsoDateTime(raw.occurredAt);
    if (o === null) return null;
    input.occurredAt = o;
  }
  return input;
}

/* ------------------------------------------------------------------ */
/* 경로 파라미터                                                         */
/* ------------------------------------------------------------------ */

/** URL 세그먼트 id — 영문·숫자·하이픈·언더스코어만, 1~64자 */
export function parseEntityId(raw: unknown): string | null {
  const s = readString(raw, { min: 1, max: 64 });
  if (s === null) return null;
  return /^[A-Za-z0-9_-]+$/.test(s) ? s : null;
}
