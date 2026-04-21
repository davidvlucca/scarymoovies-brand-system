import BrandFoundation from "@/content/02-brand-foundation.mdx";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Brand Foundation — ScaryMoovies Brand System" };

export default function BrandFoundationPage() {
  const { prev, next } = getPrevNext("/brand-foundation");
  return (
    <article className="prose editorial-grid">
      <BrandFoundation />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
