import Iconography from "@/content/iconography.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Iconography — ScaryMoovies Brand System" };

export default function IconographyPage() {
  const { prev, next } = getPrevNext("/iconography");
  return (
    <article className="prose">
      <Breadcrumb section="Iconography" />
      <Iconography />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
