import { ChevronDown, CircleHelp } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "어떤 기준으로 가구를 비교하나요?",
    answer: "필요한 가구와 원하는 조건을 기준으로 여러 제품의 가격을 한눈에 비교해 볼 수 있어요.",
  },
  {
    question: "매장에 가지 않아도 되나요?",
    answer: "방문 전에 충분히 비교해 후보를 추려 두면, 여러 매장을 오가는 수고를 줄일 수 있어요.",
  },
  {
    question: "시작하는 데 비용이 드나요?",
    answer: "무료로 시작할 수 있어요. 지금 바로 원하는 가구부터 비교해 보세요.",
  },
];

export function FaqList({
  items = DEFAULT_FAQ,
  className,
}: {
  items?: FaqItem[];
  className?: string;
}) {
  return (
    <section data-cbv-src="components/features/faq-list.tsx:33"
      data-feat-id="feat_feat-f038b237"
      aria-labelledby="faq-heading"
      className={cn("flex flex-col gap-6 py-12", className)}
    >
      <FadeIn>
        <h2 data-cbv-src="components/features/faq-list.tsx:39"
          id="faq-heading"
          className="flex items-center gap-2 font-heading text-xl font-semibold text-foreground"
        >
          <CircleHelp className="h-5 w-5 text-brand" aria-hidden="true" />
          자주 묻는 질문
        </h2>
      </FadeIn>
      <Stagger className="flex flex-col gap-3">
        {items.map((item) => (
          <StaggerItem key={item.question}>
            <details data-cbv-src="components/features/faq-list.tsx:50" className="group rounded-lg border border-border bg-background p-5 transition-colors hover:bg-muted/50 open:bg-muted/40">
              <summary data-cbv-src="components/features/faq-list.tsx:51" className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-base font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span data-cbv-src="components/features/faq-list.tsx:52" className="break-keep">{item.question}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p data-cbv-src="components/features/faq-list.tsx:58" className="mt-3 text-sm leading-relaxed break-keep text-muted-foreground">
                {item.answer}
              </p>
            </details>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
