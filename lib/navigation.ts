export const sections = [
  { num: "01", title: "Introduction",     href: "/" },
  { num: "02", title: "Brand Foundation", href: "/brand-foundation" },
  { num: "03", title: "Logo",             href: "/logo" },
  { num: "04", title: "Color System",     href: "/color-system" },
  { num: "05", title: "Typography",       href: "/typography" },
  { num: "06", title: "Components",       href: "/components" },
  { num: "07", title: "Interactions",     href: "/interactions" },
  { num: "08", title: "Voice & Tone",     href: "/voice-and-tone" },
  { num: "09", title: "Motion",           href: "/motion" },
  { num: "10", title: "Usage Examples",   href: "/usage-examples" },
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
