import VoiceAndTone from "@/content/08-voice-and-tone.mdx";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageNav } from "@/components/layout/page-nav";
import { getPrevNext } from "@/lib/navigation";

export const metadata = { title: "Voice & Tone — ScaryMoovies Brand System" };

export default function VoiceAndTonePage() {
  const { prev, next } = getPrevNext("/voice-and-tone");
  return (
    <article className="prose">
      <Breadcrumb section="Voice & Tone" />
      <VoiceAndTone />
      <PageNav prev={prev} next={next} />
    </article>
  );
}
