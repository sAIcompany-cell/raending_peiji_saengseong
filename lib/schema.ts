import { z } from "zod";

export const landingPageSectionInputSchema = z
  .object({
    type: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    order: z.number().optional(),
  })
  .strict();

export type LandingPageSectionInput = z.infer<
  typeof landingPageSectionInputSchema
>;

export const testimonialInputSchema = z
  .object({
    quote: z.string().optional(),
    author: z.string().optional(),
    result: z.string().optional(),
  })
  .strict();

export type TestimonialInput = z.infer<typeof testimonialInputSchema>;

export const analyticsEventInputSchema = z
  .object({
    name: z.string().optional(),
    pagePath: z.string().optional(),
    occurredAt: z.string().datetime().optional(),
  })
  .strict();

export type AnalyticsEventInput = z.infer<typeof analyticsEventInputSchema>;

/** 섹션 추가 요청(고객 후기·FAQ 섹션 추가) — 어느 화면에 붙일지만 받는다. */
export const sectionAddRequestSchema = z
  .object({
    pagePath: z.string().min(1).optional(),
    title: z.string().optional(),
  })
  .strict();

export type SectionAddRequest = z.infer<typeof sectionAddRequestSchema>;

/** 후기 판정 요청 — 본문은 비어 있을 수 있다. */
export const testimonialDecisionInputSchema = z
  .object({
    note: z.string().optional(),
  })
  .strict();

export type TestimonialDecisionInput = z.infer<typeof testimonialDecisionInputSchema>;

/** CTA 수정 — 라벨·목적지만 바꿀 수 있다. */
export const ctaUpdateSchema = z
  .object({
    label: z.string().min(1).optional(),
    destination: z.string().min(1).optional(),
  })
  .strict();

export type CtaUpdateInput = z.infer<typeof ctaUpdateSchema>;
