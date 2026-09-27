"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** 자주 묻는 질문 (feat_feat-f038b237) — 제품 맥락의 질문·답만 담고 수치·가격은 말하지 않는다. */
export const DEFAULT_FAQ: FaqItem[] = [
  {
    id: "faq-what",
    question: "무엇을 비교할 수 있나요?",
    answer: "원하는 가구의 가격과 필요한 조건을 한곳에서 나란히 살펴볼 수 있어요.",
  },
  {
    id: "faq-visit",
    question: "매장에 가지 않아도 되나요?",
    answer: "방문 전에 후보를 충분히 좁힐 수 있어요. 마지막 확인이 필요할 때만 매장을 찾으면 됩니다.",
  },
  {
    id: "faq-start",
    question: "어떻게 시작하나요?",
    answer: "무료로 시작하기를 누르고 찾고 있는 가구와 원하는 조건을 알려 주세요.",
  },
];

export function FaqList({
  items = DEFAULT_FAQ,
  heading = "자주 묻는 질문",
  className,
}: {
  items?: FaqItem[];
  heading?: string;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section data-feat-id="feat_feat-f038b237" className={cn("flex flex-col gap-[var(--density-gap)] py-12", className)}>
      <FadeIn>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-muted text-brand">
            <HelpCircle className="size-4" aria-hidden="true" />
          </span>
          <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{heading}</h2>
        </div>
      </FadeIn>

      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">궁금한 점이 생기면 무료로 시작하기를 눌러 바로 물어보세요.</p>
      ) : (
        <FadeIn delay={0.08}>
          <ul className="divide-y divide-border rounded-lg border border-border">
            {items.map((item) => {
              const open = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn("size-4 shrink-0 text-brand transition-transform duration-200", open && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={panelId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      )}
    </section>
  );
}
