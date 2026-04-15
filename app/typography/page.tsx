import Typography from "@/content/05-typography.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Typography — ScaryMoovies Brand System" };

export default function TypographyPage() {
  const { prev, next } = getPrevNext("/typography");
  return (
    <article className="prose">
      <Breadcrumb section="Typography" />
      <Typography />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
