import Link from "next/link";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 상단 로고 (feat_fe253b445)
 * - 어떤 화면 크기에서도 잘리지 않도록 아이콘 + 텍스트로만 구성한다(외부 이미지 없음).
 * - 클릭하면 랜딩 시작 위치(/)로 이동한다.
 */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <div data-feat-id="feat_fe253b445" className={cn("shrink-0", className)}>
      <Link
        href="/"
        aria-label="가구비교 홈으로 이동"
        className="inline-flex items-center gap-2 rounded-md py-1 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground">
          <Layers className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
          가구비교
        </span>
      </Link>
    </div>
  );
}
