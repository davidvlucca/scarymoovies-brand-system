import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Aperture,
  Eye,
  Palette,
  Type,
  Grid2x2,
  Mic,
  Zap,
  MousePointer,
  Box,
  Monitor,
} from "lucide-react";

export const metadata = { title: "Introduction — ScaryMoovies Brand System" };

const navSections = [
  { title: "Brand Foundation", href: "/brand-foundation", description: "Values, personality, archetypes, and positioning.",            icon: Shield       },
  { title: "Logo",             href: "/logo",             description: "Wordmark, emblem, clearspace, and usage rules.",              icon: Aperture     },
  { title: "Visual Language",  href: "/visual-language",  description: "Dark cinematic aesthetic — what makes ScaryMoovies distinct.", icon: Eye          },
  { title: "Color System",     href: "/color-system",     description: "Full palette, semantic tokens, and accessibility.",            icon: Palette      },
  { title: "Typography",       href: "/typography",       description: "Fonts, scale, weights, and typographic rules.",                icon: Type         },
  { title: "Iconography",      href: "/iconography",      description: "Icon set, sizing, stroke, and usage guidelines.",             icon: Grid2x2      },
  { title: "Voice & Tone",     href: "/voice-and-tone",   description: "Copy, vocabulary, microcopy, and writing principles.",        icon: Mic          },
  { title: "Motion",           href: "/motion",           description: "Animation, easing, duration, and cinematic transitions.",     icon: Zap          },
  { title: "Interactions",     href: "/interactions",     description: "Hover states, filters, skeletons, and search flyout.",        icon: MousePointer },
  { title: "Components",       href: "/components",       description: "Full component library — buttons, cards, modals, and more.",  icon: Box          },
  { title: "Usage Examples",   href: "/usage-examples",   description: "Homepage, explore, profile, tier list, and Pick Your Fear.",  icon: Monitor      },
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

      {/* Section card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {navSections.map(({ title, href, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 rounded-2xl p-4 sm:p-4 bg-bg-surface hover:bg-bg-elevated active:bg-bg-elevated transition-colors duration-150"
          >
            <div className="flex h-12 w-12 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent">
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

      {/* Logo — signature watermark */}
      <div className="pt-4 flex justify-center">
        <Image
          src="/assets/logo-white.png"
          alt="ScaryMoovies"
          width={200}
          height={52}
          className="w-[160px] sm:w-[200px] h-auto opacity-[0.15]"
          style={{ objectFit: "contain" }}
          unoptimized
        />
      </div>
    </div>
  );
}
