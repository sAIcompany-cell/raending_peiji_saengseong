import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface ScreenHeaderProps {
  /** 사용자에게 말하는 한 문장(헤드라인) */
  title: string;
  /** 부제 — 불편과 해결을 짧게 */
  description?: string;
  /** 현재 단계 표시 등 오른쪽에 올 요소 */
  aside?: ReactNode;
}

/** 화면 상단의 큰 제목 + 짧은 문장. 화면당 하나의 메시지만 전달한다. */
export function ScreenHeader({ title, description, aside }: ScreenHeaderProps) {
  return (
    <div data-cbv-src="components/features/screen-header.tsx:16" className="border-b border-border bg-background">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16">
        <div data-cbv-src="components/features/screen-header.tsx:18" className="flex max-w-3xl flex-col gap-4">
          <h1 data-cbv-src="components/features/screen-header.tsx:19" className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p data-cbv-src="components/features/screen-header.tsx:23" className="text-base leading-relaxed text-muted-foreground sm:text-xl">
              {description}
            </p>
          ) : null}
        </div>
        {aside ? <div data-cbv-src="components/features/screen-header.tsx:28" className="shrink-0">{aside}</div> : null}
      </Container>
    </div>
  );
}
