import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

/**
 * 화면 상단의 제목 영역 — 헤드라인 하나와 짧은 설명 한 줄만 둔다.
 */
export function ScreenHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <Container className="pt-12 pb-2 sm:pt-16">
      <div data-cbv-src="components/features/screen-header.tsx:20" className="flex flex-col gap-4">
        {eyebrow ? (
          <p data-cbv-src="components/features/screen-header.tsx:22" className="text-sm font-medium text-brand">{eyebrow}</p>
        ) : null}
        <h1 data-cbv-src="components/features/screen-header.tsx:24" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p data-cbv-src="components/features/screen-header.tsx:28" className="max-w-2xl text-base text-muted-foreground">{description}</p>
        ) : null}
        {actions ? <div data-cbv-src="components/features/screen-header.tsx:30" className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
      </div>
    </Container>
  );
}
