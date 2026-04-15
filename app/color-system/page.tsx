import ColorSystem from "@/content/04-color-system.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Color System — ScaryMoovies Brand System" };

export default function ColorSystemPage() {
  const { prev, next } = getPrevNext("/color-system");
  return (
    <article className="prose">
      <Breadcrumb section="Color System" />
      <ColorSystem />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
