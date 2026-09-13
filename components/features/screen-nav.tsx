import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * 화면 하단 이동 블록 — 이전/다음 섹션 화면으로 넘어간다.
 */
export function ScreenNav({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  if (!prev && !next) return null;

  return (
    <nav data-cbv-src="components/features/screen-nav.tsx:17"
      aria-label="섹션 화면 이동"
      className="flex flex-col gap-3 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          {prev.label}
        </Link>
      ) : (
        <span data-cbv-src="components/features/screen-nav.tsx:30" aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-brand transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {next.label}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      ) : null}
    </nav>
  );
}
