"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { validateTestimonialInput } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { TestimonialInput, TestimonialRating } from "@/types";

interface TestimonialFormProps {
  /** 검증을 통과한 입력을 전달한다. 실패 시 오류 문구를 돌려준다. */
  onSubmit: (input: TestimonialInput) => Promise<{ ok: true } | { ok: false; error: string }> | void;
  className?: string;
}

export function TestimonialForm({ onSubmit, className }: TestimonialFormProps) {
  const [rating, setRating] = useState<TestimonialRating>(5);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const validation = validateTestimonialInput({
      quote: data.get("quote"),
      author: data.get("author"),
      authorContext: data.get("authorContext"),
      result: data.get("result"),
      rating,
    });
    if (!validation.ok) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const outcome = await onSubmit(validation.value);
    setSubmitting(false);
    if (outcome && !outcome.ok) {
      setErrors({ _form: outcome.error });
      return;
    }
    setDone(true);
    form.reset();
    setRating(5);
  }

  return (
    <div data-feat-id="feat_feat-983bc01b" className={className}>
      <Card>
        <CardHeader className="p-6 pb-2">
          <CardTitle className="font-heading text-xl">비교해 본 경험을 남겨 주세요</CardTitle>
          <CardDescription>가격 비교나 매장 방문이 어떻게 달라졌는지 짧게 적어 주세요.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-4">
          {done ? (
            <div className="flex flex-col items-start gap-3" role="status">
              <p className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="size-5 text-brand" aria-hidden="true" />
                후기를 접수했어요. 검토 후 화면에 표시됩니다.
              </p>
              <Button variant="outline" size="sm" onClick={() => setDone(false)}>
                후기 더 남기기
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="quote">후기</Label>
                <Textarea id="quote" name="quote" rows={4} placeholder="예: 소파 후보 가격을 먼저 비교하고 매장은 한 번만 갔어요." aria-invalid={Boolean(errors.quote)} />
                {errors.quote ? <p role="alert" className="text-sm text-destructive">{errors.quote}</p> : null}
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="author">이름</Label>
                  <Input id="author" name="author" placeholder="표시할 이름" aria-invalid={Boolean(errors.author)} />
                  {errors.author ? <p role="alert" className="text-sm text-destructive">{errors.author}</p> : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="authorContext">구매 상황</Label>
                  <Input id="authorContext" name="authorContext" placeholder="예: 신혼 거실 가구 구매" aria-invalid={Boolean(errors.authorContext)} />
                  {errors.authorContext ? <p role="alert" className="text-sm text-destructive">{errors.authorContext}</p> : null}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="result">달라진 점</Label>
                <Input id="result" name="result" placeholder="예: 매장 방문 4회에서 1회로 감소" aria-invalid={Boolean(errors.result)} />
                {errors.result ? <p role="alert" className="text-sm text-destructive">{errors.result}</p> : null}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground" id="rating-label">별점</span>
                <div role="radiogroup" aria-labelledby="rating-label" className="flex items-center gap-1">
                  {([1, 2, 3, 4, 5] as TestimonialRating[]).map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n}점`}
                      onClick={() => setRating(n)}
                      className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <Star aria-hidden="true" className={cn("size-6", n <= rating ? "fill-brand text-brand" : "text-border")} />
                    </button>
                  ))}
                </div>
                {errors.rating ? <p role="alert" className="text-sm text-destructive">{errors.rating}</p> : null}
              </div>
              {errors._form ? (
                <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="size-4" aria-hidden="true" />
                  {errors._form}
                </p>
              ) : null}
              <div>
                <Button type="submit" disabled={submitting} className="focus-visible:ring-brand">
                  {submitting ? "보내는 중…" : "후기 남기기"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
