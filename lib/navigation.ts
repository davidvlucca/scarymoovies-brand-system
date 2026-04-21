export interface SectionEntry {
  title: string;
  href: string;
  keywords: string;
}

export interface SectionGroup {
  label: string;
  sections: SectionEntry[];
}

export const sectionGroups: SectionGroup[] = [
  {
    label: "Brand Identity",
    sections: [
      { title: "Introduction",     href: "/",                keywords: "overview mission vision platform pillars what is scarymoovies" },
      { title: "Brand Foundation", href: "/brand-foundation", keywords: "values personality archetype promise positioning brand personas" },
      { title: "Logo",             href: "/logo",            keywords: "wordmark emblem clearspace variants black white minimum size" },
    ],
  },
  {
    label: "Visual System",
    sections: [
      { title: "Visual Language",  href: "/visual-language", keywords: "aesthetic dark cinematic horror grain atmospheric moodboard dread philosophy why not generic" },
      { title: "Color System",     href: "/color-system",    keywords: "palette tokens purple red black white hex semantic accessibility" },
      { title: "Typography",       href: "/typography",      keywords: "fonts inter fraunces scale weights line height tracking" },
      { title: "Iconography",      href: "/iconography",     keywords: "icons lucide react size stroke weight usage rules core icon set" },
    ],
  },
  {
    label: "Voice & Motion",
    sections: [
      { title: "Voice & Tone",     href: "/voice-and-tone",  keywords: "copy writing tone vocabulary microcopy voice" },
      { title: "Motion",           href: "/motion",          keywords: "animation duration easing transitions reduced motion cinematic" },
      { title: "Interactions",     href: "/interactions",    keywords: "hover states animations filters genre mood skeleton search flyout" },
    ],
  },
  {
    label: "Components",
    sections: [
      { title: "Components",       href: "/components",      keywords: "buttons forms navbar tier list movie poster card PYF pick your fear review modal dropdown search" },
      { title: "Usage Examples",   href: "/usage-examples",  keywords: "homepage explore profile tier list pick your fear screens collections" },
    ],
  },
];

export const sections: SectionEntry[] = sectionGroups.flatMap((g) => g.sections);

export type Section = SectionEntry;

export function getPrevNext(href: string): {
  prev: Section | null;
  next: Section | null;
} {
  const idx = sections.findIndex((s) => s.href === href);
  return {
    prev: idx > 0 ? sections[idx - 1] : null,
    next: idx < sections.length - 1 ? sections[idx + 1] : null,
  };
}

export function getGroupFor(href: string): string | null {
  const group = sectionGroups.find((g) => g.sections.some((s) => s.href === href));
  return group?.label ?? null;
}
