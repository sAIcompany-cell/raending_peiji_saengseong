import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ScreenNavTarget = {
  href: string;
  label: string;
};

/**
 * 화면 사이 이동 — 이전/다음 화면이 있을 때만 그 방향을 보여준다.
 */
export function ScreenNav({
  prev,
  next,
}: {
  prev?: ScreenNavTarget;
  next?: ScreenNavTarget;
}) {
  if (!prev && !next) return null;

  return (
    <nav data-cbv-src="components/features/screen-nav.tsx:22"
      aria-label="화면 이동"
      className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {prev.label}
        </Link>
      ) : (
        <span data-cbv-src="components/features/screen-nav.tsx:35" aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="inline-flex items-center gap-2 rounded-md py-1 text-sm font-medium text-brand transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:ml-auto"
        >
          {next.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </nav>
  );
}
