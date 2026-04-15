import Components from "@/content/06-components.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Components — ScaryMoovies Brand System" };

export default function ComponentsPage() {
  const { prev, next } = getPrevNext("/components");
  return (
    <article className="prose">
      <Breadcrumb section="Components" />
      <Components />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
