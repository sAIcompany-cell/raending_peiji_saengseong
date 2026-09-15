"use client";

import { useEffect, useState } from "react";
import { Quote, ThumbsUp, Check, MessageSquare, AlertCircle } from "lucide-react";
import type { Testimonial } from "@/types";
import { decideTestimonial, listTestimonials } from "@/lib/api-client";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";

interface TestimonialListProps {
  /** 미리 받은 후기. 없으면 스스로 불러온다. */
  items?: Testimonial[];
  /** 몇 개까지 보일지 */
  limit?: number;
}

/** 가격 비교·매장 방문 부담을 줄인 사용자 후기 목록. */
export function TestimonialList({ items, limit }: TestimonialListProps) {
  const [data, setData] = useState<Testimonial[] | null>(items ?? null);
  const [error, setError] = useState<string | null>(null);
  const [helpful, setHelpful] = useState<Record<string, "pending" | "done">>({});

  useEffect(() => {
    if (items) {
      setData(items);
      return;
    }
    let cancelled = false;
    listTestimonials().then((res) => {
      if (cancelled) return;
      if (res.ok) setData(res.data);
      else setError(res.error);
    });
    return () => {
      cancelled = true;
    };
  }, [items]);

  async function markHelpful(id: string) {
    setHelpful((s) => ({ ...s, [id]: "pending" }));
    const res = await decideTestimonial(id);
    if (res.ok) {
      setHelpful((s) => ({ ...s, [id]: "done" }));
    } else {
      setHelpful((s) => {
        const next = { ...s };
        delete next[id];
        return next;
      });
      setError(res.error);
    }
  }

  const visible = limit && data ? data.slice(0, limit) : data;

  return (
    <div data-feat-id="feat_feat-ff2f57" className="flex flex-col gap-[var(--density-gap)]">
      {error ? (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-border bg-muted p-4 text-sm text-foreground"
        >
          <AlertCircle aria-hidden="true" className="size-4 shrink-0 text-brand" />
          후기를 처리하지 못했어요. 잠시 후 다시 시도해 주세요. ({error})
        </p>
      ) : null}

      {visible === null ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      ) : visible.length === 0 ? (
        <EmptyState
          icon={<MessageSquare className="size-8" />}
          title="아직 등록된 후기가 없어요"
          description="매장에 가기 전 가격을 비교한 분들의 이야기가 곧 채워져요."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => {
            const id = t.id ?? t.author ?? "";
            const state = helpful[id];
            return (
              <StaggerItem key={id}>
                <Card className="flex h-full flex-col">
                  <CardContent className="flex flex-1 flex-col gap-4 p-6">
                    <Quote aria-hidden="true" className="size-5 text-brand" />
                    <p className="text-base leading-relaxed text-foreground">
                      {t.quote}
                    </p>
                    {t.result ? (
                      <Badge variant="accent" className="w-fit">
                        <Check aria-hidden="true" className="mr-1 size-3" />
                        {t.result}
                      </Badge>
                    ) : null}
                    <p className="mt-auto text-sm text-muted-foreground">
                      {t.author}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={state !== undefined}
                      onClick={() => markHelpful(id)}
                      className="focus-visible:ring-brand"
                    >
                      {state === "done" ? (
                        <>
                          <Check aria-hidden="true" /> 도움이 됐어요
                        </>
                      ) : (
                        <>
                          <ThumbsUp aria-hidden="true" />
                          {state === "pending" ? "보내는 중…" : "이 후기가 도움이 됐어요"}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </div>
  );
}
