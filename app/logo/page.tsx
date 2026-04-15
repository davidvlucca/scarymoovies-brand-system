import Logo from "@/content/03-logo.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Logo — ScaryMoovies Brand System" };

export default function LogoPage() {
  const { prev, next } = getPrevNext("/logo");
  return (
    <article className="prose">
      <Breadcrumb section="Logo" />
      <Logo />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
