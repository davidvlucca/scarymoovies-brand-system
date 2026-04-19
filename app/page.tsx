import Link from "next/link";
import { Shield, Eye, Waves, Box } from "lucide-react";

export const metadata = { title: "Introduction — ScaryMoovies Brand System" };

const categories = [
  {
    title: "Brand Identity",
    href: "/brand-foundation",
    description: "Foundation, logo, and the principles behind ScaryMoovies.",
    icon: Shield,
  },
  {
    title: "Visual System",
    href: "/visual-language",
    description: "Visual language, color, typography, and iconography.",
    icon: Eye,
  },
  {
    title: "Voice & Motion",
    href: "/voice-and-tone",
    description: "Copywriting, tone, motion, and interaction patterns.",
    icon: Waves,
  },
  {
    title: "Components",
    href: "/components",
    description: "Component library and real-world usage examples.",
    icon: Box,
  },
];

export default function IntroductionPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-text-primary font-display">
          Brand System
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-[42ch]">
          The complete ScaryMoovies design language. Navigate the sections below.
        </p>
      </div>

      {/* Category card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map(({ title, href, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="category-card flex items-center gap-4 rounded-2xl p-5 transition-colors duration-150"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
              <Icon
                className="text-text-primary h-5 w-5"
                strokeWidth={1.75}
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold leading-tight text-text-primary">
                {title}
              </span>
              <span className="text-xs leading-snug text-text-secondary">
                {description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
