/**
 * 순수 TypeScript 검증 스키마 (외부 패키지 없음).
 * 폼·API 입력을 types/index.ts 의 계약 타입으로 좁힌다.
 */
import type {
  AnalyticsEvent,
  AnalyticsEventInput,
  AnalyticsEventName,
  DeviceKind,
  LandingSectionType,
  SectionStatus,
  Testimonial,
} from "@/types";

export const ANALYTICS_EVENT_NAMES: readonly AnalyticsEventName[] = [
  "page_view",
  "cta_click",
] as const;

export const DEVICE_KINDS: readonly DeviceKind[] = ["mobile", "desktop"] as const;

export const LANDING_SECTION_TYPES: readonly LandingSectionType[] = [
  "hero",
  "problem",
  "service",
  "benefit",
  "testimonial",
  "cta",
] as const;

export const SECTION_STATUSES: readonly SectionStatus[] = [
  "draft",
  "published",
  "archived",
] as const;

/** 검증 실패 메시지 (사용자 언어) */
export interface ValidationError {
  field: string;
  message: string;
}

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError[] };

function isRecord(raw: unknown): raw is Record<string, unknown> {
  return typeof raw === "object" && raw !== null && !Array.isArray(raw);
}

export function asString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

export function asNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function asMember<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : null;
}

export function isAnalyticsEventName(value: unknown): value is AnalyticsEventName {
  return asMember(value, ANALYTICS_EVENT_NAMES) !== null;
}

export function isDeviceKind(value: unknown): value is DeviceKind {
  return asMember(value, DEVICE_KINDS) !== null;
}

/** 이벤트 기록 입력 검증 — 실패해도 화면 동작을 막지 않도록 오류를 값으로 반환한다 */
export function parseAnalyticsEventInput(
  raw: unknown,
): ValidationResult<AnalyticsEventInput> {
  const errors: ValidationError[] = [];
  if (!isRecord(raw)) {
    return {
      success: false,
      errors: [{ field: "body", message: "요청 본문이 올바르지 않습니다." }],
    };
  }

  const name = asMember(raw.name, ANALYTICS_EVENT_NAMES);
  if (name === null) {
    errors.push({ field: "name", message: "이벤트 종류가 올바르지 않습니다." });
  }

  const pagePath = asString(raw.pagePath);
  if (pagePath === null || !pagePath.startsWith("/")) {
    errors.push({ field: "pagePath", message: "페이지 경로는 /로 시작해야 합니다." });
  }

  const device = raw.device === undefined ? "desktop" : asMember(raw.device, DEVICE_KINDS);
  if (device === null) {
    errors.push({ field: "device", message: "기기 구분이 올바르지 않습니다." });
  }

  const ctaIdRaw = raw.ctaId;
  const ctaId =
    ctaIdRaw === undefined || ctaIdRaw === null ? null : asString(ctaIdRaw);
  if (name === "cta_click" && ctaId === null) {
    errors.push({ field: "ctaId", message: "CTA 식별자가 필요합니다." });
  }

  if (errors.length > 0 || name === null || pagePath === null || device === null) {
    return { success: false, errors };
  }

  return { success: true, data: { name, pagePath, ctaId, device } };
}

/** 저장된 이벤트 레코드 검증 */
export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (!isRecord(raw)) return null;
  const id = asString(raw.id);
  const name = asMember(raw.name, ANALYTICS_EVENT_NAMES);
  const pagePath = asString(raw.pagePath);
  const occurredAt = asString(raw.occurredAt);
  const device = asMember(raw.device, DEVICE_KINDS) ?? "desktop";
  if (id === null || name === null || pagePath === null || occurredAt === null) {
    return null;
  }
  const ctaId = asString(raw.ctaId);
  return { id, name, pagePath, ctaId, device, occurredAt };
}

/** 후기 레코드 검증 */
export function parseTestimonial(raw: unknown): Testimonial | null {
  if (!isRecord(raw)) return null;
  const id = asString(raw.id);
  const quote = asString(raw.quote);
  const author = asString(raw.author);
  if (id === null || quote === null || author === null) return null;
  const ratingRaw = asNumber(raw.rating) ?? 5;
  const rating = Math.min(5, Math.max(1, Math.round(ratingRaw)));
  return {
    id,
    quote,
    author,
    role: asString(raw.role) ?? "",
    result: asString(raw.result) ?? "",
    rating,
    createdAt: asString(raw.createdAt) ?? new Date(0).toISOString(),
  };
}

/** 배열 입력을 항목 파서로 걸러낸다 */
export function parseList<T>(raw: unknown, parse: (item: unknown) => T | null): T[] {
  if (!Array.isArray(raw)) return [];
  const out: T[] = [];
  for (const item of raw) {
    const parsed = parse(item);
    if (parsed !== null) out.push(parsed);
  }
  return out;
}

/** CTA 이동 경로 검증 — 빈 값·외부 URL 로 튀는 것을 막는다 */
export function isSafeInternalHref(value: unknown): value is string {
  const href = asString(value);
  return href !== null && href.startsWith("/") && !href.startsWith("//");
}
