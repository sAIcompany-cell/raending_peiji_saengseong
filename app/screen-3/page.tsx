import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { ScreenHeader } from "@/components/features/screen-header";
import { SectionPanel, type SectionPoint } from "@/components/features/section-panel";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const points: SectionPoint[] = [
  {
    title: "가격을 쉽게 비교하세요",
    description: "여러 가구의 가격을 한눈에 살펴보고 합리적으로 선택하세요.",
  },
  {
    title: "내게 맞는 제품을 찾으세요",
    description: "원하는 조건과 가격을 함께 비교해 필요한 가구를 골라보세요.",
  },
  {
    title: "매장 방문을 줄이세요",
    description: "방문 전에 충분히 비교하고 더 편리하게 구매를 결정하세요.",
  },
];

export default function BenefitsPage() {
  const section = findSection(mockLandingPageSectionList, "section-benefits");

  return (
    <ScreenShell currentPath="/screen-3">
      <ScreenHeader title={section.title ?? ""} description={section.content} />
      <section data-cbv-src="app/screen-3/page.tsx:32" className="py-12 sm:py-16">
        <Container>
          <SectionPanel
            points={points}
            status="이런 점이 좋아요"
            actions={
              <Link
                href="/cta"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                계속
                <ArrowRight aria-hidden="true" />
              </Link>
            }
          />
        </Container>
      </section>
    </ScreenShell>
  );
}
