import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ScreenNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  /** 현재 단계 / 전체 단계 */
  step?: { current: number; total: number };
}

/** 화면 사이를 오가는 이전·다음 이동과 진행 표시. */
export function ScreenNav({ prev, next, step }: ScreenNavProps) {
  const linkClass =
    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

  return (
    <nav
      aria-label="이전·다음 화면"
      className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-6"
    >
      <div className="min-w-0">
        {prev ? (
          <Link href={prev.href} className={linkClass}>
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="truncate">{prev.label}</span>
          </Link>
        ) : null}
      </div>

      {step ? (
        <div className="flex items-center gap-2" aria-label={`${step.total}단계 중 ${step.current}단계`}>
          {Array.from({ length: step.total }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={
                i < step.current
                  ? "h-1.5 w-6 rounded-full bg-brand"
                  : "h-1.5 w-6 rounded-full bg-muted"
              }
            />
          ))}
          <span className="ml-1 text-sm text-muted-foreground">
            {step.current}/{step.total}
          </span>
        </div>
      ) : null}

      <div className="min-w-0">
        {next ? (
          <Link href={next.href} className={linkClass}>
            <span className="truncate">{next.label}</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
