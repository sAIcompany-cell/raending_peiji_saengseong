import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 없는 주소. 없으면 Next 기본 흑백 404 가 뜬다. */
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="text-2xl font-semibold text-foreground">찾는 페이지가 없어요</h1>
      <p className="text-sm text-muted-foreground">
        주소가 바뀌었거나 삭제된 화면일 수 있어요.
      </p>
      {/* Button 은 asChild 를 지원하지 않는다(Radix 무의존) — variants 만 빌려 쓴다. */}
      <Link href="/" className={cn(buttonVariants(), "mt-2")}>
        처음으로
      </Link>
    </main>
  );
}
