import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * 지표 타일 — 숫자 하나 + 라벨. 브랜드 색은 숫자에만 쓴다.
 */
export function Stat({
  label,
  value,
  hint,
  icon,
  className,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-6 transition-colors hover:border-brand/40",
        className,
      )}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon ? <span className="text-brand">{icon}</span> : null}
        <span className="text-sm">{label}</span>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand">{value}</p>
      {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
