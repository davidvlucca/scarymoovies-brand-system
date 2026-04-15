import Introduction from "@/content/01-introduction.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Introduction — ScaryMoovies Brand System" };

export default function IntroductionPage() {
  const { prev, next } = getPrevNext("/");
  return (
    <article className="prose">
      <Breadcrumb section="Introduction" />
      <Introduction />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
