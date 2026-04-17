export const sections = [
  { num: "01", title: "Introduction",     href: "/",               keywords: "overview mission vision platform pillars what is scarymoovies" },
  { num: "02", title: "Brand Foundation", href: "/brand-foundation", keywords: "values personality archetype promise positioning brand" },
  { num: "03", title: "Logo",             href: "/logo",            keywords: "wordmark emblem clearspace variants black white minimum size" },
  { num: "VL", title: "Visual Language",  href: "/visual-language", keywords: "aesthetic dark cinematic horror grain atmospheric moodboard dread philosophy why not generic" },
  { num: "04", title: "Color System",     href: "/color-system",    keywords: "palette tokens purple red black white hex semantic accessibility" },
  { num: "05", title: "Typography",       href: "/typography",      keywords: "fonts inter playfair scale weights line height tracking" },
  { num: "06", title: "Components",       href: "/components",      keywords: "buttons forms navbar tier list movie poster card PYF pick your fear" },
  { num: "IC", title: "Iconography",      href: "/iconography",     keywords: "icons lucide react size stroke weight usage rules core icon set" },
  { num: "07", title: "Interactions",     href: "/interactions",    keywords: "hover states animations filters genre mood skeleton search flyout" },
  { num: "08", title: "Voice & Tone",     href: "/voice-and-tone",  keywords: "copy writing tone vocabulary microcopy voice" },
  { num: "09", title: "Motion",           href: "/motion",          keywords: "animation duration easing transitions reduced motion cinematic" },
  { num: "10", title: "Usage Examples",   href: "/usage-examples",  keywords: "homepage explore profile tier list pick your fear screens" },
] as const;

export type Section = (typeof sections)[number];

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
