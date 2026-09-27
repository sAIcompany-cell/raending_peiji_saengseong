"use client";

import { useEffect, useState } from "react";
import { CircleAlert, MessageSquareQuote, Quote, RefreshCw } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { listTestimonials } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

/**
 * 사용자 후기 목록 (feat_feat-ff2f57) — 평가(quote)와 결과(result)를 함께 보여 준다.
 * items 를 주입하면 그대로 그리고, 없으면 스스로 불러온다.
 */
export function TestimonialList({
  items,
  heading = "먼저 비교해 본 분들의 이야기",
  limit,
  className,
}: {
  items?: Testimonial[];
  heading?: string;
  limit?: number;
  className?: string;
}) {
  const [data, setData] = useState<Testimonial[] | null>(items ?? null);
  const [loading, setLoading] = useState(!items);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (items) {
      setData(items);
      setLoading(false);
      return;
    }
    let alive = true;
    setLoading(true);
    listTestimonials()
      .then((result) => {
        if (!alive) return;
        if (result.ok) {
          setData(result.data);
          setError(null);
        } else {
          setError(result.error);
        }
      })
      .catch(() => alive && setError("후기를 불러오지 못했어요."))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [items, reloadKey]);

  const visible = (data ?? []).slice(0, limit ?? undefined);

  return (
    <section data-cbv-src="components/features/testimonial-list.tsx:63" data-feat-id="feat_feat-ff2f57" className={cn("flex flex-col gap-[var(--density-gap)] py-12", className)}>
      <div data-cbv-src="components/features/testimonial-list.tsx:64" className="flex items-center gap-3">
        <span data-cbv-src="components/features/testimonial-list.tsx:65" className="inline-flex size-9 items-center justify-center rounded-lg bg-muted text-brand">
          <MessageSquareQuote className="size-4" aria-hidden="true" />
        </span>
        <h2 data-cbv-src="components/features/testimonial-list.tsx:68" className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{heading}</h2>
      </div>

      {loading ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:72" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-44 rounded-lg" />
          ))}
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:78" role="alert" className="flex flex-col items-start gap-3 rounded-lg border border-border p-6">
          <p data-cbv-src="components/features/testimonial-list.tsx:79" className="inline-flex items-center gap-2 text-sm text-destructive">
            <CircleAlert className="size-4" aria-hidden="true" />
            {error}
          </p>
          <Button variant="outline" size="sm" onClick={() => setReloadKey((k) => k + 1)}>
            <RefreshCw aria-hidden="true" />
            다시 불러오기
          </Button>
        </div>
      ) : visible.length === 0 ? (
        <EmptyState
          icon={<MessageSquareQuote className="size-6" aria-hidden="true" />}
          title="아직 등록된 후기가 없어요"
          description="먼저 비교해 본 분들의 이야기가 모이면 여기에 보여 드릴게요."
          action={
            <Button variant="outline" size="sm" onClick={() => setReloadKey((k) => k + 1)}>
              <RefreshCw aria-hidden="true" />
              다시 확인하기
            </Button>
          }
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <StaggerItem key={item.id ?? i}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <Quote className="size-5 text-brand" aria-hidden="true" />
                  <blockquote data-cbv-src="components/features/testimonial-list.tsx:107" className="flex-1 text-base leading-relaxed text-foreground">{item.quote}</blockquote>
                  <div data-cbv-src="components/features/testimonial-list.tsx:108" className="flex flex-col gap-2">
                    {item.result ? (
                      <Badge variant="outline" className="w-fit border-brand text-brand">
                        {item.result}
                      </Badge>
                    ) : null}
                    {item.author ? <p data-cbv-src="components/features/testimonial-list.tsx:114" className="text-sm text-muted-foreground">{item.author}</p> : null}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
