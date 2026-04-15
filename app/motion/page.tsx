import Motion from "@/content/09-motion.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Motion — ScaryMoovies Brand System" };

export default function MotionPage() {
  const { prev, next } = getPrevNext("/motion");
  return (
    <article className="prose">
      <Breadcrumb section="Motion" />
      <Motion />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
