import Interactions from "@/content/07-interactions.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Interactions — ScaryMoovies Brand System" };

export default function InteractionsPage() {
  const { prev, next } = getPrevNext("/interactions");
  return (
    <article className="prose">
      <Breadcrumb section="Interactions" />
      <Interactions />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
