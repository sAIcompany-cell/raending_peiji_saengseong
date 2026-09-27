import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-cbv-src="components/ui/skeleton.tsx:5" className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
