import VisualLanguage from "@/content/visual-language.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Visual Language — ScaryMoovies Brand System" };

export default function VisualLanguagePage() {
  const { prev, next } = getPrevNext("/visual-language");
  return (
    <article className="prose">
      <Breadcrumb section="Visual Language" />
      <VisualLanguage />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
