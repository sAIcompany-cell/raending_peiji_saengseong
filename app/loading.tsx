import { Skeleton } from "@/components/ui/skeleton";

/** 라우트 전환 중 표시. 없으면 흰 화면이 그대로 보인다. */
export default function Loading() {
  return (
    <div data-cbv-src="app/loading.tsx:6" className="mx-auto w-full max-w-5xl px-4 py-12">
      <Skeleton className="h-8 w-56" />
      <div data-cbv-src="app/loading.tsx:8" className="mt-6 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div data-cbv-src="app/loading.tsx:13" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
