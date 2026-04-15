import UsageExamples from "@/content/10-usage-examples.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Usage Examples — ScaryMoovies Brand System" };

export default function UsageExamplesPage() {
  const { prev, next } = getPrevNext("/usage-examples");
  return (
    <article className="prose">
      <Breadcrumb section="Usage Examples" />
      <UsageExamples />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
