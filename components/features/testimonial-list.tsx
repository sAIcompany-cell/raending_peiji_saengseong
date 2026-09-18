"use client";

import * as React from "react";
import { AlertCircle, MessageSquareQuote, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Stagger, StaggerItem } from "@/components/motion";
import { listTestimonials } from "@/lib/api-client";
import type { Testimonial } from "@/types";

const INITIAL_COUNT = 3;

/**
 * 먼저 비교해 본 사람들의 이야기. 데이터를 직접 불러오고
 * 로딩·오류·빈 상태를 스스로 처리한다.
 */
export function TestimonialList({
  testimonials,
  title = "먼저 비교해 본 분들의 이야기",
  description = "매장을 덜 돌고도 원하는 가구를 고른 경험을 모았습니다.",
}: {
  testimonials?: Testimonial[];
  title?: string;
  description?: string;
}) {
  const [items, setItems] = React.useState<Testimonial[]>(testimonials ?? []);
  const [loading, setLoading] = React.useState(!testimonials);
  const [error, setError] = React.useState<string | null>(null);
  const [expanded, setExpanded] = React.useState(false);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await listTestimonials();
    if (result.ok) {
      setItems(result.data);
    } else {
      setError("후기를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (testimonials) return;
    void load();
  }, [testimonials, load]);

  const visible = expanded ? items : items.slice(0, INITIAL_COUNT);

  return (
    <section data-cbv-src="components/features/testimonial-list.tsx:54" data-feat-id="feat_feat-ff2f57" className="flex flex-col gap-6">
      <div data-cbv-src="components/features/testimonial-list.tsx:55" className="flex flex-col gap-2">
        <h2 data-cbv-src="components/features/testimonial-list.tsx:56" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p data-cbv-src="components/features/testimonial-list.tsx:59" className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>

      {loading ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:63" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((key) => (
            <Card key={key}>
              <CardContent className="flex flex-col gap-3 p-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:75"
          role="alert"
          className="flex flex-col items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/5 p-6"
        >
          <p data-cbv-src="components/features/testimonial-list.tsx:79" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <AlertCircle className="size-4 text-destructive" aria-hidden="true" />
            {error}
          </p>
          <Button variant="outline" size="sm" onClick={() => void load()}>
            다시 불러오기
          </Button>
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<MessageSquareQuote className="size-6" aria-hidden="true" />}
          title="아직 등록된 후기가 없습니다"
          description="먼저 가구를 비교해 보고 경험을 남겨 주세요."
          action={
            <Button variant="outline" size="sm" onClick={() => void load()}>
              다시 불러오기
            </Button>
          }
        />
      ) : (
        <>
          <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <Quote className="size-5 text-brand" aria-hidden="true" />
                    <blockquote data-cbv-src="components/features/testimonial-list.tsx:106" className="text-sm leading-relaxed text-foreground">
                      {item.quote}
                    </blockquote>
                    <div data-cbv-src="components/features/testimonial-list.tsx:109" className="mt-auto flex flex-wrap items-center gap-2">
                      <span data-cbv-src="components/features/testimonial-list.tsx:110" className="text-sm font-medium text-foreground">{item.author}</span>
                      <Badge variant="accent">{item.result}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          {items.length > INITIAL_COUNT ? (
            <div data-cbv-src="components/features/testimonial-list.tsx:120">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
              >
                {expanded ? "후기 접기" : `후기 ${items.length - INITIAL_COUNT}개 더 보기`}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
